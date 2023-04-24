import type { Effect, Prisma } from '@prisma/client';
import { defaultLimit } from '@root/constants';
import { publicProcedure, router } from '@root/server/api/trpc';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import type { ListRecord } from '@root/types/model';
import { InvalidRecordIdError, RecordNotFoundError, onQueryDBError } from '@root/utils/server';

export const effectRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }): Promise<ListRecord<Effect>> => {
		const { search, sortBy, direction, page } = { ...input };

		const pageInt = page ?? 1;

		const OR: Prisma.EffectWhereInput[] | undefined = search
			? [
					{ name: { contains: search, mode: 'insensitive' } },
					{ description: { contains: search, mode: 'insensitive' } },
			  ]
			: undefined;

		const where = { OR } satisfies Prisma.EffectWhereInput;

		const [totalRecord, records] = await ctx.prisma
			.$transaction([
				ctx.prisma.effect.count({ where }),
				ctx.prisma.effect.findMany({
					where,
					orderBy: {
						[!!sortBy && sortBy !== 'price' && sortBy !== 'level' ? sortBy : 'index']: direction ?? 'asc',
					},
					skip: (pageInt - 1) * defaultLimit,
					take: defaultLimit,
				}),
			])
			.catch(onQueryDBError);

		return { records, page, totalRecord, totalPage: Math.ceil(totalRecord / defaultLimit) };
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ ctx, input }): Promise<Effect> => {
		const { id } = input;

		if (!id) throw InvalidRecordIdError();

		const record = await ctx.prisma.effect.findFirst({ where: { id } }).catch(onQueryDBError);

		if (record) return record;

		throw RecordNotFoundError(id);
	}),
});
