import { MAXIMUM_PULL_LENGTH, REFRESH_THRESHOLD } from '@root/constants';
import { useCallback, useEffect, useState } from 'react';

type UsePullToRefresh = ({ onRefresh }: { onRefresh: () => void }) => {
	isRefreshing: boolean;
	pullLength: number;
};

export const usePullToRefresh: UsePullToRefresh = ({ onRefresh }) => {
	const [pullStartPoint, setPullStartPoint] = useState(0);
	const [pullLength, setPullLength] = useState(0);
	const [isRefreshing, setIsRefreshing] = useState(false);

	const onPullStart = useCallback(({ targetTouches }: TouchEvent) => {
		const touch = targetTouches[0];

		if (touch) return setPullStartPoint(touch.screenY);
	}, []);

	const onPulling = useCallback(
		({ targetTouches }: TouchEvent) => {
			const touch = targetTouches[0];

			if (!touch) return;

			const currentPullLength = pullStartPoint < touch.screenY ? Math.abs(touch.screenY - pullStartPoint) : 0;

			if (currentPullLength <= MAXIMUM_PULL_LENGTH) return setPullLength(() => currentPullLength);
		},
		[pullStartPoint],
	);

	const onEndPull = useCallback(() => {
		setPullStartPoint(() => 0);
		setPullLength(() => 0);

		if (pullLength < REFRESH_THRESHOLD) return;

		setIsRefreshing(() => true);
		setTimeout(onRefresh);
	}, [onRefresh, pullLength]);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		window.addEventListener('touchstart', onPullStart);
		window.addEventListener('touchmove', onPulling);
		window.addEventListener('touchend', onEndPull);

		return () => {
			window.removeEventListener('touchstart', onPullStart);
			window.removeEventListener('touchmove', onPulling);
			window.removeEventListener('touchend', onEndPull);
		};
	}, [onEndPull, onPulling, onPullStart]);

	return { isRefreshing, pullLength };
};
