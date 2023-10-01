'use client';

import { compile, run } from '@mdx-js/mdx';
import { tryCatchHandler } from '@root/utils/common';
import type { FC } from 'react';
import { Fragment, useEffect, useState } from 'react';
import runtime from 'react/jsx-runtime';

export type MDXRendererProps = { body: string };

export default function MDXRenderer({ body }: MDXRendererProps) {
	const [mdxModule, setMdxModule] = useState<{ default: FC }>({ default: Fragment });

	useEffect(() => {
		const renderMDX = async (body: MDXRendererProps['body']) => {
			const compileResult = await tryCatchHandler(
				compile(body, { outputFormat: 'function-body', development: false }),
			);

			if (!compileResult.isSuccess) return;

			const runtimeResult = await tryCatchHandler(run(String(compileResult.data), runtime));

			if (!runtimeResult.isSuccess) return;

			return setMdxModule(runtimeResult.data as { default: FC });
		};

		renderMDX(body);
	}, [body]);

	return <mdxModule.default />;
}
