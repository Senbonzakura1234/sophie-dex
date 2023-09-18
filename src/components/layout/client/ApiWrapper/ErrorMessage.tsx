import type { ClassNameProps } from '@root/types/common/props';

type ErrorMessageProps = {
	onRefetch: () => void;
} & ClassNameProps;

export default function ErrorMessage({ onRefetch, className }: ErrorMessageProps) {
	return (
		<div className={`font-semibold italic text-base-content ${className}`}>
			Some thing when wrong on the sever. Please try
			<button className='btn btn-link btn-sm px-1 capitalize italic' onClick={onRefetch}>
				refresh
			</button>
		</div>
	);
}
