import { defaultLimit, sortByMap } from '@root/constants';
import {
	db,
	getListEffectDefault,
	getListItemDefault,
	getListRumorDefault,
	getListTraitDefault,
} from '@root/server/database/';
import type { Effect, Item, Rumor, Trait } from '@root/server/database/schema';
import { effects, items, rumors, traits } from '@root/server/database/schema';
import type { PageProps } from '@root/types/common';
import { searchQueryValidator } from '@root/types/common/zod';
import type { CommonRecord, DBListResult, ListRecord } from '@root/types/model';
import { ANYQuery, CountQuery, getDirection, getSortField, onQueryDBError } from '@root/utils/server';
import type { SQL } from 'drizzle-orm';
import { and, eq, ilike, or } from 'drizzle-orm';

import 'server-only';

class ListRecordRepository {
	private processInput(input: PageProps['searchParams']) {
		return searchQueryValidator.parse(input);
	}

	private processOutput<TRecord extends CommonRecord>(dbResult: DBListResult<TRecord>): ListRecord<TRecord> {
		const [totalRecord, records] = [dbResult[0]?.totalRecord ?? 0, dbResult.map(({ record }) => record)] as const;

		return { records, totalRecord, totalPage: Math.ceil(totalRecord / defaultLimit) };
	}

	async getEffects(input: PageProps['searchParams']): Promise<ListRecord<Effect>> {
		const { search, sortBy, direction, page } = this.processInput(input);

		if (!search && !sortBy && !direction)
			return await getListEffectDefault
				.execute({ offset: ((page ?? 1) - 1) * defaultLimit })
				.then(this.processOutput)
				.catch(onQueryDBError);

		return await db
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
			.limit(defaultLimit)
			.offset(((page ?? 1) - 1) * defaultLimit)
			.then(this.processOutput)
			.catch(onQueryDBError);
	}

	async getItems(input: PageProps['searchParams']): Promise<ListRecord<Item>> {
		const { search, sortBy, direction, color, relatedCategory, page, category, recipeType } =
			this.processInput(input);

		const OR: Array<SQL> = search ? [ilike(items.name, `%${search}%`), ilike(items.keyWords, `%${search}%`)] : [];

		const AND: Array<SQL> = [];
		if (relatedCategory) AND.push(ANYQuery(items.relatedCategories.name, relatedCategory));
		if (color) AND.push(eq(items.color, color));
		if (recipeType) AND.push(eq(items.recipeType, recipeType));
		if (category) AND.push(eq(items.category, category));

		if (OR.length === 0 && AND.length === 0 && !sortBy && !direction)
			return await getListItemDefault
				.execute({ offset: ((page ?? 1) - 1) * defaultLimit })
				.then(this.processOutput)
				.catch(onQueryDBError);

		return await db
			.select({ totalRecord: CountQuery, record: items })
			.from(items)
			.where(and(or(...OR), ...AND))
			.orderBy(getDirection(direction)(items[getSortField(sortByMap.item, 'index', sortBy)]))
			.limit(defaultLimit)
			.offset(((page ?? 1) - 1) * defaultLimit)
			.then(this.processOutput)
			.catch(onQueryDBError);
	}

	async getRumors(input: PageProps['searchParams']): Promise<ListRecord<Rumor>> {
		const { search, sortBy, direction, page, rumorType } = this.processInput(input);

		const OR: Array<SQL> = search ? [ilike(rumors.name, `%${search}%`), ilike(rumors.keyWords, `%${search}%`)] : [];

		const AND: Array<SQL> = [];
		if (rumorType) AND.push(eq(rumors.rumorType, rumorType));

		if (OR.length === 0 && AND.length === 0 && !sortBy && !direction)
			return await getListRumorDefault
				.execute({ offset: ((page ?? 1) - 1) * defaultLimit })
				.then(this.processOutput)
				.catch(onQueryDBError);

		return await db
			.select({ totalRecord: CountQuery, record: rumors })
			.from(rumors)
			.where(and(or(...OR), ...AND))
			.orderBy(getDirection(direction)(rumors[getSortField(sortByMap.rumor, 'price', sortBy)]))
			.limit(defaultLimit)
			.offset(((page ?? 1) - 1) * defaultLimit)
			.then(this.processOutput)
			.catch(onQueryDBError);
	}

	async getTraits(input: PageProps['searchParams']): Promise<ListRecord<Trait>> {
		const { search, sortBy, direction, category, page } = this.processInput(input);

		const OR: Array<SQL> = search
			? [
					ilike(traits.name, `%${search}%`),
					ilike(traits.description, `%${search}%`),
					ilike(traits.keyWords, `%${search}%`),
			  ]
			: [];

		const AND: Array<SQL> = [];
		if (category) AND.push(ANYQuery(traits.categories.name, category));

		if (OR.length === 0 && AND.length === 0 && !sortBy && !direction)
			return await getListTraitDefault
				.execute({ offset: ((page ?? 1) - 1) * defaultLimit })
				.then(this.processOutput)
				.catch(onQueryDBError);

		return await db
			.select({ totalRecord: CountQuery, record: traits })
			.from(traits)
			.where(and(or(...OR), ...AND))
			.orderBy(getDirection(direction)(traits[getSortField(sortByMap.trait, 'index', sortBy)]))
			.limit(defaultLimit)
			.offset(((page ?? 1) - 1) * defaultLimit)
			.then(this.processOutput)
			.catch(onQueryDBError);
	}
}

export const provider = new ListRecordRepository();
