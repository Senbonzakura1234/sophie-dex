import { rumorTypeColorMap, rumorTypeIconMap } from '@root/constants';
import { useSearchQuery } from '@root/hooks/router';
import type { RumorTypeEnum } from '@root/types/common/zod';
import { convertCode } from '@root/utils/common';
import QueryLink from '../ui/static/QueryLink';

type RumorTypeProps = { rumorType: RumorTypeEnum };

export default function RumorType({ rumorType }: RumorTypeProps) {
	const { searchQuery } = useSearchQuery();

	const isActive = searchQuery.rumorType === rumorType;

	const className = {
		MATERIAL: 'app-text-shadow-GREEN',
		MONSTER: 'app-text-shadow-RED',
	} satisfies Record<RumorTypeEnum, string>;

	return (
		<>
			<div className='flex max-w-fit flex-wrap gap-2'>
				<div className='font-bold !shadow-none'>Category: </div>
				<QueryLink
					aria-label={`Filter ${convertCode(rumorType)} Rumor`}
					className={`btn btn-xs !border-current !bg-current ${rumorTypeColorMap[rumorType]} ${
						isActive ? '' : 'opacity-80 hover:opacity-100'
					}`}
					href={{ query: { rumorType } }}
					isActive={isActive}
					resetPage
				>
					<div className='flex gap-1 font-extrabold capitalize text-slate-50'>
						<div className={`font-atelier ${rumorTypeIconMap[rumorType]}`} />
						{convertCode(rumorType)}
					</div>
				</QueryLink>
			</div>

			<div
				className={`absolute bottom-8 right-8 w-10 text-center font-atelier text-lg text-slate-50 md:text-4xl ${rumorTypeIconMap[rumorType]} ${className[rumorType]}`}
			/>
		</>
	);
}
