type Props = { version: string } & JSX.IntrinsicAttributes;

export default async function Version({ version }: Props) {
	return (
		<div className='mx-auto block rounded-full bg-primary px-3 py-1 text-xs font-bold leading-none text-primary-content shadow-lg shadow-base-content/30'>
			v{version}
		</div>
	);
}
