import type { useModuleId } from '@root/hooks/useModuleId';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import type { SelectOptionItem } from '@root/types/common';
import type { BooleanishEnum } from '@root/types/common/zod/generic';
import { genericBooleanishEnumSchema } from '@root/types/common/zod/generic';
import { ApiClientCtx } from '@root/utils/client/trpc';
import { booleanToBooleanish, booleanishToBoolean, cn } from '@root/utils/common';
import { useSession } from 'next-auth/react';
import type { ChangeEventHandler } from 'react';
import { useEffect } from 'react';

const filterDefValue = { value: null } as const;

const filterList: Array<SelectOptionItem<BooleanishEnum>> = [
	filterDefValue,
	...genericBooleanishEnumSchema._def.values.map(value => ({ value }))
];

type Props = Readonly<{ moduleId: NonNullable<ReturnType<typeof useModuleId>['moduleId']> }>;

export default function BookmarkFilter({ moduleId }: Props) {
	const { status: sessionStatus } = useSession();

	const isAuthenticated = sessionStatus === 'authenticated';

	const [bookmarkFilter, setBookmarkFilter] = useQueryOnChange({
		filterDefValue,
		filterKey: 'bookmarked',
		filterList
	});

	const isAPIDisabled = !isAuthenticated || bookmarkFilter.value === 'true';

	const {
		data,
		refetch,
		status: queryStatus
	} = ApiClientCtx.user.getModuleBookmarks.useQuery(
		{ moduleId },
		{ refetchOnMount: true, refetchOnWindowFocus: true, enabled: !isAPIDisabled }
	);

	const isFilterDisabled = !isAuthenticated || queryStatus !== 'success' || !data.result?.length;

	useEffect(() => {
		if (isAuthenticated) return;

		setBookmarkFilter({ value: null });
	}, [isAuthenticated, moduleId, refetch, setBookmarkFilter]);

	if (!isAuthenticated) return null;

	const isBookmarked = booleanishToBoolean(bookmarkFilter.value);

	const setIsBookmarked: ChangeEventHandler<HTMLInputElement> = async e => {
		if (isFilterDisabled) return;

		const isChecked = e.currentTarget.checked;

		setBookmarkFilter({ value: booleanToBooleanish(isChecked) });

		if (!isChecked) await refetch();
	};

	return (
		<div className='my-auto flex flex-wrap gap-2'>
			<small className='my-auto text-sm font-bold'>Bookmarked:</small>

			<div className={cn({ tooltip: isFilterDisabled })} data-tip='No bookmarks to filter'>
				<input
					disabled={isFilterDisabled}
					type='checkbox'
					className='toggle align-middle disabled:pointer-events-auto disabled:cursor-default'
					onChange={setIsBookmarked}
					checked={isBookmarked}
				/>
			</div>
		</div>
	);
}
