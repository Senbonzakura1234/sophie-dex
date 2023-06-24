import { defaultLimit } from '@root/constants';
import { env } from '@root/utils/env.mjs';
import { CountQuery } from '@root/utils/server';
import { asc, eq, placeholder } from 'drizzle-orm';
import neonDB from './neon';
import { effects, items, rumors, traits } from './schema';
import vercelDB from './vercel';

const dbMap = { NEON_DB: neonDB, VERCEL_DB: vercelDB } as const;

export const db = dbMap[env.PRIMARY_DB];

export const getEffectRecord = db
	.select()
	.from(effects)
	.where(eq(effects.id, placeholder('id')))
	.prepare('getEffectRecord');

export const getItemRecord = db
	.select()
	.from(items)
	.where(eq(items.id, placeholder('id')))
	.prepare('getItemRecord');

export const getRumorRecord = db
	.select()
	.from(rumors)
	.where(eq(rumors.id, placeholder('id')))
	.prepare('getRumorRecord');

export const getTraitRecord = db
	.select()
	.from(traits)
	.where(eq(traits.id, placeholder('id')))
	.prepare('getTraitRecord');

export const getListEffectDefault = db
	.select({ totalRecord: CountQuery, record: effects })
	.from(effects)
	.orderBy(asc(effects.index))
	.limit(defaultLimit)
	.offset(placeholder('offset'))
	.prepare('getListEffectDefault');

export const getListItemDefault = db
	.select({ totalRecord: CountQuery, record: items })
	.from(items)
	.orderBy(asc(items.index))
	.limit(defaultLimit)
	.offset(placeholder('offset'))
	.prepare('getListItemDefault');

export const getListRumorDefault = db
	.select({ totalRecord: CountQuery, record: rumors })
	.from(rumors)
	.orderBy(asc(rumors.price))
	.limit(defaultLimit)
	.offset(placeholder('offset'))
	.prepare('getListRumorDefault');

export const getListTraitDefault = db
	.select({ totalRecord: CountQuery, record: traits })
	.from(traits)
	.orderBy(asc(traits.index))
	.limit(defaultLimit)
	.offset(placeholder('offset'))
	.prepare('getListTraitDefault');
