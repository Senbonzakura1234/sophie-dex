type LocationProps = { location: string };

export default function Location({ location }: LocationProps) {
	return (
		<div className='flex max-w-[90%] gap-2'>
			<div>Location: </div>

			<div className='font-bold'>{location}</div>
		</div>
	);
}
