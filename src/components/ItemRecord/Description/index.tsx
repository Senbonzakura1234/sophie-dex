import type { DescriptionProps } from '@root/types/common/props';
import type { FC } from 'react';

const Description: FC<DescriptionProps> = ({ description: { location, hunt, rumor, shop, special } }) => {
	return (
		<ul className='max-w-fit list-disc pl-8 text-lg sm:max-w-[50%]'>
			{location && (
				<li>
					<span className='inline font-bold'>Location:</span> {location}
				</li>
			)}

			{hunt && (
				<li>
					<span className='inline font-bold'>Hunt:</span> {hunt}
				</li>
			)}

			{rumor && (
				<li>
					<span className='inline font-bold'>Rumor:</span> {rumor}
				</li>
			)}

			{shop && (
				<li>
					<span className='inline font-bold'>Shop:</span> {shop}
				</li>
			)}

			{special && (
				<li>
					<span className='inline font-bold'>Special:</span> {special}
				</li>
			)}
		</ul>
	);
};

export default Description;
