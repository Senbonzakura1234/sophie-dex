import { LogProvider } from '@root/utils/common';
import { useEffect } from 'react';

export const useDebugger = (...debugValue: unknown[]) =>
	useEffect(() => LogProvider.write({ args: [debugValue], type: 'log' }), [debugValue]);
