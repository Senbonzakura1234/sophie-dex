import type { AnimationProps } from 'framer-motion';

export const framerFadeUp: AnimationProps = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0, transition: { delay: 0.3 } },
	exit: { opacity: 0, y: 20 },
};

export const framerFade: AnimationProps = {
	initial: { opacity: 0 },
	animate: { opacity: 1, transition: { delay: 0 } },
	exit: { opacity: 0 },
};

export const getFramerFadeUp = (delay = 0, fadeUpRange = 20): AnimationProps => ({
	initial: { opacity: 0, y: fadeUpRange },
	animate: { opacity: 1, y: 0, transition: { delay } },
	exit: { opacity: 0, y: fadeUpRange },
});
