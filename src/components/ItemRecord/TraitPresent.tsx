import DocumentChartBarIcon from '@root/assets/icons/solid/DocumentChartBarIcon';
import type { HyperLinkRecord } from '@root/server/db/schema';
import Link from 'next/link';
import CopyUrlButton from '../ui/static/CopyUrlButton';

type TraitPresentProps = { traitPresent: HyperLinkRecord };

export default function TraitPresent({ traitPresent: { table: moduleId, id, name } }: TraitPresentProps) {
	const recordUrlObj = { pathname: `/${moduleId}/[id]`, query: { id } };

	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='font-bold capitalize'>{moduleId}: </div>

			<Link aria-label={name} className='link-hover link' href={recordUrlObj} role='navigation'>
				<span className='flex gap-1 font-roboto font-bold'>
					<DocumentChartBarIcon className='my-auto aspect-square h-4' />
					{name}
				</span>
			</Link>

			<CopyUrlButton url={recordUrlObj} />
		</div>
	);
}
