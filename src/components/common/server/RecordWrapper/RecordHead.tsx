'use client';

import PulsePlaceHolder from '@root/components/loading/PulsePlaceHolder';
import { useModuleId } from '@root/hooks/useModuleId';
import type { CommonRecord } from '@root/server/database/postgresql/schema';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const CopyUrlButton = dynamic(() => import('@root/components/common/client/CopyUrlButton'), {
	ssr: false,
	loading: () => <PulsePlaceHolder className='my-auto mr-2 inline-flex aspect-square h-6 rounded-lg align-middle' />,
});

type RecordHeadProps = Omit<CommonRecord, 'keyWords'> & { currentId: string | undefined };

export default function RecordHead({ currentId, id, name }: RecordHeadProps) {
	const isCurrentRecord = currentId === id;

	const { moduleId } = useModuleId();

	return (
		<div className='card-title inline'>
			<CopyUrlButton
				className='btn-outline mr-2 align-middle dark:shadow-md dark:shadow-current'
				url={`/${moduleId}/${id}`}
			/>

			<Link
				className={`align-middle ${isCurrentRecord ? 'pointer-events-none cursor-default' : 'link-hover link'}`}
				href={moduleId ? `/${moduleId}/${id}` : '/'}
				aria-label={name}
			>
				{name}
			</Link>
		</div>
	);
}
