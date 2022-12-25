import '@root/styles/globals.css';

import RootLayout from '@root/components/Layout/RootLayout';
import { trpc } from '@root/utils/trpc';
// eslint-disable-next-line import/no-unresolved
import { type AppType } from 'next/app';

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<>
			<RootLayout>
				<Component {...pageProps} />
			</RootLayout>
		</>
	);
};

export default trpc.withTRPC(MyApp);
