import { getBaseUrl } from '@root/utils/common';
import { env } from '@root/utils/common/env.mjs';
import type { ServerRuntime } from 'next';
import { ImageResponse } from 'next/og';

export const runtime: ServerRuntime = 'edge';

export function GET() {
	return new ImageResponse(
		(
			<div tw='items-center justify-center flex bg-slate-50 dark:bg-slate-950 rounded-3xl text-9xl h-full w-full'>
				<img
					src={`${getBaseUrl()}/assets/images/sophie-logo.compressed.png`}
					alt={env.NEXT_PUBLIC_APP_NAME}
					width={736}
					height={303}
				/>
			</div>
		),
		{ width: 1200, height: 630 },
	);
}
