'use client';

import { KEY_BINDING_DICTIONARY } from '@root/constants/common';
import type { OnScroll } from '@root/hooks/useScroll';
import { useScroll } from '@root/hooks/useScroll';
import { useCallback, useState } from 'react';
import DefaultRefresh from './DefaultRefresh';
import DetailRefresh from './DetailRefresh';
import ListRefresh from './ListRefresh';
import ProfileRefresh from './ProfileRefresh';

type Props = {
	type?: 'DEFAULT' | 'DETAIL' | 'LIST' | 'PROFILE';
};

export default function PageRefresh({ type = 'DEFAULT' }: Props) {
	const [isDisabled, setIsDisabled] = useState(false);

	const onScroll: OnScroll = useCallback(scrollPosition => setIsDisabled(scrollPosition > 0), []);

	useScroll({ onScroll, scrollElementId: KEY_BINDING_DICTIONARY.SCROLL_WRAPPER_ID });

	if (type === 'LIST') return <ListRefresh isDisabled={isDisabled} />;

	if (type === 'DETAIL') return <DetailRefresh isDisabled={isDisabled} />;

	if (type === 'PROFILE') return <ProfileRefresh isDisabled={isDisabled} />;

	return <DefaultRefresh isDisabled={isDisabled} />;
}
