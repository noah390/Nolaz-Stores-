'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Product } from '@/lib/types';
import { getAiRecommendations } from '@/app/actions';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import { Wand2, AlertTriangle } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

interface RecommendationsSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product;
}

export function RecommendationsSheet({
  open,
  onOpenChange,
  product,
}: RecommendationsSheetProps) {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRecommendations = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await getAiRecommendations(
        product.name,
        product.description
      );
      setRecommendations(result);
    } catch (err) {
      setError('Could not fetch recommendations. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [product.name, product.description]);

  useEffect(() => {
    if (open) {
      fetchRecommendations();
    }
  }, [open, fetchRecommendations]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-headline text-2xl">
            <Wand2 className="h-6 w-6 text-accent" />
            <span>AI Recommendations</span>
          </SheetTitle>
          <SheetDescription>
            Products you might also like based on{' '}
            <span className="font-semibold text-primary">{product.name}</span>.
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 py-4">
          {isLoading && (
            <div className="space-y-4">
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-5/6" />
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-8 w-4/6" />
            </div>
          )}
          {error && (
            <div className="flex flex-col items-center justify-center rounded-md border-2 border-dashed border-destructive/50 bg-destructive/10 p-8 text-center text-destructive">
                <AlertTriangle className="mb-4 h-12 w-12" />
                <p className='font-semibold'>An Error Occurred</p>
                <p className="text-sm">{error}</p>
                <Button variant="destructive" size="sm" onClick={fetchRecommendations} className="mt-4">
                    Try Again
                </Button>
            </div>
          )}
          {!isLoading && !error && (
            <ul className="space-y-3">
              {recommendations.map((rec, index) => (
                <li
                  key={index}
                  className="rounded-md border bg-card p-3 font-medium transition-colors hover:bg-secondary"
                >
                  {rec}
                </li>
              ))}
            </ul>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
