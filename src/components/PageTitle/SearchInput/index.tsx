import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const SearchInput: FC = () => {
	const { securedQuery, isReady, updateQuery } = useSearchQuery();
	const [search, setSearch] = useState<string>('');

	useEffect(() => {
		if (isReady && securedQuery.search) setSearch(securedQuery.search);
	}, [isReady, securedQuery.search]);

	return (
		<div className='form-control w-full max-w-4xl'>
			<div className='input-group input-group-xs xl:input-group-md relative'>
				<input
					value={search}
					onChange={e => setSearch(() => e.target.value)}
					onKeyUp={e => {
						if (e.key === 'Enter' && isReady) updateQuery({ search: search.length > 0 ? search : null });
					}}
					type='text'
					placeholder='Name or description...'
					className='input input-bordered input-primary grow !outline-none'
				/>
				{search.length > 0 && (
					<button
						onClick={() => setSearch(() => '')}
						className='btn btn-sm btn-ghost btn-circle absolute inset-y-[16%] right-16 z-10 xl:right-36'
					>
						<XMarkIcon width={20} height={20} />
					</button>
				)}
				<button
					onClick={() => {
						if (isReady) updateQuery({ search: search.length > 0 ? search : null });
					}}
					className='btn border-0 xl:w-32'
				>
					<MagnifyingGlassIcon width={24} height={24} />
				</button>
			</div>
		</div>
	);
};

export default SearchInput;
