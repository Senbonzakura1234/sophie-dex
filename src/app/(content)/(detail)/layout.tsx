import ContentWrapper from '@components/layout/dynamic/ContentWrapper';
import type { ChildrenProps } from '@root/types/common/props';

export default function DetailLayout({ children }: ChildrenProps) {
	return <ContentWrapper type='detail'>{children}</ContentWrapper>;
}
