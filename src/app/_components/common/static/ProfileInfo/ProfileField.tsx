import FacebookSquareIcon from '@components/icons/brand/FacebookSquareIcon';
import TwitterSquareIcon from '@components/icons/brand/TwitterSquareIcon';
import MailIcon from '@components/icons/solid/MailIcon';
import MapPinIcon from '@components/icons/solid/MapPinIcon';
import OfficeIcon from '@components/icons/solid/OfficeIcon';
import type { RouteType } from 'next/dist/lib/load-custom-routes';
import Link from 'next/link';
import type { ComponentProps } from 'react';

export type ProfileFieldProps =
	| { type: 'company' | 'location'; label: string }
	| { type: 'blog' | 'mail' | 'twitter'; label: string; href: ComponentProps<typeof Link<RouteType>>['href'] };

const iconMap = {
	blog: FacebookSquareIcon,
	company: OfficeIcon,
	location: MapPinIcon,
	mail: MailIcon,
	twitter: TwitterSquareIcon
};

export default function ProfileField({ type, label, ...restProps }: ProfileFieldProps) {
	const Icon = iconMap[type];

	return (
		<>
			<Icon className='mt-auto aspect-square w-5 text-primary' />

			{'href' in restProps ? (
				<Link className='link-hover link link-primary visited:link-accent' href={restProps.href} target='_blank'>
					{label}
				</Link>
			) : (
				label
			)}
		</>
	);
}
