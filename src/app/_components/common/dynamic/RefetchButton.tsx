'use client';

import ArrowPathIcon from '@components/icons/solid/ArrowPathIcon';
import type { ModuleIdEnum } from '@root/types/common/zod';
import { ApiClientCtx } from '@root/utils/client/trpc';

type RefetchButtonProps = {
	moduleId: ModuleIdEnum;
};

export default function RefetchButton({ moduleId }: RefetchButtonProps) {
	const utils = ApiClientCtx.useUtils();

	return (
		<button
			aria-label='refetch data'
			className='btn btn-circle btn-primary btn-sm my-auto !border-none capitalize shadow-lg shadow-current !transition-opacity'
			onClick={() => utils[moduleId].getAll.invalidate}
		>
			<ArrowPathIcon className='aspect-square h-4' />
		</button>
	);
}
