import { writeLog } from '@root/utils/common';
import { env } from '@root/utils/common/env';
import { mdxToMd } from 'mdx-to-md';
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const generateMD = async () => {
	if (env.NEXT_PUBLIC_NODE_ENV !== 'script') return;

	const mdxPath = 'src/app/_components/common/dynamic/Readme/README.mdx';
	const mdPath = 'README.md';

	const readmeContent = await mdxToMd(resolve(mdxPath));

	await writeFile(mdPath, readmeContent);

	writeLog({ args: [`📝 Converted ${mdxPath} -> ${mdPath}`] });
};

void generateMD().then();
