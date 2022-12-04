import { publicProcedure, router } from '@root/server/trpc/trpc';
import { serverSearchQueryValidator } from '@root/types/common/zod';

export const effectRouter = router({
	getAll: publicProcedure.input(serverSearchQueryValidator).query(async ({ ctx, input }) => {
		const { search, sortBy, direction, page, limit, cursor } = input;

		const [totalRecord, records] = await ctx.prisma.$transaction([
			ctx.prisma.effect.count({
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
			}),
			ctx.prisma.effect.findMany({
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
