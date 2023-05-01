import ErrorModal from '@root/components/ErrorModal';
import type { MaybeData, RenderFunction } from '@root/types/common';
import type { DefaultLayoutProps, ErrorResultProps } from '@root/types/common/props';
import type { CommonRecord } from '@root/types/model';
import Head from 'next/head';
import { useMemo } from 'react';

type DetailLayoutProps<TRecord extends CommonRecord> = DefaultLayoutProps &
	ErrorResultProps & {
		extraHead?: RenderFunction<NonNullable<TRecord>>;
		children?: RenderFunction<MaybeData<TRecord>>;
		rawData: TRecord | undefined;
	};

function DetailLayout<TRecord extends CommonRecord>({
	pageName,
	children,
	extraHead,
	isError,
	errorData,
	errorMessage,
	rawData,
}: DetailLayoutProps<TRecord>) {
	const result: MaybeData<TRecord> = useMemo(
		() =>
			!!rawData ? { data: rawData, isDataReady: true as const } : { data: undefined, isDataReady: false as const },
		[rawData],
	);

	const renderChild = useMemo(() => (children ? children(result) : null), [children, result]);

	const renderExtraHead = useMemo(() => (rawData && extraHead ? extraHead(rawData) : null), [rawData, extraHead]);

	return (
		<>
			<Head>
				<title>{pageName}</title>
				<meta name='og:title' content={pageName} key='title' />
				<meta name='description' content={`${pageName} Record`} key='description' />
			</Head>

			{rawData ? (
				<Head>
					<title>
						{rawData.name} | {pageName}
					</title>
					<meta name='og:title' content={rawData.name} key='title' />
					<meta name='description' content={rawData.keyWords} key='description' />
					<meta name='keywords' content={rawData.keyWords} key='keywords' />
					{renderExtraHead}
				</Head>
			) : null}

			<section className='grid h-full w-full grid-cols-1 place-content-center gap-4 p-2 2xl:grid-cols-none'>
				<div className='w-[800px] max-w-full'>{renderChild}</div>
			</section>

			{isError ? <ErrorModal errorData={errorData} errorMessage={errorMessage} isError={true} /> : null}
		</>
	);
}

export default DetailLayout;
