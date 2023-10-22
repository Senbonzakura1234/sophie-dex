/* eslint-disable @next/next/no-img-element */
import { getBaseUrl } from '@root/utils/common';
import { env } from '@root/utils/common/env.mjs';
import type { ServerRuntime } from 'next';
import { ImageResponse } from 'next/server';

export const runtime: ServerRuntime = 'edge';

// Image metadata
export const alt = env.NEXT_PUBLIC_APP_NAME;
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = 'image/png';

export default function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					alignItems: 'center',
					background: 'white',
					borderRadius: 30,
					display: 'flex',
					fontSize: 128,
					height: '100%',
					justifyContent: 'center',
					width: '100%',
				}}
			>
				<img
					src={`${getBaseUrl()}/assets/images/sophie-logo.compressed.png`}
					alt={alt}
					style={{ objectFit: 'cover' }}
					width={736}
					height={303}
				/>
			</div>
		),
		{ ...size },
	);
}
