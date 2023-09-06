import { Transition } from '@headlessui/react';
import type { PropsOf } from '@headlessui/react/dist/types';
import { useEffect, useState } from 'react';

type TransitionWrapperProps = PropsOf<typeof Transition>;

export default function TransitionWrapper({ children, show = false, ...props }: TransitionWrapperProps) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		setIsOpen(() => show);
	}, [show]);

	return (
		<Transition show={isOpen} {...props}>
			{children}
		</Transition>
	);
}
