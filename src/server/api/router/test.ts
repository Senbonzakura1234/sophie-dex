import { publicProcedure, router } from '@root/server/api/trpc';
import { db } from '@root/server/db';
import { effects, items, rumors, traits } from '@root/server/db/schema';
import type { ExportDBData } from '@root/types/common/zod';
import { searchQueryValidator } from '@root/types/common/zod';
import { getBaseUrl } from '@root/utils/client';
import { evnIs } from '@root/utils/common';
import { ForbiddenError } from '@root/utils/server';

export const testRouter = router({
	test: publicProcedure.input(searchQueryValidator).query(async ({}) => {
		if (evnIs('production')) throw ForbiddenError();

		const [effectsRes, itemsRes, rumorsRes, traitsRes] = await Promise.all([
			db.select().from(effects),
			db.select().from(items),
			db.select().from(rumors),
			db.select().from(traits),
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
});
