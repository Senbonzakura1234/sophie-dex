'use client';

import './index.css';

import CommonWrapper from '@components/common/server/CommonWrapper';
import README from './README.mdx';

export default function Readme() {
	return (
		<CommonWrapper className='readme h-auto'>
			<README />
		</CommonWrapper>
	);
}
