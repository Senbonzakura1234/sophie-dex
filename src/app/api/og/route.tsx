import { commonRecordValidator } from '@root/types/common/zod';
import { capitalize, getBaseUrl, tryCatchHandler } from '@root/utils/common';
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

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	const rawRecord = [...searchParams.keys()].reduce((prev, cur) => ({ ...prev, [cur]: searchParams.get(cur) }), {});

	const recordParseRes = commonRecordValidator.safeParse(rawRecord);

	const title = recordParseRes.success
		? `${capitalize(recordParseRes.data.moduleId)} | ${recordParseRes.data.name}`
		: env.NEXT_PUBLIC_APP_DESCRIPTION;

	const url = `${getBaseUrl(true)}${recordParseRes.success ? `/${recordParseRes.data.moduleId}/${recordParseRes.data.id}` : ''}`;

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
							alt={recordParseRes.success ? recordParseRes.data.name : env.NEXT_PUBLIC_APP_NAME}
							width={736}
							height={303}
						/>
						<h1 tw='m-0 text-2xl font-bold text-[#9d750d]'>{title}</h1>
						<p tw='text-lg text-[#412711]'>{url}</p>
					</div>
				</div>
			</div>
		),
		{ width: 1200, height: 630, fonts: await getFontData() }
	);
}
