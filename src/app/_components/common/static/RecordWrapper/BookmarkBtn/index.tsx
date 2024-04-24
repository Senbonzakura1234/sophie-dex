'use client';

import type { useModuleId } from '@root/hooks/useModuleId';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import { ApiClientCtx } from '@root/utils/client/trpc';
import { cn } from '@root/utils/common';
import { useSession } from 'next-auth/react';
import { BookmarkBtnIcon, BookmarkBtnText } from './BookmarkBtnInner';

type Props = { id: string; name: string; moduleId: NonNullable<ReturnType<typeof useModuleId>['moduleId']> };

export default function BookmarkBtn({ id, name, moduleId }: Props) {
	const {
		searchQuery: { bookmarked },
	} = useSearchQuery();

	const isNotBookmarkFilter = bookmarked !== 'true';

	const { status: sessionStatus } = useSession();

	const trpcUtils = ApiClientCtx.useUtils();

	const {
		data,
		refetch,
		status: queryStatus,
	} = ApiClientCtx.user.getModuleBookmarks.useQuery(
		{ moduleId },
		{ enabled: sessionStatus === 'authenticated' && isNotBookmarkFilter },
	);

	const { mutateAsync, status: mutateStatus } = ApiClientCtx.user.bookmark.useMutation();

	const isHidden = sessionStatus === 'unauthenticated' || queryStatus === 'error';

	if (isHidden) return null;

	const isLoading = sessionStatus === 'loading' || queryStatus === 'pending' || mutateStatus === 'pending';

	const isRecordBookmarked = Boolean(data?.result?.includes(id));

	const handleBookmark = async () => {
		if (isLoading) return;

		await mutateAsync({
			bookmarkRecordId: id,
			moduleId,
			isBookmarked: isNotBookmarkFilter ? isRecordBookmarked : true,
		});

		return await (isNotBookmarkFilter ? refetch() : trpcUtils[moduleId].getAll.invalidate());
	};

	return (
		<button
			aria-label={`${data?.result?.includes(id) ? 'Remove' : ''} Bookmark ${name}`}
			className={cn(
				'btn btn-primary btn-xs capitalize align-middle dark:shadow-md dark:shadow-current w-3/4 sm:w-auto sm:mr-auto',
				{
					'btn-outline': !data?.result?.includes(id) && isNotBookmarkFilter,
				},
			)}
			onClick={handleBookmark}
			disabled={isLoading}
			role='button'
		>
			<BookmarkBtnIcon
				isLoading={isLoading}
				isNotBookmarkFilter={isNotBookmarkFilter}
				isRecordBookmarked={isRecordBookmarked}
			/>
			<BookmarkBtnText isNotBookmarkFilter={isNotBookmarkFilter} isRecordBookmarked={isRecordBookmarked} />
		</button>
	);
}
