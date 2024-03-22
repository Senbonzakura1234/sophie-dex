'use client';

import type { SessionProviderProps } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';

export default function AuthProvider(props: SessionProviderProps) {
	return <SessionProvider {...props} />;
}
