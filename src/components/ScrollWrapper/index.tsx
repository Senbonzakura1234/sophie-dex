import { Corner, Root, Scrollbar, Thumb, Viewport } from '@radix-ui/react-scroll-area';
import type { ScrollWrapperProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FC } from 'react';

const ScrollWrapper: FC<ScrollWrapperProps> = ({ children, refObject: ref, className }) => {
	return (
		<Root className={clsx('scroll-area-root', className)} type='hover'>
			<Viewport className='scroll-area-viewport scroll-wrapper relative h-full w-full' ref={ref}>
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
