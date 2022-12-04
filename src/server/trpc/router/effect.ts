import { publicProcedure, router } from '@root/server/trpc/trpc';
import { searchQueryValidator } from '@root/types/common/zod';

export const effectRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }) => {
		const { search, sortBy, direction } = input;
		const records = await ctx.prisma.effect.findMany({
			orderBy: {
				[sortBy]: direction,
			},

			where: {
				...(search
					? {
							OR: [
								{
									name: {
										contains: search,
										mode: 'insensitive',
									},
								},
								{
									description: {
										contains: search,
										mode: 'insensitive',
									},
								},
							],
					  }
					: {}),
			},
		});

		return records;
	}),
	// getOne: publicProcedure.query(async ({ ctx }) => {}),
});
