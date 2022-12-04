import { publicProcedure, router } from '@root/server/trpc/trpc';
import { searchQueryValidator } from '@root/types/common/zod';

export const itemRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }) => {
		const { search, sortBy, direction, color, itemCategory } = input;
		const records = await ctx.prisma.item.findMany({
			orderBy: {
				[sortBy]: direction,
			},

			where: {
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
			},
		});

		return records;
	}),
	// getOne: publicProcedure.query(async ({ ctx }) => {}),
});
