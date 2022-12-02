import { publicProcedure, router } from '@root/server/trpc/trpc';

export const exampleRouter = router({
	getAll: publicProcedure.query(({ ctx }) => {
		return ctx.prisma.item.findMany();
	}),
});
