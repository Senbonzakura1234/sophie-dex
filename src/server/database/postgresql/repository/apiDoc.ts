import 'server-only';

import {
	getExampleEffectRecord,
	getExampleItemRecord,
	getExampleRumorRecord,
	getExampleTraitRecord,
} from '@root/server/database/postgresql';
import { APIError } from '@root/types/common';
import { onQueryDBError } from '@root/utils/server/database';
import { getGithubUserInfo, getVersion } from '@root/utils/server/fetch';
import { getApiDocs } from '@root/utils/server/swagger';
import type { OpenAPIObject } from 'zod-openapi/lib-types/openapi3-ts/dist/oas31';

export const apiDoc = async (): Promise<{ spec: OpenAPIObject }> =>
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
		]) as Promise<Parameters<typeof getApiDocs>[0]>
	)
		.then(getApiDocs)
		.catch(onQueryDBError);
