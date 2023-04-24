import type { ITEM_DESCRIPTION } from '@prisma/client';
import NewHyperlink from '@root/components/NewHyperlink';
import type { FC } from 'react';

type DescriptionProps = { description: ITEM_DESCRIPTION };

const Description: FC<DescriptionProps> = ({ description }) => (
	<ul className='max-w-fit list-disc pl-8 text-lg sm:max-w-[60%]'>
		{Object.entries(description).map(([key, value]) =>
			value ? (
				<li key={key}>
					<span className='inline font-bold capitalize'>{key.toLowerCase()}: </span>

					{typeof value === 'string' ? (
						value
					) : Array.isArray(value) ? (
						value.join(', ')
					) : (
						<NewHyperlink input={value} className='link link-info' />
					)}
				</li>
			) : null,
		)}
	</ul>
);

export default Description;
