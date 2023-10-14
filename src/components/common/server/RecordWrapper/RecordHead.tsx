'use client';

import PulsePlaceHolder from '@root/components/loading/PulsePlaceHolder';
import { useModuleId } from '@root/hooks/useModuleId';
import type { CommonRecord } from '@root/server/database/schema';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const CopyUrlButton = dynamic(() => import('@root/components/common/client/CopyUrlButton'), {
	ssr: false,
	loading: () => <PulsePlaceHolder className='aspect-square h-6 rounded-lg' />,
});

type RecordHeadProps = Omit<CommonRecord, 'keyWords'> & { currentId: string | undefined };

export default function RecordHead({ currentId, id, name }: RecordHeadProps) {
	const isCurrentRecord = currentId === id;

	const { moduleId } = useModuleId();

	return (
		<div className='card-title inline'>
			<span className='mr-2'>
				<CopyUrlButton className='btn-outline dark:shadow-md dark:shadow-current' url={`/${moduleId}/${id}`} />
			</span>

			<Link
				className={`dark:text-shadow-light-md ${
					isCurrentRecord ? 'pointer-events-none cursor-default' : 'link-hover link'
				}`}
				href={moduleId ? `/${moduleId}/${id}` : '/'}
				aria-label={name}
			>
				{name}
			</Link>
		</div>
	);
}
