import ItemRecord from '@root/components/ItemRecord';
import DetailLayout from '@root/components/Layout/DetailLayout';
import { colorTailwindMap } from '@root/constants';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import type { NextPage } from 'next';

const ItemDetail: NextPage = () => {
	const { isReady, securedIdQuery } = useIdQuery();
	const { data, isError, error } = apiContext.item.getOne.useQuery(securedIdQuery, {
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
			extraHead={({ color }) => (
				<meta name='theme-color' property='og:theme-color' key='theme-color' content={colorTailwindMap[color]} />
			)}
		>
			{props => <ItemRecord {...props} />}
		</DetailLayout>
	);
};

export default ItemDetail;
