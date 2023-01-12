import type { KeyContentPartProps } from '@root/types/common/props';
import { hyperLinkValidator, miscContentValidator } from '@root/types/common/zod';
import Link from 'next/link';
import type { FC } from 'react';
import { Fragment, useMemo } from 'react';

const KeyContentPart: FC<KeyContentPartProps> = ({ input }) => {
	const inputParse = useMemo(() => {
		try {
			return JSON.parse(input);
		} catch (error) {
			console.log({ error });
		}
	}, [input]);

	const misc = useMemo(() => miscContentValidator.safeParse(inputParse), [inputParse]);

	const hyperLink = useMemo(() => hyperLinkValidator.safeParse(inputParse), [inputParse]);

	if (misc.success) return <span className='font-bold'>{misc.data.content}</span>;

	if (!hyperLink.success) return <>{input}</>;

	if (hyperLink.data.meta.type === 'record')
		return (
			<>
				{hyperLink.data.path.replace('/', '').replace('s', '')}&nbsp;
				<Link
					className='link link-info font-bold'
					href={{ pathname: `${hyperLink.data.path}/${hyperLink.data.meta.id}` }}
				>
					{hyperLink.data.meta.name}
				</Link>
			</>
		);

	if (hyperLink.data.meta.type === 'search')
		return (
			<Link
				className='link link-neutral font-bold capitalize'
				href={{ pathname: hyperLink.data.path, query: hyperLink.data.meta.search }}
			>
				{Object.values(hyperLink.data.meta.search).map((s, key) => (
					<Fragment key={key}>
						{key > 0 ? ', ' : ''}
						{s?.toString().replaceAll('_', ' ').toLowerCase()}
					</Fragment>
				))}
			</Link>
		);

	return <>{input}</>;
};

export default KeyContentPart;
