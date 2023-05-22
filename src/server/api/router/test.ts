import { publicProcedure, router } from '@root/server/api/trpc';
import { searchQueryValidator } from '@root/types/common/zod';
import { evnIs } from '@root/utils/common';
import { ForbiddenError } from '@root/utils/server';

export const testRouter = router({
	test: publicProcedure.input(searchQueryValidator).query(async ({}) => {
		if (evnIs('production')) throw ForbiddenError();

		return { status: 'OK' };
	}),
});
