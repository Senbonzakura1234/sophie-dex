import type { TextShadowMap } from '@root/types/common/tailwind';
import type { ColorEnum } from '@root/types/common/zod';
import { cn } from '@root/utils/common';

type LevelProps = { level: number; color: ColorEnum };

const className = {
	BLUE: 'app-text-shadow-BLUE text-base-200 dark:text-base-content',
	GREEN: 'app-text-shadow-GREEN text-base-200 dark:text-base-content',
	RED: 'app-text-shadow-RED text-base-200 dark:text-base-content',
	WHITE: 'app-text-shadow-WHITE text-base-200 dark:text-base-content',
	YELLOW: 'app-text-shadow-YELLOW text-base-200 dark:text-base-content',
} satisfies TextShadowMap<ColorEnum>;

export default function Level({ level, color }: LevelProps) {
	return (
		<div
			aria-hidden
			className={cn(
				'absolute right-8 top-8 grid w-10 select-none place-content-center gap-1 text-center font-bold leading-[0.5]',
				className[color],
			)}
		>
			<div className='text-center text-xs md:text-lg'>Lv</div>
			<div className='text-lg md:text-4xl'>{level}</div>
		</div>
	);
}
