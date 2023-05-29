import { env } from './env.mjs';

export const parseSecuredQuery = (input: Record<string, number | string | null>): string => {
	const arrQuery: string[] = [];

	for (const key in input) {
		if (Object.prototype.hasOwnProperty.call(input, key)) {
			const element = input[key];
			if (element) arrQuery.push(`${key}=${element}`);
		}
	}

	return arrQuery.length > 0 ? `?${arrQuery.join('&')}` : '';
};

export const getBaseUrl = () => {
	if (typeof window !== 'undefined') return ''; // browser should use relative url
	if (env.NEXT_PUBLIC_VERCEL_URL) return `https://${env.NEXT_PUBLIC_VERCEL_URL}`; // SSR should use vercel url
	return `http://localhost:${env.NEXT_PUBLIC_PORT ?? 3000}`; // dev SSR should use localhost
};
