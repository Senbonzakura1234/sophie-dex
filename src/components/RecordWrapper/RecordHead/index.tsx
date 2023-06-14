import { DocumentChartBarIcon } from '@heroicons/react/24/outline';
import { LinkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

type RecordHeadProps = { name: string; id: string; isCurrentRecord: boolean; pathname: string };

export default function RecordHead({ id, isCurrentRecord, pathname, name }: RecordHeadProps) {
	return (
		<div className='card-title'>
			<Link
				href={{ pathname: `${pathname}/${id}` }}
				as={{ pathname: `${pathname}/${id}` }}
				className={isCurrentRecord ? 'pointer-events-none cursor-default' : 'link-hover link'}
				aria-label={name}
			>
				<span className='flex gap-2 font-serif'>
					<LinkIcon className={`my-auto h-4 w-4 ${isCurrentRecord && 'hidden'}`} />
					<DocumentChartBarIcon className={`my-auto h-4 w-4 ${!isCurrentRecord && 'hidden'}`} />
					{name}
				</span>
			</Link>
		</div>
	);
}
