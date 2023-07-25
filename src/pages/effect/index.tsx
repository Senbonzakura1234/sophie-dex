import EffectRecord from '@root/components/EffectRecord';
import ListLayout from '@root/components/Layout/ListLayout';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import { globalStore, moduleIdAtom } from '@root/utils/store';
import { apiContext } from '@root/utils/trpc';
import { type NextPage } from 'next';

globalStore.set(moduleIdAtom, 'effect');

const Effects: NextPage = () => {
	const { securedQuery } = useSecuredRouter();
	const { data, isError, error } = apiContext.effect.getAll.useQuery(securedQuery);

	return (
		<ListLayout isError={isError} errorData={error?.data} errorMessage={error?.message} rawData={data}>
			{props => props.data.map((rumor, key) => <EffectRecord key={key} {...rumor} currentId={undefined} />)}
		</ListLayout>
	);
};

export default Effects;
