import { handleUpload } from '@vercel/blob/client';
import type { APIRoute } from 'astro';

const MAX_FILE_SIZE = 5 * 1024 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  'application/pdf',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'video/mp4',
  'video/webm',
  'video/quicktime',
  'image/jpeg',
  'image/png',
  'image/webp',
  'text/plain',
]);

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const pathname = String(body.pathname ?? '');
    if (!pathname.startsWith('projects/') || pathname.includes('..')) {
      return new Response(JSON.stringify({ error: 'Invalid project file path' }), { status: 400 });
    }

    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathnameFromClient) => ({
        allowedContentTypes: [...ALLOWED_TYPES],
        maximumSizeInBytes: MAX_FILE_SIZE,
        addRandomSuffix: true,
        tokenPayload: JSON.stringify({ pathname: pathnameFromClient }),
      }),
      onUploadCompleted: async () => undefined,
    });

    return new Response(JSON.stringify(jsonResponse), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('[v0] Blob upload token error:', error);
    return new Response(JSON.stringify({ error: 'Unable to prepare upload' }), { status: 500 });
  }
};
