import EffectRecord from '@root/components/EffectRecord';
import ListLayout from '@root/components/Layout/ListLayout';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Effects: NextPage = () => {
	const { securedQuery, isRouterReady } = useSearchQuery();
	const { data, isError, error } = apiContext.effect.getAll.useQuery(securedQuery, {
		retry: 2,
		enabled: isRouterReady,
		refetchOnWindowFocus: false,
	});

	return (
		<ListLayout
			isError={isError}
			errorData={error?.data}
			errorMessage={error?.message}
			pageName='Effect'
			rawData={data}
		>
			{props => props.data.map((rumor, key) => <EffectRecord key={key} {...rumor} />)}
		</ListLayout>
	);
};

export default Effects;
