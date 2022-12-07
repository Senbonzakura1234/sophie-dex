import '@root/styles/atelier.css';
import '@root/styles/globals.css';

import localFont from '@next/font/local';
import { trpc } from '@root/utils/trpc';
import { type AppType } from 'next/app';

const Atelier = localFont({ src: '../assets/fonts/Atelier.woff2' });

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<main
			style={{
				...Atelier.style,
			}}
			className={Atelier.className}
		>
			<Component {...pageProps} />
		</main>
	);
};

export default trpc.withTRPC(MyApp);
