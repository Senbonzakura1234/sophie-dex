import { Root, Scrollbar, Thumb, Viewport } from '@radix-ui/react-scroll-area';
import type { ChildrenProps, ClassNameProps } from '@root/types/common/props';
import clsx from 'clsx';
import { useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import ScrollToTop from './ScrollToTop';

type ScrollWrapperProps = ChildrenProps & ClassNameProps & { enableScrollTop?: boolean };

const ScrollWrapper = ({ children, className, enableScrollTop }: ScrollWrapperProps) => {
	const scrollableRef = useRef<HTMLDivElement>(null);

	const [isShowScrollTop, setIsShowScrollTop] = useState(false);

	const { scrollYProgress } = useScroll({ container: scrollableRef });

	useEffect(() => {
		scrollYProgress.on('change', e => {
			if (!scrollableRef.current || scrollableRef.current.scrollHeight < 1500) return;
			if (e > 0.6 && !isShowScrollTop) return setIsShowScrollTop(true);
			if (e <= 0.6 && isShowScrollTop) return setIsShowScrollTop(false);
		});
	}, [isShowScrollTop, scrollYProgress]);

	return (
		<Root className={clsx('scroll-area-root', className)} type='scroll'>
			<Viewport
				className='scroll-area-viewport scroll-wrapper scroll-wrapper-horizontal relative h-full w-full'
				ref={scrollableRef}
			>
				{children}
			</Viewport>

			<Scrollbar className='scroll-area-scrollbar' orientation='vertical'>
				<Thumb className='scroll-area-thumb' />
			</Scrollbar>

			{enableScrollTop && <ScrollToTop isShow={isShowScrollTop} refObject={scrollableRef} />}
		</Root>
	);
};

export default ScrollWrapper;
