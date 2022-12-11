import type { PageName } from '@root/types/common';
import Head from 'next/head';
import type { FC, ReactNode } from 'react';

const DetailLayout: FC<{ pageName: PageName; children?: ReactNode; extraHead?: ReactNode; isSuccess: boolean }> = ({
	pageName,
	children,
	extraHead,
}) => {
	return (
		<>
			<Head>
				<title>{pageName}</title>
				<meta name='description' content={`${pageName} Record`} />
			</Head>
			{extraHead}
			<section className='grid h-full w-full grid-cols-1 place-content-center gap-4 p-2 xl:grid-cols-none'>
				<div className='w-[800px] max-w-full'>{children}</div>
			</section>
		</>
	);
};

export default DetailLayout;
