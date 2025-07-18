import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight, Instagram, MessageCircle } from 'lucide-react';
import { productCategories, testimonials } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="w-full py-20 md:py-32 lg:py-40 bg-card">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-20">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
                  LedPop 🎇
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl font-body">
                  Bienvenidos a tu espacio de iluminación y decoración ideal. Transformamos tu hogar con luces, decoraciones, y mucho más para crear ambientes únicos.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/products"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Ver Productos
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contáctanos
                  </Link>
                </div>
              </div>
              <Image
                src="https://placehold.co/600x400.png"
                width="600"
                height="400"
                alt="Hero"
                data-ai-hint="elegant living room"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last animate-in fade-in zoom-in-95 duration-500"
              />
            </div>
          </div>
        </section>

        {/* Product Categories Section */}
        <section id="products-preview" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Nuestros Productos</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-body">
                Explora nuestra selección de productos de alta calidad para iluminar y decorar tus espacios.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {productCategories.slice(0, 7).map((category) => (
                <Link key={category.slug} href={`/products#${category.slug}`}>
                  <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-105">
                    <CardHeader className="p-0">
                      <Image
                        src={category.image}
                        alt={category.name}
                        data-ai-hint={category.imageHint}
                        width="400"
                        height="250"
                        className="w-full h-48 object-cover"
                      />
                    </CardHeader>
                    <CardContent className="p-4 flex-grow">
                      <CardTitle className="font-headline text-xl">{category.name}</CardTitle>
                      <CardDescription className="mt-2 text-sm">{category.description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              ))}
               <Link href="/products">
                  <Card className="h-full flex flex-col items-center justify-center bg-accent text-accent-foreground p-4 transition-all duration-300 hover:shadow-xl hover:scale-105">
                      <CardContent className="text-center p-6">
                        <h3 className="text-xl font-bold font-headline">¡Y mucho más!</h3>
                        <p>Explora nuestro catálogo completo</p>
                        <ArrowRight className="mt-4 mx-auto h-8 w-8" />
                      </CardContent>
                  </Card>
                </Link>
            </div>
          </div>
        </section>

        {/* AI Style Advisor CTA */}
        <section id="ai-advisor" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Asesor de Estilo AI</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Crea Ambientes Armoniosos</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Utiliza nuestra herramienta de IA para obtener recomendaciones de productos que combinan a la perfección y se adaptan a tu estilo deseado.
                </p>
                <Link
                  href="/style-advisor"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Prueba el Asesor de Estilo
                </Link>
              </div>
               <Image
                src="https://placehold.co/600x400.png"
                width="600"
                height="400"
                alt="AI Style Advisor"
                data-ai-hint="modern interior design"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full animate-in fade-in zoom-in-95 duration-500"
              />
            </div>
          </div>
        </section>


        {/* Customer Showcase Section */}
        <section id="showcase" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl font-headline mb-12">Proyectos de Clientes</h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col">
                        <CardHeader>
                           <Image
                            src={testimonial.projectImage}
                            alt={`Project by ${testimonial.author}`}
                            data-ai-hint={testimonial.projectImageHint}
                            width="400"
                            height="250"
                            className="w-full h-48 object-cover rounded-t-lg"
                          />
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <blockquote className="text-lg font-semibold leading-snug font-body">
                            “{testimonial.quote}”
                          </blockquote>
                        </CardContent>
                        <CardFooter>
                          <div className="flex items-center gap-2">
                             <Avatar>
                              <AvatarImage src={`https://placehold.co/40x40.png`} alt={testimonial.author} />
                              <AvatarFallback>{testimonial.author.substring(0,2)}</AvatarFallback>
                            </Avatar>
                            <p className="text-sm font-medium">{testimonial.author}</p>
                          </div>
                        </CardFooter>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Contact and Locator Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-headline">Contactanos</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                ¿Tienes alguna pregunta o necesitas asesoría personalizada? Escríbenos y te ayudaremos a dar vida a tus ideas.
              </p>
              <div className="space-y-4">
                <form className="space-y-4">
                  <Input type="text" placeholder="Nombre" className="max-w-lg" />
                  <Input type="email" placeholder="Correo Electrónico" className="max-w-lg" />
                  <Textarea placeholder="Tu Mensaje" className="max-w-lg" />
                  <Button type="submit">Enviar Mensaje</Button>
                </form>
              </div>
            </div>
            <div className="space-y-6">
               <h3 className="text-2xl font-bold tracking-tighter md:text-3xl font-headline">Comunícate directamente</h3>
                <div className="flex flex-col gap-4">
                  <a href="https://wa.me/18498865556" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 group">
                    <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <MessageCircle className="h-8 w-8 text-primary"/>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">WhatsApp</p>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">+1 (849) 886-5556</p>
                    </div>
                  </a>
                  <a href="https://www.instagram.com/ledpop_/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 group">
                     <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <Instagram className="h-8 w-8 text-primary"/>
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Instagram</p>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors">@ledpop_</p>
                    </div>
                  </a>
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
