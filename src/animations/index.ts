import type { AnimationProps } from 'framer-motion';

export const getFramerFadeUp = (delay = 0, fadeUpRange = 100, duration = 1): AnimationProps => ({
	initial: { opacity: 0, y: fadeUpRange },
	animate: { opacity: 1, y: 0, transition: { delay, duration, type: 'spring' } },
	exit: { opacity: 0, y: fadeUpRange, transition: { delay, duration, type: 'spring' } },
});
