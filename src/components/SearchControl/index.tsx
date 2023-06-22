import type { ModuleIdProps } from '@root/types/common/props';
import dynamic from 'next/dynamic';

const SearchInput = dynamic(() => import('./SearchInput'));

type SearchControlProps = ModuleIdProps;

export default function SearchControl({ moduleId }: SearchControlProps) {
	return (
		<section className='container mx-auto max-2xl:px-4'>
			<div className='card ml-auto overflow-hidden rounded-full bg-base-100 shadow-lg shadow-primary md:w-1/4 md:min-w-[300px]'>
				<div className='relative flex w-full flex-row gap-3 px-5 py-[9px]'>
					<SearchInput moduleId={moduleId} />
				</div>
			</div>
		</section>
	);
}
