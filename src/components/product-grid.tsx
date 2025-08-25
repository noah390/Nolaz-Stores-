
'use client';

import { useState, useMemo, useEffect } from 'react';
import type { Product } from '@/lib/types';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { ProductCard } from './product-card';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

export function ProductGrid({ products }: { products: Product[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = useMemo(() => {
    if (!products) return ['all'];
    const cats = new Set(products.map((p) => p.category));
    return ['all', ...Array.from(cats)];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (selectedCategory === 'all') return true;
        return product.category === selectedCategory;
      })
      .filter((product) => {
        if (!searchQuery) return true;
        return (
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
      });
  }, [searchQuery, selectedCategory, products]);


  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
     // The filtering is now handled by useMemo, so we just prevent default
  };

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 md:flex-row">
        <form onSubmit={handleSearchSubmit} className="flex flex-1 gap-2">
            <Input
                placeholder="Search products by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-card"
            />
            <Button type="submit" variant="outline" size="icon">
                <Search />
            </Button>
        </form>
        <div className="w-full md:w-48">
          <Select
            onValueChange={setSelectedCategory}
            defaultValue="all"
          >
            <SelectTrigger className="w-full bg-card capitalize">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category} className="capitalize">
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex h-64 flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-card">
            <p className="text-lg font-medium">No products found</p>
            <p className="text-muted-foreground">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}
