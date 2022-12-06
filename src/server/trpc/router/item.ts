import { defaultSearchParam } from '@root/constants';
import { publicProcedure, router } from '@root/server/trpc/trpc';
import { searchQueryValidator } from '@root/types/common/zod';

export const itemRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }) => {
		const { search, sortBy, direction, color, itemCategory, page, limit, cursor } = {
			...defaultSearchParam,
			...input,
		};

		const pageInt = parseInt(page ?? '1');
		const limitInt = parseInt(limit ?? '10');

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

		return {
			records,
			cursor: newCursor,
			page,
			limit,
			totalRecord,
			totalPage: Math.ceil(totalRecord / limitInt),
		};
	}),
	// getOne: publicProcedure.query(async ({ ctx }) => {}),
});
