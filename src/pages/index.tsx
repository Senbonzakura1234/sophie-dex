import HomeLayout from '@root/components/Layout/HomeLayout';
import { useHydrateModuleId } from '@root/hooks/useModuleId';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	useHydrateModuleId();

	return <HomeLayout />;
};

export default Home;
