import AboutNav from '@root/components/layout/client/AboutNav';
import ContentWrapper from '@root/components/layout/client/ContentWrapper';
import type { ChildrenProps } from '@root/types/common/props';

export default function AboutLayout({ children }: ChildrenProps) {
	return (
		<>
			<AboutNav />

			<ContentWrapper type='about'>{children}</ContentWrapper>
		</>
	);
}
