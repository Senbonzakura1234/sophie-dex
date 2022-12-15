import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import FadeWrapper from '@root/components/Animations/FadeWrapper';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const SearchInput: FC = () => {
	const { securedQuery, isReady, updateQuery } = useSearchQuery();
	const [search, setSearch] = useState<string>('');

	useEffect(() => {
		if (isReady && securedQuery.search) setSearch(securedQuery.search);
	}, [isReady, securedQuery.search]);

	return (
		<FadeWrapper show={isReady} appear={true}>
			<div className='form-control w-full max-w-4xl'>
				<div className='input-group input-group-sm 2xl:input-group-md relative'>
					<input
						value={search}
						onChange={e => setSearch(() => e.target.value)}
						onKeyUp={e => {
							if (e.key === 'Enter' && isReady) updateQuery({ search: search.length > 0 ? search : null });
						}}
						type='text'
						placeholder='Name or description...'
						className='input input-bordered input-primary input-sm xl:input-md grow !outline-none'
					/>
					{search.length > 0 && (
						<button
							role='search'
							aria-label='Clear search query'
							onClick={() => setSearch(() => '')}
							className='btn btn-sm btn-ghost btn-circle absolute inset-y-[16%] right-16 z-10 hidden xl:flex 2xl:right-36'
						>
							<XMarkIcon width={20} height={20} />
						</button>
					)}
					<button
						role='navigation'
						aria-label='Apply search query'
						onClick={() => {
							if (isReady) updateQuery({ search: search.length > 0 ? search : null });
						}}
						className='btn btn-sm xl:btn-md w-20 border-0 2xl:w-32'
					>
						<MagnifyingGlassIcon width={24} height={24} />
					</button>
				</div>
			</div>
		</FadeWrapper>
	);
};

export default SearchInput;
