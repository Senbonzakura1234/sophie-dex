import { highlightSearchedText } from '@root/utils/common';

type LocationProps = { location: string; search: string | undefined };

export default function Location({ location, search }: LocationProps) {
	return (
		<div className='flex max-w-[90%] gap-2'>
			<div>Location: </div>

			<div className='font-bold' dangerouslySetInnerHTML={{ __html: highlightSearchedText(location, search) }} />
		</div>
	);
}
