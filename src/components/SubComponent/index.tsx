import type { CATEGORY, COLOR } from '@prisma/client';
import type { cateSelected, ColorSelected, RelatedCateSelected } from '@root/types/common';
import type { ListPlaceHolderProps } from '@root/types/common/props';
import type { UnicodeClass } from '@root/types/fonts/atelier';
import type { FC } from 'react';

export const categoryMap = [
	{
		code: 'ATK_ITEM',
		name: 'Attack Item',
		className: 'atelier-ryza2-type-attack',
	},
	{
		code: 'HEAL_ITEM',
		name: 'Heal Item',
		className: 'atelier-ryza2-type-heal',
	},
	{
		code: 'DE_BUFF_ITEM',
		name: 'De-Buff Item',
		className: 'atelier-ryza2-type-debuff',
	},
	{
		code: 'BUFF_ITEM',
		name: 'Buff Item',
		className: 'atelier-ryza2-type-buff',
	},
	{
		code: 'WEAPON',
		name: 'Weapon',
		className: 'atelier-ryza2-type-weapon',
	},
	{
		code: 'ARMOR',
		name: 'Armor',
		className: 'atelier-ryza2-type-armor',
	},
	{
		code: 'ACCESSORY',
		name: 'Accessory',
		className: 'atelier-ryza2-type-accessory',
	},

	{
		code: 'MATERIAL',
		name: 'Material',
		className: 'atelier-ryza2-category-accessories',
	},

	{
		code: 'BOOK',
		name: 'Book',
		className: 'atelier-ryza2-category-accessories',
	},

	{
		code: 'EXPLORATION',
		name: 'Exploration',
		className: 'atelier-ryza2-category-accessories',
	},

	{
		code: 'MACHINE',
		name: 'Machine',
		className: 'atelier-ryza2-category-accessories',
	},

	{
		code: 'SYNTHESIS',
		name: 'Synthesis',
		className: 'atelier-ryza2-category-accessories',
	},
] satisfies {
	code: CATEGORY;
	name: string;
	className: UnicodeClass;
}[];

const colorMap = ['BLUE', 'GREEN', 'RED', 'WHITE', 'YELLOW', 'NONE'] satisfies COLOR[];

export const RelatedCategorySelectList = [
	{
		value: null,
		label: '------------',
	},
	{
		value: 'PLANT',
		label: 'Plant',
	},
	{
		value: 'MEDICINE_MAT',
		label: 'Medicine Mat',
	},
	{
		value: 'WATER',
		label: 'Water',
	},
	{
		value: 'IMPORTANT',
		label: 'Important',
	},
	{
		value: 'BOMB',
		label: 'Bomb',
	},
	{
		value: 'MEDICINE',
		label: 'Medicine',
	},
	{
		value: 'FOOD',
		label: 'Food',
	},
	{
		value: 'SWEETS',
		label: 'Sweets',
	},
	{
		value: 'CLOTH',
		label: 'Cloth',
	},
	{
		value: 'NEUTRALIZER',
		label: 'Neutralizer',
	},
	{
		value: 'WEAPON_MAT',
		label: 'Weapon Mat',
	},
	{
		value: 'ARMOR_MAT',
		label: 'Armor Mat',
	},
	{
		value: 'WEAPON',
		label: 'Weapon',
	},
	{
		value: 'ARMOR',
		label: 'Armor',
	},
	{
		value: 'ACCESSORY',
		label: 'Accessory',
	},
	{
		value: 'POISON_MAT',
		label: 'Poison Mat',
	},
	{
		value: 'SECRET_POWER',
		label: 'Secret Power',
	},
	{
		value: 'FUEL',
		label: 'Fuel',
	},
	{
		value: 'THREAD',
		label: 'Thread',
	},
	{
		value: 'WOOD',
		label: 'Wood',
	},
	{
		value: 'ELIXIR',
		label: 'Elixir',
	},
	{
		value: 'ORE',
		label: 'Ore',
	},
	{
		value: 'GUNPOWDER',
		label: 'Gunpowder',
	},
	{
		value: 'GEM',
		label: 'Gem',
	},
	{
		value: 'METAL',
		label: 'Metal',
	},
	{
		value: 'CLAY',
		label: 'Clay',
	},
	{
		value: 'ANIMAL',
		label: 'Animal',
	},
	{
		value: 'INGREDIENT',
		label: 'Ingredient',
	},
	{
		value: 'PAPER',
		label: 'Paper',
	},
	{
		value: 'MAGIC_ITEM',
		label: 'Magic Item',
	},
] satisfies RelatedCateSelected[];

export const defaultSelect = {
	value: null,
	label: '----------',
	icon: <span className='h-4 w-4 2xl:h-5 2xl:w-5' aria-hidden='true' />,
};

export const categorySelectList = [
	defaultSelect,
	...categoryMap.map(({ code, name, className }) => ({
		label: name,
		value: code,
		icon: <span className={`h-4 w-4 2xl:h-5 2xl:w-5 ${className}`} aria-hidden='true' />,
	})),
] satisfies cateSelected[];

export const ColorSelectList = [
	defaultSelect,
	...colorMap.map(color => ({
		label: <span className='capitalize'>{color.toLocaleLowerCase()}</span>,
		value: color,
	})),
] satisfies ColorSelected[];

export const RecordPlaceHolder: FC = () => <div className='card bg-base-100 h-[300px] w-full animate-pulse'></div>;

export const ListPlaceHolder: FC<ListPlaceHolderProps> = ({ limit }) => (
	<>
		{Array(limit)
			.fill(0)
			.map((_, k) => (
				<RecordPlaceHolder key={k} />
			))}
	</>
);
export const FilterControlPlaceHolder: FC = () => (
	<div className='container mx-auto mt-3 w-full animate-pulse p-3'>
		<div className='card bg-base-100 h-[60px] w-full'></div>
	</div>
);
