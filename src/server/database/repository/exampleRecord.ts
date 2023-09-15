import 'server-only';

import {
	getExampleEffectRecord,
	getExampleItemRecord,
	getExampleRumorRecord,
	getExampleTraitRecord,
} from '@root/server/database/';
import type { Effect, Item, Rumor, Trait } from '@root/server/database/schema';
import { onQueryDBError } from '@root/utils/server';
import { TRPCError } from '@trpc/server';

class ExampleRecordRepository {
	async getEffect(): Promise<Effect> {
		const recordResult = await getExampleEffectRecord.execute().catch(onQueryDBError);

		if (recordResult[0]) return recordResult[0];

		throw new TRPCError({ code: 'NOT_FOUND' });
	}

	async getItem(): Promise<Item> {
		const recordResult = await getExampleItemRecord.execute().catch(onQueryDBError);

		if (recordResult[0]) return recordResult[0];

		throw new TRPCError({ code: 'NOT_FOUND' });
	}

	async getRumor(): Promise<Rumor> {
		const recordResult = await getExampleRumorRecord.execute().catch(onQueryDBError);

		if (recordResult[0]) return recordResult[0];

		throw new TRPCError({ code: 'NOT_FOUND' });
	}

	async getTrait(): Promise<Trait> {
		const recordResult = await getExampleTraitRecord.execute().catch(onQueryDBError);

		if (recordResult[0]) return recordResult[0];

		throw new TRPCError({ code: 'NOT_FOUND' });
	}
}

export const exampleRecordProvider = new ExampleRecordRepository();
