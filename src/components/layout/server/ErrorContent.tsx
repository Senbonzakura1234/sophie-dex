import { ServerErrorMap } from '@root/constants';
import type { ServerErrorEnum } from '@root/types/common';
import Link from 'next/link';

type ErrorContentProps = { type: ServerErrorEnum };

export default function ErrorContent({ type }: ErrorContentProps) {
	const { code, message } = ServerErrorMap[type];

	return (
		<div
			className={`modal-box m-auto grid aspect-video w-11/12 cursor-default select-none place-content-center gap-1 text-center shadow-md shadow-current md:w-[600px] ${
				type === 'INTERNAL_SERVER_ERROR' ? 'text-error' : 'text-primary'
			}`}
		>
			<div className='grid gap-1'>
				<h1 className='text-7xl font-bold tracking-widest md:text-9xl'>{code}</h1>

				<span className='font-semibold md:text-2xl'>Sorry! {message}</span>
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
		</div>
	);
}
