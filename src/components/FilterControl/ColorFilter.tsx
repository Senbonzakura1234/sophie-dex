import SelectOption from '@root/components/SelectOption';
import { colorDefaultSelect, colorSelectList } from '@root/components/SubComponent';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSearchQuery } from '@root/hooks/useSecuredRouter';
import type { ColorEnum } from '@root/types/common/zod';
import { useMemo } from 'react';

export default function ColorFilter() {
	const { securedQuery, updateQuery, isRouterReady } = useSearchQuery();

	const defaultColor = useMemo(
		() => colorSelectList.find(({ value }) => value === securedQuery.color) ?? colorDefaultSelect,
		[securedQuery.color],
	);

	const [colorSelected, setColorSelected] = useQueryOnChange<ColorEnum | null>(
		defaultColor,
		color => updateQuery({ color }),
		isRouterReady,
	);

	return (
		<SelectOption<ColorEnum | null>
			list={colorSelectList}
			setValue={setColorSelected}
			value={colorSelected}
			className='my-auto w-2/3 min-w-fit sm:w-32'
			useCustomIcon
			withIcon
		/>
	);
}
