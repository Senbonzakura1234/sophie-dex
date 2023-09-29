import type { ClassNameProps } from '@root/types/common/props';
import Image from 'next/image';
import { useMemo } from 'react';

type AvatarProps = {
	size: number;
	url: string;
} & ClassNameProps;

/**
 * @type {AvatarProps}
 * @remarks size unit: px;
 */
export default function Avatar({ size, url, className }: AvatarProps) {
	const urlWithSize = useMemo(() => {
		const urlObj = new URL(url);
		urlObj.searchParams.append('size', `${size}`);
		return urlObj.toString();
	}, [size, url]);

	return (
		<div className='avatar'>
			<div className={`overflow-hidden rounded-full ${className}`}>
				<Image
					className='rounded-full shadow-inner shadow-base-content'
					alt='sophie'
					data-url={url}
					placeholder='empty'
					priority={false}
					sizes={`${size}px`}
					width={size}
					height={size}
					src={urlWithSize}
				/>
			</div>
		</div>
	);
}