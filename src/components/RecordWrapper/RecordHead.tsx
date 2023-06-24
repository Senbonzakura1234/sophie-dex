import DocumentChartBarIcon from '@root/assets/icons/outline/DocumentChartBarIcon';
import LinkIcon from '@root/assets/icons/solid/LinkIcon';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { ModuleIdProps } from '@root/types/common/props';
import Link from 'next/link';

type RecordHeadProps = ModuleIdProps & { name: string; id: string };

export default function RecordHead({ id, name, moduleId }: RecordHeadProps) {
	const { securedIdQuery } = useIdQuery();

	const isCurrentRecord = securedIdQuery.id === id;

	const Icon = isCurrentRecord ? DocumentChartBarIcon : LinkIcon;

	return (
		<div className='card-title'>
			<Link
				className={isCurrentRecord ? 'pointer-events-none cursor-default' : 'link-hover link'}
				href={{ pathname: `/${moduleId}/[id]`, query: { id } }}
				aria-label={name}
				role='navigation'
			>
				<span className='flex gap-2 font-serif'>
					<Icon className='my-auto h-4 w-4' />
					{name}
				</span>
			</Link>
		</div>
	);
}
