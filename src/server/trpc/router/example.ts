import { publicProcedure, router } from '../trpc';

export const exampleRouter = router({
	getAll: publicProcedure.query(({ ctx }) => {
		return ctx.prisma.item.findMany();
	}),
});
