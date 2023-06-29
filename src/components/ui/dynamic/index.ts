import dynamic from 'next/dynamic';

export const AnimationWrapper = dynamic(() => import('./AnimationWrapper'));
export const Hyperlink = dynamic(() => import('./Hyperlink'));
export const PageRefresh = dynamic(() => import('./PageRefresh'));
