import { neon, neonConfig } from '@neondatabase/serverless';
import * as schema from '@root/server/database/postgresql/schema';
import type { ExportDBQueriesMap } from '@root/types/model';
import { evnIs } from '@root/utils/common';
import { env } from '@root/utils/common/env.mjs';
import { drizzle } from 'drizzle-orm/neon-http';

neonConfig.fetchConnectionCache = true;

const connection = neon(env.DIRECT_DB_URL);

export const postgresql = drizzle(connection, { schema, logger: !evnIs('production') });

export const getExampleEffectRecord = postgresql.query.effects.findFirst().prepare('getExampleEffectRecord');
export const getExampleItemRecord = postgresql.query.items.findFirst().prepare('getExampleItemRecord');
export const getExampleRumorRecord = postgresql.query.rumors.findFirst().prepare('getExampleRumorRecord');
export const getExampleTraitRecord = postgresql.query.traits.findFirst().prepare('getExampleTraitRecord');

export const getEffectRecord = postgresql.query.effects
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getEffectRecord');
export const getItemRecord = postgresql.query.items
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getItemRecord');
export const getRumorRecord = postgresql.query.rumors
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getRumorRecord');
export const getTraitRecord = postgresql.query.traits
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getTraitRecord');

export const getAllEffectIds = postgresql.query.effects.findMany({ columns: { id: true } }).prepare('getAllEffectIds');
export const getAllItemIds = postgresql.query.items.findMany({ columns: { id: true } }).prepare('getAllItemIds');
export const getAllRumorIds = postgresql.query.rumors.findMany({ columns: { id: true } }).prepare('getAllRumorIds');
export const getAllTraitIds = postgresql.query.traits.findMany({ columns: { id: true } }).prepare('getAllTraitIds');

export const exportEffects = postgresql.query.effects.findMany().prepare('exportEffects');
export const exportItems = postgresql.query.items.findMany().prepare('exportItems');
export const exportRumors = postgresql.query.rumors.findMany().prepare('exportRumors');
export const exportTraits = postgresql.query.traits.findMany().prepare('exportTraits');

export const exportDBQueriesMap: ExportDBQueriesMap = {
	effect: exportEffects,
	item: exportItems,
	rumor: exportRumors,
	trait: exportTraits,
};
