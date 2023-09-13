import { defaultResponseConfig } from '@root/constants';
import { appRouter } from '@root/server/api/router/_app';
import { paramsToQuery, tryCatchHandler } from '@root/utils/common';
import { createServerSideHelpers } from '@trpc/react-query/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	const searchQuery = paramsToQuery(searchParams);

	const helpers = createServerSideHelpers({ router: appRouter, ctx: {} });

	const { data, error, isSuccess } = await tryCatchHandler(helpers.item.getAll.fetch(searchQuery));

	return NextResponse.json({ data, error, isSuccess }, defaultResponseConfig);
}
