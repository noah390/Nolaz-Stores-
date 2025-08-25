
'use server';

import { recommendProducts } from '@/ai/flows/product-recommendations';
import { generateVideoAd } from '@/ai/flows/generate-video-ad';
import { z } from 'zod';
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import type { Product } from '@/lib/types';
import { auth } from '@/lib/firebase';
import { updateProfile } from 'firebase/auth';


export async function getAiRecommendations(
  productName: string,
  productDescription: string
) {
  try {
    const result = await recommendProducts({ productName, productDescription });
    return result.recommendations;
  } catch (error) {
    console.error('AI recommendation failed:', error);
    throw new Error('Failed to get AI recommendations.');
  }
}

export async function subscribeNewsletter(formData: FormData) {
  const schema = z.object({
    email: z.string().email({ message: 'Please enter a valid email address.' }),
  });

  const parsed = schema.safeParse({ email: formData.get('email') });

  if (!parsed.success) {
    return { success: false, message: parsed.error.errors[0].message };
  }

  const email = parsed.data.email;
  console.log(`New newsletter subscription from: ${email}`);

  // Here you would integrate with a service like Brevo
  // For now, we just simulate a successful call
  // await subscribe(email);

  return { success: true, message: 'Thank you for subscribing!' };
}

export async function getVideoAd(prompt: string) {
  try {
    const videoDataUri = await generateVideoAd(prompt);
    return videoDataUri;
  } catch (error) {
    console.error('Video generation failed:', error);
    // Return a placeholder or a specific error message
    return 'error';
  }
}

export async function addPredefinedProduct(product: Omit<Product, 'id'>) {
  try {
    // Check if product already exists
    const q = query(collection(db, "products"), where("name", "==", product.name));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return { success: false, message: `Product "${product.name}" already exists.` };
    }

    await addDoc(collection(db, 'products'), product);
    return { success: true, message: `Product "${product.name}" added successfully.` };
  } catch (error) {
    console.error('Error adding predefined product:', error);
    return { success: false, message: 'Failed to add the product. Please try again.' };
  }
}

export async function updateProduct(productId: string, productData: Partial<Omit<Product, 'id'>>) {
  try {
    const productRef = doc(db, 'products', productId);
    await updateDoc(productRef, productData);
    return { success: true, message: 'Product updated successfully.' };
  } catch (error) {
    console.error('Error updating product:', error);
    return { success: false, message: 'Failed to update the product. Please try again.' };
  }
}


export async function deleteProduct(productId: string) {
  try {
    await deleteDoc(doc(db, "products", productId));
    return { success: true, message: "Product deleted successfully." };
  } catch (error) {
    console.error("Error deleting product:", error);
    return { success: false, message: "Failed to delete the product. Please try again." };
  }
}

export async function updateUserProfile(formData: { displayName?: string, photoURL?: string }) {
    const user = auth.currentUser;
    if (!user) {
        return { success: false, message: "You must be logged in to update your profile." };
    }

    const updateData: { displayName?: string, photoURL?: string } = {};
    if (formData.displayName) {
        updateData.displayName = formData.displayName;
    }
    if (formData.photoURL) {
        updateData.photoURL = formData.photoURL;
    }

    if (Object.keys(updateData).length === 0) {
        return { success: true, message: "No changes to update." };
    }

    try {
        await updateProfile(user, updateData);
        return { success: true, message: "Profile updated successfully!" };
    } catch (error: any) {
        console.error("Error updating profile:", error);
        return { success: false, message: error.message || "Failed to update profile." };
    }
}
