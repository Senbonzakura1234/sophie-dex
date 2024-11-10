import type { Adapter, AdapterAccount } from '@auth/core/adapters';
import { postgresql } from '@root/server/postgresql/repository';
import {
	getAccountRecordQuery,
	getAllAuthenticatorRecordsByUserIdQuery,
	getAuthenticatorRecordQuery,
	getSessionAndUserQuery,
	getUserByAccountQuery,
	getUserRecordByEmailQuery,
	getUserRecordByIdQuery
} from '@root/server/postgresql/repository/query';
import {
	accounts,
	authenticators,
	profiles,
	sessions,
	users,
	verificationTokens
} from '@root/server/postgresql/schema';
import { APIError } from '@root/types/common';
import { tryCatchHandler } from '@root/utils/common';
import type { SQL } from 'drizzle-orm';
import { and, eq, or } from 'drizzle-orm';

export const authAdapter: Adapter = {
	createUser: async ({ email, emailVerified, image = '', name }) => {
		if (!name) throw new APIError({ code: 'BAD_REQUEST', message: 'No username' });

		const { data, isSuccess } = await tryCatchHandler(
			postgresql.insert(users).values({ email, emailVerified, image, name }).returning(),
			{ operationCode: 'authAdapter.createUser' }
		);
		if (!isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Create User error' });

		if (!data[0]) throw new APIError({ code: 'NOT_FOUND', message: 'User not found' });

		await postgresql.update(profiles).set({ userId: data[0].id }).where(eq(profiles.login, data[0].name));

		return data[0];
	},

	getUser: async id => {
		const { data, isSuccess } = await tryCatchHandler(getUserRecordByIdQuery.execute({ id }), {
			operationCode: 'authAdapter.getUser'
		});

		if (!isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Get User error' });

		return data || null;
	},

	getUserByEmail: async email => {
		const { data, isSuccess } = await tryCatchHandler(getUserRecordByEmailQuery.execute({ email }), {
			operationCode: 'authAdapter.getUserByEmail'
		});

		if (!isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Get Uer error' });

		return data || null;
	},

	createSession: async ({ expires, sessionToken, userId }) => {
		const { data, isSuccess } = await tryCatchHandler(
			postgresql.insert(sessions).values({ expires, sessionToken, userId }).returning(),
			{ operationCode: 'authAdapter.createSession' }
		);

		if (!isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Create Session error' });

		if (!data[0]) throw new APIError({ code: 'NOT_FOUND', message: 'Session not found' });

		return data[0];
	},

	getSessionAndUser: async sessionToken => {
		const { data, isSuccess } = await tryCatchHandler(getSessionAndUserQuery.execute({ sessionToken }), {
			operationCode: 'authAdapter.getSessionAndUser'
		});

		if (!isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Get Session User error' });

		return data[0] || null;
	},

	updateUser: async input => {
		if (!input.id) throw new APIError({ code: 'BAD_REQUEST', message: 'No user id' });

		const { data, isSuccess } = await tryCatchHandler(
			postgresql
				.update(users)
				.set({ ...input, image: input.image || '', name: input.name || '' })
				.where(eq(users.id, input.id))
				.returning(),
			{ operationCode: 'authAdapter.updateUser' }
		);

		if (!isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Update User error' });

		if (!data[0]) throw new APIError({ code: 'NOT_FOUND', message: 'User not found' });

		return data[0];
	},

	updateSession: async input => {
		const { data, isSuccess } = await tryCatchHandler(
			postgresql.update(sessions).set(input).where(eq(sessions.sessionToken, input.sessionToken)).returning(),
			{ operationCode: 'authAdapter.updateSession' }
		);

		if (!isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Update Session error' });

		if (!data[0]) throw new APIError({ code: 'NOT_FOUND', message: 'Session not found' });

		return data[0];
	},

	linkAccount: async data =>
		void (await tryCatchHandler(postgresql.insert(accounts).values(data), {
			operationCode: 'authAdapter.linkAccount'
		})),

	getUserByAccount: async ({ provider, providerAccountId }) => {
		const { data, isSuccess } = await tryCatchHandler(
			getUserByAccountQuery.execute({ provider, providerAccountId }),
			{ operationCode: 'authAdapter.getUserByAccount' }
		);

		if (!isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Get User error' });

		return data?.[0]?.user || null;
	},

	deleteSession: async sessionToken =>
		void (await tryCatchHandler(postgresql.delete(sessions).where(eq(sessions.sessionToken, sessionToken)), {
			operationCode: 'authAdapter.deleteSession'
		})),

	createVerificationToken: async ({ expires, identifier, token }) => {
		const { data, isSuccess } = await tryCatchHandler(
			postgresql.insert(verificationTokens).values({ expires, identifier, token }).returning(),
			{ operationCode: 'authAdapter.createVerificationToken' }
		);

		if (!isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Create VerificationToken error' });

		return data[0];
	},

	useVerificationToken: async ({ identifier, token }) => {
		const { data, isSuccess } = await tryCatchHandler(
			postgresql
				.delete(verificationTokens)
				.where(and(eq(verificationTokens.identifier, identifier), eq(verificationTokens.token, token)))
				.returning(),
			{ operationCode: 'authAdapter.useVerificationToken' }
		);

		if (!isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Get VerificationToken error' });

		return data[0] || null;
	},

	deleteUser: async id => {
		const { data } = await tryCatchHandler(postgresql.delete(users).where(eq(users.id, id)).returning(), {
			operationCode: 'deleteUser.deleteUser'
		});

		const OR: Array<SQL> = [eq(profiles.userId, id)];

		if (data?.[0]) OR.push(eq(profiles.login, data[0].name));

		return void (await tryCatchHandler(postgresql.delete(profiles).where(or(...OR)), {
			operationCode: 'deleteUser.deleteProfile'
		}));
	},

	unlinkAccount: async ({ provider, providerAccountId }) =>
		void (await tryCatchHandler(
			postgresql
				.delete(accounts)
				.where(and(eq(accounts.provider, provider), eq(accounts.providerAccountId, providerAccountId))),
			{ operationCode: 'authAdapter.unlinkAccount' }
		)),

	getAccount: async (providerAccountId, provider) => {
		const { data, isSuccess } = await tryCatchHandler(
			getAccountRecordQuery.execute({ providerAccountId, provider }),
			{ operationCode: 'authAdapter.getAccount' }
		);

		if (!isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Get Account error' });

		return (data || null) as AdapterAccount | null;
	},

	createAuthenticator: async input => {
		const { data, isSuccess } = await tryCatchHandler(postgresql.insert(authenticators).values(input).returning(), {
			operationCode: 'authAdapter.createAuthenticator'
		});

		if (!isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Create Authenticator error' });

		if (!data[0]) throw new APIError({ code: 'NOT_FOUND', message: 'Authenticator not found' });

		return data[0];
	},

	getAuthenticator: async credentialID => {
		const { data, isSuccess } = await tryCatchHandler(getAuthenticatorRecordQuery.execute({ credentialID }), {
			operationCode: 'authAdapter.getAuthenticator'
		});

		if (!isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Get Authenticator error' });

		return data || null;
	},

	listAuthenticatorsByUserId: async userId => {
		const { data, isSuccess } = await tryCatchHandler(getAllAuthenticatorRecordsByUserIdQuery.execute({ userId }), {
			operationCode: 'authAdapter.listAuthenticatorsByUserId'
		});

		if (!isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Get list Authenticator error' });

		return data;
	},

	updateAuthenticatorCounter: async (credentialID, counter) => {
		const { data, isSuccess } = await tryCatchHandler(
			postgresql
				.update(authenticators)
				.set({ counter })
				.where(eq(authenticators.credentialID, credentialID))
				.returning(),
			{ operationCode: 'authAdapter.updateAuthenticatorCounter' }
		);

		if (!isSuccess) throw new APIError({ code: 'INTERNAL_SERVER_ERROR', message: 'Update Authenticator error' });

		if (!data[0]) throw new APIError({ code: 'NOT_FOUND', message: 'Authenticator not found.' });

		return data[0];
	}
};
