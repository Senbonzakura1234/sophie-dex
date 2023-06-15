import FilterControl from '@root/components/FilterControl';
import PageTitle from '@root/components/PageTitle';
import ScrollWrapper from '@root/components/ScrollWrapper';
import SearchControl from '@root/components/SearchControl';
import { defaultLimit } from '@root/constants';
import type { MaybeData, MaybeListData, RenderFunction } from '@root/types/common';
import type { DefaultLayoutProps, ErrorResultProps } from '@root/types/common/props';
import type { CommonRecord, ListRecord } from '@root/types/model';
import Head from 'next/head';
import { useMemo } from 'react';

import dynamic from 'next/dynamic';

const ErrorModal = dynamic(() => import('@root/components/ErrorModal'));
const PageFooter = dynamic(() => import('@root/components/PageFooter'));

type ListLayoutProps<TRecord extends CommonRecord> = DefaultLayoutProps &
	ErrorResultProps & {
		children?: RenderFunction<MaybeListData<TRecord>>;
		rawData: ListRecord<TRecord> | undefined;
	};

export default function ListLayout<TRecord extends CommonRecord>({
	pageName,
	children,
	errorData,
	errorMessage,
	isError,
	rawData,
}: ListLayoutProps<TRecord>) {
	const { data, isDataReady }: MaybeData<ListRecord<TRecord>> = useMemo(
		() =>
			!!rawData ? { data: rawData, isDataReady: true as const } : { data: undefined, isDataReady: false as const },
		[rawData],
	);

	const { page, totalPage, totalRecord } = useMemo(
		() => (isDataReady ? data : { page: 1, totalPage: 0, totalRecord: 0 }),
		[data, isDataReady],
	);

	const listData: MaybeListData<TRecord> = useMemo(
		() =>
			isDataReady
				? { data: data.records.map(r => ({ data: r, isDataReady: true as const })) }
				: {
						data: Array(defaultLimit)
							.fill(0)
							.map(() => ({ data: undefined, isDataReady: false as const })),
				  },
		[data?.records, isDataReady],
	);

	const renderChild = useMemo(() => (children && !isError ? children(listData) : null), [children, isError, listData]);

	return (
		<ScrollWrapper className='h-screen w-screen bg-base-200 !antialiased' enableScrollTop enablePageRefresh>
			<Head>
				<title>{pageName}</title>
				<meta name='og:title' content={pageName} key='title' />
				<meta name='description' content={`${pageName} Record`} key='description' />
			</Head>

			<PageTitle pageName={pageName} />

			<SearchControl />

			<FilterControl pageName={pageName} page={page || 1} totalPage={totalPage} totalRecord={totalRecord} />

			<section
				className={`container mx-auto mb-auto grid gap-6 max-2xl:px-4 ${pageName !== 'item' && 'lg:grid-cols-2'}`}
			>
				{renderChild}
			</section>

			<FilterControl
				pageName={pageName}
				page={page || 1}
				totalPage={totalPage}
				totalRecord={totalRecord}
				isBottomFilter
			/>

			<PageFooter />

			{isError ? <ErrorModal errorData={errorData} errorMessage={errorMessage} isError={true} /> : null}
		</ScrollWrapper>
	);
}
