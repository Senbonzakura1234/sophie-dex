'use client';

import ErrorContent from '@root/components/layout/server/ErrorContent';
import { serverErrorEnumSchema } from '@root/types/common/zod';

export default function Error({ error }: { error: Error }) {
	const serverErrorType = serverErrorEnumSchema.parse(error.message.replace('Error: ', ''));

	return <ErrorContent type={serverErrorType} />;
}
