
'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Product } from '@/lib/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from './ui/badge';
import { RecommendationsSheet } from './recommendations-sheet';
import { cn } from '@/lib/utils';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { useToast } from '@/hooks/use-toast';


export function ProductCard({ product }: { product: Product }) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
        title: "Added to cart!",
        description: `${product.name} has been added to your shopping cart.`,
    });
  };

  return (
    <>
      <Card
        className="group relative flex h-full flex-col overflow-hidden rounded-xl border-2 border-transparent shadow-lg transition-all duration-300 ease-in-out hover:border-primary hover:shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            data-ai-hint={product.dataAiHint}
          />
          <div
            className={cn(
              'absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300',
              isHovered ? 'opacity-100' : 'opacity-0'
            )}
          />
          <Badge
            variant="secondary"
            className="absolute right-3 top-3 capitalize"
          >
            {product.category}
          </Badge>
        </div>
        <CardContent className="flex flex-1 flex-col p-6">
          <CardTitle className="font-headline text-lg text-primary">
            {product.name}
          </CardTitle>
          <CardDescription className="mt-2 flex-grow text-sm">
            {product.description}
          </CardDescription>
          <p className="mt-4 text-3xl font-bold text-foreground">
            ₦{product.price.toFixed(2)}
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 p-6 pt-0">
          <Button
            onClick={handleAddToCart}
            className="w-full bg-accent text-accent-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:bg-accent/90"
          >
            <ShoppingCart className="mr-2" /> Add to Cart
          </Button>
          <Button
            variant="outline"
            className="w-full transition-all duration-300 hover:scale-105"
            onClick={() => setIsSheetOpen(true)}
          >
            Get Recommendations
          </Button>
        </CardFooter>
      </Card>
      <RecommendationsSheet
        open={isSheetOpen}
        onOpenChange={setIsSheetOpen}
        product={product}
      />
    </>
  );
}
