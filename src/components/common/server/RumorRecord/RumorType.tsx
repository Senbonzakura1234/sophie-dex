'use client';

import QueryLink from '@root/components/common/client/QueryLink';
import { rumorTypeColorMap, rumorTypeIconMap } from '@root/constants/common';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { RumorTypeEnum } from '@root/types/common/zod';
import { convertCode } from '@root/utils/common';

type RumorTypeProps = { rumorType: RumorTypeEnum };

export default function RumorType({ rumorType }: RumorTypeProps) {
	const className = {
		MATERIAL: 'app-text-shadow-GREEN',
		MONSTER: 'app-text-shadow-RED',
	} satisfies Record<RumorTypeEnum, string>;
	const { searchQuery } = useSearchQuery();

	const isActive = rumorType === searchQuery.rumorType;

	return (
		<>
			<div className='flex max-w-fit flex-wrap gap-2'>
				<div>Category: </div>
				<QueryLink
					aria-label={`Filter ${convertCode(rumorType)} Rumor`}
					className={`btn btn-xs !border-current !bg-current shadow-current ${isActive ? '' : 'shadow-md'} ${
						rumorTypeColorMap[rumorType]
					}`}
					href={{ query: { rumorType } }}
					isActive={isActive}
					searchQuery={searchQuery}
					resetPage
				>
					<div className='flex gap-1 font-bold capitalize text-slate-50'>
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
