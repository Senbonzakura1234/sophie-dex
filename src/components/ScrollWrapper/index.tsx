import { Corner, Root, Scrollbar, Thumb, Viewport } from '@radix-ui/react-scroll-area';
import clsx from 'clsx';
import type { FC, ReactNode, RefObject } from 'react';

const ScrollWrapper: FC<{ children?: ReactNode; scrollRef?: RefObject<HTMLDivElement>; className?: string }> = ({
	children,
	scrollRef,
	className,
}) => {
	return (
		<Root className={clsx('scroll-area-root', className)} type='hover'>
			<Viewport className='scroll-area-viewport scroll-wrapper relative h-full w-full' ref={scrollRef}>
				{children}
			</Viewport>
			<Scrollbar className='scroll-area-scrollbar' orientation='vertical' forceMount={true}>
				<Thumb className='scroll-area-thumb' />
			</Scrollbar>
			<Scrollbar className='scroll-area-scrollbar' orientation='horizontal'>
				<Thumb className='scroll-area-thumb' />
			</Scrollbar>
			<Corner className='scroll-area-corner' />
		</Root>
	);
};

export default ScrollWrapper;
