import { DEFAULT_MAXIMUM_PULL_LENGTH, DEFAULT_REFRESH_THRESHOLD } from '@root/constants';
import { useCallback, useEffect, useState } from 'react';

type UsePullToRefreshParams = {
	onRefresh: () => void | Promise<void>;
	maximumPullLength?: number;
	refreshThreshold?: number;
	isDisabled?: boolean;
};

export const usePullToRefresh = ({
	onRefresh,
	maximumPullLength = DEFAULT_MAXIMUM_PULL_LENGTH,
	refreshThreshold = DEFAULT_REFRESH_THRESHOLD,
	isDisabled = false,
}: UsePullToRefreshParams) => {
	const [pullStartPosition, setPullStartPosition] = useState(0);
	const [pullPosition, setPullPosition] = useState(0);
	const [isRefreshing, setIsRefreshing] = useState(false);

	const onPullStart = useCallback(
		({ targetTouches }: TouchEvent) => {
			if (isDisabled) return;

			const touch = targetTouches[0];

			if (touch) setPullStartPosition(touch.screenY);
		},
		[isDisabled, setPullStartPosition],
	);

	const onPulling = useCallback(
		({ targetTouches }: TouchEvent) => {
			if (isDisabled) return;

			const touch = targetTouches[0];

			if (!touch) return;

			const currentPullLength = pullStartPosition < touch.screenY ? Math.abs(touch.screenY - pullStartPosition) : 0;

			if (currentPullLength <= maximumPullLength && pullStartPosition < window.screen.height / 3)
				setPullPosition(() => currentPullLength);
		},
		[isDisabled, maximumPullLength, pullStartPosition],
	);

	const onEndPull = useCallback(() => {
		if (isDisabled) return;

		setPullStartPosition(0);
		setPullPosition(0);

		if (pullPosition < refreshThreshold) return;

		setIsRefreshing(true);
		setTimeout(async () => {
			await onRefresh();
			setIsRefreshing(false);
		}, 500);
	}, [isDisabled, onRefresh, pullPosition, refreshThreshold]);

	useEffect(() => {
		if (typeof window === 'undefined' || isDisabled) return;

		window.addEventListener('touchstart', onPullStart, { passive: true });
		window.addEventListener('touchmove', onPulling, { passive: true });
		window.addEventListener('touchend', onEndPull, { passive: true });

		return () => {
			window.removeEventListener('touchstart', onPullStart);
			window.removeEventListener('touchmove', onPulling);
			window.removeEventListener('touchend', onEndPull);
		};
	}, [isDisabled, onEndPull, onPullStart, onPulling]);

	return { isRefreshing, pullPosition };
};
