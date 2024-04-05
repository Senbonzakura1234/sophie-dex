import type { IconProps } from '@root/types/common/props';
import { useId } from 'react';

export default function GoogleIcon(props: IconProps) {
	const pathA = useId();
	const pathB = useId();

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			viewBox='0 0 32 32'
			width='64'
			height='64'
			{...props}
		>
			<defs>
				<path
					id={pathA}
					d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'
				/>
			</defs>
			<clipPath id={pathB}>
				<use xlinkHref={`#${pathA}`} />
			</clipPath>

			<g transform='matrix(.727273 0 0 .727273 -.954545 -1.45455)'>
				<path d='M0 37V11l17 13z' clipPath={`url(#${pathB})`} fill='#fbbc05' />
				<path d='M0 11l17 13 7-6.1L48 14V0H0z' clipPath={`url(#${pathB})`} fill='#ea4335' />
				<path d='M0 37l30-23 7.9 1L48 0v48H0z' clipPath={`url(#${pathB})`} fill='#34a853' />
				<path d='M48 48L17 24l-4-3 35-10z' clipPath={`url(#${pathB})`} fill='#4285f4' />
			</g>
		</svg>
	);
}
