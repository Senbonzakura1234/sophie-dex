import ProfileInfo from '@components/common/server/ProfileInfo';
import { ApiServerCtx } from '@root/utils/server/trpc';

export default async function APIProfileInfoWrapper() {
	const data = await ApiServerCtx.about.profile.fetch();

	return <ProfileInfo profileInfo={data} />;
}
