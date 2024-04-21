/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { evnIs } from '@root/utils/common';
import { NextResponse } from 'next/server';
import effectsList from '../../../../backup/effect.json';
import itemsList from '../../../../backup/item.json';
import rumorsList from '../../../../backup/rumor.json';
import traitsList from '../../../../backup/trait.json';

export async function GET() {
	if (evnIs('production')) return new Response('Forbidden resource', { status: 403 });

	const data = {
		effectsList: effectsList.length,
		itemsList: itemsList.length,
		rumorsList: rumorsList.length,
		traitsList: traitsList.length,
	};

	return NextResponse.json(data);
}
