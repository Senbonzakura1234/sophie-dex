import localFont from 'next/font/local';

const fontComicSansMS = localFont({
	src: [
		{ path: './comic-sans-ms/regular.woff2', style: 'normal', weight: '400' },
		{ path: './comic-sans-ms/italic.woff2', style: 'italic', weight: '400' },
		{ path: './comic-sans-ms/regular-bold.woff2', style: 'normal', weight: '700' },
		{ path: './comic-sans-ms/italic-bold.woff2', style: 'italic', weight: '700' },
	],
	display: 'fallback',
});

const fontAtelier = localFont({ src: './Atelier.woff2', variable: '--font-atelier', display: 'fallback' });

export { fontAtelier, fontComicSansMS };
