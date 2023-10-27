'use client';

import { type AppRouter } from '@root/server/api/router/_app';
import { createTRPCReact } from '@trpc/react-query';

export const ApiClientCtx = createTRPCReact<AppRouter>({ abortOnUnmount: true });
