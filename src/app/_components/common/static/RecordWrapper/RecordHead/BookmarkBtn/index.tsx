'use client';

import { MAXIMUM_BOOKMARK_LENGTH } from '@root/constants/common';
import type { useModuleId } from '@root/hooks/useModuleId';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import { trackEventClient } from '@root/utils/client';
import { ApiClientCtx } from '@root/utils/client/trpc';
import { capitalize, cn, tryCatchHandler } from '@root/utils/common';
import { useSession } from 'next-auth/react';
import { BookmarkBtnIcon, BookmarkBtnText } from './BookmarkBtnInner';

type Props = Readonly<{ id: string; name: string; moduleId: NonNullable<ReturnType<typeof useModuleId>['moduleId']> }>;

export default function BookmarkBtn({ id, name, moduleId }: Props) {
	const {
		searchQuery: { bookmarked }
	} = useSearchQuery();

	const isNotBookmarkFilter = bookmarked !== 'true';

	const { status: sessionStatus } = useSession();

	const trpcUtils = ApiClientCtx.useUtils();

	const {
		data,
		refetch,
		status: queryStatus
	} = ApiClientCtx.user.getModuleBookmarks.useQuery(
		{ moduleId },
		{
			enabled: sessionStatus === 'authenticated' && isNotBookmarkFilter,
			refetchOnMount: true,
			refetchOnWindowFocus: true
		}
	);

	const { mutateAsync, status: mutateStatus } = ApiClientCtx.user.bookmark.useMutation();

	const isHidden = sessionStatus === 'unauthenticated' || queryStatus === 'error';

	if (isHidden) return null;

	const isLoading = sessionStatus === 'loading' || queryStatus === 'pending' || mutateStatus === 'pending';

	const isRecordBookmarked = Boolean(data?.result?.includes(id));

	const isMaximumBookmarks = (data?.result?.length || 0) >= MAXIMUM_BOOKMARK_LENGTH && !isRecordBookmarked;

	const isDisabled = isLoading || isMaximumBookmarks;

	const handleBookmark = async () => {
		if (isDisabled) return;

		trackEventClient('client.handleBookmark', { id, moduleId }, { flags: ['client.handleBookmark'] });

		const res = await tryCatchHandler(
			mutateAsync({
				bookmarkRecordId: id,
				moduleId,
				isBookmarked: isNotBookmarkFilter ? isRecordBookmarked : true
			}),
			'handleBookmark.mutateAsync'
		);

		if (!res.isSuccess) return void refetch();

		return void (isNotBookmarkFilter ? refetch() : trpcUtils[moduleId].getAll.invalidate());
	};

	return (
		<div
			className={cn('sm:mr-auto tooltip-bottom', { tooltip: isMaximumBookmarks })}
			data-tip={`Maximum ${MAXIMUM_BOOKMARK_LENGTH} ${capitalize(moduleId)} bookmarks reached`}
		>
			<button
				aria-label={`${data?.result?.includes(id) ? 'Remove' : ''} Bookmark ${name}`}
				className={cn('btn btn-primary btn-xs capitalize shadow-md shadow-current', {
					'btn-outline': !data?.result?.includes(id) && isNotBookmarkFilter
				})}
				onClick={handleBookmark}
				disabled={isDisabled}
			>
				<BookmarkBtnIcon
					isLoading={isLoading}
					isNotBookmarkFilter={isNotBookmarkFilter}
					isRecordBookmarked={isRecordBookmarked}
				/>
				<BookmarkBtnText isNotBookmarkFilter={isNotBookmarkFilter} isRecordBookmarked={isRecordBookmarked} />
			</button>
		</div>
	);
}
