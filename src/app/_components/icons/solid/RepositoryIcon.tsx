import type { IconProps } from '@root/types/common/props';

export default function RepositoryIcon(props: IconProps) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='currentColor' aria-hidden {...props}>
			<path d='M0 96C0 43 43 0 96 0l96 0 0 190.7c0 13.4 15.5 20.9 26 12.5L272 160l54 43.2c10.5 8.4 26 .9 26-12.5L352 0l32 0 32 0c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0L96 512c-53 0-96-43-96-96L0 96zM64 416c0 17.7 14.3 32 32 32l256 0 0-64L96 384c-17.7 0-32 14.3-32 32z' />
		</svg>
	);
}