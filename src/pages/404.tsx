import ErrorModal from '@root/components/ui/static/ErrorModal';

export default function Error500() {
	return (
		<ErrorModal
			disableBackDrop
			errorData={{ code: 'NOT_FOUND', httpStatus: 400 }}
			errorMessage='Page Not Found'
			isError
		/>
	);
}
