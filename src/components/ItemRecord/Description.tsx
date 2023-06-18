import Hyperlink from '@root/components/Hyperlink';
import type { ItemDescription } from '@root/server/db/schema';

type DescriptionProps = { description: ItemDescription };

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
							<Hyperlink input={value} className='link-info link' />
						)}
					</li>
				),
			)}
		</ul>
	);
}
