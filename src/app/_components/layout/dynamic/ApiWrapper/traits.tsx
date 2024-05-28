'use client';

import TraitRecord from '@components/common/static/TraitRecord';
import ErrorContent from '@components/layout/static/ErrorContent';
import ListRecordPlaceholder from '@components/loading/ListRecordPlaceholder';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import { ApiClientCtx } from '@root/utils/client/trpc';

export default function APIListWrapper() {
	const { searchQuery } = useSearchQuery();

	const { data, error, status } = ApiClientCtx.trait.getAll.useQuery(searchQuery, {
		notifyOnChangeProps: ['data', 'error']
	});

	if (status === 'success')
		return (
			<>
				{data.records.map(record => (
					<TraitRecord key={record.id} data={record} search={data.search} />
				))}
			</>
		);

	if (status === 'pending') return <ListRecordPlaceholder />;

	return <ErrorContent code={error.data?.code} />;
}
