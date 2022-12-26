import type { CATEGORY, COLOR } from '@prisma/client';
import { getFramerFadeUp } from '@root/animations';
import type { cateSelected, ColorSelected, RelatedCateSelected } from '@root/types/common';
import type {
	FilterControlPlaceHolderProps,
	ListPlaceHolderProps,
	RecordPlaceHolderProps,
} from '@root/types/common/props';
import type { UnicodeClass } from '@root/types/fonts/atelier';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import type { FC } from 'react';

export const hideCategoryOnTrait: Readonly<CATEGORY[]> = ['KEY_ITEM', 'MACHINE', 'MATERIAL', 'BOOK'] as const;

export const categoryMap = new Map<
	CATEGORY,
	{
		name: string;
		className: UnicodeClass;
	}
>([
	[
		'ATK_ITEM',
		{
			name: 'Attack Item',
			className: 'atelier__type-attack',
		},
	],
	[
		'HEAL_ITEM',
		{
			name: 'Heal Item',
			className: 'atelier__type-heal',
		},
	],
	[
		'DE_BUFF_ITEM',
		{
			name: 'De-Buff Item',
			className: 'atelier__type-debuff',
		},
	],
	[
		'BUFF_ITEM',
		{
			name: 'Buff Item',
			className: 'atelier__type-buff',
		},
	],
	[
		'WEAPON',
		{
			name: 'Weapon',
			className: 'atelier__type-weapon',
		},
	],
	[
		'ARMOR',
		{
			name: 'Armor',
			className: 'atelier__type-armor',
		},
	],
	[
		'ACCESSORY',
		{
			name: 'Accessory',
			className: 'atelier__type-accessory',
		},
	],
	[
		'MATERIAL',
		{
			name: 'Material',
			className: 'atelier__material',
		},
	],
	[
		'BOOK',
		{
			name: 'Book',
			className: 'atelier__book',
		},
	],
	[
		'EXPLORATION',
		{
			name: 'Exploration',
			className: 'atelier__tool-gather',
		},
	],
	[
		'MACHINE',
		{
			name: 'Machine',
			className: 'atelier__category-neutralizers',
		},
	],
	[
		'KEY_ITEM',
		{
			name: 'Key Item',
			className: 'atelier__category-key-items',
		},
	],
	[
		'SYNTHESIS',
		{
			name: 'Synthesis',
			className: 'atelier__type-synthesis',
		},
	],
]);

const colorMap = ['RED', 'BLUE', 'GREEN', 'YELLOW', 'WHITE', 'NONE'] satisfies COLOR[];

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
	...[...categoryMap].map(([code, { name, className }]) => ({
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

export const RecordPlaceHolder: FC<RecordPlaceHolderProps> = ({ isSuccess }) => (
	<motion.div
		{...getFramerFadeUp(0, 10, 0.1)}
		className={clsx({ hidden: isSuccess }, 'card bg-base-100 h-[300px] w-full animate-pulse')}
	></motion.div>
);

export const ListPlaceHolder: FC<ListPlaceHolderProps> = ({ limit, isSuccess }) => (
	<>
		{Array(limit)
			.fill(0)
			.map((_, k) => (
				<RecordPlaceHolder key={k} isSuccess={isSuccess} />
			))}
	</>
);

export const FilterControlPlaceHolder: FC<FilterControlPlaceHolderProps> = ({ isSuccess }) => (
	<>
		<motion.div
			{...getFramerFadeUp(0, 10, 0.1)}
			className={clsx({ hidden: isSuccess }, 'container mx-auto w-full animate-pulse px-3 pb-3 pt-6')}
		>
			<div className='card bg-base-100 shadow-primary ml-auto h-[50px] w-full rounded-full shadow-lg md:w-1/4 md:min-w-[300px]'></div>
		</motion.div>

		<motion.div
			{...getFramerFadeUp(0, 10, 0.1)}
			className={clsx({ hidden: isSuccess }, 'container mx-auto w-full animate-pulse p-3')}
		>
			<div className='card bg-base-100 shadow-primary h-[60px] w-full shadow-lg'></div>
		</motion.div>
	</>
);
