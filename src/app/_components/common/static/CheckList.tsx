import type { ChildrenProps } from '@root/types/common/props';

type Props = Readonly<{ list: Array<string>; title: string; icon?: ChildrenProps['children'] }>;

export default function CheckList({ icon, list, title }: Props) {
	return (
		<div className='flex grow flex-col gap-2'>
			<div className='font-bold capitalize'>{title}</div>
			<div className='flex flex-col gap-1'>
				{list.map((item, key) => (
					<div key={key} className='flex gap-2 align-baseline text-sm capitalize'>
						{icon}
						{item.replaceAll('-', ' ')}
					</div>
				))}
			</div>
		</div>
	);
}
