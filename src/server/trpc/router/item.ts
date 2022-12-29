import type { Item, Prisma } from '@prisma/client';
import { defaultLimit } from '@root/constants';
import { publicProcedure, router } from '@root/server/trpc/trpc';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import type { ListRecord } from '@root/types/model';
import { TRPCError } from '@trpc/server';

export const itemRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }): Promise<ListRecord<Item>> => {
		const { search, sortBy, direction, color, relatedCategory, page, category, recipeType } = { ...input };

		const pageInt = page ?? 1;

		const where = {
			...(search ? { name: { contains: search, mode: 'insensitive' } } : {}),
			AND: [
				...(relatedCategory ? [{ relatedCategories: { some: { name: { equals: relatedCategory } } } }] : []),
				...(color ? [{ color: { equals: color } }] : []),
				...(recipeType ? [{ recipeType: { equals: recipeType } }] : []),
				...(category ? [{ category: { equals: category } }] : []),
			],
		} satisfies Prisma.ItemWhereInput;

		const [totalRecord, records] = await ctx.prisma
			.$transaction([
				ctx.prisma.item.count({ where }),
				ctx.prisma.item.findMany({
					where,
					orderBy: { [sortBy ?? 'index']: direction ?? 'asc' },
					skip: (pageInt - 1) * defaultLimit,
					take: defaultLimit,
				}),
			])
			.catch(error => {
				console.log({ error });

				throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Some Thing When Wrong On The Server.' });
			});

		return { records, page, totalRecord, totalPage: Math.ceil(totalRecord / defaultLimit) };
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ ctx, input }): Promise<Item> => {
		const { id } = input;

		if (!id) throw new TRPCError({ code: 'BAD_REQUEST', message: 'Invalid Record Id.' });

		const record = await ctx.prisma.item.findFirst({ where: { id } }).catch(error => {
			console.log({ error });

			throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Some Thing When Wrong On The Server.' });
		});

		if (record) return record;

		throw new TRPCError({ code: 'NOT_FOUND', message: 'Record not found.', cause: `Record id: ${id}` });
	}),
});
