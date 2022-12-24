import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { EffectRecordProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';

import RecordHead from '../RecordHead';
import RecordWrapper from '../RecordWrapper/RecordWrapper';

const EffectRecord: FC<EffectRecordProps> = ({ record: { name, description, index, id } }) => {
	const { isReady, securedIdQuery, pathname } = useIdQuery();

	return (
		<RecordWrapper className={clsx({ hidden: !isReady })}>
			<RecordHead id={id} isCurrentRecord={securedIdQuery.id === id} name={name} pathname={pathname} />

			<span className='text-sm'>index: {index}</span>

			<span className='font-serif text-lg 2xl:h-16'>{description}</span>
		</RecordWrapper>
	);
};

export default EffectRecord;
