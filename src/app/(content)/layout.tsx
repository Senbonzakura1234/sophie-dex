import './content.css';

import PageBanner from '@components/layout/static/PageBanner';
import type { ChildrenProps } from '@root/types/common/props';

export default function ContentLayout({ children }: ChildrenProps) {
	return (
		<>
			<PageBanner bannerType='top' key='bannerTop' />

			{children}

			<PageBanner bannerType='bottom' key='bannerBottom' />
		</>
	);
}
