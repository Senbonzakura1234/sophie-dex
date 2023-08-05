import EffectRecord from '@root/components/EffectRecord';
import ListLayout from '@root/components/Layout/ListLayout';
import { useSearchQuery } from '@root/hooks/router';
import { useHydrateModuleId } from '@root/hooks/useModuleId';
import { apiContext } from '@root/utils/trpc';
import { type NextPage } from 'next';

const Effects: NextPage = () => {
	const { isReady, searchQuery } = useSearchQuery();
	const { data, isError, error } = apiContext.effect.getAll.useQuery(searchQuery, { enabled: isReady });

	useHydrateModuleId('effect');

	return (
		<ListLayout isError={isError} errorData={error?.data} errorMessage={error?.message} rawData={data}>
			{props => props.data.map((rumor, key) => <EffectRecord key={key} {...rumor} currentId={undefined} />)}
		</ListLayout>
	);
};

export default Effects;
