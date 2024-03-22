'use client';

import type { ClientSafeProvider } from 'next-auth/react';
import { signIn } from 'next-auth/react';
type Props = {
	callbackUrl: string;
	providerList: Array<ClientSafeProvider>;
};
export default function SignInProviders({ callbackUrl, providerList }: Props) {
	return (
		<>
			{providerList.map(provider => (
				<div key={provider.name}>
					<button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
				</div>
			))}
		</>
	);
}
