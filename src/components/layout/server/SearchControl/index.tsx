import SearchInput from '@root/components/layout/client/SearchInput';

export default function SearchControl() {
	return (
		<section className='container mx-auto max-2xl:px-4'>
			<div className='card ml-auto overflow-hidden bg-base-100 shadow-lg shadow-primary md:w-1/4 md:min-w-[300px]'>
				<div className='relative flex w-full flex-row gap-3 px-5 py-2'>
					<SearchInput />
				</div>
			</div>
		</section>
	);
}
