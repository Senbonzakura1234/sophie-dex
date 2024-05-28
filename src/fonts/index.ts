import localFont from 'next/font/local';

export const fontComicSansMS = localFont({
	src: [
		{ path: './comic-sans-ms/regular.woff2', style: 'normal', weight: '400' },
		{ path: './comic-sans-ms/italic.woff2', style: 'italic', weight: '400' },
		{ path: './comic-sans-ms/regular-bold.woff2', style: 'normal', weight: '700' },
		{ path: './comic-sans-ms/italic-bold.woff2', style: 'italic', weight: '700' }
	],
	display: 'block'
});

export const fontAtelier = localFont({ src: './Atelier.woff2', variable: '--font-atelier', display: 'block' });
