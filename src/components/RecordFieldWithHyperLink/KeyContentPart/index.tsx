import { env } from '@root/env/client.mjs';
import { hyperLinkValidator, miscContentValidator } from '@root/types/common/zod';
import Link from 'next/link';
import type { FC } from 'react';
import { Fragment, useMemo } from 'react';

export type KeyContentPartProps = { input: string; showLabel?: boolean; pathToKey?: string };

const KeyContentPart: FC<KeyContentPartProps> = ({ input, showLabel, pathToKey }) => {
	const inputParse = useMemo(() => {
		try {
			return JSON.parse(input);
		} catch (error) {
			env.NEXT_PUBLIC_NODE_ENV === 'development' && console.log({ error, pathToKey });
		}
	}, [input, pathToKey]);

	const misc = useMemo(() => miscContentValidator.safeParse(inputParse), [inputParse]);

	const hyperLink = useMemo(() => hyperLinkValidator.safeParse(inputParse), [inputParse]);

	if (misc.success) return <span className='font-bold'>{misc.data.content}</span>;

	if (!hyperLink.success) return <>{input}</>;

	if (hyperLink.data.meta.type === 'RECORD')
		return (
			<>
				{showLabel && (
					<>
						<span className='capitalize'>{hyperLink.data.table.toLowerCase()}</span>&nbsp;
					</>
				)}
				<Link
					className='link link-info font-bold'
					href={{ pathname: `/${hyperLink.data.table.toLowerCase()}s/${hyperLink.data.meta.id}` }}
				>
					{hyperLink.data.meta.name}
				</Link>
			</>
		);

	if (hyperLink.data.meta.type === 'SEARCH')
		return (
			<Link
				className='link link-info font-bold capitalize'
				href={{ pathname: `/${hyperLink.data.table.toLowerCase()}s`, query: hyperLink.data.meta.search }}
			>
				{Object.values(hyperLink.data.meta.search)
					.filter(Boolean)
					.map((s, key) => (
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
