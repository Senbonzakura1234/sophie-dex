import type { ChildrenProps } from '@root/types/common/props';

type ContentWrapperProps = ChildrenProps & { type: 'detail' | 'list' };

export default function ContentWrapper({ children, type }: ContentWrapperProps) {
	return (
		<section
			className={`container m-auto grid grid-cols-1 gap-6 max-2xl:px-4 ${
				type === 'list' ? 'xl:grid-cols-2' : 'lg:max-w-3xl'
			}`}
		>
			{children}
		</section>
	);
}
