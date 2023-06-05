type SortItemBtnProps<TValue extends string | number> = {
	value: TValue;
	disabled: boolean;
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
			role='navigation'
			aria-label={`Sort by ${value}`}
			disabled={disabled}
			onClick={() => {
				if (!isActive) onUpdateQuery(value);
			}}
			className={`btn-xs btn border-y-2 capitalize ${
				isActive ? 'btn-primary btn-active no-animation cursor-default text-slate-50' : 'btn-ghost border-accent'
			}`}
		>
			{value}
		</button>
	);
}
