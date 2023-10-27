import LicenseInfo from '@components/common/server/LicenseInfo';
import { ApiServerCtx } from '@root/utils/server/trpc';

export default async function APILicenseInfoWrapper() {
	const data = await ApiServerCtx.about.license.fetch();

	return <LicenseInfo licenseInfo={data} />;
}
