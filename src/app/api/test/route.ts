/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { getToggleBookmarkQuery, postgresql } from '@root/server/postgresql';
import { evnIs } from '@root/utils/common';
import { NextResponse } from 'next/server';

export async function GET() {
	if (evnIs('production')) return new Response('Forbidden resource', { status: 403 });

	const query = getToggleBookmarkQuery({
		bookmarkRecordId: '01HVZGS2J0XC4Q5DP2QV0PCJ2E',
		isBookmarked: true,
		moduleId: 'effect',
		username: 'Senbonzakura1234',
	});

	const data = await postgresql.execute(query);

	return NextResponse.json(data);
}
