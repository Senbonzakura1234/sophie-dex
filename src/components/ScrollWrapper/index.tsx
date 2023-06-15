import { Root, Scrollbar, Thumb, Viewport } from '@radix-ui/react-scroll-area';
import type { ChildrenProps, ClassNameProps } from '@root/types/common/props';
import { useScroll } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

import dynamic from 'next/dynamic';

const ScrollToTop = dynamic(() => import('./ScrollToTop'));

type ScrollWrapperProps = ChildrenProps & ClassNameProps & { enableScrollTop?: boolean };

export default function ScrollWrapper({ children, className, enableScrollTop }: ScrollWrapperProps) {
	const scrollableRef = useRef<HTMLDivElement>(null);

	const { pathname, query } = useRouter();

	const [isShowScrollTop, setIsShowScrollTop] = useState(false);

	const { scrollYProgress } = useScroll({ container: scrollableRef });

	useEffect(() => {
		scrollYProgress.on('change', e => {
			if (!scrollableRef.current || scrollableRef.current.scrollHeight < 2 * scrollableRef.current.offsetHeight)
				return setIsShowScrollTop(false);
			if (e > 0.6 && !isShowScrollTop) return setIsShowScrollTop(true);
			if (e <= 0.6 && isShowScrollTop) return setIsShowScrollTop(false);
		});
	}, [isShowScrollTop, scrollYProgress]);

	useEffect(() => {
		if (scrollableRef?.current && enableScrollTop) scrollableRef.current.scrollTo({ top: 0, behavior: 'smooth' });
	}, [enableScrollTop, pathname, query, scrollableRef]);

	return (
		<Root className={`scroll-area-root ${className}`} type='scroll'>
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
}
