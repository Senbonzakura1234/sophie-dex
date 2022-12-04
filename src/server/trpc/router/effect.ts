import { publicProcedure, router } from '@root/server/trpc/trpc';
import { searchQueryValidator } from '@root/types/common/zod';

export const effectRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }) => {
		const { cursor, page, limit, search, sortBy, direction } = input;
		const records = await ctx.prisma.effect.findMany({
			orderBy: {
				[sortBy]: direction,
			},
			skip: (page - 1) * limit,
			take: limit,
			cursor: cursor ? { id: cursor } : undefined,
			...(search
				? {
						where: {
							name: {
								contains: search,
							},
						},
				  }
				: {}),
		});
		const newCursor = records.at(-1)?.id as string;
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
