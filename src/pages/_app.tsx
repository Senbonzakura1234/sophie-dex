import '@root/styles/globals.css';

import RootLayout from '@root/components/Layout/RootLayout';
import { trpc } from '@root/utils/trpc';
import { type AppType } from 'next/app';

const MyApp: AppType = ({ Component, pageProps }) => (
	<RootLayout>
		<Component {...pageProps} />
	</RootLayout>
);

export default trpc.withTRPC(MyApp);
