import { CopyUrlButton } from '@root/components/ui/dynamic';
import { useModuleId } from '@root/hooks/useModuleId';
import type { CommonRecord } from '@root/types/model';
import Link from 'next/link';

type RecordHeadProps = Omit<CommonRecord, 'keyWords'> & { currentId: string | undefined };

export default function RecordHead({ currentId, id, name }: RecordHeadProps) {
	const isCurrentRecord = currentId === id;
	const moduleId = useModuleId();

	const recordUrlObj = { pathname: `/${moduleId}/[id]`, query: { id } };

	return (
		<div className='card-title inline'>
			<CopyUrlButton className='btn-outline mr-2' url={recordUrlObj} />

			<Link
				className={`font-roboto ${isCurrentRecord ? 'pointer-events-none cursor-default' : 'link-hover link'}`}
				href={recordUrlObj}
				aria-label={name}
				role='navigation'
			>
				{name}
			</Link>
		</div>
	);
}
