'use client';

import { getCookie, setCookie } from 'cookies-next/client';
import { useState } from 'react';

export function useCookies<T extends string>(name: string, defaultValue: T) {
	const [value, setValue] = useState(() => {
		const cookie = getCookie(name) as T | undefined;

		if (cookie) return cookie;

		setCookie(name, defaultValue);

		return defaultValue;
	});

	const updateCookie = (newValue: T, options: Parameters<typeof setCookie>[2] = {}) => {
		setCookie(name, newValue, { ...options });

		setValue(newValue);
	};

	return [value, updateCookie] as const;
}
