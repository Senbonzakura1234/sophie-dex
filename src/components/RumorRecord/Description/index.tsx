import type { HYPER_LINK_MAP } from '@prisma/client';
import NewHyperlink from '@root/components/NewHyperlink';
import type { FC } from 'react';
import { Fragment } from 'react';

type DescriptionProps = {
	description: HYPER_LINK_MAP;
};

const Description: FC<DescriptionProps> = ({
	description: { contentText, highlightTextMap, linkRecordMap, linkSearchMap },
}) => (
	<div>
		<span className='font-bold'>Description:&nbsp;&nbsp;</span>

		<span className='text-lg'>
			{contentText.map((text, key) => {
				let data = undefined;

				if (text.includes('linkRecordMap-')) data = linkRecordMap[parseInt(text.replace('linkRecordMap-', ''))];

				if (text.includes('linkSearchMap-')) data = linkSearchMap[parseInt(text.replace('linkSearchMap-', ''))];

				if (text.includes('highlightTextMap-'))
					data = highlightTextMap[parseInt(text.replace('highlightTextMap-', ''))];

				return data ? (
					<NewHyperlink key={key} input={data} className='link link-info' />
				) : (
					<Fragment key={key}>{text}</Fragment>
				);
			})}
		</span>
	</div>
);

export default Description;
