import { APP_NAME } from '@root/constants/common';
import type { CommonObject } from '@root/types/common';
import type { OgQuery } from '@root/types/common/zod';
import { ogQuerySchema } from '@root/types/common/zod';
import { getBaseUrl, tryCatchHandler } from '@root/utils/common';
import { env } from '@root/utils/common/env';
import type { ServerRuntime } from 'next';
import { ImageResponse } from 'next/og';
import type { ImageResponseOptions } from 'next/server';

export const runtime: ServerRuntime = 'edge';

const getFontData = async (): Promise<ImageResponseOptions['fonts']> => {
	const url = new URL('../../../fonts/comic-sans-ms/regular-bold.ttf', import.meta.url);

	const dataResult = await tryCatchHandler(
		fetch(url).then(res => res.arrayBuffer()),
		'getFontData.fetch'
	);

	if (!dataResult.isSuccess) return undefined;

	return [{ data: dataResult.data, name: 'Comic Sans MS', style: 'normal', weight: 700 }];
};

const defaultOgQuery: OgQuery = {
	alt: APP_NAME,
	description: getBaseUrl(true),
	title: env.NEXT_PUBLIC_APP_DESCRIPTION
};

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	Array.from(searchParams.keys());

	const rawOgQuery = Array.from(searchParams.keys()).reduce(
		(prev, cur) => ({ ...prev, [cur]: searchParams.get(cur) }),
		{} as CommonObject
	);

	const {
		description = defaultOgQuery.description,
		alt = defaultOgQuery.alt,
		title = defaultOgQuery.title
	} = ogQuerySchema.catch(defaultOgQuery).parse(rawOgQuery);

	return new ImageResponse(
		(
			<div tw='flex bg-slate-50 w-full h-full py-8'>
				<div
					style={{ backgroundImage: 'linear-gradient(to bottom right, #ceb760, #9d750d)' }}
					tw='flex w-full h-full py-2'
				>
					<div tw='items-center justify-center flex-col flex bg-slate-50 h-full w-full shadow-inner'>
						<img
							src={`${getBaseUrl(true)}/assets/images/sophie-logo.compressed.png`}
							alt={alt}
							width={736}
							height={303}
						/>

						<h1 tw='m-0 text-2xl font-bold text-[#9d750d]'>{title}</h1>

						<p tw='text-lg text-[#412711]'>{description}</p>
					</div>
				</div>
			</div>
		),
		{ width: 1200, height: 630, fonts: await getFontData() }
	);
}
