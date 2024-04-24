import type { APIResult } from '@root/types/common';
import type { FC } from 'react';
import ErrorContent from './ErrorContent';

type Props<TChildProps extends JSX.IntrinsicAttributes> = {
	ChildComponent: FC<TChildProps>;
	promiseData: APIResult<TChildProps>;
	showErrorContent?: boolean;
};

export default async function SuspenseComponent<TChildProps extends JSX.IntrinsicAttributes>({
	ChildComponent,
	promiseData,
	showErrorContent,
}: Props<TChildProps>) {
	const props = await promiseData;

	if (props.isSuccess) return <ChildComponent {...props.result} />;

	if (showErrorContent) return <ErrorContent code={props.error.code} />;

	return null;
}
