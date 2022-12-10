import { useSearchQuery } from '@root/hooks/useSearchQuery';

const ResetFilter = () => {
	const { resetQuery, isReady } = useSearchQuery();
	return (
		<button
			className='btn btn-xs my-auto'
			disabled={!isReady}
			onClick={() => {
				if (isReady) resetQuery();
			}}
		>
			Reset Filter
		</button>
	);
};

export default ResetFilter;
