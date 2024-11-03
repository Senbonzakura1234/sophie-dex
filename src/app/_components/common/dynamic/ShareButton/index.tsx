'use client';

import type { InputData } from '@root/types/common';
import type { ClassNamesProps } from '@root/types/common/props';
import dynamic from 'next/dynamic';

const ShareButtonInner = dynamic(() => import('@components/common/dynamic/ShareButton/ShareButtonInner'), {
	ssr: false
});

export type ShareButtonProps = Readonly<{ input: InputData; showText?: boolean } & ClassNamesProps<'wrapper' | 'icon'>>;

export default function ShareButton(props: ShareButtonProps) {
	return <ShareButtonInner {...props} />;
}
