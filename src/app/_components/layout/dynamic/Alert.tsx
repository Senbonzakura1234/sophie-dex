'use client';

import CheckCircleIcon from '@components/icons/solid/CheckCircleIcon';
import ExclamationCircle from '@components/icons/solid/ExclamationCircle';
import ExclamationTriangle from '@components/icons/solid/ExclamationTriangle';
import InfoIcon from '@components/icons/solid/InfoIcon';
import { alertTypeColorMap, colorTWClassMap } from '@root/constants/common';
import useDispatch from '@root/hooks/useDispatch';
import useSelector from '@root/hooks/useSelector';
import type { AlertTypeEnum } from '@root/types/common';
import type { IconProps } from '@root/types/common/props';
import type { FC } from 'react';
import { useEffect } from 'react';

const alertIconMap = {
	ERROR: ExclamationCircle,
	INFO: InfoIcon,
	SUCCESS: CheckCircleIcon,
	WARN: ExclamationTriangle,
} satisfies Record<AlertTypeEnum, FC<IconProps>>;

export default function Alert() {
	const {
		alert: { isOpen, message, type = 'INFO' },
	} = useSelector();

	const dispatch = useDispatch();

	const Icon = alertIconMap[type];

	useEffect(() => {
		if (!isOpen) return;

		const timeOut = setTimeout(() => dispatch({ type: 'UPDATE_ALERT', data: { isOpen: false, message: '' } }), 2000);

		return () => {
			clearTimeout(timeOut);
		};
	}, [dispatch, isOpen]);

	return (
		<div
			className={`toast toast-start toast-bottom z-50 transition-[transform,opacity] ease-in-out ${
				isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
			}`}
		>
			<div className='card bg-gradient-to-br from-accent to-primary p-1 shadow-lg shadow-primary'>
				<div
					className={`flex gap-2 rounded-[inherit] border-none bg-base-100 px-4 py-3 font-bold shadow-inner shadow-base-content ${
						colorTWClassMap[alertTypeColorMap[type]].background
					}`}
				>
					<Icon className='aspect-square h-6' />

					<span className='min-w-[12rem] self-end text-left leading-[22px] text-base-content'>{message}</span>
				</div>
			</div>
		</div>
	);
}
