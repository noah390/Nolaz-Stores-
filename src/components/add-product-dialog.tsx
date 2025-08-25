
'use client';

import { useState } from 'react';
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
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Loader2 } from 'lucide-react';

const productSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.coerce.number().min(0, 'Price must be non-negative'),
  category: z.string().min(1, 'Category is required'),
  stock: z.coerce.number().int().min(0, 'Stock must be a non-negative integer'),
  image: z.any()
    .refine((files) => files?.length === 1, 'Image is required.')
});

type ProductFormData = z.infer<typeof productSchema>;

interface AddProductDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onProductAdded: () => void;
}

export function AddProductDialog({ isOpen, setIsOpen, onProductAdded }: AddProductDialogProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ProductFormData) => {
    setIsSubmitting(true);
    try {
      const storage = getStorage();
      const imageFile = data.image[0];
      const storageRef = ref(storage, `products/${Date.now()}_${imageFile.name}`);
      
      const snapshot = await uploadBytes(storageRef, imageFile);
      const imageUrl = await getDownloadURL(snapshot.ref);

      await addDoc(collection(db, 'products'), {
        name: data.name,
        description: data.description,
        price: data.price,
        category: data.category,
        stock: data.stock,
        image: imageUrl,
        dataAiHint: `${data.category.toLowerCase()} ${data.name.toLowerCase().split(' ').slice(0,1).join('')}`,
      });

      toast({
        title: 'Product Added!',
        description: `${data.name} has been successfully added to your store.`,
      });
      
      reset();
      onProductAdded();
      setIsOpen(false);
    } catch (error) {
      console.error('Error adding product:', error);
      toast({
        title: 'Error',
        description: 'Failed to add the product. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogDescription>Fill out the form below to add a new product to your store.</DialogDescription>
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
            <Label htmlFor="image">Product Image</Label>
            <Input id="image" type="file" accept="image/*" {...register('image')} />
            {errors.image && <p className="text-sm text-destructive">{errors.image.message as string}</p>}
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setIsOpen(false)} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Add Product
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
