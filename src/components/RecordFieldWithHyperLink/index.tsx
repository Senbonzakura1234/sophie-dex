import type { RecordFieldWithHyperLinkProps } from '@root/types/common/props';
import type { FC, ReactNode } from 'react';
import { Fragment, useMemo } from 'react';

import KeyContentPart from './KeyContentPart';

const RecordFieldWithHyperLink: FC<RecordFieldWithHyperLinkProps> = ({ inputArr, label, className }) => {
	const processedIdea: ReactNode[] = useMemo(
		() =>
			inputArr.map((input, index) =>
				index % 2 === 0 ? (
					input
				) : (
					<KeyContentPart key={index} input={input} showLabel pathToKey='RecordFieldWithHyperLink' />
				),
			),
		[inputArr],
	);

	return processedIdea.length ? (
		<div className={className}>
			<span className='font-bold'>{label}:&nbsp;&nbsp;</span>

			<span className='text-lg'>
				{processedIdea.map((el, key) => (
					<Fragment key={key}>{el}</Fragment>
				))}
			</span>
		</div>
	) : null;
};

export default RecordFieldWithHyperLink;
