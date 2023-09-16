'use client';

import type { SwaggerClientProps } from '@root/types/common/props';
import SwaggerUI from 'swagger-ui-react';

export default function Swagger({ spec }: SwaggerClientProps) {
	return <SwaggerUI spec={spec} />;
}
