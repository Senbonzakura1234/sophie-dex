import './swagger.css';

import SwaggerClient from '@root/components/common/client/SwaggerClient';
import BasePlaceHolder from '@root/components/common/server/loading/BasePlaceHolder';
import PageBanner from '@root/components/layout/server/PageBanner';
import { getApiDocs } from '@root/server/swagger';
import { Suspense } from 'react';

export default async function APIDoc() {
	const spec = await getApiDocs();

	return (
		<>
			<Suspense fallback={<BasePlaceHolder className='grow' />}>
				<SwaggerClient spec={spec} />
			</Suspense>
			<PageBanner bannerType='bottom' />
		</>
	);
}
