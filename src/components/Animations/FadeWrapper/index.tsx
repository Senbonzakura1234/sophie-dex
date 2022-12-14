import { Transition } from '@headlessui/react';
import type { FadeWrapperProps } from '@root/types/common/props';
import type { FC } from 'react';
import { Fragment } from 'react';

const FadeWrapper: FC<FadeWrapperProps> = ({ children, show, appear, isTransForm }) => {
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
