import type { ITEM_DESCRIPTION } from '@prisma/client';
import Hyperlink from '@root/components/Hyperlink';

type DescriptionProps = { description: ITEM_DESCRIPTION };

export default function Description({ description }: DescriptionProps) {
	return (
		<ul className='max-w-fit list-disc pl-8 text-lg sm:max-w-[80%]'>
			{Object.entries(description).map(([key, value]) =>
				!value || (Array.isArray(value) && !value.length) ? null : (
					<li key={key}>
						<span className='inline capitalize'>{key.toLowerCase()}: </span>

						{typeof value === 'string' ? (
							value
						) : Array.isArray(value) ? (
							<span className='font-bold'>{value.join(', ')}</span>
						) : (
							<Hyperlink input={value} className='link link-info' />
						)}
					</li>
				),
			)}
		</ul>
	);
}
