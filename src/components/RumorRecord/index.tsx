import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { RumorRecordProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';

import RecordFieldWithHyperLink from '../RecordFieldWithHyperLink';
import RecordHead from '../RecordHead';
import RecordWrapper from '../RecordWrapper/RecordWrapper';
import Location from './Location';
import Price from './Price';
import RumorType from './RumorType';

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

			<Price price={price} />

			<RecordFieldWithHyperLink inputArr={description} label='Description' />

			<Location location={location} />

			<RumorType rumorType={rumorType} />
		</RecordWrapper>
	);
};

export default RumorRecord;
