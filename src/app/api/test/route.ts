import { evnIs } from '@root/utils/common';
import { NextResponse } from 'next/server';

export async function GET() {
	if (evnIs('production')) return new Response('Forbidden resource', { status: 403 });

	const data = null;

	return NextResponse.json({ data });
}
