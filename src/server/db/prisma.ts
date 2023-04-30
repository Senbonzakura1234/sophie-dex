import { PrismaClient } from '@prisma/client';
import { evnIs } from '@root/utils/common';

declare global {
	// eslint-disable-next-line no-var
	var prisma: PrismaClient | undefined;
}

export const prisma =
	global.prisma || new PrismaClient({ log: evnIs('development') ? ['query', 'error', 'warn'] : ['error'] });

if (evnIs('production')) global.prisma = prisma;
