import Hyperlink from '@root/components/Hyperlink';
import type { HyperLinkMap } from '@root/server/db/schema';
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
					let data = undefined;

					if (text.includes('keyMap-')) data = contentData[parseInt(text.replace('keyMap-', ''))];

					return data ? (
						<Hyperlink key={key} input={data} className='link link-info' />
					) : (
						<Fragment key={key}>{text}</Fragment>
					);
				})}
			</span>
		</div>
	);
}
