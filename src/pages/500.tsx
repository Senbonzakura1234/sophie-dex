import ErrorModal from '@root/components/ui/static/ErrorModal';

export default function Error500() {
	return (
		<ErrorModal
			disableBackDrop
			errorData={{ code: 'INTERNAL_SERVER_ERROR', httpStatus: 500 }}
			errorMessage='An Error Occurred On Server'
			isError
		/>
	);
}
