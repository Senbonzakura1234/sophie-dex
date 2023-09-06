'use client';

import CopyUrlButton from '@root/components/common/client/CopyUrlButton';
import { useModuleId } from '@root/hooks/useModuleId';
import type { CommonRecord } from '@root/types/model';
import Link from 'next/link';

type RecordHeadProps = Omit<CommonRecord, 'keyWords'> & { currentId: string | undefined };

export default function RecordHead({ currentId, id, name }: RecordHeadProps) {
	const isCurrentRecord = currentId === id;

	const moduleId = useModuleId();

	return (
		<div className='card-title inline'>
			<span className='mr-2'>
				<CopyUrlButton className='btn-outline' url={`/${moduleId}/${id}`} />
			</span>

			<Link
				className={isCurrentRecord ? 'pointer-events-none cursor-default' : 'link-hover link'}
				href={`/${moduleId}/${id}`}
				aria-label={name}
				role='navigation'
			>
				{name}
			</Link>
		</div>
	);
}