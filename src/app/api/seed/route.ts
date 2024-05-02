/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { effectsList, itemsList, rumorsList, traitsList } from '@root/constants/seedData';
import { postgresql } from '@root/server/postgresql';
import { effects, items, rumors, traits } from '@root/server/postgresql/schema';
import { evnIs, tryCatchHandler } from '@root/utils/common';
import { NextResponse } from 'next/server';

export async function GET() {
	if (evnIs('production')) return new Response('Forbidden resource', { status: 403 });

	const data: {
		errorList: Array<{ id: string | undefined; error: unknown }>;
		effectsSuccessCount: number;
		itemsSuccessCount: number;
		rumorsSuccessCount: number;
		traitsSuccessCount: number;
	} = {
		errorList: [],
		effectsSuccessCount: 0,
		itemsSuccessCount: 0,
		rumorsSuccessCount: 0,
		traitsSuccessCount: 0,
	};

	for (let i = 0; i < effectsList.length; i++) {
		const element = effectsList[i]!;

		const { isSuccess, error } = await tryCatchHandler(postgresql.insert(effects).values(element));

		if (!isSuccess) data.errorList.push({ id: element?.id, error });
		if (isSuccess) {
			data.effectsSuccessCount++;
		}
	}

	for (let i = 0; i < itemsList.length; i++) {
		const element = itemsList[i]!;

		const { isSuccess, error } = await tryCatchHandler(postgresql.insert(items).values(element));

		if (!isSuccess) data.errorList.push({ id: element?.id, error });
		if (isSuccess) {
			data.itemsSuccessCount++;
		}
	}

	for (let i = 0; i < rumorsList.length; i++) {
		const element = rumorsList[i]!;

		const { isSuccess, error } = await tryCatchHandler(postgresql.insert(rumors).values(element));

		if (!isSuccess) data.errorList.push({ id: element?.id, error });
		if (isSuccess) {
			data.rumorsSuccessCount++;
		}
	}

	for (let i = 0; i < traitsList.length; i++) {
		const element = traitsList[i]!;

		const { isSuccess, error } = await tryCatchHandler(postgresql.insert(traits).values(element));

		if (!isSuccess) data.errorList.push({ id: element?.id, error });
		if (isSuccess) {
			data.traitsSuccessCount++;
		}
	}

	return NextResponse.json(data);
}
