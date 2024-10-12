import type { CommonObject } from '@root/types/common';
import type { ChangeVersionType } from '@root/types/common/zod';
import { changeVersionTypeSchema, packageDotJSONSchema } from '@root/types/common/zod';
import { tryCatchHandlerSync, writeLog } from '@root/utils/common';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const incrementVersion = (version: string, increment: ChangeVersionType) => {
	const [major = 0, minor = 0, patch = 0] = version.split('.').map(Number);

	const objMapping = {
		'no-change-version': null,
		major: `${major + 1}.0.0`,
		minor: `${major}.${minor + 1}.0`,
		patch: `${major}.${minor}.${patch + 1}`
	} as const satisfies Record<ChangeVersionType, `${number}.${number}.${number}` | null>;

	return objMapping[increment];
};

async function main() {
	const incrementType = changeVersionTypeSchema.parse(process.argv[2]);

	const packageJsonPath = resolve('package.json');

	const packageJsonContent = await readFile(packageJsonPath, 'utf-8');

	const packageJsonResult = tryCatchHandlerSync(
		() => JSON.parse(packageJsonContent) as CommonObject,
		'parse package.json'
	);

	if (!packageJsonResult.isSuccess) {
		writeLog({ args: ['Parse Json failed:', JSON.stringify(packageJsonResult.error, null, 2)], type: 'error' });
		process.exit(1);
	}

	const currentVersion = packageDotJSONSchema.parse(packageJsonResult.data).version;

	const newVersion = incrementVersion(currentVersion, incrementType);

	if (!newVersion) return console.log('No version change; skipping version update.');

	console.log(`Updating App Version from ${currentVersion} to ${newVersion}`);

	await writeFile(packageJsonPath, JSON.stringify({ ...packageJsonResult.data, version: newVersion }, null, 2));

	console.log(`Updated App Version to ${newVersion}`);
}

main().catch(error => {
	writeLog({ args: ['Error:', JSON.stringify(error, null, 2)], type: 'error' });

	process.exit(1);
});
