import type { PullDirectionEnum } from '@root/types/common';
import { improvedInclude } from '@root/utils/common';
import { useCallback, useEffect, useReducer } from 'react';

type LoadingState = { isLoading: boolean };
type PullState = { pullPosition: number };
type PullStartState = { pullStartPosition: number };
type PullDirectionState = { pullDirection?: PullDirectionEnum | undefined };

type State = LoadingState & PullState & PullStartState & PullDirectionState;

const actions = ['set-isLoading', 'set-pullPosition', 'set-pullStartPosition', 'set-pullDirection'] as const;

type Action =
	| ({ type: (typeof actions)[0] } & LoadingState & PullDirectionState)
	| ({ type: (typeof actions)[1] } & PullState)
	| ({ type: (typeof actions)[2] } & PullStartState & PullDirectionState)
	| ({ type: (typeof actions)[3] } & PullDirectionState);

const defaultState: State = { isLoading: false, pullPosition: 0, pullStartPosition: 0, pullDirection: undefined };

const reducer = (state: State, { type, ...rest }: Action) => ({
	...state,
	...(improvedInclude(actions, type) ? rest : {}),
});

type UsePullToRefreshParams = {
	onReload?: () => void;
	onBackward?: () => void;
	onForward?: () => void;
	isDisabled?: boolean;
};

export const usePullToNavigate = ({ onReload, onBackward, onForward, isDisabled = false }: UsePullToRefreshParams) => {
	const [{ pullPosition, pullStartPosition, isLoading, pullDirection }, dispatch] = useReducer(reducer, defaultState);

	const onPullStart = useCallback(
		({ targetTouches }: TouchEvent) => {
			if (isDisabled) return;

			const touch = targetTouches[0];

			const maxPullLengthY = window.screen.height * 0.4;
			const maxPullLengthX = window.screen.width * 0.4;

			if (!touch) return;

			let direction: PullDirectionState['pullDirection'] = undefined;
			let startPos = 0;

			if (touch.screenY < maxPullLengthY && touch.screenX > maxPullLengthX && touch.screenX < maxPullLengthX * 2) {
				direction = 'reload';
				startPos = touch.screenY;
			}

			if (touch.screenY >= maxPullLengthY) {
				if (touch.screenX <= maxPullLengthX) {
					direction = 'backward';
					startPos = touch.screenX;
				}

				if (touch.screenX >= maxPullLengthX * 2) {
					direction = 'forward';
					startPos = window.screen.width - touch.screenX;
				}
			}

			if (direction)
				dispatch({
					type: 'set-pullStartPosition',
					pullStartPosition: startPos,
					pullDirection: direction,
				});
		},
		[isDisabled],
	);

	const onPulling = useCallback(
		({ targetTouches }: TouchEvent) => {
			if (isDisabled) return;

			const touch = targetTouches[0];

			if (!touch) return;

			const maxPullLengthY = window.screen.height * 0.4;
			const maxPullLengthX = window.screen.width * 0.4;

			const maxPull = pullDirection === 'reload' ? maxPullLengthY : maxPullLengthX;

			const currentPullLength =
				pullStartPosition < maxPull
					? Math.abs(
							(pullDirection === 'reload'
								? touch.screenY
								: pullDirection === 'backward'
								? touch.screenX
								: window.screen.width - touch.screenX) - pullStartPosition,
					  )
					: 0;

			if (currentPullLength <= maxPull) dispatch({ type: 'set-pullPosition', pullPosition: currentPullLength });
		},
		[isDisabled, pullStartPosition, pullDirection],
	);

	const onEndPull = useCallback(() => {
		if (isDisabled) return;

		dispatch({ type: 'set-pullPosition', pullPosition: 0 });
		dispatch({ type: 'set-pullStartPosition', pullStartPosition: 0 });

		const refreshThreshold = window.screen[pullDirection === 'reload' ? 'height' : 'width'] * 0.3;
		if (pullPosition < refreshThreshold) return dispatch({ type: 'set-pullDirection', pullDirection: undefined });

		dispatch({ type: 'set-isLoading', isLoading: true });
		setTimeout(() => {
			if (onReload && pullDirection === 'reload') onReload();
			if (onBackward && pullDirection === 'backward') onBackward();
			if (onForward && pullDirection === 'forward') onForward();
			dispatch({ type: 'set-isLoading', isLoading: false, pullDirection: undefined });
		}, 500);
	}, [isDisabled, onBackward, onForward, onReload, pullDirection, pullPosition]);

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

	return { isLoading, pullPosition, pullDirection };
};
