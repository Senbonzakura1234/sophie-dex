import ScrollWrapper from '@root/components/ScrollWrapper';
import ErrorModal from '@root/components/ui/static/ErrorModal';
import { useModuleId } from '@root/hooks/useModuleId';
import type { MaybeData, RenderFunction } from '@root/types/common';
import type { ErrorResultProps } from '@root/types/common/props';
import type { CommonRecord } from '@root/types/model';
import Head from 'next/head';
import { useMemo } from 'react';
import Alert from '../Alert';
import PageFooter from '../PageFooter';
import PageTitle from '../PageTitle';

type DetailLayoutProps<TRecord extends CommonRecord> = ErrorResultProps & {
	extraHead?: RenderFunction<NonNullable<TRecord>>;
	children?: RenderFunction<MaybeData<TRecord>>;
	rawData: TRecord | undefined;
};

export default function DetailLayout<TRecord extends CommonRecord>({
	children,
	extraHead,
	rawData,
	...errorResult
}: DetailLayoutProps<TRecord>) {
	const moduleId = useModuleId();

	const renderChild = useMemo(() => {
		const result = !!rawData
			? { data: rawData, isDataReady: true as const }
			: { data: undefined, isDataReady: false as const };

		return children ? children(result) : null;
	}, [children, rawData]);

	const renderExtraHead = useMemo(() => (rawData && extraHead ? extraHead(rawData) : null), [rawData, extraHead]);

	return (
		<ScrollWrapper className='h-screen w-screen bg-base-200 !antialiased' enableScrollTop enablePageRefresh>
			{rawData ? (
				<Head>
					<title>{rawData.name}</title>
					<meta name='og:title' content={rawData.name} key='title' />
					<meta name='description' content={rawData.keyWords} key='description' />
					<meta name='keywords' content={rawData.keyWords} key='keywords' />
					{renderExtraHead}
				</Head>
			) : null}

			<PageTitle />

			<section className='grid h-full w-full grid-cols-1 place-content-center gap-4 p-2 2xl:grid-cols-none'>
				<div className={`mx-auto max-w-full ${moduleId === 'item' ? 'w-[900px]' : 'w-[700px]'}`}>{renderChild}</div>
			</section>

			<PageFooter />

			<ErrorModal {...errorResult} />

			<Alert />
		</ScrollWrapper>
	);
}
