/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { postgresql } from '@root/server/database/postgresql';
import type { Effect, Item, Rumor, Trait } from '@root/server/database/postgresql/schema';
import { effects, items, rumors, traits } from '@root/server/database/postgresql/schema';
import { evnIs, tryCatchHandler } from '@root/utils/common';
import { NextResponse } from 'next/server';
import effectsList from '../../../../backup/effect.json';
import itemsList from '../../../../backup/item.json';
import rumorsList from '../../../../backup/rumor.json';
import traitsList from '../../../../backup/trait.json';

export async function GET() {
	if (evnIs('production')) return new Response('Forbidden resource', { status: 403 });

	const data: {
		errorList: Array<{ id: string | undefined; error: unknown }>;
		isSuccess: boolean;
		effectsSuccessCount: number;
		itemsSuccessCount: number;
		rumorsSuccessCount: number;
		traitsSuccessCount: number;
	} = {
		errorList: [],
		isSuccess: true,
		effectsSuccessCount: 0,
		itemsSuccessCount: 0,
		rumorsSuccessCount: 0,
		traitsSuccessCount: 0,
	};

	for (let i = 0; i < effectsList.length; i++) {
		const element = effectsList[i]!;

		const { isSuccess, error } = await tryCatchHandler(postgresql.insert(effects).values(element as Effect));

		if (!isSuccess) data.errorList.push({ id: element?.id, error });
		if (isSuccess) {
			data.effectsSuccessCount++;
			console.log({ isSuccess });
		}
	}

	for (let i = 0; i < itemsList.length; i++) {
		const element = itemsList[i]!;

		const { isSuccess, error } = await tryCatchHandler(postgresql.insert(items).values(element as Item));

		if (!isSuccess) data.errorList.push({ id: element?.id, error });
		if (isSuccess) {
			data.itemsSuccessCount++;
			console.log({ isSuccess });
		}
	}

	for (let i = 0; i < rumorsList.length; i++) {
		const element = rumorsList[i]!;

		const { isSuccess, error } = await tryCatchHandler(postgresql.insert(rumors).values(element as Rumor));

		if (!isSuccess) data.errorList.push({ id: element?.id, error });
		if (isSuccess) {
			data.rumorsSuccessCount++;
			console.log({ isSuccess });
		}
	}

	for (let i = 0; i < traitsList.length; i++) {
		const element = traitsList[i]!;

		const { isSuccess, error } = await tryCatchHandler(postgresql.insert(traits).values(element as Trait));

		if (!isSuccess) data.errorList.push({ id: element?.id, error });
		if (isSuccess) {
			data.traitsSuccessCount++;
			console.log({ isSuccess });
		}
	}

	return NextResponse.json(data);
}
