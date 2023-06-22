import ItemRecord from '@root/components/ItemRecord';
import DetailLayout from '@root/components/Layout/DetailLayout';
import { colorFilterMap } from '@root/constants';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import type { NextPage } from 'next';

const ItemDetail: NextPage = () => {
	const { securedIdQuery } = useIdQuery();
	const { data, isError, error } = apiContext.item.getOne.useQuery(securedIdQuery);

	return (
		<DetailLayout
			isError={isError}
			errorData={error?.data}
			errorMessage={error?.message}
			moduleId='item'
			rawData={data}
			extraHead={({ color }) => (
				<meta
					name='theme-color'
					property='og:theme-color'
					key='theme-color'
					content={colorFilterMap[color].primary}
				/>
			)}
		>
			{props => <ItemRecord {...props} />}
		</DetailLayout>
	);
};

export default ItemDetail;
