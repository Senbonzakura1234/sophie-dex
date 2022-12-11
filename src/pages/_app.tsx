import { APP_DESCRIPTION, APP_NAME } from '@root/constants';
import '@root/styles/atelier.css';
import '@root/styles/globals.css';

import { trpc } from '@root/utils/trpc';
import { type AppType } from 'next/app';
import Head from 'next/head';

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<title>{APP_NAME}</title>
				<meta property='og:title' content={APP_NAME} key='title' />
				<meta name='description' content={APP_DESCRIPTION} />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' href='/favicon.jpg' />
			</Head>
			<main className='bg-base-200 h-screen w-screen overflow-y-auto'>
				<Component {...pageProps} />
			</main>
		</>
	);
};

export default trpc.withTRPC(MyApp);
