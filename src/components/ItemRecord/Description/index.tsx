import KeyContentPart from '@root/components/RecordFieldWithHyperLink/KeyContentPart';
import type { DescriptionProps } from '@root/types/common/props';
import type { FC } from 'react';

const Description: FC<DescriptionProps> = ({ description }) => {
	return (
		<ul className='max-w-fit list-disc pl-8 text-lg sm:max-w-[60%]'>
			{Object.entries(description).map(([key, value]) =>
				value ? (
					<li key={key}>
						<span className='inline font-bold capitalize'>{key.toLowerCase()}: </span>
						<KeyContentPart input={value} />
					</li>
				) : null,
			)}
		</ul>
	);
};

export default Description;
