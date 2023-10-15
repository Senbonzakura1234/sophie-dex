import PageBanner from '@root/components/layout/server/PageBanner';
import type { ChildrenProps } from '@root/types/common/props';

export default function HomeLayout({ children }: ChildrenProps) {
	return (
		<>
			<PageBanner bannerType='full' />

			{children}
		</>
	);
}
