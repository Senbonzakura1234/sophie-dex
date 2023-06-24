import { PageRefresh } from '@root/components/ui/dynamic';
import PageTitle from '../PageTitle';

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
