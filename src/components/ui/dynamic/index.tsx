import dynamic from 'next/dynamic';

export const Alert = dynamic(() => import('./Alert'), { ssr: false });
export const CopyUrlButton = dynamic(() => import('./CopyUrlButton'), {
	ssr: false,
	loading: () => <div className='h6 aspect-square'></div>,
});
export const Hyperlink = dynamic(() => import('./Hyperlink'));
export const Modal = dynamic(() => import('./Modal'), { ssr: false });
export const PageRefresh = dynamic(() => import('./PageRefresh'));
