import ErrorCard from '@root/components/ui/static/ErrorCard';

export default function Error500() {
	return (
		<div className='absolute inset-0 z-50 grid grid-cols-1 place-content-center p-2 md:grid-cols-none'>
			<ErrorCard errorMessage='An Error Occurred On Server' httpStatus={500} />
		</div>
	);
}
