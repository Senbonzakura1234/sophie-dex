import { getBaseUrl, tryCatchHandler } from '@root/utils/common';
import { env } from '@root/utils/common/env.mjs';
import type { ServerRuntime } from 'next';
import { ImageResponse } from 'next/og';
import type { ImageResponseOptions } from 'next/server';

export const runtime: ServerRuntime = 'edge';

type FontList = ImageResponseOptions['fonts'];

const getFontData = async (): Promise<FontList> => {
	const url = new URL('../../../fonts/comic-sans-ms/regular-bold.ttf', import.meta.url);

	const dataResult = await tryCatchHandler(fetch(url).then(res => res.arrayBuffer()));

	if (!dataResult.isSuccess) return undefined;

	return [{ data: dataResult.data, name: 'Comic Sans MS', style: 'normal', weight: 700 }];
};

export async function GET() {
	return new ImageResponse(
		(
			<div tw='flex bg-slate-50 w-full h-full py-8'>
				<div
					style={{ backgroundImage: 'linear-gradient(to bottom right, #ceb760, #9d750d)' }}
					tw='flex w-full h-full py-2'
				>
					<div tw='items-center justify-center flex-col flex bg-slate-50 h-full w-full shadow-inner'>
						<img
							src={`${getBaseUrl()}/assets/images/sophie-logo.compressed.png`}
							alt={env.NEXT_PUBLIC_APP_NAME}
							width={736}
							height={303}
						/>
						<h1 tw='m-0 text-2xl font-bold text-[#9d750d]'>{env.NEXT_PUBLIC_APP_DESCRIPTION}</h1>
						<p tw='text-lg text-[#412711]'>{getBaseUrl(true)}</p>
					</div>
				</div>
			</div>
		),
		{ width: 1200, height: 630, fonts: await getFontData() },
	);
}
