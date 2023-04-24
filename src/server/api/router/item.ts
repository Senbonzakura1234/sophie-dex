import type { Item, Prisma } from '@prisma/client';
import { defaultLimit } from '@root/constants';
import { publicProcedure, router } from '@root/server/api/trpc';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import type { ListRecord } from '@root/types/model';
import { InvalidRecordIdError, RecordNotFoundError, onQueryDBError } from '@root/utils/server';

export const itemRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }): Promise<ListRecord<Item>> => {
		const { search, sortBy, direction, color, relatedCategory, page, category, recipeType } = { ...input };

		const pageInt = page ?? 1;

		const OR: Prisma.ItemWhereInput[] | undefined = search
			? [
					{ name: { contains: search, mode: 'insensitive' } },
					{ description: { is: { shop: { contains: search, mode: 'insensitive' } } } },
					{ description: { is: { special: { contains: search, mode: 'insensitive' } } } },
			  ]
			: undefined;

		const AND: Prisma.ItemWhereInput[] = [];

		if (relatedCategory) AND.push({ relatedCategories: { some: { name: { equals: relatedCategory } } } });
		if (color) AND.push({ color: { equals: color } });
		if (recipeType) AND.push({ recipeType: { equals: recipeType } });
		if (category) AND.push({ category: { equals: category } });

		const where = { OR, AND } satisfies Prisma.ItemWhereInput;

		const [totalRecord, records] = await ctx.prisma
			.$transaction([
				ctx.prisma.item.count({ where }),
				ctx.prisma.item.findMany({
					where,
					orderBy: { [!!sortBy && sortBy !== 'price' ? sortBy : 'index']: direction ?? 'asc' },
					skip: (pageInt - 1) * defaultLimit,
					take: defaultLimit,
				}),
			])
			.catch(onQueryDBError);

		return { records, page, totalRecord, totalPage: Math.ceil(totalRecord / defaultLimit) };
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ ctx, input }): Promise<Item> => {
		const { id } = input;

		if (!id) throw InvalidRecordIdError();

		const record = await ctx.prisma.item.findFirst({ where: { id } }).catch(onQueryDBError);

		if (record) return record;

		throw RecordNotFoundError(id);
	}),
});
