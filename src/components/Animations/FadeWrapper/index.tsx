import { Transition } from '@headlessui/react';
import type { FC, ReactNode } from 'react';
import { Fragment } from 'react';

const FadeWrapper: FC<{ children: ReactNode; show: boolean; appear?: boolean; isTransForm?: boolean }> = ({
	children,
	show,
	appear,
	isTransForm,
}) => {
	return (
		<Transition
			appear={appear}
			as={Fragment}
			show={show}
			enter={`${isTransForm ? 'transform' : 'fade'} transition duration-[400ms]`}
			enterFrom={`opacity-0 ${isTransForm ? 'scale-50' : ''}`}
			enterTo={`opacity-100 ${isTransForm ? 'scale-100' : ''}`}
			leave={`${isTransForm ? 'transform' : 'fade'} duration-200 transition ease-in-out`}
			leaveFrom={`opacity-100 ${isTransForm ? 'scale-100' : ''}`}
			leaveTo={`opacity-0 ${isTransForm ? 'scale-95' : ''}`}
		>
			{children}
		</Transition>
	);
};

export default FadeWrapper;
