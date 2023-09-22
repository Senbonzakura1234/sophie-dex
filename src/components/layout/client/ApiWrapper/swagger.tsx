'use client';

import Loader from '@root/components/common/server/loading/Loader';
import ErrorContent from '@root/components/layout/server/ErrorContent';
import useDispatchContentData from '@root/hooks/useDispatchContentData';
import { ApiContext } from '@root/utils/trpc';
import dynamic from 'next/dynamic';

const Swagger = dynamic(() => import('@root/components/dynamic/Swagger'), {
	ssr: false,
	loading: () => <Loader className='loading-rin w-20 text-primary' />,
});

export default function APISwaggerWrapper() {
	const { data, isSuccess, isLoading, refetch, error, isError } = ApiContext.example.useQuery();

	useDispatchContentData({ contentData: { refetch, totalPage: 0, totalRecord: 0, isError } });

	if (isLoading) return <Loader className='loading-rin w-20 text-primary' />;

	if (!isSuccess && !isLoading) return <ErrorContent code={error.data?.code} />;

	return <Swagger data={data} />;
}
