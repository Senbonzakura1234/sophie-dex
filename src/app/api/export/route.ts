import { exportAllRecords } from '@root/server/postgresql';

export async function GET() {
	return Response.json({ exportResult: await exportAllRecords() });
}
