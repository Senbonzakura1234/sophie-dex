'use client';

import BasePlaceHolder from '@root/components/common/server/loading/BasePlaceHolder';
import type { SwaggerClientProps } from '@root/types/common/props';
import dynamic from 'next/dynamic';

const Swagger = dynamic(() => import('@root/components/dynamic/Swagger'), {
	ssr: false,
	loading: () => <BasePlaceHolder className='grow' />,
});

export default function SwaggerClient({ spec }: SwaggerClientProps) {
	return <Swagger spec={spec} />;
}
