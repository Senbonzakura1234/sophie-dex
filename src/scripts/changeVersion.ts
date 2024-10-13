import type { CommonObject } from '@root/types/common';
import type { ChangeVersionType } from '@root/types/common/zod';
import { changeVersionTypeSchema, packageDotJSONSchema } from '@root/types/common/zod';
import { tryCatchHandler, tryCatchHandlerSync, writeLog } from '@root/utils/common';
import { env } from '@root/utils/common/env';
import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';
import { argv, exit } from 'process';

const incrementVersion = (version: string, increment: ChangeVersionType) => {
	const [major = 0, minor = 0, patch = 0] = version.split('.').map(Number);

	return {
		major: `${major + 1}.0.0`,
		minor: `${major}.${minor + 1}.0`,
		patch: `${major}.${minor}.${patch + 1}`
	}[increment];
};

async function changeVersion() {
	if (env.NEXT_PUBLIC_NODE_ENV !== 'script') exit(1);

	const incrementType = changeVersionTypeSchema.parse(argv[2]);

	const packageJsonPathRes = tryCatchHandlerSync(() => resolve('package.json'), 'changeVersion.packageJsonPathRes');

	if (!packageJsonPathRes.isSuccess) {
		writeLog({ args: ['Read Json failed:', JSON.stringify(packageJsonPathRes.error, null, 2)], type: 'error' });
		exit(1);
	}

	const readFileRes = await tryCatchHandler(
		readFile(packageJsonPathRes.data, 'utf-8'),
		'changeVersion.readPackageJSON'
	);

	if (!readFileRes.isSuccess) {
		writeLog({ args: ['Read Json failed:', JSON.stringify(readFileRes.error, null, 2)], type: 'error' });
		exit(1);
	}

	const packageJsonResult = tryCatchHandlerSync(
		() => JSON.parse(readFileRes.data) as CommonObject,
		'changeVersion.parsePackageJSON'
	);

	if (!packageJsonResult.isSuccess) {
		writeLog({ args: ['Parse Json failed:', JSON.stringify(packageJsonResult.error, null, 2)], type: 'error' });
		exit(1);
	}

	const currentVersion = packageDotJSONSchema.parse(packageJsonResult.data).version;

	const newVersion = incrementVersion(currentVersion, incrementType);

	writeLog({ args: [`Updating App Version from ${currentVersion} to ${newVersion}`] });

	const writeFileRes = await tryCatchHandler(
		writeFile(packageJsonPathRes.data, JSON.stringify({ ...packageJsonResult.data, version: newVersion }, null, 2)),
		'changeVersion.updatePackageJSON'
	);

	if (!writeFileRes.isSuccess) {
		writeLog({ args: ['Error:', JSON.stringify(writeFileRes.error, null, 2)], type: 'error' });

		exit(1);
	}

	writeLog({ args: [`Updated App Version to ${newVersion}`] });
}

void changeVersion()
	.then()
	.catch(error => {
		writeLog({ args: ['Error:', JSON.stringify(error, null, 2)], type: 'error' });

		exit(1);
	});
