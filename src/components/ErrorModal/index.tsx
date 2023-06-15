import { getFramerFade, getFramerFadeUp } from '@root/animations';
import AnimationWrapper from '@root/components/AnimationWrapper';
import type { ErrorResultProps } from '@root/types/common/props';
import { m as motion } from 'framer-motion';
import Link from 'next/link';

type ErrorModalProps = ErrorResultProps;

export default function ErrorModal({
	isError,
	errorData,
	errorMessage = 'Unknown Error Occur In System',
}: ErrorModalProps) {
	const httpStatus = errorData ? errorData.httpStatus : 400;

	return (
		<AnimationWrapper
			show={isError}
			options={getFramerFade()}
			className='absolute inset-0 z-50 grid grid-cols-1 place-content-center bg-slate-900/50 p-2 md:grid-cols-none'
		>
			<motion.div
				{...getFramerFadeUp()}
				className={`card aspect-video w-full bg-base-100 shadow-lg shadow-current md:w-[600px] ${
					httpStatus >= 500 ? 'text-red-600' : 'text-blue-700'
				}`}
			>
				<div className='card-body place-content-center text-center font-serif'>
					<div className='grid gap-1'>
						<h1 className='font-mono text-7xl tracking-widest md:text-9xl'>{httpStatus}</h1>
						<span className='font-semibold md:text-2xl'>{errorMessage}</span>
					</div>

					<div>
						<Link href='/' as='/' className='link-hover link text-sm text-base-content'>
							Back to home
						</Link>
					</div>
				</div>
			</motion.div>
		</AnimationWrapper>
	);
}
