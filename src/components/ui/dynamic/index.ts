import dynamic from 'next/dynamic';

export const Hyperlink = dynamic(() => import('./Hyperlink'));
export const Modal = dynamic(() => import('./Modal'), { ssr: false });
export const PageRefresh = dynamic(() => import('./PageRefresh'));
