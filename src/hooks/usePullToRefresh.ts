import { DEFAULT_MAXIMUM_PULL_LENGTH, DEFAULT_REFRESH_THRESHOLD } from '@root/constants';
import { atom, useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';

type UsePullToRefreshParams = {
	onRefresh: () => void;
	maximumPullLength?: number;
	refreshThreshold?: number;
	isDisabled?: boolean;
};

const pullStartPositionAtom = atom(0);
const pullPositionAtom = atom(0);
const isRefreshingAtom = atom(false);

export const usePullToRefresh = ({
	onRefresh,
	maximumPullLength = DEFAULT_MAXIMUM_PULL_LENGTH,
	refreshThreshold = DEFAULT_REFRESH_THRESHOLD,
	isDisabled = false,
}: UsePullToRefreshParams) => {
	const [pullStartPosition, setPullStartPosition] = useAtom(pullStartPositionAtom);
	const [pullPosition, setPullPosition] = useAtom(pullPositionAtom);
	const [isRefreshing, setIsRefreshing] = useAtom(isRefreshingAtom);

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

			if (currentPullLength <= maximumPullLength) setPullPosition(() => currentPullLength);
		},
		[isDisabled, maximumPullLength, pullStartPosition, setPullPosition],
	);

	const onEndPull = useCallback(() => {
		if (isDisabled) return;

		setPullStartPosition(0);
		setPullPosition(0);

		if (pullPosition < refreshThreshold) return;

		setIsRefreshing(true);
		setTimeout(onRefresh, 500);
	}, [isDisabled, onRefresh, pullPosition, refreshThreshold, setIsRefreshing, setPullPosition, setPullStartPosition]);

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
	}, [onEndPull, onPulling, onPullStart, isDisabled]);

	useEffect(() => {
		if (maximumPullLength >= refreshThreshold || process.env.NODE_ENV === 'production' || isDisabled) return;
		console.error(
			'usePullToRefresh',
			`'maximumPullLength' (currently ${maximumPullLength})  should be bigger or equal than 'refreshThreshold' (currently ${refreshThreshold})`,
		);
	}, [maximumPullLength, refreshThreshold, isDisabled]);

	return { isRefreshing, pullPosition };
};
