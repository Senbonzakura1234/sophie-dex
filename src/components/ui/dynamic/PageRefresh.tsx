import type { ObservablePrimitiveBaseFns } from '@legendapp/state';
import { observer, useObservable } from '@legendapp/state/react';
import { Router, useRouter } from 'next/router';
import { useEffect } from 'react';
import { DEFAULT_REFRESH_THRESHOLD, usePullToRefresh } from 'use-pull-to-refresh';

type PageRefreshProps = { isDisabled?: ObservablePrimitiveBaseFns<boolean> };

function PageRefresh({ isDisabled }: PageRefreshProps) {
	const { reload } = useRouter();

	const { isRefreshing, pullPosition } = usePullToRefresh({
		onRefresh: reload,
		isDisabled: isDisabled?.get(),
		maximumPullLength: 300,
	});

	const isPageLoading = useObservable(false);

	useEffect(() => {
		Router.events.on('routeChangeStart', () => {
			isPageLoading.set(true);
		});

		Router.events.on('routeChangeComplete', () => {
			isPageLoading.set(false);
		});

		Router.events.on('routeChangeError', () => {
			isPageLoading.set(false);
		});
	}, [isPageLoading]);

	return (
		<>
			<progress
				className={`progress progress-primary absolute inset-x-0 top-0 z-40 h-1 rounded-none shadow-xl shadow-primary transition-opacity ${
					isPageLoading.get() || isRefreshing ? 'opacity-100' : 'opacity-0'
				}`}
			/>

			<div
				style={{
					opacity: (isRefreshing || pullPosition > 0) && !isDisabled?.get() ? 1 : 0,
					top: isDisabled?.get() ? 0 : (isRefreshing ? DEFAULT_REFRESH_THRESHOLD : pullPosition) / 3,
				}}
				className='fixed inset-x-1/2 z-30 aspect-square h-8 w-8 -translate-x-1/2 rounded-full bg-slate-50 p-2 transition-opacity'
			>
				<span className={`loading w-full text-primary ${isRefreshing ? 'loading-spinner' : 'loading-infinity'}`} />
			</div>
		</>
	);
}

export default observer(PageRefresh);
