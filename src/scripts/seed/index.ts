import effectsList from '@root/scripts/seed/effectsList';
import itemsList from '@root/scripts/seed/itemsList';
import rumorsList from '@root/scripts/seed/rumorsList';
import traitsList from '@root/scripts/seed/traitsList';
import { exportAllRecords } from '@root/server/postgresql';
import { postgresql } from '@root/server/postgresql/repository';
import { effects, items, rumors, traits } from '@root/server/postgresql/schema';
import { tryCatchHandler, writeLog } from '@root/utils/common';
import { writeFile } from 'fs/promises';

const seed = async () => {
	writeLog({ args: [`Start Seeding\n`], type: 'log' });

	const seedResult: {
		errorList: Array<{ id: string | undefined; error: string }>;
		effectsSuccessCount: number;
		itemsSuccessCount: number;
		rumorsSuccessCount: number;
		traitsSuccessCount: number;
	} = { errorList: [], effectsSuccessCount: 0, itemsSuccessCount: 0, rumorsSuccessCount: 0, traitsSuccessCount: 0 };

	for (let i = 0; i < effectsList.length; i++) {
		const element = effectsList[i]!;

		const { isSuccess, error } = await tryCatchHandler(postgresql.insert(effects).values(element), {
			operationCode: 'seed.seedEffect'
		});

		if (!isSuccess) seedResult.errorList.push({ id: element?.id, error: JSON.stringify(error, null, 2) });
		if (isSuccess) seedResult.effectsSuccessCount++;
	}

	for (let i = 0; i < itemsList.length; i++) {
		const element = itemsList[i]!;

		const { isSuccess, error } = await tryCatchHandler(postgresql.insert(items).values(element), {
			operationCode: 'seed.seedItem'
		});

		if (!isSuccess) seedResult.errorList.push({ id: element?.id, error: JSON.stringify(error, null, 2) });
		if (isSuccess) seedResult.itemsSuccessCount++;
	}

	for (let i = 0; i < rumorsList.length; i++) {
		const element = rumorsList[i]!;

		const { isSuccess, error } = await tryCatchHandler(postgresql.insert(rumors).values(element), {
			operationCode: 'seed.seedRumor'
		});

		if (!isSuccess) seedResult.errorList.push({ id: element?.id, error: JSON.stringify(error, null, 2) });
		if (isSuccess) seedResult.rumorsSuccessCount++;
	}

	for (let i = 0; i < traitsList.length; i++) {
		const element = traitsList[i]!;

		const { isSuccess, error } = await tryCatchHandler(postgresql.insert(traits).values(element), {
			operationCode: 'seed.seedTrait'
		});

		if (!isSuccess) seedResult.errorList.push({ id: element?.id, error: JSON.stringify(error, null, 2) });
		if (isSuccess) seedResult.traitsSuccessCount++;
	}

	if (!seedResult.errorList.length) {
		writeLog({ args: [`Export record after Seeding\n`], type: 'log' });

		await exportAllRecords(writeFile);
	}

	return seedResult;
};

void seed().then(seedResult =>
	writeLog({
		args: [`Seeding Complete with ${seedResult.errorList.length ? 'error' : 'no error'}\n`, { seedResult }],
		type: seedResult.errorList.length ? 'error' : 'log'
	})
);
