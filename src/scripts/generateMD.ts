import { writeLog } from '@root/utils/common';
import { writeFile } from 'fs/promises';
import { mdxToMd } from 'mdx-to-md';
import path from 'path';

const generateMD = async () => {
	const mdxPath = 'src/app/_components/common/dynamic/Readme/README.mdx';
	const mdPath = 'README.md';

	const readmeContent = await mdxToMd(path.resolve(mdxPath));

	await writeFile(mdPath, readmeContent);

	writeLog({ args: [`📝 Converted ${mdxPath} -> ${mdPath}`] });
};

void generateMD().then();
