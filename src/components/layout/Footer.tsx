import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" aria-label="Home">
              <Logo />
            </Link>
            <p className="text-sm text-muted-foreground">
              Iluminando y decorando tus espacios con estilo y eficiencia.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Navegación</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="text-sm hover:text-primary transition-colors">Inicio</Link>
              </li>
              <li>
                <Link href="/products" className="text-sm hover:text-primary transition-colors">Productos</Link>
              </li>
              <li>
                <Link href="/style-advisor" className="text-sm hover:text-primary transition-colors">Asesor de Estilo</Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm hover:text-primary transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Contacto</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Email: info@ledpod.com</li>
              <li>Teléfono: +1 (234) 567-890</li>
              <li>Dirección: 123 Calle Ficticia, Ciudad Ejemplo</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Síguenos</h4>
            <div className="flex items-center space-x-4">
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LedPod. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
