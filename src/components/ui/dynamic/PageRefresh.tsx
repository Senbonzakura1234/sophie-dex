import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DEFAULT_REFRESH_THRESHOLD, usePullToRefresh } from 'use-pull-to-refresh';

export type PageRefreshProps = { isDisabled?: boolean };

export default function PageRefresh({ isDisabled = false }: PageRefreshProps) {
	const { reload } = useRouter();

	const { isRefreshing, pullPosition } = usePullToRefresh({ onRefresh: reload, isDisabled, maximumPullLength: 300 });

	const [isPageLoading, setIsPageLoading] = useState(false);

	useEffect(() => {
		Router.events.on('routeChangeStart', () => {
			setIsPageLoading(true);
		});

		Router.events.on('routeChangeComplete', () => {
			setIsPageLoading(false);
		});

		Router.events.on('routeChangeError', () => {
			setIsPageLoading(false);
		});
	}, []);

	useEffect(() => {
		console.log({ isPageLoading });
	}, [isPageLoading]);

	return (
		<>
			<progress
				className={`progress progress-primary absolute inset-x-0 top-0 z-40 h-1 rounded-none shadow-xl shadow-primary transition-opacity ${
					isPageLoading || isRefreshing ? 'opacity-100' : 'opacity-0'
				}`}
			/>

			<div
				style={{
					opacity: (isRefreshing || pullPosition > 0) && !isDisabled ? 1 : 0,
					top: isDisabled ? 0 : (isRefreshing ? DEFAULT_REFRESH_THRESHOLD : pullPosition) / 3,
				}}
				className='fixed inset-x-1/2 z-30 aspect-square h-8 w-8 -translate-x-1/2 rounded-full bg-slate-50 p-2 transition-opacity'
			>
				<span
					className={`loading w-full text-primary transition-all ${
						isRefreshing ? 'loading-spinner' : 'loading-infinity'
					}`}
				/>
			</div>
		</>
	);
}
