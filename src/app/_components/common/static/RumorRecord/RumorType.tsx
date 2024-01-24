'use client';

import QueryLink from '@components/common/dynamic/QueryLink';
import { rumorTypeColorMap, rumorTypeIconMap } from '@root/constants/common';
import { useSearchQuery } from '@root/hooks/useSearchQuery';
import type { TextShadowMap } from '@root/types/common/tailwind';
import type { RumorTypeEnum } from '@root/types/common/zod';
import { convertCode } from '@root/utils/common';

type RumorTypeProps = { rumorType: RumorTypeEnum };

const className = {
	MATERIAL: 'app-text-shadow-GREEN text-base-200 dark:text-base-content',
	MONSTER: 'app-text-shadow-RED text-base-200 dark:text-base-content',
} satisfies TextShadowMap<RumorTypeEnum>;

export default function RumorType({ rumorType }: RumorTypeProps) {
	const { searchQuery } = useSearchQuery();

	const isActive = rumorType === searchQuery.rumorType;

	const { background, foreground } = rumorTypeColorMap[rumorType];

	return (
		<>
			<div className='flex max-w-fit flex-wrap gap-2'>
				<div>Category: </div>
				<QueryLink
					aria-label={`Filter ${convertCode(rumorType)} Rumor`}
					className={`btn btn-xs !border-current !bg-current shadow-current ${
						isActive ? '' : 'shadow-md'
					} ${background}`}
					href={{ query: { rumorType } }}
					isActive={isActive}
					searchQuery={searchQuery}
					resetPage
				>
					<div className={`flex gap-1 font-bold capitalize ${foreground}`}>
						<div className={`font-atelier ${rumorTypeIconMap[rumorType]}`} />
						{convertCode(rumorType)}
					</div>
				</QueryLink>
			</div>

			<div
				className={`absolute bottom-8 right-8 w-10 text-center font-atelier text-lg md:text-4xl ${rumorTypeIconMap[rumorType]} ${className[rumorType]}`}
			/>
		</>
	);
}
