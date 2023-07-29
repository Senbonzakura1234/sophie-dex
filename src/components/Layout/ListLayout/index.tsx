import FilterControl from '@root/components/FilterControl';
import ScrollWrapper from '@root/components/ScrollWrapper';
import SearchControl from '@root/components/SearchControl';
import ErrorModal from '@root/components/ui/static/ErrorModal';
import { defaultListData } from '@root/constants';
import { useModuleId } from '@root/hooks/useModuleId';
import type { MaybeListData, RenderFunction } from '@root/types/common';
import type { ErrorResultProps } from '@root/types/common/props';
import type { CommonRecord, ListRecord } from '@root/types/model';
import { capitalize } from '@root/utils/common';
import Head from 'next/head';
import { useMemo } from 'react';
import Alert from '../Alert';
import PageFooter from '../PageFooter';
import PageTitle from '../PageTitle';

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

	const renderChild = useMemo(
		() => (children && !errorResult.isError ? children(listData) : null),
		[children, errorResult.isError, listData],
	);

	return (
		<ScrollWrapper className='h-screen w-screen bg-base-200 !antialiased' enableScrollTop enablePageRefresh>
			<Head>
				<title>{title}</title>
				<meta name='og:title' content={title} key='title' />
				<meta name='description' content={`${title} Record`} key='description' />
			</Head>

			<PageTitle />

			<SearchControl />

			<FilterControl page={page || 1} totalPage={totalPage} totalRecord={totalRecord} />

			<section
				className={`container mx-auto mb-auto grid gap-6 max-2xl:px-4 ${
					moduleId !== 'item' ? 'lg:grid-cols-2' : 'xl:grid-cols-2'
				}`}
			>
				{renderChild}
			</section>

			<FilterControl page={page || 1} totalPage={totalPage} totalRecord={totalRecord} isBottomFilter />

			<PageFooter />

			<ErrorModal {...errorResult} />

			<Alert />
		</ScrollWrapper>
	);
}
