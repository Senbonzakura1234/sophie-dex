import { publicResponseConfig } from '@root/constants/server';
import { paramsToQuery, tryCatchHandler } from '@root/utils/common';
import { ApiServerCtx } from '@root/utils/server/trpc';
import type { ServerRuntime } from 'next';
import { NextResponse } from 'next/server';

export const runtime: ServerRuntime = 'edge';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	const searchQuery = paramsToQuery(searchParams);

	const { data, error, isSuccess } = await tryCatchHandler(ApiServerCtx.rumor.getAll.fetch(searchQuery));

	return NextResponse.json({ data, error, isSuccess }, publicResponseConfig);
}
