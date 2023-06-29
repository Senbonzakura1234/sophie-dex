import { ErrorModal } from '@root/components/ui/dynamic';
import { errorMap } from '@root/constants';

type ErrorLayoutProps = { code: keyof typeof errorMap };

export default function ErrorLayout({ code }: ErrorLayoutProps) {
	const error = errorMap[code];

	return <ErrorModal {...error} isShow onCloseModal={() => undefined} />;
}
