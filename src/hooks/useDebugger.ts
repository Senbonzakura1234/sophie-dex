import { useEffect } from 'react';

export default function useDebugger(...debugValue: unknown[]) {
	return useEffect(() => {
		console.log(debugValue);
	}, [debugValue]);
}
