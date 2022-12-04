import { publicProcedure, router } from '@root/server/trpc/trpc';
import { serverSearchQueryValidator } from '@root/types/common/zod';

export const traitRouter = router({
	getAll: publicProcedure.input(serverSearchQueryValidator).query(async ({ ctx, input }) => {
		const { search, sortBy, direction, traitCategory, page, limit, cursor } = input;

		const [totalRecord, records] = await ctx.prisma.$transaction([
			ctx.prisma.trait.count({
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
			}),
			ctx.prisma.trait.findMany({
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
