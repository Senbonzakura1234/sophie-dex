import SwaggerClient from '@root/components/common/client/SwaggerClient';
import { getApiDocs } from '@root/server/swagger';

export default async function APIDoc() {
	const spec = await getApiDocs();

	return <SwaggerClient spec={spec} />;
}
