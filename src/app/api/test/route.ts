/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { getToggleBookmarkQuery, postgresql } from '@root/server/postgresql/repository';
import { env } from '@root/utils/common/env';
import { NextResponse } from 'next/server';

export async function GET() {
	if (env.NEXT_PUBLIC_NODE_ENV === 'production') return new Response('Forbidden resource', { status: 403 });

	const query = getToggleBookmarkQuery({
		bookmarkRecordId: '01HVZGS2J0XC4Q5DP2QV0PCJ2E',
		isBookmarked: true,
		moduleId: 'effect',
		username: 'Senbonzakura1234'
	});

	const data = await postgresql.execute(query);

	return NextResponse.json(data);
}
