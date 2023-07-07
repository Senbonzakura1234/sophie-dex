import ErrorModal from '@root/components/ui/static/ErrorModal';

export default function Error500() {
	return (
		<div className='absolute inset-0 z-50 grid grid-cols-1 place-content-center bg-slate-950/40 p-2 md:grid-cols-none'>
			<ErrorModal errorData={{ code: 'NOT_FOUND', httpStatus: 400 }} errorMessage='Page Not Found' isShow />
		</div>
	);
}
