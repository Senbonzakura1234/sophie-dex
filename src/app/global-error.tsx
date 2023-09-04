'use client';

import ErrorContent from '@root/components/layout/server/ErrorContent';

export default function Error() {
	return <ErrorContent type='INTERNAL_SERVER_ERROR' />;
}
