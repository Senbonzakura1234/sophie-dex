import type { Effect } from '@prisma/client';
import { defaultLimit } from '@root/constants';
import { publicProcedure, router } from '@root/server/trpc/trpc';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import type { ListRecord } from '@root/types/model';
import { TRPCError } from '@trpc/server';

export const effectRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }) => {
		const { search, sortBy, direction, page, limit, cursor } = { ...input };

		const pageInt = page ?? 1;
		const limitInt = limit ?? defaultLimit;

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
					[sortBy ?? 'grade']: direction ?? 'asc',
				},
				skip: (pageInt - 1) * limitInt,
				take: limitInt,
				cursor: cursor ? { id: cursor } : undefined,
			}),
		]);

		const newCursor = records.at(-1)?.id as string;

		const listRecord: ListRecord<Effect> = {
			records,
			cursor: newCursor,
			page,
			limit,
			totalRecord,
			totalPage: Math.ceil(totalRecord / limitInt),
		};

		return listRecord;
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ ctx, input }) => {
		const { id } = input;
		if (!id)
			throw new TRPCError({
				code: 'BAD_REQUEST',
				message: 'Invalid Record Id.',
			});

		const record = await ctx.prisma.effect.findFirst({ where: { id } });

		if (record) return record;

		throw new TRPCError({
			code: 'NOT_FOUND',
			message: 'Record not found.',
			cause: `Record id: ${id}`,
		});
	}),
});
