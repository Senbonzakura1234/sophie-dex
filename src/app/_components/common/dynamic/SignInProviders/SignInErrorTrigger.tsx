import usePushAlert from '@root/hooks/usePushAlert';
import type { ImprovePick } from '@root/types/common';
import type { SignInQuery } from '@root/types/common/zod';
import { useEffect } from 'react';

type Props = ImprovePick<SignInQuery, 'error'>;

export default function SignInErrorTrigger({ error }: Props) {
	const { pushAlert } = usePushAlert();

	useEffect(() => {
		if (error) pushAlert({ isOpen: true, message: 'Provider Unsupported', type: 'ERROR' });
	}, [error, pushAlert]);

	return null;
}
