import { json, route } from '../../../server/util.js';
import { checkUpdates, syncUpdates } from '../../../server/updates.js';

// GET  /api/updates → where your repository stands against the one it was forked from
// POST /api/updates → sync it (Cloudflare then redeploys your site)
export const GET = route(async ({ env }) => json(await checkUpdates(env)));
export const POST = route(async ({ env }) => json(await syncUpdates(env)));
