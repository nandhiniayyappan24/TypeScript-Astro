import type { APIRoute } from 'astro';
import { describeVersion } from '../services/versionSignature.js';

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      status: 'healthy',
      branch: 'ts5.8',
      typescript: '5.8.3',
      version: describeVersion(),
    }),
    { headers: { 'Content-Type': 'application/json' } },
  );
