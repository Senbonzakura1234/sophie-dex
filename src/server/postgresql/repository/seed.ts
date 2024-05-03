import 'server-only';

import { writeLog } from '@root/utils/common';

const seed = async () => {
	const seedResult: {
		errorList: Array<{ id: string | undefined; error: unknown }>;
		effectsSuccessCount: number;
		itemsSuccessCount: number;
		rumorsSuccessCount: number;
		traitsSuccessCount: number;
	} = {
		errorList: [],
		effectsSuccessCount: 0,
		itemsSuccessCount: 0,
		rumorsSuccessCount: 0,
		traitsSuccessCount: 0,
	};

	// for (let i = 0; i < effectsList.length; i++) {
	// 	const element = effectsList[i]!;

	// 	const { isSuccess, error } = await tryCatchHandler(postgresql.insert(effects).values(element));

	// 	if (!isSuccess) seedResult.errorList.push({ id: element?.id, error });
	// 	if (isSuccess) {
	// 		seedResult.effectsSuccessCount++;
	// 	}
	// }

	// for (let i = 0; i < itemsList.length; i++) {
	// 	const element = itemsList[i]!;

	// 	const { isSuccess, error } = await tryCatchHandler(postgresql.insert(items).values(element));

	// 	if (!isSuccess) seedResult.errorList.push({ id: element?.id, error });
	// 	if (isSuccess) {
	// 		seedResult.itemsSuccessCount++;
	// 	}
	// }

	// for (let i = 0; i < rumorsList.length; i++) {
	// 	const element = rumorsList[i]!;

	// 	const { isSuccess, error } = await tryCatchHandler(postgresql.insert(rumors).values(element));

	// 	if (!isSuccess) seedResult.errorList.push({ id: element?.id, error });
	// 	if (isSuccess) {
	// 		seedResult.rumorsSuccessCount++;
	// 	}
	// }

	// for (let i = 0; i < traitsList.length; i++) {
	// 	const element = traitsList[i]!;

	// 	const { isSuccess, error } = await tryCatchHandler(postgresql.insert(traits).values(element));

	// 	if (!isSuccess) seedResult.errorList.push({ id: element?.id, error });
	// 	if (isSuccess) {
	// 		seedResult.traitsSuccessCount++;
	// 	}
	// }

	return seedResult;
};

seed().then(seedResult =>
	writeLog({
		args: [`Seeding Complete with ${seedResult.errorList.length ? 'error' : 'no error'}\n`, { seedResult }],
		type: seedResult.errorList.length ? 'error' : 'log',
	}),
);
