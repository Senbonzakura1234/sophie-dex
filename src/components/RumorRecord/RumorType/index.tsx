import type { RUMOR_TYPE } from '@prisma/client';
import { rumorTypeMap } from '@root/components/SubComponent';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import clsx from 'clsx';
import type { FC } from 'react';
import { useMemo } from 'react';

type RumorTypeProps = { rumorType: RUMOR_TYPE };

const RumorType: FC<RumorTypeProps> = ({ rumorType }) => {
	const { isReady, updateQuery, securedQuery } = useSearchQuery();

	const isBtnDisabled = useMemo(
		() => !isReady || securedQuery.rumorType === rumorType,
		[isReady, rumorType, securedQuery.rumorType],
	);

	return (
		<>
			<div className='flex max-w-fit flex-wrap gap-2'>
				<div className='font-bold !shadow-none'>Category: </div>
				<button
					onClick={() => {
						if (!isBtnDisabled) updateQuery({ rumorType, page: null });
					}}
					aria-label={`Filter ${rumorTypeMap.get(rumorType)?.name} Rumor`}
					role='navigation'
					disabled={!isReady}
					className={clsx(
						{
							'!no-animation !cursor-default': isBtnDisabled,

							'!border-green-500 !bg-green-500': isBtnDisabled && rumorType === 'MATERIAL',
							'border-green-500 bg-green-500 hover:border-green-600 hover:bg-green-600':
								rumorType === 'MATERIAL',

							'!border-red-500 !bg-red-500': isBtnDisabled && rumorType === 'MONSTER',
							'border-red-500 bg-red-500 hover:border-red-600 hover:bg-red-600': rumorType === 'MONSTER',
						},
						'btn btn-xs gap-1 font-extrabold capitalize !text-slate-50',
					)}
				>
					<div className={clsx('font-atelier', rumorTypeMap.get(rumorType)?.className)}></div>
					{rumorTypeMap.get(rumorType)?.name}
				</button>
			</div>

			<div
				className={clsx(
					'font-atelier absolute bottom-10 right-10 w-10 text-center text-lg text-slate-50 md:text-4xl',
					rumorTypeMap.get(rumorType)?.className,
				)}
			></div>
		</>
	);
};

export default RumorType;
