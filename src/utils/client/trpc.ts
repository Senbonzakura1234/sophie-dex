'use client';

import type { AppRouter } from '@root/server/router';
import { createTRPCReact } from '@trpc/react-query';

export const ApiClientCtx = createTRPCReact<AppRouter>({ abortOnUnmount: true });
