import { defaultResponseConfig } from '@root/constants';
import { appRouter } from '@root/server/api/router/_app';
import type { PageProps } from '@root/types/common';
import { tryCatchHandler } from '@root/utils/common';
import { createServerSideHelpers } from '@trpc/react-query/server';
import { NextResponse } from 'next/server';

export async function GET(_: Request, { params }: { params: PageProps['params'] }) {
	const helpers = createServerSideHelpers({ router: appRouter, ctx: {} });

	const { data, error, isSuccess } = await tryCatchHandler(helpers.effect.getOne.fetch(params));

	return NextResponse.json({ data, error, isSuccess }, defaultResponseConfig);
}
