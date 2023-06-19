import DocumentChartBarIcon from '@root/assets/icons/outline/DocumentChartBarIcon';
import LinkIcon from '@root/assets/icons/solid/LinkIcon';
import Link from 'next/link';

type RecordHeadProps = { name: string; id: string; isCurrentRecord: boolean; pathname: string };

export default function RecordHead({ id, isCurrentRecord, pathname, name }: RecordHeadProps) {
	const Icon = isCurrentRecord ? DocumentChartBarIcon : LinkIcon;

	return (
		<div className='card-title'>
			<Link
				className={isCurrentRecord ? 'pointer-events-none cursor-default' : 'link-hover link'}
				href={{ pathname: `${pathname}/${id}` }}
				aria-label={name}
				prefetch={false}
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
