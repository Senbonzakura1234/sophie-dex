import { DEFAULT_LIMIT } from '@root/constants/common';
import { driver } from '@root/server/database/drivers';
import { effects, items, rumors, traits } from '@root/server/database/schema';
import type { ExportDBQueriesMap } from '@root/types/model';
import { CountQuery } from '@root/utils/server/database';
import { asc, eq, sql } from 'drizzle-orm';

export const getExampleEffectRecord = driver.select().from(effects).limit(1).prepare('getExampleEffectRecord');
export const getExampleItemRecord = driver.select().from(items).limit(1).prepare('getExampleItemRecord');
export const getExampleRumorRecord = driver.select().from(rumors).limit(1).prepare('getExampleRumorRecord');
export const getExampleTraitRecord = driver.select().from(traits).limit(1).prepare('getExampleTraitRecord');

export const getEffectRecord = driver
	.select()
	.from(effects)
	.where(eq(effects.id, sql.placeholder('id')))
	.prepare('getEffectRecord');

export const getItemRecord = driver
	.select()
	.from(items)
	.where(eq(items.id, sql.placeholder('id')))
	.prepare('getItemRecord');

export const getRumorRecord = driver
	.select()
	.from(rumors)
	.where(eq(rumors.id, sql.placeholder('id')))
	.prepare('getRumorRecord');

export const getTraitRecord = driver
	.select()
	.from(traits)
	.where(eq(traits.id, sql.placeholder('id')))
	.prepare('getTraitRecord');

export const getListEffectDefault = driver
	.select({ totalRecord: CountQuery, record: effects })
	.from(effects)
	.orderBy(asc(effects.index))
	.limit(DEFAULT_LIMIT)
	.offset(sql.placeholder('offset'))
	.prepare('getListEffectDefault');

export const getListItemDefault = driver
	.select({ totalRecord: CountQuery, record: items })
	.from(items)
	.orderBy(asc(items.index))
	.limit(DEFAULT_LIMIT)
	.offset(sql.placeholder('offset'))
	.prepare('getListItemDefault');

export const getListRumorDefault = driver
	.select({ totalRecord: CountQuery, record: rumors })
	.from(rumors)
	.orderBy(asc(rumors.price))
	.limit(DEFAULT_LIMIT)
	.offset(sql.placeholder('offset'))
	.prepare('getListRumorDefault');

export const getListTraitDefault = driver
	.select({ totalRecord: CountQuery, record: traits })
	.from(traits)
	.orderBy(asc(traits.index))
	.limit(DEFAULT_LIMIT)
	.offset(sql.placeholder('offset'))
	.prepare('getListTraitDefault');

export const exportEffects = driver.select().from(effects).prepare('exportEffects');
export const exportItems = driver.select().from(items).prepare('exportItems');
export const exportRumors = driver.select().from(rumors).prepare('exportRumors');
export const exportTraits = driver.select().from(traits).prepare('exportTraits');

export const exportDBQueriesMap: ExportDBQueriesMap = {
	effect: exportEffects,
	item: exportItems,
	rumor: exportRumors,
	trait: exportTraits,
};

export const getAllEffectIds = driver.select({ id: effects.id }).from(effects).prepare('getAllEffectIds');
export const getAllItemIds = driver.select({ id: items.id }).from(items).prepare('getAllItemIds');
export const getAllRumorIds = driver.select({ id: rumors.id }).from(rumors).prepare('getAllRumorIds');
export const getAllTraitIds = driver.select({ id: traits.id }).from(traits).prepare('getAllTraitIds');
