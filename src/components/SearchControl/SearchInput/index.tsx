import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useSearchInput } from '@root/hooks/useSearchInput';
import clsx from 'clsx';
import type { FC } from 'react';

const SearchInput: FC = () => {
	const { performSearch, searchInput, setSearchValue, isSearchValueValid, resetSearch } = useSearchInput();

	return (
		<>
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
		</>
	);
};

export default SearchInput;
