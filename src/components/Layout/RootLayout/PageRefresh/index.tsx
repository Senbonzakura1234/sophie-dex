import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { REFRESH_THRESHOLD } from '@root/constants';
import { usePullToRefresh } from '@root/hooks/usePullToRefresh';
import clsx from 'clsx';
import { LazyMotion, domAnimation, m as motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function PageRefresh() {
	const { isReady, reload } = useRouter();

	const { isRefreshing, pullLength } = usePullToRefresh({ onRefresh: () => isReady && reload() });

	return (
		<LazyMotion features={domAnimation} strict>
			<motion.div
				initial={{ opacity: 0, top: 0 }}
				animate={{
					opacity: isRefreshing || pullLength > 0 ? 1 : 0,
					top: (isRefreshing ? REFRESH_THRESHOLD : pullLength) / 3,
				}}
				className='fixed inset-x-1/2 z-30 aspect-square h-8 w-8 -translate-x-1/2 rounded-full bg-slate-50 p-2'
			>
				<motion.div
					className={clsx('h-full w-full', { 'animate-spin': isRefreshing })}
					initial={{ rotate: 0 }}
					animate={{ rotate: pullLength }}
				>
					<ArrowPathIcon className='text-primary h-full w-full' />
				</motion.div>
			</motion.div>
		</LazyMotion>
	);
}
