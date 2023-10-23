import 'server-only';

import { getEffectRecord, getItemRecord, getRumorRecord, getTraitRecord } from '@root/server/database/postgresql';
import type { CommonRecord, Effect, Item, Rumor, Trait } from '@root/server/database/postgresql/schema';
import type { IdQuery } from '@root/types/common/zod';
import { onQueryDBError } from '@root/utils/server/database';
import { TRPCError } from '@trpc/server';
import type { PreparedQuery, PreparedQueryConfig } from 'drizzle-orm/pg-core';

type PrepareRecord<TRecord extends CommonRecord> = PreparedQuery<
	PreparedQueryConfig & { execute: TRecord | undefined }
>;

const getRecord = async <TRecord extends CommonRecord>(query: PrepareRecord<TRecord>, { id }: IdQuery) => {
	if (!id) throw new TRPCError({ code: 'BAD_REQUEST' });

	const recordResult = await query.execute({ id }).catch(onQueryDBError);

	if (recordResult) return recordResult;

	throw new TRPCError({ code: 'NOT_FOUND' });
};

export const getEffect = (input: IdQuery): Promise<Effect> => {
	return getRecord(getEffectRecord, input);
};

export const getItem = (input: IdQuery): Promise<Item> => {
	return getRecord(getItemRecord, input);
};

export const getRumor = (input: IdQuery): Promise<Rumor> => {
	return getRecord(getRumorRecord, input);
};

export const getTrait = (input: IdQuery): Promise<Trait> => {
	return getRecord(getTraitRecord, input);
};
