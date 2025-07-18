'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing design tips using LedPop products.
 *
 * - getDesignTips - A function that takes a user's request for design tips and returns AI-generated suggestions.
 * - GetDesignTipsInput - The input type for the getDesignTips function, including the user's request.
 * - GetDesignTipsOutput - The return type for the getDesignTips function, providing design tips.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetDesignTipsInputSchema = z.object({
  request: z.string().describe('The user\u0027s request for design tips, specifying the desired lighting effects or interior design styles.'),
});
export type GetDesignTipsInput = z.infer<typeof GetDesignTipsInputSchema>;

const GetDesignTipsOutputSchema = z.object({
  tips: z.string().describe('AI-generated design tips to arrange LedPop products to achieve the specified lighting effects or interior design styles.'),
});
export type GetDesignTipsOutput = z.infer<typeof GetDesignTipsOutputSchema>;

export async function getDesignTips(input: GetDesignTipsInput): Promise<GetDesignTipsOutput> {
  return getDesignTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'getDesignTipsPrompt',
  input: {schema: GetDesignTipsInputSchema},
  output: {schema: GetDesignTipsOutputSchema},
  prompt: `You are an AI style advisor for LedPop, a store specializing in modern and efficient LED lights, interior decorations, lamps, SPC floors, decorative grooves, PVC marble, and WPC for exteriors. A user is requesting tips on how to arrange LedPop products to achieve specific lighting effects or interior design styles.  Provide detailed and creative design tips based on the user's request, suggesting specific products and arrangement strategies.

User Request: {{{request}}}`,
});

const getDesignTipsFlow = ai.defineFlow(
  {
    name: 'getDesignTipsFlow',
    inputSchema: GetDesignTipsInputSchema,
    outputSchema: GetDesignTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
