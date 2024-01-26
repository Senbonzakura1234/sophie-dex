'use client';

import PulsePlaceHolder from '@components/loading/PulsePlaceHolder';
import { useModuleId } from '@root/hooks/useModuleId';
import type { CommonRecord } from '@root/server/database/postgresql/schema';
import { cn, highlightSearchedText } from '@root/utils/common';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const ShareButton = dynamic(() => import('@components/common/dynamic/ShareButton'), {
	ssr: false,
	loading: () => <PulsePlaceHolder className='my-auto mr-2 inline-flex aspect-square h-6 rounded-lg align-middle' />,
});

type RecordHeadProps = Omit<CommonRecord, 'keyWords'> & { currentId?: string; search?: string };

export default function RecordHead({ currentId, id, name, search }: RecordHeadProps) {
	const isCurrentRecord = currentId === id;

	const { moduleId } = useModuleId();

	return (
		<div className='card-title inline'>
			<ShareButton
				className='btn-outline mr-2 align-middle dark:shadow-md dark:shadow-current'
				input={{ text: name, title: name, url: `/${moduleId}/${id}` }}
			/>

			<Link
				className={cn('align-middle', isCurrentRecord ? 'pointer-events-none' : 'link-hover link')}
				href={moduleId ? `/${moduleId}/${id}` : '/'}
				aria-label={name}
				dangerouslySetInnerHTML={{ __html: highlightSearchedText(name, search) }}
			/>
		</div>
	);
}
