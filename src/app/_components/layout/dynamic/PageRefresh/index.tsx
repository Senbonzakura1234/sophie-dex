'use client';

import { KEY_BINDING_DICTIONARY } from '@root/constants/common';
import type { OnScroll } from '@root/hooks/useScroll';
import { useScroll } from '@root/hooks/useScroll';
import { useState } from 'react';
import DefaultRefresh from './DefaultRefresh';
import DetailRefresh from './DetailRefresh';
import ListRefresh from './ListRefresh';

type Props = Readonly<{ type?: 'DEFAULT' | 'DETAIL' | 'LIST' }>;

export default function PageRefresh({ type = 'DEFAULT' }: Props) {
	const [isDisabled, setIsDisabled] = useState(false);

	const onScroll: OnScroll = ({ scrollPosition }) => setIsDisabled(scrollPosition > 0);

	useScroll({ onScroll, scrollElementId: KEY_BINDING_DICTIONARY.ROOT_SCROLL_WRAPPER_ID });

	if (type === 'LIST') return <ListRefresh isDisabled={isDisabled} />;

	if (type === 'DETAIL') return <DetailRefresh isDisabled={isDisabled} />;

	return <DefaultRefresh isDisabled={isDisabled} />;
}
