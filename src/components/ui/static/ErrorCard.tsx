import { Monoton } from 'next/font/google';
import Link from 'next/link';

type ErrorCardProps = {
	httpStatus: number;
	errorMessage: string;
	showShadow?: boolean;
};

const monoton = Monoton({ weight: '400', subsets: ['latin'] });

export default function ErrorCard({ errorMessage, httpStatus, showShadow }: ErrorCardProps) {
	return (
		<div
			className={`card aspect-video w-full cursor-default bg-base-100 ${
				showShadow ? 'shadow-lg shadow-current' : ''
			} md:w-[600px] ${httpStatus >= 500 ? 'text-red-600' : 'text-blue-700'}`}
		>
			<div className='card-body place-content-center text-center font-roboto'>
				<div className='grid gap-1'>
					<h1 className={`${monoton.className} text-7xl tracking-widest md:text-9xl`}>{httpStatus}</h1>
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
	);
}
