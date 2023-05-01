import type { COLOR } from '@prisma/client';
import SelectOption from '@root/components/SelectOption';
import { colorDefaultSelect, colorSelectList } from '@root/components/SubComponent';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { PageNameProps } from '@root/types/common/props';
import clsx from 'clsx';
import { useMemo } from 'react';

type ColorFilterProps = PageNameProps;

export default function ColorFilter({ pageName }: ColorFilterProps) {
	const { securedQuery, updateQuery, isReady } = useSearchQuery();

	const defaultColor = useMemo(
		() => colorSelectList.find(({ value }) => value === securedQuery.color) ?? colorDefaultSelect,
		[securedQuery.color],
	);

	const [colorSelected, setColorSelected] = useQueryOnChange<COLOR | null>(
		defaultColor,
		color => updateQuery({ page: null, color }),
		isReady,
	);

	return (
		<SelectOption<COLOR | null>
			list={colorSelectList}
			setValue={setColorSelected}
			value={colorSelected}
			className={clsx(
				{
					block: pageName === 'Item',
					hidden: pageName !== 'Item',
				},
				'my-auto w-2/3 min-w-fit sm:w-32',
			)}
			useCustomIcon
			withIcon
		/>
	);
}
