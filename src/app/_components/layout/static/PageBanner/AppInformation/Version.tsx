import { getVersion } from '@root/utils/server/fetch';

export default async function Version() {
	const { result } = await getVersion();

	return (
		<div className='mx-auto block rounded-full bg-primary px-3 py-1 text-xs font-bold leading-none text-primary-content shadow-lg shadow-base-content/30'>
			v{result?.version}
		</div>
	);
}
