import DocumentChartBarIcon from '@root/assets/icons/outline/DocumentChartBarIcon';
import LinkIcon from '@root/assets/icons/solid/LinkIcon';
import { useModuleId } from '@root/hooks/useModuleId';
import type { CommonRecord } from '@root/types/model';
import Link from 'next/link';
import CopyUrlButton from '../ui/static/CopyUrlButton';

type RecordHeadProps = Omit<CommonRecord, 'keyWords'> & { currentId: string | undefined };

export default function RecordHead({ currentId, id, name }: RecordHeadProps) {
	const isCurrentRecord = currentId === id;
	const moduleId = useModuleId();

	const Icon = isCurrentRecord ? DocumentChartBarIcon : LinkIcon;

	const recordUrlObj = { pathname: `/${moduleId}/[id]`, query: { id } };

	return (
		<div className='card-title'>
			<Link
				className={isCurrentRecord ? 'pointer-events-none cursor-default' : 'link-hover link'}
				href={recordUrlObj}
				aria-label={name}
				role='navigation'
			>
				<span className='flex gap-2 font-roboto'>
					<Icon className='my-auto aspect-square h-4' />
					<span>{name}</span>
				</span>
			</Link>

			<CopyUrlButton url={recordUrlObj} />
		</div>
	);
}
