'use client';

import MagnifyingGlassIcon from '@components/icons/solid/MagnifyingGlassIcon';
import XMarkIcon from '@components/icons/solid/XMarkIcon';
import { useDebounce } from '@root/hooks/useDebounce';
import { useUpdateQuery } from '@root/hooks/useUpdateQuery';
import { useEffect, useState } from 'react';

function SearchInput() {
	const { searchQuery, updateQuery } = useUpdateQuery();

	const [searchValue, setSearchValue] = useState(searchQuery.search || null);

	const debouncedSearchValue = useDebounce(searchValue);

	const resetSearch = () => {
		if (searchValue) updateQuery({ search: null });
		setSearchValue(null);
	};

	useEffect(() => {
		if (!searchQuery.search) setSearchValue(null);
	}, [searchQuery.search]);

	useEffect(() => {
		updateQuery({ search: debouncedSearchValue || null });
	}, [debouncedSearchValue, updateQuery]);

	return (
		<>
			<input
				value={searchValue || ''}
				onChange={e => setSearchValue(e.target.value)}
				type='text'
				placeholder='Name or description...'
				className='input input-sm my-auto grow border-none p-0 !outline-none'
			/>

			{!!searchValue ? (
				<button
					aria-label='Reset search query'
					className='btn btn-circle btn-ghost btn-sm my-auto border-0 hover:bg-transparent'
					onClick={resetSearch}
				>
					<XMarkIcon className='aspect-square h-5' />
				</button>
			) : null}

			<MagnifyingGlassIcon className='my-auto aspect-square h-5' />
		</>
	);
}

export default SearchInput;
