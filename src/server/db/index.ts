import type { DBListEnum } from '@root/types/common/zod';
import type { DBDriver } from '@root/types/model';
import { env } from '@root/utils/env.mjs';
import { neonDB } from './neon';
import { vercelDB } from './vercel';

const dbMap: Record<DBListEnum, DBDriver> = {
	NEON_DB: neonDB,
	VERCEL_DB: vercelDB,
};

export const [primaryDB, secondaryDB] = [dbMap[env.PRIMARY_DB], dbMap[env.SECONDARY_DB]] as const;
