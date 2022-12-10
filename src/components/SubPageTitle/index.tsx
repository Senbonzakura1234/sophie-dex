import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid';
import sophieBg from '@root/assets/pictures/sophie.jpg';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { PageName } from '@root/types/common';
import Image from 'next/image';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

const SubPageTitle: FC<{ pageName: PageName }> = ({ pageName }) => {
	const { securedQuery, isReady, updateQuery } = useSearchQuery();
	const [search, setSearch] = useState<string>('');

	useEffect(() => {
		if (isReady && securedQuery.search) setSearch(securedQuery.search);
	}, [isReady, securedQuery.search]);

	return (
		<section className='relative h-1/4 w-full overflow-hidden'>
			<Image className='object-cover' fill placeholder='blur' src={sophieBg} alt='sophie' sizes='100vw' />
			<div className='bg-primary/75 absolute inset-0 z-10'></div>

			<div className='container absolute inset-0 z-20 mx-auto flex flex-wrap place-content-center gap-6 px-4 pt-5 xl:gap-10'>
				<div className='text-secondary w-full text-center text-5xl font-extrabold decoration-black decoration-2 xl:text-7xl'>
					{pageName}
				</div>
				<div className='form-control w-full max-w-4xl'>
					<div className='input-group relative'>
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
			</div>
		</section>
	);
};

export default SubPageTitle;
