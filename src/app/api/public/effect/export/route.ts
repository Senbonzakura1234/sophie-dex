import { publicResponseConfig } from '@root/constants/server';
import { tryCatchHandler } from '@root/utils/common';
import { ApiServerCtx } from '@root/utils/server/trpc';
import type { ServerRuntime } from 'next';
import { NextResponse } from 'next/server';

export const runtime: ServerRuntime = 'edge';

export async function GET() {
	const { data, error, isSuccess } = await tryCatchHandler(ApiServerCtx.effect.export.fetch());

	return NextResponse.json({ data, error, isSuccess }, publicResponseConfig);
}
