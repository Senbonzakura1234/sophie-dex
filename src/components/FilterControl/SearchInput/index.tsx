import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useSearchInput } from '@root/hooks/useSearchInput';
import clsx from 'clsx';
import type { FC } from 'react';

const SearchInput: FC = () => {
	const { performSearch, searchInput, setSearchValue, isSearchValueValid, resetSearch } = useSearchInput();

	return (
		<div className='card bg-base-100 shadow-primary relative ml-auto flex w-full flex-row gap-3 rounded-full py-[9px] px-5 shadow-lg md:w-1/4 md:min-w-[300px]'>
			<input
				value={searchInput}
				onChange={e => setSearchValue(() => e.target.value)}
				onKeyUp={e => {
					if (e.key === 'Enter') performSearch();
				}}
				type='text'
				placeholder='Name or description...'
				className='input input-sm my-auto grow p-0 !outline-none'
			/>

			<button
				role='navigation'
				aria-label='Reset search query'
				onClick={() => resetSearch()}
				disabled={!isSearchValueValid}
				className={clsx(
					{ 'opacity-0': !isSearchValueValid },
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
