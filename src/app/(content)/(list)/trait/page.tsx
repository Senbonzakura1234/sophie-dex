import DispatchListMeta from '@root/components/common/client/DispatchListMeta';
import TraitRecord from '@root/components/common/server/TraitRecord';
import { APP_NAME } from '@root/constants';
import { listRecordProvider } from '@root/db/repository/listRecord';
import type { PageProps } from '@root/types/common';
import { generateListMetadata } from '@root/utils/server';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ searchParams }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateListMetadata(searchParams, parent, { title: `${APP_NAME} | Traits` });
}

export default async function Trait({ searchParams }: PageProps) {
	const { records, ...listMeta } = await listRecordProvider.getTraits(searchParams);

	return (
		<>
			<DispatchListMeta listMeta={listMeta} />

			{records.map(record => (
				<TraitRecord key={record.id} data={record} />
			))}
		</>
	);
}
