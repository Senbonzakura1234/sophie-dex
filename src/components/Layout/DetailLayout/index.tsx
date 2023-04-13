import ErrorModal from '@root/components/ErrorModal';
import type { DetailLayoutProps } from '@root/types/common/props';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import type { FC } from 'react';

const DetailLayout: FC<DetailLayoutProps> = ({ pageName, children, extraHead, isError, errorData, errorMessage }) => (
	<>
		<Head>
			<title>{pageName}</title>
			<meta name='description' content={`${pageName} Record`} />
		</Head>

		{extraHead}

		<section className='grid h-full w-full grid-cols-1 place-content-center gap-4 p-2 2xl:grid-cols-none'>
			<div className='w-[800px] max-w-full'>{children}</div>
		</section>

		<AnimatePresence>
			{isError ? <ErrorModal errorData={errorData} errorMessage={errorMessage} isError={true} /> : null}
		</AnimatePresence>
	</>
);

export default DetailLayout;
