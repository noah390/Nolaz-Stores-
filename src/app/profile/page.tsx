
'use client';

import { useEffect, useState, useRef, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/auth-context';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Loader2, User as UserIcon, Edit } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateUserProfile } from '@/app/actions';

export default function ProfilePage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const [displayName, setDisplayName] = useState('');
  const [newImage, setNewImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
    if (user) {
      setDisplayName(user.displayName || '');
      setPreviewUrl(user.photoURL || null);
    }
  }, [user, loading, router]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setNewImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSaveChanges = () => {
    if (!user) return;

    startTransition(async () => {
      try {
        let photoURL = user.photoURL;

        if (newImage) {
          const storage = getStorage();
          const storageRef = ref(storage, `profile-pictures/${user.uid}/${newImage.name}`);
          const snapshot = await uploadBytes(storageRef, newImage);
          photoURL = await getDownloadURL(snapshot.ref);
        }
        
        const result = await updateUserProfile({
          displayName: displayName !== user.displayName ? displayName : undefined,
          photoURL: photoURL !== user.photoURL ? photoURL : undefined,
        });


        if (result.success) {
          toast({
            title: 'Profile Updated!',
            description: 'Your profile has been updated successfully.',
          });
          // The AuthProvider will automatically pick up the changes
          // Resetting image state
          setNewImage(null);
        } else {
          toast({
            title: 'Error',
            description: result.message,
            variant: 'destructive',
          });
        }
      } catch (error) {
        console.error("Error updating profile:", error);
        toast({
          title: 'Error',
          description: 'Failed to update profile. Please try again.',
          variant: 'destructive',
        });
      }
    });
  };

  if (loading || !user) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin" />
      </div>
    );
  }

  const hasChanges = displayName !== (user.displayName || '') || newImage !== null;

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-secondary">
        <div className="container mx-auto max-w-2xl px-4 py-8 md:py-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">My Profile</CardTitle>
              <CardDescription>View and manage your account details.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar className="h-24 w-24 cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                    <AvatarImage src={previewUrl ?? ''} alt={displayName ?? 'User'} />
                    <AvatarFallback>
                      <UserIcon className="h-12 w-12" />
                    </AvatarFallback>
                  </Avatar>
                   <div className="absolute bottom-0 right-0 rounded-full bg-primary p-1.5 text-primary-foreground" onClick={() => fileInputRef.current?.click()}>
                        <Edit className="h-4 w-4" />
                    </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    className="hidden"
                    accept="image/*"
                  />
                </div>
                 <div className="grid flex-1 gap-1">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input 
                      id="displayName" 
                      value={displayName} 
                      onChange={(e) => setDisplayName(e.target.value)}
                      placeholder="Your Name"
                    />
                  </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={user.email ?? ''} readOnly disabled />
              </div>
               <div className="grid gap-2">
                <Label htmlFor="uid">User ID</Label>
                <Input id="uid" value={user.uid} readOnly disabled />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveChanges} disabled={isPending || !hasChanges}>
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Save Changes
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
