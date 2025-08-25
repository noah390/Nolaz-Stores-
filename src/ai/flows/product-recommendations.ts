'use server';

/**
 * @fileOverview An AI agent for recommending related products.
 *
 * - recommendProducts - A function that takes a product name and description and returns a list of recommended products.
 * - RecommendProductsInput - The input type for the recommendProducts function.
 * - RecommendProductsOutput - The return type for the recommendProducts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendProductsInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  productDescription: z.string().describe('The description of the product.'),
  existingRecommendations: z.array(z.string()).optional().describe('A list of product names that have already been recommended to avoid redundancy.'),
});
export type RecommendProductsInput = z.infer<typeof RecommendProductsInputSchema>;

const RecommendProductsOutputSchema = z.object({
  recommendations: z.array(z.string()).describe('A list of recommended product names.'),
});
export type RecommendProductsOutput = z.infer<typeof RecommendProductsOutputSchema>;

export async function recommendProducts(input: RecommendProductsInput): Promise<RecommendProductsOutput> {
  return recommendProductsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendProductsPrompt',
  input: {schema: RecommendProductsInputSchema},
  output: {schema: RecommendProductsOutputSchema},
  prompt: `You are an e-commerce expert recommending related products to customers.

  Given the following product name and description, recommend a list of related products that the customer might be interested in.

  Prioritize variety and avoid redundancy. Do not include the original product in the recommendations.  If existingRecommendations are provided, do not include them in the recommendations either.

  Product Name: {{{productName}}}
  Product Description: {{{productDescription}}}
  {{#if existingRecommendations}}
  Existing Recommendations: {{{existingRecommendations}}}
  {{/if}}

  Respond with a list of product names only.
  `,
});

const recommendProductsFlow = ai.defineFlow(
  {
    name: 'recommendProductsFlow',
    inputSchema: RecommendProductsInputSchema,
    outputSchema: RecommendProductsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {
      recommendations: output!.recommendations,
    };
  }
);
