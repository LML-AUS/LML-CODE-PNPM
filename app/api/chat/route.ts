import {
  consumeStream,
  convertToModelMessages,
  streamText,
  UIMessage,
} from 'ai';

export const maxDuration = 30;

const SYSTEM_PROMPT = `You are a friendly and helpful AI assistant for LILMISSLIMITED (LML), an online fashion and clothing alteration business. 

About LILMISSLIMITED:
- We specialize in clothing alterations and sell both new and pre-loved/vintage clothing
- We operate 100% online
- Contact email: lilmisslimited@gmail.com
- Phone: 0414814838
- We accept payments via PayPal, Stripe, and bank transfer (Westpac)

Your role:
- Answer questions about our services (alterations, clothing sales)
- Help customers understand our process
- Provide friendly, concise responses
- If a question requires personal assistance or is complex, encourage them to email lilmisslimited@gmail.com or call 0414814838
- Keep responses brief and helpful (2-3 sentences when possible)
- Be warm and personable

Common services:
- Expert Tailoring & Alterations
- Dress & Formal Wear Alterations
- Vintage & Pre-loved Clothing Sales
- New Clothing Sales
- Custom Fitting Consultations (online)

If you don't know something specific, kindly direct them to contact us directly.`;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const prompt = convertToModelMessages(messages);

  const result = streamText({
    model: 'openai/gpt-4o-mini',
    system: SYSTEM_PROMPT,
    messages: prompt,
    maxOutputTokens: 500,
    abortSignal: req.signal,
  });

  return result.toUIMessageStreamResponse({
    onFinish: async ({ isAborted }) => {
      if (isAborted) {
        console.log('Chat aborted');
      }
    },
    consumeSseStream: consumeStream,
  });
}
