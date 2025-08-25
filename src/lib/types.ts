import type { User } from 'firebase/auth';

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  dataAiHint: string;
  stock: number;
};

export type Order = {
  id: string;
  userId: string;
  items: { productId: string; quantity: number }[];
  totalPrice: number;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  date: Date;
}

export type FirebaseUser = User;
