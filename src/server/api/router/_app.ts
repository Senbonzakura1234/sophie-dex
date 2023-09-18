import { publicProcedure, router } from '@root/server/api/trpc';

import { exampleRecordProvider } from '@root/server/database/repository/exampleRecord';
import type { ExampleRecordObject } from '@root/server/database/schema';
import { effectRouter } from './effect';
import { itemRouter } from './item';
import { rumorRouter } from './rumor';
import { traitRouter } from './trait';

export const appRouter = router({
	effect: effectRouter,
	item: itemRouter,
	rumor: rumorRouter,
	trait: traitRouter,
	example: publicProcedure.query(async (): Promise<ExampleRecordObject> => {
		const [effect, item, rumor, trait] = await Promise.all([
			exampleRecordProvider.effect(),
			exampleRecordProvider.item(),
			exampleRecordProvider.rumor(),
			exampleRecordProvider.trait(),
		]);

		return { effect, item, rumor, trait } as const;
	}),
});

export type AppRouter = typeof appRouter;
