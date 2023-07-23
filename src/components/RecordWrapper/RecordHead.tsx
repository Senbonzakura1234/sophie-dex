import DocumentChartBarIcon from '@root/assets/icons/outline/DocumentChartBarIcon';
import LinkIcon from '@root/assets/icons/solid/LinkIcon';
import type { ModuleIdProps } from '@root/types/common/props';
import type { CommonRecord } from '@root/types/model';
import Link from 'next/link';

type RecordHeadProps = ModuleIdProps & Omit<CommonRecord, 'keyWords'> & { currentId: string | undefined };

export default function RecordHead({ currentId, id, name, moduleId }: RecordHeadProps) {
	const isCurrentRecord = currentId === id;

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
