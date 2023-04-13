import type { FC } from 'react';

type LocationProps = { location: string };

const Location: FC<LocationProps> = ({ location }) => {
	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div className='font-bold'>Location: </div>

			<div>{location}</div>
		</div>
	);
};

export default Location;
