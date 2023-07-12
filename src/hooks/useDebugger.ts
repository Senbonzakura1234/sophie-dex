import { evnIs } from '@root/utils/common';
import { useEffect } from 'react';

export default function useDebugger(...debugValue: unknown[]) {
	useEffect(() => {
		if (!evnIs('production')) return console.log(debugValue);
	}, [debugValue]);
}
