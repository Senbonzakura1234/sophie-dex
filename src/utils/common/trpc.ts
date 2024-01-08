import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

export const createContext = ({ resHeaders }: FetchCreateContextFnOptions) => ({ resHeaders });
