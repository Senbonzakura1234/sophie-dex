import PageTitle from '../PageTitle';

import dynamic from 'next/dynamic';

const PageRefresh = dynamic(() => import('@root/components/ui/PageRefresh'));

export default function HomeLayout() {
	return (
		<>
			<PageRefresh />
			<div className='h-screen w-screen bg-base-200 !antialiased'>
				<PageTitle />
			</div>
		</>
	);
}
