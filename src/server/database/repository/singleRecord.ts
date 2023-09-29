import 'server-only';

import { getEffectRecord, getItemRecord, getRumorRecord, getTraitRecord } from '@root/server/database/';
import type { Effect, Item, Rumor, Trait } from '@root/server/database/schema';
import type { IdQuery } from '@root/types/common/zod';
import type { CommonRecord } from '@root/types/model';
import { onQueryDBError } from '@root/utils/server';
import { TRPCError } from '@trpc/server';
import type { PreparedQuery, PreparedQueryConfig } from 'drizzle-orm/pg-core';

type PrepareRecord<TRecord extends CommonRecord> = PreparedQuery<PreparedQueryConfig & { execute: Array<TRecord> }>;

const getRecord = async <TRecord extends CommonRecord>(query: PrepareRecord<TRecord>, { id }: IdQuery) => {
	if (!id) throw new TRPCError({ code: 'BAD_REQUEST' });

	const recordResult = await query.execute({ id }).catch(onQueryDBError);

	if (recordResult[0]) return recordResult[0];

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
