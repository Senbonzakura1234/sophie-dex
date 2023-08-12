import InfoIcon from '@root/assets/icons/outline/InfoIcon';
import { alertAtom } from '@root/utils/store';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

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
				<div className='alert flex items-center gap-3 border-none bg-base-100 py-3 font-bold shadow-inner shadow-base-content'>
					<InfoIcon className='aspect-square h-5' />

					<p className='my-auto h-6 min-w-[12rem] text-left'>{message}</p>
				</div>
			</div>
		</div>
	);
}
