
'use client';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ProductGrid } from '@/components/product-grid';
import { PromoCarousel } from '@/components/promo-carousel';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Product } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

export default function AllProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
        setIsLoading(true);
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Product[];
        setProducts(productsData);
        setIsLoading(false);
        };
        fetchProducts();
    }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <section className="mb-12 text-center">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
              All Products
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Browse our entire collection of curated products, ready for your
              next adventure.
            </p>
          </section>

          <section className="mb-12">
            <PromoCarousel />
          </section>

            {isLoading ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <Skeleton className="h-96 w-full" />
                    <Skeleton className="h-96 w-full" />
                    <Skeleton className="h-96 w-full" />
                    <Skeleton className="h-96 w-full" />
                </div>
            ) : (
                <ProductGrid products={products} />
            )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
