'use client';

import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import {Card, CardContent} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {Button} from './ui/button';
import {ArrowRight, Loader} from 'lucide-react';
import {getVideoAd} from '@/app/actions';

const promotions = [
  {
    title: 'New Arrivals: Tech Gadgets!',
    description: 'Explore the latest in high-performance electronics.',
    image:
      'https://images.unsplash.com/photo-1628744398863-1877b197f2cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxtb2Rlcm4lMjBlbGVjdHJvbmljc3xlbnwwfHx8fDE3NTYwNTA1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'modern electronics',
    link: '/products/electronics',
    buttonText: 'Shop Electronics',
    adPrompt:
      'A cinematic shot of a sleek, modern drone flying over a city skyline at sunset, highlighting its advanced camera and smooth flight.',
  },
  {
    title: 'Latest Trends: The Fashion Collection',
    description: 'Discover the new wave of style and sophistication.',
    image:
      'https://images.unsplash.com/photo-1613909671501-f9678ffc1d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxmYXNoaW9uJTIwcnVud2F5fGVufDB8fHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'fashion runway',
    link: '/products/fashion',
    buttonText: 'Explore Fashion',
    adPrompt:
      'A stylish video showcasing a diverse group of models on a runway, wearing elegant and modern fashion pieces. The mood is chic and energetic.',
  },
  {
    title: 'Cozy Up Your Home',
    description: 'Discover unique finds to brighten up your living space.',
    image:
      'https://images.unsplash.com/photo-1726091097680-5da84f593ccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxjb3p5JTIwbGl2aW5nJTIwcm9vbXxlbnwwfHx8fDE3NTYwNzEzNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    dataAiHint: 'cozy living room',
    link: '/products/home-goods',
    buttonText: 'Explore Home Goods',
    adPrompt:
      'A warm and inviting video of a beautifully decorated living room, with a focus on cozy elements like plush blankets, soft lighting, and artisanal coffee.',
  },
];

function CarouselCard({promotion}: {promotion: (typeof promotions)[0]}) {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getVideoAd(promotion.adPrompt)
      .then((url) => {
        if (url !== 'error') {
          setVideoUrl(url);
        }
      })
      .finally(() => setIsLoading(false));
  }, [promotion.adPrompt]);

  return (
    <Card className="overflow-hidden border-2 border-primary/20 shadow-lg">
      <CardContent className="relative flex aspect-video h-[400px] items-center justify-center p-0 md:aspect-auto">
        {isLoading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary">
            <Loader className="h-12 w-12 animate-spin text-primary" />
            <p className="mt-4 text-muted-foreground">
              Generating video ad...
            </p>
          </div>
        ) : videoUrl ? (
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover brightness-50"
          />
        ) : (
          <Image
            src={promotion.image}
            alt={promotion.title}
            fill
            className="object-cover brightness-50"
            data-ai-hint={promotion.dataAiHint}
          />
        )}
        <div className="relative z-10 flex flex-col items-center p-4 text-center text-white">
          <h2 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
            {promotion.title}
          </h2>
          <p className="mt-4 max-w-xl text-lg text-neutral-200 drop-shadow-md">
            {promotion.description}
          </p>
          <Button
            size="lg"
            asChild
            className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href={promotion.link}>
              {promotion.buttonText} <ArrowRight className="ml-2" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function PromoCarousel() {
  const plugin = useRef(Autoplay({delay: 8000, stopOnInteraction: true}));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {promotions.map((promo, index) => (
          <CarouselItem key={index}>
            <CarouselCard promotion={promo} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4" />
      <CarouselNext className="absolute right-4" />
    </Carousel>
  );
}
