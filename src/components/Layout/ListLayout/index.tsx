import ScrollWrapper from '@root/components/ScrollWrapper';
import SearchControl from '@root/components/SearchControl';
import { Alert } from '@root/components/ui/dynamic';
import ErrorModal from '@root/components/ui/static/ErrorModal';
import { defaultListData } from '@root/constants';
import { useModuleId } from '@root/hooks/useModuleId';
import type { MaybeListData, RenderFunction } from '@root/types/common';
import type { ErrorResultProps } from '@root/types/common/props';
import type { CommonRecord, ListRecord } from '@root/types/model';
import { capitalize } from '@root/utils/common';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useMemo } from 'react';
import PageBanner from '../PageBanner';

const FilterControl = dynamic(() => import('./FilterControl'), {
	loading: () => (
		<>
			<div className='btn btn-primary btn-sm w-[127px] animate-pulse rounded-full 2xl:hidden' />
			<nav className='card h-[60px] animate-pulse bg-base-100 shadow-lg shadow-primary max-2xl:hidden' />
		</>
	),
	ssr: false,
});

type ListLayoutProps<TRecord extends CommonRecord> = ErrorResultProps & {
	children?: RenderFunction<MaybeListData<TRecord>>;
	rawData: ListRecord<TRecord> | undefined;
};

export default function ListLayout<TRecord extends CommonRecord>({
	children,
	rawData,
	...errorResult
}: ListLayoutProps<TRecord>) {
	const moduleId = useModuleId();
	const title = capitalize(moduleId);

	const { data, isDataReady } = !!rawData
		? { data: rawData, isDataReady: true as const }
		: { data: undefined, isDataReady: false as const };

	const { totalPage, totalRecord } = isDataReady ? data : { totalPage: 0, totalRecord: 0 };

	const listData: MaybeListData<TRecord> = useMemo(
		() =>
			isDataReady
				? { data: data.records.map(r => ({ data: r, isDataReady: true as const })) }
				: { data: defaultListData },
		[data?.records, isDataReady],
	);

	const renderChild = useMemo(
		() => (children && !errorResult.isError ? children(listData) : null),
		[children, errorResult.isError, listData],
	);

	return (
		<ScrollWrapper className='h-[100dvh] w-[100dvw] bg-base-200 !antialiased' enableScrollTop enablePageRefresh>
			<Head>
				<title>{title}</title>
				<meta name='og:title' content={title} key='title' />
				<meta name='description' content={`${title} Record`} key='description' />
			</Head>

			<PageBanner bannerType='top' key='bannerTop' />

			<SearchControl />

			<section className='container relative z-40 mx-auto grid gap-3 max-2xl:px-4'>
				<FilterControl key='topFilter' totalPage={totalPage} totalRecord={totalRecord} />
			</section>

			<section
				className={`container mx-auto mb-auto grid grid-cols-1 gap-6 max-2xl:px-4 ${
					moduleId !== 'item' ? 'lg:grid-cols-2' : 'xl:grid-cols-2'
				}`}
			>
				{renderChild}
			</section>

			<section className='container relative z-30 mx-auto grid gap-3 max-2xl:px-4'>
				<FilterControl key='bottomFilter' totalPage={totalPage} totalRecord={totalRecord} isBottomFilter />
			</section>

			<PageBanner bannerType='bottom' key='bannerBottom' />

			<ErrorModal {...errorResult} />

			<Alert />
		</ScrollWrapper>
	);
}
