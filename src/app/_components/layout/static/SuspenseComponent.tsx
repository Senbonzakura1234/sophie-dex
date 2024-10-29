import ErrorContent from '@components/layout/static/ErrorContent';
import type { APIResult, CommonObject } from '@root/types/common';
import type { FC } from 'react';

type Props<TChildProps extends CommonObject> = Readonly<{
	ChildComponent: FC<TChildProps>;
	resolvedProps: Awaited<APIResult<TChildProps>>;
	showErrorContent?: boolean;
}>;

export default async function SuspenseComponent<TChildProps extends CommonObject>({
	ChildComponent,
	resolvedProps,
	showErrorContent
}: Props<TChildProps>) {
	if (resolvedProps.isSuccess) return <ChildComponent {...(resolvedProps.result || {})} />;

	if (showErrorContent) return <ErrorContent code={resolvedProps.error.code} />;

	return null;
}
