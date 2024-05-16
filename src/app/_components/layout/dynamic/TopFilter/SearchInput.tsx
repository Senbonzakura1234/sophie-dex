'use client';

import MagnifyingGlassIcon from '@components/icons/solid/MagnifyingGlassIcon';
import XMarkIcon from '@components/icons/solid/XMarkIcon';
import { useUpdateQuery } from '@root/hooks/useUpdateQuery';
import { useEffect, useState } from 'react';

function SearchInput() {
	const { searchQuery, updateQuery } = useUpdateQuery();

	const [searchValue, setSearchValue] = useState(searchQuery.search || null);

	const resetSearch = () => {
		if (searchValue) updateQuery({ search: null });
		setSearchValue(null);
	};

	const performSearch = () => updateQuery({ search: searchValue || null });

	useEffect(() => {
		setSearchValue(searchQuery.search || null);
	}, [searchQuery.search]);

	return (
		<>
			<input
				value={searchValue || ''}
				onChange={e => {
					setSearchValue(e.target.value);
					return updateQuery({ search: e.target.value || null });
				}}
				onKeyUp={e => {
					if (e.key === 'Enter') performSearch();
				}}
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

			<button
				aria-label='Apply search query'
				className='btn btn-circle btn-ghost btn-sm my-auto border-0 hover:bg-transparent'
				onClick={() => performSearch()}
			>
				<MagnifyingGlassIcon className='aspect-square h-5' />
			</button>
		</>
	);
}

export default SearchInput;
