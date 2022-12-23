import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import type { SearchInputProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';

const SearchInput: FC<SearchInputProps> = ({
	performSearch,
	searchInput,
	setSearchValue,
	isSearchValueValid,
	resetSearch,
}) => {
	return (
		<div className='card bg-base-100 relative ml-auto flex w-full flex-row flex-wrap gap-3 rounded-full py-[9px] px-5 shadow-2xl md:w-1/4 md:min-w-[300px]'>
			<input
				value={searchInput}
				onChange={e => setSearchValue(() => e.target.value)}
				onKeyUp={e => {
					if (e.key === 'Enter') performSearch();
				}}
				type='text'
				placeholder='Name or description...'
				className='input input-sm my-auto grow !outline-none'
			/>

			<button
				role='navigation'
				aria-label='Reset search query'
				onClick={() => resetSearch()}
				disabled={!isSearchValueValid}
				className={clsx(
					{ hidden: !isSearchValueValid },
					'btn btn-ghost btn-sm btn-circle my-auto border-0 hover:bg-transparent',
				)}
			>
				<XMarkIcon width={18} height={18} />
			</button>

			<button
				role='navigation'
				aria-label='Apply search query'
				onClick={() => performSearch()}
				className='btn btn-ghost btn-sm btn-circle my-auto border-0 hover:bg-transparent'
			>
				<MagnifyingGlassIcon width={22} height={22} />
			</button>
		</div>
	);
};

export default SearchInput;