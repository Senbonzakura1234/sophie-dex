import DispatchListMeta from '@root/components/common/client/DispatchListMeta';
import ItemRecord from '@root/components/common/server/ItemRecord';
import { APP_NAME } from '@root/constants';
import { get } from '@root/server/api/list/getItems';
import type { PageProps } from '@root/types/common';
import { generateListMetadata } from '@root/utils/server';
import type { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata({ searchParams }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	return generateListMetadata(searchParams, parent, { title: `${APP_NAME} | Items` });
}

export default async function Item({ searchParams }: PageProps) {
	const { records, ...listMeta } = await get(searchParams);

	return (
		<>
			<DispatchListMeta listMeta={listMeta} />

			{records.map(record => (
				<ItemRecord key={record.id} data={record} />
			))}
		</>
	);
}