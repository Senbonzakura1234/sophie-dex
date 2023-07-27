type SortItemBtnProps<TValue extends string | number> = {
	value: TValue;
	disabled?: boolean;
	isActive: boolean;
	onUpdateQuery: (value: TValue) => void;
};

export default function SortBtn<TValue extends string | number>({
	value,
	disabled,
	isActive,
	onUpdateQuery,
}: SortItemBtnProps<TValue>) {
	return (
		<button
			aria-label={`Sort by ${value}`}
			disabled={disabled}
			className={`btn join-item btn-xs border-y-2 capitalize ${
				isActive ? 'btn-primary btn-active no-animation cursor-default text-slate-50' : 'btn-ghost border-accent'
			}`}
			onClick={() => {
				if (!isActive) onUpdateQuery(value);
			}}
			role='navigation'
		>
			{value}
		</button>
	);
}
