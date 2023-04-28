import type { Effect } from '@prisma/client';
import RecordWrapper from '@root/components/RecordWrapper';
import type { RecordProps } from '@root/types/common/props';
import { nullableHandle } from '@root/utils/common';
import type { FC } from 'react';

type EffectRecordProps = RecordProps<Effect>;

const EffectRecord: FC<EffectRecordProps> = props => (
	<RecordWrapper {...nullableHandle(props)} pageName='Effect'>
		{({ description, index }) => (
			<>
				<div className='text-sm'>index: {index}</div>

				<p className='text-lg'>{description}</p>
			</>
		)}
	</RecordWrapper>
);

export default EffectRecord;
