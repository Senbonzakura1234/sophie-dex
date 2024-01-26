'use client';

import useSelector from '@root/hooks/useSelector';
import type { ChildrenProps, ClassNameProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';
import { useRouter } from 'next/navigation';

type RefetchButtonProps = {
	isShowDivider?: boolean;
} & ClassNameProps &
	ChildrenProps;

export default function RefetchButton({ isShowDivider, className, children }: RefetchButtonProps) {
	const {
		contentData: { refetch },
	} = useSelector();

	const { refresh } = useRouter();

	return (
		<>
			{isShowDivider ? <span className='divider m-0'>or</span> : null}

			<button
				aria-label={refetch ? 'refetch data' : 'refresh page'}
				className={cn('capitalize', className)}
				onClick={refetch || refresh}
			>
				{children || 'refresh'}
			</button>
		</>
	);
}
