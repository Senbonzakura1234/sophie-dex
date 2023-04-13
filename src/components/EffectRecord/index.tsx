import type { Effect } from '@prisma/client';
import RecordHead from '@root/components/RecordHead';
import RecordWrapper from '@root/components/RecordWrapper';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { RecordProps } from '@root/types/common/props';
import type { FC } from 'react';

type EffectRecordProps = RecordProps<Effect>;

const EffectRecord: FC<EffectRecordProps> = ({ record }) => {
	const { isReady, securedIdQuery, pathname } = useIdQuery();

	return (
		<RecordWrapper isSuccess={!!record && isReady}>
			{record ? (
				<>
					<RecordHead
						id={record.id}
						isCurrentRecord={securedIdQuery.id === record.id}
						name={record.name}
						pathname={pathname}
						pageName='Effect'
					/>

					<div className='text-sm'>index: {record.index}</div>

					<p className='text-lg'>{record.description}</p>
				</>
			) : null}
		</RecordWrapper>
	);
};

export default EffectRecord;
