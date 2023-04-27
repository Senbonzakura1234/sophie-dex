import type { Effect } from '@prisma/client';
import RecordHead from '@root/components/RecordHead';
import RecordWrapper from '@root/components/RecordWrapper';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { RecordProps } from '@root/types/common/props';
import { nullableHandle } from '@root/utils/common';
import type { FC } from 'react';

type EffectRecordProps = RecordProps<Effect>;

const EffectRecord: FC<EffectRecordProps> = props => {
	const { isReady, securedIdQuery, pathname } = useIdQuery();

	return (
		<RecordWrapper {...nullableHandle(props, !isReady)}>
			{({ description, id, index, name }) => (
				<>
					<RecordHead
						id={id}
						isCurrentRecord={securedIdQuery.id === id}
						name={name}
						pathname={pathname}
						pageName='Effect'
					/>

					<div className='text-sm'>index: {index}</div>

					<p className='text-lg'>{description}</p>
				</>
			)}
		</RecordWrapper>
	);
};

export default EffectRecord;
