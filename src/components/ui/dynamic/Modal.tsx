import type { ChildrenProps, ClassNameProps } from '@root/types/common/props';
import { useEffect, useId, useRef } from 'react';

type ModalProps = ChildrenProps & ClassNameProps & { isShow: boolean; disableBackDrop?: boolean };

export default function Modal({ children, className, isShow, disableBackDrop }: ModalProps) {
	const dialogId = useId();
	const dialogRef = useRef<HTMLDialogElement>(null);

	const onClose = () => {
		if (dialogRef.current == null || disableBackDrop) return;
		dialogRef.current.close();
	};

	useEffect(() => {
		if (!isShow) return;

		setTimeout(() => {
			if (dialogRef.current == null) return;
			dialogRef.current.show();
		}, 50);
	}, [isShow]);

	return (
		<dialog id={dialogId} className='modal' open={false} ref={dialogRef}>
			<form method='dialog' className={`modal-box aspect-video w-11/12 md:w-[600px] ${className}`}>
				{children}
			</form>

			<form method='dialog' className='modal-backdrop bg-slate-900/40' onSubmit={onClose}>
				<button aria-label='Close Dialog' role='dialog' disabled={disableBackDrop}>
					close
				</button>
			</form>
		</dialog>
	);
}
