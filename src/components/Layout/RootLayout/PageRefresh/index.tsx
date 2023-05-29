import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { useRouterReady } from '@root/hooks/useRouterReady';
import clsx from 'clsx';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { usePullToRefresh } from 'use-pull-to-refresh';

const refreshThreshold = 200;

export default function PageRefresh() {
	const { isReady, reload } = useRouter();

	const isRouterReady = useRouterReady(isReady);

	const { isRefreshing, pullPosition } = usePullToRefresh({
		onRefresh: reload,
		isDisabled: !isRouterReady,
		maximumPullLength: 300,
		refreshThreshold,
	});

	return (
		<LazyMotion features={domAnimation} strict>
			<motion.div
				initial={{ opacity: 0, top: 0 }}
				animate={{
					opacity: isRefreshing || pullPosition > 0 ? 1 : 0,
					top: (isRefreshing ? refreshThreshold : pullPosition) / 3,
				}}
				className='fixed inset-x-1/2 z-30 aspect-square h-8 w-8 -translate-x-1/2 rounded-full bg-slate-50 p-2'
			>
				<motion.div
					className={clsx('h-full w-full', { 'animate-spin': isRefreshing })}
					initial={{ rotate: 0 }}
					animate={{ rotate: pullPosition }}
				>
					<ArrowPathIcon className='h-full w-full text-primary' />
				</motion.div>
			</motion.div>
		</LazyMotion>
	);
}
