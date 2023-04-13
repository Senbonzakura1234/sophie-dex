import type { FC } from 'react';

type PriceProps = { price: number };

const Price: FC<PriceProps> = ({ price }) => {
	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='font-bold'>Price: </div>

			<div className='font-bold'>
				<span className='badge badge-primary text-slate-50'>{price}</span> cole
			</div>
		</div>
	);
};

export default Price;
