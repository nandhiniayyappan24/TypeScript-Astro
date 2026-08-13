import type { APIRoute } from 'astro';
import { describeVersion } from '../services/versionSignature';

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      status: 'healthy',
      branch: 'ts4.9',
      typescript: '4.9.5',
      version: describeVersion(),
    }),
    { headers: { 'Content-Type': 'application/json' } },
  );
