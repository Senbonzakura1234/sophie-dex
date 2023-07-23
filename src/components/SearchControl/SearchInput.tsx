import { observer, useObservable } from '@legendapp/state/react';
import MagnifyingGlassIcon from '@root/assets/icons/solid/MagnifyingGlassIcon';
import XMarkIcon from '@root/assets/icons/solid/XMarkIcon';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import type { ModuleIdProps } from '@root/types/common/props';
import { useEffect } from 'react';

type SearchInputProps = ModuleIdProps;

function SearchInput({ moduleId }: SearchInputProps) {
	const { securedQuery, updateQuery } = useSecuredRouter();

	const searchValue = useObservable<string | null>(null);

	useEffect(() => {
		searchValue.set(securedQuery.search ?? null);
	}, [searchValue, securedQuery.search]);

	const resetSearch = () => {
		searchValue.set(null);
		return updateQuery({ search: null }, moduleId);
	};

	const performSearch = () => updateQuery({ search: searchValue.get() || null }, moduleId);

	return (
		<>
			<input
				value={searchValue.get() || ''}
				onChange={e => searchValue.set(e.target.value)}
				onKeyUp={e => {
					if (e.key === 'Enter') performSearch();
				}}
				type='text'
				placeholder='Name or description...'
				className='input input-sm my-auto grow p-0 !outline-none'
			/>

			{!!searchValue.get() ? (
				<button
					role='navigation'
					aria-label='Reset search query'
					onClick={resetSearch}
					className='btn btn-circle btn-ghost btn-sm my-auto border-0 hover:bg-transparent'
				>
					<XMarkIcon className='aspect-square h-5' />
				</button>
			) : null}

			<button
				role='navigation'
				aria-label='Apply search query'
				onClick={() => performSearch()}
				className='btn btn-circle btn-ghost btn-sm my-auto border-0 hover:bg-transparent'
			>
				<MagnifyingGlassIcon className='aspect-square h-5' />
			</button>
		</>
	);
}

export default observer(SearchInput);
