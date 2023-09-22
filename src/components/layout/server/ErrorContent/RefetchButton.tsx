'use client';

import useSelector from '@root/hooks/useSelector';

export default function RefetchButton() {
	const {
		contentData: { refetch },
	} = useSelector();

	if (!refetch) return null;

	return (
		<>
			<span className='divider m-0'>or</span>

			<button className='link-hover link-primary link text-xs font-bold capitalize md:text-sm' onClick={refetch}>
				refresh
			</button>
		</>
	);
}
