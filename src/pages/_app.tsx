import '@root/styles/globals.css';

import RootLayout from '@root/components/Layout/RootLayout';
import { trpc } from '@root/utils/trpc';
// eslint-disable-next-line import/no-unresolved
import { Analytics } from '@vercel/analytics/react';
import { type AppType } from 'next/app';

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<>
			<RootLayout>
				<Component {...pageProps} />
			</RootLayout>
			<Analytics />
		</>
	);
};

export default trpc.withTRPC(MyApp);
