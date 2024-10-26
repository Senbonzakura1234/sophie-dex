import type { AdapterAccountType } from '@auth/core/adapters';
import { APP_DB_PREFIX } from '@root/constants/common';
import type { ImprovedOmit } from '@root/types/common';
import type { SearchQuery } from '@root/types/common/zod';
import type { ModuleIdEnum, RelatedCategoryEnum } from '@root/types/common/zod/generic';
import {
	genericCategoryEnumSchema,
	genericColorEnumSchema,
	genericRecipeTypeEnumSchema,
	genericRelatedCategoryEnumSchema,
	genericRumorTypeEnumSchema
} from '@root/types/common/zod/generic';
import dayjs from 'dayjs';
import type { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { boolean, integer, jsonb, pgTableCreator, primaryKey, smallint, text, timestamp } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { ulid } from 'ulidx';

//#region <Field Types>

export type HighlightText = { content: string };
export type HyperLinkRecord = { id: string; name: string; table: ModuleIdEnum };
export type HyperLinkSearch = { searchQuery: SearchQuery; table: ModuleIdEnum };

export type HyperLinkData = HighlightText | HyperLinkRecord | HyperLinkSearch;

export type ItemDescription = {
	hunt: Array<string>;
	location: Array<string>;
	rumor: HyperLinkRecord | null;
	special: string | null;
	shop: string | null;
};

export type RelatedCategory = { count: number; name: RelatedCategoryEnum };

export type HyperLinkMap = {
	contentData: Array<HyperLinkData>;
	contentText: Array<string>;
};
//#endregion

export const pgTable = pgTableCreator(name => `${APP_DB_PREFIX}_${name}`);

//#region <Tables Schema>

export const effects = pgTable('effects', {
	id: text('id').primaryKey(),
	keyWords: text('key_words').notNull(),
	name: text('name').notNull(),
	moduleId: text('module_id', { enum: ['effect'] }).notNull(),

	index: smallint('index').notNull(),
	description: text('description').notNull()
});

export const items = pgTable('items', {
	id: text('id').primaryKey(),
	keyWords: text('key_words').notNull(),
	name: text('name').notNull(),
	moduleId: text('module_id', { enum: ['item'] }).notNull(),

	category: text('category', { enum: genericCategoryEnumSchema._def.values }).notNull(),
	color: text('color', { enum: genericColorEnumSchema._def.values }).notNull(),
	description: jsonb('description').$type<ItemDescription>().notNull(),
	index: smallint('index').notNull(),
	level: smallint('level').notNull(),
	recipeIdea: jsonb('recipe_idea').$type<HyperLinkMap>(),
	recipeType: text('recipe_type', { enum: genericRecipeTypeEnumSchema._def.values }),
	relatedCategories: text('related_categories', { enum: genericRelatedCategoryEnumSchema._def.values })
		.array()
		.notNull(),
	traitPresent: jsonb('trait_present').$type<HyperLinkRecord>()
});

export const rumors = pgTable('rumors', {
	id: text('id').primaryKey(),
	keyWords: text('key_words').notNull(),
	name: text('name').notNull(),
	moduleId: text('module_id', { enum: ['rumor'] }).notNull(),

	description: jsonb('description').$type<HyperLinkMap>().notNull(),
	location: text('location').notNull(),
	price: smallint('price').notNull(),
	rumorType: text('rumor_type', { enum: genericRumorTypeEnumSchema._def.values }).notNull()
});

export const traits = pgTable('traits', {
	id: text('id').primaryKey(),
	keyWords: text('key_words').notNull(),
	name: text('name').notNull(),
	moduleId: text('module_id', { enum: ['trait'] }).notNull(),

	categories: text('categories', { enum: genericCategoryEnumSchema._def.values }).array().notNull(),
	description: text('description').notNull(),
	index: smallint('index').notNull(),
	itemPresent: jsonb('item_present').$type<HyperLinkRecord>(),
	mergeFrom: jsonb('merge_from').$type<Array<[HyperLinkRecord, HyperLinkRecord]>>().notNull()
});

export const users = pgTable('users', {
	id: text('id').primaryKey().$default(ulid),

	name: text('name').notNull().unique(),
	email: text('email').notNull(),

	emailVerified: timestamp('email_verified', { mode: 'date' }),
	image: text('image').$default(() => ''),

	bookmarkedEffectList: text('bookmarked_effect_list')
		.array()
		.notNull()
		.$default(() => []),
	bookmarkedItemList: text('bookmarked_item_list')
		.array()
		.notNull()
		.$default(() => []),
	bookmarkedRumorList: text('bookmarked_rumor_list')
		.array()
		.notNull()
		.$default(() => []),
	bookmarkedTraitList: text('bookmarked_trait_list')
		.array()
		.notNull()
		.$default(() => []),

	createdAt: timestamp('created_at', { precision: 6, withTimezone: true, mode: 'string' }).defaultNow(),
	updatedAt: timestamp('updated_at', { precision: 6, withTimezone: true, mode: 'string' }).$onUpdateFn(() =>
		dayjs().format('YYYY-MM-DD HH:mm:ss.SSSSSSZZ')
	)
});

export const accounts = pgTable(
	'accounts',
	{
		userId: text('user_id')
			.notNull()
			.references(() => users.id, { onDelete: 'cascade' }),
		type: text('type').$type<AdapterAccountType>().notNull(),
		provider: text('provider').notNull(),
		providerAccountId: text('provider_account_id').notNull(),
		refresh_token: text('refresh_token'),
		access_token: text('access_token'),
		expires_at: integer('expires_at'),
		expires_in: integer('expires_in'),
		token_type: text('token_type'),
		scope: text('scope'),
		id_token: text('id_token'),
		session_state: text('session_state'),

		createdAt: timestamp('created_at', { precision: 6, withTimezone: true, mode: 'string' }).defaultNow(),
		updatedAt: timestamp('updated_at', { precision: 6, withTimezone: true, mode: 'string' }).$onUpdateFn(() =>
			dayjs().format('YYYY-MM-DD HH:mm:ss.SSSSSSZZ')
		)
	},
	account => ({ compoundKey: primaryKey({ columns: [account.provider, account.providerAccountId] }) })
);

export const sessions = pgTable('sessions', {
	sessionToken: text('session_token').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => users.id, { onDelete: 'cascade' }),
	expires: timestamp('expires', { mode: 'date' }).notNull(),

	createdAt: timestamp('created_at', { precision: 6, withTimezone: true, mode: 'string' }).defaultNow(),
	updatedAt: timestamp('updated_at', { precision: 6, withTimezone: true, mode: 'string' }).$onUpdateFn(() =>
		dayjs().format('YYYY-MM-DD HH:mm:ss.SSSSSSZZ')
	)
});

export const verificationTokens = pgTable(
	'verification_tokens',
	{
		identifier: text('identifier').notNull(),
		token: text('token').notNull(),
		expires: timestamp('expires', { mode: 'date' }).notNull(),

		createdAt: timestamp('created_at', { precision: 6, withTimezone: true, mode: 'string' }).defaultNow(),
		updatedAt: timestamp('updated_at', { precision: 6, withTimezone: true, mode: 'string' }).$onUpdateFn(() =>
			dayjs().format('YYYY-MM-DD HH:mm:ss.SSSSSSZZ')
		)
	},
	verificationToken => ({
		compositePk: primaryKey({ columns: [verificationToken.identifier, verificationToken.token] })
	})
);

export const authenticators = pgTable(
	'authenticators',
	{
		credentialID: text('credential_iD').notNull().unique(),
		userId: text('userId')
			.notNull()
			.references(() => users.id, { onDelete: 'cascade' }),
		providerAccountId: text('provider_account_id').notNull(),
		credentialPublicKey: text('credential_public_key').notNull(),
		counter: integer('counter').notNull(),
		credentialDeviceType: text('credential_device_type').notNull(),
		credentialBackedUp: boolean('credential_backed_up').notNull(),
		transports: text('transports'),

		createdAt: timestamp('created_at', { precision: 6, withTimezone: true, mode: 'string' }).defaultNow(),
		updatedAt: timestamp('updated_at', { precision: 6, withTimezone: true, mode: 'string' }).$onUpdateFn(() =>
			dayjs().format('YYYY-MM-DD HH:mm:ss.SSSSSSZZ')
		)
	},
	authenticator => ({
		compositePK: primaryKey({ columns: [authenticator.userId, authenticator.credentialID] })
	})
);

export const profiles = pgTable('profiles', {
	id: text('id').primaryKey().$default(ulid),

	profile_id: integer('profile_id').notNull(),

	login: text('login').unique().notNull(),

	userId: text('userId'),

	avatar_url: text('avatar_url').notNull().default(''),
	type: text('type').notNull(),
	name: text('name'),
	company: text('company'),
	blog: text('blog'),
	location: text('location'),
	email: text('email'),
	hireable: boolean('hireable'),
	bio: text('bio'),
	twitter_username: text('twitter_username'),
	public_repos: integer('public_repos').notNull(),
	followers: integer('followers').notNull(),
	following: integer('following').notNull(),
	owned_private_repos: integer('owned_private_repos'),
	collaborators: integer('collaborators'),
	two_factor_authentication: boolean('two_factor_authentication'),

	createdAt: timestamp('created_at', { precision: 6, withTimezone: true, mode: 'string' }).defaultNow(),
	updatedAt: timestamp('updated_at', { precision: 6, withTimezone: true, mode: 'string' }).$onUpdateFn(() =>
		dayjs().format('YYYY-MM-DD HH:mm:ss.SSSSSSZZ')
	)
});

export const insertProfileValidationSchema = createInsertSchema(profiles);

//#endregion

//#region <Tables Types>

export type Effect = InferSelectModel<typeof effects>;
export type Item = InferSelectModel<typeof items>;
export type Rumor = InferSelectModel<typeof rumors>;
export type Trait = InferSelectModel<typeof traits>;

export type User = InferSelectModel<typeof users>;
export type UserCreate = InferInsertModel<typeof users>;

export type Account = InferSelectModel<typeof accounts>;
export type AccountCreate = InferInsertModel<typeof accounts>;

export type Session = InferSelectModel<typeof sessions>;
export type SessionCreate = InferInsertModel<typeof sessions>;

export type VerificationToken = InferSelectModel<typeof verificationTokens>;
export type VerificationTokenCreate = InferInsertModel<typeof verificationTokens>;

export type Authenticator = InferSelectModel<typeof authenticators>;
export type AuthenticatorCreate = InferInsertModel<typeof authenticators>;

export type Profile = InferSelectModel<typeof profiles>;
export type ProfileCreate = InferInsertModel<typeof profiles>;

export type CommonRecord = ImprovedOmit<Effect | Item | Rumor | Trait, 'description'>;

//#endregion
