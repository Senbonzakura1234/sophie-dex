'use client';

import type { SwaggerClientProps } from '@root/types/common/props';
import dynamic from 'next/dynamic';

const Swagger = dynamic(() => import('@root/components/dynamic/Swagger'), { ssr: false });

export default function SwaggerClient({ spec }: SwaggerClientProps) {
	return <Swagger spec={spec} />;
}
