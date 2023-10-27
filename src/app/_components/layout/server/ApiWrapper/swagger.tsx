import SwaggerWrapper from '@components/common/client/SwaggerWrapper';
import { ApiServerCtx } from '@root/utils/server/trpc';

export default async function APISwaggerWrapper() {
	const data = await ApiServerCtx.example.fetch();

	return <SwaggerWrapper spec={data} />;
}
