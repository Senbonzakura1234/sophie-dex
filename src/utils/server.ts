import { TRPCError } from '@trpc/server';

export const onQueryDBError = (error: unknown) => {
	console.log({ error });

	throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: 'Some Thing When Wrong On The Server.' });
};

export const InvalidRecordIdError = () => new TRPCError({ code: 'BAD_REQUEST', message: 'Invalid Record Id.' });

export const RecordNotFoundError = (id: string) =>
	new TRPCError({ code: 'NOT_FOUND', message: 'Record not found.', cause: `Record id: ${id}` });
