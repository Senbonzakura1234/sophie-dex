import { compile, run } from '@mdx-js/mdx';
import { tryCatchHandler } from '@root/utils/common';
import type { FC } from 'react';
import { Fragment } from 'react';
import runtime from 'react/jsx-runtime';

type MDXRendererProps = { body: string };

export const renderMDX = async (body: MDXRendererProps['body']): Promise<{ default: FC }> => {
	const compileResult = await tryCatchHandler(compile(body, { outputFormat: 'function-body', development: false }));

	if (!compileResult.isSuccess) return { default: Fragment };

	const runtimeResult = await tryCatchHandler(run(String(compileResult.data), runtime));

	if (!runtimeResult.isSuccess) return { default: Fragment };

	return runtimeResult.data as { default: FC };
};

export default async function MDXRenderer({ body }: MDXRendererProps) {
	const mdxModule = await renderMDX(body);

	return <mdxModule.default />;
}
