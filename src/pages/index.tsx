import HomeLayout from '@root/components/Layout/HomeLayout';
import { globalStore, moduleIdAtom } from '@root/utils/store';
import type { NextPage } from 'next';

globalStore.set(moduleIdAtom, undefined);

const Home: NextPage = () => <HomeLayout />;

export default Home;
