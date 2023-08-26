import ScrollWrapper from '@root/components/ScrollWrapper';
import { Alert } from '@root/components/ui/dynamic';
import ErrorModal from '@root/components/ui/static/ErrorModal';
import { useModuleId } from '@root/hooks/useModuleId';
import type { MaybeData, RenderFunction } from '@root/types/common';
import type { ErrorResultProps } from '@root/types/common/props';
import type { CommonRecord } from '@root/types/model';
import Head from 'next/head';
import { useMemo } from 'react';
import PageBanner from '../PageBanner';

type DetailLayoutProps<TRecord extends CommonRecord> = ErrorResultProps & {
	children?: RenderFunction<MaybeData<TRecord>>;
	rawData: TRecord | undefined;
};

export default function DetailLayout<TRecord extends CommonRecord>({
	children,
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

	return (
		<ScrollWrapper className='h-[100dvh] w-[100dvw] bg-base-200 !antialiased' enableScrollTop enablePageRefresh>
			{rawData ? (
				<Head>
					<title>{rawData.name}</title>
					<meta name='og:title' content={rawData.name} key='title' />
					<meta name='description' content={rawData.keyWords} key='description' />
					<meta name='keywords' content={rawData.keyWords} key='keywords' />
				</Head>
			) : null}

			<PageBanner bannerType='top' key='bannerTop' />

			<section
				className={`container m-auto grid grid-cols-1 gap-6 max-2xl:px-4 ${
					moduleId === 'item' ? 'lg:max-w-[900px]' : 'lg:max-w-[700px]'
				}`}
			>
				{renderChild}
			</section>

			<PageBanner bannerType='bottom' key='bannerBottom' />

			<ErrorModal {...errorResult} />

			<Alert />
		</ScrollWrapper>
	);
}
