import type { Trait } from '@prisma/client';

const traits: Trait[] = [
	{
		categories: [
			'ACCESSORY',
			'ARMOR',
			'ATK_ITEM',
			'BUFF_ITEM',
			'DE_BUFF_ITEM',
			'HEAL_ITEM',
			'WEAPON',
			'EXPLORATION',
			'SYNTHESIS',
		],
		description: 'Effect: Price when selling to shops decreases a little, but also decreases duplication price.',
		id: '638a4d47a44f4fa4b0dec965',
		index: 0,
		mergeFrom: [],
		name: 'Low Price',
	},
	{
		categories: [
			'ACCESSORY',
			'ARMOR',
			'ATK_ITEM',
			'BUFF_ITEM',
			'DE_BUFF_ITEM',
			'HEAL_ITEM',
			'WEAPON',
			'EXPLORATION',
			'SYNTHESIS',
		],
		description: 'Effect: Price when selling to shops decreases quite a bit, but also decreases duplication price.',
		id: '638a4d47a44f4fa4b0dec96a',
		index: 1,
		mergeFrom: [],
		name: 'Low Price+',
	},
	{
		categories: [
			'ACCESSORY',
			'ARMOR',
			'ATK_ITEM',
			'BUFF_ITEM',
			'DE_BUFF_ITEM',
			'HEAL_ITEM',
			'WEAPON',
			'EXPLORATION',
			'SYNTHESIS',
		],
		description: 'Effect: Price when selling to shops decreases quite a lot, but also decreases duplication price.',
		id: '638a4d47a44f4fa4b0dec968',
		index: 2,
		mergeFrom: [],
		name: 'Low Price++',
	},
	{
		categories: [
			'ACCESSORY',
			'ARMOR',
			'ATK_ITEM',
			'BUFF_ITEM',
			'DE_BUFF_ITEM',
			'HEAL_ITEM',
			'WEAPON',
			'EXPLORATION',
			'SYNTHESIS',
		],
		description: 'Effect: Price when selling to shops decreases quite a lot, but also decreases duplication price.',
		id: '638a4d47a44f4fa4b0dec963',
		index: 3,
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Price when selling to shops decreases a little, but also decreases duplication price.',
						id: '638a4d47a44f4fa4b0dec965',
						index: 0,
						name: 'Low Price',
					},
					{
						description:
							'Effect: Price when selling to shops decreases quite a bit, but also decreases duplication price.',
						id: '638a4d47a44f4fa4b0dec96a',
						index: 1,
						name: 'Low Price+',
					},
				],
			},
		],
		name: 'Common Item',
	},
	{
		categories: [
			'ACCESSORY',
			'ARMOR',
			'ATK_ITEM',
			'BUFF_ITEM',
			'DE_BUFF_ITEM',
			'HEAL_ITEM',
			'WEAPON',
			'EXPLORATION',
			'SYNTHESIS',
		],
		description: 'Effect: Price when selling to shops decreases massively, but also decreases duplication price.',
		id: '638a4d47a44f4fa4b0dec96b',
		index: 4,
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Price when selling to shops decreases quite a bit, but also decreases duplication price.',
						id: '638a4d47a44f4fa4b0dec96a',
						index: 1,
						name: 'Low Price+',
					},
					{
						description:
							'Effect: Price when selling to shops decreases quite a lot, but also decreases duplication price.',
						id: '638a4d47a44f4fa4b0dec968',
						index: 2,
						name: 'Low Price++',
					},
				],
			},
		],
		name: 'Mass Produced',
	},
	{
		categories: [
			'ACCESSORY',
			'ARMOR',
			'ATK_ITEM',
			'BUFF_ITEM',
			'DE_BUFF_ITEM',
			'HEAL_ITEM',
			'WEAPON',
			'EXPLORATION',
			'SYNTHESIS',
		],
		description: 'Effect: Price when selling to shops plummets, but also decreases duplication price.',
		id: '638a4d47a44f4fa4b0dec969',
		index: 5,
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Price when selling to shops decreases quite a lot, but also decreases duplication price.',
						id: '638a4d47a44f4fa4b0dec963',
						index: 3,
						name: 'Common Item',
					},
					{
						description:
							'Effect: Price when selling to shops decreases massively, but also decreases duplication price.',
						id: '638a4d47a44f4fa4b0dec96b',
						index: 4,
						name: 'Mass Produced',
					},
				],
			},
		],
		name: 'No Price',
	},
	{
		categories: [
			'ACCESSORY',
			'ARMOR',
			'ATK_ITEM',
			'BUFF_ITEM',
			'DE_BUFF_ITEM',
			'HEAL_ITEM',
			'WEAPON',
			'EXPLORATION',
			'SYNTHESIS',
		],
		description: 'Effect: Price when selling to shops increases a little.',
		id: '638a4d47a44f4fa4b0dec967',
		index: 6,
		mergeFrom: [],
		name: 'High Price',
	},
	{
		categories: [
			'ACCESSORY',
			'ARMOR',
			'ATK_ITEM',
			'BUFF_ITEM',
			'DE_BUFF_ITEM',
			'HEAL_ITEM',
			'WEAPON',
			'EXPLORATION',
			'SYNTHESIS',
		],
		description: 'Effect: Price when selling to shops increases quite a bit.',
		id: '638a4d47a44f4fa4b0dec962',
		index: 7,
		mergeFrom: [],
		name: 'High Price+',
	},
	{
		categories: [
			'ACCESSORY',
			'ARMOR',
			'ATK_ITEM',
			'BUFF_ITEM',
			'DE_BUFF_ITEM',
			'HEAL_ITEM',
			'WEAPON',
			'EXPLORATION',
			'SYNTHESIS',
		],
		description: 'Effect: Price when selling to shops increases quite a lot.',
		id: '638a4d47a44f4fa4b0dec966',
		index: 8,
		mergeFrom: [],
		name: 'High Price++',
	},
	{
		categories: [
			'ACCESSORY',
			'ARMOR',
			'ATK_ITEM',
			'BUFF_ITEM',
			'DE_BUFF_ITEM',
			'HEAL_ITEM',
			'WEAPON',
			'EXPLORATION',
			'SYNTHESIS',
		],
		description: 'Effect: Price when selling to shops increases quite a lot.',
		id: '638a4d47a44f4fa4b0dec96e',
		index: 9,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Price when selling to shops increases a little.',
						id: '638a4d47a44f4fa4b0dec967',
						index: 6,
						name: 'High Price',
					},
					{
						description: 'Effect: Price when selling to shops increases quite a bit.',
						id: '638a4d47a44f4fa4b0dec962',
						index: 7,
						name: 'High Price+',
					},
				],
			},
		],
		name: 'High Class',
	},
	{
		categories: [
			'ACCESSORY',
			'ARMOR',
			'ATK_ITEM',
			'BUFF_ITEM',
			'DE_BUFF_ITEM',
			'HEAL_ITEM',
			'WEAPON',
			'EXPLORATION',
			'SYNTHESIS',
		],
		description: 'Effect: Price when selling to shops increases massively.',
		id: '638a4d47a44f4fa4b0dec96d',
		index: 10,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Price when selling to shops increases quite a bit.',
						id: '638a4d47a44f4fa4b0dec962',
						index: 7,
						name: 'High Price+',
					},
					{
						description: 'Effect: Price when selling to shops increases quite a lot.',
						id: '638a4d47a44f4fa4b0dec966',
						index: 8,
						name: 'High Price++',
					},
				],
			},
		],
		name: 'Rare Item',
	},
	{
		categories: [
			'ACCESSORY',
			'ARMOR',
			'ATK_ITEM',
			'BUFF_ITEM',
			'DE_BUFF_ITEM',
			'HEAL_ITEM',
			'WEAPON',
			'EXPLORATION',
			'SYNTHESIS',
		],
		description: 'Effect: Price when selling to shops skyrockets.',
		id: '638a4d47a44f4fa4b0dec964',
		index: 11,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Price when selling to shops increases quite a lot.',
						id: '638a4d47a44f4fa4b0dec96e',
						index: 9,
						name: 'High Class',
					},
					{
						description: 'Effect: Price when selling to shops increases massively.',
						id: '638a4d47a44f4fa4b0dec96d',
						index: 10,
						name: 'Rare Item',
					},
				],
			},
		],
		name: 'Premium Price',
	},
	{
		categories: [
			'ACCESSORY',
			'ARMOR',
			'ATK_ITEM',
			'BUFF_ITEM',
			'DE_BUFF_ITEM',
			'HEAL_ITEM',
			'WEAPON',
			'EXPLORATION',
			'SYNTHESIS',
		],
		description: 'Effect: Increases item quality by 10% when this trait is transferred.',
		id: '638a4d47a44f4fa4b0dec982',
		index: 12,
		mergeFrom: [],
		name: 'Quality Up',
	},
	{
		categories: [
			'ACCESSORY',
			'ARMOR',
			'ATK_ITEM',
			'BUFF_ITEM',
			'DE_BUFF_ITEM',
			'HEAL_ITEM',
			'WEAPON',
			'EXPLORATION',
			'SYNTHESIS',
		],
		description: 'Effect: Increases item quality by 15% when this trait is transferred.',
		id: '638a4d47a44f4fa4b0dec970',
		index: 13,
		mergeFrom: [],
		name: 'Quality Up+',
	},
	{
		categories: [
			'ACCESSORY',
			'ARMOR',
			'ATK_ITEM',
			'BUFF_ITEM',
			'DE_BUFF_ITEM',
			'HEAL_ITEM',
			'WEAPON',
			'EXPLORATION',
			'SYNTHESIS',
		],
		description: 'Effect: Increases item quality by 20% when this trait is transferred.',
		id: '638a4d47a44f4fa4b0dec972',
		index: 14,
		mergeFrom: [],
		name: 'Quality Up++',
	},
	{
		categories: [
			'ACCESSORY',
			'ARMOR',
			'ATK_ITEM',
			'BUFF_ITEM',
			'DE_BUFF_ITEM',
			'HEAL_ITEM',
			'WEAPON',
			'EXPLORATION',
			'SYNTHESIS',
		],
		description: 'Effect: Increases item quality by 20% when this trait is transferred.',
		id: '638a4d47a44f4fa4b0dec973',
		index: 15,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases item quality by 10% when this trait is transferred.',
						id: '638a4d47a44f4fa4b0dec982',
						index: 12,
						name: 'Quality Up',
					},
					{
						description: 'Effect: Increases item quality by 15% when this trait is transferred.',
						id: '638a4d47a44f4fa4b0dec970',
						index: 13,
						name: 'Quality Up+',
					},
				],
			},
		],
		name: 'Well Made',
	},
	{
		categories: [
			'ACCESSORY',
			'ARMOR',
			'ATK_ITEM',
			'BUFF_ITEM',
			'DE_BUFF_ITEM',
			'HEAL_ITEM',
			'WEAPON',
			'EXPLORATION',
			'SYNTHESIS',
		],
		description: 'Effect: Increases item quality by 30% when this trait is transferred.',
		id: '638a4d47a44f4fa4b0dec97e',
		index: 16,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases item quality by 15% when this trait is transferred.',
						id: '638a4d47a44f4fa4b0dec970',
						index: 13,
						name: 'Quality Up+',
					},
					{
						description: 'Effect: Increases item quality by 20% when this trait is transferred.',
						id: '638a4d47a44f4fa4b0dec972',
						index: 14,
						name: 'Quality Up++',
					},
				],
			},
		],
		name: 'Pro Perfection',
	},
	{
		categories: [
			'ACCESSORY',
			'ARMOR',
			'ATK_ITEM',
			'BUFF_ITEM',
			'DE_BUFF_ITEM',
			'HEAL_ITEM',
			'WEAPON',
			'EXPLORATION',
			'SYNTHESIS',
		],
		description: 'Effect: Increases item quality by 50% when this trait is transferred.',
		id: '638a4d47a44f4fa4b0dec971',
		index: 17,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases item quality by 20% when this trait is transferred.',
						id: '638a4d47a44f4fa4b0dec973',
						index: 15,
						name: 'Well Made',
					},
					{
						description: 'Effect: Increases item quality by 30% when this trait is transferred.',
						id: '638a4d47a44f4fa4b0dec97e',
						index: 16,
						name: 'Pro Perfection',
					},
				],
			},
		],
		name: 'Super Quality',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases attack item effect by 5%.',
		id: '638a4d47a44f4fa4b0dec96c',
		index: 52,
		mergeFrom: [],
		name: 'Destruction Up',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases attack item effect by 7%.',
		id: '638a4d47a44f4fa4b0dec96f',
		index: 53,
		mergeFrom: [],
		name: 'Destruction Up+',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases attack item effect by 10%.',
		id: '638a4d47a44f4fa4b0dec984',
		index: 54,
		mergeFrom: [],
		name: 'Destruction Up++',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases attack item effect by 12%.',
		id: '638a4d47a44f4fa4b0dec974',
		index: 55,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases attack item effect by 5%.',
						id: '638a4d47a44f4fa4b0dec96c',
						index: 52,
						name: 'Destruction Up',
					},
					{
						description: 'Effect: Increases attack item effect by 7%.',
						id: '638a4d47a44f4fa4b0dec96f',
						index: 53,
						name: 'Destruction Up+',
					},
				],
			},
		],
		name: 'Big Destruction',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases attack item effect by 17%.',
		id: '638a4d47a44f4fa4b0dec977',
		index: 56,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases attack item effect by 7%.',
						id: '638a4d47a44f4fa4b0dec96f',
						index: 53,
						name: 'Destruction Up+',
					},
					{
						description: 'Effect: Increases attack item effect by 10%.',
						id: '638a4d47a44f4fa4b0dec984',
						index: 54,
						name: 'Destruction Up++',
					},
				],
			},
		],
		name: 'Intense Destruction',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases attack item effect by 30%.',
		id: '638a4d47a44f4fa4b0dec975',
		index: 57,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases attack item effect by 12%.',
						id: '638a4d47a44f4fa4b0dec974',
						index: 55,
						name: 'Big Destruction',
					},
					{
						description: 'Effect: Increases attack item effect by 17%.',
						id: '638a4d47a44f4fa4b0dec977',
						index: 56,
						name: 'Intense Destruction',
					},
				],
			},
		],
		name: 'Ultimate Destruction',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases attack item effect by 40%.',
		id: '638a4d47a44f4fa4b0dec979',
		index: 58,
		mergeFrom: [],
		name: 'Power to Destroy Gods',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Attack item enhanced by a small, fixed amount. Lower power equals stronger enhancement.',
		id: '638a4d47a44f4fa4b0dec978',
		index: 59,
		mergeFrom: [],
		name: 'Fixed Power',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Attack item enhanced by a fixed amount. Lower power equals stronger enhancement.',
		id: '638a4d47a44f4fa4b0dec976',
		index: 60,
		mergeFrom: [],
		name: 'Fixed Power+',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Attack item enhanced by a large, fixed amount. Lower power equals stronger enhancement.',
		id: '638a4d47a44f4fa4b0dec97b',
		index: 61,
		mergeFrom: [],
		name: 'Fixed Power++',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Attack item enhanced by a fixed amount. Lower power equals stronger enhancement.',
		id: '638a4d47a44f4fa4b0dec981',
		index: 62,
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Attack item enhanced by a small, fixed amount. Lower power equals stronger enhancement.',
						id: '638a4d47a44f4fa4b0dec978',
						index: 59,
						name: 'Fixed Power',
					},
					{
						description:
							'Effect: Attack item enhanced by a fixed amount. Lower power equals stronger enhancement.',
						id: '638a4d47a44f4fa4b0dec976',
						index: 60,
						name: 'Fixed Power+',
					},
				],
			},
		],
		name: 'Pain in Numbers',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Attack item enhanced by a large, fixed amount. Lower power equals stronger enhancement.',
		id: '638a4d47a44f4fa4b0dec97a',
		index: 63,
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Attack item enhanced by a fixed amount. Lower power equals stronger enhancement.',
						id: '638a4d47a44f4fa4b0dec976',
						index: 60,
						name: 'Fixed Power+',
					},
					{
						description:
							'Effect: Attack item enhanced by a large, fixed amount. Lower power equals stronger enhancement.',
						id: '638a4d47a44f4fa4b0dec97b',
						index: 61,
						name: 'Fixed Power++',
					},
				],
			},
		],
		name: 'Damage in Numbers',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Attack item enhanced by a huge, fixed amount. Lower power equals stronger enhancement.',
		id: '638a4d47a44f4fa4b0dec9a4',
		index: 64,
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Attack item enhanced by a fixed amount. Lower power equals stronger enhancement.',
						id: '638a4d47a44f4fa4b0dec981',
						index: 62,
						name: 'Pain in Numbers',
					},
					{
						description:
							'Effect: Attack item enhanced by a large, fixed amount. Lower power equals stronger enhancement.',
						id: '638a4d47a44f4fa4b0dec97a',
						index: 63,
						name: 'Damage in Numbers',
					},
				],
			},
		],
		name: 'Big Damage Numbers',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Effect: Attack item enhanced by a ridiculous, fixed amount. This increase scales with the original value.',
		id: '638a4d47a44f4fa4b0dec97c',
		index: 65,
		mergeFrom: [],
		name: 'Legendary Destruction',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Attacks cause 5% additional damage, and increases skill power by 5%.',
		id: '638a4d47a44f4fa4b0dec97f',
		index: 66,
		mergeFrom: [],
		name: 'Increase Sharpness',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Attacks cause 7% additional damage, and increases skill power by 7%.',
		id: '638a4d47a44f4fa4b0dec980',
		index: 67,
		mergeFrom: [],
		name: 'Cuts Easily',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Attacks cause 10% additional damage, and increases skill power by 10%.',
		id: '638a4d47a44f4fa4b0dec97d',
		index: 68,
		mergeFrom: [],
		name: 'Increase Aggression',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases recovery item effect by 10%.',
		id: '638a4d47a44f4fa4b0dec9a1',
		index: 103,
		mergeFrom: [],
		name: 'Recovery Up',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases recovery item effect by 15%.',
		id: '638a4d47a44f4fa4b0dec983',
		index: 104,
		mergeFrom: [],
		name: 'Recovery Up+',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases recovery item effect by 20%.',
		id: '638a4d47a44f4fa4b0dec985',
		index: 105,
		mergeFrom: [],
		name: 'Recovery Up++',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases recovery item effect by 25%.',
		id: '638a4d47a44f4fa4b0dec995',
		index: 106,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases recovery item effect by 10%.',
						id: '638a4d47a44f4fa4b0dec9a1',
						index: 103,
						name: 'Recovery Up',
					},
					{
						description: 'Effect: Increases recovery item effect by 15%.',
						id: '638a4d47a44f4fa4b0dec983',
						index: 104,
						name: 'Recovery Up+',
					},
				],
			},
		],
		name: 'Big Recovery',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases recovery item effect by 35%.',
		id: '638a4d47a44f4fa4b0dec986',
		index: 107,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases recovery item effect by 15%.',
						id: '638a4d47a44f4fa4b0dec983',
						index: 104,
						name: 'Recovery Up+',
					},
					{
						description: 'Effect: Increases recovery item effect by 20%.',
						id: '638a4d47a44f4fa4b0dec985',
						index: 105,
						name: 'Recovery Up++',
					},
				],
			},
		],
		name: 'Intense Recovery',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases recovery item effect by 50%.',
		id: '638a4d47a44f4fa4b0dec997',
		index: 108,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases recovery item effect by 25%.',
						id: '638a4d47a44f4fa4b0dec995',
						index: 106,
						name: 'Big Recovery',
					},
					{
						description: 'Effect: Increases recovery item effect by 35%.',
						id: '638a4d47a44f4fa4b0dec986',
						index: 107,
						name: 'Intense Recovery',
					},
				],
			},
		],
		name: 'Ultimate Recovery',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases recovery item effect by 40%.',
		id: '638a4d47a44f4fa4b0dec988',
		index: 109,
		mergeFrom: [],
		name: 'Blessed by God',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Recovery item enhanced by a tiny, fixed amount. Lower power equals stronger effect.',
		id: '638a4d47a44f4fa4b0dec989',
		index: 110,
		mergeFrom: [],
		name: 'Fixed Recovery',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Recovery item enhanced by a small, fixed amount. Lower power equals stronger effect.',
		id: '638a4d47a44f4fa4b0dec987',
		index: 111,
		mergeFrom: [],
		name: 'Fixed Recovery+',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Recovery item enhanced by a fixed amount. Lower power equals stronger effect.',
		id: '638a4d47a44f4fa4b0dec98a',
		index: 112,
		mergeFrom: [],
		name: 'Fixed Recovery++',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Recovery item enhanced by a small, fixed amount. Lower power equals stronger effect.',
		id: '638a4d47a44f4fa4b0dec98d',
		index: 113,
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Recovery item enhanced by a tiny, fixed amount. Lower power equals stronger effect.',
						id: '638a4d47a44f4fa4b0dec989',
						index: 110,
						name: 'Fixed Recovery',
					},
					{
						description:
							'Effect: Recovery item enhanced by a small, fixed amount. Lower power equals stronger effect.',
						id: '638a4d47a44f4fa4b0dec987',
						index: 111,
						name: 'Fixed Recovery+',
					},
				],
			},
		],
		name: 'Medicine Enhance',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Recovery item enhanced by a fixed amount. Lower power equals stronger effect.',
		id: '638a4d47a44f4fa4b0dec98b',
		index: 114,
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Recovery item enhanced by a small, fixed amount. Lower power equals stronger effect.',
						id: '638a4d47a44f4fa4b0dec987',
						index: 111,
						name: 'Fixed Recovery+',
					},
					{
						description: 'Effect: Recovery item enhanced by a fixed amount. Lower power equals stronger effect.',
						id: '638a4d47a44f4fa4b0dec98a',
						index: 112,
						name: 'Fixed Recovery++',
					},
				],
			},
		],
		name: 'Big Medicine Enhance',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Recovery item enhanced by a large, fixed amount. Lower power equals stronger effect.',
		id: '638a4d47a44f4fa4b0dec993',
		index: 115,
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Recovery item enhanced by a small, fixed amount. Lower power equals stronger effect.',
						id: '638a4d47a44f4fa4b0dec98d',
						index: 113,
						name: 'Medicine Enhance',
					},
					{
						description: 'Effect: Recovery item enhanced by a fixed amount. Lower power equals stronger effect.',
						id: '638a4d47a44f4fa4b0dec98b',
						index: 114,
						name: 'Big Medicine Enhance',
					},
				],
			},
		],
		name: 'Super Enhance Recovery',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Effect: Recovery item enhanced by a ridiculous, fixed amount. This increase scales with the original value.',
		id: '638a4d47a44f4fa4b0dec98c',
		index: 116,
		mergeFrom: [],
		name: 'Legendary Recovery',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Gives item a 15% chance to critical hit.',
		id: '638a4d47a44f4fa4b0dec990',
		index: 145,
		mergeFrom: [],
		name: 'Critical',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Gives item a 25% chance to critical hit.',
		id: '638a4d47a44f4fa4b0dec98f',
		index: 146,
		mergeFrom: [],
		name: 'Critical+',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Gives item a 35% chance to critical hit.',
		id: '638a4d47a44f4fa4b0dec991',
		index: 147,
		mergeFrom: [],
		name: 'Critical++',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Gives item a 50% chance to critical hit.',
		id: '638a4d47a44f4fa4b0dec98e',
		index: 148,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Gives item a 15% chance to critical hit.',
						id: '638a4d47a44f4fa4b0dec990',
						index: 145,
						name: 'Critical',
					},
					{
						description: 'Effect: Gives item a 25% chance to critical hit.',
						id: '638a4d47a44f4fa4b0dec98f',
						index: 146,
						name: 'Critical+',
					},
				],
			},
		],
		name: 'Critical Finish',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Item will always critical hit.',
		id: '638a4d47a44f4fa4b0dec992',
		index: 149,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Gives item a 25% chance to critical hit.',
						id: '638a4d47a44f4fa4b0dec98f',
						index: 146,
						name: 'Critical+',
					},
					{
						description: 'Effect: Gives item a 35% chance to critical hit.',
						id: '638a4d47a44f4fa4b0dec991',
						index: 147,
						name: 'Critical++',
					},
				],
			},
		],
		name: 'Always Critical',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Item will always critical hit, and KO target (bosses excluded).',
		id: '638a4d47a44f4fa4b0dec994',
		index: 150,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Gives item a 50% chance to critical hit.',
						id: '638a4d47a44f4fa4b0dec98e',
						index: 148,
						name: 'Critical Finish',
					},
					{
						description: 'Effect: Item will always critical hit.',
						id: '638a4d47a44f4fa4b0dec992',
						index: 149,
						name: 'Always Critical',
					},
				],
			},
		],
		name: 'One Hit Kill',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Reduces item number variation slightly, making it easier to score higher numbers.',
		id: '638a4d47a44f4fa4b0dec998',
		index: 151,
		mergeFrom: [],
		name: 'Stable Effect',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Reduces item number variation a little, making it easier to score higher numbers.',
		id: '638a4d47a44f4fa4b0dec996',
		index: 152,
		mergeFrom: [],
		name: 'Stable Effect+',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Reduces item number variation, making it easier to score higher numbers.',
		id: '638a4d47a44f4fa4b0dec999',
		index: 153,
		mergeFrom: [],
		name: 'Stable Effect++',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Reduces item number variation, making it easier to score higher numbers.',
		id: '638a4d47a44f4fa4b0dec9a8',
		index: 154,
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Reduces item number variation slightly, making it easier to score higher numbers.',
						id: '638a4d47a44f4fa4b0dec998',
						index: 151,
						name: 'Stable Effect',
					},
					{
						description:
							'Effect: Reduces item number variation a little, making it easier to score higher numbers.',
						id: '638a4d47a44f4fa4b0dec996',
						index: 152,
						name: 'Stable Effect+',
					},
				],
			},
		],
		name: 'Stability Emphasis',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Halves item number variation, making it easier to score higher numbers.',
		id: '638a4d48a44f4fa4b0dec9ca',
		index: 155,
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Reduces item number variation a little, making it easier to score higher numbers.',
						id: '638a4d47a44f4fa4b0dec996',
						index: 152,
						name: 'Stable Effect+',
					},
					{
						description: 'Effect: Reduces item number variation, making it easier to score higher numbers.',
						id: '638a4d47a44f4fa4b0dec999',
						index: 153,
						name: 'Stable Effect++',
					},
				],
			},
		],
		name: 'Solid Effect',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Stabilizes item number variation, making it far easier to score higher numbers.',
		id: '638a4d47a44f4fa4b0dec99d',
		index: 156,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Reduces item number variation, making it easier to score higher numbers.',
						id: '638a4d47a44f4fa4b0dec9a8',
						index: 154,
						name: 'Stability Emphasis',
					},
					{
						description: 'Effect: Halves item number variation, making it easier to score higher numbers.',
						id: '638a4d48a44f4fa4b0dec9ca',
						index: 155,
						name: 'Solid Effect',
					},
				],
			},
		],
		name: 'Boost Expected Value',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases item use count by 1. Power is reduced a little.',
		id: '638a4d47a44f4fa4b0dec99a',
		index: 172,
		mergeFrom: [],
		name: 'Use Count +1',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases item use count by 2. Power is reduced slightly.',
		id: '638a4d47a44f4fa4b0dec99b',
		index: 173,
		mergeFrom: [],
		name: 'Use Count +2',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases item use count by 3.',
		id: '638a4d47a44f4fa4b0dec9a0',
		index: 174,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases item use count by 1. Power is reduced a little.',
						id: '638a4d47a44f4fa4b0dec99a',
						index: 172,
						name: 'Use Count +1',
					},
					{
						description: 'Effect: Increases item use count by 2. Power is reduced slightly.',
						id: '638a4d47a44f4fa4b0dec99b',
						index: 173,
						name: 'Use Count +2',
					},
				],
			},
		],
		name: 'Multiply',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Reduces item use count by 1. Power is increased a little.',
		id: '638a4d47a44f4fa4b0dec99c',
		index: 175,
		mergeFrom: [],
		name: 'Use Count -1',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Reduces item use count by 2. Power is increased.',
		id: '638a4d47a44f4fa4b0dec99f',
		index: 176,
		mergeFrom: [],
		name: 'Use Count -2',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Reduces item use count by 5. Power is massively increased.',
		id: '638a4d47a44f4fa4b0dec9a3',
		index: 177,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Reduces item use count by 1. Power is increased a little.',
						id: '638a4d47a44f4fa4b0dec99c',
						index: 175,
						name: 'Use Count -1',
					},
					{
						description: 'Effect: Reduces item use count by 2. Power is increased.',
						id: '638a4d47a44f4fa4b0dec99f',
						index: 176,
						name: 'Use Count -2',
					},
				],
			},
		],
		name: 'Reduction',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 10.',
		id: '638a4d47a44f4fa4b0dec99e',
		index: 190,
		mergeFrom: [],
		name: 'HP Enhance',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 15.',
		id: '638a4d48a44f4fa4b0dec9cd',
		index: 191,
		mergeFrom: [],
		name: 'HP Boost',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 25.',
		id: '638a4d47a44f4fa4b0dec9a2',
		index: 192,
		mergeFrom: [],
		name: 'HP Super Enhance',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Maximum HP increases by 25.',
		id: '638a4d47a44f4fa4b0dec9a5',
		index: 193,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 10.',
						id: '638a4d47a44f4fa4b0dec99e',
						index: 190,
						name: 'HP Enhance',
					},
					{
						description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 15.',
						id: '638a4d48a44f4fa4b0dec9cd',
						index: 191,
						name: 'HP Boost',
					},
				],
			},
		],
		name: 'Full of Life',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Revive from KO, and also removes 3 status ailments.',
		id: '638a4d49a44f4fa4b0deca80',
		index: 193,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 10.',
						id: '638a4d47a44f4fa4b0dec99e',
						index: 190,
						name: 'HP Enhance',
					},
					{
						description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 15.',
						id: '638a4d48a44f4fa4b0dec9cd',
						index: 191,
						name: 'HP Boost',
					},
				],
			},
		],
		name: 'Full of Life',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Maximum HP increases by 40.',
		id: '638a4d47a44f4fa4b0dec9a9',
		index: 194,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 15.',
						id: '638a4d48a44f4fa4b0dec9cd',
						index: 191,
						name: 'HP Boost',
					},
					{
						description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 25.',
						id: '638a4d47a44f4fa4b0dec9a2',
						index: 192,
						name: 'HP Super Enhance',
					},
				],
			},
		],
		name: 'Overflowing Life',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Maximum HP increases by 70.',
		id: '638a4d48a44f4fa4b0dec9b0',
		index: 195,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Maximum HP increases by 25.',
						id: '638a4d47a44f4fa4b0dec9a5',
						index: 193,
						name: 'Full of Life',
					},
					{
						description: 'Effect: Maximum HP increases by 40.',
						id: '638a4d47a44f4fa4b0dec9a9',
						index: 194,
						name: 'Overflowing Life',
					},
				],
			},
		],
		name: 'Power of Life',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 10.',
		id: '638a4d47a44f4fa4b0dec9a6',
		index: 196,
		mergeFrom: [],
		name: 'MP Enhance',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 15.',
		id: '638a4d47a44f4fa4b0dec9a7',
		index: 197,
		mergeFrom: [],
		name: 'MP Boost',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 25.',
		id: '638a4d47a44f4fa4b0dec9aa',
		index: 198,
		mergeFrom: [],
		name: 'MP Super Enhance',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Maximum MP increases by 25.',
		id: '638a4d47a44f4fa4b0dec9ad',
		index: 199,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 10.',
						id: '638a4d47a44f4fa4b0dec9a6',
						index: 196,
						name: 'MP Enhance',
					},
					{
						description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 15.',
						id: '638a4d47a44f4fa4b0dec9a7',
						index: 197,
						name: 'MP Boost',
					},
				],
			},
		],
		name: "Magician's Wisdom",
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Maximum MP increases by 40.',
		id: '638a4d47a44f4fa4b0dec9ab',
		index: 200,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 15.',
						id: '638a4d47a44f4fa4b0dec9a7',
						index: 197,
						name: 'MP Boost',
					},
					{
						description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 25.',
						id: '638a4d47a44f4fa4b0dec9aa',
						index: 198,
						name: 'MP Super Enhance',
					},
				],
			},
		],
		name: "Grand Magician's Wisdom",
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Maximum MP increases by 70.',
		id: '638a4d48a44f4fa4b0dec9b4',
		index: 201,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Maximum MP increases by 25.',
						id: '638a4d47a44f4fa4b0dec9ad',
						index: 199,
						name: "Magician's Wisdom",
					},
					{
						description: 'Effect: Maximum MP increases by 40.',
						id: '638a4d47a44f4fa4b0dec9ab',
						index: 200,
						name: "Grand Magician's Wisdom",
					},
				],
			},
		],
		name: 'Wisdom of the Gods',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 5.',
		id: '638a4d47a44f4fa4b0dec9ac',
		index: 202,
		mergeFrom: [],
		name: 'LP Enhance',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 7.',
		id: '638a4d47a44f4fa4b0dec9ae',
		index: 203,
		mergeFrom: [],
		name: 'LP Boost',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 10.',
		id: '638a4d48a44f4fa4b0dec9af',
		index: 204,
		mergeFrom: [],
		name: 'LP Super Enhance',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Maximum LP increases by 12.',
		id: '638a4d48a44f4fa4b0dec9ba',
		index: 205,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 5.',
						id: '638a4d47a44f4fa4b0dec9ac',
						index: 202,
						name: 'LP Enhance',
					},
					{
						description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 7.',
						id: '638a4d47a44f4fa4b0dec9ae',
						index: 203,
						name: 'LP Boost',
					},
				],
			},
		],
		name: 'Full of Stamina',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Maximum LP increases by 17.',
		id: '638a4d48a44f4fa4b0dec9b1',
		index: 206,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 7.',
						id: '638a4d47a44f4fa4b0dec9ae',
						index: 203,
						name: 'LP Boost',
					},
					{
						description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 10.',
						id: '638a4d48a44f4fa4b0dec9af',
						index: 204,
						name: 'LP Super Enhance',
					},
				],
			},
		],
		name: 'Unabating Stamina',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Maximum LP increases by 30.',
		id: '638a4d48a44f4fa4b0dec9b5',
		index: 207,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Maximum LP increases by 12.',
						id: '638a4d48a44f4fa4b0dec9ba',
						index: 205,
						name: 'Full of Stamina',
					},
					{
						description: 'Effect: Maximum LP increases by 17.',
						id: '638a4d48a44f4fa4b0dec9b1',
						index: 206,
						name: 'Unabating Stamina',
					},
				],
			},
		],
		name: 'Infinite Stamina',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Maximum HP and MP increases by 15.',
		id: '638a4d48a44f4fa4b0dec9b7',
		index: 208,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Maximum HP increases by 25.',
						id: '638a4d47a44f4fa4b0dec9a5',
						index: 193,
						name: 'Full of Life',
					},
					{
						description: 'Effect: Maximum MP increases by 25.',
						id: '638a4d47a44f4fa4b0dec9ad',
						index: 199,
						name: "Magician's Wisdom",
					},
				],
			},
		],
		name: 'HPMP Enhance',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Maximum HP and MP increases by 25.',
		id: '638a4d48a44f4fa4b0dec9b2',
		index: 209,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Maximum HP increases by 40.',
						id: '638a4d47a44f4fa4b0dec9a9',
						index: 194,
						name: 'Overflowing Life',
					},
					{
						description: 'Effect: Maximum MP increases by 40.',
						id: '638a4d47a44f4fa4b0dec9ab',
						index: 200,
						name: "Grand Magician's Wisdom",
					},
				],
			},
		],
		name: 'HPMP Boost',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Maximum HP and MP increases by 40.',
		id: '638a4d48a44f4fa4b0dec9b8',
		index: 210,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Maximum HP increases by 70.',
						id: '638a4d48a44f4fa4b0dec9b0',
						index: 195,
						name: 'Power of Life',
					},
					{
						description: 'Effect: Maximum MP increases by 70.',
						id: '638a4d48a44f4fa4b0dec9b4',
						index: 201,
						name: 'Wisdom of the Gods',
					},
				],
			},
		],
		name: 'HPMP Super Enhance',
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a stat boost. Effect: Increases base stats by 5%.',
		id: '638a4d48a44f4fa4b0dec9b3',
		index: 211,
		mergeFrom: [],
		name: 'Parameters +5%',
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a stat boost. Effect: Increases base stats by 6%.',
		id: '638a4d48a44f4fa4b0dec9b6',
		index: 212,
		mergeFrom: [],
		name: 'Parameters +6%',
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a stat boost. Effect: Increases base stats by 7%.',
		id: '638a4d48a44f4fa4b0dec9bc',
		index: 213,
		mergeFrom: [],
		name: 'Parameters +7%',
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases base stats by 10%.',
		id: '638a4d48a44f4fa4b0dec9b9',
		index: 214,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Bestows a stat boost. Effect: Increases base stats by 5%.',
						id: '638a4d48a44f4fa4b0dec9b3',
						index: 211,
						name: 'Parameters +5%',
					},
					{
						description: 'Bestows a stat boost. Effect: Increases base stats by 6%.',
						id: '638a4d48a44f4fa4b0dec9b6',
						index: 212,
						name: 'Parameters +6%',
					},
				],
			},
		],
		name: 'Enhance the Body',
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases base stats by 12%.',
		id: '638a4d48a44f4fa4b0dec9be',
		index: 215,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Bestows a stat boost. Effect: Increases base stats by 6%.',
						id: '638a4d48a44f4fa4b0dec9b6',
						index: 212,
						name: 'Parameters +6%',
					},
					{
						description: 'Bestows a stat boost. Effect: Increases base stats by 7%.',
						id: '638a4d48a44f4fa4b0dec9bc',
						index: 213,
						name: 'Parameters +7%',
					},
				],
			},
		],
		name: 'Draw Out Power',
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases base stats by 15%.',
		id: '638a4d48a44f4fa4b0dec9bb',
		index: 216,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases base stats by 10%.',
						id: '638a4d48a44f4fa4b0dec9b9',
						index: 214,
						name: 'Enhance the Body',
					},
					{
						description: 'Effect: Increases base stats by 12%.',
						id: '638a4d48a44f4fa4b0dec9be',
						index: 215,
						name: 'Draw Out Power',
					},
				],
			},
		],
		name: 'Develops the Body',
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases base stats by 20%.',
		id: '638a4d48a44f4fa4b0dec9c0',
		index: 217,
		mergeFrom: [],
		name: 'Evolves the Body',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Enhances weapon attack power. Effect: Increases attack power by 7.',
		id: '638a4d48a44f4fa4b0dec9d3',
		index: 218,
		mergeFrom: [],
		name: 'Attack Enhance',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Enhances weapon attack power. Effect: Increases attack power by 10.',
		id: '638a4d48a44f4fa4b0dec9bf',
		index: 219,
		mergeFrom: [],
		name: 'Attack Boost',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Enhances weapon attack power. Effect: Increases attack power by 15.',
		id: '638a4d48a44f4fa4b0dec9bd',
		index: 220,
		mergeFrom: [],
		name: 'Attack Super Enhance',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases attack power by 15.',
		id: '638a4d48a44f4fa4b0dec9c5',
		index: 221,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Enhances weapon attack power. Effect: Increases attack power by 7.',
						id: '638a4d48a44f4fa4b0dec9d3',
						index: 218,
						name: 'Attack Enhance',
					},
					{
						description: 'Enhances weapon attack power. Effect: Increases attack power by 10.',
						id: '638a4d48a44f4fa4b0dec9bf',
						index: 219,
						name: 'Attack Boost',
					},
				],
			},
		],
		name: 'Power of Beasts',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases attack power by 25.',
		id: '638a4d48a44f4fa4b0dec9c3',
		index: 222,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Enhances weapon attack power. Effect: Increases attack power by 10.',
						id: '638a4d48a44f4fa4b0dec9bf',
						index: 219,
						name: 'Attack Boost',
					},
					{
						description: 'Enhances weapon attack power. Effect: Increases attack power by 15.',
						id: '638a4d48a44f4fa4b0dec9bd',
						index: 220,
						name: 'Attack Super Enhance',
					},
				],
			},
		],
		name: 'Power of Destruction',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases attack power by 40.',
		id: '638a4d48a44f4fa4b0dec9c4',
		index: 223,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases attack power by 15.',
						id: '638a4d48a44f4fa4b0dec9c5',
						index: 221,
						name: 'Power of Beasts',
					},
					{
						description: 'Effect: Increases attack power by 25.',
						id: '638a4d48a44f4fa4b0dec9c3',
						index: 222,
						name: 'Power of Destruction',
					},
				],
			},
		],
		name: 'Power of Gods',
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Enhances armor defense. Effect: Increases defense by 7.',
		id: '638a4d48a44f4fa4b0dec9c1',
		index: 224,
		mergeFrom: [],
		name: 'Defense Enhance',
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Enhances armor defense. Effect: Increases defense by 10.',
		id: '638a4d48a44f4fa4b0dec9c2',
		index: 225,
		mergeFrom: [],
		name: 'Defense Boost',
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Enhances armor defense. Effect: Increases defense by 15.',
		id: '638a4d48a44f4fa4b0dec9c6',
		index: 226,
		mergeFrom: [],
		name: 'Defense Super Enhance',
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases defense by 15.',
		id: '638a4d48a44f4fa4b0dec9c8',
		index: 227,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Enhances armor defense. Effect: Increases defense by 7.',
						id: '638a4d48a44f4fa4b0dec9c1',
						index: 224,
						name: 'Defense Enhance',
					},
					{
						description: 'Enhances armor defense. Effect: Increases defense by 10.',
						id: '638a4d48a44f4fa4b0dec9c2',
						index: 225,
						name: 'Defense Boost',
					},
				],
			},
		],
		name: 'Steel Defense',
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases defense by 25.',
		id: '638a4d48a44f4fa4b0dec9cc',
		index: 228,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Enhances armor defense. Effect: Increases defense by 10.',
						id: '638a4d48a44f4fa4b0dec9c2',
						index: 225,
						name: 'Defense Boost',
					},
					{
						description: 'Enhances armor defense. Effect: Increases defense by 15.',
						id: '638a4d48a44f4fa4b0dec9c6',
						index: 226,
						name: 'Defense Super Enhance',
					},
				],
			},
		],
		name: 'Diamond Defense',
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases defense by 40.',
		id: '638a4d48a44f4fa4b0dec9cb',
		index: 229,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases defense by 15.',
						id: '638a4d48a44f4fa4b0dec9c8',
						index: 227,
						name: 'Steel Defense',
					},
					{
						description: 'Effect: Increases defense by 25.',
						id: '638a4d48a44f4fa4b0dec9cc',
						index: 228,
						name: 'Diamond Defense',
					},
				],
			},
		],
		name: 'Dragonscale Defense',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Accessories with this will increase speed. Effect: Increases speed by 7.',
		id: '638a4d48a44f4fa4b0dec9c7',
		index: 230,
		mergeFrom: [],
		name: 'Speed Enhance',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Accessories with this will increase speed. Effect: Increases speed by 10.',
		id: '638a4d48a44f4fa4b0dec9c9',
		index: 231,
		mergeFrom: [],
		name: 'Speed Boost',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Accessories with this will increase speed. Effect: Increases speed by 15.',
		id: '638a4d48a44f4fa4b0dec9d0',
		index: 232,
		mergeFrom: [],
		name: 'Speed Super Enhance',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases speed by 15.',
		id: '638a4d48a44f4fa4b0dec9cf',
		index: 233,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 7.',
						id: '638a4d48a44f4fa4b0dec9c7',
						index: 230,
						name: 'Speed Enhance',
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 10.',
						id: '638a4d48a44f4fa4b0dec9c9',
						index: 231,
						name: 'Speed Boost',
					},
				],
			},
		],
		name: 'Speed of Skanda',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases speed by 25.',
		id: '638a4d48a44f4fa4b0dec9d1',
		index: 234,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 10.',
						id: '638a4d48a44f4fa4b0dec9c9',
						index: 231,
						name: 'Speed Boost',
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 15.',
						id: '638a4d48a44f4fa4b0dec9d0',
						index: 232,
						name: 'Speed Super Enhance',
					},
				],
			},
		],
		name: 'Speed of Gods',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases speed by 40.',
		id: '638a4d48a44f4fa4b0dec9ce',
		index: 235,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases speed by 15.',
						id: '638a4d48a44f4fa4b0dec9cf',
						index: 233,
						name: 'Speed of Skanda',
					},
					{
						description: 'Effect: Increases speed by 25.',
						id: '638a4d48a44f4fa4b0dec9d1',
						index: 234,
						name: 'Speed of Gods',
					},
				],
			},
		],
		name: 'Speed of Light',
	},
	{
		categories: ['ARMOR', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases attack & defense by 5.',
		id: '638a4d48a44f4fa4b0dec9d8',
		index: 236,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Enhances weapon attack power. Effect: Increases attack power by 7.',
						id: '638a4d48a44f4fa4b0dec9d3',
						index: 218,
						name: 'Attack Enhance',
					},
					{
						description: 'Enhances armor defense. Effect: Increases defense by 7.',
						id: '638a4d48a44f4fa4b0dec9c1',
						index: 224,
						name: 'Defense Enhance',
					},
				],
			},
		],
		name: 'ATK DEF Enhance',
	},
	{
		categories: ['ACCESSORY', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases attack & speed by 5.',
		id: '638a4d48a44f4fa4b0dec9d4',
		index: 237,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Enhances weapon attack power. Effect: Increases attack power by 7.',
						id: '638a4d48a44f4fa4b0dec9d3',
						index: 218,
						name: 'Attack Enhance',
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 7.',
						id: '638a4d48a44f4fa4b0dec9c7',
						index: 230,
						name: 'Speed Enhance',
					},
				],
			},
		],
		name: 'ATK SPD Enhance',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases defense & speed by 5.',
		id: '638a4d48a44f4fa4b0dec9d6',
		index: 238,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Enhances armor defense. Effect: Increases defense by 7.',
						id: '638a4d48a44f4fa4b0dec9c1',
						index: 224,
						name: 'Defense Enhance',
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 7.',
						id: '638a4d48a44f4fa4b0dec9c7',
						index: 230,
						name: 'Speed Enhance',
					},
				],
			},
		],
		name: 'DEF SPD Enhance',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases all stats by 5.',
		id: '638a4d48a44f4fa4b0dec9d5',
		index: 239,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases attack & defense by 5.',
						id: '638a4d48a44f4fa4b0dec9d8',
						index: 236,
						name: 'ATK DEF Enhance',
					},
					{
						description: 'Effect: Increases attack & speed by 5.',
						id: '638a4d48a44f4fa4b0dec9d4',
						index: 237,
						name: 'ATK SPD Enhance',
					},
				],
			},
			{
				consist: [
					{
						description: 'Effect: Increases attack & defense by 5.',
						id: '638a4d48a44f4fa4b0dec9d8',
						index: 236,
						name: 'ATK DEF Enhance',
					},
					{
						description: 'Effect: Increases defense & speed by 5.',
						id: '638a4d48a44f4fa4b0dec9d6',
						index: 238,
						name: 'DEF SPD Enhance',
					},
				],
			},
			{
				consist: [
					{
						description: 'Effect: Increases attack & speed by 5.',
						id: '638a4d48a44f4fa4b0dec9d4',
						index: 237,
						name: 'ATK SPD Enhance',
					},
					{
						description: 'Effect: Increases defense & speed by 5.',
						id: '638a4d48a44f4fa4b0dec9d6',
						index: 238,
						name: 'DEF SPD Enhance',
					},
				],
			},
		],
		name: 'All Stat Enhance',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases attack & defense by 7.',
		id: '638a4d48a44f4fa4b0dec9d2',
		index: 240,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Enhances weapon attack power. Effect: Increases attack power by 10.',
						id: '638a4d48a44f4fa4b0dec9bf',
						index: 219,
						name: 'Attack Boost',
					},
					{
						description: 'Enhances armor defense. Effect: Increases defense by 10.',
						id: '638a4d48a44f4fa4b0dec9c2',
						index: 225,
						name: 'Defense Boost',
					},
				],
			},
		],
		name: 'ATK DEF Boost',
	},
	{
		categories: ['ACCESSORY', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases attack & speed by 7.',
		id: '638a4d48a44f4fa4b0dec9db',
		index: 241,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Enhances weapon attack power. Effect: Increases attack power by 10.',
						id: '638a4d48a44f4fa4b0dec9bf',
						index: 219,
						name: 'Attack Boost',
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 10.',
						id: '638a4d48a44f4fa4b0dec9c9',
						index: 231,
						name: 'Speed Boost',
					},
				],
			},
		],
		name: 'ATK SPD Boost',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases defense & speed by 7.',
		id: '638a4d48a44f4fa4b0dec9d9',
		index: 242,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Enhances armor defense. Effect: Increases defense by 10.',
						id: '638a4d48a44f4fa4b0dec9c2',
						index: 225,
						name: 'Defense Boost',
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 10.',
						id: '638a4d48a44f4fa4b0dec9c9',
						index: 231,
						name: 'Speed Boost',
					},
				],
			},
		],
		name: 'DEF SPD Boost',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases all stats by 7.',
		id: '638a4d48a44f4fa4b0dec9e4',
		index: 243,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases attack & defense by 7.',
						id: '638a4d48a44f4fa4b0dec9d2',
						index: 240,
						name: 'ATK DEF Boost',
					},
					{
						description: 'Effect: Increases attack & speed by 7.',
						id: '638a4d48a44f4fa4b0dec9db',
						index: 241,
						name: 'ATK SPD Boost',
					},
				],
			},
			{
				consist: [
					{
						description: 'Effect: Increases attack & defense by 7.',
						id: '638a4d48a44f4fa4b0dec9d2',
						index: 240,
						name: 'ATK DEF Boost',
					},
					{
						description: 'Effect: Increases defense & speed by 7.',
						id: '638a4d48a44f4fa4b0dec9d9',
						index: 242,
						name: 'DEF SPD Boost',
					},
				],
			},
			{
				consist: [
					{
						description: 'Effect: Increases attack & speed by 7.',
						id: '638a4d48a44f4fa4b0dec9db',
						index: 241,
						name: 'ATK SPD Boost',
					},
					{
						description: 'Effect: Increases defense & speed by 7.',
						id: '638a4d48a44f4fa4b0dec9d9',
						index: 242,
						name: 'DEF SPD Boost',
					},
				],
			},
		],
		name: 'All Stat Boost',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases all stats except resistances by 10.',
		id: '638a4d48a44f4fa4b0dec9d7',
		index: 244,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases all stats by 5.',
						id: '638a4d48a44f4fa4b0dec9d5',
						index: 239,
						name: 'All Stat Enhance',
					},
					{
						description: 'Effect: Increases all stats by 7.',
						id: '638a4d48a44f4fa4b0dec9e4',
						index: 243,
						name: 'All Stat Boost',
					},
				],
			},
		],
		name: 'All Stat Super Enhance',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases all stats except resistances by 25.',
		id: '638a4d48a44f4fa4b0dec9da',
		index: 245,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases all stats by 7.',
						id: '638a4d48a44f4fa4b0dec9e4',
						index: 243,
						name: 'All Stat Boost',
					},
					{
						description: 'Effect: Increases all stats except resistances by 10.',
						id: '638a4d48a44f4fa4b0dec9d7',
						index: 244,
						name: 'All Stat Super Enhance',
					},
				],
			},
		],
		name: 'Well Rounded Power',
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases maximum HP and MP by 50.',
		id: '638a4d48a44f4fa4b0dec9dd',
		index: 246,
		mergeFrom: [],
		name: 'Flawless Body',
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases defense by 30, and increases all base stats by 15%.',
		id: '638a4d48a44f4fa4b0dec9dc',
		index: 247,
		mergeFrom: [],
		name: 'Tenacious Body',
	},
	{
		categories: ['ACCESSORY', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 10%.',
		id: '638a4d48a44f4fa4b0dec9de',
		index: 298,
		mergeFrom: [],
		name: 'Consume MP -10%',
	},
	{
		categories: ['ACCESSORY', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 15%.',
		id: '638a4d48a44f4fa4b0dec9e0',
		index: 299,
		mergeFrom: [],
		name: 'Consume MP -15%',
	},
	{
		categories: ['ACCESSORY', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 20%.',
		id: '638a4d48a44f4fa4b0dec9e1',
		index: 300,
		mergeFrom: [],
		name: 'Consume MP -20%',
	},
	{
		categories: ['ACCESSORY', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Reduces MP consumption of skills by 20%.',
		id: '638a4d48a44f4fa4b0dec9df',
		index: 301,
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 10%.',
						id: '638a4d48a44f4fa4b0dec9de',
						index: 298,
						name: 'Consume MP -10%',
					},
					{
						description:
							'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 15%.',
						id: '638a4d48a44f4fa4b0dec9e0',
						index: 299,
						name: 'Consume MP -15%',
					},
				],
			},
		],
		name: 'Cut MP Consume',
	},
	{
		categories: ['ACCESSORY', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Reduces MP consumption of skills by 30%.',
		id: '638a4d48a44f4fa4b0dec9e7',
		index: 302,
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 15%.',
						id: '638a4d48a44f4fa4b0dec9e0',
						index: 299,
						name: 'Consume MP -15%',
					},
					{
						description:
							'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 20%.',
						id: '638a4d48a44f4fa4b0dec9e1',
						index: 300,
						name: 'Consume MP -20%',
					},
				],
			},
		],
		name: 'Compact MP Consume',
	},
	{
		categories: ['ACCESSORY', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Reduces MP consumption of skills by 50%.',
		id: '638a4d48a44f4fa4b0dec9e3',
		index: 303,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Reduces MP consumption of skills by 20%.',
						id: '638a4d48a44f4fa4b0dec9df',
						index: 301,
						name: 'Cut MP Consume',
					},
					{
						description: 'Effect: Reduces MP consumption of skills by 30%.',
						id: '638a4d48a44f4fa4b0dec9e7',
						index: 302,
						name: 'Compact MP Consume',
					},
				],
			},
		],
		name: 'Halve MP Consume',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 5%.',
		id: '638a4d48a44f4fa4b0dec9e2',
		index: 304,
		mergeFrom: [],
		name: 'Skill Power +5%',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 7%.',
		id: '638a4d48a44f4fa4b0dec9e5',
		index: 305,
		mergeFrom: [],
		name: 'Skill Power +7%',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 10%.',
		id: '638a4d48a44f4fa4b0dec9e6',
		index: 306,
		mergeFrom: [],
		name: 'Skill Power +10%',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases skill power and MP consumption by 12%.',
		id: '638a4d48a44f4fa4b0dec9ee',
		index: 307,
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 5%.',
						id: '638a4d48a44f4fa4b0dec9e2',
						index: 304,
						name: 'Skill Power +5%',
					},
					{
						description:
							'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 7%.',
						id: '638a4d48a44f4fa4b0dec9e5',
						index: 305,
						name: 'Skill Power +7%',
					},
				],
			},
		],
		name: 'Skill Enhance',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases skill power and MP consumption by 17%.',
		id: '638a4d48a44f4fa4b0dec9eb',
		index: 308,
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 7%.',
						id: '638a4d48a44f4fa4b0dec9e5',
						index: 305,
						name: 'Skill Power +7%',
					},
					{
						description:
							'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 10%.',
						id: '638a4d48a44f4fa4b0dec9e6',
						index: 306,
						name: 'Skill Power +10%',
					},
				],
			},
		],
		name: 'Skill Boost',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases skill power and MP consumption by 30%.',
		id: '638a4d48a44f4fa4b0dec9ef',
		index: 309,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases skill power and MP consumption by 12%.',
						id: '638a4d48a44f4fa4b0dec9ee',
						index: 307,
						name: 'Skill Enhance',
					},
					{
						description: 'Effect: Increases skill power and MP consumption by 17%.',
						id: '638a4d48a44f4fa4b0dec9eb',
						index: 308,
						name: 'Skill Boost',
					},
				],
			},
		],
		name: 'Skill Super Enhance',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases skill power by 7%, and reduces MP consumption by 7%.',
		id: '638a4d48a44f4fa4b0dec9f1',
		index: 310,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Reduces MP consumption of skills by 20%.',
						id: '638a4d48a44f4fa4b0dec9df',
						index: 301,
						name: 'Cut MP Consume',
					},
					{
						description: 'Effect: Increases skill power and MP consumption by 12%.',
						id: '638a4d48a44f4fa4b0dec9ee',
						index: 307,
						name: 'Skill Enhance',
					},
				],
			},
		],
		name: 'Eco Skill',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases skill power by 10%, and reduces MP consumption by 10%.',
		id: '638a4d48a44f4fa4b0dec9f2',
		index: 311,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Reduces MP consumption of skills by 30%.',
						id: '638a4d48a44f4fa4b0dec9e7',
						index: 302,
						name: 'Compact MP Consume',
					},
					{
						description: 'Effect: Increases skill power and MP consumption by 17%.',
						id: '638a4d48a44f4fa4b0dec9eb',
						index: 308,
						name: 'Skill Boost',
					},
				],
			},
		],
		name: 'Skill Cost Compress',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases skill power by 15%, and reduces MP consumption by 15%.',
		id: '638a4d48a44f4fa4b0dec9ed',
		index: 312,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Reduces MP consumption of skills by 50%.',
						id: '638a4d48a44f4fa4b0dec9e3',
						index: 303,
						name: 'Halve MP Consume',
					},
					{
						description: 'Effect: Increases skill power and MP consumption by 30%.',
						id: '638a4d48a44f4fa4b0dec9ef',
						index: 309,
						name: 'Skill Super Enhance',
					},
				],
			},
		],
		name: 'Skill Savings',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases skill power by 25%, and reduces MP consumption by 25%.',
		id: '638a4d48a44f4fa4b0dec9e8',
		index: 313,
		mergeFrom: [],
		name: 'Expert Skill',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases skill power by 35%, and reduces MP consumption by 35%.',
		id: '638a4d48a44f4fa4b0dec9ec',
		index: 314,
		mergeFrom: [],
		name: 'Super Skill',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Effect: Massively increases the target's level.",
		id: '638a4d48a44f4fa4b0dec9e9',
		index: 349,
		mergeFrom: [],
		name: 'Soul Dwelling',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Effect: Massively increases the target's attack power.",
		id: '638a4d48a44f4fa4b0dec9f0',
		index: 350,
		mergeFrom: [],
		name: 'Blessing of Strength',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Effect: Massively increases the target's defense.",
		id: '638a4d48a44f4fa4b0dec9ea',
		index: 351,
		mergeFrom: [],
		name: 'Blessing of Protection',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Effect: Massively increases the target's speed.",
		id: '638a4d48a44f4fa4b0dec9f3',
		index: 352,
		mergeFrom: [],
		name: 'Blessing of Skanda',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Has a chance to inflict Sleep when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9f4',
		index: 365,
		mergeFrom: [],
		name: 'Inflict Sleep',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Has a chance to inflict Poison when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9f5',
		index: 366,
		mergeFrom: [],
		name: 'Inflict Poison',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Has a chance to inflict Slow when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9f6',
		index: 367,
		mergeFrom: [],
		name: 'Inflict Slow',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Has a chance to inflict Curse when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9fa',
		index: 368,
		mergeFrom: [],
		name: 'Inflict Curse',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Has a chance to inflict Blind when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9fb',
		index: 369,
		mergeFrom: [],
		name: 'Inflict Blind',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Has a chance to inflict Weak when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9f8',
		index: 370,
		mergeFrom: [],
		name: 'Inflict Weak',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Has a chance to inflict No Heal when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9f7',
		index: 371,
		mergeFrom: [],
		name: 'Inflict No Heal',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Has a chance to inflict Seal when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9fc',
		index: 372,
		mergeFrom: [],
		name: 'Inflict Seal',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Effect: Massively reduces the target's level, reducing all stats and damage dealt.",
		id: '638a4d48a44f4fa4b0dec9f9',
		index: 373,
		mergeFrom: [],
		name: 'Consume Soul',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Effect: Massively reduces the target's attack power.",
		id: '638a4d48a44f4fa4b0dec9fd',
		index: 374,
		mergeFrom: [],
		name: 'Powerless Curse',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Effect: Massively reduces the target's defense.",
		id: '638a4d48a44f4fa4b0dec9fe',
		index: 375,
		mergeFrom: [],
		name: 'Defenseless Curse',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Effect: Massively reduces the target's speed.",
		id: '638a4d48a44f4fa4b0dec9ff',
		index: 376,
		mergeFrom: [],
		name: 'Slowness Curse',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Absorb 3% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca02',
		index: 401,
		mergeFrom: [],
		name: 'Damage Absorb',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Absorb 5% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca03',
		index: 402,
		mergeFrom: [],
		name: 'Damage Absorb+',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Absorb 7% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca01',
		index: 403,
		mergeFrom: [],
		name: 'Damage Absorb++',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Absorb 7% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca05',
		index: 404,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Absorb 3% of damage dealt through attacks to restore your own HP.',
						id: '638a4d48a44f4fa4b0deca02',
						index: 401,
						name: 'Damage Absorb',
					},
					{
						description: 'Effect: Absorb 5% of damage dealt through attacks to restore your own HP.',
						id: '638a4d48a44f4fa4b0deca03',
						index: 402,
						name: 'Damage Absorb+',
					},
				],
			},
		],
		name: 'HP Absorb',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Absorb 10% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca06',
		index: 405,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Absorb 5% of damage dealt through attacks to restore your own HP.',
						id: '638a4d48a44f4fa4b0deca03',
						index: 402,
						name: 'Damage Absorb+',
					},
					{
						description: 'Effect: Absorb 7% of damage dealt through attacks to restore your own HP.',
						id: '638a4d48a44f4fa4b0deca01',
						index: 403,
						name: 'Damage Absorb++',
					},
				],
			},
		],
		name: 'Steal Life',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Absorb 15% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca07',
		index: 406,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Absorb 7% of damage dealt through attacks to restore your own HP.',
						id: '638a4d48a44f4fa4b0deca05',
						index: 404,
						name: 'HP Absorb',
					},
					{
						description: 'Effect: Absorb 10% of damage dealt through attacks to restore your own HP.',
						id: '638a4d48a44f4fa4b0deca06',
						index: 405,
						name: 'Steal Life',
					},
				],
			},
		],
		name: 'Absorb Soul',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Effect: Increases attack power by 20, and absorb 10% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca00',
		index: 407,
		mergeFrom: [],
		name: 'Over Power',
	},
	{
		categories: ['EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases damage dealt to Slag type enemies.',
		id: '638a4d48a44f4fa4b0deca04',
		index: 422,
		mergeFrom: [],
		name: 'Slag Slayer',
	},
	{
		categories: ['ATK_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases damage dealt to Plant and Spirit type enemies.',
		id: '638a4d48a44f4fa4b0deca08',
		index: 423,
		mergeFrom: [],
		name: 'Spirit Slayer',
	},
	{
		categories: ['ATK_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases damage dealt to Animal and Beast type enemies.',
		id: '638a4d48a44f4fa4b0deca09',
		index: 424,
		mergeFrom: [],
		name: 'Beast Slayer',
	},
	{
		categories: ['ATK_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases damage dealt to Demon type enemies.',
		id: '638a4d48a44f4fa4b0deca0a',
		index: 425,
		mergeFrom: [],
		name: 'Demon Slayer',
	},
	{
		categories: ['ATK_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases damage dealt to Dragon type enemies.',
		id: '638a4d48a44f4fa4b0deca0b',
		index: 426,
		mergeFrom: [],
		name: 'Dragon Slayer',
	},
	{
		categories: ['ATK_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases damage dealt to monsters created through magic and alchemy.',
		id: '638a4d48a44f4fa4b0deca0d',
		index: 427,
		mergeFrom: [],
		name: 'Magical Slayer',
	},
	{
		categories: ['ATK_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases damage dealt to Puni type enemies.',
		id: '638a4d48a44f4fa4b0deca0f',
		index: 428,
		mergeFrom: [],
		name: 'Puni Slayer',
	},
	{
		categories: ['ATK_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases damage dealt to Undead type enemies.',
		id: '638a4d48a44f4fa4b0deca0c',
		index: 429,
		mergeFrom: [],
		name: 'Undead Slayer',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases damage dealt to Broken targets by 10%.',
		id: '638a4d48a44f4fa4b0deca0e',
		index: 446,
		mergeFrom: [],
		name: 'Enhance Finisher',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases damage dealt to Broken targets by 20%.',
		id: '638a4d48a44f4fa4b0deca11',
		index: 447,
		mergeFrom: [],
		name: 'Enhance Finisher+',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases damage dealt to Broken targets by 30%.',
		id: '638a4d48a44f4fa4b0deca12',
		index: 448,
		mergeFrom: [],
		name: 'Enhance Finisher++',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases damage dealt to Broken targets by 30%.',
		id: '638a4d48a44f4fa4b0deca16',
		index: 449,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases damage dealt to Broken targets by 10%.',
						id: '638a4d48a44f4fa4b0deca0e',
						index: 446,
						name: 'Enhance Finisher',
					},
					{
						description: 'Effect: Increases damage dealt to Broken targets by 20%.',
						id: '638a4d48a44f4fa4b0deca11',
						index: 447,
						name: 'Enhance Finisher+',
					},
				],
			},
		],
		name: 'Merciless Blow',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases damage dealt to Broken targets by 40%.',
		id: '638a4d48a44f4fa4b0deca19',
		index: 450,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases damage dealt to Broken targets by 20%.',
						id: '638a4d48a44f4fa4b0deca11',
						index: 447,
						name: 'Enhance Finisher+',
					},
					{
						description: 'Effect: Increases damage dealt to Broken targets by 30%.',
						id: '638a4d48a44f4fa4b0deca12',
						index: 448,
						name: 'Enhance Finisher++',
					},
				],
			},
		],
		name: 'Relentless Blow',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases damage dealt to Broken targets by 60%.',
		id: '638a4d48a44f4fa4b0deca1b',
		index: 451,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases damage dealt to Broken targets by 30%.',
						id: '638a4d48a44f4fa4b0deca16',
						index: 449,
						name: 'Merciless Blow',
					},
					{
						description: 'Effect: Increases damage dealt to Broken targets by 40%.',
						id: '638a4d48a44f4fa4b0deca19',
						index: 450,
						name: 'Relentless Blow',
					},
				],
			},
		],
		name: 'Ruthless Blow',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Enhances item effect according to strength of traits present.',
		id: '638a4d48a44f4fa4b0deca17',
		index: 464,
		mergeFrom: [],
		name: 'Trait Enhance',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Greatly enhances item effect according to strength of traits present.',
		id: '638a4d48a44f4fa4b0deca10',
		index: 465,
		mergeFrom: [],
		name: 'Trait Enhance+',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Massively enhances item effect according to strength of traits present.',
		id: '638a4d49a44f4fa4b0deca1c',
		index: 466,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Enhances item effect according to strength of traits present.',
						id: '638a4d48a44f4fa4b0deca17',
						index: 464,
						name: 'Trait Enhance',
					},
					{
						description: 'Effect: Greatly enhances item effect according to strength of traits present.',
						id: '638a4d48a44f4fa4b0deca10',
						index: 465,
						name: 'Trait Enhance+',
					},
				],
			},
		],
		name: 'Cost Bonus',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Effect: Enhances item effect according to strength of traits present. Stronger traits equal ridiculously greater enhancement.',
		id: '638a4d48a44f4fa4b0deca13',
		index: 467,
		mergeFrom: [],
		name: 'Trait Super Enhance',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Power increases by number of targets in effect area x 5%.',
		id: '638a4d48a44f4fa4b0deca14',
		index: 480,
		mergeFrom: [],
		name: 'Area Bonus',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Power increases by number of targets in effect area x 10%.',
		id: '638a4d48a44f4fa4b0deca15',
		index: 481,
		mergeFrom: [],
		name: 'Area Bonus+',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Power increases by number of targets in effect area x 15%.',
		id: '638a4d49a44f4fa4b0deca1f',
		index: 482,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Power increases by number of targets in effect area x 5%.',
						id: '638a4d48a44f4fa4b0deca14',
						index: 480,
						name: 'Area Bonus',
					},
					{
						description: 'Effect: Power increases by number of targets in effect area x 10%.',
						id: '638a4d48a44f4fa4b0deca15',
						index: 481,
						name: 'Area Bonus+',
					},
				],
			},
		],
		name: 'Effective Vs Many',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Power increases by number of targets in effect area x 20%.',
		id: '638a4d48a44f4fa4b0deca1a',
		index: 483,
		mergeFrom: [],
		name: 'Multi Bonus',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Power increases by 10 / number of targets in effect area %.',
		id: '638a4d48a44f4fa4b0deca18',
		index: 484,
		mergeFrom: [],
		name: 'Fewer Bonus',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Power increases by 15 / number of targets in effect area %.',
		id: '638a4d49a44f4fa4b0deca22',
		index: 485,
		mergeFrom: [],
		name: 'Fewer Bonus+',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Power increases by 20 / number of targets in effect area %.',
		id: '638a4d49a44f4fa4b0deca20',
		index: 486,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Power increases by 10 / number of targets in effect area %.',
						id: '638a4d48a44f4fa4b0deca18',
						index: 484,
						name: 'Fewer Bonus',
					},
					{
						description: 'Effect: Power increases by 15 / number of targets in effect area %.',
						id: '638a4d49a44f4fa4b0deca22',
						index: 485,
						name: 'Fewer Bonus+',
					},
				],
			},
		],
		name: 'Effective Vs One',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Power increases by 30 / number of targets in effect area %.',
		id: '638a4d49a44f4fa4b0deca1e',
		index: 487,
		mergeFrom: [],
		name: 'Single Bonus',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Effect: Power increases by 20 / number of targets in effect area % + number of targets in effect area x 10%.',
		id: '638a4d49a44f4fa4b0deca1d',
		index: 488,
		mergeFrom: [],
		name: 'Few + Many Bonus',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Power increases by 10% when use count is 1.',
		id: '638a4d49a44f4fa4b0deca29',
		index: 507,
		mergeFrom: [],
		name: 'Enhance Last',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Power increases by 20% when use count is 1.',
		id: '638a4d49a44f4fa4b0deca23',
		index: 508,
		mergeFrom: [],
		name: 'Enhance Last+',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Power increases by 30% when use count is 1.',
		id: '638a4d49a44f4fa4b0deca28',
		index: 509,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Power increases by 10% when use count is 1.',
						id: '638a4d49a44f4fa4b0deca29',
						index: 507,
						name: 'Enhance Last',
					},
					{
						description: 'Effect: Power increases by 20% when use count is 1.',
						id: '638a4d49a44f4fa4b0deca23',
						index: 508,
						name: 'Enhance Last+',
					},
				],
			},
		],
		name: 'Final Blow',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Power increases by 45% when use count is 1.',
		id: '638a4d49a44f4fa4b0deca24',
		index: 510,
		mergeFrom: [],
		name: 'Last Strike',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Completely consumes item in 1 use during battle, but increases power by use count x 3%.',
		id: '638a4d49a44f4fa4b0deca21',
		index: 511,
		mergeFrom: [],
		name: 'Count Compress',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Completely consumes item in 1 use during battle, but increases power by use count x 5%.',
		id: '638a4d49a44f4fa4b0deca25',
		index: 512,
		mergeFrom: [],
		name: 'Count Compress+',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Completely consumes item in 1 use during battle, but increases power by use count x 7%.',
		id: '638a4d49a44f4fa4b0deca27',
		index: 513,
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Completely consumes item in 1 use during battle, but increases power by use count x 3%.',
						id: '638a4d49a44f4fa4b0deca21',
						index: 511,
						name: 'Count Compress',
					},
					{
						description:
							'Effect: Completely consumes item in 1 use during battle, but increases power by use count x 5%.',
						id: '638a4d49a44f4fa4b0deca25',
						index: 512,
						name: 'Count Compress+',
					},
				],
			},
		],
		name: 'Force Final',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Completely consumes item in 1 use during battle, but increases power by use count x 10%.',
		id: '638a4d49a44f4fa4b0deca26',
		index: 514,
		mergeFrom: [],
		name: 'One Time End',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases item power by maximum use count x 2%.',
		id: '638a4d49a44f4fa4b0deca2d',
		index: 515,
		mergeFrom: [],
		name: 'Count Bonus',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases item power by maximum use count x 3%.',
		id: '638a4d49a44f4fa4b0deca2c',
		index: 516,
		mergeFrom: [],
		name: 'Count Bonus+',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases item power by maximum use count x 5%.',
		id: '638a4d49a44f4fa4b0deca34',
		index: 517,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases item power by maximum use count x 2%.',
						id: '638a4d49a44f4fa4b0deca2d',
						index: 515,
						name: 'Count Bonus',
					},
					{
						description: 'Effect: Increases item power by maximum use count x 3%.',
						id: '638a4d49a44f4fa4b0deca2c',
						index: 516,
						name: 'Count Bonus+',
					},
				],
			},
		],
		name: 'Count Boost',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases item power by maximum use count x 7%.',
		id: '638a4d49a44f4fa4b0deca3b',
		index: 518,
		mergeFrom: [],
		name: 'Enhance with Count',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Reduces WT after using item by 10%. Power is decreased slightly.',
		id: '638a4d49a44f4fa4b0deca2a',
		index: 541,
		mergeFrom: [],
		name: 'Fast Use',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Reduces WT after using item by 20%. Power is decreased a small amount.',
		id: '638a4d49a44f4fa4b0deca2b',
		index: 542,
		mergeFrom: [],
		name: 'Fast Use+',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Reduces WT after using item by 30%. Power is decreased a small amount.',
		id: '638a4d49a44f4fa4b0deca2f',
		index: 543,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Reduces WT after using item by 10%. Power is decreased slightly.',
						id: '638a4d49a44f4fa4b0deca2a',
						index: 541,
						name: 'Fast Use',
					},
					{
						description: 'Effect: Reduces WT after using item by 20%. Power is decreased a small amount.',
						id: '638a4d49a44f4fa4b0deca2b',
						index: 542,
						name: 'Fast Use+',
					},
				],
			},
		],
		name: 'Sonic Throw',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Reduces WT after using item by 50%.',
		id: '638a4d49a44f4fa4b0deca2e',
		index: 544,
		mergeFrom: [],
		name: 'Mach Throw',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Wait time after using item increases a little, but power increases a little too.',
		id: '638a4d49a44f4fa4b0deca30',
		index: 545,
		mergeFrom: [],
		name: 'Power Throw',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Wait time after using item increases, but power increases too.',
		id: '638a4d49a44f4fa4b0deca33',
		index: 546,
		mergeFrom: [],
		name: 'Power Throw+',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Wait time after using item increases a lot, but power increases a lot too.',
		id: '638a4d49a44f4fa4b0deca35',
		index: 547,
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Wait time after using item increases a little, but power increases a little too.',
						id: '638a4d49a44f4fa4b0deca30',
						index: 545,
						name: 'Power Throw',
					},
					{
						description: 'Effect: Wait time after using item increases, but power increases too.',
						id: '638a4d49a44f4fa4b0deca33',
						index: 546,
						name: 'Power Throw+',
					},
				],
			},
		],
		name: 'Strong Throw',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases item power by a small amount proportional to wait time after using item.',
		id: '638a4d49a44f4fa4b0deca32',
		index: 548,
		mergeFrom: [],
		name: 'Wait Time Enhance',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases item power by a decent amount proportional to wait time after using item.',
		id: '638a4d49a44f4fa4b0deca31',
		index: 549,
		mergeFrom: [],
		name: 'Wait Time Enhance+',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases item power proportional to wait time after using item.',
		id: '638a4d49a44f4fa4b0deca37',
		index: 550,
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Increases item power by a small amount proportional to wait time after using item.',
						id: '638a4d49a44f4fa4b0deca32',
						index: 548,
						name: 'Wait Time Enhance',
					},
					{
						description:
							'Effect: Increases item power by a decent amount proportional to wait time after using item.',
						id: '638a4d49a44f4fa4b0deca31',
						index: 549,
						name: 'Wait Time Enhance+',
					},
				],
			},
		],
		name: 'Charge Item',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Item size increases by 1 level, equipment cost increases by 5.',
		id: '638a4d49a44f4fa4b0deca3a',
		index: 571,
		mergeFrom: [],
		name: 'Size+',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Item size increases by 2 levels, equipment cost increases by 10.',
		id: '638a4d49a44f4fa4b0deca3e',
		index: 572,
		mergeFrom: [],
		name: 'Jumbo Size',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Item size decreases by 1 level, equipment cost decreases by 10.',
		id: '638a4d49a44f4fa4b0deca38',
		index: 573,
		mergeFrom: [],
		name: 'Size -',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Item size decreases by 2 levels, equipment cost decreases by 20.',
		id: '638a4d49a44f4fa4b0deca39',
		index: 574,
		mergeFrom: [],
		name: 'Mini Size',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases item effect by a decent amount as size increases.',
		id: '638a4d49a44f4fa4b0deca36',
		index: 575,
		mergeFrom: [],
		name: 'Size Enhance',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases item effect as size increases.',
		id: '638a4d49a44f4fa4b0deca3c',
		index: 576,
		mergeFrom: [],
		name: 'Size Super Enhance',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases item effect by a large amount as size increases.',
		id: '638a4d49a44f4fa4b0deca4b',
		index: 577,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases item effect by a decent amount as size increases.',
						id: '638a4d49a44f4fa4b0deca36',
						index: 575,
						name: 'Size Enhance',
					},
					{
						description: 'Effect: Increases item effect as size increases.',
						id: '638a4d49a44f4fa4b0deca3c',
						index: 576,
						name: 'Size Super Enhance',
					},
				],
			},
		],
		name: 'Crush Dimension',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Reduces equipment cost of usable item by 5.',
		id: '638a4d49a44f4fa4b0deca3d',
		index: 578,
		mergeFrom: [],
		name: 'Kind of Light',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Reduces equipment cost of usable item by 8.',
		id: '638a4d49a44f4fa4b0deca3f',
		index: 579,
		mergeFrom: [],
		name: 'Light',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Reduces equipment cost of usable item by 12.',
		id: '638a4d49a44f4fa4b0deca46',
		index: 580,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Reduces equipment cost of usable item by 5.',
						id: '638a4d49a44f4fa4b0deca3d',
						index: 578,
						name: 'Kind of Light',
					},
					{
						description: 'Effect: Reduces equipment cost of usable item by 8.',
						id: '638a4d49a44f4fa4b0deca3f',
						index: 579,
						name: 'Light',
					},
				],
			},
		],
		name: 'Easy to Handle',
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Reduces equipment cost of usable item by 20.',
		id: '638a4d49a44f4fa4b0deca43',
		index: 581,
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Reduces equipment cost of usable item by 8.',
						id: '638a4d49a44f4fa4b0deca3f',
						index: 579,
						name: 'Light',
					},
					{
						description: 'Effect: Reduces equipment cost of usable item by 12.',
						id: '638a4d49a44f4fa4b0deca46',
						index: 580,
						name: 'Easy to Handle',
					},
				],
			},
		],
		name: 'Accustoms Quickly',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Zeal factor enhances the material it resides in. Effect: Increases HP and attack.',
		id: '638a4d49a44f4fa4b0deca47',
		index: 592,
		mergeFrom: [],
		name: 'Zeal Factor',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Happy heart enhances the material it resides in. Effect: Increases MP and defense.',
		id: '638a4d49a44f4fa4b0deca40',
		index: 593,
		mergeFrom: [],
		name: 'Happy Heart',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Cunning wit enhances the material it resides in. Effect: Increases critical bonus and accuracy.',
		id: '638a4d49a44f4fa4b0deca42',
		index: 594,
		mergeFrom: [],
		name: 'Cunning Wit',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Splendid glory enhances the material it resides in. Effect: Increases WT delay resistance and Break resistance.',
		id: '638a4d49a44f4fa4b0deca44',
		index: 595,
		mergeFrom: [],
		name: 'Splendid Glory',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Benevolent light enhances the material it resides in. Effect: Provides damage reversal and immunity to all ailments.',
		id: '638a4d49a44f4fa4b0deca48',
		index: 596,
		mergeFrom: [],
		name: 'Benevolent Light',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Wild instinct enhances the material it resides in. Effect: Increases speed, reduces wait time after using skills.',
		id: '638a4d49a44f4fa4b0deca41',
		index: 597,
		mergeFrom: [],
		name: 'Wild Instinct',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Persistent faith enhances the material it resides in. Effect: Provides HP regeneration and chance to avoid KO.',
		id: '638a4d49a44f4fa4b0deca45',
		index: 598,
		mergeFrom: [],
		name: 'Persistent Faith',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Guiding intuition enhances the material it resides in. Effect: Increases critical hit rate, has a chance to shorten wait time.',
		id: '638a4d49a44f4fa4b0deca4a',
		index: 599,
		mergeFrom: [],
		name: 'Guide Intuition',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Empty world enhances the material it resides in. Effect: Provides damage conversion, reduces physical damage taken.',
		id: '638a4d49a44f4fa4b0deca49',
		index: 600,
		mergeFrom: [],
		name: 'Empty World',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Power of madness enhances the material it resides in. Effect: Greatly increases attack power, lose lots of HP each turn.',
		id: '638a4d49a44f4fa4b0deca4c',
		index: 601,
		mergeFrom: [],
		name: 'Power of Madness',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Burning passion enhances the material it resides in. Effect: Increases all stats by 15, bestows fire and ice resistance.',
		id: '638a4d49a44f4fa4b0deca4e',
		index: 602,
		mergeFrom: [],
		name: 'Burning Passion',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Unwavering spirit enhances the material it resides in. Effect: Increases all stats by 15, bestows lightning and physical resistance.',
		id: '638a4d49a44f4fa4b0deca4d',
		index: 603,
		mergeFrom: [],
		name: 'Unwavering Spirit',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Fog of illusion enhances the material it resides in. Effect: Swaps HP and MP, adds evasion chance.',
		id: '638a4d49a44f4fa4b0deca4f',
		index: 604,
		mergeFrom: [],
		name: 'Fog of Illusion',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Bonds of belief enhances the material it resides in. Effect: Increases assist effect, provides damage conversion.',
		id: '638a4d49a44f4fa4b0deca5a',
		index: 605,
		mergeFrom: [],
		name: 'Bonds of Belief',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Hammer of justice enhances the material it resides in. Effect: Greatly increases skill power, adds Break value.',
		id: '638a4d49a44f4fa4b0deca52',
		index: 606,
		mergeFrom: [],
		name: 'Hammer of Justice',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Dreadful king enhances the material it resides in. Effect: Causes additional damage and status effects.',
		id: '638a4d49a44f4fa4b0deca51',
		index: 607,
		mergeFrom: [],
		name: 'Dreadful King',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Unceasing desire enhances the material it resides in. Effect: Absorbs a portion of damage dealt.',
		id: '638a4d49a44f4fa4b0deca55',
		index: 608,
		mergeFrom: [],
		name: 'Unceasing Desire',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Pursuit of knowledge enhances the material it resides in. Effect: Causes additional damage.',
		id: '638a4d49a44f4fa4b0deca53',
		index: 609,
		mergeFrom: [],
		name: 'Pursuit of Knowledge',
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Star of expectation enhances the material it resides in. Effect: Provides enhancement proportional to level.',
		id: '638a4d49a44f4fa4b0deca50',
		index: 610,
		mergeFrom: [],
		name: 'Star of Expectation',
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Ray of hope enhances the material it resides in. Effect: Increases maximum HP, provides automatic KO revival.',
		id: '638a4d49a44f4fa4b0deca57',
		index: 611,
		mergeFrom: [],
		name: 'Ray of Hope',
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Awakening courage enhances the material it resides in. Effect: Provides a bonus against powerful foes and bosses.',
		id: '638a4d49a44f4fa4b0deca54',
		index: 612,
		mergeFrom: [],
		name: 'Awakening Courage',
	},
	{
		categories: ['EXPLORATION', 'SYNTHESIS'],
		description:
			'Kind soul enhances the material it resides in. Effect: Provides a Burst Mode bonus and gauge fill rate increase.',
		id: '638a4d49a44f4fa4b0deca58',
		index: 613,
		mergeFrom: [],
		name: 'Kind Soul',
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Indomitable soul enhances the material it resides in. Effect: Provides Break resistance and greatly increases speed of recovering from Break.',
		id: '638a4d49a44f4fa4b0deca59',
		index: 614,
		mergeFrom: [],
		name: 'Indomitable Soul',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Attacks cause 7% additional damage, and increases skill power by 15%.',
		id: '638a4d49a44f4fa4b0deca56',
		index: 659,
		mergeFrom: [],
		name: 'Changing Attack',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Attacks cause 15% additional damage, and increases skill power by 10%.',
		id: '638a4d49a44f4fa4b0deca5e',
		index: 660,
		mergeFrom: [],
		name: 'Avidya Attack',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Attacks cause 15% additional damage, and increases skill power by 15%.',
		id: '638a4d49a44f4fa4b0deca5c',
		index: 661,
		mergeFrom: [],
		name: 'Barrage Attack',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Attacks cause 20% additional damage, and increases skill power by 25%.',
		id: '638a4d49a44f4fa4b0deca5b',
		index: 662,
		mergeFrom: [],
		name: 'Skillful Attack',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Attacks cause 15% additional damage, and increases skill power by 20%.',
		id: '638a4d49a44f4fa4b0deca5d',
		index: 663,
		mergeFrom: [],
		name: 'Persistent Attack',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Attacks cause between 1 - 50% additional damage.',
		id: '638a4d49a44f4fa4b0deca5f',
		index: 664,
		mergeFrom: [],
		name: 'Deadly Attack',
	},
	{
		categories: ['HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Effect: Item automatically activates when the user's HP falls below 20% in battle. Consumes MP.",
		id: '638a4d49a44f4fa4b0deca61',
		index: 677,
		mergeFrom: [],
		name: 'Auto Activate 20%',
	},
	{
		categories: ['HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Effect: Item automatically activates when the user's HP falls below 30% in battle. Consumes MP.",
		id: '638a4d49a44f4fa4b0deca60',
		index: 678,
		mergeFrom: [],
		name: 'Auto Activate 30%',
	},
	{
		categories: ['HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Effect: Item automatically activates when the user's HP falls below 40% in battle. Consumes MP.",
		id: '638a4d49a44f4fa4b0deca63',
		index: 679,
		mergeFrom: [],
		name: 'Auto Activate 50%',
	},
	{
		categories: ['HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Effect: Item automatically activates when the user's HP falls below 50% in battle.",
		id: '638a4d49a44f4fa4b0deca62',
		index: 680,
		mergeFrom: [],
		name: 'Auto Use',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Effect: Increases item power by 25%, and makes its effect non-attribute. Non-attribute is not affected by any resistances or weaknesses.',
		id: '638a4d49a44f4fa4b0deca67',
		index: 681,
		mergeFrom: [],
		name: 'No Attribute',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Has a high chance to inflict Poison when dealing damage.',
		id: '638a4d49a44f4fa4b0deca68',
		index: 682,
		mergeFrom: [],
		name: 'Poison Mist',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Effect: Restores some of the target's HP, and also recovers from Poison.",
		id: '638a4d49a44f4fa4b0deca6a',
		index: 683,
		mergeFrom: [],
		name: 'Slime Compound',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description:
			"Effect: Temporarily increases all of the target's stats. They will also automatically revive on their next turn after being KO'd.",
		id: '638a4d49a44f4fa4b0deca66',
		index: 684,
		mergeFrom: [],
		name: 'False Flower',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description:
			"Effect: Pushes back the target's turn a little. This effect diminishes with each use until the target takes another turn.",
		id: '638a4d49a44f4fa4b0deca64',
		index: 685,
		mergeFrom: [],
		name: 'Electrified',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Heat causes continuous damage. The effect is small.',
		id: '638a4d49a44f4fa4b0deca65',
		index: 686,
		mergeFrom: [],
		name: 'Carries Heat',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Effect: Cold reduces the target's speed, and also has a low chance of inflicting Slow.",
		id: '638a4d49a44f4fa4b0deca69',
		index: 687,
		mergeFrom: [],
		name: 'Carries Cold',
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases all stats by 8.',
		id: '638a4d49a44f4fa4b0deca6b',
		index: 688,
		mergeFrom: [],
		name: 'Dark Matter',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases damage dealt to Puni and magical creatures.',
		id: '638a4d49a44f4fa4b0deca6c',
		index: 689,
		mergeFrom: [],
		name: 'Ancient Seal',
	},
	{
		categories: ['ACCESSORY', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Reduces skill power by 10%, but also reduces MP consumption by 30%.',
		id: '638a4d49a44f4fa4b0deca71',
		index: 690,
		mergeFrom: [],
		name: 'Absorbs Light',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Effect: Reduces the target's defense and speed.",
		id: '638a4d49a44f4fa4b0deca6f',
		index: 691,
		mergeFrom: [],
		name: 'Stinks',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Restores Break value to the target. Also reduces wait time after turns by a small amount.',
		id: '638a4d49a44f4fa4b0deca6e',
		index: 692,
		mergeFrom: [],
		name: 'Sunny Scent',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases attack by 7, and attacks cause a small amount of additional damage.',
		id: '638a4d49a44f4fa4b0deca6d',
		index: 693,
		mergeFrom: [],
		name: 'Cutting Thread',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: The target recovers a small amount of HP, and also recovers from Weak.',
		id: '638a4d49a44f4fa4b0deca72',
		index: 694,
		mergeFrom: [],
		name: 'Kirchen Bell Special',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Effect: Increases the target's evasion rate. This effect lasts 5 turns.",
		id: '638a4d49a44f4fa4b0deca75',
		index: 695,
		mergeFrom: [],
		name: 'Flickering Light',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases attack item effect by 5%, and also has a chance to cause Weak.',
		id: '638a4d49a44f4fa4b0deca70',
		index: 696,
		mergeFrom: [],
		name: 'Unidentified',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: The target recovers a small amount of HP, and also recovers from Curse.',
		id: '638a4d49a44f4fa4b0deca76',
		index: 697,
		mergeFrom: [],
		name: 'Purifying Water',
	},
	{
		categories: [
			'ACCESSORY',
			'ARMOR',
			'ATK_ITEM',
			'BUFF_ITEM',
			'DE_BUFF_ITEM',
			'HEAL_ITEM',
			'WEAPON',
			'EXPLORATION',
			'SYNTHESIS',
		],
		description: 'Effect: Price when selling to shops increases quite a lot.',
		id: '638a4d49a44f4fa4b0deca78',
		index: 698,
		mergeFrom: [],
		name: 'Golden Radiance',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases attack item effect by 15%.',
		id: '638a4d49a44f4fa4b0deca73',
		index: 699,
		mergeFrom: [],
		name: 'Super Fine',
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases defense by 10, and also causes a decent amount of HP recovery each turn.',
		id: '638a4d49a44f4fa4b0deca74',
		index: 700,
		mergeFrom: [],
		name: 'Mutated Material',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases recovery item effect by 30%, but increases equipment cost by 5.',
		id: '638a4d49a44f4fa4b0deca77',
		index: 701,
		mergeFrom: [],
		name: 'Special Ingredient',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description:
			"Effect: Increases the target's maximum HP during battle, and also reduces the effectiveness of status ailments. The effect is small.",
		id: '638a4d49a44f4fa4b0deca7b',
		index: 702,
		mergeFrom: [],
		name: 'Secret of Health',
	},
	{
		categories: ['ACCESSORY', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases critical hit rate, and also increases damage dealt to Broken targets.',
		id: '638a4d49a44f4fa4b0deca79',
		index: 703,
		mergeFrom: [],
		name: 'Power of Faith',
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: The target recovers from Poison and No Heal ailments.',
		id: '638a4d49a44f4fa4b0deca7a',
		index: 704,
		mergeFrom: [],
		name: 'Medicine Compound',
	},
	{
		categories: [
			'ACCESSORY',
			'ARMOR',
			'ATK_ITEM',
			'BUFF_ITEM',
			'DE_BUFF_ITEM',
			'HEAL_ITEM',
			'WEAPON',
			'EXPLORATION',
			'SYNTHESIS',
		],
		description: 'Effect: Increases price when selling to shops.',
		id: '638a4d49a44f4fa4b0deca7f',
		index: 705,
		mergeFrom: [],
		name: 'Rainbow Radiance',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases damage dealt to Demon and Undead enemies.',
		id: '638a4d49a44f4fa4b0deca7c',
		index: 706,
		mergeFrom: [],
		name: 'Wards Evil',
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Effect: Increases damage dealt to Broken targets by 20%, and a portion of damage dealt is absorbed to recover HP.',
		id: '638a4d49a44f4fa4b0deca7e',
		index: 707,
		mergeFrom: [],
		name: 'Demon Soul',
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Effect: Increases all stats by 15, and also increases skill power by 20%.',
		id: '638a4d49a44f4fa4b0deca7d',
		index: 708,
		mergeFrom: [],
		name: 'Dragon Soul',
	},
];

export default traits;
