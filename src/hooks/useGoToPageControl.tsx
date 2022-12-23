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
			if (isReady && goTo.value !== goToPage.value) updateQuery({ page: goTo.value });
		},
		[goToPage.value, isReady, updateQuery],
	);

	return { goToPage, setGoToPage };
};
