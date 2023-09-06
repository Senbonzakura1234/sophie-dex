import BasePlaceHolder from './BasePlaceHolder';

export default function RecordPlaceholder() {
	return (
		<article className='card relative my-auto h-full p-1.5'>
			<div className='absolute inset-y-0 left-0 w-1/3 rounded-[inherit] bg-gradient-to-r from-accent to-primary shadow-lg shadow-primary' />

			<div className='absolute inset-y-0 right-0 w-1/3 rounded-[inherit] bg-gradient-to-l  from-accent to-primary shadow-lg shadow-primary' />

			<div className='card-body z-10 h-60 gap-3 overflow-hidden rounded-[inherit] bg-base-100 p-0 shadow-inner shadow-base-content'>
				<BasePlaceHolder className='h-full w-full' />
			</div>
		</article>
	);
}
