import Hyperlink from '@components/layout/static/Hyperlink';
import type { ItemDescription } from '@root/server/postgresql/schema';
import { entries } from '@root/utils/common';
import { Fragment } from 'react';

type Props = Readonly<{ description: ItemDescription; search: string | undefined }>;

export default function Description({ description, search }: Props) {
	return (
		<ul className='max-w-[90%] list-disc pl-8 text-lg'>
			{entries(description).map(([key, value]) =>
				!value || (Array.isArray(value) && !value.length) ? null : (
					<li key={key}>
						<span className='inline text-base capitalize'>{key.toLowerCase()}: </span>

						{typeof value === 'string' ? (
							value
						) : Array.isArray(value) ? (
							value.map((v, k) => (
								<Fragment key={k}>
									<Hyperlink input={{ content: v.replaceAll('.', '') }} search={search} />
									{k <= value.length - 2 ? ' - ' : null}
								</Fragment>
							))
						) : (
							<Hyperlink
								classNames={{ link: 'link link-primary visited:link-accent !text-sm' }}
								input={value}
								search={search}
							/>
						)}
					</li>
				)
			)}
		</ul>
	);
}
