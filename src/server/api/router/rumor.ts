import type { Prisma, Rumor } from '@prisma/client';
import { defaultLimit } from '@root/constants';
import { publicProcedure, router } from '@root/server/api/trpc';
import { idQueryValidator, searchQueryValidator } from '@root/types/common/zod';
import type { ListRecord } from '@root/types/model';
import { InvalidRecordIdError, RecordNotFoundError, onQueryDBError } from '@root/utils/server';

export const rumorRouter = router({
	getAll: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }): Promise<ListRecord<Rumor>> => {
		const { search, sortBy, direction, page, rumorType } = { ...input };

		const pageInt = page ?? 1;

		const OR: Prisma.RumorWhereInput[] | undefined = search
			? [
					{ name: { contains: search, mode: 'insensitive' } },
					{ location: { contains: search, mode: 'insensitive' } },
			  ]
			: undefined;

		const AND: Prisma.RumorWhereInput[] = [];

		if (rumorType) AND.push({ rumorType: { equals: rumorType } });

		const where = { OR, AND } satisfies Prisma.RumorWhereInput;

		const [totalRecord, records] = await ctx.prisma
			.$transaction([
				ctx.prisma.rumor.count({ where }),
				ctx.prisma.rumor.findMany({
					where,
					orderBy: {
						[!!sortBy && sortBy !== 'index' && sortBy !== 'level' ? sortBy : 'price']: direction ?? 'asc',
					},
					skip: (pageInt - 1) * defaultLimit,
					take: defaultLimit,
				}),
			])
			.catch(onQueryDBError);

		return { records, page, totalRecord, totalPage: Math.ceil(totalRecord / defaultLimit) };
	}),

	getOne: publicProcedure.input(idQueryValidator).query(async ({ ctx, input }): Promise<Rumor> => {
		const { id } = input;

		if (!id) throw InvalidRecordIdError();

		const record = await ctx.prisma.rumor.findFirst({ where: { id } }).catch(onQueryDBError);

		if (record) return record;

		throw RecordNotFoundError(id);
	}),
});
