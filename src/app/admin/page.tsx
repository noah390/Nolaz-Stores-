
'use client';

import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { PlusCircle, Loader2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { AddProductDialog } from '@/components/add-product-dialog';
import { products as predefinedProducts } from '@/lib/products';
import { addPredefinedProduct, deleteProduct } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';
import { EditProductDialog } from '@/components/edit-product-dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


export default function AdminPage() {
  const { user, isAdmin, loading } = useAuth();
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();


  const fetchProducts = async () => {
    setIsLoadingProducts(true);
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Product[];
      setProducts(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
      toast({
        title: 'Error',
        description: 'Could not fetch products from the database.',
        variant: 'destructive',
      });
    } finally {
      setIsLoadingProducts(false);
    }
  };

  useEffect(() => {
    if (!loading) {
      if (user && isAdmin) {
        fetchProducts();
      } else if (user && !isAdmin) {
        router.push('/login?error=unauthorized');
      } else if (!user) {
        router.push('/login');
      }
    }
  }, [user, isAdmin, loading, router]);
  
  const handleAddPredefinedProduct = async (product: Omit<Product, 'id'>) => {
    setIsSubmitting(true);
    const result = await addPredefinedProduct(product);
    if (result.success) {
      toast({
        title: 'Product Added!',
        description: result.message,
      });
      await fetchProducts(); // Refresh the product list
    } else {
      toast({
        title: 'Error',
        description: result.message,
        variant: 'destructive',
      });
    }
    setIsSubmitting(false);
  };

  const handleEditClick = (product: Product) => {
    setSelectedProduct(product);
    setIsEditDialogOpen(true);
  };

  const handleDeleteProduct = async (productId: string) => {
     setIsSubmitting(true);
     const result = await deleteProduct(productId);
     if (result.success) {
       toast({
         title: 'Product Deleted!',
         description: result.message,
       });
       await fetchProducts(); // Refresh the product list
     } else {
       toast({
         title: 'Error',
         description: result.message,
         variant: 'destructive',
       });
     }
     setIsSubmitting(false);
  };

  const handleRevokePredefinedProduct = async (productName: string) => {
    const productToDelete = products.find(p => p.name === productName);
    if (productToDelete) {
      await handleDeleteProduct(productToDelete.id);
    } else {
       toast({
        title: 'Error',
        description: 'Could not find the product to revoke.',
        variant: 'destructive',
      });
    }
  };


  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin" />
      </div>
    );
  }


  return (
    <>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <div className="container mx-auto grid gap-8 px-4 py-8 md:py-12">
              <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle>Your Store Products</CardTitle>
                      <CardDescription>Manage the products currently in your database.</CardDescription>
                    </div>
                    <Button onClick={() => setIsAddDialogOpen(true)}>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add Custom Product
                    </Button>
                  </CardHeader>
                  <CardContent>
                      {isLoadingProducts ? (
                        <div className="space-y-4">
                          <Skeleton className="h-12 w-full" />
                          <Skeleton className="h-12 w-full" />
                          <Skeleton className="h-12 w-full" />
                        </div>
                      ) : (
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead className="w-[80px]">Image</TableHead>
                              <TableHead>Name</TableHead>
                              <TableHead>Category</TableHead>
                              <TableHead>Price</TableHead>
                              <TableHead>Stock</TableHead>
                              <TableHead>Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {products.map((product) => (
                              <TableRow key={product.id}>
                                <TableCell>
                                  <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={50}
                                    height={50}
                                    className="rounded-md object-cover"
                                  />
                                </TableCell>
                                <TableCell className="font-medium">{product.name}</TableCell>
                                <TableCell>
                                  <Badge variant="outline">{product.category}</Badge>
                                </TableCell>
                                <TableCell>₦{product.price.toFixed(2)}</TableCell>
                                <TableCell>{product.stock}</TableCell>
                                <TableCell>
                                  <Button variant="outline" size="sm" className="mr-2" onClick={() => handleEditClick(product)}>Edit</Button>
                                   <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                      <Button variant="destructive" size="sm">Delete</Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                      <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                          This action cannot be undone. This will permanently delete the
                                          product from your store.
                                        </AlertDialogDescription>
                                      </AlertDialogHeader>
                                      <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction
                                          onClick={() => handleDeleteProduct(product.id)}
                                          disabled={isSubmitting}
                                        >
                                          {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Delete'}
                                        </AlertDialogAction>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>
                                  </AlertDialog>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      )}
                  </CardContent>
              </Card>

              <Separator />

              <Card>
                <CardHeader>
                  <CardTitle>Add Sample Products</CardTitle>
                  <CardDescription>Quickly populate your store by adding pre-defined sample products.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {predefinedProducts.map((product) => {
                    const isInStore = products.some(p => p.name === product.name);
                    return (
                     <Card key={product.id} className="flex flex-col">
                      <CardHeader className="p-4">
                         <div className="aspect-square relative w-full">
                           <Image src={product.image} alt={product.name} fill className="rounded-md object-cover" />
                         </div>
                       </CardHeader>
                       <CardContent className="flex-grow p-4 pt-0">
                         <h3 className="font-semibold">{product.name}</h3>
                         <p className="text-sm text-muted-foreground">{product.category}</p>
                         <p className="mt-2 text-lg font-bold">₦{product.price.toFixed(2)}</p>
                       </CardContent>
                       <CardFooter className="p-4 pt-0">
                          {isInStore ? (
                             <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button variant="destructive" className="w-full" disabled={isSubmitting}>
                                      Revoke
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      This will remove &quot;{product.name}&quot; from your live store.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction
                                      onClick={() => handleRevokePredefinedProduct(product.name)}
                                      disabled={isSubmitting}
                                    >
                                      {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Revoke'}
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                          ) : (
                             <Button
                              className="w-full"
                              onClick={() => handleAddPredefinedProduct(product)}
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Add to Store'}
                            </Button>
                          )}
                       </CardFooter>
                     </Card>
                    );
                  })}
                </CardContent>
              </Card>

          </div>
        </main>
        <SiteFooter />
      </div>
       <AddProductDialog
        isOpen={isAddDialogOpen}
        setIsOpen={setIsAddDialogOpen}
        onProductAdded={fetchProducts}
      />
      {selectedProduct && (
        <EditProductDialog
          isOpen={isEditDialogOpen}
          setIsOpen={setIsEditDialogOpen}
          product={selectedProduct}
          onProductUpdated={() => {
            fetchProducts();
            setSelectedProduct(null);
          }}
        />
      )}
    </>
  );
}
