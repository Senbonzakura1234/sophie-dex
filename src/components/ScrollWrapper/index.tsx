import { Corner, Root, Scrollbar, Thumb, Viewport } from '@radix-ui/react-scroll-area';
import clsx from 'clsx';
import type { FC, ReactNode, RefObject } from 'react';

const ScrollWrapper: FC<{ children?: ReactNode; scrollRef?: RefObject<HTMLDivElement>; className?: string }> = ({
	children,
	scrollRef,
	className,
}) => {
	return (
		<Root className={clsx('ScrollAreaRoot', className)} type='hover'>
			<Viewport className='ScrollAreaViewport scroll-wrapper relative h-full w-full scroll-smooth' ref={scrollRef}>
				{children}
			</Viewport>
			<Scrollbar className='ScrollAreaScrollbar' orientation='vertical' forceMount={true}>
				<Thumb className='ScrollAreaThumb' />
			</Scrollbar>
			<Scrollbar className='ScrollAreaScrollbar' orientation='horizontal'>
				<Thumb className='ScrollAreaThumb' />
			</Scrollbar>
			<Corner className='ScrollAreaCorner' />
		</Root>
	);
};

export default ScrollWrapper;
