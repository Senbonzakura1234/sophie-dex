import { tryCatchHandler, tryCatchHandlerSync, writeLog } from '@root/utils/common';
import { env } from '@root/utils/common/env';
import { writeFile } from 'fs/promises';
import { mdxToMd } from 'mdx-to-md';
import { resolve } from 'path';
import { exit } from 'process';

const generateMD = async () => {
	if (env.NEXT_PUBLIC_NODE_ENV !== 'script') exit(1);

	const mdPath = 'README.md';

	const mdxPathResolveRes = tryCatchHandlerSync(
		() => resolve('src/app/_components/common/dynamic/Readme/README.mdx'),
		'generateMD.mdxPathResolveRes'
	);

	if (!mdxPathResolveRes.isSuccess) {
		writeLog({
			args: ['Resolve path Readme MDX failed:', JSON.stringify(mdxPathResolveRes.error, null, 2)],
			type: 'error'
		});
		exit(1);
	}

	const mdxToMdRes = await tryCatchHandler(mdxToMd(mdxPathResolveRes.data), 'generateMD.convertMdxToMd');

	if (!mdxToMdRes.isSuccess) {
		writeLog({
			args: [`Convert ${mdxPathResolveRes.data} -> ${mdPath} failed:`, JSON.stringify(mdxToMdRes.error, null, 2)],
			type: 'error'
		});
		exit(1);
	}

	const writeFileRes = await tryCatchHandler(writeFile(mdPath, mdxToMdRes.data), 'generateMD.writeFileRes');

	if (!writeFileRes.isSuccess) {
		writeLog({
			args: [`Convert ${mdxPathResolveRes.data} -> ${mdPath} failed:`, JSON.stringify(writeFileRes.error, null, 2)],
			type: 'error'
		});
		exit(1);
	}

	writeLog({ args: [`📝 Converted ${mdxPathResolveRes.data} -> ${mdPath} successfully`] });
};

void generateMD()
	.then()
	.catch(error => {
		writeLog({ args: ['Error:', JSON.stringify(error, null, 2)], type: 'error' });

		exit(1);
	});
