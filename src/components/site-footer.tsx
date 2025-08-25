import { Github, Twitter, MessageCircle } from 'lucide-react';
import { NewsletterForm } from './newsletter-form';

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3">
        <div className="flex flex-col gap-2">
          <h3 className="font-headline text-lg font-bold">Nolaz Store</h3>
          <p className="text-muted-foreground">
            Your one-stop shop for curated quality products.
          </p>
        </div>
        <div className="md:mx-auto">
          <h3 className="mb-2 font-headline font-semibold">Stay Connected</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">Community</span>
            </a>
          </div>
        </div>
        <div>
          <h3 className="mb-2 font-headline font-semibold">
            Subscribe to our newsletter
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">
            Get the latest updates on new products and upcoming sales.
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t">
        <div className="container mx-auto flex items-center justify-center px-4 py-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nolaz Store. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
