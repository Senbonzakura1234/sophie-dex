import type { ImprovedOmit } from '@root/types/common';
import type { ClassNameProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';
import Image from 'next/image';

type Props = Readonly<
	{
		size: number;
		url?: string;
		username?: string;
	} & ClassNameProps
>;

const getUrlWithSize = ({ size, url }: ImprovedOmit<Required<Props>, 'className' | 'username'>) => {
	const urlObj = new URL(url);
	urlObj.searchParams.append('size', `${size}`);
	return urlObj.toString();
};

/**
 * @remarks size unit: px;
 */
export default function Avatar({ size, url, className, username = 'U' }: Props) {
	return (
		<div className='avatar'>
			<div className={cn('overflow-hidden rounded-full', className)}>
				{url ? (
					<Image
						className='rounded-full shadow-inner shadow-base-content'
						alt={username}
						data-url={url}
						placeholder='empty'
						priority={false}
						sizes={`${size}px`}
						width={size}
						height={size}
						src={getUrlWithSize({ size, url })}
						loading='eager'
					/>
				) : (
					<div className='grid size-full place-content-center rounded-full'>{username[0]}</div>
				)}
			</div>
		</div>
	);
}
