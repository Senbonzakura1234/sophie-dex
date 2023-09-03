import Hyperlink from '@root/components/layout/server/Hyperlink';
import type { ItemDescription } from '@root/db/schema';

type DescriptionProps = { description: ItemDescription };

export default function Description({ description }: DescriptionProps) {
	return (
		<ul className='max-w-[90%] list-disc pl-8 text-lg'>
			{Object.entries(description).map(([key, value]) =>
				!value || (Array.isArray(value) && !value.length) ? null : (
					<li key={key}>
						<span className='inline capitalize'>{key.toLowerCase()}: </span>

						{typeof value === 'string' ? (
							value
						) : Array.isArray(value) ? (
							<span className='font-bold'>{value.join(', ')}</span>
						) : (
							<Hyperlink input={value} className='link-primary link visited:link-accent' />
						)}
					</li>
				),
			)}
		</ul>
	);
}
