import Hyperlink from '@root/components/layout/server/Hyperlink';
import type { HyperLinkMap } from '@root/server/database/schema';
import { Fragment } from 'react';

type DescriptionProps = {
	description: HyperLinkMap;
};

export default function Description({ description: { contentText, contentData } }: DescriptionProps) {
	return (
		<div>
			<span className='font-bold'>Description:&nbsp;&nbsp;</span>

			<span className='text-lg'>
				{contentText.map((text, key) => {
					const data = contentData[parseInt(text.replace('keyMap-', ''))];

					return typeof data === 'undefined' ? (
						<Fragment key={key}>{text}</Fragment>
					) : (
						<Hyperlink key={key} input={data} className='link-primary link visited:link-accent' />
					);
				})}
			</span>
		</div>
	);
}
