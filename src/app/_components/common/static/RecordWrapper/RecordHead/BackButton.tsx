'use client';

import CaretLeftIcon from '@components/icons/solid/CaretLeftIcon';
import type { ChildrenProps, ClassNamesProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';
import { useRouter } from 'next/navigation';

type Props = ClassNamesProps<'wrapper' | 'icon'> & ChildrenProps;

export default function BackButton({ children, classNames }: Props) {
	const { back } = useRouter();

	return (
		<button onClick={back} className={classNames?.wrapper}>
			<CaretLeftIcon className={cn('size-4', classNames?.icon)} />

			{children ? <span>{children}</span> : null}
		</button>
	);
}
