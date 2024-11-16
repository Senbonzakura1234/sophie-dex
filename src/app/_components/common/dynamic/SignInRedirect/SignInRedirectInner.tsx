import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function SignInRedirectInner() {
	const { replace } = useRouter();

	useEffect(() => {
		const timer = setTimeout(() => {
			const url = new URL('/signin', globalThis.location.href);

			url.searchParams.set('callbackUrl', new URL(globalThis.location.href).toString());

			const searchParams = new URLSearchParams();

			searchParams.set('callbackUrl', new URL(globalThis.location.href).toString());

			replace(`/signin?${searchParams.toString()}`, { scroll: false });
		}, 2000);

		return () => void clearTimeout(timer);
	}, [replace]);

	return null;
}
