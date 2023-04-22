import '@root/styles/globals.css';
import '@total-typescript/ts-reset';

import RootLayout from '@root/components/Layout/RootLayout';
import { apiContext } from '@root/utils/trpc';
import { type AppType } from 'next/app';

const MyApp: AppType = ({ Component, pageProps }) => (
	<RootLayout>
		<Component {...pageProps} />
	</RootLayout>
);

export default apiContext.withTRPC(MyApp);
