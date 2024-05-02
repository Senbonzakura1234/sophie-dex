import { providerMapping } from '@root/constants/server';
import { providerIdList } from '@root/types/model';
import { env } from '@root/utils/common/env';
import type { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth';

export const authOptions: AuthOptions = {
	providers: [...providerIdList]
		.sort(id => (env.NEXT_PUBLIC_ALLOW_AUTH_PROVIDER.includes(id) ? -1 : 1))
		.map(id => providerMapping[id]),
	callbacks: {
		session: ({ session }) => session,
	},
	pages: { signIn: '/signin', signOut: '/signout' },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
