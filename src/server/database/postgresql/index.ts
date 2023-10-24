import { neon, neonConfig } from '@neondatabase/serverless';
import * as schema from '@root/server/database/postgresql/schema';
import type { ExportDBQueriesMap } from '@root/types/model';
import { evnIs } from '@root/utils/common';
import { env } from '@root/utils/common/env.mjs';
import { drizzle } from 'drizzle-orm/neon-http';

neonConfig.fetchConnectionCache = true;

const connection = neon(env.DIRECT_DB_URL);

export const db = drizzle(connection, { schema, logger: !evnIs('production') });

export const getExampleEffectRecord = db.query.effects.findFirst().prepare('getExampleEffectRecord');
export const getExampleItemRecord = db.query.items.findFirst().prepare('getExampleItemRecord');
export const getExampleRumorRecord = db.query.rumors.findFirst().prepare('getExampleRumorRecord');
export const getExampleTraitRecord = db.query.traits.findFirst().prepare('getExampleTraitRecord');

export const getEffectRecord = db.query.effects
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getEffectRecord');
export const getItemRecord = db.query.items
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getItemRecord');
export const getRumorRecord = db.query.rumors
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getRumorRecord');
export const getTraitRecord = db.query.traits
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getTraitRecord');

export const getAllEffectIds = db.query.effects.findMany({ columns: { id: true } }).prepare('getAllEffectIds');
export const getAllItemIds = db.query.items.findMany({ columns: { id: true } }).prepare('getAllItemIds');
export const getAllRumorIds = db.query.rumors.findMany({ columns: { id: true } }).prepare('getAllRumorIds');
export const getAllTraitIds = db.query.traits.findMany({ columns: { id: true } }).prepare('getAllTraitIds');

export const exportEffects = db.query.effects.findMany().prepare('exportEffects');
export const exportItems = db.query.items.findMany().prepare('exportItems');
export const exportRumors = db.query.rumors.findMany().prepare('exportRumors');
export const exportTraits = db.query.traits.findMany().prepare('exportTraits');

export const exportDBQueriesMap: ExportDBQueriesMap = {
	effect: exportEffects,
	item: exportItems,
	rumor: exportRumors,
	trait: exportTraits,
};
