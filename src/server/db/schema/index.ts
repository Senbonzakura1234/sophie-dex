import type { ModuleIdEnum, RelatedCategoryEnum, SearchQuery } from '@root/types/common/zod';
import { categoryList, colorList, recipeTypeList, relatedCategoryList, rumorTypeList } from '@root/types/model';
import type { InferModel } from 'drizzle-orm';
import { jsonb, pgTable, smallint, uuid, varchar } from 'drizzle-orm/pg-core';

export type HyperLinkRecord = { id: string; name: string; table: ModuleIdEnum };

export type HyperLinkSearch = { searchQuery: SearchQuery; table: ModuleIdEnum };

export type HighlightText = { content: string };

export type ItemDescription = {
	hunt: string[];
	location: string[];
	rumor: HyperLinkRecord | null;
	special: string | null;
	shop: string | null;
};

export type RelatedCategory = { name: RelatedCategoryEnum; count: number };

export type HyperLinkMap = {
	contentText: string[];
	contentData: (HyperLinkRecord | HyperLinkSearch | HighlightText)[];
};

export const effects = pgTable('effects', {
	id: uuid('id').primaryKey(),
	name: varchar('name', { length: 256 }).notNull(),
	keyWords: varchar('key_words', { length: 256 }).notNull(),
	index: smallint('index').notNull(),
	description: varchar('description', { length: 256 }).notNull(),
});

export const items = pgTable('items', {
	id: uuid('id').primaryKey(),
	name: varchar('name', { length: 256 }).notNull(),
	keyWords: varchar('key_words', { length: 256 }).notNull(),
	index: smallint('index').notNull(),
	description: jsonb('description').$type<ItemDescription>().notNull(),
	color: varchar('color', { enum: colorList, length: 100 }).notNull(),
	relatedCategories: varchar('related_categories', { enum: relatedCategoryList, length: 100 }).array().notNull(),
	category: varchar('category', { enum: categoryList, length: 100 }).notNull(),
	level: smallint('level').notNull(),
	recipeType: varchar('recipe_type', { enum: recipeTypeList, length: 100 }),
	recipeIdea: jsonb('recipe_idea').$type<HyperLinkMap>(),
	traitPresent: jsonb('trait_present').$type<HyperLinkRecord>(),
});

export const rumors = pgTable('rumors', {
	id: uuid('id').primaryKey(),
	name: varchar('name', { length: 256 }).notNull(),
	keyWords: varchar('key_words', { length: 256 }).notNull(),
	description: jsonb('description').$type<HyperLinkMap>().notNull(),
	location: varchar('location', { length: 256 }).notNull(),
	price: smallint('price').notNull(),
	rumorType: varchar('rumor_type', { enum: rumorTypeList, length: 100 }).notNull(),
});

export const traits = pgTable('traits', {
	id: uuid('id').primaryKey(),
	name: varchar('name', { length: 256 }).notNull(),
	keyWords: varchar('key_words', { length: 256 }).notNull(),
	index: smallint('index').notNull(),
	description: varchar('description', { length: 256 }).notNull(),
	categories: varchar('categories', { enum: categoryList, length: 100 }).array().notNull(),
	mergeFrom: jsonb('merge_from').$type<HyperLinkRecord>().array(2).array().notNull(),
	itemPresent: jsonb('item_present').$type<HyperLinkRecord>(),
});

export type Effect = InferModel<typeof effects>;
export type Item = InferModel<typeof items>;
export type Rumor = InferModel<typeof rumors>;
export type Trait = InferModel<typeof traits>;

const schema = { effects, items, rumors, traits };

export type Schema = typeof schema;

export default schema;
