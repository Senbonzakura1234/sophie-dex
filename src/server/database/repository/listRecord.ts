import 'server-only';

import { DEFAULT_LIMIT, sortByMap } from '@root/constants/common';
import {
	getListEffectDefault,
	getListItemDefault,
	getListRumorDefault,
	getListTraitDefault,
} from '@root/server/database/';
import { driver } from '@root/server/database/drivers';
import type { CommonRecord, Effect, Item, Rumor, Trait } from '@root/server/database/schema';
import { effects, items, rumors, traits } from '@root/server/database/schema';
import type { SearchQuery } from '@root/types/common/zod';
import type { DBListResult, ListRecord } from '@root/types/model';
import { CountQuery, getDirection, getOffset, getSortField, onQueryDBError } from '@root/utils/server/database';
import type { SQL } from 'drizzle-orm';
import { and, arrayOverlaps, eq, ilike, or } from 'drizzle-orm';

const processOutput = <TRecord extends CommonRecord>(dbResult: DBListResult<TRecord>): ListRecord<TRecord> => {
	const [totalRecord, records] = [dbResult[0]?.totalRecord ?? 0, dbResult.map(({ record }) => record)] as const;

	return { records, totalRecord, totalPage: Math.ceil(totalRecord / DEFAULT_LIMIT) };
};

export const getEffects = async (input: SearchQuery): Promise<ListRecord<Effect>> => {
	const { search, sortBy, direction, page } = input;

	if (!search && !sortBy && !direction)
		return await getListEffectDefault
			.execute({ offset: getOffset(page) })
			.then(processOutput)
			.catch(onQueryDBError);

	return await driver
		.select({ totalRecord: CountQuery, record: effects })
		.from(effects)
		.where(
			or(
				...(search
					? [
							ilike(effects.name, `%${search}%`),
							ilike(effects.description, `%${search}%`),
							ilike(effects.keyWords, `%${search}%`),
					  ]
					: []),
			),
		)
		.orderBy(getDirection(direction)(effects[getSortField(sortByMap.effect, 'index', sortBy)]))
		.limit(DEFAULT_LIMIT)
		.offset(getOffset(page))
		.then(processOutput)
		.catch(onQueryDBError);
};

export const getItems = async (input: SearchQuery): Promise<ListRecord<Item>> => {
	const { search, sortBy, direction, color, relatedCategory, page, category, recipeType } = await input;

	const OR: Array<SQL> = search ? [ilike(items.name, `%${search}%`), ilike(items.keyWords, `%${search}%`)] : [];

	const AND: Array<SQL> = [];
	if (relatedCategory) AND.push(arrayOverlaps(items.relatedCategories, [relatedCategory]));
	if (color) AND.push(eq(items.color, color));
	if (recipeType) AND.push(eq(items.recipeType, recipeType));
	if (category) AND.push(eq(items.category, category));

	if (OR.length === 0 && AND.length === 0 && !sortBy && !direction)
		return await getListItemDefault
			.execute({ offset: getOffset(page) })
			.then(processOutput)
			.catch(onQueryDBError);

	return await driver
		.select({ totalRecord: CountQuery, record: items })
		.from(items)
		.where(and(or(...OR), ...AND))
		.orderBy(getDirection(direction)(items[getSortField(sortByMap.item, 'index', sortBy)]))
		.limit(DEFAULT_LIMIT)
		.offset(getOffset(page))
		.then(processOutput)
		.catch(onQueryDBError);
};

export const getRumors = async (input: SearchQuery): Promise<ListRecord<Rumor>> => {
	const { search, sortBy, direction, page, rumorType } = input;

	const OR: Array<SQL> = search ? [ilike(rumors.name, `%${search}%`), ilike(rumors.keyWords, `%${search}%`)] : [];

	const AND: Array<SQL> = [];
	if (rumorType) AND.push(eq(rumors.rumorType, rumorType));

	if (OR.length === 0 && AND.length === 0 && !sortBy && !direction)
		return await getListRumorDefault
			.execute({ offset: getOffset(page) })
			.then(processOutput)
			.catch(onQueryDBError);

	return await driver
		.select({ totalRecord: CountQuery, record: rumors })
		.from(rumors)
		.where(and(or(...OR), ...AND))
		.orderBy(getDirection(direction)(rumors[getSortField(sortByMap.rumor, 'price', sortBy)]))
		.limit(DEFAULT_LIMIT)
		.offset(getOffset(page))
		.then(processOutput)
		.catch(onQueryDBError);
};

export const getTraits = async (input: SearchQuery): Promise<ListRecord<Trait>> => {
	const { search, sortBy, direction, category, page } = input;

	const OR: Array<SQL> = search
		? [
				ilike(traits.name, `%${search}%`),
				ilike(traits.description, `%${search}%`),
				ilike(traits.keyWords, `%${search}%`),
		  ]
		: [];

	const AND: Array<SQL> = [];
	if (category) AND.push(arrayOverlaps(traits.categories, [category]));

	if (OR.length === 0 && AND.length === 0 && !sortBy && !direction)
		return await getListTraitDefault
			.execute({ offset: getOffset(page) })
			.then(processOutput)
			.catch(onQueryDBError);

	return await driver
		.select({ totalRecord: CountQuery, record: traits })
		.from(traits)
		.where(and(or(...OR), ...AND))
		.orderBy(getDirection(direction)(traits[getSortField(sortByMap.trait, 'index', sortBy)]))
		.limit(DEFAULT_LIMIT)
		.offset(getOffset(page))
		.then(processOutput)
		.catch(onQueryDBError);
};
