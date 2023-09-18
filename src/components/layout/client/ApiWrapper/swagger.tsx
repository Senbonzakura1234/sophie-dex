'use client';

import Loader from '@root/components/common/server/loading/Loader';
import { ApiContext } from '@root/utils/trpc';
import dynamic from 'next/dynamic';
import ErrorMessage from './ErrorMessage';

const Swagger = dynamic(() => import('@root/components/dynamic/Swagger'), {
	ssr: false,
	loading: () => <Loader className='loading-rin w-20 text-primary' />,
});

export default function APISwaggerWrapper() {
	const { data, isSuccess, isLoading, refetch } = ApiContext.example.useQuery();

	if (isLoading) return <Loader className='loading-rin w-20 text-primary' />;

	if (!isSuccess && !isLoading) return <ErrorMessage onRefetch={refetch} />;

	return <Swagger data={data} />;
}
