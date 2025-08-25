
'use client';

import { ShoppingBag, LogOut, User, Shield } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/context/auth-context';
import { auth } from '@/lib/firebase';
import { Button } from './ui/button';
import { CartSheet } from './cart-sheet';

export function SiteHeader() {
  const { user, isAdmin } = useAuth();

  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <ShoppingBag className="h-6 w-6 text-primary" />
          <span className="font-headline text-2xl font-bold">Nolaz Store</span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link
            href="/products"
            className="text-foreground transition-colors hover:text-primary"
          >
            All Products
          </Link>
          <Link
            href="/products/electronics"
            className="text-foreground transition-colors hover:text-primary"
          >
            Electronics
          </Link>
          <Link
            href="/products/fashion"
            className="text-foreground transition-colors hover:text-primary"
          >
            Fashion
          </Link>
          <Link
            href="/products/home-goods"
            className="text-foreground transition-colors hover:text-primary"
          >
            Home Goods
          </Link>
        </nav>
        <div className="flex items-center gap-4">
           <CartSheet />
          {user ? (
            <>
              {isAdmin && (
                <Link href="/admin">
                  <Button variant="outline" size="sm">
                    <Shield className="mr-2" /> Admin
                  </Button>
                </Link>
              )}
               <Link href="/profile">
                  <Button variant="ghost" size="sm">
                    <User className="mr-2" /> Profile
                  </Button>
                </Link>
              <Button onClick={handleLogout} variant="ghost" size="sm">
                <LogOut className="mr-2" /> Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
