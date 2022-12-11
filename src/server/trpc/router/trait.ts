import { defaultLimit, defaultLimitInt, defaultSearchParam } from '@root/constants';
import { publicProcedure, router } from '@root/server/trpc/trpc';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { TRPCError } from '@trpc/server';
import traits from 'prisma/data/traits';

export const traitRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }) => {
		const { search, sortBy, direction, traitCategory, page, limit, cursor } = { ...defaultSearchParam, ...input };

		const pageInt = parseInt(page ?? '1');
		const limitInt = parseInt(limit ?? defaultLimit);

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
		const data = traits.filter(trait => trait.mergeFrom.length > 1);
		return {
			records: data.slice(0, defaultLimitInt),
			cursor: null,
			page: '1',
			limit: defaultLimit,
			totalRecord: data.length,
			totalPage: Math.ceil(data.length / defaultLimitInt),
		};
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ ctx, input }) => {
		try {
			const { id } = input;
			if (!id)
				throw new TRPCError({
					code: 'BAD_REQUEST',
					message: 'Invalid Trait Id.',
				});
			return await ctx.prisma.trait.findFirstOrThrow({ where: { id } });
		} catch (cause) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'Trait not found.',
				cause,
			});
		}
	}),
});
