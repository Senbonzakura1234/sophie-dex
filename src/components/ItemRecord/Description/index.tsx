import type { ITEM_DESCRIPTION } from '@prisma/client';
import KeyContentPart from '@root/components/RecordFieldWithHyperLink/KeyContentPart';
import type { FC } from 'react';

type DescriptionProps = { description: ITEM_DESCRIPTION };

const Description: FC<DescriptionProps> = ({ description }) => (
	<ul className='max-w-fit list-disc pl-8 text-lg sm:max-w-[60%]'>
		{Object.entries(description).map(([key, value]) =>
			value ? (
				<li key={key}>
					<span className='inline font-bold capitalize'>{key.toLowerCase()}: </span>
					<KeyContentPart input={value} pathToKey='Description' />
				</li>
			) : null,
		)}
	</ul>
);

export default Description;
