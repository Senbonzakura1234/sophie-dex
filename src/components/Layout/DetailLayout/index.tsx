import ErrorModal from '@root/components/ErrorModal';
import type { MaybeData, RenderFunction } from '@root/types/common';
import type { DefaultLayoutProps, ErrorResultProps } from '@root/types/common/props';
import Head from 'next/head';
import { useMemo } from 'react';

type DetailLayoutProps<TData = unknown> = DefaultLayoutProps &
	ErrorResultProps & {
		extraHead?: RenderFunction<NonNullable<TData>>;
		children?: RenderFunction<MaybeData<TData>>;
		rawData: TData | undefined;
	};

function DetailLayout<TData = unknown>({
	pageName,
	children,
	extraHead,
	isError,
	errorData,
	errorMessage,
	rawData,
}: DetailLayoutProps<TData>) {
	const result: MaybeData<TData> = useMemo(
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
				<meta name='description' content={`${pageName} Record`} />
			</Head>

			{renderExtraHead}

			<section className='grid h-full w-full grid-cols-1 place-content-center gap-4 p-2 2xl:grid-cols-none'>
				<div className='w-[800px] max-w-full'>{renderChild}</div>
			</section>

			{isError ? <ErrorModal errorData={errorData} errorMessage={errorMessage} isError={true} /> : null}
		</>
	);
}

export default DetailLayout;
