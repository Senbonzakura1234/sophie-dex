import CommonWrapper from '@root/components/common/server/CommonWrapper';
import { getReadme } from '@root/utils/server';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function ReadmeWrapper() {
	const readme = await getReadme();

	return (
		<CommonWrapper>
			<div className='prose text-primary'>
				<MDXRemote source={readme} />
			</div>
		</CommonWrapper>
	);
}
