import ItemRecord from '@root/components/ItemRecord';
import DetailLayout from '@root/components/Layout/DetailLayout';
import { colorTailwindMap } from '@root/constants';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import type { NextPage } from 'next';
import Head from 'next/head';

const ItemDetail: NextPage = () => {
	const { isReady, securedIdQuery } = useIdQuery();
	const { data, isSuccess, isLoading, isError, error } = apiContext.item.getOne.useQuery(securedIdQuery, {
		retry: 2,
		enabled: isReady,
		refetchOnWindowFocus: false,
	});

	return (
		<DetailLayout
			isError={isError}
			errorData={error?.data}
			errorMessage={error?.message}
			pageName='Item'
			rawData={data}
			extraFlag={isSuccess && !isLoading}
			extraHead={({ name, relatedCategories, color }) => (
				<Head>
					<title>{name}</title>

					<meta name='description' content={relatedCategories.map(c => `${c.name} (${c.count})`).join(', ')} />

					<meta name='theme-color' property='og:theme-color' key='theme-color' content={colorTailwindMap[color]} />
				</Head>
			)}
		>
			{props => <ItemRecord {...props} />}
		</DetailLayout>
	);
};

export default ItemDetail;
