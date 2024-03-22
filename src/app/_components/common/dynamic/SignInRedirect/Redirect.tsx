'use client';

import { signIn } from 'next-auth/react';

export default function Redirect() {
	return signIn();
}
