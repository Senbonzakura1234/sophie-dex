import type { AnimationProps } from 'framer-motion';

export const framerFadeUp: AnimationProps = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0, transition: { delay: 0.3 } },
	exit: { opacity: 0, y: 20 },
};

export const framerFade: AnimationProps = {
	initial: { opacity: 0 },
	animate: { opacity: 1, transition: { delay: 0.3 } },
	exit: { opacity: 0 },
};
