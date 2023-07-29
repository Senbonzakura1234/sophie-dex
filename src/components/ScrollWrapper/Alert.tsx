import DocumentChartBarIcon from '@root/assets/icons/outline/DocumentChartBarIcon';
import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

type AlertAtom = { isOpen: boolean; message: string };

export const alertAtom = atom<AlertAtom>({ isOpen: false, message: '' });

export default function Alert() {
	const [{ isOpen, message }, setAlert] = useAtom(alertAtom);

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
				isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
			}`}
		>
			<div className='rounded-2xl bg-gradient-to-r from-accent to-primary p-1 shadow-lg shadow-primary'>
				<div className='alert flex items-baseline border-none bg-base-100 font-bold shadow-inner shadow-base-content'>
					<DocumentChartBarIcon className='aspect-square h-5' />

					<span className='my-auto min-w-[7rem]'>{message}</span>
				</div>
			</div>
		</div>
	);
}
