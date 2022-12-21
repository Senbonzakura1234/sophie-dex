import type { Trait } from '@prisma/client';

const traits: Trait[] = [
	{
		description: 'Effect: Price when selling to shops decreases a little, but also decreases duplication price.',
		id: '638a4d47a44f4fa4b0dec965',
		mergeFrom: [],
		name: 'Low Price',
		index: 0,
		categories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops decreases quite a bit, but also decreases duplication price.',
		id: '638a4d47a44f4fa4b0dec96a',
		mergeFrom: [],
		name: 'Low Price+',
		index: 1,
		categories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops decreases quite a lot, but also decreases duplication price.',
		id: '638a4d47a44f4fa4b0dec968',
		mergeFrom: [],
		name: 'Low Price++',
		index: 2,
		categories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops decreases quite a lot, but also decreases duplication price.',
		id: '638a4d47a44f4fa4b0dec963',
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Price when selling to shops decreases a little, but also decreases duplication price.',
						id: '638a4d47a44f4fa4b0dec965',
						name: 'Low Price',
						index: 0,
					},
					{
						description:
							'Effect: Price when selling to shops decreases quite a bit, but also decreases duplication price.',
						id: '638a4d47a44f4fa4b0dec96a',
						name: 'Low Price+',
						index: 1,
					},
				],
			},
		],
		name: 'Common Item',
		index: 3,
		categories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops decreases massively, but also decreases duplication price.',
		id: '638a4d47a44f4fa4b0dec96b',
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Price when selling to shops decreases quite a bit, but also decreases duplication price.',
						id: '638a4d47a44f4fa4b0dec96a',
						name: 'Low Price+',
						index: 1,
					},
					{
						description:
							'Effect: Price when selling to shops decreases quite a lot, but also decreases duplication price.',
						id: '638a4d47a44f4fa4b0dec968',
						name: 'Low Price++',
						index: 2,
					},
				],
			},
		],
		name: 'Mass Produced',
		index: 4,
		categories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops plummets, but also decreases duplication price.',
		id: '638a4d47a44f4fa4b0dec969',
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Price when selling to shops decreases quite a lot, but also decreases duplication price.',
						id: '638a4d47a44f4fa4b0dec963',
						name: 'Common Item',
						index: 3,
					},
					{
						description:
							'Effect: Price when selling to shops decreases massively, but also decreases duplication price.',
						id: '638a4d47a44f4fa4b0dec96b',
						name: 'Mass Produced',
						index: 4,
					},
				],
			},
		],
		name: 'No Price',
		index: 5,
		categories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops increases a little.',
		id: '638a4d47a44f4fa4b0dec967',
		mergeFrom: [],
		name: 'High Price',
		index: 6,
		categories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops increases quite a bit.',
		id: '638a4d47a44f4fa4b0dec962',
		mergeFrom: [],
		name: 'High Price+',
		index: 7,
		categories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops increases quite a lot.',
		id: '638a4d47a44f4fa4b0dec966',
		mergeFrom: [],
		name: 'High Price++',
		index: 8,
		categories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops increases quite a lot.',
		id: '638a4d47a44f4fa4b0dec96e',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Price when selling to shops increases a little.',
						id: '638a4d47a44f4fa4b0dec967',
						name: 'High Price',
						index: 6,
					},
					{
						description: 'Effect: Price when selling to shops increases quite a bit.',
						id: '638a4d47a44f4fa4b0dec962',
						name: 'High Price+',
						index: 7,
					},
				],
			},
		],
		name: 'High Class',
		index: 9,
		categories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops increases massively.',
		id: '638a4d47a44f4fa4b0dec96d',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Price when selling to shops increases quite a bit.',
						id: '638a4d47a44f4fa4b0dec962',
						name: 'High Price+',
						index: 7,
					},
					{
						description: 'Effect: Price when selling to shops increases quite a lot.',
						id: '638a4d47a44f4fa4b0dec966',
						name: 'High Price++',
						index: 8,
					},
				],
			},
		],
		name: 'Rare Item',
		index: 10,
		categories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops skyrockets.',
		id: '638a4d47a44f4fa4b0dec964',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Price when selling to shops increases quite a lot.',
						id: '638a4d47a44f4fa4b0dec96e',
						name: 'High Class',
						index: 9,
					},
					{
						description: 'Effect: Price when selling to shops increases massively.',
						id: '638a4d47a44f4fa4b0dec96d',
						name: 'Rare Item',
						index: 10,
					},
				],
			},
		],
		name: 'Premium Price',
		index: 11,
		categories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases item quality by 10% when this trait is transferred.',
		id: '638a4d47a44f4fa4b0dec982',
		mergeFrom: [],
		name: 'Quality Up',
		index: 12,
		categories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases item quality by 15% when this trait is transferred.',
		id: '638a4d47a44f4fa4b0dec970',
		mergeFrom: [],
		name: 'Quality Up+',
		index: 13,
		categories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases item quality by 20% when this trait is transferred.',
		id: '638a4d47a44f4fa4b0dec972',
		mergeFrom: [],
		name: 'Quality Up++',
		index: 14,
		categories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases item quality by 20% when this trait is transferred.',
		id: '638a4d47a44f4fa4b0dec973',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases item quality by 10% when this trait is transferred.',
						id: '638a4d47a44f4fa4b0dec982',
						name: 'Quality Up',
						index: 12,
					},
					{
						description: 'Effect: Increases item quality by 15% when this trait is transferred.',
						id: '638a4d47a44f4fa4b0dec970',
						name: 'Quality Up+',
						index: 13,
					},
				],
			},
		],
		name: 'Well Made',
		index: 15,
		categories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases item quality by 30% when this trait is transferred.',
		id: '638a4d47a44f4fa4b0dec97e',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases item quality by 15% when this trait is transferred.',
						id: '638a4d47a44f4fa4b0dec970',
						name: 'Quality Up+',
						index: 13,
					},
					{
						description: 'Effect: Increases item quality by 20% when this trait is transferred.',
						id: '638a4d47a44f4fa4b0dec972',
						name: 'Quality Up++',
						index: 14,
					},
				],
			},
		],
		name: 'Pro Perfection',
		index: 16,
		categories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases item quality by 50% when this trait is transferred.',
		id: '638a4d47a44f4fa4b0dec971',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases item quality by 20% when this trait is transferred.',
						id: '638a4d47a44f4fa4b0dec973',
						name: 'Well Made',
						index: 15,
					},
					{
						description: 'Effect: Increases item quality by 30% when this trait is transferred.',
						id: '638a4d47a44f4fa4b0dec97e',
						name: 'Pro Perfection',
						index: 16,
					},
				],
			},
		],
		name: 'Super Quality',
		index: 17,
		categories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases attack item effect by 5%.',
		id: '638a4d47a44f4fa4b0dec96c',
		mergeFrom: [],
		name: 'Destruction Up',
		index: 52,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases attack item effect by 7%.',
		id: '638a4d47a44f4fa4b0dec96f',
		mergeFrom: [],
		name: 'Destruction Up+',
		index: 53,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases attack item effect by 10%.',
		id: '638a4d47a44f4fa4b0dec984',
		mergeFrom: [],
		name: 'Destruction Up++',
		index: 54,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases attack item effect by 12%.',
		id: '638a4d47a44f4fa4b0dec974',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases attack item effect by 5%.',
						id: '638a4d47a44f4fa4b0dec96c',
						name: 'Destruction Up',
						index: 52,
					},
					{
						description: 'Effect: Increases attack item effect by 7%.',
						id: '638a4d47a44f4fa4b0dec96f',
						name: 'Destruction Up+',
						index: 53,
					},
				],
			},
		],
		name: 'Big Destruction',
		index: 55,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases attack item effect by 17%.',
		id: '638a4d47a44f4fa4b0dec977',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases attack item effect by 7%.',
						id: '638a4d47a44f4fa4b0dec96f',
						name: 'Destruction Up+',
						index: 53,
					},
					{
						description: 'Effect: Increases attack item effect by 10%.',
						id: '638a4d47a44f4fa4b0dec984',
						name: 'Destruction Up++',
						index: 54,
					},
				],
			},
		],
		name: 'Intense Destruction',
		index: 56,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases attack item effect by 30%.',
		id: '638a4d47a44f4fa4b0dec975',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases attack item effect by 12%.',
						id: '638a4d47a44f4fa4b0dec974',
						name: 'Big Destruction',
						index: 55,
					},
					{
						description: 'Effect: Increases attack item effect by 17%.',
						id: '638a4d47a44f4fa4b0dec977',
						name: 'Intense Destruction',
						index: 56,
					},
				],
			},
		],
		name: 'Ultimate Destruction',
		index: 57,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases attack item effect by 40%.',
		id: '638a4d47a44f4fa4b0dec979',
		mergeFrom: [],
		name: 'Power to Destroy Gods',
		index: 58,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Attack item enhanced by a small, fixed amount. Lower power equals stronger enhancement.',
		id: '638a4d47a44f4fa4b0dec978',
		mergeFrom: [],
		name: 'Fixed Power',
		index: 59,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Attack item enhanced by a fixed amount. Lower power equals stronger enhancement.',
		id: '638a4d47a44f4fa4b0dec976',
		mergeFrom: [],
		name: 'Fixed Power+',
		index: 60,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Attack item enhanced by a large, fixed amount. Lower power equals stronger enhancement.',
		id: '638a4d47a44f4fa4b0dec97b',
		mergeFrom: [],
		name: 'Fixed Power++',
		index: 61,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Attack item enhanced by a fixed amount. Lower power equals stronger enhancement.',
		id: '638a4d47a44f4fa4b0dec981',
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Attack item enhanced by a small, fixed amount. Lower power equals stronger enhancement.',
						id: '638a4d47a44f4fa4b0dec978',
						name: 'Fixed Power',
						index: 59,
					},
					{
						description:
							'Effect: Attack item enhanced by a fixed amount. Lower power equals stronger enhancement.',
						id: '638a4d47a44f4fa4b0dec976',
						name: 'Fixed Power+',
						index: 60,
					},
				],
			},
		],
		name: 'Pain in Numbers',
		index: 62,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Attack item enhanced by a large, fixed amount. Lower power equals stronger enhancement.',
		id: '638a4d47a44f4fa4b0dec97a',
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Attack item enhanced by a fixed amount. Lower power equals stronger enhancement.',
						id: '638a4d47a44f4fa4b0dec976',
						name: 'Fixed Power+',
						index: 60,
					},
					{
						description:
							'Effect: Attack item enhanced by a large, fixed amount. Lower power equals stronger enhancement.',
						id: '638a4d47a44f4fa4b0dec97b',
						name: 'Fixed Power++',
						index: 61,
					},
				],
			},
		],
		name: 'Damage in Numbers',
		index: 63,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Attack item enhanced by a huge, fixed amount. Lower power equals stronger enhancement.',
		id: '638a4d47a44f4fa4b0dec9a4',
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Attack item enhanced by a fixed amount. Lower power equals stronger enhancement.',
						id: '638a4d47a44f4fa4b0dec981',
						name: 'Pain in Numbers',
						index: 62,
					},
					{
						description:
							'Effect: Attack item enhanced by a large, fixed amount. Lower power equals stronger enhancement.',
						id: '638a4d47a44f4fa4b0dec97a',
						name: 'Damage in Numbers',
						index: 63,
					},
				],
			},
		],
		name: 'Big Damage Numbers',
		index: 64,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description:
			'Effect: Attack item enhanced by a ridiculous, fixed amount. This increase scales with the original value.',
		id: '638a4d47a44f4fa4b0dec97c',
		mergeFrom: [],
		name: 'Legendary Destruction',
		index: 65,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Attacks cause 5% additional damage, and increases skill power by 5%.',
		id: '638a4d47a44f4fa4b0dec97f',
		mergeFrom: [],
		name: 'Increase Sharpness',
		index: 66,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause 7% additional damage, and increases skill power by 7%.',
		id: '638a4d47a44f4fa4b0dec980',
		mergeFrom: [],
		name: 'Cuts Easily',
		index: 67,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause 10% additional damage, and increases skill power by 10%.',
		id: '638a4d47a44f4fa4b0dec97d',
		mergeFrom: [],
		name: 'Increase Aggression',
		index: 68,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases recovery item effect by 10%.',
		id: '638a4d47a44f4fa4b0dec9a1',
		mergeFrom: [],
		name: 'Recovery Up',
		index: 103,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases recovery item effect by 15%.',
		id: '638a4d47a44f4fa4b0dec983',
		mergeFrom: [],
		name: 'Recovery Up+',
		index: 104,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases recovery item effect by 20%.',
		id: '638a4d47a44f4fa4b0dec985',
		mergeFrom: [],
		name: 'Recovery Up++',
		index: 105,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases recovery item effect by 25%.',
		id: '638a4d47a44f4fa4b0dec995',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases recovery item effect by 10%.',
						id: '638a4d47a44f4fa4b0dec9a1',
						name: 'Recovery Up',
						index: 103,
					},
					{
						description: 'Effect: Increases recovery item effect by 15%.',
						id: '638a4d47a44f4fa4b0dec983',
						name: 'Recovery Up+',
						index: 104,
					},
				],
			},
		],
		name: 'Big Recovery',
		index: 106,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases recovery item effect by 35%.',
		id: '638a4d47a44f4fa4b0dec986',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases recovery item effect by 15%.',
						id: '638a4d47a44f4fa4b0dec983',
						name: 'Recovery Up+',
						index: 104,
					},
					{
						description: 'Effect: Increases recovery item effect by 20%.',
						id: '638a4d47a44f4fa4b0dec985',
						name: 'Recovery Up++',
						index: 105,
					},
				],
			},
		],
		name: 'Intense Recovery',
		index: 107,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases recovery item effect by 50%.',
		id: '638a4d47a44f4fa4b0dec997',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases recovery item effect by 25%.',
						id: '638a4d47a44f4fa4b0dec995',
						name: 'Big Recovery',
						index: 106,
					},
					{
						description: 'Effect: Increases recovery item effect by 35%.',
						id: '638a4d47a44f4fa4b0dec986',
						name: 'Intense Recovery',
						index: 107,
					},
				],
			},
		],
		name: 'Ultimate Recovery',
		index: 108,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases recovery item effect by 40%.',
		id: '638a4d47a44f4fa4b0dec988',
		mergeFrom: [],
		name: 'Blessed by God',
		index: 109,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Recovery item enhanced by a tiny, fixed amount. Lower power equals stronger effect.',
		id: '638a4d47a44f4fa4b0dec989',
		mergeFrom: [],
		name: 'Fixed Recovery',
		index: 110,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Recovery item enhanced by a small, fixed amount. Lower power equals stronger effect.',
		id: '638a4d47a44f4fa4b0dec987',
		mergeFrom: [],
		name: 'Fixed Recovery+',
		index: 111,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Recovery item enhanced by a fixed amount. Lower power equals stronger effect.',
		id: '638a4d47a44f4fa4b0dec98a',
		mergeFrom: [],
		name: 'Fixed Recovery++',
		index: 112,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Recovery item enhanced by a small, fixed amount. Lower power equals stronger effect.',
		id: '638a4d47a44f4fa4b0dec98d',
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Recovery item enhanced by a tiny, fixed amount. Lower power equals stronger effect.',
						id: '638a4d47a44f4fa4b0dec989',
						name: 'Fixed Recovery',
						index: 110,
					},
					{
						description:
							'Effect: Recovery item enhanced by a small, fixed amount. Lower power equals stronger effect.',
						id: '638a4d47a44f4fa4b0dec987',
						name: 'Fixed Recovery+',
						index: 111,
					},
				],
			},
		],
		name: 'Medicine Enhance',
		index: 113,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Recovery item enhanced by a fixed amount. Lower power equals stronger effect.',
		id: '638a4d47a44f4fa4b0dec98b',
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Recovery item enhanced by a small, fixed amount. Lower power equals stronger effect.',
						id: '638a4d47a44f4fa4b0dec987',
						name: 'Fixed Recovery+',
						index: 111,
					},
					{
						description: 'Effect: Recovery item enhanced by a fixed amount. Lower power equals stronger effect.',
						id: '638a4d47a44f4fa4b0dec98a',
						name: 'Fixed Recovery++',
						index: 112,
					},
				],
			},
		],
		name: 'Big Medicine Enhance',
		index: 114,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Recovery item enhanced by a large, fixed amount. Lower power equals stronger effect.',
		id: '638a4d47a44f4fa4b0dec993',
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Recovery item enhanced by a small, fixed amount. Lower power equals stronger effect.',
						id: '638a4d47a44f4fa4b0dec98d',
						name: 'Medicine Enhance',
						index: 113,
					},
					{
						description: 'Effect: Recovery item enhanced by a fixed amount. Lower power equals stronger effect.',
						id: '638a4d47a44f4fa4b0dec98b',
						name: 'Big Medicine Enhance',
						index: 114,
					},
				],
			},
		],
		name: 'Super Enhance Recovery',
		index: 115,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description:
			'Effect: Recovery item enhanced by a ridiculous, fixed amount. This increase scales with the original value.',
		id: '638a4d47a44f4fa4b0dec98c',
		mergeFrom: [],
		name: 'Legendary Recovery',
		index: 116,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Gives item a 15% chance to critical hit.',
		id: '638a4d47a44f4fa4b0dec990',
		mergeFrom: [],
		name: 'Critical',
		index: 145,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Gives item a 25% chance to critical hit.',
		id: '638a4d47a44f4fa4b0dec98f',
		mergeFrom: [],
		name: 'Critical+',
		index: 146,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Gives item a 35% chance to critical hit.',
		id: '638a4d47a44f4fa4b0dec991',
		mergeFrom: [],
		name: 'Critical++',
		index: 147,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Gives item a 50% chance to critical hit.',
		id: '638a4d47a44f4fa4b0dec98e',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Gives item a 15% chance to critical hit.',
						id: '638a4d47a44f4fa4b0dec990',
						name: 'Critical',
						index: 145,
					},
					{
						description: 'Effect: Gives item a 25% chance to critical hit.',
						id: '638a4d47a44f4fa4b0dec98f',
						name: 'Critical+',
						index: 146,
					},
				],
			},
		],
		name: 'Critical Finish',
		index: 148,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Item will always critical hit.',
		id: '638a4d47a44f4fa4b0dec992',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Gives item a 25% chance to critical hit.',
						id: '638a4d47a44f4fa4b0dec98f',
						name: 'Critical+',
						index: 146,
					},
					{
						description: 'Effect: Gives item a 35% chance to critical hit.',
						id: '638a4d47a44f4fa4b0dec991',
						name: 'Critical++',
						index: 147,
					},
				],
			},
		],
		name: 'Always Critical',
		index: 149,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Item will always critical hit, and KO target (bosses excluded).',
		id: '638a4d47a44f4fa4b0dec994',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Gives item a 50% chance to critical hit.',
						id: '638a4d47a44f4fa4b0dec98e',
						name: 'Critical Finish',
						index: 148,
					},
					{
						description: 'Effect: Item will always critical hit.',
						id: '638a4d47a44f4fa4b0dec992',
						name: 'Always Critical',
						index: 149,
					},
				],
			},
		],
		name: 'One Hit Kill',
		index: 150,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Reduces item number variation slightly, making it easier to score higher numbers.',
		id: '638a4d47a44f4fa4b0dec998',
		mergeFrom: [],
		name: 'Stable Effect',
		index: 151,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces item number variation a little, making it easier to score higher numbers.',
		id: '638a4d47a44f4fa4b0dec996',
		mergeFrom: [],
		name: 'Stable Effect+',
		index: 152,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces item number variation, making it easier to score higher numbers.',
		id: '638a4d47a44f4fa4b0dec999',
		mergeFrom: [],
		name: 'Stable Effect++',
		index: 153,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces item number variation, making it easier to score higher numbers.',
		id: '638a4d47a44f4fa4b0dec9a8',
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Reduces item number variation slightly, making it easier to score higher numbers.',
						id: '638a4d47a44f4fa4b0dec998',
						name: 'Stable Effect',
						index: 151,
					},
					{
						description:
							'Effect: Reduces item number variation a little, making it easier to score higher numbers.',
						id: '638a4d47a44f4fa4b0dec996',
						name: 'Stable Effect+',
						index: 152,
					},
				],
			},
		],
		name: 'Stability Emphasis',
		index: 154,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Halves item number variation, making it easier to score higher numbers.',
		id: '638a4d48a44f4fa4b0dec9ca',
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Reduces item number variation a little, making it easier to score higher numbers.',
						id: '638a4d47a44f4fa4b0dec996',
						name: 'Stable Effect+',
						index: 152,
					},
					{
						description: 'Effect: Reduces item number variation, making it easier to score higher numbers.',
						id: '638a4d47a44f4fa4b0dec999',
						name: 'Stable Effect++',
						index: 153,
					},
				],
			},
		],
		name: 'Solid Effect',
		index: 155,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Stabilizes item number variation, making it far easier to score higher numbers.',
		id: '638a4d47a44f4fa4b0dec99d',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Reduces item number variation, making it easier to score higher numbers.',
						id: '638a4d47a44f4fa4b0dec9a8',
						name: 'Stability Emphasis',
						index: 154,
					},
					{
						description: 'Effect: Halves item number variation, making it easier to score higher numbers.',
						id: '638a4d48a44f4fa4b0dec9ca',
						name: 'Solid Effect',
						index: 155,
					},
				],
			},
		],
		name: 'Boost Expected Value',
		index: 156,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item use count by 1. Power is reduced a little.',
		id: '638a4d47a44f4fa4b0dec99a',
		mergeFrom: [],
		name: 'Use Count +1',
		index: 172,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item use count by 2. Power is reduced slightly.',
		id: '638a4d47a44f4fa4b0dec99b',
		mergeFrom: [],
		name: 'Use Count +2',
		index: 173,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item use count by 3.',
		id: '638a4d47a44f4fa4b0dec9a0',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases item use count by 1. Power is reduced a little.',
						id: '638a4d47a44f4fa4b0dec99a',
						name: 'Use Count +1',
						index: 172,
					},
					{
						description: 'Effect: Increases item use count by 2. Power is reduced slightly.',
						id: '638a4d47a44f4fa4b0dec99b',
						name: 'Use Count +2',
						index: 173,
					},
				],
			},
		],
		name: 'Multiply',
		index: 174,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces item use count by 1. Power is increased a little.',
		id: '638a4d47a44f4fa4b0dec99c',
		mergeFrom: [],
		name: 'Use Count -1',
		index: 175,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces item use count by 2. Power is increased.',
		id: '638a4d47a44f4fa4b0dec99f',
		mergeFrom: [],
		name: 'Use Count -2',
		index: 176,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces item use count by 5. Power is massively increased.',
		id: '638a4d47a44f4fa4b0dec9a3',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Reduces item use count by 1. Power is increased a little.',
						id: '638a4d47a44f4fa4b0dec99c',
						name: 'Use Count -1',
						index: 175,
					},
					{
						description: 'Effect: Reduces item use count by 2. Power is increased.',
						id: '638a4d47a44f4fa4b0dec99f',
						name: 'Use Count -2',
						index: 176,
					},
				],
			},
		],
		name: 'Reduction',
		index: 177,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 10.',
		id: '638a4d47a44f4fa4b0dec99e',
		mergeFrom: [],
		name: 'HP Enhance',
		index: 190,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 15.',
		id: '638a4d48a44f4fa4b0dec9cd',
		mergeFrom: [],
		name: 'HP Boost',
		index: 191,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 25.',
		id: '638a4d47a44f4fa4b0dec9a2',
		mergeFrom: [],
		name: 'HP Super Enhance',
		index: 192,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Effect: Maximum HP increases by 25.',
		id: '638a4d47a44f4fa4b0dec9a5',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 10.',
						id: '638a4d47a44f4fa4b0dec99e',
						name: 'HP Enhance',
						index: 190,
					},
					{
						description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 15.',
						id: '638a4d48a44f4fa4b0dec9cd',
						name: 'HP Boost',
						index: 191,
					},
				],
			},
		],
		name: 'Full of Life',
		index: 193,
		categories: ['ACCESSORY', 'ARMOR', 'BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Revive from KO, and also removes 3 status ailments.',
		id: '638a4d49a44f4fa4b0deca80',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 10.',
						id: '638a4d47a44f4fa4b0dec99e',
						name: 'HP Enhance',
						index: 190,
					},
					{
						description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 15.',
						id: '638a4d48a44f4fa4b0dec9cd',
						name: 'HP Boost',
						index: 191,
					},
				],
			},
		],
		name: 'Full of Life',
		index: 193,
		categories: ['ACCESSORY', 'ARMOR', 'BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Maximum HP increases by 40.',
		id: '638a4d47a44f4fa4b0dec9a9',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 15.',
						id: '638a4d48a44f4fa4b0dec9cd',
						name: 'HP Boost',
						index: 191,
					},
					{
						description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 25.',
						id: '638a4d47a44f4fa4b0dec9a2',
						name: 'HP Super Enhance',
						index: 192,
					},
				],
			},
		],
		name: 'Overflowing Life',
		index: 194,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Effect: Maximum HP increases by 70.',
		id: '638a4d48a44f4fa4b0dec9b0',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Maximum HP increases by 25.',
						id: '638a4d47a44f4fa4b0dec9a5',
						name: 'Full of Life',
						index: 193,
					},
					{
						description: 'Effect: Maximum HP increases by 40.',
						id: '638a4d47a44f4fa4b0dec9a9',
						name: 'Overflowing Life',
						index: 194,
					},
				],
			},
		],
		name: 'Power of Life',
		index: 195,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 10.',
		id: '638a4d47a44f4fa4b0dec9a6',
		mergeFrom: [],
		name: 'MP Enhance',
		index: 196,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 15.',
		id: '638a4d47a44f4fa4b0dec9a7',
		mergeFrom: [],
		name: 'MP Boost',
		index: 197,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 25.',
		id: '638a4d47a44f4fa4b0dec9aa',
		mergeFrom: [],
		name: 'MP Super Enhance',
		index: 198,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Effect: Maximum MP increases by 25.',
		id: '638a4d47a44f4fa4b0dec9ad',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 10.',
						id: '638a4d47a44f4fa4b0dec9a6',
						name: 'MP Enhance',
						index: 196,
					},
					{
						description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 15.',
						id: '638a4d47a44f4fa4b0dec9a7',
						name: 'MP Boost',
						index: 197,
					},
				],
			},
		],
		name: "Magician's Wisdom",
		index: 199,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Effect: Maximum MP increases by 40.',
		id: '638a4d47a44f4fa4b0dec9ab',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 15.',
						id: '638a4d47a44f4fa4b0dec9a7',
						name: 'MP Boost',
						index: 197,
					},
					{
						description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 25.',
						id: '638a4d47a44f4fa4b0dec9aa',
						name: 'MP Super Enhance',
						index: 198,
					},
				],
			},
		],
		name: "Grand Magician's Wisdom",
		index: 200,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Effect: Maximum MP increases by 70.',
		id: '638a4d48a44f4fa4b0dec9b4',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Maximum MP increases by 25.',
						id: '638a4d47a44f4fa4b0dec9ad',
						name: "Magician's Wisdom",
						index: 199,
					},
					{
						description: 'Effect: Maximum MP increases by 40.',
						id: '638a4d47a44f4fa4b0dec9ab',
						name: "Grand Magician's Wisdom",
						index: 200,
					},
				],
			},
		],
		name: 'Wisdom of the Gods',
		index: 201,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 5.',
		id: '638a4d47a44f4fa4b0dec9ac',
		mergeFrom: [],
		name: 'LP Enhance',
		index: 202,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 7.',
		id: '638a4d47a44f4fa4b0dec9ae',
		mergeFrom: [],
		name: 'LP Boost',
		index: 203,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 10.',
		id: '638a4d48a44f4fa4b0dec9af',
		mergeFrom: [],
		name: 'LP Super Enhance',
		index: 204,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Effect: Maximum LP increases by 12.',
		id: '638a4d48a44f4fa4b0dec9ba',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 5.',
						id: '638a4d47a44f4fa4b0dec9ac',
						name: 'LP Enhance',
						index: 202,
					},
					{
						description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 7.',
						id: '638a4d47a44f4fa4b0dec9ae',
						name: 'LP Boost',
						index: 203,
					},
				],
			},
		],
		name: 'Full of Stamina',
		index: 205,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Effect: Maximum LP increases by 17.',
		id: '638a4d48a44f4fa4b0dec9b1',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 7.',
						id: '638a4d47a44f4fa4b0dec9ae',
						name: 'LP Boost',
						index: 203,
					},
					{
						description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 10.',
						id: '638a4d48a44f4fa4b0dec9af',
						name: 'LP Super Enhance',
						index: 204,
					},
				],
			},
		],
		name: 'Unabating Stamina',
		index: 206,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Effect: Maximum LP increases by 30.',
		id: '638a4d48a44f4fa4b0dec9b5',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Maximum LP increases by 12.',
						id: '638a4d48a44f4fa4b0dec9ba',
						name: 'Full of Stamina',
						index: 205,
					},
					{
						description: 'Effect: Maximum LP increases by 17.',
						id: '638a4d48a44f4fa4b0dec9b1',
						name: 'Unabating Stamina',
						index: 206,
					},
				],
			},
		],
		name: 'Infinite Stamina',
		index: 207,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Effect: Maximum HP and MP increases by 15.',
		id: '638a4d48a44f4fa4b0dec9b7',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Maximum HP increases by 25.',
						id: '638a4d47a44f4fa4b0dec9a5',
						name: 'Full of Life',
						index: 193,
					},
					{
						description: 'Effect: Maximum MP increases by 25.',
						id: '638a4d47a44f4fa4b0dec9ad',
						name: "Magician's Wisdom",
						index: 199,
					},
				],
			},
		],
		name: 'HPMP Enhance',
		index: 208,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Effect: Maximum HP and MP increases by 25.',
		id: '638a4d48a44f4fa4b0dec9b2',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Maximum HP increases by 40.',
						id: '638a4d47a44f4fa4b0dec9a9',
						name: 'Overflowing Life',
						index: 194,
					},
					{
						description: 'Effect: Maximum MP increases by 40.',
						id: '638a4d47a44f4fa4b0dec9ab',
						name: "Grand Magician's Wisdom",
						index: 200,
					},
				],
			},
		],
		name: 'HPMP Boost',
		index: 209,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Effect: Maximum HP and MP increases by 40.',
		id: '638a4d48a44f4fa4b0dec9b8',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Maximum HP increases by 70.',
						id: '638a4d48a44f4fa4b0dec9b0',
						name: 'Power of Life',
						index: 195,
					},
					{
						description: 'Effect: Maximum MP increases by 70.',
						id: '638a4d48a44f4fa4b0dec9b4',
						name: 'Wisdom of the Gods',
						index: 201,
					},
				],
			},
		],
		name: 'HPMP Super Enhance',
		index: 210,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a stat boost. Effect: Increases base stats by 5%.',
		id: '638a4d48a44f4fa4b0dec9b3',
		mergeFrom: [],
		name: 'Parameters +5%',
		index: 211,
		categories: ['ARMOR'],
	},
	{
		description: 'Bestows a stat boost. Effect: Increases base stats by 6%.',
		id: '638a4d48a44f4fa4b0dec9b6',
		mergeFrom: [],
		name: 'Parameters +6%',
		index: 212,
		categories: ['ARMOR'],
	},
	{
		description: 'Bestows a stat boost. Effect: Increases base stats by 7%.',
		id: '638a4d48a44f4fa4b0dec9bc',
		mergeFrom: [],
		name: 'Parameters +7%',
		index: 213,
		categories: ['ARMOR'],
	},
	{
		description: 'Effect: Increases base stats by 10%.',
		id: '638a4d48a44f4fa4b0dec9b9',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Bestows a stat boost. Effect: Increases base stats by 5%.',
						id: '638a4d48a44f4fa4b0dec9b3',
						name: 'Parameters +5%',
						index: 211,
					},
					{
						description: 'Bestows a stat boost. Effect: Increases base stats by 6%.',
						id: '638a4d48a44f4fa4b0dec9b6',
						name: 'Parameters +6%',
						index: 212,
					},
				],
			},
		],
		name: 'Enhance the Body',
		index: 214,
		categories: ['ARMOR'],
	},
	{
		description: 'Effect: Increases base stats by 12%.',
		id: '638a4d48a44f4fa4b0dec9be',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Bestows a stat boost. Effect: Increases base stats by 6%.',
						id: '638a4d48a44f4fa4b0dec9b6',
						name: 'Parameters +6%',
						index: 212,
					},
					{
						description: 'Bestows a stat boost. Effect: Increases base stats by 7%.',
						id: '638a4d48a44f4fa4b0dec9bc',
						name: 'Parameters +7%',
						index: 213,
					},
				],
			},
		],
		name: 'Draw Out Power',
		index: 215,
		categories: ['ARMOR'],
	},
	{
		description: 'Effect: Increases base stats by 15%.',
		id: '638a4d48a44f4fa4b0dec9bb',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases base stats by 10%.',
						id: '638a4d48a44f4fa4b0dec9b9',
						name: 'Enhance the Body',
						index: 214,
					},
					{
						description: 'Effect: Increases base stats by 12%.',
						id: '638a4d48a44f4fa4b0dec9be',
						name: 'Draw Out Power',
						index: 215,
					},
				],
			},
		],
		name: 'Develops the Body',
		index: 216,
		categories: ['ARMOR'],
	},
	{
		description: 'Effect: Increases base stats by 20%.',
		id: '638a4d48a44f4fa4b0dec9c0',
		mergeFrom: [],
		name: 'Evolves the Body',
		index: 217,
		categories: ['ARMOR'],
	},
	{
		description: 'Enhances weapon attack power. Effect: Increases attack power by 7.',
		id: '638a4d48a44f4fa4b0dec9d3',
		mergeFrom: [],
		name: 'Attack Enhance',
		index: 218,
		categories: ['WEAPON'],
	},
	{
		description: 'Enhances weapon attack power. Effect: Increases attack power by 10.',
		id: '638a4d48a44f4fa4b0dec9bf',
		mergeFrom: [],
		name: 'Attack Boost',
		index: 219,
		categories: ['WEAPON'],
	},
	{
		description: 'Enhances weapon attack power. Effect: Increases attack power by 15.',
		id: '638a4d48a44f4fa4b0dec9bd',
		mergeFrom: [],
		name: 'Attack Super Enhance',
		index: 220,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases attack power by 15.',
		id: '638a4d48a44f4fa4b0dec9c5',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Enhances weapon attack power. Effect: Increases attack power by 7.',
						id: '638a4d48a44f4fa4b0dec9d3',
						name: 'Attack Enhance',
						index: 218,
					},
					{
						description: 'Enhances weapon attack power. Effect: Increases attack power by 10.',
						id: '638a4d48a44f4fa4b0dec9bf',
						name: 'Attack Boost',
						index: 219,
					},
				],
			},
		],
		name: 'Power of Beasts',
		index: 221,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases attack power by 25.',
		id: '638a4d48a44f4fa4b0dec9c3',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Enhances weapon attack power. Effect: Increases attack power by 10.',
						id: '638a4d48a44f4fa4b0dec9bf',
						name: 'Attack Boost',
						index: 219,
					},
					{
						description: 'Enhances weapon attack power. Effect: Increases attack power by 15.',
						id: '638a4d48a44f4fa4b0dec9bd',
						name: 'Attack Super Enhance',
						index: 220,
					},
				],
			},
		],
		name: 'Power of Destruction',
		index: 222,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases attack power by 40.',
		id: '638a4d48a44f4fa4b0dec9c4',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases attack power by 15.',
						id: '638a4d48a44f4fa4b0dec9c5',
						name: 'Power of Beasts',
						index: 221,
					},
					{
						description: 'Effect: Increases attack power by 25.',
						id: '638a4d48a44f4fa4b0dec9c3',
						name: 'Power of Destruction',
						index: 222,
					},
				],
			},
		],
		name: 'Power of Gods',
		index: 223,
		categories: ['WEAPON'],
	},
	{
		description: 'Enhances armor defense. Effect: Increases defense by 7.',
		id: '638a4d48a44f4fa4b0dec9c1',
		mergeFrom: [],
		name: 'Defense Enhance',
		index: 224,
		categories: ['ARMOR'],
	},
	{
		description: 'Enhances armor defense. Effect: Increases defense by 10.',
		id: '638a4d48a44f4fa4b0dec9c2',
		mergeFrom: [],
		name: 'Defense Boost',
		index: 225,
		categories: ['ARMOR'],
	},
	{
		description: 'Enhances armor defense. Effect: Increases defense by 15.',
		id: '638a4d48a44f4fa4b0dec9c6',
		mergeFrom: [],
		name: 'Defense Super Enhance',
		index: 226,
		categories: ['ARMOR'],
	},
	{
		description: 'Effect: Increases defense by 15.',
		id: '638a4d48a44f4fa4b0dec9c8',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Enhances armor defense. Effect: Increases defense by 7.',
						id: '638a4d48a44f4fa4b0dec9c1',
						name: 'Defense Enhance',
						index: 224,
					},
					{
						description: 'Enhances armor defense. Effect: Increases defense by 10.',
						id: '638a4d48a44f4fa4b0dec9c2',
						name: 'Defense Boost',
						index: 225,
					},
				],
			},
		],
		name: 'Steel Defense',
		index: 227,
		categories: ['ARMOR'],
	},
	{
		description: 'Effect: Increases defense by 25.',
		id: '638a4d48a44f4fa4b0dec9cc',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Enhances armor defense. Effect: Increases defense by 10.',
						id: '638a4d48a44f4fa4b0dec9c2',
						name: 'Defense Boost',
						index: 225,
					},
					{
						description: 'Enhances armor defense. Effect: Increases defense by 15.',
						id: '638a4d48a44f4fa4b0dec9c6',
						name: 'Defense Super Enhance',
						index: 226,
					},
				],
			},
		],
		name: 'Diamond Defense',
		index: 228,
		categories: ['ARMOR'],
	},
	{
		description: 'Effect: Increases defense by 40.',
		id: '638a4d48a44f4fa4b0dec9cb',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases defense by 15.',
						id: '638a4d48a44f4fa4b0dec9c8',
						name: 'Steel Defense',
						index: 227,
					},
					{
						description: 'Effect: Increases defense by 25.',
						id: '638a4d48a44f4fa4b0dec9cc',
						name: 'Diamond Defense',
						index: 228,
					},
				],
			},
		],
		name: 'Dragonscale Defense',
		index: 229,
		categories: ['ARMOR'],
	},
	{
		description: 'Accessories with this will increase speed. Effect: Increases speed by 7.',
		id: '638a4d48a44f4fa4b0dec9c7',
		mergeFrom: [],
		name: 'Speed Enhance',
		index: 230,
		categories: ['ACCESSORY'],
	},
	{
		description: 'Accessories with this will increase speed. Effect: Increases speed by 10.',
		id: '638a4d48a44f4fa4b0dec9c9',
		mergeFrom: [],
		name: 'Speed Boost',
		index: 231,
		categories: ['ACCESSORY'],
	},
	{
		description: 'Accessories with this will increase speed. Effect: Increases speed by 15.',
		id: '638a4d48a44f4fa4b0dec9d0',
		mergeFrom: [],
		name: 'Speed Super Enhance',
		index: 232,
		categories: ['ACCESSORY'],
	},
	{
		description: 'Effect: Increases speed by 15.',
		id: '638a4d48a44f4fa4b0dec9cf',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 7.',
						id: '638a4d48a44f4fa4b0dec9c7',
						name: 'Speed Enhance',
						index: 230,
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 10.',
						id: '638a4d48a44f4fa4b0dec9c9',
						name: 'Speed Boost',
						index: 231,
					},
				],
			},
		],
		name: 'Speed of Skanda',
		index: 233,
		categories: ['ACCESSORY'],
	},
	{
		description: 'Effect: Increases speed by 25.',
		id: '638a4d48a44f4fa4b0dec9d1',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 10.',
						id: '638a4d48a44f4fa4b0dec9c9',
						name: 'Speed Boost',
						index: 231,
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 15.',
						id: '638a4d48a44f4fa4b0dec9d0',
						name: 'Speed Super Enhance',
						index: 232,
					},
				],
			},
		],
		name: 'Speed of Gods',
		index: 234,
		categories: ['ACCESSORY'],
	},
	{
		description: 'Effect: Increases speed by 40.',
		id: '638a4d48a44f4fa4b0dec9ce',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases speed by 15.',
						id: '638a4d48a44f4fa4b0dec9cf',
						name: 'Speed of Skanda',
						index: 233,
					},
					{
						description: 'Effect: Increases speed by 25.',
						id: '638a4d48a44f4fa4b0dec9d1',
						name: 'Speed of Gods',
						index: 234,
					},
				],
			},
		],
		name: 'Speed of Light',
		index: 235,
		categories: ['ACCESSORY'],
	},
	{
		description: 'Effect: Increases attack & defense by 5.',
		id: '638a4d48a44f4fa4b0dec9d8',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Enhances weapon attack power. Effect: Increases attack power by 7.',
						id: '638a4d48a44f4fa4b0dec9d3',
						name: 'Attack Enhance',
						index: 218,
					},
					{
						description: 'Enhances armor defense. Effect: Increases defense by 7.',
						id: '638a4d48a44f4fa4b0dec9c1',
						name: 'Defense Enhance',
						index: 224,
					},
				],
			},
		],
		name: 'ATK DEF Enhance',
		index: 236,
		categories: ['ARMOR', 'WEAPON'],
	},
	{
		description: 'Effect: Increases attack & speed by 5.',
		id: '638a4d48a44f4fa4b0dec9d4',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Enhances weapon attack power. Effect: Increases attack power by 7.',
						id: '638a4d48a44f4fa4b0dec9d3',
						name: 'Attack Enhance',
						index: 218,
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 7.',
						id: '638a4d48a44f4fa4b0dec9c7',
						name: 'Speed Enhance',
						index: 230,
					},
				],
			},
		],
		name: 'ATK SPD Enhance',
		index: 237,
		categories: ['ACCESSORY', 'WEAPON'],
	},
	{
		description: 'Effect: Increases defense & speed by 5.',
		id: '638a4d48a44f4fa4b0dec9d6',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Enhances armor defense. Effect: Increases defense by 7.',
						id: '638a4d48a44f4fa4b0dec9c1',
						name: 'Defense Enhance',
						index: 224,
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 7.',
						id: '638a4d48a44f4fa4b0dec9c7',
						name: 'Speed Enhance',
						index: 230,
					},
				],
			},
		],
		name: 'DEF SPD Enhance',
		index: 238,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Effect: Increases all stats by 5.',
		id: '638a4d48a44f4fa4b0dec9d5',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases attack & defense by 5.',
						id: '638a4d48a44f4fa4b0dec9d8',
						name: 'ATK DEF Enhance',
						index: 236,
					},
					{
						description: 'Effect: Increases attack & speed by 5.',
						id: '638a4d48a44f4fa4b0dec9d4',
						name: 'ATK SPD Enhance',
						index: 237,
					},
				],
			},
			{
				consist: [
					{
						description: 'Effect: Increases attack & defense by 5.',
						id: '638a4d48a44f4fa4b0dec9d8',
						name: 'ATK DEF Enhance',
						index: 236,
					},
					{
						description: 'Effect: Increases defense & speed by 5.',
						id: '638a4d48a44f4fa4b0dec9d6',
						name: 'DEF SPD Enhance',
						index: 238,
					},
				],
			},
			{
				consist: [
					{
						description: 'Effect: Increases attack & speed by 5.',
						id: '638a4d48a44f4fa4b0dec9d4',
						name: 'ATK SPD Enhance',
						index: 237,
					},
					{
						description: 'Effect: Increases defense & speed by 5.',
						id: '638a4d48a44f4fa4b0dec9d6',
						name: 'DEF SPD Enhance',
						index: 238,
					},
				],
			},
		],
		name: 'All Stat Enhance',
		index: 239,
		categories: ['ACCESSORY', 'ARMOR', 'WEAPON'],
	},
	{
		description: 'Effect: Increases attack & defense by 7.',
		id: '638a4d48a44f4fa4b0dec9d2',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Enhances weapon attack power. Effect: Increases attack power by 10.',
						id: '638a4d48a44f4fa4b0dec9bf',
						name: 'Attack Boost',
						index: 219,
					},
					{
						description: 'Enhances armor defense. Effect: Increases defense by 10.',
						id: '638a4d48a44f4fa4b0dec9c2',
						name: 'Defense Boost',
						index: 225,
					},
				],
			},
		],
		name: 'ATK DEF Boost',
		index: 240,
		categories: ['ACCESSORY', 'ARMOR', 'WEAPON'],
	},
	{
		description: 'Effect: Increases attack & speed by 7.',
		id: '638a4d48a44f4fa4b0dec9db',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Enhances weapon attack power. Effect: Increases attack power by 10.',
						id: '638a4d48a44f4fa4b0dec9bf',
						name: 'Attack Boost',
						index: 219,
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 10.',
						id: '638a4d48a44f4fa4b0dec9c9',
						name: 'Speed Boost',
						index: 231,
					},
				],
			},
		],
		name: 'ATK SPD Boost',
		index: 241,
		categories: ['ACCESSORY', 'WEAPON'],
	},
	{
		description: 'Effect: Increases defense & speed by 7.',
		id: '638a4d48a44f4fa4b0dec9d9',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Enhances armor defense. Effect: Increases defense by 10.',
						id: '638a4d48a44f4fa4b0dec9c2',
						name: 'Defense Boost',
						index: 225,
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 10.',
						id: '638a4d48a44f4fa4b0dec9c9',
						name: 'Speed Boost',
						index: 231,
					},
				],
			},
		],
		name: 'DEF SPD Boost',
		index: 242,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Effect: Increases all stats by 7.',
		id: '638a4d48a44f4fa4b0dec9e4',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases attack & defense by 7.',
						id: '638a4d48a44f4fa4b0dec9d2',
						name: 'ATK DEF Boost',
						index: 240,
					},
					{
						description: 'Effect: Increases attack & speed by 7.',
						id: '638a4d48a44f4fa4b0dec9db',
						name: 'ATK SPD Boost',
						index: 241,
					},
				],
			},
			{
				consist: [
					{
						description: 'Effect: Increases attack & defense by 7.',
						id: '638a4d48a44f4fa4b0dec9d2',
						name: 'ATK DEF Boost',
						index: 240,
					},
					{
						description: 'Effect: Increases defense & speed by 7.',
						id: '638a4d48a44f4fa4b0dec9d9',
						name: 'DEF SPD Boost',
						index: 242,
					},
				],
			},
			{
				consist: [
					{
						description: 'Effect: Increases attack & speed by 7.',
						id: '638a4d48a44f4fa4b0dec9db',
						name: 'ATK SPD Boost',
						index: 241,
					},
					{
						description: 'Effect: Increases defense & speed by 7.',
						id: '638a4d48a44f4fa4b0dec9d9',
						name: 'DEF SPD Boost',
						index: 242,
					},
				],
			},
		],
		name: 'All Stat Boost',
		index: 243,
		categories: ['ACCESSORY', 'ARMOR', 'WEAPON'],
	},
	{
		description: 'Effect: Increases all stats except resistances by 10.',
		id: '638a4d48a44f4fa4b0dec9d7',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases all stats by 5.',
						id: '638a4d48a44f4fa4b0dec9d5',
						name: 'All Stat Enhance',
						index: 239,
					},
					{
						description: 'Effect: Increases all stats by 7.',
						id: '638a4d48a44f4fa4b0dec9e4',
						name: 'All Stat Boost',
						index: 243,
					},
				],
			},
		],
		name: 'All Stat Super Enhance',
		index: 244,
		categories: ['ACCESSORY', 'ARMOR', 'WEAPON'],
	},
	{
		description: 'Effect: Increases all stats except resistances by 25.',
		id: '638a4d48a44f4fa4b0dec9da',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases all stats by 7.',
						id: '638a4d48a44f4fa4b0dec9e4',
						name: 'All Stat Boost',
						index: 243,
					},
					{
						description: 'Effect: Increases all stats except resistances by 10.',
						id: '638a4d48a44f4fa4b0dec9d7',
						name: 'All Stat Super Enhance',
						index: 244,
					},
				],
			},
		],
		name: 'Well Rounded Power',
		index: 245,
		categories: ['ACCESSORY', 'ARMOR', 'WEAPON'],
	},
	{
		description: 'Effect: Increases maximum HP and MP by 50.',
		id: '638a4d48a44f4fa4b0dec9dd',
		mergeFrom: [],
		name: 'Flawless Body',
		index: 246,
		categories: ['ARMOR'],
	},
	{
		description: 'Effect: Increases defense by 30, and increases all base stats by 15%.',
		id: '638a4d48a44f4fa4b0dec9dc',
		mergeFrom: [],
		name: 'Tenacious Body',
		index: 247,
		categories: ['ARMOR'],
	},
	{
		description: 'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 10%.',
		id: '638a4d48a44f4fa4b0dec9de',
		mergeFrom: [],
		name: 'Consume MP -10%',
		index: 298,
		categories: ['ACCESSORY', 'WEAPON'],
	},
	{
		description: 'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 15%.',
		id: '638a4d48a44f4fa4b0dec9e0',
		mergeFrom: [],
		name: 'Consume MP -15%',
		index: 299,
		categories: ['ACCESSORY', 'WEAPON'],
	},
	{
		description: 'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 20%.',
		id: '638a4d48a44f4fa4b0dec9e1',
		mergeFrom: [],
		name: 'Consume MP -20%',
		index: 300,
		categories: ['ACCESSORY', 'WEAPON'],
	},
	{
		description: 'Effect: Reduces MP consumption of skills by 20%.',
		id: '638a4d48a44f4fa4b0dec9df',
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 10%.',
						id: '638a4d48a44f4fa4b0dec9de',
						name: 'Consume MP -10%',
						index: 298,
					},
					{
						description:
							'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 15%.',
						id: '638a4d48a44f4fa4b0dec9e0',
						name: 'Consume MP -15%',
						index: 299,
					},
				],
			},
		],
		name: 'Cut MP Consume',
		index: 301,
		categories: ['ACCESSORY', 'WEAPON'],
	},
	{
		description: 'Effect: Reduces MP consumption of skills by 30%.',
		id: '638a4d48a44f4fa4b0dec9e7',
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 15%.',
						id: '638a4d48a44f4fa4b0dec9e0',
						name: 'Consume MP -15%',
						index: 299,
					},
					{
						description:
							'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 20%.',
						id: '638a4d48a44f4fa4b0dec9e1',
						name: 'Consume MP -20%',
						index: 300,
					},
				],
			},
		],
		name: 'Compact MP Consume',
		index: 302,
		categories: ['ACCESSORY', 'WEAPON'],
	},
	{
		description: 'Effect: Reduces MP consumption of skills by 50%.',
		id: '638a4d48a44f4fa4b0dec9e3',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Reduces MP consumption of skills by 20%.',
						id: '638a4d48a44f4fa4b0dec9df',
						name: 'Cut MP Consume',
						index: 301,
					},
					{
						description: 'Effect: Reduces MP consumption of skills by 30%.',
						id: '638a4d48a44f4fa4b0dec9e7',
						name: 'Compact MP Consume',
						index: 302,
					},
				],
			},
		],
		name: 'Halve MP Consume',
		index: 303,
		categories: ['ACCESSORY', 'WEAPON'],
	},
	{
		description: 'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 5%.',
		id: '638a4d48a44f4fa4b0dec9e2',
		mergeFrom: [],
		name: 'Skill Power +5%',
		index: 304,
		categories: ['WEAPON'],
	},
	{
		description: 'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 7%.',
		id: '638a4d48a44f4fa4b0dec9e5',
		mergeFrom: [],
		name: 'Skill Power +7%',
		index: 305,
		categories: ['WEAPON'],
	},
	{
		description: 'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 10%.',
		id: '638a4d48a44f4fa4b0dec9e6',
		mergeFrom: [],
		name: 'Skill Power +10%',
		index: 306,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases skill power and MP consumption by 12%.',
		id: '638a4d48a44f4fa4b0dec9ee',
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 5%.',
						id: '638a4d48a44f4fa4b0dec9e2',
						name: 'Skill Power +5%',
						index: 304,
					},
					{
						description:
							'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 7%.',
						id: '638a4d48a44f4fa4b0dec9e5',
						name: 'Skill Power +7%',
						index: 305,
					},
				],
			},
		],
		name: 'Skill Enhance',
		index: 307,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases skill power and MP consumption by 17%.',
		id: '638a4d48a44f4fa4b0dec9eb',
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 7%.',
						id: '638a4d48a44f4fa4b0dec9e5',
						name: 'Skill Power +7%',
						index: 305,
					},
					{
						description:
							'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 10%.',
						id: '638a4d48a44f4fa4b0dec9e6',
						name: 'Skill Power +10%',
						index: 306,
					},
				],
			},
		],
		name: 'Skill Boost',
		index: 308,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases skill power and MP consumption by 30%.',
		id: '638a4d48a44f4fa4b0dec9ef',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases skill power and MP consumption by 12%.',
						id: '638a4d48a44f4fa4b0dec9ee',
						name: 'Skill Enhance',
						index: 307,
					},
					{
						description: 'Effect: Increases skill power and MP consumption by 17%.',
						id: '638a4d48a44f4fa4b0dec9eb',
						name: 'Skill Boost',
						index: 308,
					},
				],
			},
		],
		name: 'Skill Super Enhance',
		index: 309,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases skill power by 7%, and reduces MP consumption by 7%.',
		id: '638a4d48a44f4fa4b0dec9f1',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Reduces MP consumption of skills by 20%.',
						id: '638a4d48a44f4fa4b0dec9df',
						name: 'Cut MP Consume',
						index: 301,
					},
					{
						description: 'Effect: Increases skill power and MP consumption by 12%.',
						id: '638a4d48a44f4fa4b0dec9ee',
						name: 'Skill Enhance',
						index: 307,
					},
				],
			},
		],
		name: 'Eco Skill',
		index: 310,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases skill power by 10%, and reduces MP consumption by 10%.',
		id: '638a4d48a44f4fa4b0dec9f2',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Reduces MP consumption of skills by 30%.',
						id: '638a4d48a44f4fa4b0dec9e7',
						name: 'Compact MP Consume',
						index: 302,
					},
					{
						description: 'Effect: Increases skill power and MP consumption by 17%.',
						id: '638a4d48a44f4fa4b0dec9eb',
						name: 'Skill Boost',
						index: 308,
					},
				],
			},
		],
		name: 'Skill Cost Compress',
		index: 311,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases skill power by 15%, and reduces MP consumption by 15%.',
		id: '638a4d48a44f4fa4b0dec9ed',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Reduces MP consumption of skills by 50%.',
						id: '638a4d48a44f4fa4b0dec9e3',
						name: 'Halve MP Consume',
						index: 303,
					},
					{
						description: 'Effect: Increases skill power and MP consumption by 30%.',
						id: '638a4d48a44f4fa4b0dec9ef',
						name: 'Skill Super Enhance',
						index: 309,
					},
				],
			},
		],
		name: 'Skill Savings',
		index: 312,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases skill power by 25%, and reduces MP consumption by 25%.',
		id: '638a4d48a44f4fa4b0dec9e8',
		mergeFrom: [],
		name: 'Expert Skill',
		index: 313,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases skill power by 35%, and reduces MP consumption by 35%.',
		id: '638a4d48a44f4fa4b0dec9ec',
		mergeFrom: [],
		name: 'Super Skill',
		index: 314,
		categories: ['WEAPON'],
	},
	{
		description: "Effect: Massively increases the target's level.",
		id: '638a4d48a44f4fa4b0dec9e9',
		mergeFrom: [],
		name: 'Soul Dwelling',
		index: 349,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: "Effect: Massively increases the target's attack power.",
		id: '638a4d48a44f4fa4b0dec9f0',
		mergeFrom: [],
		name: 'Blessing of Strength',
		index: 350,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: "Effect: Massively increases the target's defense.",
		id: '638a4d48a44f4fa4b0dec9ea',
		mergeFrom: [],
		name: 'Blessing of Protection',
		index: 351,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: "Effect: Massively increases the target's speed.",
		id: '638a4d48a44f4fa4b0dec9f3',
		mergeFrom: [],
		name: 'Blessing of Skanda',
		index: 352,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Has a chance to inflict Sleep when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9f4',
		mergeFrom: [],
		name: 'Inflict Sleep',
		index: 365,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict Poison when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9f5',
		mergeFrom: [],
		name: 'Inflict Poison',
		index: 366,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict Slow when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9f6',
		mergeFrom: [],
		name: 'Inflict Slow',
		index: 367,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict Curse when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9fa',
		mergeFrom: [],
		name: 'Inflict Curse',
		index: 368,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict Blind when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9fb',
		mergeFrom: [],
		name: 'Inflict Blind',
		index: 369,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict Weak when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9f8',
		mergeFrom: [],
		name: 'Inflict Weak',
		index: 370,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict No Heal when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9f7',
		mergeFrom: [],
		name: 'Inflict No Heal',
		index: 371,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict Seal when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9fc',
		mergeFrom: [],
		name: 'Inflict Seal',
		index: 372,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: "Effect: Massively reduces the target's level, reducing all stats and damage dealt.",
		id: '638a4d48a44f4fa4b0dec9f9',
		mergeFrom: [],
		name: 'Consume Soul',
		index: 373,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: "Effect: Massively reduces the target's attack power.",
		id: '638a4d48a44f4fa4b0dec9fd',
		mergeFrom: [],
		name: 'Powerless Curse',
		index: 374,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: "Effect: Massively reduces the target's defense.",
		id: '638a4d48a44f4fa4b0dec9fe',
		mergeFrom: [],
		name: 'Defenseless Curse',
		index: 375,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: "Effect: Massively reduces the target's speed.",
		id: '638a4d48a44f4fa4b0dec9ff',
		mergeFrom: [],
		name: 'Slowness Curse',
		index: 376,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Absorb 3% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca02',
		mergeFrom: [],
		name: 'Damage Absorb',
		index: 401,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Absorb 5% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca03',
		mergeFrom: [],
		name: 'Damage Absorb+',
		index: 402,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Absorb 7% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca01',
		mergeFrom: [],
		name: 'Damage Absorb++',
		index: 403,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Absorb 7% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca05',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Absorb 3% of damage dealt through attacks to restore your own HP.',
						id: '638a4d48a44f4fa4b0deca02',
						name: 'Damage Absorb',
						index: 401,
					},
					{
						description: 'Effect: Absorb 5% of damage dealt through attacks to restore your own HP.',
						id: '638a4d48a44f4fa4b0deca03',
						name: 'Damage Absorb+',
						index: 402,
					},
				],
			},
		],
		name: 'HP Absorb',
		index: 404,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Absorb 10% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca06',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Absorb 5% of damage dealt through attacks to restore your own HP.',
						id: '638a4d48a44f4fa4b0deca03',
						name: 'Damage Absorb+',
						index: 402,
					},
					{
						description: 'Effect: Absorb 7% of damage dealt through attacks to restore your own HP.',
						id: '638a4d48a44f4fa4b0deca01',
						name: 'Damage Absorb++',
						index: 403,
					},
				],
			},
		],
		name: 'Steal Life',
		index: 405,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Absorb 15% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca07',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Absorb 7% of damage dealt through attacks to restore your own HP.',
						id: '638a4d48a44f4fa4b0deca05',
						name: 'HP Absorb',
						index: 404,
					},
					{
						description: 'Effect: Absorb 10% of damage dealt through attacks to restore your own HP.',
						id: '638a4d48a44f4fa4b0deca06',
						name: 'Steal Life',
						index: 405,
					},
				],
			},
		],
		name: 'Absorb Soul',
		index: 406,
		categories: ['WEAPON'],
	},
	{
		description:
			'Effect: Increases attack power by 20, and absorb 10% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca00',
		mergeFrom: [],
		name: 'Over Power',
		index: 407,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Slag type enemies.',
		id: '638a4d48a44f4fa4b0deca04',
		mergeFrom: [],
		name: 'Slag Slayer',
		index: 422,
		categories: [],
	},
	{
		description: 'Effect: Increases damage dealt to Plant and Spirit type enemies.',
		id: '638a4d48a44f4fa4b0deca08',
		mergeFrom: [],
		name: 'Spirit Slayer',
		index: 423,
		categories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Animal and Beast type enemies.',
		id: '638a4d48a44f4fa4b0deca09',
		mergeFrom: [],
		name: 'Beast Slayer',
		index: 424,
		categories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Demon type enemies.',
		id: '638a4d48a44f4fa4b0deca0a',
		mergeFrom: [],
		name: 'Demon Slayer',
		index: 425,
		categories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Dragon type enemies.',
		id: '638a4d48a44f4fa4b0deca0b',
		mergeFrom: [],
		name: 'Dragon Slayer',
		index: 426,
		categories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to monsters created through magic and alchemy.',
		id: '638a4d48a44f4fa4b0deca0d',
		mergeFrom: [],
		name: 'Magical Slayer',
		index: 427,
		categories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Puni type enemies.',
		id: '638a4d48a44f4fa4b0deca0f',
		mergeFrom: [],
		name: 'Puni Slayer',
		index: 428,
		categories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Undead type enemies.',
		id: '638a4d48a44f4fa4b0deca0c',
		mergeFrom: [],
		name: 'Undead Slayer',
		index: 429,
		categories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Broken targets by 10%.',
		id: '638a4d48a44f4fa4b0deca0e',
		mergeFrom: [],
		name: 'Enhance Finisher',
		index: 446,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases damage dealt to Broken targets by 20%.',
		id: '638a4d48a44f4fa4b0deca11',
		mergeFrom: [],
		name: 'Enhance Finisher+',
		index: 447,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases damage dealt to Broken targets by 30%.',
		id: '638a4d48a44f4fa4b0deca12',
		mergeFrom: [],
		name: 'Enhance Finisher++',
		index: 448,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases damage dealt to Broken targets by 30%.',
		id: '638a4d48a44f4fa4b0deca16',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases damage dealt to Broken targets by 10%.',
						id: '638a4d48a44f4fa4b0deca0e',
						name: 'Enhance Finisher',
						index: 446,
					},
					{
						description: 'Effect: Increases damage dealt to Broken targets by 20%.',
						id: '638a4d48a44f4fa4b0deca11',
						name: 'Enhance Finisher+',
						index: 447,
					},
				],
			},
		],
		name: 'Merciless Blow',
		index: 449,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases damage dealt to Broken targets by 40%.',
		id: '638a4d48a44f4fa4b0deca19',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases damage dealt to Broken targets by 20%.',
						id: '638a4d48a44f4fa4b0deca11',
						name: 'Enhance Finisher+',
						index: 447,
					},
					{
						description: 'Effect: Increases damage dealt to Broken targets by 30%.',
						id: '638a4d48a44f4fa4b0deca12',
						name: 'Enhance Finisher++',
						index: 448,
					},
				],
			},
		],
		name: 'Relentless Blow',
		index: 450,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases damage dealt to Broken targets by 60%.',
		id: '638a4d48a44f4fa4b0deca1b',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases damage dealt to Broken targets by 30%.',
						id: '638a4d48a44f4fa4b0deca16',
						name: 'Merciless Blow',
						index: 449,
					},
					{
						description: 'Effect: Increases damage dealt to Broken targets by 40%.',
						id: '638a4d48a44f4fa4b0deca19',
						name: 'Relentless Blow',
						index: 450,
					},
				],
			},
		],
		name: 'Ruthless Blow',
		index: 451,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Enhances item effect according to strength of traits present.',
		id: '638a4d48a44f4fa4b0deca17',
		mergeFrom: [],
		name: 'Trait Enhance',
		index: 464,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Greatly enhances item effect according to strength of traits present.',
		id: '638a4d48a44f4fa4b0deca10',
		mergeFrom: [],
		name: 'Trait Enhance+',
		index: 465,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Massively enhances item effect according to strength of traits present.',
		id: '638a4d49a44f4fa4b0deca1c',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Enhances item effect according to strength of traits present.',
						id: '638a4d48a44f4fa4b0deca17',
						name: 'Trait Enhance',
						index: 464,
					},
					{
						description: 'Effect: Greatly enhances item effect according to strength of traits present.',
						id: '638a4d48a44f4fa4b0deca10',
						name: 'Trait Enhance+',
						index: 465,
					},
				],
			},
		],
		name: 'Cost Bonus',
		index: 466,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description:
			'Effect: Enhances item effect according to strength of traits present. Stronger traits equal ridiculously greater enhancement.',
		id: '638a4d48a44f4fa4b0deca13',
		mergeFrom: [],
		name: 'Trait Super Enhance',
		index: 467,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by number of targets in effect area x 5%.',
		id: '638a4d48a44f4fa4b0deca14',
		mergeFrom: [],
		name: 'Area Bonus',
		index: 480,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by number of targets in effect area x 10%.',
		id: '638a4d48a44f4fa4b0deca15',
		mergeFrom: [],
		name: 'Area Bonus+',
		index: 481,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by number of targets in effect area x 15%.',
		id: '638a4d49a44f4fa4b0deca1f',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Power increases by number of targets in effect area x 5%.',
						id: '638a4d48a44f4fa4b0deca14',
						name: 'Area Bonus',
						index: 480,
					},
					{
						description: 'Effect: Power increases by number of targets in effect area x 10%.',
						id: '638a4d48a44f4fa4b0deca15',
						name: 'Area Bonus+',
						index: 481,
					},
				],
			},
		],
		name: 'Effective Vs Many',
		index: 482,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by number of targets in effect area x 20%.',
		id: '638a4d48a44f4fa4b0deca1a',
		mergeFrom: [],
		name: 'Multi Bonus',
		index: 483,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by 10 / number of targets in effect area %.',
		id: '638a4d48a44f4fa4b0deca18',
		mergeFrom: [],
		name: 'Fewer Bonus',
		index: 484,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by 15 / number of targets in effect area %.',
		id: '638a4d49a44f4fa4b0deca22',
		mergeFrom: [],
		name: 'Fewer Bonus+',
		index: 485,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by 20 / number of targets in effect area %.',
		id: '638a4d49a44f4fa4b0deca20',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Power increases by 10 / number of targets in effect area %.',
						id: '638a4d48a44f4fa4b0deca18',
						name: 'Fewer Bonus',
						index: 484,
					},
					{
						description: 'Effect: Power increases by 15 / number of targets in effect area %.',
						id: '638a4d49a44f4fa4b0deca22',
						name: 'Fewer Bonus+',
						index: 485,
					},
				],
			},
		],
		name: 'Effective Vs One',
		index: 486,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by 30 / number of targets in effect area %.',
		id: '638a4d49a44f4fa4b0deca1e',
		mergeFrom: [],
		name: 'Single Bonus',
		index: 487,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description:
			'Effect: Power increases by 20 / number of targets in effect area % + number of targets in effect area x 10%.',
		id: '638a4d49a44f4fa4b0deca1d',
		mergeFrom: [],
		name: 'Few + Many Bonus',
		index: 488,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by 10% when use count is 1.',
		id: '638a4d49a44f4fa4b0deca29',
		mergeFrom: [],
		name: 'Enhance Last',
		index: 507,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by 20% when use count is 1.',
		id: '638a4d49a44f4fa4b0deca23',
		mergeFrom: [],
		name: 'Enhance Last+',
		index: 508,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by 30% when use count is 1.',
		id: '638a4d49a44f4fa4b0deca28',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Power increases by 10% when use count is 1.',
						id: '638a4d49a44f4fa4b0deca29',
						name: 'Enhance Last',
						index: 507,
					},
					{
						description: 'Effect: Power increases by 20% when use count is 1.',
						id: '638a4d49a44f4fa4b0deca23',
						name: 'Enhance Last+',
						index: 508,
					},
				],
			},
		],
		name: 'Final Blow',
		index: 509,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by 45% when use count is 1.',
		id: '638a4d49a44f4fa4b0deca24',
		mergeFrom: [],
		name: 'Last Strike',
		index: 510,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Completely consumes item in 1 use during battle, but increases power by use count x 3%.',
		id: '638a4d49a44f4fa4b0deca21',
		mergeFrom: [],
		name: 'Count Compress',
		index: 511,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Completely consumes item in 1 use during battle, but increases power by use count x 5%.',
		id: '638a4d49a44f4fa4b0deca25',
		mergeFrom: [],
		name: 'Count Compress+',
		index: 512,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Completely consumes item in 1 use during battle, but increases power by use count x 7%.',
		id: '638a4d49a44f4fa4b0deca27',
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Completely consumes item in 1 use during battle, but increases power by use count x 3%.',
						id: '638a4d49a44f4fa4b0deca21',
						name: 'Count Compress',
						index: 511,
					},
					{
						description:
							'Effect: Completely consumes item in 1 use during battle, but increases power by use count x 5%.',
						id: '638a4d49a44f4fa4b0deca25',
						name: 'Count Compress+',
						index: 512,
					},
				],
			},
		],
		name: 'Force Final',
		index: 513,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Completely consumes item in 1 use during battle, but increases power by use count x 10%.',
		id: '638a4d49a44f4fa4b0deca26',
		mergeFrom: [],
		name: 'One Time End',
		index: 514,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item power by maximum use count x 2%.',
		id: '638a4d49a44f4fa4b0deca2d',
		mergeFrom: [],
		name: 'Count Bonus',
		index: 515,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item power by maximum use count x 3%.',
		id: '638a4d49a44f4fa4b0deca2c',
		mergeFrom: [],
		name: 'Count Bonus+',
		index: 516,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item power by maximum use count x 5%.',
		id: '638a4d49a44f4fa4b0deca34',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases item power by maximum use count x 2%.',
						id: '638a4d49a44f4fa4b0deca2d',
						name: 'Count Bonus',
						index: 515,
					},
					{
						description: 'Effect: Increases item power by maximum use count x 3%.',
						id: '638a4d49a44f4fa4b0deca2c',
						name: 'Count Bonus+',
						index: 516,
					},
				],
			},
		],
		name: 'Count Boost',
		index: 517,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item power by maximum use count x 7%.',
		id: '638a4d49a44f4fa4b0deca3b',
		mergeFrom: [],
		name: 'Enhance with Count',
		index: 518,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces WT after using item by 10%. Power is decreased slightly.',
		id: '638a4d49a44f4fa4b0deca2a',
		mergeFrom: [],
		name: 'Fast Use',
		index: 541,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces WT after using item by 20%. Power is decreased a small amount.',
		id: '638a4d49a44f4fa4b0deca2b',
		mergeFrom: [],
		name: 'Fast Use+',
		index: 542,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces WT after using item by 30%. Power is decreased a small amount.',
		id: '638a4d49a44f4fa4b0deca2f',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Reduces WT after using item by 10%. Power is decreased slightly.',
						id: '638a4d49a44f4fa4b0deca2a',
						name: 'Fast Use',
						index: 541,
					},
					{
						description: 'Effect: Reduces WT after using item by 20%. Power is decreased a small amount.',
						id: '638a4d49a44f4fa4b0deca2b',
						name: 'Fast Use+',
						index: 542,
					},
				],
			},
		],
		name: 'Sonic Throw',
		index: 543,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces WT after using item by 50%.',
		id: '638a4d49a44f4fa4b0deca2e',
		mergeFrom: [],
		name: 'Mach Throw',
		index: 544,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Wait time after using item increases a little, but power increases a little too.',
		id: '638a4d49a44f4fa4b0deca30',
		mergeFrom: [],
		name: 'Power Throw',
		index: 545,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Wait time after using item increases, but power increases too.',
		id: '638a4d49a44f4fa4b0deca33',
		mergeFrom: [],
		name: 'Power Throw+',
		index: 546,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Wait time after using item increases a lot, but power increases a lot too.',
		id: '638a4d49a44f4fa4b0deca35',
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Wait time after using item increases a little, but power increases a little too.',
						id: '638a4d49a44f4fa4b0deca30',
						name: 'Power Throw',
						index: 545,
					},
					{
						description: 'Effect: Wait time after using item increases, but power increases too.',
						id: '638a4d49a44f4fa4b0deca33',
						name: 'Power Throw+',
						index: 546,
					},
				],
			},
		],
		name: 'Strong Throw',
		index: 547,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item power by a small amount proportional to wait time after using item.',
		id: '638a4d49a44f4fa4b0deca32',
		mergeFrom: [],
		name: 'Wait Time Enhance',
		index: 548,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item power by a decent amount proportional to wait time after using item.',
		id: '638a4d49a44f4fa4b0deca31',
		mergeFrom: [],
		name: 'Wait Time Enhance+',
		index: 549,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item power proportional to wait time after using item.',
		id: '638a4d49a44f4fa4b0deca37',
		mergeFrom: [
			{
				consist: [
					{
						description:
							'Effect: Increases item power by a small amount proportional to wait time after using item.',
						id: '638a4d49a44f4fa4b0deca32',
						name: 'Wait Time Enhance',
						index: 548,
					},
					{
						description:
							'Effect: Increases item power by a decent amount proportional to wait time after using item.',
						id: '638a4d49a44f4fa4b0deca31',
						name: 'Wait Time Enhance+',
						index: 549,
					},
				],
			},
		],
		name: 'Charge Item',
		index: 550,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Item size increases by 1 level, equipment cost increases by 5.',
		id: '638a4d49a44f4fa4b0deca3a',
		mergeFrom: [],
		name: 'Size+',
		index: 571,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Item size increases by 2 levels, equipment cost increases by 10.',
		id: '638a4d49a44f4fa4b0deca3e',
		mergeFrom: [],
		name: 'Jumbo Size',
		index: 572,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Item size decreases by 1 level, equipment cost decreases by 10.',
		id: '638a4d49a44f4fa4b0deca38',
		mergeFrom: [],
		name: 'Size -',
		index: 573,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Item size decreases by 2 levels, equipment cost decreases by 20.',
		id: '638a4d49a44f4fa4b0deca39',
		mergeFrom: [],
		name: 'Mini Size',
		index: 574,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item effect by a decent amount as size increases.',
		id: '638a4d49a44f4fa4b0deca36',
		mergeFrom: [],
		name: 'Size Enhance',
		index: 575,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item effect as size increases.',
		id: '638a4d49a44f4fa4b0deca3c',
		mergeFrom: [],
		name: 'Size Super Enhance',
		index: 576,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item effect by a large amount as size increases.',
		id: '638a4d49a44f4fa4b0deca4b',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Increases item effect by a decent amount as size increases.',
						id: '638a4d49a44f4fa4b0deca36',
						name: 'Size Enhance',
						index: 575,
					},
					{
						description: 'Effect: Increases item effect as size increases.',
						id: '638a4d49a44f4fa4b0deca3c',
						name: 'Size Super Enhance',
						index: 576,
					},
				],
			},
		],
		name: 'Crush Dimension',
		index: 577,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces equipment cost of usable item by 5.',
		id: '638a4d49a44f4fa4b0deca3d',
		mergeFrom: [],
		name: 'Kind of Light',
		index: 578,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces equipment cost of usable item by 8.',
		id: '638a4d49a44f4fa4b0deca3f',
		mergeFrom: [],
		name: 'Light',
		index: 579,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces equipment cost of usable item by 12.',
		id: '638a4d49a44f4fa4b0deca46',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Reduces equipment cost of usable item by 5.',
						id: '638a4d49a44f4fa4b0deca3d',
						name: 'Kind of Light',
						index: 578,
					},
					{
						description: 'Effect: Reduces equipment cost of usable item by 8.',
						id: '638a4d49a44f4fa4b0deca3f',
						name: 'Light',
						index: 579,
					},
				],
			},
		],
		name: 'Easy to Handle',
		index: 580,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces equipment cost of usable item by 20.',
		id: '638a4d49a44f4fa4b0deca43',
		mergeFrom: [
			{
				consist: [
					{
						description: 'Effect: Reduces equipment cost of usable item by 8.',
						id: '638a4d49a44f4fa4b0deca3f',
						name: 'Light',
						index: 579,
					},
					{
						description: 'Effect: Reduces equipment cost of usable item by 12.',
						id: '638a4d49a44f4fa4b0deca46',
						name: 'Easy to Handle',
						index: 580,
					},
				],
			},
		],
		name: 'Accustoms Quickly',
		index: 581,
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Zeal factor enhances the material it resides in. Effect: Increases HP and attack.',
		id: '638a4d49a44f4fa4b0deca47',
		mergeFrom: [],
		name: 'Zeal Factor',
		index: 592,
		categories: ['ACCESSORY'],
	},
	{
		description: 'Happy heart enhances the material it resides in. Effect: Increases MP and defense.',
		id: '638a4d49a44f4fa4b0deca40',
		mergeFrom: [],
		name: 'Happy Heart',
		index: 593,
		categories: ['ACCESSORY'],
	},
	{
		description: 'Cunning wit enhances the material it resides in. Effect: Increases critical bonus and accuracy.',
		id: '638a4d49a44f4fa4b0deca42',
		mergeFrom: [],
		name: 'Cunning Wit',
		index: 594,
		categories: ['ACCESSORY'],
	},
	{
		description:
			'Splendid glory enhances the material it resides in. Effect: Increases WT delay resistance and Break resistance.',
		id: '638a4d49a44f4fa4b0deca44',
		mergeFrom: [],
		name: 'Splendid Glory',
		index: 595,
		categories: ['ACCESSORY'],
	},
	{
		description:
			'Benevolent light enhances the material it resides in. Effect: Provides damage reversal and immunity to all ailments.',
		id: '638a4d49a44f4fa4b0deca48',
		mergeFrom: [],
		name: 'Benevolent Light',
		index: 596,
		categories: ['ACCESSORY'],
	},
	{
		description:
			'Wild instinct enhances the material it resides in. Effect: Increases speed, reduces wait time after using skills.',
		id: '638a4d49a44f4fa4b0deca41',
		mergeFrom: [],
		name: 'Wild Instinct',
		index: 597,
		categories: ['ACCESSORY'],
	},
	{
		description:
			'Persistent faith enhances the material it resides in. Effect: Provides HP regeneration and chance to avoid KO.',
		id: '638a4d49a44f4fa4b0deca45',
		mergeFrom: [],
		name: 'Persistent Faith',
		index: 598,
		categories: ['ACCESSORY'],
	},
	{
		description:
			'Guiding intuition enhances the material it resides in. Effect: Increases critical hit rate, has a chance to shorten wait time.',
		id: '638a4d49a44f4fa4b0deca4a',
		mergeFrom: [],
		name: 'Guide Intuition',
		index: 599,
		categories: ['ACCESSORY'],
	},
	{
		description:
			'Empty world enhances the material it resides in. Effect: Provides damage conversion, reduces physical damage taken.',
		id: '638a4d49a44f4fa4b0deca49',
		mergeFrom: [],
		name: 'Empty World',
		index: 600,
		categories: ['ACCESSORY'],
	},
	{
		description:
			'Power of madness enhances the material it resides in. Effect: Greatly increases attack power, lose lots of HP each turn.',
		id: '638a4d49a44f4fa4b0deca4c',
		mergeFrom: [],
		name: 'Power of Madness',
		index: 601,
		categories: ['ACCESSORY'],
	},
	{
		description:
			'Burning passion enhances the material it resides in. Effect: Increases all stats by 15, bestows fire and ice resistance.',
		id: '638a4d49a44f4fa4b0deca4e',
		mergeFrom: [],
		name: 'Burning Passion',
		index: 602,
		categories: ['ACCESSORY'],
	},
	{
		description:
			'Unwavering spirit enhances the material it resides in. Effect: Increases all stats by 15, bestows lightning and physical resistance.',
		id: '638a4d49a44f4fa4b0deca4d',
		mergeFrom: [],
		name: 'Unwavering Spirit',
		index: 603,
		categories: ['ACCESSORY'],
	},
	{
		description: 'Fog of illusion enhances the material it resides in. Effect: Swaps HP and MP, adds evasion chance.',
		id: '638a4d49a44f4fa4b0deca4f',
		mergeFrom: [],
		name: 'Fog of Illusion',
		index: 604,
		categories: ['ACCESSORY'],
	},
	{
		description:
			'Bonds of belief enhances the material it resides in. Effect: Increases assist effect, provides damage conversion.',
		id: '638a4d49a44f4fa4b0deca5a',
		mergeFrom: [],
		name: 'Bonds of Belief',
		index: 605,
		categories: ['ACCESSORY'],
	},
	{
		description:
			'Hammer of justice enhances the material it resides in. Effect: Greatly increases skill power, adds Break value.',
		id: '638a4d49a44f4fa4b0deca52',
		mergeFrom: [],
		name: 'Hammer of Justice',
		index: 606,
		categories: ['WEAPON'],
	},
	{
		description:
			'Dreadful king enhances the material it resides in. Effect: Causes additional damage and status effects.',
		id: '638a4d49a44f4fa4b0deca51',
		mergeFrom: [],
		name: 'Dreadful King',
		index: 607,
		categories: ['WEAPON'],
	},
	{
		description: 'Unceasing desire enhances the material it resides in. Effect: Absorbs a portion of damage dealt.',
		id: '638a4d49a44f4fa4b0deca55',
		mergeFrom: [],
		name: 'Unceasing Desire',
		index: 608,
		categories: ['WEAPON'],
	},
	{
		description: 'Pursuit of knowledge enhances the material it resides in. Effect: Causes additional damage.',
		id: '638a4d49a44f4fa4b0deca53',
		mergeFrom: [],
		name: 'Pursuit of Knowledge',
		index: 609,
		categories: ['WEAPON'],
	},
	{
		description:
			'Star of expectation enhances the material it resides in. Effect: Provides enhancement proportional to level.',
		id: '638a4d49a44f4fa4b0deca50',
		mergeFrom: [],
		name: 'Star of Expectation',
		index: 610,
		categories: ['ARMOR'],
	},
	{
		description:
			'Ray of hope enhances the material it resides in. Effect: Increases maximum HP, provides automatic KO revival.',
		id: '638a4d49a44f4fa4b0deca57',
		mergeFrom: [],
		name: 'Ray of Hope',
		index: 611,
		categories: ['ARMOR'],
	},
	{
		description:
			'Awakening courage enhances the material it resides in. Effect: Provides a bonus against powerful foes and bosses.',
		id: '638a4d49a44f4fa4b0deca54',
		mergeFrom: [],
		name: 'Awakening Courage',
		index: 612,
		categories: ['ARMOR'],
	},
	{
		description:
			'Kind soul enhances the material it resides in. Effect: Provides a Burst Mode bonus and gauge fill rate increase.',
		id: '638a4d49a44f4fa4b0deca58',
		mergeFrom: [],
		name: 'Kind Soul',
		index: 613,
		categories: [],
	},
	{
		description:
			'Indomitable soul enhances the material it resides in. Effect: Provides Break resistance and greatly increases speed of recovering from Break.',
		id: '638a4d49a44f4fa4b0deca59',
		mergeFrom: [],
		name: 'Indomitable Soul',
		index: 614,
		categories: ['ARMOR'],
	},
	{
		description: 'Effect: Attacks cause 7% additional damage, and increases skill power by 15%.',
		id: '638a4d49a44f4fa4b0deca56',
		mergeFrom: [],
		name: 'Changing Attack',
		index: 659,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause 15% additional damage, and increases skill power by 10%.',
		id: '638a4d49a44f4fa4b0deca5e',
		mergeFrom: [],
		name: 'Avidya Attack',
		index: 660,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause 15% additional damage, and increases skill power by 15%.',
		id: '638a4d49a44f4fa4b0deca5c',
		mergeFrom: [],
		name: 'Barrage Attack',
		index: 661,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause 20% additional damage, and increases skill power by 25%.',
		id: '638a4d49a44f4fa4b0deca5b',
		mergeFrom: [],
		name: 'Skillful Attack',
		index: 662,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause 15% additional damage, and increases skill power by 20%.',
		id: '638a4d49a44f4fa4b0deca5d',
		mergeFrom: [],
		name: 'Persistent Attack',
		index: 663,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause between 1 - 50% additional damage.',
		id: '638a4d49a44f4fa4b0deca5f',
		mergeFrom: [],
		name: 'Deadly Attack',
		index: 664,
		categories: ['WEAPON'],
	},
	{
		description: "Effect: Item automatically activates when the user's HP falls below 20% in battle. Consumes MP.",
		id: '638a4d49a44f4fa4b0deca61',
		mergeFrom: [],
		name: 'Auto Activate 20%',
		index: 677,
		categories: ['HEAL_ITEM'],
	},
	{
		description: "Effect: Item automatically activates when the user's HP falls below 30% in battle. Consumes MP.",
		id: '638a4d49a44f4fa4b0deca60',
		mergeFrom: [],
		name: 'Auto Activate 30%',
		index: 678,
		categories: ['HEAL_ITEM'],
	},
	{
		description: "Effect: Item automatically activates when the user's HP falls below 40% in battle. Consumes MP.",
		id: '638a4d49a44f4fa4b0deca63',
		mergeFrom: [],
		name: 'Auto Activate 50%',
		index: 679,
		categories: ['HEAL_ITEM'],
	},
	{
		description: "Effect: Item automatically activates when the user's HP falls below 50% in battle.",
		id: '638a4d49a44f4fa4b0deca62',
		mergeFrom: [],
		name: 'Auto Use',
		index: 680,
		categories: ['HEAL_ITEM'],
	},
	{
		description:
			'Effect: Increases item power by 25%, and makes its effect non-attribute. Non-attribute is not affected by any resistances or weaknesses.',
		id: '638a4d49a44f4fa4b0deca67',
		mergeFrom: [],
		name: 'No Attribute',
		index: 681,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Has a high chance to inflict Poison when dealing damage.',
		id: '638a4d49a44f4fa4b0deca68',
		mergeFrom: [],
		name: 'Poison Mist',
		index: 682,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: "Effect: Restores some of the target's HP, and also recovers from Poison.",
		id: '638a4d49a44f4fa4b0deca6a',
		mergeFrom: [],
		name: 'Slime Compound',
		index: 683,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description:
			"Effect: Temporarily increases all of the target's stats. They will also automatically revive on their next turn after being KO'd.",
		id: '638a4d49a44f4fa4b0deca66',
		mergeFrom: [],
		name: 'False Flower',
		index: 684,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description:
			"Effect: Pushes back the target's turn a little. This effect diminishes with each use until the target takes another turn.",
		id: '638a4d49a44f4fa4b0deca64',
		mergeFrom: [],
		name: 'Electrified',
		index: 685,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Heat causes continuous damage. The effect is small.',
		id: '638a4d49a44f4fa4b0deca65',
		mergeFrom: [],
		name: 'Carries Heat',
		index: 686,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: "Effect: Cold reduces the target's speed, and also has a low chance of inflicting Slow.",
		id: '638a4d49a44f4fa4b0deca69',
		mergeFrom: [],
		name: 'Carries Cold',
		index: 687,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases all stats by 8.',
		id: '638a4d49a44f4fa4b0deca6b',
		mergeFrom: [],
		name: 'Dark Matter',
		index: 688,
		categories: ['ACCESSORY'],
	},
	{
		description: 'Effect: Increases damage dealt to Puni and magical creatures.',
		id: '638a4d49a44f4fa4b0deca6c',
		mergeFrom: [],
		name: 'Ancient Seal',
		index: 689,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: Reduces skill power by 10%, but also reduces MP consumption by 30%.',
		id: '638a4d49a44f4fa4b0deca71',
		mergeFrom: [],
		name: 'Absorbs Light',
		index: 690,
		categories: ['ACCESSORY', 'WEAPON'],
	},
	{
		description: "Effect: Reduces the target's defense and speed.",
		id: '638a4d49a44f4fa4b0deca6f',
		mergeFrom: [],
		name: 'Stinks',
		index: 691,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Restores Break value to the target. Also reduces wait time after turns by a small amount.',
		id: '638a4d49a44f4fa4b0deca6e',
		mergeFrom: [],
		name: 'Sunny Scent',
		index: 692,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases attack by 7, and attacks cause a small amount of additional damage.',
		id: '638a4d49a44f4fa4b0deca6d',
		mergeFrom: [],
		name: 'Cutting Thread',
		index: 693,
		categories: ['WEAPON'],
	},
	{
		description: 'Effect: The target recovers a small amount of HP, and also recovers from Weak.',
		id: '638a4d49a44f4fa4b0deca72',
		mergeFrom: [],
		name: 'Kirchen Bell Special',
		index: 694,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: "Effect: Increases the target's evasion rate. This effect lasts 5 turns.",
		id: '638a4d49a44f4fa4b0deca75',
		mergeFrom: [],
		name: 'Flickering Light',
		index: 695,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases attack item effect by 5%, and also has a chance to cause Weak.',
		id: '638a4d49a44f4fa4b0deca70',
		mergeFrom: [],
		name: 'Unidentified',
		index: 696,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: The target recovers a small amount of HP, and also recovers from Curse.',
		id: '638a4d49a44f4fa4b0deca76',
		mergeFrom: [],
		name: 'Purifying Water',
		index: 697,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Price when selling to shops increases quite a lot.',
		id: '638a4d49a44f4fa4b0deca78',
		mergeFrom: [],
		name: 'Golden Radiance',
		index: 698,
		categories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases attack item effect by 15%.',
		id: '638a4d49a44f4fa4b0deca73',
		mergeFrom: [],
		name: 'Super Fine',
		index: 699,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases defense by 10, and also causes a decent amount of HP recovery each turn.',
		id: '638a4d49a44f4fa4b0deca74',
		mergeFrom: [],
		name: 'Mutated Material',
		index: 700,
		categories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Effect: Increases recovery item effect by 30%, but increases equipment cost by 5.',
		id: '638a4d49a44f4fa4b0deca77',
		mergeFrom: [],
		name: 'Special Ingredient',
		index: 701,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description:
			"Effect: Increases the target's maximum HP during battle, and also reduces the effectiveness of status ailments. The effect is small.",
		id: '638a4d49a44f4fa4b0deca7b',
		mergeFrom: [],
		name: 'Secret of Health',
		index: 702,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases critical hit rate, and also increases damage dealt to Broken targets.',
		id: '638a4d49a44f4fa4b0deca79',
		mergeFrom: [],
		name: 'Power of Faith',
		index: 703,
		categories: ['ACCESSORY', 'WEAPON'],
	},
	{
		description: 'Effect: The target recovers from Poison and No Heal ailments.',
		id: '638a4d49a44f4fa4b0deca7a',
		mergeFrom: [],
		name: 'Medicine Compound',
		index: 704,
		categories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases price when selling to shops.',
		id: '638a4d49a44f4fa4b0deca7f',
		mergeFrom: [],
		name: 'Rainbow Radiance',
		index: 705,
		categories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Demon and Undead enemies.',
		id: '638a4d49a44f4fa4b0deca7c',
		mergeFrom: [],
		name: 'Wards Evil',
		index: 706,
		categories: ['WEAPON'],
	},
	{
		description:
			'Effect: Increases damage dealt to Broken targets by 20%, and a portion of damage dealt is absorbed to recover HP.',
		id: '638a4d49a44f4fa4b0deca7e',
		mergeFrom: [],
		name: 'Demon Soul',
		index: 707,
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases all stats by 15, and also increases skill power by 20%.',
		id: '638a4d49a44f4fa4b0deca7d',
		mergeFrom: [],
		name: 'Dragon Soul',
		index: 708,
		categories: ['WEAPON'],
	},
];

export default traits;
