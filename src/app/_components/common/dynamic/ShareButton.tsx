'use client';

import ClipboardIcon from '@components/icons/solid/ClipboardIcon';
import ShareSquareIcon from '@components/icons/solid/ShareSquareIcon';
import { useShareAPI } from '@root/hooks/useShareAPI';
import type { InputData } from '@root/types/common';
import type { ClassNamesProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';
import dynamic from 'next/dynamic';

const Notification = dynamic(() => import('@components/layout/dynamic/Notification'), { ssr: false });

type Props = Readonly<{ input: InputData; showText?: boolean } & ClassNamesProps<'wrapper' | 'icon'>>;

export default function ShareButton({ classNames, input, showText }: Props) {
	const { isCanShare, share, shareNotification } = useShareAPI(input);

	const IconComponent = isCanShare ? ShareSquareIcon : ClipboardIcon;

	return (
		<>
			<button
				aria-label={`Share ${input.title}`}
				className={cn('btn btn-primary btn-xs my-auto', classNames?.wrapper)}
				onClick={share}
			>
				<IconComponent className={cn('size-4', classNames?.icon)} />

				{showText ? <span>{isCanShare ? 'share' : 'Copy link'}</span> : null}
			</button>

			<Notification {...shareNotification} />
		</>
	);
}
