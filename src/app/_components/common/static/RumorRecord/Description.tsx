import Hyperlink from '@components/layout/static/Hyperlink';
import type { HyperLinkMap } from '@root/server/postgresql/schema';
import { Fragment } from 'react';

type DescriptionProps = {
	description: HyperLinkMap;
	search: string | undefined;
};

export default function Description({ description: { contentText, contentData }, search }: DescriptionProps) {
	return (
		<div>
			<span>Description:&nbsp;&nbsp;</span>

			<span className='text-lg font-bold'>
				{contentText.map((text, key) => {
					const data = contentData[parseInt(text.replace('keyMap-', ''))];

					return typeof data === 'undefined' ? (
						<Fragment key={key}>{text}</Fragment>
					) : (
						<Hyperlink
							search={search}
							key={key}
							input={data}
							classNames={{ label: '', link: 'link link-primary visited:link-accent' }}
						/>
					);
				})}
			</span>
		</div>
	);
}
