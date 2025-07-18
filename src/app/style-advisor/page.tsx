import { StyleAdvisorForm } from '@/components/style-advisor-form';
import { Lightbulb } from 'lucide-react';

export default function StyleAdvisorPage() {
  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-4 bg-primary/20 rounded-full mb-4">
            <Lightbulb className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline">
            Contactanos
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            ¿No sabes por dónde empezar? Describe el ambiente de tus sueños y deja que nuestra inteligencia artificial te sugiera las combinaciones de productos perfectas para hacerlo realidad.
          </p>
        </div>

        <StyleAdvisorForm />
      </div>
    </div>
  );
}
