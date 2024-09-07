'use client';

import ErrorContent from '@components/layout/static/ErrorContent';
import { genericErrorEnumSchema } from '@root/types/common/zod/generic';

export default function ContentError({ error }: Readonly<{ error: Error }>) {
	return <ErrorContent code={genericErrorEnumSchema.catch('INTERNAL_SERVER_ERROR').parse(error.message)} />;
}
