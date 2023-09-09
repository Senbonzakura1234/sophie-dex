import 'server-only';

import { getEffectRecord, getItemRecord, getRumorRecord, getTraitRecord } from '@root/server/database/';
import type { Effect, Item, Rumor, Trait } from '@root/server/database/schema';
import type { IdQuery } from '@root/types/common/zod';
import { onQueryDBError } from '@root/utils/server';
import { TRPCError } from '@trpc/server';

class SingleRecordRepository {
	async getEffect(input: IdQuery): Promise<Effect> {
		const { id } = input;

		if (!id) throw new TRPCError({ code: 'BAD_REQUEST' });

		const recordResult = await getEffectRecord.execute({ id }).catch(onQueryDBError);

		if (recordResult[0]) return recordResult[0];

		throw new TRPCError({ code: 'NOT_FOUND' });
	}

	async getItem(input: IdQuery): Promise<Item> {
		const { id } = input;

		if (!id) throw new TRPCError({ code: 'BAD_REQUEST' });

		const recordResult = await getItemRecord.execute({ id }).catch(onQueryDBError);

		if (recordResult[0]) return recordResult[0];

		throw new TRPCError({ code: 'NOT_FOUND' });
	}

	async getRumor(input: IdQuery): Promise<Rumor> {
		const { id } = input;

		if (!id) throw new TRPCError({ code: 'BAD_REQUEST' });

		const recordResult = await getRumorRecord.execute({ id }).catch(onQueryDBError);

		if (recordResult[0]) return recordResult[0];

		throw new TRPCError({ code: 'NOT_FOUND' });
	}

	async getTrait(input: IdQuery): Promise<Trait> {
		const { id } = input;

		if (!id) throw new TRPCError({ code: 'BAD_REQUEST' });

		const recordResult = await getTraitRecord.execute({ id }).catch(onQueryDBError);

		if (recordResult[0]) return recordResult[0];

		throw new TRPCError({ code: 'NOT_FOUND' });
	}
}

export const singleRecordProvider = new SingleRecordRepository();
