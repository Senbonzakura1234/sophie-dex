import Hyperlink from '@components/layout/static/Hyperlink';
import type { HyperLinkMap } from '@root/server/database/postgresql/schema';
import { Fragment } from 'react';

type DescriptionProps = {
	description: HyperLinkMap;
};

export default function Description({ description: { contentText, contentData } }: DescriptionProps) {
	return (
		<div>
			<span>Description:&nbsp;&nbsp;</span>

			<span className='text-lg font-bold'>
				{contentText.map((text, key) => {
					const data = contentData[parseInt(text.replace('keyMap-', ''))];

					return typeof data === 'undefined' ? (
						<Fragment key={key}>{text}</Fragment>
					) : (
						<Hyperlink key={key} input={data} className='link link-primary visited:link-accent' />
					);
				})}
			</span>
		</div>
	);
}
