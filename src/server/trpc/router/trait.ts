import type { Prisma, Trait } from '@prisma/client';
import { defaultLimit } from '@root/constants';
import { publicProcedure, router } from '@root/server/trpc/trpc';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import type { ListRecord } from '@root/types/model';
import { TRPCError } from '@trpc/server';

export const traitRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }): Promise<ListRecord<Trait>> => {
		const { search, sortBy = 'index', direction = 'asc', category, page, limit } = { ...input };

		const pageInt = page ?? 1;
		const limitInt = limit ?? defaultLimit;

		const where = {
			...(search
				? {
						OR: [
							{ name: { contains: search, mode: 'insensitive' } },
							{ description: { contains: search, mode: 'insensitive' } },
						],
				  }
				: {}),
			...(category ? { AND: [{ categories: { has: category } }] } : {}),
		} satisfies Prisma.TraitWhereInput;

		const [totalRecord, records] = await ctx.prisma
			.$transaction([
				ctx.prisma.trait.count({ where }),
				ctx.prisma.trait.findMany({
					where,
					orderBy: { [!!sortBy && sortBy !== 'level' ? sortBy : 'index']: direction ?? 'asc' },
					skip: (pageInt - 1) * limitInt,
					take: limitInt,
				}),
			])
			.catch(error => {
				console.log({ error });

				throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Some Thing When Wrong On The Server.' });
			});

		return { records, page, limit, totalRecord, totalPage: Math.ceil(totalRecord / limitInt) };
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ ctx, input }): Promise<Trait> => {
		const { id } = input;

		if (!id) throw new TRPCError({ code: 'BAD_REQUEST', message: 'Invalid Record Id.' });

		const record = await ctx.prisma.trait.findFirst({ where: { id } }).catch(error => {
			console.log({ error });

			throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Some Thing When Wrong On The Server.' });
		});

		if (record) return record;

		throw new TRPCError({ code: 'NOT_FOUND', message: 'Record not found.', cause: `Record id: ${id}` });
	}),
});
