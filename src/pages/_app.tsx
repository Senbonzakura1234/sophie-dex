import '@root/styles/globals.css';

import { trpc } from '@root/utils/trpc';
import { type AppType } from 'next/app';

const MyApp: AppType = ({ Component, pageProps }) => {
	return <Component {...pageProps} />;
};

export default trpc.withTRPC(MyApp);
