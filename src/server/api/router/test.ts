import { publicProcedure, router } from '@root/server/api/trpc';
import { items } from '@root/server/db/schema';
import { searchQueryValidator } from '@root/types/common/zod';
import { evnIs } from '@root/utils/common';
import { ForbiddenError } from '@root/utils/server';
import type { SQL } from 'drizzle-orm';
import { ilike, or, sql } from 'drizzle-orm';

export const testRouter = router({
	test: publicProcedure.input(searchQueryValidator).query(async ({ ctx, input }) => {
		if (evnIs('production')) throw ForbiddenError();

		const Or: SQL[] = [];

		input.search = 'grass';

		if (input.search) {
			Or.push(ilike(items.name, `%${input.search}%`));
			Or.push(ilike(items.keyWords, `%${input.search}%`));
		}

		input.relatedCategory = 'ACCESSORY';
		// const x = sql`${input.relatedCategory}=ANY("relatedCategories")`;
		const data = await ctx.db
			.select({ record: items, count: sql<number>`count(*) over()` })
			.from(items)
			.where(or(...Or))
			.limit(10)
			.offset(0);

		return data;
	}),
});
