'use server';

import { suggestProductCombinations, SuggestProductCombinationsOutput } from '@/ai/flows/suggest-product-combinations';
import { z } from 'zod';

const StyleAdvisorSchema = z.object({
  roomDescription: z.string().min(10, { message: 'Por favor, describe tu habitación con más detalle.' }),
});

type State = {
  message?: string | null;
  data?: SuggestProductCombinationsOutput | null;
  errors?: {
    roomDescription?: string[];
  }
}

export async function getStyleSuggestions(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = StyleAdvisorSchema.safeParse({
    roomDescription: formData.get('roomDescription'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Faltan campos. No se pudo obtener sugerencias.',
    };
  }

  const { roomDescription } = validatedFields.data;

  try {
    const result = await suggestProductCombinations({ roomDescription });
    if (result && result.combinations.length > 0) {
      return { data: result, message: "Sugerencias generadas." };
    } else {
      return { message: "No pudimos generar sugerencias para esa descripción. Intenta ser más específico." };
    }
  } catch (error) {
    console.error('Error getting style suggestions:', error);
    return { message: 'Ocurrió un error al contactar a nuestro asesor de IA. Por favor, inténtalo de nuevo más tarde.' };
  }
}
