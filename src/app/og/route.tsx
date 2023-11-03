import type { ImprovedOmit } from '@root/types/common';
import { getBaseUrl, tryCatchHandler } from '@root/utils/common';
import { env } from '@root/utils/common/env.mjs';
import type { ServerRuntime } from 'next';
import { ImageResponse } from 'next/og';
import type { ImageResponseOptions } from 'next/server';

export const runtime: ServerRuntime = 'edge';

type FontList = ImageResponseOptions['fonts'];

const comicSansMsURLs = [
	{
		url: new URL('../../fonts/comic-sans-ms/regular.ttf', import.meta.url),
		name: 'Comic Sans MS',
		style: 'normal',
		weight: 400,
	},
	{
		url: new URL('../../fonts/comic-sans-ms/regular-bold.ttf', import.meta.url),
		name: 'Comic Sans MS',
		style: 'normal',
		weight: 700,
	},
] satisfies Array<ImprovedOmit<NonNullable<FontList>[number], 'data'> & { url: URL }>;

const getFontData = async (): Promise<FontList> => {
	const fontDataResults = await tryCatchHandler(
		Promise.all(
			comicSansMsURLs.map(async ({ url, ...rest }) => ({
				data: await fetch(url).then(res => res.arrayBuffer()),
				...rest,
			})),
		),
	);

	if (!fontDataResults.isSuccess) return undefined;

	return fontDataResults.data;
};

export async function GET() {
	return new ImageResponse(
		(
			<div tw='flex bg-slate-50 w-full h-full p-6'>
				<div
					style={{ backgroundImage: 'linear-gradient(to bottom right, #ceb760, #9d750d)' }}
					tw='flex w-full h-full p-2 rounded-3xl'
				>
					<div tw='items-center justify-center flex-col flex bg-slate-50 rounded-3xl h-full w-full shadow-inner'>
						<img
							src={`${getBaseUrl()}/assets/images/sophie-logo.compressed.png`}
							alt={env.NEXT_PUBLIC_APP_NAME}
							width={736}
							height={303}
						/>
						<h1 tw='m-0 text-2xl font-bold text-[#9d750d]'>{env.NEXT_PUBLIC_APP_DESCRIPTION}</h1>
						<p tw='text-sm text-[#412711]'>{getBaseUrl()}</p>
					</div>
				</div>
			</div>
		),
		{ width: 1200, height: 630, fonts: await getFontData() },
	);
}
