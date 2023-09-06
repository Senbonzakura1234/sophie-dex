'use client';

import { useModuleId } from '@root/hooks/useModuleId';

export default function PageTitle() {
	const moduleId = useModuleId();

	return (
		<div className='text-shadow-dark-md text-5xl font-bold capitalize tracking-widest text-slate-50 xl:text-6xl 2xl:text-7xl'>
			{moduleId}
		</div>
	);
}
