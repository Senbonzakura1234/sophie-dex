import ContentWrapper from '@components/layout/dynamic/ContentWrapper';
import type { ChildrenProps } from '@root/types/common/props';
import dynamic from 'next/dynamic';

const Alert = dynamic(() => import('@components/layout/dynamic/Alert'), { ssr: false });

export default function ContentLayout({ children }: ChildrenProps) {
	return (
		<>
			<ContentWrapper type='detail'>{children}</ContentWrapper>

			<Alert />
		</>
	);
}
