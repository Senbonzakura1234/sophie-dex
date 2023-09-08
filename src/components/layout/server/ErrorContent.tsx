import { serverErrorMap, serverErrorTrpcErrorMap } from '@root/constants';
import type { ServerErrorEnum } from '@root/types/common';
import { improvedInclude } from '@root/utils/common';
import type { TRPC_ERROR_CODE_KEY } from '@trpc/server/rpc';
import Link from 'next/link';

const mapTrpcError = (code: TRPC_ERROR_CODE_KEY): ServerErrorEnum => {
	if (improvedInclude(serverErrorTrpcErrorMap.BAD_REQUEST, code)) return 'BAD_REQUEST';
	if (improvedInclude(serverErrorTrpcErrorMap.NOT_FOUND, code)) return 'NOT_FOUND';
	return 'INTERNAL_SERVER_ERROR';
};

type ErrorContentProps = { type: TRPC_ERROR_CODE_KEY | undefined };

export default function ErrorContent({ type = 'INTERNAL_SERVER_ERROR' }: ErrorContentProps) {
	const { code, message } = serverErrorMap[mapTrpcError(type)];

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
