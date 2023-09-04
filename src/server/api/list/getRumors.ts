import { provider } from '@root/server/database/repository/listRecord';
import type { PageProps } from '@root/types/common';
import { cache } from 'react';

export const revalidate = 100000;

export const get = cache(async (input: PageProps['searchParams']) => provider.getRumors(input));
