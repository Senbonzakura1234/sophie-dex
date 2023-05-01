import type { ChildrenProps, ClassNameProps } from '@root/types/common/props';
import type { AnimationProps } from 'framer-motion';
import { AnimatePresence, LazyMotion, domAnimation, m as motion } from 'framer-motion';
import type { ReactNode } from 'react';

type AnimationWrapperProps = {
	show?: boolean;
	initial?: boolean;
	options: AnimationProps;
	placeholder?: ReactNode;
} & ChildrenProps &
	ClassNameProps;

export default function AnimationWrapper({
	className,
	children,
	options,
	initial,
	show,
	placeholder,
}: AnimationWrapperProps) {
	return (
		<LazyMotion features={domAnimation} strict>
			<AnimatePresence initial={initial}>
				{show ? (
					<motion.div className={className} {...options}>
						{children}
					</motion.div>
				) : (
					placeholder || null
				)}
			</AnimatePresence>
		</LazyMotion>
	);
}
