import type { APIRoute } from 'astro';
import { describeVersion } from '../services/versionSignature.js';

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      status: 'healthy',
      branch: 'ts5.1',
      typescript: '5.1.6',
      version: describeVersion(),
    }),
    { headers: { 'Content-Type': 'application/json' } },
  );
