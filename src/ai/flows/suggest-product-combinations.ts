'use server';

/**
 * @fileOverview This file defines a Genkit flow for suggesting product combinations based on a user's desired room aesthetic.
 *
 * - suggestProductCombinations - A function that takes a description of the desired room aesthetic and returns a list of suggested product combinations.
 * - SuggestProductCombinationsInput - The input type for the suggestProductCombinations function.
 * - SuggestProductCombinationsOutput - The return type for the suggestProductCombinations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestProductCombinationsInputSchema = z.object({
  roomDescription: z
    .string()
    .describe('A description of the desired room aesthetic.'),
});
export type SuggestProductCombinationsInput = z.infer<
  typeof SuggestProductCombinationsInputSchema
>;

const SuggestProductCombinationsOutputSchema = z.object({
  combinations: z.array(
    z.object({
      productNames: z.array(z.string()).describe('A list of product names.'),
      reasoning: z.string().describe('The reasoning for this combination.'),
    })
  ).describe('A list of suggested product combinations.'),
});
export type SuggestProductCombinationsOutput = z.infer<
  typeof SuggestProductCombinationsOutputSchema
>;

export async function suggestProductCombinations(
  input: SuggestProductCombinationsInput
): Promise<SuggestProductCombinationsOutput> {
  return suggestProductCombinationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestProductCombinationsPrompt',
  input: {schema: SuggestProductCombinationsInputSchema},
  output: {schema: SuggestProductCombinationsOutputSchema},
  prompt: `You are an expert interior designer with a deep knowledge of LedPop's product catalog.  A user will describe their desired room aesthetic, and you will suggest product combinations from LedPop's catalog to create a harmonious environment.  Explain your reasoning for each combination.

User's desired room aesthetic: {{{roomDescription}}}

Here is the product catalog:
- LED lights
- Interior decorations
- Lamps of all styles
- SPC floors
- Decorative grooves
- PVC marble
- WPC for exteriors

Suggest at least three product combinations.

Output in JSON format.`,
});

const suggestProductCombinationsFlow = ai.defineFlow(
  {
    name: 'suggestProductCombinationsFlow',
    inputSchema: SuggestProductCombinationsInputSchema,
    outputSchema: SuggestProductCombinationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
