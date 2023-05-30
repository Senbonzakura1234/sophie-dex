import { publicProcedure, router } from '@root/server/api/trpc';
import { effects, items, rumors, traits } from '@root/server/db/schema';
import { vercelDB } from '@root/server/db/vercel';
import type { ExportDBData } from '@root/types/common/zod';
import { getBaseUrl } from '@root/utils/client';
import { evnIs } from '@root/utils/common';
import { ForbiddenError } from '@root/utils/server';
import { z } from 'zod';

export const testRouter = router({
	export: publicProcedure.input(z.any()).query(async ({}) => {
		if (evnIs('production')) throw ForbiddenError();

		const [effectsRes, itemsRes, rumorsRes, traitsRes] = await Promise.all([
			vercelDB.select().from(effects),
			vercelDB.select().from(items),
			vercelDB.select().from(rumors),
			vercelDB.select().from(traits),
		]);

		const response = await fetch(`${getBaseUrl()}/api/export`, {
			method: 'POST',
			mode: 'same-origin',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				effects: effectsRes,
				items: itemsRes,
				rumors: rumorsRes,
				traits: traitsRes,
			} satisfies ExportDBData),
		});

		return await response.json();
	}),
	seed: publicProcedure.input(z.any()).query(async ({}) => {
		if (evnIs('production')) throw ForbiddenError();

		// await neonDB.insert(effects).values(effectsData);
		// await neonDB.insert(items).values(itemsData);
		// await neonDB.insert(rumors).values(rumorsData);
		// await neonDB.insert(traits).values(traitsData);
	}),
	test: publicProcedure.input(z.any()).query(async ({}) => {
		if (evnIs('production')) throw ForbiddenError();
	}),
});
