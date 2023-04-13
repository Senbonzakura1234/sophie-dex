import ErrorModal from '@root/components/ErrorModal';
import FilterControl from '@root/components/FilterControl';
import PageFooter from '@root/components/PageFooter';
import PageTitle from '@root/components/PageTitle';
import SearchControl from '@root/components/SearchControl';
import { ListPlaceHolder } from '@root/components/SubComponent';
import type { DefaultLayoutProps, ErrorResultProps, IsSuccessProps, PageControlProps } from '@root/types/common/props';
import Head from 'next/head';
import type { FC } from 'react';

type ListLayoutProps = DefaultLayoutProps & ErrorResultProps & PageControlProps & IsSuccessProps;

const ListLayout: FC<ListLayoutProps> = ({
	pageName,
	children,
	errorData,
	errorMessage,
	isError,
	isSuccess,
	page,
	totalPage,
	totalRecord,
}) => (
	<>
		<Head>
			<title>{pageName}</title>
			<meta name='description' content={`${pageName} List`} />
		</Head>

		<PageTitle pageName={pageName} />

		<SearchControl isSuccess={isSuccess} />

		<FilterControl
			pageName={pageName}
			page={page}
			totalPage={totalPage}
			totalRecord={totalRecord}
			isSuccess={isSuccess}
		/>

		<section className='container mx-auto grid grow gap-6 max-2xl:px-4 2xl:grid-cols-2'>
			<ListPlaceHolder isSuccess={isSuccess} isError={isError} />
			{children}
		</section>

		<FilterControl
			pageName={pageName}
			page={page}
			totalPage={totalPage}
			totalRecord={totalRecord}
			isSuccess={isSuccess}
			isBottomFilter
		/>

		<PageFooter />

		{isError ? <ErrorModal errorData={errorData} errorMessage={errorMessage} isError={true} /> : null}
	</>
);

export default ListLayout;
