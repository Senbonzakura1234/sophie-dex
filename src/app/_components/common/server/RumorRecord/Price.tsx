type PriceProps = { price: number };

export default function Price({ price }: PriceProps) {
	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div>Price: </div>

			<div className='font-bold'>
				<span className='badge badge-warning shadow shadow-base-content dark:badge-accent'>{price}</span> cole
			</div>
		</div>
	);
}
