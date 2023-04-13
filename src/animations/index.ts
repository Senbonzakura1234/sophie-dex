import type { MotionProps } from 'framer-motion';

export const getFramerInViewFadeUp = (delay = 0, fadeUpRange = 100, duration = 1): MotionProps => ({
	initial: { opacity: 0, y: fadeUpRange },
	whileInView: { opacity: 1, y: 0, transition: { delay, duration, type: 'spring' } },
	viewport: { once: true },
	exit: { opacity: 0, y: fadeUpRange, transition: { delay, duration, type: 'spring' } },
});

export const getFramerFadeUp = (delay = 0, fadeUpRange = 100, duration = 1): MotionProps => ({
	initial: { opacity: 0, y: fadeUpRange },
	animate: { opacity: 1, y: 0, transition: { delay, duration, type: 'spring' } },
	exit: { opacity: 0, y: fadeUpRange, transition: { delay, duration, type: 'spring' } },
});

export const getFramerFade = (delay = 0.1, duration = 1): MotionProps => ({
	initial: { opacity: 0 },
	animate: { opacity: 1, transition: { delay, duration, type: 'spring' } },
	exit: { opacity: 0, transition: { delay, duration, type: 'spring' } },
});
