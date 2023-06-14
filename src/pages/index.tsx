import PageTitle from '@root/components/PageTitle';
import type { NextPage } from 'next';

const Home: NextPage = () => (
	<div className='h-screen w-screen bg-base-200 !antialiased'>
		<PageTitle pageName='home' />
	</div>
);

export default Home;
