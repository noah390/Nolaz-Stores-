
'use client';

import { useState, useEffect, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProduct } from '@/app/actions';
import { Product } from '@/lib/types';
import { Loader2 } from 'lucide-react';

const productSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.coerce.number().min(0, 'Price must be non-negative'),
  category: z.string().min(1, 'Category is required'),
  stock: z.coerce.number().int().min(0, 'Stock must be a non-negative integer'),
  image: z.any().optional(),
});

type ProductFormData = z.infer<typeof productSchema>;

interface EditProductDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  product: Product;
  onProductUpdated: () => void;
}

export function EditProductDialog({ isOpen, setIsOpen, product, onProductUpdated }: EditProductDialogProps) {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });
  const { toast } = useToast();

  useEffect(() => {
    if (product) {
      reset({
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        stock: product.stock,
      });
    }
  }, [product, reset]);

  const onSubmit = (data: ProductFormData) => {
    startTransition(async () => {
      try {
        let imageUrl = product.image;
        const imageFile = data.image?.[0];

        if (imageFile) {
          const storage = getStorage();
          const storageRef = ref(storage, `products/${Date.now()}_${imageFile.name}`);
          const snapshot = await uploadBytes(storageRef, imageFile);
          imageUrl = await getDownloadURL(snapshot.ref);
        }

        const productUpdateData: Partial<Product> = {
          ...data,
          image: imageUrl,
        };
        
        const result = await updateProduct(product.id, productUpdateData);

        if(result.success) {
          toast({
              title: 'Product Updated!',
              description: `${data.name} has been successfully updated.`,
          });
          onProductUpdated();
          setIsOpen(false);
        } else {
           toast({
              title: 'Error',
              description: result.message,
              variant: 'destructive',
          });
        }
      } catch (error) {
        console.error('Error updating product:', error);
        toast({
          title: 'Error',
          description: 'Failed to update the product. Please try again.',
          variant: 'destructive',
        });
      }
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>Update the details for &quot;{product.name}&quot; below.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" {...register('name')} />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" {...register('description')} />
             {errors.description && <p className="text-sm text-destructive">{errors.description.message}</p>}
          </div>
           <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input id="price" type="number" step="0.01" {...register('price')} />
              {errors.price && <p className="text-sm text-destructive">{errors.price.message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Input id="category" {...register('category')} />
              {errors.category && <p className="text-sm text-destructive">{errors.category.message}</p>}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="stock">Stock Quantity</Label>
            <Input id="stock" type="number" {...register('stock')} />
             {errors.stock && <p className="text-sm text-destructive">{errors.stock.message}</p>}
          </div>
           <div className="grid gap-2">
            <Label htmlFor="image">Change Product Image (optional)</Label>
            <Input id="image" type="file" accept="image/*" {...register('image')} />
            {errors.image && <p className="text-sm text-destructive">{errors.image.message as string}</p>}
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)} disabled={isPending}>
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
