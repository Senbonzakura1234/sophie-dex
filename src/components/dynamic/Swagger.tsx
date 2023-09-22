'use client';

import SwaggerUI from 'swagger-ui-react';

type SwaggerProps = { spec: Record<string, unknown> };

export default function Swagger({ spec }: SwaggerProps) {
	return <SwaggerUI spec={spec} />;
}
