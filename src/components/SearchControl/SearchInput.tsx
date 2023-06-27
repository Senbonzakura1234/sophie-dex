import MagnifyingGlassIcon from '@root/assets/icons/solid/MagnifyingGlassIcon';
import XMarkIcon from '@root/assets/icons/solid/XMarkIcon';
import { useSearchInput } from '@root/hooks/useSearchInput';
import type { ModuleIdProps } from '@root/types/common/props';

type SearchInputProps = ModuleIdProps;

export default function SearchInput({ moduleId }: SearchInputProps) {
	const { performSearch, searchInput, setSearchValue, isSearchValueValid, resetSearch } = useSearchInput(moduleId);

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

			{isSearchValueValid ? (
				<button
					role='navigation'
					aria-label='Reset search query'
					onClick={resetSearch}
					className='btn-ghost btn-sm btn-circle btn my-auto border-0 hover:bg-transparent'
				>
					<XMarkIcon width={18} height={18} />
				</button>
			) : null}

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
