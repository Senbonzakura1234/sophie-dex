import { DEFAULT_LIMIT } from '@root/constants/common';
import neonDB from '@root/server/database/drivers/neon';
import vercelDB from '@root/server/database/drivers/vercel';
import { effects, items, rumors, traits } from '@root/server/database/schema';
import type { ExportDBQueriesMap } from '@root/types/model';
import { env } from '@root/utils/env.mjs';
import { CountQuery } from '@root/utils/server';
import { asc, eq, sql } from 'drizzle-orm';

const dbMap = { NEON_DB: neonDB, VERCEL_DB: vercelDB } as const;

export const db = dbMap[env.PRIMARY_DB];

export const getExampleEffectRecord = db.select().from(effects).limit(1).prepare('getExampleEffectRecord');
export const getExampleItemRecord = db.select().from(items).limit(1).prepare('getExampleItemRecord');
export const getExampleRumorRecord = db.select().from(rumors).limit(1).prepare('getExampleRumorRecord');
export const getExampleTraitRecord = db.select().from(traits).limit(1).prepare('getExampleTraitRecord');

export const getEffectRecord = db
	.select()
	.from(effects)
	.where(eq(effects.id, sql.placeholder('id')))
	.prepare('getEffectRecord');

export const getItemRecord = db
	.select()
	.from(items)
	.where(eq(items.id, sql.placeholder('id')))
	.prepare('getItemRecord');

export const getRumorRecord = db
	.select()
	.from(rumors)
	.where(eq(rumors.id, sql.placeholder('id')))
	.prepare('getRumorRecord');

export const getTraitRecord = db
	.select()
	.from(traits)
	.where(eq(traits.id, sql.placeholder('id')))
	.prepare('getTraitRecord');

export const getListEffectDefault = db
	.select({ totalRecord: CountQuery, record: effects })
	.from(effects)
	.orderBy(asc(effects.index))
	.limit(DEFAULT_LIMIT)
	.offset(sql.placeholder('offset'))
	.prepare('getListEffectDefault');

export const getListItemDefault = db
	.select({ totalRecord: CountQuery, record: items })
	.from(items)
	.orderBy(asc(items.index))
	.limit(DEFAULT_LIMIT)
	.offset(sql.placeholder('offset'))
	.prepare('getListItemDefault');

export const getListRumorDefault = db
	.select({ totalRecord: CountQuery, record: rumors })
	.from(rumors)
	.orderBy(asc(rumors.price))
	.limit(DEFAULT_LIMIT)
	.offset(sql.placeholder('offset'))
	.prepare('getListRumorDefault');

export const getListTraitDefault = db
	.select({ totalRecord: CountQuery, record: traits })
	.from(traits)
	.orderBy(asc(traits.index))
	.limit(DEFAULT_LIMIT)
	.offset(sql.placeholder('offset'))
	.prepare('getListTraitDefault');

export const exportEffects = db.select().from(effects).prepare('exportEffects');
export const exportItems = db.select().from(items).prepare('exportItems');
export const exportRumors = db.select().from(rumors).prepare('exportRumors');
export const exportTraits = db.select().from(traits).prepare('exportTraits');

export const exportDBQueriesMap: ExportDBQueriesMap = {
	effect: exportEffects,
	item: exportItems,
	rumor: exportRumors,
	trait: exportTraits,
};

export const getAllEffectIds = db.select({ id: effects.id }).from(effects).prepare('getAllEffectIds');
export const getAllItemIds = db.select({ id: items.id }).from(items).prepare('getAllItemIds');
export const getAllRumorIds = db.select({ id: rumors.id }).from(rumors).prepare('getAllRumorIds');
export const getAllTraitIds = db.select({ id: traits.id }).from(traits).prepare('getAllTraitIds');
