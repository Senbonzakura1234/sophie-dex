'use client';

import CheckCircleIcon from '@components/icons/solid/CheckCircleIcon';
import ExclamationCircle from '@components/icons/solid/ExclamationCircle';
import ExclamationTriangle from '@components/icons/solid/ExclamationTriangle';
import InfoIcon from '@components/icons/solid/InfoIcon';
import { alertTypeColorMap, colorTWClassMap } from '@root/constants/common';
import type { AlertTypeEnum } from '@root/types/common';
import type { IconProps, NotificationProps } from '@root/types/common/props';
import { cn } from '@root/utils/common';
import type { FC } from 'react';
import { createPortal } from 'react-dom';

const alertIconMap = {
	ERROR: ExclamationCircle,
	INFO: InfoIcon,
	SUCCESS: CheckCircleIcon,
	WARN: ExclamationTriangle,
} satisfies Record<AlertTypeEnum, FC<IconProps>>;

export default function Notification({ message, type = 'INFO', isOpen }: NotificationProps) {
	const Icon = alertIconMap[type];

	if (typeof window === 'undefined') return null;

	return (
		<>
			{createPortal(
				<div
					className={cn(
						'toast toast-center lg:toast-start toast-bottom z-50 transition-[transform,opacity] ease-in-out',
						isOpen
							? 'translate-y-0 lg:translate-x-0 opacity-100'
							: 'translate-y-full lg:translate-y-0 lg:-translate-x-full opacity-0',
					)}
				>
					<div className='card bg-gradient-to-br from-accent to-primary p-1 shadow-lg shadow-primary'>
						<div
							className={cn(
								'flex gap-2 rounded-[inherit] border-none bg-base-100 px-4 py-3 font-bold shadow-inner shadow-base-content',
								colorTWClassMap[alertTypeColorMap[type]].background,
							)}
						>
							<Icon className='aspect-square h-6' />

							<span className='min-w-48 self-end text-left leading-[22px] text-base-content'>{message}</span>
						</div>
					</div>
				</div>,
				document.body,
			)}
		</>
	);
}
