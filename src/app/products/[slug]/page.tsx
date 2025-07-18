import { products } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { ChevronLeft, ShoppingCart } from 'lucide-react';

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
       <div className="mb-8">
        <Link href="/products" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Volver al Catálogo
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <Card className="overflow-hidden">
            <CardContent className="p-2">
              <Carousel className="w-full">
                <CarouselContent>
                  {product.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-square relative">
                        <Image
                          src={image.url}
                          alt={`${product.name} - image ${index + 1}`}
                          data-ai-hint={image.hint}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold font-headline">{product.name}</h1>
          <p className="text-muted-foreground text-lg">{product.longDescription}</p>
          
          <div className="flex items-baseline gap-4">
             <span className="text-4xl font-bold text-primary">{product.price}</span>
          </div>

          <Button size="lg" className="w-full md:w-auto">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Añadir al Carrito
          </Button>

          <Separator />

          <div>
            <h3 className="text-xl font-semibold font-headline mb-4">Especificaciones</h3>
            <ul className="space-y-2 text-sm">
              {product.specifications.map((spec) => (
                <li key={spec.name} className="flex justify-between">
                  <span className="text-muted-foreground">{spec.name}</span>
                  <span className="font-medium">{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}
