import type { GoToPage, SetGoToPage } from '@root/types/common';
import type { UseGoToPageControl } from '@root/types/common/hook';
import { useCallback, useMemo } from 'react';

import { useSearchQuery } from './useSecuredRouter';

export const useGoToPageControl: UseGoToPageControl = () => {
	const { securedQuery, updateQuery, isReady } = useSearchQuery();

	const goToPage: GoToPage = useMemo(
		() => ({
			value: securedQuery.page ?? null,
			label: `Page ${securedQuery.page ?? '1'}`,
		}),
		[securedQuery.page],
	);

	const setGoToPage: SetGoToPage = useCallback(
		goTo => {
			const cur = goTo instanceof Function ? goTo(goToPage) : goTo;

			if (isReady && cur.value !== goToPage.value) updateQuery({ page: cur.value });
		},
		[goToPage, isReady, updateQuery],
	);

	return { goToPage, setGoToPage };
};
