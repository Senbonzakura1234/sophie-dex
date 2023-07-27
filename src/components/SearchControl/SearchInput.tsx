import MagnifyingGlassIcon from '@root/assets/icons/solid/MagnifyingGlassIcon';
import XMarkIcon from '@root/assets/icons/solid/XMarkIcon';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

const searchValueAtom = atom<string | null>(null);

function SearchInput() {
	const { securedQuery, updateQuery } = useSecuredRouter();

	const [searchValue, setSearchValue] = useAtom(searchValueAtom);

	useEffect(() => {
		setSearchValue(securedQuery.search ?? null);
	}, [securedQuery.search, setSearchValue]);

	const resetSearch = () => {
		setSearchValue(null);
		return updateQuery({ search: null });
	};

	const performSearch = () => updateQuery({ search: searchValue || null });

	return (
		<>
			<input
				value={searchValue || ''}
				onChange={e => setSearchValue(e.target.value)}
				onKeyUp={e => {
					if (e.key === 'Enter') performSearch();
				}}
				type='text'
				placeholder='Name or description...'
				className='input input-sm my-auto grow p-0 !outline-none'
			/>

			{!!searchValue ? (
				<button
					aria-label='Reset search query'
					className='btn btn-circle btn-ghost btn-sm my-auto border-0 hover:bg-transparent'
					onClick={resetSearch}
					role='navigation'
				>
					<XMarkIcon className='aspect-square h-5' />
				</button>
			) : null}

			<button
				aria-label='Apply search query'
				className='btn btn-circle btn-ghost btn-sm my-auto border-0 hover:bg-transparent'
				onClick={() => performSearch()}
				role='navigation'
			>
				<MagnifyingGlassIcon className='aspect-square h-5' />
			</button>
		</>
	);
}

export default SearchInput;
