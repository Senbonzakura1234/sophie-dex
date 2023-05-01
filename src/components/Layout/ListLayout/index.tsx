import ErrorModal from '@root/components/ErrorModal';
import FilterControl from '@root/components/FilterControl';
import PageFooter from '@root/components/PageFooter';
import PageTitle from '@root/components/PageTitle';
import SearchControl from '@root/components/SearchControl';
import { defaultLimit } from '@root/constants';
import type { MaybeData, MaybeListData, RenderFunction } from '@root/types/common';
import type { DefaultLayoutProps, ErrorResultProps } from '@root/types/common/props';
import type { CommonRecord, ListRecord } from '@root/types/model';
import clsx from 'clsx';
import Head from 'next/head';
import { useMemo } from 'react';

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

	const renderChild = useMemo(() => (children ? children(listData) : null), [children, listData]);

	return (
		<>
			<Head>
				<title>{pageName}</title>
				<meta name='og:title' content={pageName} key='title' />
				<meta name='description' content={`${pageName} Record`} key='description' />
			</Head>

			<PageTitle pageName={pageName} />

			<SearchControl isSuccess={isDataReady} />

			<FilterControl
				pageName={pageName}
				page={page || 1}
				totalPage={totalPage}
				totalRecord={totalRecord}
				isSuccess={isDataReady}
			/>

			<section
				className={clsx('container mx-auto grid grow gap-6 max-2xl:px-4', {
					'2xl:grid-cols-2': pageName !== 'Item',
				})}
			>
				{renderChild}
			</section>

			<FilterControl
				pageName={pageName}
				page={page || 1}
				totalPage={totalPage}
				totalRecord={totalRecord}
				isSuccess={isDataReady}
				isBottomFilter
			/>

			<PageFooter />

			{isError ? <ErrorModal errorData={errorData} errorMessage={errorMessage} isError={true} /> : null}
		</>
	);
}
