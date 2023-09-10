import ContentWrapper from '@root/components/layout/server/ContentWrapper';
import type { ChildrenProps } from '@root/types/common/props';

export default function DetailLayout({ children }: ChildrenProps) {
	return <ContentWrapper type='detail'>{children}</ContentWrapper>;
}
