import SwaggerWrapper from '@components/common/client/SwaggerWrapper';
import SuspenseComponent from '@components/layout/server/SuspenseComponent';
import Loader from '@components/loading/Loader';
import { ApiServerCtx } from '@root/utils/server/trpc';
import { Suspense } from 'react';

export default function APIDoc() {
	return (
		<Suspense fallback={<Loader className='loading-rin w-20 text-primary' />}>
			<SuspenseComponent promiseData={ApiServerCtx.apiDoc.fetch()} ChildComponent={SwaggerWrapper} />
		</Suspense>
	);
}
