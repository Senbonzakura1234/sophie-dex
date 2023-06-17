import MagnifyingGlassIcon from '@root/assets/icons/solid/MagnifyingGlassIcon';
import XMarkIcon from '@root/assets/icons/solid/XMarkIcon';
import { useSearchInput } from '@root/hooks/useSearchInput';

export default function SearchInput() {
	const { performSearch, searchInput, setSearchValue, isSearchValueValid, resetSearch } = useSearchInput();

	return (
		<>
			<input
				value={searchInput}
				onChange={e => setSearchValue(e.target.value)}
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
				onClick={resetSearch}
				className={`btn-ghost btn-sm btn-circle btn my-auto border-0 hover:bg-transparent ${
					!isSearchValueValid && 'opacity-0'
				}`}
			>
				<XMarkIcon width={18} height={18} />
			</button>

			<button
				role='navigation'
				aria-label='Apply search query'
				onClick={() => performSearch()}
				className='btn-ghost btn-sm btn-circle btn my-auto border-0 hover:bg-transparent'
			>
				<MagnifyingGlassIcon width={22} height={22} />
			</button>
		</>
	);
}
