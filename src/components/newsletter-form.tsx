'use client';

import { useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { subscribeNewsletter } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" aria-disabled={pending} className="bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? 'Subscribing...' : 'Subscribe'}
    </Button>
  );
}

export function NewsletterForm() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  async function handleAction(formData: FormData) {
    const result = await subscribeNewsletter(formData);
    if (result.success) {
      toast({
        title: 'Subscribed!',
        description: result.message,
      });
      formRef.current?.reset();
    } else {
      toast({
        title: 'Error',
        description: result.message,
        variant: 'destructive',
      });
    }
  }

  return (
    <form
      ref={formRef}
      action={handleAction}
      className="flex w-full max-w-sm items-center space-x-2"
    >
      <Input
        name="email"
        type="email"
        placeholder="Your email"
        required
        className="bg-card"
      />
      <SubmitButton />
    </form>
  );
}
