
'use client';

import Image from 'next/image';
import { useCart } from '@/context/cart-context';
import { useAuth } from '@/context/auth-context';
import { usePaystackPayment } from 'react-paystack';
import type { PaystackProps } from 'react-paystack/dist/types';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import { ShoppingCart, Minus, Plus, X } from 'lucide-react';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import { useToast } from '@/hooks/use-toast';

export function CartSheet() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal, getCartItemCount } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();

  const config: PaystackProps = {
    reference: new Date().getTime().toString(),
    email: user?.email || '',
    amount: getCartTotal() * 100, // Amount in kobo
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || '',
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference: any) => {
    toast({
      title: 'Payment Successful!',
      description: `Your payment was successful. Reference: ${reference.reference}`,
    });
    clearCart();
  };

  const onClose = () => {
    toast({
      title: 'Payment Canceled',
      description: 'You canceled the payment process.',
      variant: 'destructive',
    });
  };

  const handleCheckout = () => {
    if (!user) {
      toast({
        title: 'Authentication Required',
        description: 'Please log in to proceed with checkout.',
        variant: 'destructive',
      });
      return;
    }
     if (!process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY) {
      toast({
        title: 'Configuration Error',
        description: 'Paystack public key is not configured. Please contact support.',
        variant: 'destructive',
      });
      return;
    }
    initializePayment({ onSuccess, onClose });
  };


  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {getCartItemCount() > 0 && (
            <Badge
              variant="destructive"
              className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full p-1 text-xs"
            >
              {getCartItemCount()}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader className='pr-6'>
          <SheetTitle>Your Shopping Cart</SheetTitle>
          <SheetDescription>
            Review your items below before proceeding to checkout.
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full pr-6">
            {cart.length > 0 ? (
                <div className="flex flex-col gap-4 py-4">
                {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={80}
                        height={80}
                        className="rounded-md object-cover"
                    />
                    <div className="flex-1">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                        ${item.price.toFixed(2)}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                            <Plus className="h-4 w-4" />
                        </Button>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => removeFromCart(item.id)}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                    </div>
                ))}
                </div>
            ) : (
                <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
                    <ShoppingCart className="h-16 w-16 text-muted-foreground" />
                    <p className="font-semibold">Your cart is empty</p>
                    <p className="text-sm text-muted-foreground">Add some items to get started!</p>
                </div>
            )}
        </ScrollArea>
        </div>
        {cart.length > 0 && (
          <SheetFooter className="pt-4">
            <div className="flex w-full flex-col gap-2">
                <Separator />
                <div className="flex items-center justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <Button onClick={handleCheckout} className="w-full bg-accent text-accent-foreground shadow-lg hover:bg-accent/90">
                    Proceed to Checkout
                </Button>
                <Button variant="outline" onClick={clearCart}>
                    Clear Cart
                </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
