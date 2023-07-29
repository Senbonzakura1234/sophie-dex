import { Modal } from '@root/components/ui/dynamic';
import type { ErrorResultProps, SharedModalProps } from '@root/types/common/props';
import { Monoton } from 'next/font/google';
import Link from 'next/link';

type ErrorModalProps = ErrorResultProps & SharedModalProps & { disableBackDrop?: boolean };

const monoton = Monoton({ weight: '400', subsets: ['latin'] });

export default function ErrorModal({
	disableBackDrop,
	errorData,
	errorMessage = 'Unknown Error Occur On Server',
	isError,
}: ErrorModalProps) {
	const httpStatus = errorData ? errorData.httpStatus : 500;

	return (
		<Modal
			disableBackDrop={disableBackDrop}
			isShow={isError}
			className={`grid cursor-default select-none place-content-center gap-1 text-center shadow-md shadow-current ${
				httpStatus >= 500 ? 'text-red-600' : 'text-blue-700'
			}`}
		>
			<div className='grid gap-1'>
				<h1 className={`${monoton.className} text-7xl tracking-widest md:text-9xl`}>{httpStatus}</h1>

				<span className='font-semibold md:text-2xl'>{errorMessage}</span>
			</div>

			<div>
				<Link
					aria-label='Back to home'
					className='link-hover link text-base-content !outline-none'
					href='/'
					replace
					role='navigation'
				>
					Back to home
				</Link>
			</div>
		</Modal>
	);
}
