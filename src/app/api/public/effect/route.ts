import { defaultResponseConfig } from '@root/constants/server';
import { appRouter } from '@root/server/api/router/_app';
import { paramsToQuery, tryCatchHandler } from '@root/utils/common';
import { createServerSideHelpers } from '@trpc/react-query/server';
import type { ServerRuntime } from 'next';
import { NextResponse } from 'next/server';

export const runtime: ServerRuntime = 'edge';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	const searchQuery = paramsToQuery(searchParams);

	const helpers = createServerSideHelpers({ router: appRouter, ctx: {} });

	const { data, error, isSuccess } = await tryCatchHandler(helpers.effect.getAll.fetch(searchQuery));

	return NextResponse.json({ data, error, isSuccess }, defaultResponseConfig);
}
