import { evnIs } from '@root/utils/common';
import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

export const vercelDB = drizzle(sql, { logger: !evnIs('production') });
