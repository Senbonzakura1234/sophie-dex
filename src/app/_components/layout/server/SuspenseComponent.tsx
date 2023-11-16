import type { FC } from 'react';

type Props<TChildProps extends JSX.IntrinsicAttributes> = {
	ChildComponent: FC<TChildProps>;
	promiseData: Promise<TChildProps>;
};

export default async function SuspenseComponent<TChildProps extends JSX.IntrinsicAttributes>({
	ChildComponent,
	promiseData,
}: Props<TChildProps>) {
	const props = await promiseData;

	return <ChildComponent {...props} />;
}
