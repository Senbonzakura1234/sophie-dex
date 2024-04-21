import 'server-only';

import { neon } from '@neondatabase/serverless';
import * as schema from '@root/server/database/postgresql/schema';
import type { ExportDBQueriesMap } from '@root/types/model';
import { evnIs } from '@root/utils/common';
import { env } from '@root/utils/common/env.mjs';
import { drizzle } from 'drizzle-orm/neon-http';

const connection = neon<boolean, boolean>(env.PGURL_NONPOOLING);

export const postgresql = drizzle(connection, { schema, logger: !evnIs('production') });

export const getEffectRecordQuery = postgresql.query.effects
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getEffectRecord');
export const getItemRecordQuery = postgresql.query.items
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getItemRecord');
export const getRumorRecordQuery = postgresql.query.rumors
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getRumorRecord');
export const getTraitRecordQuery = postgresql.query.traits
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getTraitRecord');

export const getUserRecordQuery = postgresql.query.users
	.findFirst({
		where: (schema, { eq, sql }) => eq(schema.username, sql.placeholder('username')),
		columns: { githubProfile: true },
	})
	.prepare('getUserRecordQuery');

export const getAllEffectIdsQuery = postgresql.query.effects
	.findMany({ columns: { id: true } })
	.prepare('getAllEffectIds');
export const getAllItemIdsQuery = postgresql.query.items.findMany({ columns: { id: true } }).prepare('getAllItemIds');
export const getAllRumorIdsQuery = postgresql.query.rumors
	.findMany({ columns: { id: true } })
	.prepare('getAllRumorIds');
export const getAllTraitIdsQuery = postgresql.query.traits
	.findMany({ columns: { id: true } })
	.prepare('getAllTraitIds');

export const exportEffectsQuery = postgresql.query.effects.findMany().prepare('exportEffects');
export const exportItemsQuery = postgresql.query.items.findMany().prepare('exportItems');
export const exportRumorsQuery = postgresql.query.rumors.findMany().prepare('exportRumors');
export const exportTraitsQuery = postgresql.query.traits.findMany().prepare('exportTraits');

export const exportDBQueriesMap: ExportDBQueriesMap = {
	effect: exportEffectsQuery,
	item: exportItemsQuery,
	rumor: exportRumorsQuery,
	trait: exportTraitsQuery,
};
