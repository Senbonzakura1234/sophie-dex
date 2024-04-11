import PageBanner from '@components/layout/static/PageBanner';
import type { ChildrenProps } from '@root/types/common/props';
import { getServerSession } from 'next-auth';

export default async function HomeLayout({ children }: ChildrenProps) {
	const session = await getServerSession();

	return (
		<>
			<PageBanner bannerType='full' />

			{children}
		</>
	);
}
