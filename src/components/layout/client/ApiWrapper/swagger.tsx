'use client';

import ErrorContent from '@root/components/layout/server/ErrorContent';
import Loader from '@root/components/loading/Loader';
import useDispatchContentData from '@root/hooks/useDispatchContentData';
import { ApiContext } from '@root/utils/trpc';
import dynamic from 'next/dynamic';

const Swagger = dynamic(() => import('swagger-ui-react'), {
	ssr: false,
	loading: () => <Loader className='loading-rin w-20 text-primary' />,
});

export default function APISwaggerWrapper() {
	const { data, isSuccess, isLoading, refetch, error, isError } = ApiContext.example.useQuery();

	useDispatchContentData({ contentData: { refetch, isError } });

	if (isLoading) return <Loader className='loading-rin w-20 text-primary' />;

	if (!isSuccess && !isLoading) return <ErrorContent code={error.data?.code} />;

	return <Swagger spec={data} />;
}
