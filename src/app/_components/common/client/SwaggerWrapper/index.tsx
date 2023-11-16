'use client';

import './index.css';

import Loader from '@components/loading/Loader';
import dynamic from 'next/dynamic';
import type { SwaggerUIProps } from 'swagger-ui-react';

const Swagger = dynamic(() => import('swagger-ui-react'), {
	ssr: false,
	loading: () => <Loader className='loading-rin w-20 text-primary' />,
});

type Props = SwaggerUIProps & JSX.IntrinsicAttributes;

export default function SwaggerWrapper(props: Props) {
	return <Swagger {...props} />;
}
