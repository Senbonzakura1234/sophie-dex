import 'server-only';

import {
	getExampleEffectRecord,
	getExampleItemRecord,
	getExampleRumorRecord,
	getExampleTraitRecord,
} from '@root/server/database/';
import type { Effect, ExampleRecordObject, Item, Rumor, Trait } from '@root/server/database/schema';
import { onQueryDBError } from '@root/utils/server';
import { TRPCError } from '@trpc/server';

class ExampleRecordRepository {
	async getExample(): Promise<ExampleRecordObject> {
		const [effect, item, rumor, trait] = (await Promise.all(
			[getExampleEffectRecord, getExampleItemRecord, getExampleRumorRecord, getExampleTraitRecord].map(
				async query => {
					const recordResult = await query.execute().catch(onQueryDBError);

					if (recordResult[0]) return recordResult[0];

					throw new TRPCError({ code: 'NOT_FOUND' });
				},
			),
		)) as [Effect, Item, Rumor, Trait];

		return { effect, item, rumor, trait } as const;
	}
}

export const exampleRecordProvider = new ExampleRecordRepository();
