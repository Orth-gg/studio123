'use server';
/**
 * @fileOverview A conversational AI chatbot tool for prospective buyers of 'Marketplace Renda Express'.
 *
 * - aiChatbotSalesAssistant - A function that handles prospective buyers' questions.
 * - AIChatbotSalesAssistantInput - The input type for the aiChatbotSalesAssistant function.
 * - AIChatbotSalesAssistantOutput - The return type for the aiChatbotSalesAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIChatbotSalesAssistantInputSchema = z.object({
  question: z.string().describe('The question from the prospective buyer about the infoproduct.'),
});
export type AIChatbotSalesAssistantInput = z.infer<typeof AIChatbotSalesAssistantInputSchema>;

const AIChatbotSalesAssistantOutputSchema = z.object({
  answer: z.string().describe('The intelligent answer provided by the AI chatbot sales assistant.'),
});
export type AIChatbotSalesAssistantOutput = z.infer<typeof AIChatbotSalesAssistantOutputSchema>;

export async function aiChatbotSalesAssistant(input: AIChatbotSalesAssistantInput): Promise<AIChatbotSalesAssistantOutput> {
  return aiChatbotSalesAssistantFlow(input);
}

const salesAssistantPrompt = ai.definePrompt({
  name: 'salesAssistantPrompt',
  input: {schema: AIChatbotSalesAssistantInputSchema},
  output: {schema: AIChatbotSalesAssistantOutputSchema},
  prompt: `Você é um assistente de vendas de IA para o infoproduto "Marketplace Renda Express".
O "Marketplace Renda Express" é um infoproduto focado em fazer você desenvolver uma renda extra ou renda principal através do marketplace do Facebook. Ele oferece acesso a um guia super exclusivo de quem vive exclusivamente disso, e inclui ferramentas de controle e gestão de vendas no marketplace para você ter prioridade no seu lucro.

Sua tarefa é fornecer respostas instantâneas e inteligentes às perguntas dos potenciais compradores sobre o conteúdo do curso, seus benefícios e as estratégias de gestão de marketplace. Seja amigável, informativo e persuasivo, ajudando o comprador a entender se o produto é a escolha certa para ele. Responda apenas com informações relacionadas ao infoproduto ou a tópicos diretamente relevantes para o marketplace do Facebook.

Pergunta do comprador: {{{question}}}`,
});

const aiChatbotSalesAssistantFlow = ai.defineFlow(
  {
    name: 'aiChatbotSalesAssistantFlow',
    inputSchema: AIChatbotSalesAssistantInputSchema,
    outputSchema: AIChatbotSalesAssistantOutputSchema,
  },
  async input => {
    const {output} = await salesAssistantPrompt(input);
    return output!;
  }
);
