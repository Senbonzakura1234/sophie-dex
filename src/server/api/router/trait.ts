import type { Prisma, Trait } from '@prisma/client';
import { defaultLimit } from '@root/constants';
import { publicProcedure, router } from '@root/server/api/trpc';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import type { ListRecord } from '@root/types/model';
import { InvalidRecordIdError, RecordNotFoundError, onQueryDBError } from '@root/utils/server';

export const traitRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }): Promise<ListRecord<Trait>> => {
		const { search, sortBy, direction, category, page } = { ...input };

		const pageInt = page ?? 1;

		const OR: Prisma.TraitWhereInput[] | undefined = search
			? [
					{ name: { contains: search, mode: 'insensitive' } },
					{ description: { contains: search, mode: 'insensitive' } },
					{ keyWords: { contains: search, mode: 'insensitive' } },
			  ]
			: undefined;

		const AND: Prisma.TraitWhereInput[] = [];

		if (category) AND.push({ categories: { has: category } });

		const where = { OR, AND } satisfies Prisma.TraitWhereInput;

		const [totalRecord, records] = await ctx.prisma
			.$transaction([
				ctx.prisma.trait.count({ where }),
				ctx.prisma.trait.findMany({
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

	getOne: publicProcedure.input(idQueryValidator).query(async ({ ctx, input }): Promise<Trait> => {
		const { id } = input;

		if (!id) throw InvalidRecordIdError();

		const record = await ctx.prisma.trait.findFirst({ where: { id } }).catch(onQueryDBError);

		if (record) return record;

		throw RecordNotFoundError(id);
	}),
});
