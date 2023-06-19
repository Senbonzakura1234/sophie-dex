import type { ChildrenProps } from '@root/types/common/props';
import type { AnimationProps, HTMLMotionProps } from 'framer-motion';
import { AnimatePresence, LazyMotion, domAnimation, m as motion } from 'framer-motion';
import type { ReactNode } from 'react';

type AnimationWrapperProps = {
	show?: boolean;
	initial?: boolean;
	options: AnimationProps;
	placeholder?: ReactNode;
} & ChildrenProps &
	HTMLMotionProps<'div'>;

export default function AnimationWrapper({
	children,
	options,
	initial,
	show,
	placeholder,
	...divProps
}: AnimationWrapperProps) {
	return (
		<LazyMotion features={domAnimation} strict>
			<AnimatePresence initial={initial}>
				{show ? (
					<motion.div {...options} {...divProps}>
						{children}
					</motion.div>
				) : (
					placeholder || null
				)}
			</AnimatePresence>
		</LazyMotion>
	);
}
