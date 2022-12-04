import { publicProcedure, router } from '@root/server/trpc/trpc';
import { searchQueryValidator } from '@root/types/common/zod';

export const itemRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }) => {
		const { cursor, page, limit, search, sortBy, direction, color, itemCategory } = input;
		const records = await ctx.prisma.item.findMany({
			orderBy: {
				[sortBy]: direction,
			},
			skip: (page - 1) * limit,
			take: limit,
			cursor: cursor ? { id: cursor } : undefined,
			where: {
				AND: [
					...(search
						? [
								{
									name: {
										contains: search,
									},
								},
						  ]
						: []),
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
			},
		});

		const newCursor = records.at(-1)?.id;

		return {
			records,
			cursor: newCursor,
			page,
			limit,
			totalRecord: records.length,
			totalPage: Math.ceil(records.length / limit),
		};
	}),
	// getOne: publicProcedure.query(async ({ ctx }) => {}),
});
