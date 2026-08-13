import type { APIRoute } from 'astro';
import { describeVersion } from '../services/versionSignature.js';

export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      status: 'healthy',
      branch: 'ts5.0',
      typescript: '5.0.4',
      version: describeVersion(),
    }),
    { headers: { 'Content-Type': 'application/json' } },
  );
