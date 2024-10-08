import { highlightSearchedText } from '@root/utils/common';

type Props = Readonly<{ price: number; search: string | undefined }>;

export default function Price({ price, search }: Props) {
	return (
		<div className='flex max-w-fit flex-wrap gap-2'>
			<div>Price: </div>

			<div className='font-bold'>
				<span
					className='badge badge-warning shadow shadow-base-content dark:badge-accent'
					dangerouslySetInnerHTML={{ __html: highlightSearchedText(price.toString(), search, true) }}
				/>{' '}
				cole
			</div>
		</div>
	);
}
