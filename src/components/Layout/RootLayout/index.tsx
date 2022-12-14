import ScrollToTop from '@root/components/ScrollToTop';
import ScrollWrapper from '@root/components/ScrollWrapper';
import type { RootLayoutProps } from '@root/types/common/props';
import type { FC } from 'react';
import useScrollableRef from 'use-scrollable-ref';

import HeadLayout from './HeadLayout';

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
	const { scrollableRef, scrollPosition, scrollableBottomReached, scrollHeight } = useScrollableRef({
		bottomThreshold: 50,
	});

	return (
		<div>
			<HeadLayout />

			<ScrollWrapper refObject={scrollableRef} className='bg-base-200 h-screen w-screen !antialiased'>
				{children}
				<ScrollToTop
					scrollableBottomReached={scrollableBottomReached && scrollHeight > 2500}
					refObject={scrollableRef}
					scrollPosition={scrollPosition}
				/>
			</ScrollWrapper>
		</div>
	);
};

export default RootLayout;
