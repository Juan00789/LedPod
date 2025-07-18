'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { getStyleSuggestions } from '@/app/style-advisor/actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Wand2, Loader, AlertTriangle } from 'lucide-react';

const initialState = {
  message: null,
  data: null,
  errors: {},
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader className="mr-2 h-5 w-5 animate-spin" />
          Generando...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-5 w-5" />
          Generar Sugerencias
        </>
      )}
    </Button>
  );
}

export function StyleAdvisorForm() {
  const [state, formAction] = useFormState(getStyleSuggestions, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && !state.data) {
       toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <div className="max-w-3xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Describe tu Estilo</CardTitle>
          <CardDescription>
            Cuéntanos sobre el espacio que quieres crear. Menciona colores, materiales, y el ambiente que buscas (ej. "un salón minimalista con tonos neutros y madera clara").
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <Textarea
              name="roomDescription"
              placeholder="Ej: Busco un ambiente cálido y acogedor para mi dormitorio, con iluminación suave, toques de madera y un estilo rústico moderno..."
              rows={5}
              className="text-base"
              aria-invalid={!!state.errors?.roomDescription}
              aria-describedby="room-description-error"
            />
            {state.errors?.roomDescription && (
              <p id="room-description-error" className="text-sm font-medium text-destructive">
                {state.errors.roomDescription[0]}
              </p>
            )}
            <div className="flex justify-center">
              <SubmitButton />
            </div>
          </form>
        </CardContent>
      </Card>

      {state.data && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-8 font-headline">Aquí tienes algunas ideas:</h2>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {state.data.combinations.map((combo, index) => (
              <Card key={index} className="bg-background transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="font-headline">Combinación {index + 1}</CardTitle>
                  <div className="flex flex-wrap gap-2 pt-2">
                     {combo.productNames.map(name => (
                        <span key={name} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground font-medium">{name}</span>
                     ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{combo.reasoning}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {state.message && !state.data && !state.errors?.roomDescription && (
         <Card className="mt-8 bg-destructive/10 border-destructive">
            <CardHeader className="flex flex-row items-center gap-4">
                <AlertTriangle className="h-8 w-8 text-destructive" />
                <div>
                    <CardTitle className="text-destructive">Error al generar sugerencias</CardTitle>
                    <CardDescription className="text-destructive/80">{state.message}</CardDescription>
                </div>
            </CardHeader>
         </Card>
      )}

    </div>
  );
}
