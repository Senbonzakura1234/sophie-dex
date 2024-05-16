'use client';

import EffectRecord from '@components/common/static/EffectRecord';
import ErrorContent from '@components/layout/static/ErrorContent';
import ListRecordPlaceholder from '@components/loading/ListRecordPlaceholder';
import useDispatch from '@root/hooks/useDispatch';
import type { PageProps } from '@root/types/common';
import { ApiClientCtx } from '@root/utils/client/trpc';
import { useEffect } from 'react';

type APIListWrapperProps = { searchParams: PageProps['searchParams'] };

export default function APIListWrapper({ searchParams }: APIListWrapperProps) {
	const { data, error, status } = ApiClientCtx.effect.getAll.useQuery(searchParams);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({
			type: 'UPDATE_CONTENT_DATA',
			data: {
				status,
				...(status !== 'pending' ? { totalPage: data?.totalPage || 0, totalRecord: data?.totalRecord || 0 } : {}),
			},
		});
	}, [data?.totalPage, data?.totalRecord, dispatch, status]);

	if (status === 'success')
		return (
			<>
				{data.records.map(record => (
					<EffectRecord key={record.id} data={record} search={data.search} />
				))}
			</>
		);

	if (status === 'pending') return <ListRecordPlaceholder />;

	return <ErrorContent code={error.data?.code} />;
}
