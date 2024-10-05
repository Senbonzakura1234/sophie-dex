'use client';

import MagnifyingGlassIcon from '@components/icons/solid/MagnifyingGlassIcon';
import XMarkIcon from '@components/icons/solid/XMarkIcon';
import { useDebounce } from '@root/hooks/useDebounce';
import { useUpdateQuery } from '@root/hooks/useUpdateQuery';
import { useEffect, useState } from 'react';

function SearchInput() {
	const { searchQuery, updateQuery, moduleId } = useUpdateQuery();

	const [searchValue, setSearchValue] = useState(searchQuery.search || null);

	const debouncedSearchValue = useDebounce(searchValue);

	const resetSearch = () => {
		if (searchValue) updateQuery({ search: null });
		setSearchValue(null);
	};

	useEffect(() => {
		setSearchValue(searchQuery.search);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [moduleId]);

	useEffect(() => {
		updateQuery({ search: debouncedSearchValue || null });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedSearchValue]);

	return (
		<>
			<input
				value={searchValue || ''}
				onChange={e => setSearchValue(e.target.value)}
				type='text'
				placeholder='Name or description...'
				className='input input-sm my-auto grow border-none px-1 py-0 !outline-none'
			/>

			{!!searchValue ? (
				<button
					aria-label='Reset search query'
					className='btn btn-circle btn-ghost btn-sm my-auto border-0 focus:bg-transparent'
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
