import { defaultSearchParam } from '@root/constants';
import { publicProcedure, router } from '@root/server/trpc/trpc';
import { searchQueryValidator } from '@root/types/common/zod';
import traits from 'prisma/data/traits';

export const traitRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }) => {
		const { search, sortBy, direction, traitCategory, page, limit, cursor } = { ...defaultSearchParam, ...input };

		const pageInt = parseInt(page ?? '1');
		const limitInt = parseInt(limit ?? '10');

		const where = {
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
									has: traitCategory,
								},
							},
						],
				  }
				: {}),
		} as never;

		const [totalRecord, records] = await ctx.prisma.$transaction([
			ctx.prisma.trait.count({
				where,
			}),
			ctx.prisma.trait.findMany({
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

	getAllStub: publicProcedure.input(searchQueryValidator).query(async () => {
		const data = traits.filter(trait => trait.mergeFrom.length > 0);
		return {
			records: data.slice(0, 10),
			cursor: null,
			page: 1,
			limit: 10,
			totalRecord: data.length,
			totalPage: Math.ceil(data.length / 10),
		};
	}),
});
