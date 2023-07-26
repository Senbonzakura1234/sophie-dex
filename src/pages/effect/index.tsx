import EffectRecord from '@root/components/EffectRecord';
import ListLayout from '@root/components/Layout/ListLayout';
import { useHydrateModuleId } from '@root/hooks/useModuleId';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import { apiContext } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Effects: NextPage = () => {
	const { securedQuery } = useSecuredRouter();
	const { data, isError, error } = apiContext.effect.getAll.useQuery(securedQuery);

	useHydrateModuleId('effect');

	return (
		<ListLayout isError={isError} errorData={error?.data} errorMessage={error?.message} rawData={data}>
			{props => props.data.map((rumor, key) => <EffectRecord key={key} {...rumor} currentId={undefined} />)}
		</ListLayout>
	);
};

export default Effects;
