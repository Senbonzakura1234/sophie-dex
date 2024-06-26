'use client';

import RumorRecord from '@components/common/static/RumorRecord';
import ErrorContent from '@components/layout/static/ErrorContent';
import ListRecordPlaceholder from '@components/loading/ListRecordPlaceholder';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import { ApiClientCtx } from '@root/utils/client/trpc';

export default function APIListWrapper() {
	const { searchQuery } = useSearchQuery();

	const { data, error, status } = ApiClientCtx.rumor.getAll.useQuery(searchQuery, {
		notifyOnChangeProps: ['data', 'error']
	});

	if (status === 'success')
		return (
			<>
				{data.records.map(record => (
					<RumorRecord key={record.id} data={record} search={searchQuery.search || undefined} />
				))}
			</>
		);

	if (status === 'pending') return <ListRecordPlaceholder />;

	return <ErrorContent code={error.data?.code} />;
}
