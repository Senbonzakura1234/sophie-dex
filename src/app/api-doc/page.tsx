import './swagger.css';

import SwaggerClient from '@root/components/common/client/SwaggerClient';
import ThemeSwitcher from '@root/components/layout/client/ThemeSwitcher';
import { getApiDocs } from '@root/server/swagger';

export default async function APIDoc() {
	const spec = await getApiDocs();

	return (
		<>
			<ThemeSwitcher />
			<SwaggerClient spec={spec} />
		</>
	);
}
