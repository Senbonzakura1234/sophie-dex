import ErrorModal from '@root/components/ErrorModal';
import type { DetailLayoutProps } from '@root/types/common/props';
import Head from 'next/head';
import type { FC } from 'react';

const DetailLayout: FC<DetailLayoutProps> = ({ pageName, children, extraHead, isError, errorData, errorMessage }) => {
	return (
		<>
			<Head>
				<title>{pageName}</title>
				<meta name='description' content={`${pageName} Record`} />
			</Head>

			{extraHead}

			<section className='grid h-full w-full grid-cols-1 place-content-center gap-4 p-2 2xl:grid-cols-none'>
				<div className='w-[800px] max-w-full'>{children}</div>
			</section>

			<ErrorModal isError={isError} errorData={errorData} errorMessage={errorMessage} />
		</>
	);
};

export default DetailLayout;
