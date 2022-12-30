import { specialSeparator } from '@root/constants';
import type { DescriptionProps } from '@root/types/common/props';
import type { FC } from 'react';
import { useMemo } from 'react';

const Description: FC<DescriptionProps> = ({ description }) => {
	const descriptions = useMemo(() => description.split(specialSeparator).filter(Boolean), [description]);

	return (
		<ul className='max-w-fit list-disc pl-8 text-lg sm:max-w-[50%]'>
			{descriptions.map((desc, key) => (
				<li key={key}>{desc}</li>
			))}
		</ul>
	);
};

export default Description;
