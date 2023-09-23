import Hyperlink from '@root/components/layout/server/Hyperlink';
import type { HyperLinkMap } from '@root/server/database/schema';
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
						<Hyperlink key={key} input={data} className='link-info link visited:link-accent' />
					);
				})}
			</span>
		</div>
	);
}
