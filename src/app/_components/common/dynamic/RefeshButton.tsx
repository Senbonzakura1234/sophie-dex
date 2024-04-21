'use client';

import { useRouter } from 'next/navigation';

export default function RefreshButton() {
	const { refresh } = useRouter();

	return (
		<>
			<span className='divider m-0'>or</span>

			<button
				aria-label='refresh page'
				className='link-hover link link-primary text-xs font-bold capitalize md:text-sm'
				onClick={refresh}
			>
				refresh
			</button>
		</>
	);
}
