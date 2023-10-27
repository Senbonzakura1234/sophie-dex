import { defaultResponseConfig } from '@root/constants/server';
import type { PageProps } from '@root/types/common';
import { tryCatchHandler } from '@root/utils/common';
import { ApiServerCtx } from '@root/utils/server/trpc';
import type { ServerRuntime } from 'next';
import { NextResponse } from 'next/server';

export const runtime: ServerRuntime = 'edge';

export async function GET(_: Request, { params }: { params: PageProps['params'] }) {
	const { data, error, isSuccess } = await tryCatchHandler(ApiServerCtx.rumor.getOne.fetch(params));

	return NextResponse.json({ data, error, isSuccess }, defaultResponseConfig);
}
