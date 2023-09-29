import type { IconProps } from '@root/types/common/props';
import type { RouteType } from 'next/dist/lib/load-custom-routes';
import Link from 'next/link';
import type { ComponentProps, FC } from 'react';

export type ProfileFieldProps = {
	Icon: FC<IconProps>;
	content:
		| { type: 'text'; label: string }
		| { type: 'link'; href: ComponentProps<typeof Link<RouteType>>['href']; label: string };
};

export default function ProfileField({ Icon, content }: ProfileFieldProps) {
	return (
		<p className='flex grow-0 items-end gap-2 text-sm font-bold capitalize'>
			<Icon className='mt-auto aspect-square w-5 text-primary' />

			{content.type === 'text' ? (
				content.label
			) : (
				<Link className='link-hover link-primary link visited:link-accent' href={content.href} target='_blank'>
					{content.label}
				</Link>
			)}
		</p>
	);
}
