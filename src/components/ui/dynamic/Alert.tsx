import CheckCircleIcon from '@root/assets/icons/solid/CheckCircleIcon';
import ExclamationCircle from '@root/assets/icons/solid/ExclamationCircle';
import ExclamationTriangle from '@root/assets/icons/solid/ExclamationTriangle';
import InfoIcon from '@root/assets/icons/solid/InfoIcon';
import { alertTypeColorMap, colorTWClassMap } from '@root/constants';
import type { AlertTypeEnum } from '@root/types/common';
import type { IconProps } from '@root/types/common/props';
import { alertAtom } from '@root/utils/store';
import { useAtom } from 'jotai';
import type { FC } from 'react';
import { useEffect } from 'react';

const alertIconMap = {
	ERROR: ExclamationCircle,
	INFO: InfoIcon,
	SUCCESS: CheckCircleIcon,
	WARN: ExclamationTriangle,
} satisfies Record<AlertTypeEnum, FC<IconProps>>;

export default function Alert() {
	const [{ isOpen, message, type = 'INFO' satisfies AlertTypeEnum }, setAlert] = useAtom(alertAtom);

	const Icon = alertIconMap[type];

	useEffect(() => {
		if (!isOpen) return;

		const timeOut = setTimeout(() => setAlert({ isOpen: false, message: '' }), 2000);

		return () => {
			clearTimeout(timeOut);
		};
	}, [isOpen, setAlert]);

	return (
		<div
			className={`toast toast-start toast-bottom z-50 transition-[transform,opacity] ease-in-out ${
				isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
			}`}
		>
			<div className='rounded-2xl bg-gradient-to-r from-accent to-primary p-1 shadow-lg shadow-primary'>
				<div
					className={`alert flex gap-2 border-none bg-base-100 py-3 font-bold shadow-inner shadow-base-content ${
						colorTWClassMap[alertTypeColorMap[type]]
					}`}
				>
					<Icon className='aspect-square h-6' />

					<span className='min-w-[12rem] self-end text-left leading-[22px] text-base-content'>{message}</span>
				</div>
			</div>
		</div>
	);
}
