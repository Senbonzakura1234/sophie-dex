import ScrollWrapper from '@root/components/ScrollWrapper';
import type { RootLayoutProps } from '@root/types/common/props';
import type { FC } from 'react';

import HeadLayout from './HeadLayout';

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
	return (
		<main>
			<HeadLayout />

			<ScrollWrapper className='bg-base-200 h-screen w-screen !antialiased' enableScrollTop>
				{children}
			</ScrollWrapper>
		</main>
	);
};

export default RootLayout;
