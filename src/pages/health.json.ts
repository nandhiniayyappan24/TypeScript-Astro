import type { APIRoute } from 'astro';
import { describeVersion } from '../services/versionSignature.js';

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      status: 'healthy',
      branch: 'ts5.6',
      typescript: '5.6.3',
      version: describeVersion(),
    }),
    { headers: { 'Content-Type': 'application/json' } },
  );
