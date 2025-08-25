'use server';

/**
 * @fileOverview A video generation AI agent.
 *
 * - generateVideoAd - A function that handles the video generation process.
 */

import {ai} from '@/ai/genkit';
import {googleAI} from '@genkit-ai/googleai';
import {z} from 'genkit';
import {MediaPart} from 'genkit/model';

export async function generateVideoAd(prompt: string): Promise<string> {
  const videoFlow = ai.defineFlow(
    {
      name: 'videoAdFlow',
      inputSchema: z.string(),
      outputSchema: z.string(),
    },
    async (prompt) => {
      let operation = (
        await ai.generate({
          model: googleAI.model('veo-2.0-generate-001'),
          prompt,
          config: {
            durationSeconds: 5,
            aspectRatio: '16:9',
          },
        })
      ).operation;
      if (!operation) {
        throw new Error('Expected the model to return an operation');
      }

      while (!operation.done) {
        operation = await ai.checkOperation(operation);
        // Sleep for 5 seconds before checking again.
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }

      if (operation.error) {
        throw new Error('failed to generate video: ' + operation.error.message);
      }

      const video = operation.output?.message?.content.find((p) => !!p.media);
      if (!video) {
        throw new Error('Failed to find the generated video');
      }
      return `data:video/mp4;base64,${await downloadVideo(video)}`;
    }
  );

  return videoFlow(prompt);
}

async function downloadVideo(video: MediaPart): Promise<string> {
  const fetch = (await import('node-fetch')).default;
  const videoDownloadResponse = await fetch(
    `${video.media!.url}&key=${process.env.GEMINI_API_KEY}`
  );
  if (
    !videoDownloadResponse ||
    videoDownloadResponse.status !== 200 ||
    !videoDownloadResponse.body
  ) {
    throw new Error('Failed to fetch video');
  }

  const arrayBuffer = await videoDownloadResponse.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return buffer.toString('base64');
}
