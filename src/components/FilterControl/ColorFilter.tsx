import SelectOption from '@root/components/ui/static/SelectOption';
import { colorDefaultSelect, colorSelectList } from '@root/components/ui/SubComponent';
import { useQueryOnChange } from '@root/hooks/useQueryOnChange';
import { useSecuredRouter } from '@root/hooks/useSecuredRouter';
import type { ModuleIdProps } from '@root/types/common/props';
import type { ColorEnum } from '@root/types/common/zod';
import { useMemo } from 'react';

type ColorFilterProps = ModuleIdProps;

export default function ColorFilter({ moduleId }: ColorFilterProps) {
	const { securedQuery, updateQuery } = useSecuredRouter();

	const defaultColor = useMemo(
		() => colorSelectList.find(({ value }) => value === securedQuery.color) ?? colorDefaultSelect,
		[securedQuery.color],
	);

	const [colorSelected, setColorSelected] = useQueryOnChange<ColorEnum | null>(defaultColor, color =>
		updateQuery({ color }, moduleId),
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
