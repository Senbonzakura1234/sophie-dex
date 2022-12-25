import ErrorModal from '@root/components/ErrorModal';
import PageFooter from '@root/components/PageFooter';
import PageTitle from '@root/components/PageTitle';
import { FilterControlPlaceHolder, ListPlaceHolder } from '@root/components/SubComponent';
import { defaultLimit } from '@root/constants';
import type { ListLayoutProps } from '@root/types/common/props';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import type { FC } from 'react';

const ListLayout: FC<ListLayoutProps> = ({
	pageName,
	filterControl,
	children,
	errorData,
	errorMessage,
	isError,
	isSuccess,
}) => {
	return (
		<>
			<Head>
				<title>{pageName}</title>
				<meta name='description' content={`${pageName} List`} />
			</Head>

			<PageTitle pageName={pageName} />

			<FilterControlPlaceHolder isSuccess={isSuccess} />

			{filterControl}

			<section className='container mx-auto grid auto-rows-fr gap-6 px-3 pt-3 pb-9 2xl:grid-cols-2'>
				<ListPlaceHolder limit={defaultLimit} isSuccess={isSuccess} />
				{children}
			</section>

			<PageFooter />

			<AnimatePresence>
				{isError ? <ErrorModal errorData={errorData} errorMessage={errorMessage} isError={true} /> : null}
			</AnimatePresence>
		</>
	);
};

export default ListLayout;
