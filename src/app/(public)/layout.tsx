import ScrollWrapper from '@root/components/layout/client/ScrollWrapper';
import ThemeWrapper from '@root/components/layout/client/ThemeWrapper';
import { metaThemeColorMap } from '@root/constants';
import type { ChildrenProps } from '@root/types/common/props';
import type { DaisyUIThemeEnum } from '@root/types/common/zod';
import { daisyUIThemeEnumSchema } from '@root/types/common/zod';
import { LogProvider, tryCatchHandler } from '@root/utils/common';
import { ContextProvider } from '@root/utils/context';
import { getCookie } from 'cookies-next';
import type { Metadata } from 'next';

const getCurrentTheme = async (): Promise<DaisyUIThemeEnum> => {
	if (typeof window !== 'undefined') return daisyUIThemeEnumSchema.parse(getCookie('theme', { path: '/' }));
	const headersResult = await tryCatchHandler(import('next/headers'));

	if (!headersResult.isSuccess) {
		LogProvider.write({ args: [`Error importing next/headers:`, headersResult.error], type: 'error' });
		return 'fantasy';
	}

	return daisyUIThemeEnumSchema.parse(headersResult.data.cookies().get('theme')?.value);
};

export async function generateMetadata(): Promise<Metadata> {
	const currentTheme = await getCurrentTheme();

	return { themeColor: metaThemeColorMap[currentTheme] };
}

export default async function PublicLayout({ children }: ChildrenProps) {
	const currentTheme = await getCurrentTheme();

	return (
		<ContextProvider defaultState={{ theme: currentTheme }}>
			<ThemeWrapper>
				<ScrollWrapper>{children}</ScrollWrapper>
			</ThemeWrapper>
		</ContextProvider>
	);
}
