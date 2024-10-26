import type { APIResult, ImprovedOmit } from '@root/types/common';
import type { FC, SuspenseProps } from 'react';
import { Suspense } from 'react';
import ErrorContent from './ErrorContent';

type Props<TChildProps extends JSX.IntrinsicAttributes> = Readonly<
	{
		ChildComponent: FC<TChildProps>;
		promiseData: APIResult<TChildProps>;
		showErrorContent?: boolean;
	} & ImprovedOmit<SuspenseProps, 'children'>
>;

export default async function SuspenseComponent<TChildProps extends JSX.IntrinsicAttributes>({
	ChildComponent,
	promiseData,
	showErrorContent,
	...suspenseProps
}: Props<TChildProps>) {
	const props = await promiseData;

	if (props.isSuccess)
		return (
			<Suspense {...suspenseProps}>
				<ChildComponent {...(props.result || {})} />
			</Suspense>
		);

	if (showErrorContent) return <ErrorContent code={props.error.code} />;

	return null;
}
