import ScrollToTop from '@root/components/ScrollToTop';
import { APP_DESCRIPTION, APP_KEYWORD, APP_NAME } from '@root/constants';
import Head from 'next/head';
import type { FC, ReactNode } from 'react';
import useScrollableRef from 'use-scrollable-ref';

const RootLayout: FC<{ children?: ReactNode }> = ({ children }) => {
	const { scrollableRef, scrollPosition, scrollableBottomReached } = useScrollableRef({ bottomThreshold: 50 });
	return (
		<>
			<Head>
				<title>{APP_NAME}</title>
				<meta name='description' content={APP_DESCRIPTION} />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' href='/favicon.ico' />
				<meta name='keywords' content={APP_KEYWORD} />
			</Head>

			<main className='bg-base-200 relative h-screen w-screen overflow-y-auto scroll-smooth' ref={scrollableRef}>
				{children}
				<ScrollToTop
					scrollableBottomReached={scrollableBottomReached}
					scrollableRef={scrollableRef}
					scrollPosition={scrollPosition}
				/>
			</main>
		</>
	);
};

export default RootLayout;
