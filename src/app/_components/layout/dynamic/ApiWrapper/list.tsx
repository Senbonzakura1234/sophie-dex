'use client';

import EffectRecord from '@components/common/static/EffectRecord';
import ItemRecord from '@components/common/static/ItemRecord';
import RumorRecord from '@components/common/static/RumorRecord';
import TraitRecord from '@components/common/static/TraitRecord';
import ErrorContent from '@components/layout/static/ErrorContent';
import ListRecordPlaceholder from '@components/loading/ListRecordPlaceholder';
import { useListQuery } from '@root/hooks/useListQuery';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { CommonRecord } from '@root/server/postgresql/schema';
import type { ModuleIdEnum } from '@root/types/common/zod/generic';
import { type FC } from 'react';

type Props = { moduleId: ModuleIdEnum };

const componentsMapping = { effect: EffectRecord, item: ItemRecord, rumor: RumorRecord, trait: TraitRecord } as Record<
	ModuleIdEnum,
	FC<Readonly<{ data: CommonRecord } & { search?: string }>>
>;

export default function APIListWrapper({ moduleId }: Props) {
	const { searchQuery } = useSearchQuery();

	const { data, status, error } = useListQuery({ moduleId, searchQuery });

	if (status === 'success') {
		const ChildComponent = componentsMapping[moduleId];

		return (
			<>
				{data.records.map(record => (
					<ChildComponent key={record.id} data={record} search={searchQuery.search || undefined} />
				))}
			</>
		);
	}

	if (status === 'pending') return <ListRecordPlaceholder />;

	return <ErrorContent code={error.data?.code} />;
}
