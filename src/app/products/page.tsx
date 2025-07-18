import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { productCategories, products } from '@/lib/data';
import { Button } from '@/components/ui/button';

export default function ProductsPage() {
  return (
    <div className="container py-12 md:py-20 px-4 md:px-6">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight">Nuestro Catálogo</h1>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
          Descubre la gama completa de productos LedPod, diseñados para dar vida, estilo y funcionalidad a tus espacios.
        </p>
      </header>

      {productCategories.map((category) => (
        <section key={category.slug} id={category.slug} className="mb-16 md:mb-24 scroll-mt-20">
          <h2 className="text-3xl md:text-4xl font-bold font-headline mb-8">{category.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products
              .filter((p) => p.category === category.slug)
              .map((product) => (
                <Card key={product.slug} className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl group">
                  <CardHeader className="p-0 relative">
                    <Link href={`/products/${product.slug}`}>
                      <Image
                        src={product.images[0].url}
                        alt={product.name}
                        data-ai-hint={product.images[0].hint}
                        width="400"
                        height="300"
                        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>
                  </CardHeader>
                  <CardContent className="p-4 flex-grow">
                    <CardTitle className="font-headline text-xl mb-1">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 flex justify-between items-center">
                    <p className="text-lg font-bold text-primary">{product.price}</p>
                    <Link href={`/products/${product.slug}`} passHref>
                      <Button variant="secondary" size="sm">Ver Detalles</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
              {products.filter((p) => p.category === category.slug).length === 0 && (
                 <Card className="sm:col-span-2 lg:col-span-3 flex items-center justify-center p-8 bg-muted/50">
                    <p className="text-muted-foreground">Más productos de esta categoría próximamente.</p>
                 </Card>
              )}
          </div>
        </section>
      ))}
    </div>
  );
}
