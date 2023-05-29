import { publicProcedure, router } from '@root/server/api/trpc';
import { searchQueryValidator } from '@root/types/common/zod';

export const testRouter = router({
	test: publicProcedure.input(searchQueryValidator).query(async ({}) => {
		// if (evnIs('production')) throw ForbiddenError();
		// const page = 21;
		// const data = await db
		// 	.select()
		// 	.from(items)
		// 	.where(isNotNull(items.recipeIdea))
		// 	.orderBy(asc(items.name))
		// 	.limit(8)
		// 	.offset((page - 1) * 8);
		// await Promise.all(
		// 	data.map(async ({ recipeIdea, id }) => {
		// 		if (!recipeIdea) return;
		// 		let count = 0;
		// 		const newRecipeIdea = {
		// 			...recipeIdea,
		// 			contentText: recipeIdea.contentText.map(t => {
		// 				if (!t.includes('keyMap-')) return t;
		// 				const newKey = `keyMap-${count}`;
		// 				count++;
		// 				return newKey;
		// 			}),
		// 		};
		// 		await db.update(items).set({ recipeIdea: newRecipeIdea }).where(eq(items.id, id));
		// 	}),
		// );
		// return { status: 'OK' };
	}),
});
