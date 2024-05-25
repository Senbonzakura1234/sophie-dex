import type { NotificationProps } from '@root/types/common/props';
import { useEffect, useState } from 'react';

export function useNotification(defaultValue: NotificationProps = { isOpen: false, message: '' }) {
	const [alert, setAlert] = useState<NotificationProps>(defaultValue);

	useEffect(() => {
		if (!alert.isOpen) return;

		const timeOut = setTimeout(() => setAlert({ isOpen: false, message: '', type: undefined }), 2000);

		return () => {
			clearTimeout(timeOut);
		};
	}, [alert.isOpen]);

	return [alert, setAlert] as const;
}
