import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import type { SelectOptionItem } from '@root/types/common';
import type { BooleanishEnum } from '@root/types/common/zod';
import { booleanishList } from '@root/types/model';
import { ApiClientCtx } from '@root/utils/client/trpc';
import { booleanToBooleanish, booleanishToBoolean } from '@root/utils/common';
import type { ChangeEventHandler } from 'react';

const bookmarkedFilterDefault = { value: null } as const;

const bookmarkFilterList: Array<SelectOptionItem<BooleanishEnum>> = [
	bookmarkedFilterDefault,
	...booleanishList.map(value => ({ value })),
];

export default function BookmarkFilter() {
	const trpcUtils = ApiClientCtx.useUtils();

	const [bookmarkFilter, setBookmarkFilter] = useQueryOnChange(
		'bookmarked',
		bookmarkFilterList,
		bookmarkedFilterDefault,
	);

	const isBookmarked = booleanishToBoolean(bookmarkFilter.value);

	const setIsBookmarked: ChangeEventHandler<HTMLInputElement> = async e => {
		const isChecked = e.currentTarget.checked;

		setBookmarkFilter({ value: booleanToBooleanish(isChecked) });

		if (!isChecked) trpcUtils.user.getModuleBookmarks.invalidate();
	};

	return (
		<div className='my-auto flex flex-wrap gap-2'>
			<small className='my-auto text-sm font-bold'>Bookmarked:</small>

			<input type='checkbox' className='toggle' onChange={setIsBookmarked} checked={isBookmarked} />
		</div>
	);
}
