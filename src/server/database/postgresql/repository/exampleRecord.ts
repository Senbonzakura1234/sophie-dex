import 'server-only';

import {
	getExampleEffectRecord,
	getExampleItemRecord,
	getExampleRumorRecord,
	getExampleTraitRecord,
} from '@root/server/database/postgresql';
import type { Effect, Item, Rumor, Trait } from '@root/server/database/postgresql/schema';
import { APIError } from '@root/types/common';
import type { GithubUserInfo } from '@root/types/common/zod';
import { onQueryDBError } from '@root/utils/server/database';
import { getGithubUserInfo, getVersion } from '@root/utils/server/fetch';
import { getApiDocs } from '@root/utils/server/swagger';
import type { OpenAPIObject } from 'zod-openapi/lib-types/openapi3-ts/dist/oas31';

export const getExample = async (): Promise<OpenAPIObject> =>
	(
		Promise.all([
			Promise.all(
				[getExampleEffectRecord, getExampleItemRecord, getExampleRumorRecord, getExampleTraitRecord].map(
					async query => {
						const recordResult = await query.execute().catch(onQueryDBError);

						if (recordResult) return recordResult;

						throw new APIError({ code: 'NOT_FOUND' });
					},
				),
			),
			getVersion(),
			getGithubUserInfo(),
		]) as Promise<[[Effect, Item, Rumor, Trait], string, GithubUserInfo]>
	)
		.then(getApiDocs)
		.catch(onQueryDBError);
