type ClassName<T extends string = 'wrapper' | 'content'> = { classNames?: { [K in T]?: string | undefined } };

type Props = ClassName<'root'>;

export default function Test({ classNames }: Props) {
	return <div>Test</div>;
}

export const TestB = () => {
	const classNames: Props['classNames'] = {
		root: '',
	};

	return <Test classNames={{ root: '' }}></Test>;
};
