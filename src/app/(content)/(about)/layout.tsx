import AboutBreadcrumb from '@components/layout/client/AboutBreadcrumb';
import ContentWrapper from '@components/layout/client/ContentWrapper';
import type { ChildrenProps } from '@root/types/common/props';

export default function AboutLayout({ children }: ChildrenProps) {
	return (
		<>
			<AboutBreadcrumb />

			<ContentWrapper type='about'>{children}</ContentWrapper>
		</>
	);
}
