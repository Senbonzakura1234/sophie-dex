import { MAXIMUM_PULL_LENGTH, REFRESH_THRESHOLD } from '@root/constants';
import { useCallback, useEffect, useState } from 'react';

type UsePullToRefresh = ({ onRefresh }: { onRefresh: () => void }) => {
	isRefreshing: boolean;
	pullPosition: number;
};

export const usePullToRefresh: UsePullToRefresh = ({ onRefresh }) => {
	const [pullStartPosition, setPullStartPosition] = useState(0);
	const [pullPosition, setPullPosition] = useState(0);
	const [isRefreshing, setIsRefreshing] = useState(false);

	const onPullStart = useCallback(({ targetTouches }: TouchEvent) => {
		const touch = targetTouches[0];

		if (touch) return setPullStartPosition(touch.screenY);
	}, []);

	const onPulling = useCallback(
		({ targetTouches }: TouchEvent) => {
			const touch = targetTouches[0];

			if (!touch) return;

			const currentPullLength = pullStartPosition < touch.screenY ? Math.abs(touch.screenY - pullStartPosition) : 0;

			if (currentPullLength <= MAXIMUM_PULL_LENGTH) return setPullPosition(() => currentPullLength);
		},
		[pullStartPosition],
	);

	const onEndPull = useCallback(() => {
		setPullStartPosition(() => 0);
		setPullPosition(() => 0);

		if (pullPosition < REFRESH_THRESHOLD) return;

		setIsRefreshing(() => true);
		setTimeout(onRefresh);
	}, [onRefresh, pullPosition]);

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

	return { isRefreshing, pullPosition };
};
