import 'server-only';

import { getEffectRecord, getItemRecord, getRumorRecord, getTraitRecord } from '@root/db/';
import type { Effect, Item, Rumor, Trait } from '@root/db/schema';
import type { PageProps } from '@root/types/common';
import { idQueryValidator } from '@root/types/common/zod';
import { InvalidRecordIdError, RecordNotFoundError, onQueryDBError } from '@root/utils/server';

class SingleRecordRepository {
	private processInput(input: PageProps['params']) {
		const result = idQueryValidator.safeParse(input);

		if (!result.success) throw InvalidRecordIdError();

		return result.data;
	}

	async getEffect(input: PageProps['params']): Promise<Effect> {
		const { id } = this.processInput(input);

		const recordResult = await getEffectRecord.execute({ id }).catch(onQueryDBError);

		if (recordResult[0]) return recordResult[0];

		throw RecordNotFoundError();
	}

	async getItem(input: PageProps['params']): Promise<Item> {
		const { id } = this.processInput(input);

		const recordResult = await getItemRecord.execute({ id }).catch(onQueryDBError);

		if (recordResult[0]) return recordResult[0];

		throw RecordNotFoundError();
	}

	async getRumor(input: PageProps['params']): Promise<Rumor> {
		const { id } = this.processInput(input);

		const recordResult = await getRumorRecord.execute({ id }).catch(onQueryDBError);

		if (recordResult[0]) return recordResult[0];

		throw RecordNotFoundError();
	}

	async getTrait(input: PageProps['params']): Promise<Trait> {
		const { id } = this.processInput(input);

		const recordResult = await getTraitRecord.execute({ id }).catch(onQueryDBError);

		if (recordResult[0]) return recordResult[0];

		throw RecordNotFoundError();
	}
}

export const singleRecordProvider = new SingleRecordRepository();
