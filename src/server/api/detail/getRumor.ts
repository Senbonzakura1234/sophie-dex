import { provider } from '@root/server/database/repository/singleRecord';
import type { PageProps } from '@root/types/common';
import { cache } from 'react';

export const revalidate = 100000;

export const get = cache(async (input: PageProps['params']) => provider.getRumor(input));
