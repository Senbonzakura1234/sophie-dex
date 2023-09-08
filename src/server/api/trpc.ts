import { initTRPC } from '@trpc/server';
import { ZodError } from 'zod';

const t = initTRPC.create({
	errorFormatter({ shape, error }) {
		return {
			...shape,
			data: {
				...shape.data,
				zodError: error.cause instanceof ZodError ? error.cause.flatten().fieldErrors : null,
			},
		};
	},
});

export const router = t.router;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;