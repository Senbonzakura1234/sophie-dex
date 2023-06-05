/* eslint-disable @next/next/no-img-element */
import { APP_NAME } from '@root/constants';
import { getBaseUrl } from '@root/utils/client';
import type { ServerRuntime } from 'next';
import { ImageResponse } from 'next/server';

// Route segment config
export const runtime: ServerRuntime = 'edge';

// Image metadata
export const alt = APP_NAME;
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
					src={`${getBaseUrl()}/assets/images/sophie-logo.webp`}
					alt={alt}
					style={{ objectFit: 'cover' }}
					width='100%'
				/>
			</div>
		),
		{ ...size },
	);
}
