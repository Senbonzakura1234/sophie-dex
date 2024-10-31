import {
	bookmarkRecord,
	getEffects,
	getItems,
	getModuleBookmarks,
	getReadmeProfile,
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
} from '@root/server/postgresql/repository/query';
import { APIError } from '@root/types/common';
import {
	bookmarkQueryValidator,
	idQueryValidator,
	moduleIdQueryValidator,
	searchQueryValidator
} from '@root/types/common/zod';
import { writeLog } from '@root/utils/common';
import { env } from '@root/utils/common/env';
import type { SessionResult } from '@root/utils/server';
import { getSessionResult } from '@root/utils/server';
import { exportRecords, getAllRecordIds, getContentRecord } from '@root/utils/server/database';
import { inferRouterOutputs, initTRPC } from '@trpc/server';
import { ZodError } from 'zod';

type TrpcCreateContextFn = () => Promise<{ sessionResult: SessionResult }>;

export const createContext: TrpcCreateContextFn = async () => ({ sessionResult: await getSessionResult() });

const t = initTRPC.context<typeof createContext>().create({
	errorFormatter({ shape, error: { cause } }) {
		return {
			...shape,
			data: { ...shape.data, zodError: cause instanceof ZodError ? cause.flatten().fieldErrors : null }
		};
	}
});

const publicProcedure = t.procedure.use(async opts => {
	if (opts.type === 'query' || env.NEXT_PUBLIC_NODE_ENV !== 'production') {
		const input = await opts.getRawInput();

		writeLog({ args: [`TRPC: At path ${opts.path}: `, { input, meta: opts.meta, type: opts.type }] });
	}

	return await opts.next();
});

const protectedProcedure = publicProcedure.use(async opts => {
	if (!opts.ctx.sessionResult.isAuthenticated) throw new APIError({ code: 'UNAUTHORIZED' });

	return await opts.next();
});

export const appRouter = t.router({
	effect: {
		getAll: publicProcedure
			.input(searchQueryValidator)
			.query(async ({ input, ctx }) => getEffects(input, ctx.sessionResult)),

		getOne: publicProcedure
			.input(idQueryValidator)
			.query(({ input }) => getContentRecord(getEffectRecordQuery, input)),

		getAllIds: publicProcedure.query(() => getAllRecordIds(getAllEffectIdsQuery)),

		export: publicProcedure.query(() => exportRecords(exportEffectsQuery))
	},
	item: {
		getAll: publicProcedure
			.input(searchQueryValidator)
			.query(async ({ input, ctx }) => getItems(input, ctx.sessionResult)),

		getOne: publicProcedure.input(idQueryValidator).query(({ input }) => getContentRecord(getItemRecordQuery, input)),

		getAllIds: publicProcedure.query(() => getAllRecordIds(getAllItemIdsQuery)),

		export: publicProcedure.query(() => exportRecords(exportItemsQuery))
	},
	rumor: {
		getAll: publicProcedure
			.input(searchQueryValidator)
			.query(async ({ input, ctx }) => getRumors(input, ctx.sessionResult)),

		getOne: publicProcedure
			.input(idQueryValidator)
			.query(({ input }) => getContentRecord(getRumorRecordQuery, input)),

		getAllIds: publicProcedure.query(() => getAllRecordIds(getAllRumorIdsQuery)),

		export: publicProcedure.query(() => exportRecords(exportRumorsQuery))
	},
	trait: {
		getAll: publicProcedure
			.input(searchQueryValidator)
			.query(async ({ input, ctx }) => getTraits(input, ctx.sessionResult)),

		getOne: publicProcedure
			.input(idQueryValidator)
			.query(({ input }) => getContentRecord(getTraitRecordQuery, input)),

		getAllIds: publicProcedure.query(() => getAllRecordIds(getAllTraitIdsQuery)),

		export: publicProcedure.query(() => exportRecords(exportTraitsQuery))
	},
	user: {
		getModuleBookmarks: protectedProcedure.input(moduleIdQueryValidator).query(async ({ input, ctx }) => {
			if (!ctx.sessionResult.isAuthenticated) throw new APIError({ code: 'UNAUTHORIZED' });

			return await getModuleBookmarks(input, ctx.sessionResult.session);
		}),

		bookmark: protectedProcedure.input(bookmarkQueryValidator).mutation(async ({ input, ctx }) => {
			if (!ctx.sessionResult.isAuthenticated) throw new APIError({ code: 'UNAUTHORIZED' });

			return await bookmarkRecord(input, ctx.sessionResult.session);
		}),

		getReadmeProfile: protectedProcedure.query(async ({ ctx }) => {
			if (!ctx.sessionResult.isAuthenticated) throw new APIError({ code: 'UNAUTHORIZED' });

			return await getReadmeProfile(ctx.sessionResult.session);
		})
	}
});

export type AppRouter = typeof appRouter;

export type RouterOutputs = inferRouterOutputs<AppRouter>;
