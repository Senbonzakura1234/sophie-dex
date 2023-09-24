import 'server-only';

import {
	getExampleEffectRecord,
	getExampleItemRecord,
	getExampleRumorRecord,
	getExampleTraitRecord,
} from '@root/server/database/';
import type { Effect, Item, Rumor, Trait } from '@root/server/database/schema';
import { onQueryDBError } from '@root/utils/server';
import { getApiDocs } from '@root/utils/swagger';
import { TRPCError } from '@trpc/server';
import type { OpenAPIObject } from 'zod-openapi/lib-types/openapi3-ts/dist/oas31';

class ExampleRecordRepository {
	async getExample(): Promise<OpenAPIObject> {
		const [effect, item, rumor, trait] = (await Promise.all(
			[getExampleEffectRecord, getExampleItemRecord, getExampleRumorRecord, getExampleTraitRecord].map(
				async query => {
					const recordResult = await query.execute().catch(onQueryDBError);

					if (recordResult[0]) return recordResult[0];

					throw new TRPCError({ code: 'NOT_FOUND' });
				},
			),
		)) as [Effect, Item, Rumor, Trait];

		return getApiDocs({ effect, item, rumor, trait });
	}
}

export const exampleRecordProvider = new ExampleRecordRepository();
