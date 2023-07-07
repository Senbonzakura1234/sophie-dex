import type { MotionProps } from 'framer-motion';

export const getFramerFadeUp = (delay = 0, fadeUpRange = 20, duration = 0.5): MotionProps => ({
	initial: { opacity: 0, y: fadeUpRange },
	animate: { opacity: 1, y: 0, transition: { delay, duration } },
	exit: { opacity: 0, y: fadeUpRange, transition: { delay, duration } },
});
