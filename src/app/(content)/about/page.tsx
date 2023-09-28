import LicenseInfo from '@root/components/layout/server/LicenseInfo';
import Profile from '@root/components/layout/server/Profile';
import ReadmeWrapper from '@root/components/layout/server/ReadmeWrapper';

export default async function About() {
	return (
		<>
			<div className='order-1 flex flex-col gap-6 lg:order-2'>
				<Profile />
				<ReadmeWrapper />
			</div>

			<LicenseInfo />
		</>
	);
}
