import AboutBreadcrumb from '@components/layout/dynamic/AboutBreadcrumb';
import ContentWrapper from '@components/layout/dynamic/ContentWrapper';
import type { ChildrenProps } from '@root/types/common/props';

export default function AboutLayout({ children }: ChildrenProps) {
	return (
		<>
			<AboutBreadcrumb />

			<ContentWrapper type='about'>{children}</ContentWrapper>
		</>
	);
}
