import type { CATEGORY, COLOR, RECIPE_TYPE, RUMOR_TYPE } from '@prisma/client';
import { getFramerInViewFadeUp } from '@root/animations';
import { defaultLimit } from '@root/constants';
import type { SelectOptionItem } from '@root/types/common';
import type { FetchStateProps, IsPaginateOnlyProps } from '@root/types/common/props';
import type { UnicodeClass } from '@root/types/fonts/atelier';
import clsx from 'clsx';
import { domAnimation, LazyMotion, m as motion } from 'framer-motion';
import type { FC } from 'react';

type FilterControlPlaceHolderProps = FetchStateProps & IsPaginateOnlyProps;
type RecordPlaceHolderProps = FetchStateProps & { color?: COLOR };
type ListPlaceHolderProps = FetchStateProps;

export const hideCategoryOnTrait: Readonly<CATEGORY[]> = ['KEY_ITEM', 'MACHINE', 'MATERIAL', 'BOOK'] as const;

export const categoryMap = new Map<CATEGORY, { name: string; className: UnicodeClass }>([
	['MATERIAL', { name: 'Material', className: 'atelier__material' }],
	['SYNTHESIS', { name: 'Synthesis', className: 'atelier__type-synthesis' }],
	['WEAPON', { name: 'Weapon', className: 'atelier__type-weapon' }],
	['ARMOR', { name: 'Armor', className: 'atelier__type-armor' }],
	['ATK_ITEM', { name: 'Attack Item', className: 'atelier__type-attack' }],
	['ACCESSORY', { name: 'Accessory', className: 'atelier__type-accessory' }],
	['HEAL_ITEM', { name: 'Heal Item', className: 'atelier__type-heal' }],
	['KEY_ITEM', { name: 'Key Item', className: 'atelier__category-key-items' }],
	['BUFF_ITEM', { name: 'Buff Item', className: 'atelier__type-buff' }],
	['DE_BUFF_ITEM', { name: 'De-Buff Item', className: 'atelier__type-debuff' }],
	['EXPLORATION', { name: 'Exploration', className: 'atelier__tool-gather' }],
	['BOOK', { name: 'Book', className: 'atelier__book' }],
	['MACHINE', { name: 'Machine', className: 'atelier__category-neutralizers' }],
]);

export const rumorTypeMap = new Map<RUMOR_TYPE, { name: Capitalize<Lowercase<RUMOR_TYPE>>; className: UnicodeClass }>([
	['MATERIAL', { className: 'atelier__material', name: 'Material' }],
	['MONSTER', { className: 'atelier__race-puni', name: 'Monster' }],
]);

const colorMap = ['RED', 'BLUE', 'GREEN', 'YELLOW', 'WHITE'] satisfies COLOR[];

const recipeTypeMap = [
	'BEGINNER_RECIPES',
	'GROWTH_RECIPES',
	'HOPE_RECIPES',
	'DREAM_RECIPES',
	'MYSTERY_RECIPES',
] satisfies RECIPE_TYPE[];

export const categoryDefaultSelect = {
	value: null,
	label: 'Category',
	icon: <span className='h-4 w-4 2xl:h-5 2xl:w-5' aria-hidden='true' />,
};

export const colorDefaultSelect = {
	value: null,
	label: 'Color',
	icon: <span className='h-4 w-4 2xl:h-5 2xl:w-5' aria-hidden='true' />,
};

export const recipeTypeDefaultSelect = {
	value: null,
	label: 'Recipe type',
	icon: <span className='h-4 w-4 2xl:h-5 2xl:w-5' aria-hidden='true' />,
};

export const rumorTypeDefaultSelect = {
	value: null,
	label: 'Rumor type',
	icon: <span className='h-4 w-4 2xl:h-5 2xl:w-5' aria-hidden='true' />,
};

export const categorySelectList = [
	categoryDefaultSelect,
	...[...categoryMap].map(([code, { name, className }]) => ({
		label: name,
		value: code,
		icon: <span className={`h-4 w-4 2xl:h-5 2xl:w-5 ${className}`} aria-hidden='true' />,
	})),
] satisfies SelectOptionItem<CATEGORY | null>[];

export const rumorTypeSelectList = [
	rumorTypeDefaultSelect,
	...[...rumorTypeMap].map(([code, { className, name }]) => ({
		label: <span>{name}</span>,
		value: code,
		icon: <span className={`h-4 w-4 2xl:h-5 2xl:w-5 ${className}`} aria-hidden='true' />,
	})),
] satisfies SelectOptionItem<RUMOR_TYPE | null>[];

export const colorSelectList = [
	colorDefaultSelect,
	...colorMap.map(color => ({
		label: <span className='capitalize'>{color.toLocaleLowerCase()}</span>,
		value: color,
		icon: (
			<span
				className={clsx(
					{
						'bg-blue-500 shadow-blue-500': color === 'BLUE',
						'bg-green-500 shadow-green-500': color === 'GREEN',
						'bg-red-500 shadow-red-500': color === 'RED',
						'bg-slate-500 shadow-slate-500': color === 'WHITE',
						'bg-yellow-400 shadow-yellow-400': color === 'YELLOW',
					},
					'h-4 w-4 rounded-full',
				)}
				aria-hidden='true'
			/>
		),
	})),
] satisfies SelectOptionItem<COLOR | null>[];

export const recipeTypeSelectList = [
	recipeTypeDefaultSelect,
	...recipeTypeMap.map(recipeType => ({
		label: <span className='capitalize'>{recipeType.toLocaleLowerCase().replaceAll('_', ' ')}</span>,
		value: recipeType,
		icon: (
			<span
				className={clsx(
					{
						'bg-red-500 shadow-red-500': recipeType === 'BEGINNER_RECIPES',
						'bg-blue-500 shadow-blue-500': recipeType === 'GROWTH_RECIPES',
						'bg-green-500 shadow-green-500': recipeType === 'HOPE_RECIPES',
						'bg-yellow-400 shadow-yellow-400': recipeType === 'DREAM_RECIPES',
						'bg-slate-500 shadow-slate-500': recipeType === 'MYSTERY_RECIPES',
					},
					'h-4 w-4 rounded-full',
				)}
				aria-hidden='true'
			/>
		),
	})),
] satisfies SelectOptionItem<RECIPE_TYPE | null>[];

export const RecordPlaceHolder: FC<RecordPlaceHolderProps> = ({ isSuccess, isError, color }) => (
	<LazyMotion features={domAnimation} strict>
		<motion.div
			{...getFramerInViewFadeUp()}
			className={clsx(
				{
					hidden: isSuccess || isError,
					'to-base-100 shadow-primary': !color,
					'to-blue-500 shadow-blue-500': color === 'BLUE',
					'to-green-500 shadow-green-500': color === 'GREEN',
					'to-red-500 shadow-red-500': color === 'RED',
					'to-slate-500 shadow-slate-500': color === 'WHITE',
					'to-yellow-400 shadow-yellow-400': color === 'YELLOW',
				},
				'card from-base-100 via-base-100 shadow-primary h-60 w-full animate-pulse bg-gradient-to-r shadow-lg',
			)}
		/>
	</LazyMotion>
);

export const ListPlaceHolder: FC<ListPlaceHolderProps> = ({ isSuccess, isError }) => (
	<>
		{Array(defaultLimit)
			.fill(0)
			.map((_, k) => (
				<RecordPlaceHolder key={k} isSuccess={isSuccess} isError={isError} />
			))}
	</>
);

export const FilterControlPlaceHolder: FC<FilterControlPlaceHolderProps> = ({ isSuccess, isPaginateOnly, isError }) => (
	<LazyMotion features={domAnimation} strict>
		<motion.div
			{...getFramerInViewFadeUp()}
			className={clsx(
				{ hidden: isSuccess || isError || isPaginateOnly },
				'container mx-auto w-full animate-pulse max-2xl:px-4',
			)}
		>
			<div className='card bg-base-100 shadow-primary ml-auto h-[50px] w-full rounded-full shadow-lg md:w-1/4 md:min-w-[300px]'></div>
		</motion.div>
		<motion.div
			{...getFramerInViewFadeUp()}
			className={clsx({ hidden: isSuccess || isError }, 'container mx-auto w-full animate-pulse max-2xl:px-4')}
		>
			<div className='card bg-base-100 shadow-primary h-[60px] w-full shadow-lg' />
		</motion.div>
	</LazyMotion>
);
