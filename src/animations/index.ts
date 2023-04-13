import type { AnimationProps } from 'framer-motion';

export const getFramerFadeUp = (delay = 0, fadeUpRange = 100, duration = 1): AnimationProps => ({
	initial: { opacity: 0, y: fadeUpRange },
	animate: { opacity: 1, y: 0, transition: { delay, duration, type: 'spring' } },
	exit: { opacity: 0, y: fadeUpRange, transition: { delay, duration, type: 'spring' } },
});

export const getFramerFade = (delay = 0.1, duration = 2): AnimationProps => ({
	initial: { opacity: 0 },
	animate: { opacity: 1, transition: { delay, duration, type: 'spring' } },
	exit: { opacity: 0, transition: { delay, duration, type: 'spring' } },
});
