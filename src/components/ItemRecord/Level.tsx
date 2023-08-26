import type { TextShadowMap } from '@root/types/common/tailwind';
import type { ColorEnum } from '@root/types/common/zod';

type LevelProps = { level: number; color: ColorEnum };

export default function Level({ level, color }: LevelProps) {
	const className = {
		BLUE: 'app-text-shadow-BLUE',
		GREEN: 'app-text-shadow-GREEN',
		RED: 'app-text-shadow-RED',
		WHITE: 'app-text-shadow-WHITE',
		YELLOW: 'app-text-shadow-YELLOW',
	} satisfies TextShadowMap;

	return (
		<div
			aria-hidden
			className={`absolute right-8 top-8 grid w-10 select-none place-content-center gap-1 text-center font-extrabold leading-[0.5] text-slate-50 ${className[color]}`}
		>
			<div className='text-center text-xs md:text-lg'>Lv</div>
			<div className='text-lg md:text-4xl'>{level}</div>
		</div>
	);
}
