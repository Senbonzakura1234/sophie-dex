import APISwaggerWrapper from '@components/layout/server/ApiWrapper/swagger';
import Loader from '@components/loading/Loader';
import { Suspense } from 'react';

export default function APIDoc() {
	return (
		<Suspense fallback={<Loader className='loading-rin w-20 text-primary' />}>
			<APISwaggerWrapper />
		</Suspense>
	);
}
