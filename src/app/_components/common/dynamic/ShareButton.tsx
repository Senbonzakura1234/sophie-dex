'use client';

import ClipboardIcon from '@components/icons/solid/ClipboardIcon';
import ShareSquareIcon from '@components/icons/solid/ShareSquareIcon';
import { useShare } from '@root/hooks/useShare';
import type { InputData } from '@root/types/common';
import type { ChildrenProps, ClassNamesProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';
import dynamic from 'next/dynamic';

const Notification = dynamic(() => import('@components/layout/dynamic/Notification'));

type Props = { input: InputData } & ClassNamesProps<'wrapper' | 'icon'> & ChildrenProps;

export default function ShareButton({ classNames, input, children }: Props) {
	const { isCanShare, onShare, shareNotification } = useShare(input);

	const IconComponent = isCanShare ? ShareSquareIcon : ClipboardIcon;

	return (
		<>
			<button
				aria-label={`Share ${input.title}`}
				className={cn('btn btn-primary btn-xs my-auto', classNames?.wrapper)}
				onClick={onShare}
				role='button'
			>
				<IconComponent className={cn('size-4', classNames?.icon)} />

				{children ? <span>{children}</span> : null}
			</button>

			<Notification {...shareNotification} />
		</>
	);
}
