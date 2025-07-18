'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Lightbulb } from 'lucide-react';
import { Logo } from '../icons/Logo';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/products', label: 'Productos' },
  { href: '/style-advisor', label: 'Asesor de Estilo' },
  { href: '/#contact', label: 'Contacto' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-transparent transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-lg border-border" : "bg-background"
    )}>
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center" aria-label="Home">
          <Logo />
        </Link>
        <nav className="hidden md:flex flex-1 items-center gap-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'transition-colors hover:text-primary',
                pathname === href ? 'text-primary' : 'text-foreground/60'
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                <Link href="/" className="flex items-center" aria-label="Home">
                  <Logo />
                </Link>
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      'flex w-full items-center py-2 text-lg font-semibold',
                      pathname === href ? 'text-primary' : 'text-foreground'
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
