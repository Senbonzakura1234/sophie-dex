import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { RumorRecordProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';

import RecordFieldWithHyperLink from '../RecordFieldWithHyperLink';
import RecordHead from '../RecordHead';
import RecordWrapper from '../RecordWrapper/RecordWrapper';

const RumorRecord: FC<RumorRecordProps> = ({ record: { name, id, description, location, price, rumorType } }) => {
	const { isReady, securedIdQuery, pathname } = useIdQuery();

	return (
		<RecordWrapper className={clsx({ hidden: !isReady })}>
			<RecordHead
				id={id}
				isCurrentRecord={securedIdQuery.id === id}
				name={name}
				pathname={pathname}
				pageName='Rumor'
			/>

			{description ? <RecordFieldWithHyperLink inputArr={description} label='Description' /> : null}
		</RecordWrapper>
	);
};

export default RumorRecord;
