import Hyperlink from '@root/components/layout/server/Hyperlink';
import type { ItemDescription } from '@root/server/database/schema';
import { entries } from '@root/utils/common';

type DescriptionProps = { description: ItemDescription };

export default function Description({ description }: DescriptionProps) {
	return (
		<ul className='max-w-[90%] list-disc pl-8 text-lg'>
			{entries(description).map(([key, value]) =>
				!value || (Array.isArray(value) && !value.length) ? null : (
					<li key={key}>
						<span className='inline text-base capitalize'>{key.toLowerCase()}: </span>

						{typeof value === 'string' ? (
							value
						) : (
							<Hyperlink
								input={Array.isArray(value) ? { content: value.join(', ') } : value}
								className={Array.isArray(value) ? 'normal-case' : 'link-info link visited:link-accent'}
							/>
						)}
					</li>
				),
			)}
		</ul>
	);
}
