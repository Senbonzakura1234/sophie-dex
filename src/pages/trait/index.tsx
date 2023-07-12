import ListLayout from '@root/components/Layout/ListLayout';
import TraitRecord from '@root/components/TraitRecord';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Traits: NextPage = () => {
	const { securedQuery } = useSecuredRouter();
	const { data, isError, error } = apiContext.trait.getAll.useQuery(securedQuery);

	return (
		<ListLayout
			isError={isError}
			errorData={error?.data}
			errorMessage={error?.message}
			moduleId='trait'
			rawData={data}
		>
			{props => props.data.map((rumor, key) => <TraitRecord key={key} {...rumor} currentId={undefined} />)}
		</ListLayout>
	);
};

export default Traits;
