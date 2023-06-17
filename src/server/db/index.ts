import { env } from '@root/utils/env.mjs';
import neonDB from './neon';
import vercelDB from './vercel';

const dbMap = { NEON_DB: neonDB, VERCEL_DB: vercelDB } as const;

export const db = dbMap[env.PRIMARY_DB];
