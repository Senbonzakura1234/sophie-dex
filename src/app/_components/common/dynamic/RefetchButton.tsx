'use client';

import ArrowPathIcon from '@components/icons/solid/ArrowPathIcon';
import type { useModuleId } from '@root/hooks/useModuleId';
import { ApiClientCtx } from '@root/utils/client/trpc';

type RefetchButtonProps = { moduleId: NonNullable<ReturnType<typeof useModuleId>['moduleId']> };

export default function RefetchButton({ moduleId }: RefetchButtonProps) {
	const trpcUtils = ApiClientCtx.useUtils();

	return (
		<button
			aria-label='refetch data'
			className='btn btn-circle btn-primary btn-sm my-auto !border-none capitalize shadow-lg shadow-current !transition-opacity'
			onClick={() => trpcUtils[moduleId].getAll.invalidate}
		>
			<ArrowPathIcon className='aspect-square h-4' />
		</button>
	);
}
