import 'server-only';

import { getEffectRecord, getItemRecord, getRumorRecord, getTraitRecord } from '@root/server/database/postgresql';
import type { CommonRecord } from '@root/server/database/postgresql/schema';
import { APIError } from '@root/types/common';
import type { IdQuery } from '@root/types/common/zod';
import { tryCatchHandler } from '@root/utils/common';
import type { PreparedQuery, PreparedQueryConfig } from 'drizzle-orm/pg-core';

type PrepareRecord<TRecord extends CommonRecord> = PreparedQuery<
	PreparedQueryConfig & { execute: TRecord | undefined }
>;

export const getRecord = async <TRecord extends CommonRecord>(query: PrepareRecord<TRecord>, { id }: IdQuery) => {
	if (!id)
		return {
			result: null,
			isSuccess: false as const,
			error: new APIError({ code: 'BAD_REQUEST', message: 'Invalid Record Id' }),
		};

	const { data, isSuccess } = await tryCatchHandler(query.execute({ id }));

	if (!isSuccess || !data)
		return {
			result: null,
			isSuccess: false as const,
			error: new APIError({ code: isSuccess ? 'NOT_FOUND' : 'INTERNAL_SERVER_ERROR' }),
		};

	return { result: { data, currentId: id }, isSuccess: true as const, error: null };
};

export const getEffect = (input: IdQuery) => {
	return getRecord(getEffectRecord, input);
};

export const getItem = (input: IdQuery) => {
	return getRecord(getItemRecord, input);
};

export const getRumor = (input: IdQuery) => {
	return getRecord(getRumorRecord, input);
};

export const getTrait = (input: IdQuery) => {
	return getRecord(getTraitRecord, input);
};
