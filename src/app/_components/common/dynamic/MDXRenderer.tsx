import type { Fragment, Jsx } from '@mdx-js/mdx';
import { compile, run } from '@mdx-js/mdx';
import type { ClassNameProps } from '@root/types/common/props';
import { tryCatchHandler } from '@root/utils/common';
import { Fragment as ReactFragment } from 'react';
import * as runtime_ from 'react/jsx-runtime';

const runtime = runtime_ as { Fragment: Fragment; jsx: Jsx; jsxs: Jsx };

type MDXRendererProps = { body: string } & ClassNameProps;

const getMDXModule = async ({ body }: Pick<MDXRendererProps, 'body'>) => {
	const compileResult = await tryCatchHandler(compile(body, { outputFormat: 'function-body', development: false }));

	if (!compileResult.isSuccess) return { default: ReactFragment };

	const runtimeResult = await tryCatchHandler(
		run(String(compileResult.data), { ...runtime, baseUrl: import.meta.url }),
	);

	if (!runtimeResult.isSuccess) return { default: ReactFragment };

	return runtimeResult.data as { default: typeof ReactFragment };
};

export default async function MDXRenderer({ body, className }: MDXRendererProps) {
	const mdxModule = await getMDXModule({ body });

	return (
		<div className={`prose max-w-none ${className}`}>
			<mdxModule.default />
		</div>
	);
}
