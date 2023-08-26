import type { Dispatch, SetStateAction } from 'react';
import { useCallback, useEffect, useState } from 'react';

import { LogProvider, improvedParseJSON, tryCatchHandlerSync } from '@root/utils/common';
import { useEventCallback } from './useEventCallback';
import { useEventListener } from './useEventListener';

declare global {
	interface WindowEventMap {
		'local-storage': CustomEvent;
	}
}

type SetValue<T> = Dispatch<SetStateAction<T>>;

export function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
	const readValue = useCallback((): T => {
		if (typeof window === 'undefined') return initialValue;

		return improvedParseJSON<T>(window.localStorage.getItem(key)) || initialValue;
	}, [initialValue, key]);

	const [storedValue, setStoredValue] = useState<T>(readValue);

	const setValue: SetValue<T> = useEventCallback(value => {
		if (typeof window === 'undefined') {
			return LogProvider.write({
				args: [`Tried setting localStorage key “${key}” even though environment is not a client`],
				type: 'warn',
			});
		}

		const { isSuccess, error } = tryCatchHandlerSync(() => {
			const newValue = value instanceof Function ? value(storedValue) : value;
			window.localStorage.setItem(key, JSON.stringify(newValue));
			setStoredValue(newValue);

			window.dispatchEvent(new Event('local-storage'));
		});

		if (!isSuccess)
			return LogProvider.write({ args: [`Error setting localStorage key “${key}”:`, error], type: 'error' });
	});

	useEffect(() => {
		setStoredValue(readValue());
	}, [readValue]);

	const handleStorageChange = useCallback(
		(event: StorageEvent | CustomEvent) => {
			if ((event as StorageEvent)?.key && (event as StorageEvent).key !== key) return;

			setStoredValue(readValue());
		},
		[key, readValue],
	);

	useEventListener('storage', handleStorageChange);
	useEventListener('local-storage', handleStorageChange);

	return [storedValue, setValue];
}
