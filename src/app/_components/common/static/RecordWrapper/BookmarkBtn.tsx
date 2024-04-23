'use client';

import BookmarkIconOutline from '@components/icons/outline/BookmarkIcon';
import BookmarkIconSolid from '@components/icons/solid/BookmarkIcon';
import type { ModuleIdEnum } from '@root/types/common/zod';
import { ApiClientCtx } from '@root/utils/client/trpc';
import { cn } from '@root/utils/common';
import { useSession } from 'next-auth/react';

type Props = { id: string; name: string; moduleId: ModuleIdEnum };

export default function BookmarkBtn({ id, name, moduleId }: Props) {
	const { status: sessionStatus } = useSession();

	const {
		data,
		refetch,
		status: queryStatus,
	} = ApiClientCtx.user.getModuleBookmarks.useQuery(
		{ moduleId: moduleId! },
		{ enabled: sessionStatus === 'authenticated' },
	);

	const { mutateAsync, status: mutateStatus } = ApiClientCtx.user.bookmark.useMutation();

	const isLoading = sessionStatus === 'loading' || queryStatus === 'pending' || mutateStatus === 'pending';
	const isDisabled = isLoading || sessionStatus === 'unauthenticated' || queryStatus === 'error';

	const handleBookmark = async () => {
		if (isDisabled) return;

		await mutateAsync({
			bookmarkRecordId: id,
			moduleId,
			isBookmarked: data?.result?.includes(id),
		});

		return await refetch();
	};

	return (
		<button
			aria-label={`Bookmark ${name}`}
			className={cn(
				'btn btn-primary btn-xs my-auto capitalize align-middle dark:shadow-md dark:shadow-current w-3/4 sm:w-auto sm:mr-auto',
				{
					'btn-outline': !data?.result?.includes(id),
				},
			)}
			onClick={handleBookmark}
			disabled={isDisabled}
			role='button'
		>
			{isLoading ? (
				<span className='loading loading-spinner size-3' />
			) : data?.result?.includes(id) ? (
				<BookmarkIconSolid className='size-3' />
			) : (
				<BookmarkIconOutline className='size-3' />
			)}

			{data?.result?.includes(id) ? 'bookmarked' : 'bookmark'}
		</button>
	);
}
