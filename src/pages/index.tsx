import PageTitle from '@root/components/PageTitle';
import { type NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<main className='flex h-screen flex-col items-center justify-center'>
			<PageTitle pageName='Atelier Dex' />
		</main>
	);
};

export default Home;
