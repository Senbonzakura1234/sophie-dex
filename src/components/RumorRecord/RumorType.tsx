import { rumorTypeColorMap, rumorTypeIconMap } from '@root/constants';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import type { RumorTypeEnum } from '@root/types/common/zod';
import { convertCode } from '@root/utils/common';

type RumorTypeProps = { rumorType: RumorTypeEnum };

export default function RumorType({ rumorType }: RumorTypeProps) {
	const { updateQuery, securedQuery } = useSecuredRouter();

	const isBtnDisabled = securedQuery.rumorType === rumorType;

	const className = {
		MATERIAL: 'app-text-shadow-GREEN',
		MONSTER: 'app-text-shadow-RED',
	} satisfies Record<RumorTypeEnum, string>;

	return (
		<>
			<div className='flex max-w-fit flex-wrap gap-2'>
				<div className='font-bold !shadow-none'>Category: </div>
				<button
					aria-label={`Filter ${convertCode(rumorType)} Rumor`}
					className={`btn btn-xs !border-current !bg-current opacity-80 hover:opacity-100 ${
						isBtnDisabled ? '!no-animation !cursor-default hover:opacity-80' : ''
					}`}
					onClick={() => {
						if (!isBtnDisabled) updateQuery({ rumorType });
					}}
					role='navigation'
					style={{ color: rumorTypeColorMap[rumorType].secondary }}
				>
					<div className='flex gap-1 font-extrabold capitalize text-slate-50'>
						<div className={`font-atelier ${rumorTypeIconMap[rumorType]}`} />
						{convertCode(rumorType)}
					</div>
				</button>
			</div>

			<div
				className={`absolute bottom-8 right-8 w-10 text-center font-atelier text-lg text-slate-50 md:text-4xl ${rumorTypeIconMap[rumorType]} ${className[rumorType]}`}
			/>
		</>
	);
}
