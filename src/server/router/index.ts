import {
	bookmarkRecord,
	getEffects,
	getItems,
	getModuleBookmarks,
	getRumors,
	getTraits,
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
	getTraitRecordQuery,
} from '@root/server/postgresql/repository';
import {
	bookmarkQueryValidator,
	idQueryValidator,
	moduleIdQueryValidator,
	searchQueryValidator,
} from '@root/types/common/zod';
import { evnIs } from '@root/utils/common';
import { exportRecords, getAllRecordIds, getContentRecord } from '@root/utils/server/database';
import { initTRPC } from '@trpc/server';
import { ZodError } from 'zod';

const t = initTRPC.create({
	isDev: !evnIs('production'),
	errorFormatter({ shape, error }) {
		return {
			...shape,
			data: {
				...shape.data,
				zodError: error.cause instanceof ZodError ? error.cause.flatten().fieldErrors : null,
			},
		};
	},
});

const procedure = t.procedure;

export const appRouter = t.router({
	effect: {
		getAll: procedure.input(searchQueryValidator).query(({ input }) => getEffects(input)),

		getOne: procedure.input(idQueryValidator).query(({ input }) => getContentRecord(getEffectRecordQuery, input)),

		getAllIds: procedure.query(() => getAllRecordIds(getAllEffectIdsQuery)),

		export: procedure.query(() => exportRecords(exportEffectsQuery)),
	},
	item: {
		getAll: procedure.input(searchQueryValidator).query(({ input }) => getItems(input)),

		getOne: procedure.input(idQueryValidator).query(({ input }) => getContentRecord(getItemRecordQuery, input)),

		getAllIds: procedure.query(() => getAllRecordIds(getAllItemIdsQuery)),

		export: procedure.query(() => exportRecords(exportItemsQuery)),
	},
	rumor: {
		getAll: procedure.input(searchQueryValidator).query(({ input }) => getRumors(input)),

		getOne: procedure.input(idQueryValidator).query(({ input }) => getContentRecord(getRumorRecordQuery, input)),

		getAllIds: procedure.query(() => getAllRecordIds(getAllRumorIdsQuery)),

		export: procedure.query(() => exportRecords(exportRumorsQuery)),
	},
	trait: {
		getAll: procedure.input(searchQueryValidator).query(({ input }) => getTraits(input)),

		getOne: procedure.input(idQueryValidator).query(({ input }) => getContentRecord(getTraitRecordQuery, input)),

		getAllIds: procedure.query(() => getAllRecordIds(getAllTraitIdsQuery)),

		export: procedure.query(() => exportRecords(exportTraitsQuery)),
	},
	user: {
		getModuleBookmarks: procedure.input(moduleIdQueryValidator).query(({ input }) => getModuleBookmarks(input)),
		bookmark: procedure.input(bookmarkQueryValidator).mutation(({ input }) => bookmarkRecord(input)),
	},
});

export type AppRouter = typeof appRouter;
