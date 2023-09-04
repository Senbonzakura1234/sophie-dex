import Alert from '@root/components/common/client/Alert';
import PageBanner from '@root/components/layout/server/PageBanner';
import type { ChildrenProps } from '@root/types/common/props';

export default function ContentLayout({ children }: ChildrenProps) {
	return (
		<>
			<PageBanner bannerType='top' key='bannerTop' />

			{children}

			<PageBanner bannerType='bottom' key='bannerBottom' />

			<Alert />
		</>
	);
}
