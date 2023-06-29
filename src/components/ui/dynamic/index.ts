import dynamic from 'next/dynamic';

export const AnimationWrapper = dynamic(() => import('./AnimationWrapper'));
export const ErrorModal = dynamic(() => import('./ErrorModal'));
export const Hyperlink = dynamic(() => import('./Hyperlink'));
export const PageRefresh = dynamic(() => import('./PageRefresh'));
