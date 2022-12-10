import { defaultSearchParam } from '@root/constants';
import { publicProcedure, router } from '@root/server/trpc/trpc';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import { TRPCError } from '@trpc/server';
import effects from 'prisma/data/effects';

export const effectRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }) => {
		const { search, sortBy, direction, page, limit, cursor } = { ...defaultSearchParam, ...input };

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
		} as never;

		const [totalRecord, records] = await ctx.prisma.$transaction([
			ctx.prisma.effect.count({
				where,
			}),
			ctx.prisma.effect.findMany({
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
		return {
			records: effects.slice(0, 10),
			cursor: null,
			page: 1,
			limit: 10,
			totalRecord: effects.length,
			totalPage: Math.ceil(effects.length / 10),
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
			return await ctx.prisma.effect.findFirstOrThrow({ where: { id } });
		} catch (cause) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'Trait not found.',
				cause,
			});
		}
	}),
});
