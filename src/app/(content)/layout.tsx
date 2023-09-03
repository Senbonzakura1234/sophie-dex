import Alert from '@root/components/common/client/Alert';
import ScrollWrapper from '@root/components/layout/client/ScrollWrapper';
import PageBanner from '@root/components/layout/server/PageBanner';
import type { ChildrenProps } from '@root/types/common/props';

export default function ContentLayout({ children }: ChildrenProps) {
	return (
		<ScrollWrapper>
			<PageBanner bannerType='top' key='bannerTop' />

			{children}

			<PageBanner bannerType='bottom' key='bannerBottom' />

			<Alert />
		</ScrollWrapper>
	);
}
