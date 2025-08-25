
'use client';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Product } from '@/lib/types';
import { ProductPageLayout } from '@/components/product-page-layout';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Skeleton } from '@/components/ui/skeleton';

export default function FashionPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
        setIsLoading(true);
        const q = query(collection(db, 'products'), where('category', '==', 'Fashion'));
        const querySnapshot = await getDocs(q);
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
            {isLoading ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <Skeleton className="h-96 w-full" />
                    <Skeleton className="h-96 w-full" />
                    <Skeleton className="h-96 w-full" />
                    <Skeleton className="h-96 w-full" />
                </div>
            ) : (
               <ProductPageLayout
                title="Fashion"
                description="Trendy apparel and accessories for every style."
                products={products}
              />
            )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
