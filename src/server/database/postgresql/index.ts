import { driver } from '@root/server/database/postgresql/drivers';
import type { ExportDBQueriesMap } from '@root/types/model';

export const getExampleEffectRecord = driver.query.effects.findFirst().prepare('getExampleEffectRecord');
export const getExampleItemRecord = driver.query.items.findFirst().prepare('getExampleItemRecord');
export const getExampleRumorRecord = driver.query.rumors.findFirst().prepare('getExampleRumorRecord');
export const getExampleTraitRecord = driver.query.traits.findFirst().prepare('getExampleTraitRecord');

export const getEffectRecord = driver.query.effects
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getEffectRecord');
export const getItemRecord = driver.query.items
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getItemRecord');
export const getRumorRecord = driver.query.rumors
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getRumorRecord');
export const getTraitRecord = driver.query.traits
	.findFirst({ where: (schema, { eq, sql }) => eq(schema.id, sql.placeholder('id')) })
	.prepare('getTraitRecord');

export const getAllEffectIds = driver.query.effects.findMany({ columns: { id: true } }).prepare('getAllEffectIds');
export const getAllItemIds = driver.query.items.findMany({ columns: { id: true } }).prepare('getAllItemIds');
export const getAllRumorIds = driver.query.rumors.findMany({ columns: { id: true } }).prepare('getAllRumorIds');
export const getAllTraitIds = driver.query.traits.findMany({ columns: { id: true } }).prepare('getAllTraitIds');

export const exportEffects = driver.query.effects.findMany().prepare('exportEffects');
export const exportItems = driver.query.items.findMany().prepare('exportItems');
export const exportRumors = driver.query.rumors.findMany().prepare('exportRumors');
export const exportTraits = driver.query.traits.findMany().prepare('exportTraits');

export const exportDBQueriesMap: ExportDBQueriesMap = {
	effect: exportEffects,
	item: exportItems,
	rumor: exportRumors,
	trait: exportTraits,
};
