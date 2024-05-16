import BookmarkIconOutline from '@components/icons/outline/BookmarkIcon';
import BookmarkIconSolid from '@components/icons/solid/BookmarkIcon';
import RectangleXMark from '@components/icons/solid/RectangleXmark';
import type { ImprovedOmit } from '@root/types/common';

type Props = {
	isLoading: boolean;
	isNotBookmarkFilter: boolean;
	isRecordBookmarked: boolean;
};

export function BookmarkBtnIcon({ isLoading, isNotBookmarkFilter, isRecordBookmarked }: Props) {
	if (isLoading) return <span className='loading loading-spinner size-3' />;

	if (!isNotBookmarkFilter) return <RectangleXMark className='size-3' />;

	return isRecordBookmarked ? <BookmarkIconSolid className='size-3' /> : <BookmarkIconOutline className='size-3' />;
}

export function BookmarkBtnText({ isNotBookmarkFilter, isRecordBookmarked }: ImprovedOmit<Props, 'isLoading'>) {
	if (!isNotBookmarkFilter) return <>Remove Bookmark</>;

	return isRecordBookmarked ? <>bookmarked</> : <>bookmark</>;
}
