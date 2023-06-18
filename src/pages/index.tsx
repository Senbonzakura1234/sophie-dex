import PageTitle from '@root/components/PageTitle';
import type { NextPage } from 'next';

import dynamic from 'next/dynamic';

const PageRefresh = dynamic(() => import('@root/components/PageRefresh'));

const Home: NextPage = () => (
	<>
		<PageRefresh />
		<div className='h-screen w-screen bg-base-200 !antialiased'>
			<PageTitle />
		</div>
	</>
);

export default Home;
