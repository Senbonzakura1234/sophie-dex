import ListLayout from '@root/components/Layout/ListLayout';
import TraitRecord from '@root/components/TraitRecord';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Traits: NextPage = () => {
	const { securedQuery } = useSearchQuery();
	const { data, isError, error } = apiContext.trait.getAll.useQuery(securedQuery);

	return (
		<ListLayout
			isError={isError}
			errorData={error?.data}
			errorMessage={error?.message}
			pageName='trait'
			rawData={data}
		>
			{props => props.data.map((rumor, key) => <TraitRecord key={key} {...rumor} />)}
		</ListLayout>
	);
};

export default Traits;
