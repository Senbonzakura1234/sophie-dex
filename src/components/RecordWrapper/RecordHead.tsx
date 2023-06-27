import DocumentChartBarIcon from '@root/assets/icons/outline/DocumentChartBarIcon';
import LinkIcon from '@root/assets/icons/solid/LinkIcon';
import { useIdQuery } from '@root/hooks/useSecuredRouter';
import type { ModuleIdProps } from '@root/types/common/props';
import type { TextShadowMap } from '@root/types/common/tailwind';
import type { ColorEnum } from '@root/types/common/zod';
import { Roboto_Slab } from 'next/font/google';
import Link from 'next/link';

const robotoSlab = Roboto_Slab({ weight: ['600'], subsets: ['latin'] });

type RecordHeadProps = ModuleIdProps & { name: string; id: string; color?: ColorEnum };

export default function RecordHead({ id, name, moduleId, color }: RecordHeadProps) {
	const { securedIdQuery } = useIdQuery();

	const isCurrentRecord = securedIdQuery.id === id;

	const Icon = isCurrentRecord ? DocumentChartBarIcon : LinkIcon;

	const className = {
		BLUE: 'app-text-shadow-BLUE',
		GREEN: 'app-text-shadow-GREEN',
		RED: 'app-text-shadow-RED',
		WHITE: 'app-text-shadow-WHITE',
		YELLOW: 'app-text-shadow-YELLOW',
	} satisfies TextShadowMap;

	return (
		<div className='card-title'>
			<Link
				className={
					isCurrentRecord
						? 'pointer-events-none cursor-default'
						: `${color ? 'group' : 'link-hover link visited:link-primary'}`
				}
				href={{ pathname: `/${moduleId}/[id]`, query: { id } }}
				aria-label={name}
				role='navigation'
			>
				<span className={`flex gap-2 ${robotoSlab.className} ${color ? className[color] : ''}`}>
					<Icon className='my-auto h-4 w-4' />
					<span
						className={
							color
								? 'text-slate-50 opacity-100 transition-opacity group-hover:opacity-60 group-active:opacity-100'
								: ''
						}
					>
						{name}
					</span>
				</span>
			</Link>
		</div>
	);
}
