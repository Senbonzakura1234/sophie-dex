import {
	bookmarkRecord,
	getEffects,
	getItems,
	getModuleBookmarks,
	getProfile,
	getRumors,
	getTraits
} from '@root/server/postgresql';
import {
	exportEffectsQuery,
	exportItemsQuery,
	exportRumorsQuery,
	exportTraitsQuery,
	getAllEffectIdsQuery,
	getAllItemIdsQuery,
	getAllRumorIdsQuery,
	getAllTraitIdsQuery,
	getEffectRecordQuery,
	getItemRecordQuery,
	getRumorRecordQuery,
	getTraitRecordQuery
} from '@root/server/postgresql/repository';
import {
	bookmarkQueryValidator,
	idQueryValidator,
	moduleIdQueryValidator,
	searchQueryValidator
} from '@root/types/common/zod';
import { env } from '@root/utils/common/env';
import { getSessionResult } from '@root/utils/server';
import { exportRecords, getAllRecordIds, getContentRecord } from '@root/utils/server/database';
import { initTRPC } from '@trpc/server';
import { ZodError } from 'zod';

export const createContext = async () => ({ sessionResult: await getSessionResult() });

const t = initTRPC.context<typeof createContext>().create({
	isDev: env.NEXT_PUBLIC_NODE_ENV !== 'production',
	errorFormatter({ shape, error }) {
		return {
			...shape,
			data: {
				...shape.data,
				zodError: error.cause instanceof ZodError ? error.cause.flatten().fieldErrors : null
			}
		};
	}
});

const procedure = t.procedure;

const protectedProcedure = t.procedure.use(opts => {
	if (opts.ctx.sessionResult.isSuccess) return opts.next();

	throw opts.ctx.sessionResult.error;
});

export const appRouter = t.router({
	effect: {
		getAll: procedure
			.input(searchQueryValidator)
			.query(({ input, ctx }) => getEffects(input, ctx.sessionResult.result?.user.name)),

		getOne: procedure.input(idQueryValidator).query(({ input }) => getContentRecord(getEffectRecordQuery, input)),

		getAllIds: procedure.query(() => getAllRecordIds(getAllEffectIdsQuery)),

		export: procedure.query(() => exportRecords(exportEffectsQuery))
	},
	item: {
		getAll: procedure
			.input(searchQueryValidator)
			.query(({ input, ctx }) => getItems(input, ctx.sessionResult.result?.user.name)),

		getOne: procedure.input(idQueryValidator).query(({ input }) => getContentRecord(getItemRecordQuery, input)),

		getAllIds: procedure.query(() => getAllRecordIds(getAllItemIdsQuery)),

		export: procedure.query(() => exportRecords(exportItemsQuery))
	},
	rumor: {
		getAll: procedure
			.input(searchQueryValidator)
			.query(({ input, ctx }) => getRumors(input, ctx.sessionResult.result?.user.name)),

		getOne: procedure.input(idQueryValidator).query(({ input }) => getContentRecord(getRumorRecordQuery, input)),

		getAllIds: procedure.query(() => getAllRecordIds(getAllRumorIdsQuery)),

		export: procedure.query(() => exportRecords(exportRumorsQuery))
	},
	trait: {
		getAll: procedure
			.input(searchQueryValidator)
			.query(({ input, ctx }) => getTraits(input, ctx.sessionResult.result?.user.name)),

		getOne: procedure.input(idQueryValidator).query(({ input }) => getContentRecord(getTraitRecordQuery, input)),

		getAllIds: procedure.query(() => getAllRecordIds(getAllTraitIdsQuery)),

		export: procedure.query(() => exportRecords(exportTraitsQuery))
	},
	user: {
		getModuleBookmarks: protectedProcedure
			.input(moduleIdQueryValidator)
			.query(({ input, ctx }) => getModuleBookmarks(input, ctx.sessionResult.result?.user.name || '')),
		bookmark: protectedProcedure
			.input(bookmarkQueryValidator)
			.mutation(({ input, ctx }) => bookmarkRecord(input, ctx.sessionResult.result?.user.name || '')),
		getProfile: protectedProcedure.query(({ ctx }) => getProfile(ctx.sessionResult.result?.user.name || ''))
	}
});

export type AppRouter = typeof appRouter;
