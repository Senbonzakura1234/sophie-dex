import type { CommonObject } from '@root/types/common';
import type { OgQuery } from '@root/types/common/zod';
import { ogQuerySchema } from '@root/types/common/zod';
import { cn, getBaseUrl, tryCatchHandler } from '@root/utils/common';
import { env } from '@root/utils/common/env';
import type { ServerRuntime } from 'next';
import { ImageResponse } from 'next/og';
import type { ImageResponseOptions } from 'next/server';

export const runtime: ServerRuntime = 'edge';

type FontList = ImageResponseOptions['fonts'];

const getFontData = async (): Promise<FontList> => {
	const url = new URL('../../../fonts/comic-sans-ms/regular-bold.ttf', import.meta.url);

	const dataResult = await tryCatchHandler(
		fetch(url).then(res => res.arrayBuffer()),
		'getFontData.fetch'
	);

	if (!dataResult.isSuccess) return undefined;

	return [{ data: dataResult.data, name: 'Comic Sans MS', style: 'normal', weight: 700 }];
};

const defaultOgQuery: OgQuery = {
	type: 'landscape',
	description: getBaseUrl(true),
	alt: env.NEXT_PUBLIC_APP_NAME,
	src: `${getBaseUrl(true)}/assets/images/sophie-logo.compressed.png`,
	title: env.NEXT_PUBLIC_APP_DESCRIPTION
};

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	const rawOgQuery = [...searchParams.keys()].reduce(
		(prev, cur) => ({ ...prev, [cur]: searchParams.get(cur) }),
		{} as CommonObject
	);

	const { type, description, src, alt, title } = ogQuerySchema.catch(defaultOgQuery).parse(rawOgQuery);

	return new ImageResponse(
		(
			<div tw='flex bg-slate-50 w-full h-full py-8' data-theme='fantasy'>
				<div
					style={{ backgroundImage: 'linear-gradient(to bottom right, #ceb760, #9d750d)' }}
					tw='flex w-full h-full py-2'
				>
					<div tw='items-center justify-center flex-col flex bg-slate-50 h-full w-full shadow-inner'>
						<div
							tw={cn('flex', { 'rounded-full my-3 w-60 h-60 px-2 py-2': type === 'squared' })}
							style={
								type === 'landscape'
									? {}
									: { backgroundImage: 'linear-gradient(to bottom right, #ceb760, #9d750d)' }
							}
						>
							<div
								tw={cn('flex', {
									'items-center justify-center bg-slate-50 shadow-inner rounded-full px-2 py-2':
										type === 'squared'
								})}
							>
								<img
									tw={cn({ 'rounded-full w-full h-full': type === 'squared' })}
									src={src || `${getBaseUrl(true)}/assets/images/sophie-logo.compressed.png`}
									alt={alt || env.NEXT_PUBLIC_APP_NAME}
									width={type === 'landscape' ? 736 : 200}
									height={type === 'landscape' ? 303 : 200}
								/>
							</div>
						</div>

						<h1 tw='m-0 text-2xl font-bold text-[#9d750d]'>{title || env.NEXT_PUBLIC_APP_DESCRIPTION}</h1>

						<p tw='text-lg text-[#412711]'>{description || getBaseUrl(true)}</p>
					</div>
				</div>
			</div>
		),
		{ width: 1200, height: 630, fonts: await getFontData() }
	);
}
