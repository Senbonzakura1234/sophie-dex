'use client';

import ErrorContent from '@components/layout/static/ErrorContent';

export default function Error() {
	return (
		<html lang='en'>
			<body data-theme='fantasy'>
				<main className='h-dvh w-dvw place-content-center overflow-hidden bg-base-200 !antialiased'>
					<ErrorContent />
				</main>
			</body>
		</html>
	);
}
