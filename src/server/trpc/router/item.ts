import type { Item } from '@prisma/client';
import { defaultLimit, defaultSearchParam } from '@root/constants';
import { publicProcedure, router } from '@root/server/trpc/trpc';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import type { ListRecord } from '@root/types/model';
import { TRPCError } from '@trpc/server';

export const itemRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }) => {
		const { search, sortBy, direction, color, itemCategory, page, limit, cursor } = {
			...defaultSearchParam,
			...input,
		};

		const pageInt = parseInt(page ?? '1');
		const limitInt = parseInt(limit ?? defaultLimit);

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
				...(itemCategory
					? [
							{
								itemCategories: {
									some: {
										name: {
											equals: itemCategory,
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
					[sortBy]: direction,
				},
				skip: (pageInt - 1) * limitInt,
				take: limitInt,
				cursor: cursor ? { id: cursor } : undefined,
			}),
		]);

		const newCursor = records.at(-1)?.id as string;

		const listRecord: ListRecord<Item> = {
			records,
			cursor: newCursor,
			page,
			limit,
			totalRecord,
			totalPage: Math.ceil(totalRecord / limitInt),
		};

		return listRecord;
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ ctx, input }) => {
		try {
			const { id } = input;
			if (!id)
				throw new TRPCError({
					code: 'BAD_REQUEST',
					message: 'Invalid Trait Id.',
				});
			return await ctx.prisma.item.findFirstOrThrow({ where: { id } });
		} catch (cause) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'Trait not found.',
				cause,
			});
		}
	}),
});
