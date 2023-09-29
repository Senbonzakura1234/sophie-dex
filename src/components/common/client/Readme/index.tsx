'use client';

import CommonWrapper from '@root/components/common/server/CommonWrapper';
import README from './README.mdx';

export default function Readme() {
	return (
		<CommonWrapper className='prose h-auto max-w-none [&>*>*]:mb-1 [&>*>*]:mt-0 [&>*>h1]:text-primary [&>*>h2]:text-accent'>
			<README />
		</CommonWrapper>
	);
}
