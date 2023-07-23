import { evnIs } from '@root/utils/common';
import { useEffect } from 'react';

export const useDebugger = (...debugValue: unknown[]) =>
	useEffect(() => {
		if (!evnIs('production')) return console.log(debugValue);
	}, [debugValue]);
