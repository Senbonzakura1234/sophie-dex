import AboutBreadcrumb from '@components/layout/dynamic/AboutBreadcrumb';
import ContentWrapper from '@components/layout/dynamic/ContentWrapper';
import type { ChildrenProps } from '@root/types/common/props';
import dynamic from 'next/dynamic';

const PageRefresh = dynamic(() => import('@components/layout/dynamic/PageRefresh'));

export default function AboutLayout({ children }: ChildrenProps) {
	return (
		<>
			<PageRefresh />

			<AboutBreadcrumb />

			<ContentWrapper type='about'>{children}</ContentWrapper>
		</>
	);
}
