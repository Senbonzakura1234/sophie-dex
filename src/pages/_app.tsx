import '@root/styles/globals.css';
import '@total-typescript/ts-reset';

import RootLayout from '@root/components/Layout/RootLayout';
import { evnIs } from '@root/utils/common';
import { apiContext } from '@root/utils/trpc';
import { Analytics } from '@vercel/analytics/react';
import { type AppType } from 'next/app';

const MyApp: AppType = ({ Component, pageProps }) => (
	<RootLayout>
		<Component {...pageProps} />
		<Analytics beforeSend={e => (evnIs('production') ? e : null)} />
	</RootLayout>
);

export default apiContext.withTRPC(MyApp);
