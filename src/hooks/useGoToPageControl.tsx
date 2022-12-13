import type { SelectOptionItem } from '@root/types/common';
import { isEqualWithNullish } from '@root/utils/helper';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useMemo, useState } from 'react';

import { useSearchQuery } from './useSearchQuery';

export const useGoToPageControl = (): {
	goToPage: SelectOptionItem<string | null>;
	setGoToPage: Dispatch<SetStateAction<SelectOptionItem<string | null>>>;
	isCanGoToPage: boolean;
} => {
	const { securedQuery, isReady } = useSearchQuery();

	const [goToPage, setGoToPage] = useState<SelectOptionItem<string | null>>({
		value: securedQuery.page ?? null,
		label: `Page ${securedQuery.page ?? '1'}`,
	});

	const isGoToPageValid = useMemo(
		() => !isEqualWithNullish(goToPage.value ?? '1', securedQuery.page ?? '1'),
		[goToPage.value, securedQuery.page],
	);

	const isCanGoToPage = useMemo(() => isReady && isGoToPageValid, [isGoToPageValid, isReady]);

	useEffect(() => {
		setGoToPage(() => ({
			value: securedQuery.page ?? null,
			label: `Page ${securedQuery.page ?? '1'}`,
		}));
	}, [securedQuery.page]);

	return { goToPage, setGoToPage, isCanGoToPage };
};
