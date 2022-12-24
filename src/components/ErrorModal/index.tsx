import type { ErrorModalProps } from '@root/types/common/props';
import type { DefaultErrorData } from '@trpc/server/dist/error/formatter';
import clsx from 'clsx';
import Link from 'next/link';
import type { FC } from 'react';
import { useMemo } from 'react';

const ErrorModal: FC<ErrorModalProps> = ({ isError, errorData, errorMessage }) => {
	const { error, message }: { error: DefaultErrorData; message: string } = useMemo(
		() => ({
			error: errorData ?? {
				code: 'INTERNAL_SERVER_ERROR',
				httpStatus: 400,
			},
			message: errorMessage || 'Unknown Error Occur In System',
		}),
		[errorData, errorMessage],
	);

	return (
		<div
			className={clsx(
				{ hidden: !isError },
				'absolute inset-0 z-50 grid grid-cols-1 place-content-center bg-slate-900/50 p-2 md:grid-cols-none',
			)}
		>
			<div className='card bg-base-100 aspect-video w-full shadow-2xl md:w-[600px]'>
				<div className='card-body place-content-center text-center font-serif'>
					<div
						className={clsx({
							'text-blue-700': error.httpStatus < 500,
							'text-red-600': error.httpStatus >= 500,
						})}
					>
						<h1 className='font-mono text-7xl tracking-widest md:text-9xl'>{error.httpStatus}</h1>
						<span className='font-semibold md:text-xl'>{message}</span>
					</div>

					<Link href='/' as='/' className='link link-hover text-sm'>
						Back to home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ErrorModal;
