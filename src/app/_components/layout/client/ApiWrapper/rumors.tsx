'use client';

import RumorRecord from '@components/common/server/RumorRecord';
import ErrorContent from '@components/layout/server/ErrorContent';
import RecordPlaceholder from '@components/loading/RecordPlaceholder';
import { DEFAULT_LIMIT } from '@root/constants/common';
import useDispatch from '@root/hooks/useDispatch';
import type { PageProps } from '@root/types/common';
import { ApiClientCtx } from '@root/utils/client/trpc';
import { createArray } from '@root/utils/common';
import { useEffect } from 'react';

type APIListWrapperProps = { searchParams: PageProps['searchParams'] };

export default function APIListWrapper({ searchParams }: APIListWrapperProps) {
	const { data, refetch, error, status } = ApiClientCtx.rumor.getAll.useQuery(searchParams);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({
			type: 'UPDATE_CONTENT_DATA',
			data: {
				status,
				refetch,
				...(status !== 'pending' ? { totalPage: data?.totalPage || 0, totalRecord: data?.totalRecord || 0 } : {}),
			},
		});
	}, [data?.totalPage, data?.totalRecord, dispatch, refetch, status]);

	if (status === 'success')
		return (
			<>
				{data.records.map(record => (
					<RumorRecord key={record.id} data={record} search={data.search} />
				))}
			</>
		);

	if (status === 'pending')
		return (
			<>
				{createArray(DEFAULT_LIMIT, 0).map((_, key) => (
					<RecordPlaceholder key={key} />
				))}
			</>
		);

	return <ErrorContent code={error.data?.code} />;
}
