type LocationProps = { location: string };

export default function Location({ location }: LocationProps) {
	return (
		<div className='flex max-w-[90%] gap-2'>
			<div className='font-bold'>Location: </div>

			<div>{location}</div>
		</div>
	);
}
