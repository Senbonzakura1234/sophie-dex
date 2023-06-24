import { AnimationWrapper } from '@root/components/ui/dynamic';
import type { ErrorResultProps } from '@root/types/common/props';
import { getFramerFade } from '@root/utils/animations';
import Link from 'next/link';

type ErrorModalProps = Omit<ErrorResultProps, 'isError'> & {
	isShow: boolean;
	onCloseModal: () => void;
};

export default function ErrorModal({
	isShow,
	errorData,
	errorMessage = 'Unknown Error Occur In System',
	onCloseModal,
}: ErrorModalProps) {
	const httpStatus = errorData ? errorData.httpStatus : 400;

	return (
		<AnimationWrapper
			show={isShow}
			options={getFramerFade()}
			className='absolute inset-0 z-50 grid cursor-pointer grid-cols-1 place-content-center bg-slate-900/50 p-2 md:grid-cols-none'
			onClick={onCloseModal}
		>
			<div
				className={`card aspect-video w-full cursor-default bg-base-100 shadow-lg shadow-current md:w-[600px] ${
					httpStatus >= 500 ? 'text-red-600' : 'text-blue-700'
				}`}
			>
				<div className='card-body place-content-center text-center font-serif'>
					<div className='grid gap-1'>
						<h1 className='font-mono text-7xl tracking-widest md:text-9xl'>{httpStatus}</h1>
						<span className='font-semibold md:text-2xl'>{errorMessage}</span>
					</div>

					<div>
						<Link
							aria-label='Back to home'
							className='link-hover link text-sm text-base-content'
							href='/'
							replace
							role='navigation'
						>
							Back to home
						</Link>
					</div>
				</div>
			</div>
		</AnimationWrapper>
	);
}
