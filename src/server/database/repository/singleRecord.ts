import 'server-only';

import { getEffectRecord, getItemRecord, getRumorRecord, getTraitRecord } from '@root/server/database/';
import type { Effect, Item, Rumor, Trait } from '@root/server/database/schema';
import type { PageProps } from '@root/types/common';
import { RecordNotFoundError, onQueryDBError } from '@root/utils/server';

class SingleRecordRepository {
	async getEffect(input: PageProps['params']): Promise<Effect> {
		const { id } = input;

		const recordResult = await getEffectRecord.execute({ id }).catch(onQueryDBError);

		if (recordResult[0]) return recordResult[0];

		throw RecordNotFoundError();
	}

	async getItem(input: PageProps['params']): Promise<Item> {
		const { id } = input;

		const recordResult = await getItemRecord.execute({ id }).catch(onQueryDBError);

		if (recordResult[0]) return recordResult[0];

		throw RecordNotFoundError();
	}

	async getRumor(input: PageProps['params']): Promise<Rumor> {
		const { id } = input;

		const recordResult = await getRumorRecord.execute({ id }).catch(onQueryDBError);

		if (recordResult[0]) return recordResult[0];

		throw RecordNotFoundError();
	}

	async getTrait(input: PageProps['params']): Promise<Trait> {
		const { id } = input;

		const recordResult = await getTraitRecord.execute({ id }).catch(onQueryDBError);

		if (recordResult[0]) return recordResult[0];

		throw RecordNotFoundError();
	}
}

export const singleRecordProvider = new SingleRecordRepository();
