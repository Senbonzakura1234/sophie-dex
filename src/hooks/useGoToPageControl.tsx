import type { GoToPage, SetGoToPage } from '@root/types/common';
import { isEqualWithNullish } from '@root/utils/helper';
import { useEffect, useMemo, useState } from 'react';

import { useSearchQuery } from './useSecuredRouter';

export const useGoToPageControl = (): {
	goToPage: GoToPage;
	setGoToPage: SetGoToPage;
	isCanGoToPage: boolean;
} => {
	const { securedQuery, isReady } = useSearchQuery();

	const defaultGoToPage = useMemo(
		() => ({
			value: securedQuery.page ?? null,
			label: `Page ${securedQuery.page ?? '1'}`,
		}),
		[securedQuery.page],
	);

	const [goToPage, setGoToPage] = useState<GoToPage>(defaultGoToPage);

	const isGoToPageValid = useMemo(
		() => !isEqualWithNullish(goToPage.value ?? '1', securedQuery.page ?? '1'),
		[goToPage.value, securedQuery.page],
	);

	const isCanGoToPage = useMemo(() => isReady && isGoToPageValid, [isGoToPageValid, isReady]);

	useEffect(() => {
		setGoToPage(() => defaultGoToPage);
	}, [defaultGoToPage]);

	return { goToPage, setGoToPage, isCanGoToPage };
};
