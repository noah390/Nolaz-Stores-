'use client';

import { ProductGrid } from '@/components/product-grid';
import { Product } from '@/lib/types';

interface ProductPageLayoutProps {
  title: string;
  description: string;
  products: Product[];
}

export function ProductPageLayout({ title, description, products }: ProductPageLayoutProps) {
  return (
    <>
      <section className="mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {description}
        </p>
      </section>
      <ProductGrid products={products} />
    </>
  );
}
