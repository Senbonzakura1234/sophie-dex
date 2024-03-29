'use client';

import ErrorContent from '@components/layout/static/ErrorContent';
import { errorEnumSchema } from '@root/types/common/zod';

export default function Error({ error }: { error: Error }) {
	return <ErrorContent code={errorEnumSchema.parse(error.message)} />;
}
