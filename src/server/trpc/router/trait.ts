import { publicProcedure, router } from '@root/server/trpc/trpc';
import { searchQueryValidator } from '@root/types/common/zod';

export const traitRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }) => {
		const { search, sortBy, direction, traitCategory } = input;
		const records = await ctx.prisma.trait.findMany({
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
				...(traitCategory
					? {
							AND: [
								{
									traitCategories: {
										equals: traitCategory,
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
