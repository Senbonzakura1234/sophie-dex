import type { ChildrenProps, ClassNameProps, SharedModalProps } from '@root/types/common/props';
import { useEffect, useId, useRef } from 'react';

type ModalProps = ChildrenProps & ClassNameProps & SharedModalProps;

export default function Modal({ isShow, children, className, onClose }: ModalProps) {
	const dialogId = useId();
	const dialogRef = useRef<HTMLDialogElement>(null);

	useEffect(() => {
		if (!isShow) return;
		setTimeout(() => {
			if (dialogRef.current == null) return;
			dialogRef.current.show();
		}, 50);
	}, [isShow]);

	return (
		<dialog id={dialogId} className='modal' open={false} ref={dialogRef}>
			<form method='dialog' className={`modal-box aspect-video w-full md:w-[600px] ${className}`}>
				{children}
			</form>

			<form method='dialog' className='modal-backdrop bg-slate-900/40' onSubmit={onClose}>
				<button aria-label='Close Dialog' disabled={!onClose} role='dialog'>
					close
				</button>
			</form>
		</dialog>
	);
}
