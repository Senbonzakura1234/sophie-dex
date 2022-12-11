import PageTitle from '@root/components/PageTitle';
import type { PageName } from '@root/types/common';
import Head from 'next/head';
import type { FC, ReactNode } from 'react';

const ListLayout: FC<{ pageName: PageName; children?: ReactNode; filterControl?: ReactNode }> = ({
	pageName,
	filterControl,
	children,
}) => {
	return (
		<>
			<Head>
				<title>{pageName}</title>
				<meta name='description' content={`${pageName} List`} />
			</Head>
			<PageTitle pageName={pageName} />
			{filterControl}
			<section className='container mx-auto grid auto-rows-fr gap-6 p-3 xl:grid-cols-2'>{children}</section>
		</>
	);
};

export default ListLayout;
