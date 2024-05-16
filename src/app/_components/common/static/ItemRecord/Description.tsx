import Hyperlink from '@components/layout/static/Hyperlink';
import type { ItemDescription } from '@root/server/postgresql/schema';
import { entries } from '@root/utils/common';

type DescriptionProps = { description: ItemDescription; search: string | undefined };

export default function Description({ description, search }: DescriptionProps) {
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
								className={Array.isArray(value) ? 'normal-case' : 'link link-primary visited:link-accent'}
								input={Array.isArray(value) ? { content: value.join(', ') } : value}
								search={search}
							/>
						)}
					</li>
				),
			)}
		</ul>
	);
}
