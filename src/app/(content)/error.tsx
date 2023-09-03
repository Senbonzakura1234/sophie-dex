'use client';

import type { ServerError, ServerErrorEnum } from '@root/types/common';
import Link from 'next/link';

export default function Error({ error }: { error: { message: `Error: ${ServerError}` }; reset: () => void }) {
	const [code, message] = error.message.replaceAll('Error: ', '').split('-') as [ServerErrorEnum, string];

	const codeNumber = code === 'INTERNAL_SERVER_ERROR' ? 500 : 400;

	return (
		<main
			className={`modal-box m-auto grid aspect-video w-11/12 cursor-default select-none place-content-center gap-1 text-center shadow-md shadow-current md:w-[600px] ${
				code === 'INTERNAL_SERVER_ERROR' ? 'text-accent	' : 'text-primary'
			}`}
		>
			<div className='grid gap-1'>
				<h1 className='text-7xl font-bold tracking-widest md:text-9xl'>{codeNumber}</h1>

				<span className='font-semibold md:text-2xl'>{message}</span>
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
		</main>
	);
}
