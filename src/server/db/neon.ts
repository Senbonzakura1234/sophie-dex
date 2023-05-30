import { Pool } from '@neondatabase/serverless';
import { env } from '@root/utils/env.mjs';
import { drizzle } from 'drizzle-orm/neon-serverless';

const pool = new Pool({ connectionString: env.NEON_POSTGRES_URL });
export const neonDB = drizzle(pool);
