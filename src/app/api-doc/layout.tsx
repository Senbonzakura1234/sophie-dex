import PageBanner from '@components/layout/server/PageBanner';
import type { ChildrenProps } from '@root/types/common/props';
import type { Viewport } from 'next';

export const viewport: Viewport = { width: 1024 };

export default function ApiDocLayout({ children }: ChildrenProps) {
	return (
		<>
			<div className='flex grow items-center justify-center'>{children}</div>

			<PageBanner bannerType='bottom' />
		</>
	);
}
