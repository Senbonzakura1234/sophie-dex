import '@root/styles/atelier.css';
import '@root/styles/globals.css';

// import localFont from '@next/font/local';
import { trpc } from '@root/utils/trpc';
import { type AppType } from 'next/app';
import Head from 'next/head';

// const { style } = localFont({ src: '../assets/fonts/Atelier.woff2' });

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Head>
			<main className='bg-base-200 h-screen w-screen overflow-y-auto'>
				<Component {...pageProps} />
			</main>
		</>
	);
};

export default trpc.withTRPC(MyApp);
