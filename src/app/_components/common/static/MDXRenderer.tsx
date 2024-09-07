import type { Fragment, Jsx } from '@mdx-js/mdx';
import { compile, run } from '@mdx-js/mdx';
import type { ImprovePick } from '@root/types/common';
import type { ClassNameProps } from '@root/types/common/props';
import { cn, tryCatchHandler } from '@root/utils/common';
import { Fragment as ReactFragment } from 'react';
import * as runtime_ from 'react/jsx-runtime';

const runtime = runtime_ as { Fragment: Fragment; jsx: Jsx; jsxs: Jsx };

type Props = Readonly<{ body: string } & ClassNameProps>;

const getMDXModule = async ({ body }: ImprovePick<Props, 'body'>) => {
	const compileResult = await tryCatchHandler(
		compile(body, { outputFormat: 'function-body', development: false }),
		'getMDXModule.compile'
	);

	if (!compileResult.isSuccess) return { default: ReactFragment };

	const runtimeResult = await tryCatchHandler(
		run(String(compileResult.data), { ...runtime, baseUrl: import.meta.url }),
		'getMDXModule.runtime'
	);

	if (!runtimeResult.isSuccess) return { default: ReactFragment };

	return runtimeResult.data as { default: typeof ReactFragment };
};

export default async function MDXRenderer({ body, className }: Props) {
	const mdxModule = await getMDXModule({ body });

	return (
		<div className={cn('prose max-w-none', className)}>
			<mdxModule.default />
		</div>
	);
}
