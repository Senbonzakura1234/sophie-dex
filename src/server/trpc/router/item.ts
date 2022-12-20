import type { Item } from '@prisma/client';
import { defaultLimit } from '@root/constants';
import { publicProcedure, router } from '@root/server/trpc/trpc';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import type { ListRecord } from '@root/types/model';
import { TRPCError } from '@trpc/server';

export const itemRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }): Promise<ListRecord<Item>> => {
		const { search, sortBy, direction, color, relatedCategory, page, limit } = {
			...input,
		};

		const pageInt = page ?? 1;
		const limitInt = limit ?? defaultLimit;

		const where = {
			...(search
				? {
						name: {
							contains: search,
							mode: 'insensitive',
						},
				  }
				: {}),
			AND: [
				...(relatedCategory
					? [
							{
								relatedCategories: {
									some: {
										name: {
											equals: relatedCategory,
										},
									},
								},
							},
					  ]
					: []),
				...(color
					? [
							{
								color: {
									equals: color,
								},
							},
					  ]
					: []),
			],
		} as never;

		const [totalRecord, records] = await ctx.prisma.$transaction([
			ctx.prisma.item.count({
				where,
			}),
			ctx.prisma.item.findMany({
				where,
				orderBy: {
					[sortBy ?? 'grade']: direction ?? 'asc',
				},
				skip: (pageInt - 1) * limitInt,
				take: limitInt,
			}),
		]);

		return {
			records,
			page,
			limit,
			totalRecord,
			totalPage: Math.ceil(totalRecord / limitInt),
		};
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ ctx, input }): Promise<Item> => {
		const { id } = input;
		if (!id)
			throw new TRPCError({
				code: 'BAD_REQUEST',
				message: 'Invalid Record Id.',
			});

		const record = await ctx.prisma.item.findFirst({ where: { id } });

		if (record) return record;

		throw new TRPCError({
			code: 'NOT_FOUND',
			message: 'Record not found.',
			cause: `Record id: ${id}`,
		});
	}),
});
