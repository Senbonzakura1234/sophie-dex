'use client';

import CaretLeftIcon from '@components/icons/solid/CaretLeftIcon';
import DocumentChartBarIcon from '@components/icons/solid/DocumentChartBarIcon';
import PulsePlaceHolder from '@components/loading/PulsePlaceHolder';
import { useModuleId } from '@root/hooks/useModuleId';
import type { CommonRecord } from '@root/server/postgresql/schema';
import { cn, highlightSearchedText } from '@root/utils/common';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import BookmarkBtn from './BookmarkBtn';

const ShareButton = dynamic(() => import('@components/common/dynamic/ShareButton'), {
	ssr: false,
	loading: () => <PulsePlaceHolder className='my-auto h-6 w-20 rounded-lg' />,
});

type RecordHeadProps = Omit<CommonRecord, 'keyWords'> & { currentId?: string; search?: string };

export default function RecordHead({ currentId, id, name, search }: RecordHeadProps) {
	const isCurrentRecord = currentId === id;

	const { moduleId } = useModuleId();

	const { back } = useRouter();

	if (!moduleId) return null;

	return (
		<>
			<div className='card-title inline'>
				{isCurrentRecord ? (
					<button onClick={back} className='btn btn-link btn-primary btn-xs mr-2 gap-0 pl-1 align-middle'>
						<CaretLeftIcon className='size-5' /> Back
					</button>
				) : (
					<DocumentChartBarIcon className='mr-2 inline size-5 align-middle text-primary' />
				)}

				<Link
					className={cn('align-middle', isCurrentRecord ? 'pointer-events-none' : 'link-hover link')}
					href={moduleId ? `/${moduleId}/${id}` : '/'}
					aria-label={name}
					dangerouslySetInnerHTML={{ __html: highlightSearchedText(name, search) }}
				/>
			</div>

			<nav className='flex gap-2'>
				<ShareButton
					classNames={{
						wrapper: '!btn-outline w-20 capitalize dark:shadow-md dark:shadow-current',
						icon: 'size-3',
					}}
					input={{ text: name, title: name, url: `/${moduleId}/${id}` }}
				>
					share
				</ShareButton>

				<BookmarkBtn id={id} name={name} moduleId={moduleId} />
			</nav>
		</>
	);
}
