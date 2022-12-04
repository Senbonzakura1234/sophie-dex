import { publicProcedure, router } from '@root/server/trpc/trpc';
import { searchQueryValidator } from '@root/types/common/zod';

export const itemRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }) => {
		const { search, sortBy, direction, color, itemCategory, page, limit, cursor } = input;

		const [totalRecord, records] = await ctx.prisma.$transaction([
			ctx.prisma.item.count({
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
			}),
			ctx.prisma.item.findMany({
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
				orderBy: {
					[sortBy]: direction,
				},
				skip: (page - 1) * limit,
				take: limit,
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
			totalPage: Math.ceil(totalRecord / limit),
		};
	}),
	// getOne: publicProcedure.query(async ({ ctx }) => {}),
});
