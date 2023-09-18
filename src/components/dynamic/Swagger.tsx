'use client';

import type { ExampleRecordObject } from '@root/server/database/schema';
import { getApiDocs } from '@root/utils/swagger';
import { useMemo } from 'react';
import SwaggerUI from 'swagger-ui-react';

type SwaggerProps = { data: ExampleRecordObject };

export default function Swagger({ data }: SwaggerProps) {
	const spec = useMemo(() => getApiDocs(data), [data]);

	return <SwaggerUI spec={spec} />;
}
