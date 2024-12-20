import DocumentChartBarIcon from '@components/icons/solid/DocumentChartBarIcon';
import PulsePlaceHolder from '@components/loading/PulsePlaceHolder';
import type { CommonRecord } from '@root/server/postgresql/schema';
import { cn, highlightSearchedText } from '@root/utils/common';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Suspense } from 'react';
import BookmarkBtn from './BookmarkBtn';

const ShareButton = dynamic(() => import('@components/common/dynamic/ShareButton'), {
	loading: () => <PulsePlaceHolder className='h-6 w-24 rounded-lg' />
});

const BackButton = dynamic(() => import('./BackButton'), {
	loading: () => <PulsePlaceHolder className='mr-2 h-6 w-[61px] rounded-lg' />
});

type Props = Readonly<Omit<CommonRecord, 'keyWords'> & { currentId?: string; search?: string }>;

export default function RecordHead({ currentId, id, name, search, moduleId }: Props) {
	const isCurrentRecord = currentId === id;

	return (
		<>
			<div className='card-title inline'>
				{isCurrentRecord ? (
					<BackButton
						classNames={{
							icon: 'size-5',
							wrapper: 'btn btn-link capitalize btn-primary btn-xs mr-2 gap-0 pl-1 align-middle'
						}}
					>
						back
					</BackButton>
				) : (
					<DocumentChartBarIcon className='mr-2 inline size-5 align-middle text-primary' />
				)}

				<Link
					className={cn('align-middle', isCurrentRecord ? 'pointer-events-none' : 'link-hover link')}
					href={moduleId ? `/${moduleId}/${id}` : '/'}
					aria-label={name}
					dangerouslySetInnerHTML={{ __html: highlightSearchedText(name, search) }}
					scroll={false}
				/>
			</div>

			<nav className='flex gap-2'>
				<ShareButton
					classNames={{
						wrapper: '!btn-outline w-24 capitalize !shadow-md !shadow-current',
						icon: 'size-3'
					}}
					input={{ text: name, title: name, url: `/${moduleId}/${id}` }}
					showText
				/>

				<Suspense fallback={<PulsePlaceHolder className='h-6 w-24 rounded-lg' />}>
					<BookmarkBtn id={id} name={name} moduleId={moduleId} />
				</Suspense>
			</nav>
		</>
	);
}
