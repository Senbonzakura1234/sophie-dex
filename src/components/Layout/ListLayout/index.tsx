import FilterControl from '@root/components/FilterControl';
import ScrollWrapper from '@root/components/ScrollWrapper';
import SearchControl from '@root/components/SearchControl';
import { defaultListData } from '@root/constants';
import type { MaybeListData, RenderFunction } from '@root/types/common';
import type { DefaultLayoutProps, ErrorResultProps } from '@root/types/common/props';
import type { CommonRecord, ListRecord } from '@root/types/model';
import Head from 'next/head';
import { useMemo } from 'react';
import PageTitle from '../PageTitle';

import dynamic from 'next/dynamic';

const PageFooter = dynamic(() => import('../PageFooter'));

type ListLayoutProps<TRecord extends CommonRecord> = DefaultLayoutProps &
	ErrorResultProps & {
		children?: RenderFunction<MaybeListData<TRecord>>;
		rawData: ListRecord<TRecord> | undefined;
	};

export default function ListLayout<TRecord extends CommonRecord>({
	moduleId,
	children,
	errorData,
	errorMessage,
	isError,
	rawData,
}: ListLayoutProps<TRecord>) {
	const { data, isDataReady } = !!rawData
		? { data: rawData, isDataReady: true as const }
		: { data: undefined, isDataReady: false as const };

	const { page, totalPage, totalRecord } = {
		page: isDataReady ? data.page : 1,
		totalPage: isDataReady ? data.totalPage : 0,
		totalRecord: isDataReady ? data.totalRecord : 0,
	};

	const listData: MaybeListData<TRecord> = useMemo(
		() =>
			isDataReady
				? { data: data.records.map(r => ({ data: r, isDataReady: true as const })) }
				: { data: defaultListData },
		[data?.records, isDataReady],
	);

	const renderChild = useMemo(() => (children && !isError ? children(listData) : null), [children, isError, listData]);

	return (
		<ScrollWrapper
			className='h-screen w-screen bg-base-200 !antialiased'
			errorData={errorData}
			errorMessage={errorMessage}
			isError={isError}
			enableScrollTop
			enablePageRefresh
		>
			<Head>
				<title>{moduleId}</title>
				<meta name='og:title' content={moduleId} key='title' />
				<meta name='description' content={`${moduleId} Record`} key='description' />
			</Head>

			<PageTitle moduleId={moduleId} />

			<SearchControl moduleId={moduleId} />

			<FilterControl moduleId={moduleId} page={page || 1} totalPage={totalPage} totalRecord={totalRecord} />

			<section
				className={`container mx-auto mb-auto grid gap-6 max-2xl:px-4 ${moduleId !== 'item' && 'lg:grid-cols-2'}`}
			>
				{renderChild}
			</section>

			<FilterControl
				moduleId={moduleId}
				page={page || 1}
				totalPage={totalPage}
				totalRecord={totalRecord}
				isBottomFilter
			/>

			<PageFooter />
		</ScrollWrapper>
	);
}
