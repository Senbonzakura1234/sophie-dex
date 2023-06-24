import type { MaybeData, RenderFunction } from '@root/types/common';
import type { DefaultLayoutProps, ErrorResultProps } from '@root/types/common/props';
import type { CommonRecord } from '@root/types/model';
import Head from 'next/head';
import { useMemo } from 'react';
import PageTitle from '../PageTitle';

import ScrollWrapper from '@root/components/ScrollWrapper';
import dynamic from 'next/dynamic';

const PageFooter = dynamic(() => import('../PageFooter'));

type DetailLayoutProps<TRecord extends CommonRecord> = DefaultLayoutProps &
	ErrorResultProps & {
		extraHead?: RenderFunction<NonNullable<TRecord>>;
		children?: RenderFunction<MaybeData<TRecord>>;
		rawData: TRecord | undefined;
	};

export default function DetailLayout<TRecord extends CommonRecord>({
	moduleId,
	children,
	extraHead,
	isError,
	errorData,
	errorMessage,
	rawData,
}: DetailLayoutProps<TRecord>) {
	const renderChild = useMemo(() => {
		const result = !!rawData
			? { data: rawData, isDataReady: true as const }
			: { data: undefined, isDataReady: false as const };

		return children ? children(result) : null;
	}, [children, rawData]);

	const renderExtraHead = useMemo(() => (rawData && extraHead ? extraHead(rawData) : null), [rawData, extraHead]);

	return (
		<ScrollWrapper
			errorData={errorData}
			errorMessage={errorMessage}
			isError={isError}
			className='h-screen w-screen bg-base-200 !antialiased'
			enableScrollTop
			enablePageRefresh
		>
			<Head>
				<title>{moduleId}</title>
				<meta name='og:title' content={moduleId} key='title' />
				<meta name='description' content={`${moduleId} Record`} key='description' />
			</Head>

			{rawData ? (
				<Head>
					<title>
						{rawData.name} | {moduleId}
					</title>
					<meta name='og:title' content={rawData.name} key='title' />
					<meta name='description' content={rawData.keyWords} key='description' />
					<meta name='keywords' content={rawData.keyWords} key='keywords' />
					{renderExtraHead}
				</Head>
			) : null}

			<PageTitle moduleId={moduleId} />

			<section className='grid h-full w-full grid-cols-1 place-content-center gap-4 p-2 2xl:grid-cols-none'>
				<div className={`mx-auto max-w-full ${moduleId === 'item' ? 'w-[900px]' : 'w-[700px]'}`}>{renderChild}</div>
			</section>

			<PageFooter />
		</ScrollWrapper>
	);
}
