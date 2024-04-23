import BookmarkApiTrigger from '@components/layout/dynamic/BookmarkApiTrigger';
import ContentWrapper from '@components/layout/dynamic/ContentWrapper';
import type { ChildrenProps } from '@root/types/common/props';

export default function DetailLayout({ children }: ChildrenProps) {
	return (
		<>
			<BookmarkApiTrigger />

			<ContentWrapper type='detail'>{children}</ContentWrapper>
		</>
	);
}
