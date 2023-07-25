import DocumentChartBarIcon from '@root/assets/icons/outline/DocumentChartBarIcon';
import LinkIcon from '@root/assets/icons/solid/LinkIcon';
import { useModuleId } from '@root/hooks/useModuleId';
import type { CommonRecord } from '@root/types/model';
import Link from 'next/link';

type RecordHeadProps = Omit<CommonRecord, 'keyWords'> & { currentId: string | undefined };

export default function RecordHead({ currentId, id, name }: RecordHeadProps) {
	const isCurrentRecord = currentId === id;
	const moduleId = useModuleId();

	const Icon = isCurrentRecord ? DocumentChartBarIcon : LinkIcon;

	return (
		<div className='card-title'>
			<Link
				className={isCurrentRecord ? 'pointer-events-none cursor-default' : 'link-hover link'}
				href={{ pathname: `/${moduleId}/[id]`, query: { id } }}
				aria-label={name}
				role='navigation'
			>
				<span className='flex gap-2 font-roboto'>
					<Icon className='my-auto aspect-square h-4' />
					<span>{name}</span>
				</span>
			</Link>
		</div>
	);
}
