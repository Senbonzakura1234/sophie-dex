import type { Trait } from '@prisma/client';

const traits: Trait[] = [
	{
		description: 'Effect: Price when selling to shops decreases a little, but also decreases duplication price.',
		id: '638a4d47a44f4fa4b0dec965',
		mergeFrom: [],
		name: 'Low Price',
		grade: 0,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops decreases quite a bit, but also decreases duplication price.',
		id: '638a4d47a44f4fa4b0dec96a',
		mergeFrom: [],
		name: 'Low Price+',
		grade: 1,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops decreases quite a lot, but also decreases duplication price.',
		id: '638a4d47a44f4fa4b0dec968',
		mergeFrom: [],
		name: 'Low Price++',
		grade: 2,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
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
						grade: 0,
					},
					{
						description:
							'Effect: Price when selling to shops decreases quite a bit, but also decreases duplication price.',
						id: '638a4d47a44f4fa4b0dec96a',
						name: 'Low Price+',
						grade: 1,
					},
				],
			},
		],
		name: 'Common Item',
		grade: 3,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
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
						grade: 1,
					},
					{
						description:
							'Effect: Price when selling to shops decreases quite a lot, but also decreases duplication price.',
						id: '638a4d47a44f4fa4b0dec968',
						name: 'Low Price++',
						grade: 2,
					},
				],
			},
		],
		name: 'Mass Produced',
		grade: 4,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
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
						grade: 3,
					},
					{
						description:
							'Effect: Price when selling to shops decreases massively, but also decreases duplication price.',
						id: '638a4d47a44f4fa4b0dec96b',
						name: 'Mass Produced',
						grade: 4,
					},
				],
			},
		],
		name: 'No Price',
		grade: 5,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops increases a little.',
		id: '638a4d47a44f4fa4b0dec967',
		mergeFrom: [],
		name: 'High Price',
		grade: 6,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops increases quite a bit.',
		id: '638a4d47a44f4fa4b0dec962',
		mergeFrom: [],
		name: 'High Price+',
		grade: 7,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops increases quite a lot.',
		id: '638a4d47a44f4fa4b0dec966',
		mergeFrom: [],
		name: 'High Price++',
		grade: 8,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
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
						grade: 6,
					},
					{
						description: 'Effect: Price when selling to shops increases quite a bit.',
						id: '638a4d47a44f4fa4b0dec962',
						name: 'High Price+',
						grade: 7,
					},
				],
			},
		],
		name: 'High Class',
		grade: 9,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
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
						grade: 7,
					},
					{
						description: 'Effect: Price when selling to shops increases quite a lot.',
						id: '638a4d47a44f4fa4b0dec966',
						name: 'High Price++',
						grade: 8,
					},
				],
			},
		],
		name: 'Rare Item',
		grade: 10,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
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
						grade: 9,
					},
					{
						description: 'Effect: Price when selling to shops increases massively.',
						id: '638a4d47a44f4fa4b0dec96d',
						name: 'Rare Item',
						grade: 10,
					},
				],
			},
		],
		name: 'Premium Price',
		grade: 11,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases item quality by 10% when this trait is transferred.',
		id: '638a4d47a44f4fa4b0dec982',
		mergeFrom: [],
		name: 'Quality Up',
		grade: 12,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases item quality by 15% when this trait is transferred.',
		id: '638a4d47a44f4fa4b0dec970',
		mergeFrom: [],
		name: 'Quality Up+',
		grade: 13,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases item quality by 20% when this trait is transferred.',
		id: '638a4d47a44f4fa4b0dec972',
		mergeFrom: [],
		name: 'Quality Up++',
		grade: 14,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
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
						grade: 12,
					},
					{
						description: 'Effect: Increases item quality by 15% when this trait is transferred.',
						id: '638a4d47a44f4fa4b0dec970',
						name: 'Quality Up+',
						grade: 13,
					},
				],
			},
		],
		name: 'Well Made',
		grade: 15,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
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
						grade: 13,
					},
					{
						description: 'Effect: Increases item quality by 20% when this trait is transferred.',
						id: '638a4d47a44f4fa4b0dec972',
						name: 'Quality Up++',
						grade: 14,
					},
				],
			},
		],
		name: 'Pro Perfection',
		grade: 16,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
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
						grade: 15,
					},
					{
						description: 'Effect: Increases item quality by 30% when this trait is transferred.',
						id: '638a4d47a44f4fa4b0dec97e',
						name: 'Pro Perfection',
						grade: 16,
					},
				],
			},
		],
		name: 'Super Quality',
		grade: 17,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases attack item effect by 5%.',
		id: '638a4d47a44f4fa4b0dec96c',
		mergeFrom: [],
		name: 'Destruction Up',
		grade: 52,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases attack item effect by 7%.',
		id: '638a4d47a44f4fa4b0dec96f',
		mergeFrom: [],
		name: 'Destruction Up+',
		grade: 53,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases attack item effect by 10%.',
		id: '638a4d47a44f4fa4b0dec984',
		mergeFrom: [],
		name: 'Destruction Up++',
		grade: 54,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
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
						grade: 52,
					},
					{
						description: 'Effect: Increases attack item effect by 7%.',
						id: '638a4d47a44f4fa4b0dec96f',
						name: 'Destruction Up+',
						grade: 53,
					},
				],
			},
		],
		name: 'Big Destruction',
		grade: 55,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
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
						grade: 53,
					},
					{
						description: 'Effect: Increases attack item effect by 10%.',
						id: '638a4d47a44f4fa4b0dec984',
						name: 'Destruction Up++',
						grade: 54,
					},
				],
			},
		],
		name: 'Intense Destruction',
		grade: 56,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
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
						grade: 55,
					},
					{
						description: 'Effect: Increases attack item effect by 17%.',
						id: '638a4d47a44f4fa4b0dec977',
						name: 'Intense Destruction',
						grade: 56,
					},
				],
			},
		],
		name: 'Ultimate Destruction',
		grade: 57,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases attack item effect by 40%.',
		id: '638a4d47a44f4fa4b0dec979',
		mergeFrom: [],
		name: 'Power to Destroy Gods',
		grade: 58,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Attack item enhanced by a small, fixed amount. Lower power equals stronger enhancement.',
		id: '638a4d47a44f4fa4b0dec978',
		mergeFrom: [],
		name: 'Fixed Power',
		grade: 59,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Attack item enhanced by a fixed amount. Lower power equals stronger enhancement.',
		id: '638a4d47a44f4fa4b0dec976',
		mergeFrom: [],
		name: 'Fixed Power+',
		grade: 60,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Attack item enhanced by a large, fixed amount. Lower power equals stronger enhancement.',
		id: '638a4d47a44f4fa4b0dec97b',
		mergeFrom: [],
		name: 'Fixed Power++',
		grade: 61,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
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
						grade: 59,
					},
					{
						description:
							'Effect: Attack item enhanced by a fixed amount. Lower power equals stronger enhancement.',
						id: '638a4d47a44f4fa4b0dec976',
						name: 'Fixed Power+',
						grade: 60,
					},
				],
			},
		],
		name: 'Pain in Numbers',
		grade: 62,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
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
						grade: 60,
					},
					{
						description:
							'Effect: Attack item enhanced by a large, fixed amount. Lower power equals stronger enhancement.',
						id: '638a4d47a44f4fa4b0dec97b',
						name: 'Fixed Power++',
						grade: 61,
					},
				],
			},
		],
		name: 'Damage in Numbers',
		grade: 63,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
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
						grade: 62,
					},
					{
						description:
							'Effect: Attack item enhanced by a large, fixed amount. Lower power equals stronger enhancement.',
						id: '638a4d47a44f4fa4b0dec97a',
						name: 'Damage in Numbers',
						grade: 63,
					},
				],
			},
		],
		name: 'Big Damage Numbers',
		grade: 64,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description:
			'Effect: Attack item enhanced by a ridiculous, fixed amount. This increase scales with the original value.',
		id: '638a4d47a44f4fa4b0dec97c',
		mergeFrom: [],
		name: 'Legendary Destruction',
		grade: 65,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Attacks cause 5% additional damage, and increases skill power by 5%.',
		id: '638a4d47a44f4fa4b0dec97f',
		mergeFrom: [],
		name: 'Increase Sharpness',
		grade: 66,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause 7% additional damage, and increases skill power by 7%.',
		id: '638a4d47a44f4fa4b0dec980',
		mergeFrom: [],
		name: 'Cuts Easily',
		grade: 67,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause 10% additional damage, and increases skill power by 10%.',
		id: '638a4d47a44f4fa4b0dec97d',
		mergeFrom: [],
		name: 'Increase Aggression',
		grade: 68,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases recovery item effect by 10%.',
		id: '638a4d47a44f4fa4b0dec9a1',
		mergeFrom: [],
		name: 'Recovery Up',
		grade: 103,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases recovery item effect by 15%.',
		id: '638a4d47a44f4fa4b0dec983',
		mergeFrom: [],
		name: 'Recovery Up+',
		grade: 104,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases recovery item effect by 20%.',
		id: '638a4d47a44f4fa4b0dec985',
		mergeFrom: [],
		name: 'Recovery Up++',
		grade: 105,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 103,
					},
					{
						description: 'Effect: Increases recovery item effect by 15%.',
						id: '638a4d47a44f4fa4b0dec983',
						name: 'Recovery Up+',
						grade: 104,
					},
				],
			},
		],
		name: 'Big Recovery',
		grade: 106,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 104,
					},
					{
						description: 'Effect: Increases recovery item effect by 20%.',
						id: '638a4d47a44f4fa4b0dec985',
						name: 'Recovery Up++',
						grade: 105,
					},
				],
			},
		],
		name: 'Intense Recovery',
		grade: 107,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 106,
					},
					{
						description: 'Effect: Increases recovery item effect by 35%.',
						id: '638a4d47a44f4fa4b0dec986',
						name: 'Intense Recovery',
						grade: 107,
					},
				],
			},
		],
		name: 'Ultimate Recovery',
		grade: 108,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases recovery item effect by 40%.',
		id: '638a4d47a44f4fa4b0dec988',
		mergeFrom: [],
		name: 'Blessed by God',
		grade: 109,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Recovery item enhanced by a tiny, fixed amount. Lower power equals stronger effect.',
		id: '638a4d47a44f4fa4b0dec989',
		mergeFrom: [],
		name: 'Fixed Recovery',
		grade: 110,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Recovery item enhanced by a small, fixed amount. Lower power equals stronger effect.',
		id: '638a4d47a44f4fa4b0dec987',
		mergeFrom: [],
		name: 'Fixed Recovery+',
		grade: 111,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Recovery item enhanced by a fixed amount. Lower power equals stronger effect.',
		id: '638a4d47a44f4fa4b0dec98a',
		mergeFrom: [],
		name: 'Fixed Recovery++',
		grade: 112,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 110,
					},
					{
						description:
							'Effect: Recovery item enhanced by a small, fixed amount. Lower power equals stronger effect.',
						id: '638a4d47a44f4fa4b0dec987',
						name: 'Fixed Recovery+',
						grade: 111,
					},
				],
			},
		],
		name: 'Medicine Enhance',
		grade: 113,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 111,
					},
					{
						description: 'Effect: Recovery item enhanced by a fixed amount. Lower power equals stronger effect.',
						id: '638a4d47a44f4fa4b0dec98a',
						name: 'Fixed Recovery++',
						grade: 112,
					},
				],
			},
		],
		name: 'Big Medicine Enhance',
		grade: 114,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 113,
					},
					{
						description: 'Effect: Recovery item enhanced by a fixed amount. Lower power equals stronger effect.',
						id: '638a4d47a44f4fa4b0dec98b',
						name: 'Big Medicine Enhance',
						grade: 114,
					},
				],
			},
		],
		name: 'Super Enhance Recovery',
		grade: 115,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description:
			'Effect: Recovery item enhanced by a ridiculous, fixed amount. This increase scales with the original value.',
		id: '638a4d47a44f4fa4b0dec98c',
		mergeFrom: [],
		name: 'Legendary Recovery',
		grade: 116,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Gives item a 15% chance to critical hit.',
		id: '638a4d47a44f4fa4b0dec990',
		mergeFrom: [],
		name: 'Critical',
		grade: 145,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Gives item a 25% chance to critical hit.',
		id: '638a4d47a44f4fa4b0dec98f',
		mergeFrom: [],
		name: 'Critical+',
		grade: 146,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Gives item a 35% chance to critical hit.',
		id: '638a4d47a44f4fa4b0dec991',
		mergeFrom: [],
		name: 'Critical++',
		grade: 147,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 145,
					},
					{
						description: 'Effect: Gives item a 25% chance to critical hit.',
						id: '638a4d47a44f4fa4b0dec98f',
						name: 'Critical+',
						grade: 146,
					},
				],
			},
		],
		name: 'Critical Finish',
		grade: 148,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 146,
					},
					{
						description: 'Effect: Gives item a 35% chance to critical hit.',
						id: '638a4d47a44f4fa4b0dec991',
						name: 'Critical++',
						grade: 147,
					},
				],
			},
		],
		name: 'Always Critical',
		grade: 149,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 148,
					},
					{
						description: 'Effect: Item will always critical hit.',
						id: '638a4d47a44f4fa4b0dec992',
						name: 'Always Critical',
						grade: 149,
					},
				],
			},
		],
		name: 'One Hit Kill',
		grade: 150,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Reduces item number variation slightly, making it easier to score higher numbers.',
		id: '638a4d47a44f4fa4b0dec998',
		mergeFrom: [],
		name: 'Stable Effect',
		grade: 151,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces item number variation a little, making it easier to score higher numbers.',
		id: '638a4d47a44f4fa4b0dec996',
		mergeFrom: [],
		name: 'Stable Effect+',
		grade: 152,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces item number variation, making it easier to score higher numbers.',
		id: '638a4d47a44f4fa4b0dec999',
		mergeFrom: [],
		name: 'Stable Effect++',
		grade: 153,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 151,
					},
					{
						description:
							'Effect: Reduces item number variation a little, making it easier to score higher numbers.',
						id: '638a4d47a44f4fa4b0dec996',
						name: 'Stable Effect+',
						grade: 152,
					},
				],
			},
		],
		name: 'Stability Emphasis',
		grade: 154,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 152,
					},
					{
						description: 'Effect: Reduces item number variation, making it easier to score higher numbers.',
						id: '638a4d47a44f4fa4b0dec999',
						name: 'Stable Effect++',
						grade: 153,
					},
				],
			},
		],
		name: 'Solid Effect',
		grade: 155,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 154,
					},
					{
						description: 'Effect: Halves item number variation, making it easier to score higher numbers.',
						id: '638a4d48a44f4fa4b0dec9ca',
						name: 'Solid Effect',
						grade: 155,
					},
				],
			},
		],
		name: 'Boost Expected Value',
		grade: 156,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item use count by 1. Power is reduced a little.',
		id: '638a4d47a44f4fa4b0dec99a',
		mergeFrom: [],
		name: 'Use Count +1',
		grade: 172,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item use count by 2. Power is reduced slightly.',
		id: '638a4d47a44f4fa4b0dec99b',
		mergeFrom: [],
		name: 'Use Count +2',
		grade: 173,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 172,
					},
					{
						description: 'Effect: Increases item use count by 2. Power is reduced slightly.',
						id: '638a4d47a44f4fa4b0dec99b',
						name: 'Use Count +2',
						grade: 173,
					},
				],
			},
		],
		name: 'Multiply',
		grade: 174,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces item use count by 1. Power is increased a little.',
		id: '638a4d47a44f4fa4b0dec99c',
		mergeFrom: [],
		name: 'Use Count -1',
		grade: 175,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces item use count by 2. Power is increased.',
		id: '638a4d47a44f4fa4b0dec99f',
		mergeFrom: [],
		name: 'Use Count -2',
		grade: 176,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 175,
					},
					{
						description: 'Effect: Reduces item use count by 2. Power is increased.',
						id: '638a4d47a44f4fa4b0dec99f',
						name: 'Use Count -2',
						grade: 176,
					},
				],
			},
		],
		name: 'Reduction',
		grade: 177,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 10.',
		id: '638a4d47a44f4fa4b0dec99e',
		mergeFrom: [],
		name: 'HP Enhance',
		grade: 190,
		traitCategories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 15.',
		id: '638a4d48a44f4fa4b0dec9cd',
		mergeFrom: [],
		name: 'HP Boost',
		grade: 191,
		traitCategories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 25.',
		id: '638a4d47a44f4fa4b0dec9a2',
		mergeFrom: [],
		name: 'HP Super Enhance',
		grade: 192,
		traitCategories: ['ACCESSORY', 'ARMOR'],
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
						grade: 190,
					},
					{
						description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 15.',
						id: '638a4d48a44f4fa4b0dec9cd',
						name: 'HP Boost',
						grade: 191,
					},
				],
			},
		],
		name: 'Full of Life',
		grade: 193,
		traitCategories: ['ACCESSORY', 'ARMOR', 'BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 190,
					},
					{
						description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 15.',
						id: '638a4d48a44f4fa4b0dec9cd',
						name: 'HP Boost',
						grade: 191,
					},
				],
			},
		],
		name: 'Full of Life',
		grade: 193,
		traitCategories: ['ACCESSORY', 'ARMOR', 'BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 191,
					},
					{
						description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 25.',
						id: '638a4d47a44f4fa4b0dec9a2',
						name: 'HP Super Enhance',
						grade: 192,
					},
				],
			},
		],
		name: 'Overflowing Life',
		grade: 194,
		traitCategories: ['ACCESSORY', 'ARMOR'],
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
						grade: 193,
					},
					{
						description: 'Effect: Maximum HP increases by 40.',
						id: '638a4d47a44f4fa4b0dec9a9',
						name: 'Overflowing Life',
						grade: 194,
					},
				],
			},
		],
		name: 'Power of Life',
		grade: 195,
		traitCategories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 10.',
		id: '638a4d47a44f4fa4b0dec9a6',
		mergeFrom: [],
		name: 'MP Enhance',
		grade: 196,
		traitCategories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 15.',
		id: '638a4d47a44f4fa4b0dec9a7',
		mergeFrom: [],
		name: 'MP Boost',
		grade: 197,
		traitCategories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 25.',
		id: '638a4d47a44f4fa4b0dec9aa',
		mergeFrom: [],
		name: 'MP Super Enhance',
		grade: 198,
		traitCategories: ['ACCESSORY', 'ARMOR'],
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
						grade: 196,
					},
					{
						description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 15.',
						id: '638a4d47a44f4fa4b0dec9a7',
						name: 'MP Boost',
						grade: 197,
					},
				],
			},
		],
		name: "Magician's Wisdom",
		grade: 199,
		traitCategories: ['ACCESSORY', 'ARMOR'],
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
						grade: 197,
					},
					{
						description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 25.',
						id: '638a4d47a44f4fa4b0dec9aa',
						name: 'MP Super Enhance',
						grade: 198,
					},
				],
			},
		],
		name: "Grand Magician's Wisdom",
		grade: 200,
		traitCategories: ['ACCESSORY', 'ARMOR'],
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
						grade: 199,
					},
					{
						description: 'Effect: Maximum MP increases by 40.',
						id: '638a4d47a44f4fa4b0dec9ab',
						name: "Grand Magician's Wisdom",
						grade: 200,
					},
				],
			},
		],
		name: 'Wisdom of the Gods',
		grade: 201,
		traitCategories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 5.',
		id: '638a4d47a44f4fa4b0dec9ac',
		mergeFrom: [],
		name: 'LP Enhance',
		grade: 202,
		traitCategories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 7.',
		id: '638a4d47a44f4fa4b0dec9ae',
		mergeFrom: [],
		name: 'LP Boost',
		grade: 203,
		traitCategories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 10.',
		id: '638a4d48a44f4fa4b0dec9af',
		mergeFrom: [],
		name: 'LP Super Enhance',
		grade: 204,
		traitCategories: ['ACCESSORY', 'ARMOR'],
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
						grade: 202,
					},
					{
						description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 7.',
						id: '638a4d47a44f4fa4b0dec9ae',
						name: 'LP Boost',
						grade: 203,
					},
				],
			},
		],
		name: 'Full of Stamina',
		grade: 205,
		traitCategories: ['ACCESSORY', 'ARMOR'],
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
						grade: 203,
					},
					{
						description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 10.',
						id: '638a4d48a44f4fa4b0dec9af',
						name: 'LP Super Enhance',
						grade: 204,
					},
				],
			},
		],
		name: 'Unabating Stamina',
		grade: 206,
		traitCategories: ['ACCESSORY', 'ARMOR'],
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
						grade: 205,
					},
					{
						description: 'Effect: Maximum LP increases by 17.',
						id: '638a4d48a44f4fa4b0dec9b1',
						name: 'Unabating Stamina',
						grade: 206,
					},
				],
			},
		],
		name: 'Infinite Stamina',
		grade: 207,
		traitCategories: ['ACCESSORY', 'ARMOR'],
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
						grade: 193,
					},
					{
						description: 'Effect: Maximum MP increases by 25.',
						id: '638a4d47a44f4fa4b0dec9ad',
						name: "Magician's Wisdom",
						grade: 199,
					},
				],
			},
		],
		name: 'HPMP Enhance',
		grade: 208,
		traitCategories: ['ACCESSORY', 'ARMOR'],
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
						grade: 194,
					},
					{
						description: 'Effect: Maximum MP increases by 40.',
						id: '638a4d47a44f4fa4b0dec9ab',
						name: "Grand Magician's Wisdom",
						grade: 200,
					},
				],
			},
		],
		name: 'HPMP Boost',
		grade: 209,
		traitCategories: ['ACCESSORY', 'ARMOR'],
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
						grade: 195,
					},
					{
						description: 'Effect: Maximum MP increases by 70.',
						id: '638a4d48a44f4fa4b0dec9b4',
						name: 'Wisdom of the Gods',
						grade: 201,
					},
				],
			},
		],
		name: 'HPMP Super Enhance',
		grade: 210,
		traitCategories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a stat boost. Effect: Increases base stats by 5%.',
		id: '638a4d48a44f4fa4b0dec9b3',
		mergeFrom: [],
		name: 'Parameters +5%',
		grade: 211,
		traitCategories: ['ARMOR'],
	},
	{
		description: 'Bestows a stat boost. Effect: Increases base stats by 6%.',
		id: '638a4d48a44f4fa4b0dec9b6',
		mergeFrom: [],
		name: 'Parameters +6%',
		grade: 212,
		traitCategories: ['ARMOR'],
	},
	{
		description: 'Bestows a stat boost. Effect: Increases base stats by 7%.',
		id: '638a4d48a44f4fa4b0dec9bc',
		mergeFrom: [],
		name: 'Parameters +7%',
		grade: 213,
		traitCategories: ['ARMOR'],
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
						grade: 211,
					},
					{
						description: 'Bestows a stat boost. Effect: Increases base stats by 6%.',
						id: '638a4d48a44f4fa4b0dec9b6',
						name: 'Parameters +6%',
						grade: 212,
					},
				],
			},
		],
		name: 'Enhance the Body',
		grade: 214,
		traitCategories: ['ARMOR'],
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
						grade: 212,
					},
					{
						description: 'Bestows a stat boost. Effect: Increases base stats by 7%.',
						id: '638a4d48a44f4fa4b0dec9bc',
						name: 'Parameters +7%',
						grade: 213,
					},
				],
			},
		],
		name: 'Draw Out Power',
		grade: 215,
		traitCategories: ['ARMOR'],
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
						grade: 214,
					},
					{
						description: 'Effect: Increases base stats by 12%.',
						id: '638a4d48a44f4fa4b0dec9be',
						name: 'Draw Out Power',
						grade: 215,
					},
				],
			},
		],
		name: 'Develops the Body',
		grade: 216,
		traitCategories: ['ARMOR'],
	},
	{
		description: 'Effect: Increases base stats by 20%.',
		id: '638a4d48a44f4fa4b0dec9c0',
		mergeFrom: [],
		name: 'Evolves the Body',
		grade: 217,
		traitCategories: ['ARMOR'],
	},
	{
		description: 'Enhances weapon attack power. Effect: Increases attack power by 7.',
		id: '638a4d48a44f4fa4b0dec9d3',
		mergeFrom: [],
		name: 'Attack Enhance',
		grade: 218,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Enhances weapon attack power. Effect: Increases attack power by 10.',
		id: '638a4d48a44f4fa4b0dec9bf',
		mergeFrom: [],
		name: 'Attack Boost',
		grade: 219,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Enhances weapon attack power. Effect: Increases attack power by 15.',
		id: '638a4d48a44f4fa4b0dec9bd',
		mergeFrom: [],
		name: 'Attack Super Enhance',
		grade: 220,
		traitCategories: ['WEAPON'],
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
						grade: 218,
					},
					{
						description: 'Enhances weapon attack power. Effect: Increases attack power by 10.',
						id: '638a4d48a44f4fa4b0dec9bf',
						name: 'Attack Boost',
						grade: 219,
					},
				],
			},
		],
		name: 'Power of Beasts',
		grade: 221,
		traitCategories: ['WEAPON'],
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
						grade: 219,
					},
					{
						description: 'Enhances weapon attack power. Effect: Increases attack power by 15.',
						id: '638a4d48a44f4fa4b0dec9bd',
						name: 'Attack Super Enhance',
						grade: 220,
					},
				],
			},
		],
		name: 'Power of Destruction',
		grade: 222,
		traitCategories: ['WEAPON'],
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
						grade: 221,
					},
					{
						description: 'Effect: Increases attack power by 25.',
						id: '638a4d48a44f4fa4b0dec9c3',
						name: 'Power of Destruction',
						grade: 222,
					},
				],
			},
		],
		name: 'Power of Gods',
		grade: 223,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Enhances armor defense. Effect: Increases defense by 7.',
		id: '638a4d48a44f4fa4b0dec9c1',
		mergeFrom: [],
		name: 'Defense Enhance',
		grade: 224,
		traitCategories: ['ARMOR'],
	},
	{
		description: 'Enhances armor defense. Effect: Increases defense by 10.',
		id: '638a4d48a44f4fa4b0dec9c2',
		mergeFrom: [],
		name: 'Defense Boost',
		grade: 225,
		traitCategories: ['ARMOR'],
	},
	{
		description: 'Enhances armor defense. Effect: Increases defense by 15.',
		id: '638a4d48a44f4fa4b0dec9c6',
		mergeFrom: [],
		name: 'Defense Super Enhance',
		grade: 226,
		traitCategories: ['ARMOR'],
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
						grade: 224,
					},
					{
						description: 'Enhances armor defense. Effect: Increases defense by 10.',
						id: '638a4d48a44f4fa4b0dec9c2',
						name: 'Defense Boost',
						grade: 225,
					},
				],
			},
		],
		name: 'Steel Defense',
		grade: 227,
		traitCategories: ['ARMOR'],
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
						grade: 225,
					},
					{
						description: 'Enhances armor defense. Effect: Increases defense by 15.',
						id: '638a4d48a44f4fa4b0dec9c6',
						name: 'Defense Super Enhance',
						grade: 226,
					},
				],
			},
		],
		name: 'Diamond Defense',
		grade: 228,
		traitCategories: ['ARMOR'],
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
						grade: 227,
					},
					{
						description: 'Effect: Increases defense by 25.',
						id: '638a4d48a44f4fa4b0dec9cc',
						name: 'Diamond Defense',
						grade: 228,
					},
				],
			},
		],
		name: 'Dragonscale Defense',
		grade: 229,
		traitCategories: ['ARMOR'],
	},
	{
		description: 'Accessories with this will increase speed. Effect: Increases speed by 7.',
		id: '638a4d48a44f4fa4b0dec9c7',
		mergeFrom: [],
		name: 'Speed Enhance',
		grade: 230,
		traitCategories: ['ACCESSORY'],
	},
	{
		description: 'Accessories with this will increase speed. Effect: Increases speed by 10.',
		id: '638a4d48a44f4fa4b0dec9c9',
		mergeFrom: [],
		name: 'Speed Boost',
		grade: 231,
		traitCategories: ['ACCESSORY'],
	},
	{
		description: 'Accessories with this will increase speed. Effect: Increases speed by 15.',
		id: '638a4d48a44f4fa4b0dec9d0',
		mergeFrom: [],
		name: 'Speed Super Enhance',
		grade: 232,
		traitCategories: ['ACCESSORY'],
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
						grade: 230,
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 10.',
						id: '638a4d48a44f4fa4b0dec9c9',
						name: 'Speed Boost',
						grade: 231,
					},
				],
			},
		],
		name: 'Speed of Skanda',
		grade: 233,
		traitCategories: ['ACCESSORY'],
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
						grade: 231,
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 15.',
						id: '638a4d48a44f4fa4b0dec9d0',
						name: 'Speed Super Enhance',
						grade: 232,
					},
				],
			},
		],
		name: 'Speed of Gods',
		grade: 234,
		traitCategories: ['ACCESSORY'],
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
						grade: 233,
					},
					{
						description: 'Effect: Increases speed by 25.',
						id: '638a4d48a44f4fa4b0dec9d1',
						name: 'Speed of Gods',
						grade: 234,
					},
				],
			},
		],
		name: 'Speed of Light',
		grade: 235,
		traitCategories: ['ACCESSORY'],
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
						grade: 218,
					},
					{
						description: 'Enhances armor defense. Effect: Increases defense by 7.',
						id: '638a4d48a44f4fa4b0dec9c1',
						name: 'Defense Enhance',
						grade: 224,
					},
				],
			},
		],
		name: 'ATK DEF Enhance',
		grade: 236,
		traitCategories: ['ARMOR', 'WEAPON'],
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
						grade: 218,
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 7.',
						id: '638a4d48a44f4fa4b0dec9c7',
						name: 'Speed Enhance',
						grade: 230,
					},
				],
			},
		],
		name: 'ATK SPD Enhance',
		grade: 237,
		traitCategories: ['ACCESSORY', 'WEAPON'],
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
						grade: 224,
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 7.',
						id: '638a4d48a44f4fa4b0dec9c7',
						name: 'Speed Enhance',
						grade: 230,
					},
				],
			},
		],
		name: 'DEF SPD Enhance',
		grade: 238,
		traitCategories: ['ACCESSORY', 'ARMOR'],
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
						grade: 236,
					},
					{
						description: 'Effect: Increases attack & speed by 5.',
						id: '638a4d48a44f4fa4b0dec9d4',
						name: 'ATK SPD Enhance',
						grade: 237,
					},
				],
			},
			{
				consist: [
					{
						description: 'Effect: Increases attack & defense by 5.',
						id: '638a4d48a44f4fa4b0dec9d8',
						name: 'ATK DEF Enhance',
						grade: 236,
					},
					{
						description: 'Effect: Increases defense & speed by 5.',
						id: '638a4d48a44f4fa4b0dec9d6',
						name: 'DEF SPD Enhance',
						grade: 238,
					},
				],
			},
			{
				consist: [
					{
						description: 'Effect: Increases attack & speed by 5.',
						id: '638a4d48a44f4fa4b0dec9d4',
						name: 'ATK SPD Enhance',
						grade: 237,
					},
					{
						description: 'Effect: Increases defense & speed by 5.',
						id: '638a4d48a44f4fa4b0dec9d6',
						name: 'DEF SPD Enhance',
						grade: 238,
					},
				],
			},
		],
		name: 'All Stat Enhance',
		grade: 239,
		traitCategories: ['ACCESSORY', 'ARMOR', 'WEAPON'],
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
						grade: 219,
					},
					{
						description: 'Enhances armor defense. Effect: Increases defense by 10.',
						id: '638a4d48a44f4fa4b0dec9c2',
						name: 'Defense Boost',
						grade: 225,
					},
				],
			},
		],
		name: 'ATK DEF Boost',
		grade: 240,
		traitCategories: ['ACCESSORY', 'ARMOR', 'WEAPON'],
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
						grade: 219,
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 10.',
						id: '638a4d48a44f4fa4b0dec9c9',
						name: 'Speed Boost',
						grade: 231,
					},
				],
			},
		],
		name: 'ATK SPD Boost',
		grade: 241,
		traitCategories: ['ACCESSORY', 'WEAPON'],
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
						grade: 225,
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 10.',
						id: '638a4d48a44f4fa4b0dec9c9',
						name: 'Speed Boost',
						grade: 231,
					},
				],
			},
		],
		name: 'DEF SPD Boost',
		grade: 242,
		traitCategories: ['ACCESSORY', 'ARMOR'],
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
						grade: 240,
					},
					{
						description: 'Effect: Increases attack & speed by 7.',
						id: '638a4d48a44f4fa4b0dec9db',
						name: 'ATK SPD Boost',
						grade: 241,
					},
				],
			},
			{
				consist: [
					{
						description: 'Effect: Increases attack & defense by 7.',
						id: '638a4d48a44f4fa4b0dec9d2',
						name: 'ATK DEF Boost',
						grade: 240,
					},
					{
						description: 'Effect: Increases defense & speed by 7.',
						id: '638a4d48a44f4fa4b0dec9d9',
						name: 'DEF SPD Boost',
						grade: 242,
					},
				],
			},
			{
				consist: [
					{
						description: 'Effect: Increases attack & speed by 7.',
						id: '638a4d48a44f4fa4b0dec9db',
						name: 'ATK SPD Boost',
						grade: 241,
					},
					{
						description: 'Effect: Increases defense & speed by 7.',
						id: '638a4d48a44f4fa4b0dec9d9',
						name: 'DEF SPD Boost',
						grade: 242,
					},
				],
			},
		],
		name: 'All Stat Boost',
		grade: 243,
		traitCategories: ['ACCESSORY', 'ARMOR', 'WEAPON'],
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
						grade: 239,
					},
					{
						description: 'Effect: Increases all stats by 7.',
						id: '638a4d48a44f4fa4b0dec9e4',
						name: 'All Stat Boost',
						grade: 243,
					},
				],
			},
		],
		name: 'All Stat Super Enhance',
		grade: 244,
		traitCategories: ['ACCESSORY', 'ARMOR', 'WEAPON'],
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
						grade: 243,
					},
					{
						description: 'Effect: Increases all stats except resistances by 10.',
						id: '638a4d48a44f4fa4b0dec9d7',
						name: 'All Stat Super Enhance',
						grade: 244,
					},
				],
			},
		],
		name: 'Well Rounded Power',
		grade: 245,
		traitCategories: ['ACCESSORY', 'ARMOR', 'WEAPON'],
	},
	{
		description: 'Effect: Increases maximum HP and MP by 50.',
		id: '638a4d48a44f4fa4b0dec9dd',
		mergeFrom: [],
		name: 'Flawless Body',
		grade: 246,
		traitCategories: ['ARMOR'],
	},
	{
		description: 'Effect: Increases defense by 30, and increases all base stats by 15%.',
		id: '638a4d48a44f4fa4b0dec9dc',
		mergeFrom: [],
		name: 'Tenacious Body',
		grade: 247,
		traitCategories: ['ARMOR'],
	},
	{
		description: 'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 10%.',
		id: '638a4d48a44f4fa4b0dec9de',
		mergeFrom: [],
		name: 'Consume MP -10%',
		grade: 298,
		traitCategories: ['ACCESSORY', 'WEAPON'],
	},
	{
		description: 'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 15%.',
		id: '638a4d48a44f4fa4b0dec9e0',
		mergeFrom: [],
		name: 'Consume MP -15%',
		grade: 299,
		traitCategories: ['ACCESSORY', 'WEAPON'],
	},
	{
		description: 'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 20%.',
		id: '638a4d48a44f4fa4b0dec9e1',
		mergeFrom: [],
		name: 'Consume MP -20%',
		grade: 300,
		traitCategories: ['ACCESSORY', 'WEAPON'],
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
						grade: 298,
					},
					{
						description:
							'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 15%.',
						id: '638a4d48a44f4fa4b0dec9e0',
						name: 'Consume MP -15%',
						grade: 299,
					},
				],
			},
		],
		name: 'Cut MP Consume',
		grade: 301,
		traitCategories: ['ACCESSORY', 'WEAPON'],
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
						grade: 299,
					},
					{
						description:
							'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 20%.',
						id: '638a4d48a44f4fa4b0dec9e1',
						name: 'Consume MP -20%',
						grade: 300,
					},
				],
			},
		],
		name: 'Compact MP Consume',
		grade: 302,
		traitCategories: ['ACCESSORY', 'WEAPON'],
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
						grade: 301,
					},
					{
						description: 'Effect: Reduces MP consumption of skills by 30%.',
						id: '638a4d48a44f4fa4b0dec9e7',
						name: 'Compact MP Consume',
						grade: 302,
					},
				],
			},
		],
		name: 'Halve MP Consume',
		grade: 303,
		traitCategories: ['ACCESSORY', 'WEAPON'],
	},
	{
		description: 'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 5%.',
		id: '638a4d48a44f4fa4b0dec9e2',
		mergeFrom: [],
		name: 'Skill Power +5%',
		grade: 304,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 7%.',
		id: '638a4d48a44f4fa4b0dec9e5',
		mergeFrom: [],
		name: 'Skill Power +7%',
		grade: 305,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 10%.',
		id: '638a4d48a44f4fa4b0dec9e6',
		mergeFrom: [],
		name: 'Skill Power +10%',
		grade: 306,
		traitCategories: ['WEAPON'],
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
						grade: 304,
					},
					{
						description:
							'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 7%.',
						id: '638a4d48a44f4fa4b0dec9e5',
						name: 'Skill Power +7%',
						grade: 305,
					},
				],
			},
		],
		name: 'Skill Enhance',
		grade: 307,
		traitCategories: ['WEAPON'],
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
						grade: 305,
					},
					{
						description:
							'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 10%.',
						id: '638a4d48a44f4fa4b0dec9e6',
						name: 'Skill Power +10%',
						grade: 306,
					},
				],
			},
		],
		name: 'Skill Boost',
		grade: 308,
		traitCategories: ['WEAPON'],
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
						grade: 307,
					},
					{
						description: 'Effect: Increases skill power and MP consumption by 17%.',
						id: '638a4d48a44f4fa4b0dec9eb',
						name: 'Skill Boost',
						grade: 308,
					},
				],
			},
		],
		name: 'Skill Super Enhance',
		grade: 309,
		traitCategories: ['WEAPON'],
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
						grade: 301,
					},
					{
						description: 'Effect: Increases skill power and MP consumption by 12%.',
						id: '638a4d48a44f4fa4b0dec9ee',
						name: 'Skill Enhance',
						grade: 307,
					},
				],
			},
		],
		name: 'Eco Skill',
		grade: 310,
		traitCategories: ['WEAPON'],
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
						grade: 302,
					},
					{
						description: 'Effect: Increases skill power and MP consumption by 17%.',
						id: '638a4d48a44f4fa4b0dec9eb',
						name: 'Skill Boost',
						grade: 308,
					},
				],
			},
		],
		name: 'Skill Cost Compress',
		grade: 311,
		traitCategories: ['WEAPON'],
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
						grade: 303,
					},
					{
						description: 'Effect: Increases skill power and MP consumption by 30%.',
						id: '638a4d48a44f4fa4b0dec9ef',
						name: 'Skill Super Enhance',
						grade: 309,
					},
				],
			},
		],
		name: 'Skill Savings',
		grade: 312,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases skill power by 25%, and reduces MP consumption by 25%.',
		id: '638a4d48a44f4fa4b0dec9e8',
		mergeFrom: [],
		name: 'Expert Skill',
		grade: 313,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases skill power by 35%, and reduces MP consumption by 35%.',
		id: '638a4d48a44f4fa4b0dec9ec',
		mergeFrom: [],
		name: 'Super Skill',
		grade: 314,
		traitCategories: ['WEAPON'],
	},
	{
		description: "Effect: Massively increases the target's level.",
		id: '638a4d48a44f4fa4b0dec9e9',
		mergeFrom: [],
		name: 'Soul Dwelling',
		grade: 349,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: "Effect: Massively increases the target's attack power.",
		id: '638a4d48a44f4fa4b0dec9f0',
		mergeFrom: [],
		name: 'Blessing of Strength',
		grade: 350,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: "Effect: Massively increases the target's defense.",
		id: '638a4d48a44f4fa4b0dec9ea',
		mergeFrom: [],
		name: 'Blessing of Protection',
		grade: 351,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: "Effect: Massively increases the target's speed.",
		id: '638a4d48a44f4fa4b0dec9f3',
		mergeFrom: [],
		name: 'Blessing of Skanda',
		grade: 352,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Has a chance to inflict Sleep when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9f4',
		mergeFrom: [],
		name: 'Inflict Sleep',
		grade: 365,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict Poison when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9f5',
		mergeFrom: [],
		name: 'Inflict Poison',
		grade: 366,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict Slow when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9f6',
		mergeFrom: [],
		name: 'Inflict Slow',
		grade: 367,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict Curse when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9fa',
		mergeFrom: [],
		name: 'Inflict Curse',
		grade: 368,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict Blind when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9fb',
		mergeFrom: [],
		name: 'Inflict Blind',
		grade: 369,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict Weak when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9f8',
		mergeFrom: [],
		name: 'Inflict Weak',
		grade: 370,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict No Heal when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9f7',
		mergeFrom: [],
		name: 'Inflict No Heal',
		grade: 371,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict Seal when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9fc',
		mergeFrom: [],
		name: 'Inflict Seal',
		grade: 372,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: "Effect: Massively reduces the target's level, reducing all stats and damage dealt.",
		id: '638a4d48a44f4fa4b0dec9f9',
		mergeFrom: [],
		name: 'Consume Soul',
		grade: 373,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: "Effect: Massively reduces the target's attack power.",
		id: '638a4d48a44f4fa4b0dec9fd',
		mergeFrom: [],
		name: 'Powerless Curse',
		grade: 374,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: "Effect: Massively reduces the target's defense.",
		id: '638a4d48a44f4fa4b0dec9fe',
		mergeFrom: [],
		name: 'Defenseless Curse',
		grade: 375,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: "Effect: Massively reduces the target's speed.",
		id: '638a4d48a44f4fa4b0dec9ff',
		mergeFrom: [],
		name: 'Slowness Curse',
		grade: 376,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Absorb 3% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca02',
		mergeFrom: [],
		name: 'Damage Absorb',
		grade: 401,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Absorb 5% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca03',
		mergeFrom: [],
		name: 'Damage Absorb+',
		grade: 402,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Absorb 7% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca01',
		mergeFrom: [],
		name: 'Damage Absorb++',
		grade: 403,
		traitCategories: ['WEAPON'],
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
						grade: 401,
					},
					{
						description: 'Effect: Absorb 5% of damage dealt through attacks to restore your own HP.',
						id: '638a4d48a44f4fa4b0deca03',
						name: 'Damage Absorb+',
						grade: 402,
					},
				],
			},
		],
		name: 'HP Absorb',
		grade: 404,
		traitCategories: ['WEAPON'],
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
						grade: 402,
					},
					{
						description: 'Effect: Absorb 7% of damage dealt through attacks to restore your own HP.',
						id: '638a4d48a44f4fa4b0deca01',
						name: 'Damage Absorb++',
						grade: 403,
					},
				],
			},
		],
		name: 'Steal Life',
		grade: 405,
		traitCategories: ['WEAPON'],
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
						grade: 404,
					},
					{
						description: 'Effect: Absorb 10% of damage dealt through attacks to restore your own HP.',
						id: '638a4d48a44f4fa4b0deca06',
						name: 'Steal Life',
						grade: 405,
					},
				],
			},
		],
		name: 'Absorb Soul',
		grade: 406,
		traitCategories: ['WEAPON'],
	},
	{
		description:
			'Effect: Increases attack power by 20, and absorb 10% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca00',
		mergeFrom: [],
		name: 'Over Power',
		grade: 407,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Slag type enemies.',
		id: '638a4d48a44f4fa4b0deca04',
		mergeFrom: [],
		name: 'Slag Slayer',
		grade: 422,
		traitCategories: [],
	},
	{
		description: 'Effect: Increases damage dealt to Plant and Spirit type enemies.',
		id: '638a4d48a44f4fa4b0deca08',
		mergeFrom: [],
		name: 'Spirit Slayer',
		grade: 423,
		traitCategories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Animal and Beast type enemies.',
		id: '638a4d48a44f4fa4b0deca09',
		mergeFrom: [],
		name: 'Beast Slayer',
		grade: 424,
		traitCategories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Demon type enemies.',
		id: '638a4d48a44f4fa4b0deca0a',
		mergeFrom: [],
		name: 'Demon Slayer',
		grade: 425,
		traitCategories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Dragon type enemies.',
		id: '638a4d48a44f4fa4b0deca0b',
		mergeFrom: [],
		name: 'Dragon Slayer',
		grade: 426,
		traitCategories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to monsters created through magic and alchemy.',
		id: '638a4d48a44f4fa4b0deca0d',
		mergeFrom: [],
		name: 'Magical Slayer',
		grade: 427,
		traitCategories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Puni type enemies.',
		id: '638a4d48a44f4fa4b0deca0f',
		mergeFrom: [],
		name: 'Puni Slayer',
		grade: 428,
		traitCategories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Undead type enemies.',
		id: '638a4d48a44f4fa4b0deca0c',
		mergeFrom: [],
		name: 'Undead Slayer',
		grade: 429,
		traitCategories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Broken targets by 10%.',
		id: '638a4d48a44f4fa4b0deca0e',
		mergeFrom: [],
		name: 'Enhance Finisher',
		grade: 446,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases damage dealt to Broken targets by 20%.',
		id: '638a4d48a44f4fa4b0deca11',
		mergeFrom: [],
		name: 'Enhance Finisher+',
		grade: 447,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases damage dealt to Broken targets by 30%.',
		id: '638a4d48a44f4fa4b0deca12',
		mergeFrom: [],
		name: 'Enhance Finisher++',
		grade: 448,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
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
						grade: 446,
					},
					{
						description: 'Effect: Increases damage dealt to Broken targets by 20%.',
						id: '638a4d48a44f4fa4b0deca11',
						name: 'Enhance Finisher+',
						grade: 447,
					},
				],
			},
		],
		name: 'Merciless Blow',
		grade: 449,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
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
						grade: 447,
					},
					{
						description: 'Effect: Increases damage dealt to Broken targets by 30%.',
						id: '638a4d48a44f4fa4b0deca12',
						name: 'Enhance Finisher++',
						grade: 448,
					},
				],
			},
		],
		name: 'Relentless Blow',
		grade: 450,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
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
						grade: 449,
					},
					{
						description: 'Effect: Increases damage dealt to Broken targets by 40%.',
						id: '638a4d48a44f4fa4b0deca19',
						name: 'Relentless Blow',
						grade: 450,
					},
				],
			},
		],
		name: 'Ruthless Blow',
		grade: 451,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Enhances item effect according to strength of traits present.',
		id: '638a4d48a44f4fa4b0deca17',
		mergeFrom: [],
		name: 'Trait Enhance',
		grade: 464,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Greatly enhances item effect according to strength of traits present.',
		id: '638a4d48a44f4fa4b0deca10',
		mergeFrom: [],
		name: 'Trait Enhance+',
		grade: 465,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 464,
					},
					{
						description: 'Effect: Greatly enhances item effect according to strength of traits present.',
						id: '638a4d48a44f4fa4b0deca10',
						name: 'Trait Enhance+',
						grade: 465,
					},
				],
			},
		],
		name: 'Cost Bonus',
		grade: 466,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description:
			'Effect: Enhances item effect according to strength of traits present. Stronger traits equal ridiculously greater enhancement.',
		id: '638a4d48a44f4fa4b0deca13',
		mergeFrom: [],
		name: 'Trait Super Enhance',
		grade: 467,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by number of targets in effect area x 5%.',
		id: '638a4d48a44f4fa4b0deca14',
		mergeFrom: [],
		name: 'Area Bonus',
		grade: 480,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by number of targets in effect area x 10%.',
		id: '638a4d48a44f4fa4b0deca15',
		mergeFrom: [],
		name: 'Area Bonus+',
		grade: 481,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 480,
					},
					{
						description: 'Effect: Power increases by number of targets in effect area x 10%.',
						id: '638a4d48a44f4fa4b0deca15',
						name: 'Area Bonus+',
						grade: 481,
					},
				],
			},
		],
		name: 'Effective Vs Many',
		grade: 482,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by number of targets in effect area x 20%.',
		id: '638a4d48a44f4fa4b0deca1a',
		mergeFrom: [],
		name: 'Multi Bonus',
		grade: 483,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by 10 / number of targets in effect area %.',
		id: '638a4d48a44f4fa4b0deca18',
		mergeFrom: [],
		name: 'Fewer Bonus',
		grade: 484,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by 15 / number of targets in effect area %.',
		id: '638a4d49a44f4fa4b0deca22',
		mergeFrom: [],
		name: 'Fewer Bonus+',
		grade: 485,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 484,
					},
					{
						description: 'Effect: Power increases by 15 / number of targets in effect area %.',
						id: '638a4d49a44f4fa4b0deca22',
						name: 'Fewer Bonus+',
						grade: 485,
					},
				],
			},
		],
		name: 'Effective Vs One',
		grade: 486,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by 30 / number of targets in effect area %.',
		id: '638a4d49a44f4fa4b0deca1e',
		mergeFrom: [],
		name: 'Single Bonus',
		grade: 487,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description:
			'Effect: Power increases by 20 / number of targets in effect area % + number of targets in effect area x 10%.',
		id: '638a4d49a44f4fa4b0deca1d',
		mergeFrom: [],
		name: 'Few + Many Bonus',
		grade: 488,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by 10% when use count is 1.',
		id: '638a4d49a44f4fa4b0deca29',
		mergeFrom: [],
		name: 'Enhance Last',
		grade: 507,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by 20% when use count is 1.',
		id: '638a4d49a44f4fa4b0deca23',
		mergeFrom: [],
		name: 'Enhance Last+',
		grade: 508,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 507,
					},
					{
						description: 'Effect: Power increases by 20% when use count is 1.',
						id: '638a4d49a44f4fa4b0deca23',
						name: 'Enhance Last+',
						grade: 508,
					},
				],
			},
		],
		name: 'Final Blow',
		grade: 509,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by 45% when use count is 1.',
		id: '638a4d49a44f4fa4b0deca24',
		mergeFrom: [],
		name: 'Last Strike',
		grade: 510,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Completely consumes item in 1 use during battle, but increases power by use count x 3%.',
		id: '638a4d49a44f4fa4b0deca21',
		mergeFrom: [],
		name: 'Count Compress',
		grade: 511,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Completely consumes item in 1 use during battle, but increases power by use count x 5%.',
		id: '638a4d49a44f4fa4b0deca25',
		mergeFrom: [],
		name: 'Count Compress+',
		grade: 512,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 511,
					},
					{
						description:
							'Effect: Completely consumes item in 1 use during battle, but increases power by use count x 5%.',
						id: '638a4d49a44f4fa4b0deca25',
						name: 'Count Compress+',
						grade: 512,
					},
				],
			},
		],
		name: 'Force Final',
		grade: 513,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Completely consumes item in 1 use during battle, but increases power by use count x 10%.',
		id: '638a4d49a44f4fa4b0deca26',
		mergeFrom: [],
		name: 'One Time End',
		grade: 514,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item power by maximum use count x 2%.',
		id: '638a4d49a44f4fa4b0deca2d',
		mergeFrom: [],
		name: 'Count Bonus',
		grade: 515,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item power by maximum use count x 3%.',
		id: '638a4d49a44f4fa4b0deca2c',
		mergeFrom: [],
		name: 'Count Bonus+',
		grade: 516,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 515,
					},
					{
						description: 'Effect: Increases item power by maximum use count x 3%.',
						id: '638a4d49a44f4fa4b0deca2c',
						name: 'Count Bonus+',
						grade: 516,
					},
				],
			},
		],
		name: 'Count Boost',
		grade: 517,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item power by maximum use count x 7%.',
		id: '638a4d49a44f4fa4b0deca3b',
		mergeFrom: [],
		name: 'Enhance with Count',
		grade: 518,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces WT after using item by 10%. Power is decreased slightly.',
		id: '638a4d49a44f4fa4b0deca2a',
		mergeFrom: [],
		name: 'Fast Use',
		grade: 541,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces WT after using item by 20%. Power is decreased a small amount.',
		id: '638a4d49a44f4fa4b0deca2b',
		mergeFrom: [],
		name: 'Fast Use+',
		grade: 542,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 541,
					},
					{
						description: 'Effect: Reduces WT after using item by 20%. Power is decreased a small amount.',
						id: '638a4d49a44f4fa4b0deca2b',
						name: 'Fast Use+',
						grade: 542,
					},
				],
			},
		],
		name: 'Sonic Throw',
		grade: 543,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces WT after using item by 50%.',
		id: '638a4d49a44f4fa4b0deca2e',
		mergeFrom: [],
		name: 'Mach Throw',
		grade: 544,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Wait time after using item increases a little, but power increases a little too.',
		id: '638a4d49a44f4fa4b0deca30',
		mergeFrom: [],
		name: 'Power Throw',
		grade: 545,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Wait time after using item increases, but power increases too.',
		id: '638a4d49a44f4fa4b0deca33',
		mergeFrom: [],
		name: 'Power Throw+',
		grade: 546,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 545,
					},
					{
						description: 'Effect: Wait time after using item increases, but power increases too.',
						id: '638a4d49a44f4fa4b0deca33',
						name: 'Power Throw+',
						grade: 546,
					},
				],
			},
		],
		name: 'Strong Throw',
		grade: 547,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item power by a small amount proportional to wait time after using item.',
		id: '638a4d49a44f4fa4b0deca32',
		mergeFrom: [],
		name: 'Wait Time Enhance',
		grade: 548,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item power by a decent amount proportional to wait time after using item.',
		id: '638a4d49a44f4fa4b0deca31',
		mergeFrom: [],
		name: 'Wait Time Enhance+',
		grade: 549,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 548,
					},
					{
						description:
							'Effect: Increases item power by a decent amount proportional to wait time after using item.',
						id: '638a4d49a44f4fa4b0deca31',
						name: 'Wait Time Enhance+',
						grade: 549,
					},
				],
			},
		],
		name: 'Charge Item',
		grade: 550,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Item size increases by 1 level, equipment cost increases by 5.',
		id: '638a4d49a44f4fa4b0deca3a',
		mergeFrom: [],
		name: 'Size+',
		grade: 571,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Item size increases by 2 levels, equipment cost increases by 10.',
		id: '638a4d49a44f4fa4b0deca3e',
		mergeFrom: [],
		name: 'Jumbo Size',
		grade: 572,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Item size decreases by 1 level, equipment cost decreases by 10.',
		id: '638a4d49a44f4fa4b0deca38',
		mergeFrom: [],
		name: 'Size -',
		grade: 573,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Item size decreases by 2 levels, equipment cost decreases by 20.',
		id: '638a4d49a44f4fa4b0deca39',
		mergeFrom: [],
		name: 'Mini Size',
		grade: 574,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item effect by a decent amount as size increases.',
		id: '638a4d49a44f4fa4b0deca36',
		mergeFrom: [],
		name: 'Size Enhance',
		grade: 575,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item effect as size increases.',
		id: '638a4d49a44f4fa4b0deca3c',
		mergeFrom: [],
		name: 'Size Super Enhance',
		grade: 576,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 575,
					},
					{
						description: 'Effect: Increases item effect as size increases.',
						id: '638a4d49a44f4fa4b0deca3c',
						name: 'Size Super Enhance',
						grade: 576,
					},
				],
			},
		],
		name: 'Crush Dimension',
		grade: 577,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces equipment cost of usable item by 5.',
		id: '638a4d49a44f4fa4b0deca3d',
		mergeFrom: [],
		name: 'Kind of Light',
		grade: 578,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces equipment cost of usable item by 8.',
		id: '638a4d49a44f4fa4b0deca3f',
		mergeFrom: [],
		name: 'Light',
		grade: 579,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 578,
					},
					{
						description: 'Effect: Reduces equipment cost of usable item by 8.',
						id: '638a4d49a44f4fa4b0deca3f',
						name: 'Light',
						grade: 579,
					},
				],
			},
		],
		name: 'Easy to Handle',
		grade: 580,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
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
						grade: 579,
					},
					{
						description: 'Effect: Reduces equipment cost of usable item by 12.',
						id: '638a4d49a44f4fa4b0deca46',
						name: 'Easy to Handle',
						grade: 580,
					},
				],
			},
		],
		name: 'Accustoms Quickly',
		grade: 581,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Zeal factor enhances the material it resides in. Effect: Increases HP and attack.',
		id: '638a4d49a44f4fa4b0deca47',
		mergeFrom: [],
		name: 'Zeal Factor',
		grade: 592,
		traitCategories: ['ACCESSORY'],
	},
	{
		description: 'Happy heart enhances the material it resides in. Effect: Increases MP and defense.',
		id: '638a4d49a44f4fa4b0deca40',
		mergeFrom: [],
		name: 'Happy Heart',
		grade: 593,
		traitCategories: ['ACCESSORY'],
	},
	{
		description: 'Cunning wit enhances the material it resides in. Effect: Increases critical bonus and accuracy.',
		id: '638a4d49a44f4fa4b0deca42',
		mergeFrom: [],
		name: 'Cunning Wit',
		grade: 594,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Splendid glory enhances the material it resides in. Effect: Increases WT delay resistance and Break resistance.',
		id: '638a4d49a44f4fa4b0deca44',
		mergeFrom: [],
		name: 'Splendid Glory',
		grade: 595,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Benevolent light enhances the material it resides in. Effect: Provides damage reversal and immunity to all ailments.',
		id: '638a4d49a44f4fa4b0deca48',
		mergeFrom: [],
		name: 'Benevolent Light',
		grade: 596,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Wild instinct enhances the material it resides in. Effect: Increases speed, reduces wait time after using skills.',
		id: '638a4d49a44f4fa4b0deca41',
		mergeFrom: [],
		name: 'Wild Instinct',
		grade: 597,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Persistent faith enhances the material it resides in. Effect: Provides HP regeneration and chance to avoid KO.',
		id: '638a4d49a44f4fa4b0deca45',
		mergeFrom: [],
		name: 'Persistent Faith',
		grade: 598,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Guiding intuition enhances the material it resides in. Effect: Increases critical hit rate, has a chance to shorten wait time.',
		id: '638a4d49a44f4fa4b0deca4a',
		mergeFrom: [],
		name: 'Guide Intuition',
		grade: 599,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Empty world enhances the material it resides in. Effect: Provides damage conversion, reduces physical damage taken.',
		id: '638a4d49a44f4fa4b0deca49',
		mergeFrom: [],
		name: 'Empty World',
		grade: 600,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Power of madness enhances the material it resides in. Effect: Greatly increases attack power, lose lots of HP each turn.',
		id: '638a4d49a44f4fa4b0deca4c',
		mergeFrom: [],
		name: 'Power of Madness',
		grade: 601,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Burning passion enhances the material it resides in. Effect: Increases all stats by 15, bestows fire and ice resistance.',
		id: '638a4d49a44f4fa4b0deca4e',
		mergeFrom: [],
		name: 'Burning Passion',
		grade: 602,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Unwavering spirit enhances the material it resides in. Effect: Increases all stats by 15, bestows lightning and physical resistance.',
		id: '638a4d49a44f4fa4b0deca4d',
		mergeFrom: [],
		name: 'Unwavering Spirit',
		grade: 603,
		traitCategories: ['ACCESSORY'],
	},
	{
		description: 'Fog of illusion enhances the material it resides in. Effect: Swaps HP and MP, adds evasion chance.',
		id: '638a4d49a44f4fa4b0deca4f',
		mergeFrom: [],
		name: 'Fog of Illusion',
		grade: 604,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Bonds of belief enhances the material it resides in. Effect: Increases assist effect, provides damage conversion.',
		id: '638a4d49a44f4fa4b0deca5a',
		mergeFrom: [],
		name: 'Bonds of Belief',
		grade: 605,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Hammer of justice enhances the material it resides in. Effect: Greatly increases skill power, adds Break value.',
		id: '638a4d49a44f4fa4b0deca52',
		mergeFrom: [],
		name: 'Hammer of Justice',
		grade: 606,
		traitCategories: ['WEAPON'],
	},
	{
		description:
			'Dreadful king enhances the material it resides in. Effect: Causes additional damage and status effects.',
		id: '638a4d49a44f4fa4b0deca51',
		mergeFrom: [],
		name: 'Dreadful King',
		grade: 607,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Unceasing desire enhances the material it resides in. Effect: Absorbs a portion of damage dealt.',
		id: '638a4d49a44f4fa4b0deca55',
		mergeFrom: [],
		name: 'Unceasing Desire',
		grade: 608,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Pursuit of knowledge enhances the material it resides in. Effect: Causes additional damage.',
		id: '638a4d49a44f4fa4b0deca53',
		mergeFrom: [],
		name: 'Pursuit of Knowledge',
		grade: 609,
		traitCategories: ['WEAPON'],
	},
	{
		description:
			'Star of expectation enhances the material it resides in. Effect: Provides enhancement proportional to level.',
		id: '638a4d49a44f4fa4b0deca50',
		mergeFrom: [],
		name: 'Star of Expectation',
		grade: 610,
		traitCategories: ['ARMOR'],
	},
	{
		description:
			'Ray of hope enhances the material it resides in. Effect: Increases maximum HP, provides automatic KO revival.',
		id: '638a4d49a44f4fa4b0deca57',
		mergeFrom: [],
		name: 'Ray of Hope',
		grade: 611,
		traitCategories: ['ARMOR'],
	},
	{
		description:
			'Awakening courage enhances the material it resides in. Effect: Provides a bonus against powerful foes and bosses.',
		id: '638a4d49a44f4fa4b0deca54',
		mergeFrom: [],
		name: 'Awakening Courage',
		grade: 612,
		traitCategories: ['ARMOR'],
	},
	{
		description:
			'Kind soul enhances the material it resides in. Effect: Provides a Burst Mode bonus and gauge fill rate increase.',
		id: '638a4d49a44f4fa4b0deca58',
		mergeFrom: [],
		name: 'Kind Soul',
		grade: 613,
		traitCategories: [],
	},
	{
		description:
			'Indomitable soul enhances the material it resides in. Effect: Provides Break resistance and greatly increases speed of recovering from Break.',
		id: '638a4d49a44f4fa4b0deca59',
		mergeFrom: [],
		name: 'Indomitable Soul',
		grade: 614,
		traitCategories: ['ARMOR'],
	},
	{
		description: 'Effect: Attacks cause 7% additional damage, and increases skill power by 15%.',
		id: '638a4d49a44f4fa4b0deca56',
		mergeFrom: [],
		name: 'Changing Attack',
		grade: 659,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause 15% additional damage, and increases skill power by 10%.',
		id: '638a4d49a44f4fa4b0deca5e',
		mergeFrom: [],
		name: 'Avidya Attack',
		grade: 660,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause 15% additional damage, and increases skill power by 15%.',
		id: '638a4d49a44f4fa4b0deca5c',
		mergeFrom: [],
		name: 'Barrage Attack',
		grade: 661,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause 20% additional damage, and increases skill power by 25%.',
		id: '638a4d49a44f4fa4b0deca5b',
		mergeFrom: [],
		name: 'Skillful Attack',
		grade: 662,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause 15% additional damage, and increases skill power by 20%.',
		id: '638a4d49a44f4fa4b0deca5d',
		mergeFrom: [],
		name: 'Persistent Attack',
		grade: 663,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause between 1 - 50% additional damage.',
		id: '638a4d49a44f4fa4b0deca5f',
		mergeFrom: [],
		name: 'Deadly Attack',
		grade: 664,
		traitCategories: ['WEAPON'],
	},
	{
		description: "Effect: Item automatically activates when the user's HP falls below 20% in battle. Consumes MP.",
		id: '638a4d49a44f4fa4b0deca61',
		mergeFrom: [],
		name: 'Auto Activate 20%',
		grade: 677,
		traitCategories: ['HEAL_ITEM'],
	},
	{
		description: "Effect: Item automatically activates when the user's HP falls below 30% in battle. Consumes MP.",
		id: '638a4d49a44f4fa4b0deca60',
		mergeFrom: [],
		name: 'Auto Activate 30%',
		grade: 678,
		traitCategories: ['HEAL_ITEM'],
	},
	{
		description: "Effect: Item automatically activates when the user's HP falls below 40% in battle. Consumes MP.",
		id: '638a4d49a44f4fa4b0deca63',
		mergeFrom: [],
		name: 'Auto Activate 50%',
		grade: 679,
		traitCategories: ['HEAL_ITEM'],
	},
	{
		description: "Effect: Item automatically activates when the user's HP falls below 50% in battle.",
		id: '638a4d49a44f4fa4b0deca62',
		mergeFrom: [],
		name: 'Auto Use',
		grade: 680,
		traitCategories: ['HEAL_ITEM'],
	},
	{
		description:
			'Effect: Increases item power by 25%, and makes its effect non-attribute. Non-attribute is not affected by any resistances or weaknesses.',
		id: '638a4d49a44f4fa4b0deca67',
		mergeFrom: [],
		name: 'No Attribute',
		grade: 681,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Has a high chance to inflict Poison when dealing damage.',
		id: '638a4d49a44f4fa4b0deca68',
		mergeFrom: [],
		name: 'Poison Mist',
		grade: 682,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: "Effect: Restores some of the target's HP, and also recovers from Poison.",
		id: '638a4d49a44f4fa4b0deca6a',
		mergeFrom: [],
		name: 'Slime Compound',
		grade: 683,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description:
			"Effect: Temporarily increases all of the target's stats. They will also automatically revive on their next turn after being KO'd.",
		id: '638a4d49a44f4fa4b0deca66',
		mergeFrom: [],
		name: 'False Flower',
		grade: 684,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description:
			"Effect: Pushes back the target's turn a little. This effect diminishes with each use until the target takes another turn.",
		id: '638a4d49a44f4fa4b0deca64',
		mergeFrom: [],
		name: 'Electrified',
		grade: 685,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Heat causes continuous damage. The effect is small.',
		id: '638a4d49a44f4fa4b0deca65',
		mergeFrom: [],
		name: 'Carries Heat',
		grade: 686,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: "Effect: Cold reduces the target's speed, and also has a low chance of inflicting Slow.",
		id: '638a4d49a44f4fa4b0deca69',
		mergeFrom: [],
		name: 'Carries Cold',
		grade: 687,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases all stats by 8.',
		id: '638a4d49a44f4fa4b0deca6b',
		mergeFrom: [],
		name: 'Dark Matter',
		grade: 688,
		traitCategories: ['ACCESSORY'],
	},
	{
		description: 'Effect: Increases damage dealt to Puni and magical creatures.',
		id: '638a4d49a44f4fa4b0deca6c',
		mergeFrom: [],
		name: 'Ancient Seal',
		grade: 689,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Reduces skill power by 10%, but also reduces MP consumption by 30%.',
		id: '638a4d49a44f4fa4b0deca71',
		mergeFrom: [],
		name: 'Absorbs Light',
		grade: 690,
		traitCategories: ['ACCESSORY', 'WEAPON'],
	},
	{
		description: "Effect: Reduces the target's defense and speed.",
		id: '638a4d49a44f4fa4b0deca6f',
		mergeFrom: [],
		name: 'Stinks',
		grade: 691,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Restores Break value to the target. Also reduces wait time after turns by a small amount.',
		id: '638a4d49a44f4fa4b0deca6e',
		mergeFrom: [],
		name: 'Sunny Scent',
		grade: 692,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases attack by 7, and attacks cause a small amount of additional damage.',
		id: '638a4d49a44f4fa4b0deca6d',
		mergeFrom: [],
		name: 'Cutting Thread',
		grade: 693,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: The target recovers a small amount of HP, and also recovers from Weak.',
		id: '638a4d49a44f4fa4b0deca72',
		mergeFrom: [],
		name: 'Kirchen Bell Special',
		grade: 694,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: "Effect: Increases the target's evasion rate. This effect lasts 5 turns.",
		id: '638a4d49a44f4fa4b0deca75',
		mergeFrom: [],
		name: 'Flickering Light',
		grade: 695,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases attack item effect by 5%, and also has a chance to cause Weak.',
		id: '638a4d49a44f4fa4b0deca70',
		mergeFrom: [],
		name: 'Unidentified',
		grade: 696,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: The target recovers a small amount of HP, and also recovers from Curse.',
		id: '638a4d49a44f4fa4b0deca76',
		mergeFrom: [],
		name: 'Purifying Water',
		grade: 697,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Price when selling to shops increases quite a lot.',
		id: '638a4d49a44f4fa4b0deca78',
		mergeFrom: [],
		name: 'Golden Radiance',
		grade: 698,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases attack item effect by 15%.',
		id: '638a4d49a44f4fa4b0deca73',
		mergeFrom: [],
		name: 'Super Fine',
		grade: 699,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases defense by 10, and also causes a decent amount of HP recovery each turn.',
		id: '638a4d49a44f4fa4b0deca74',
		mergeFrom: [],
		name: 'Mutated Material',
		grade: 700,
		traitCategories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Effect: Increases recovery item effect by 30%, but increases equipment cost by 5.',
		id: '638a4d49a44f4fa4b0deca77',
		mergeFrom: [],
		name: 'Special Ingredient',
		grade: 701,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description:
			"Effect: Increases the target's maximum HP during battle, and also reduces the effectiveness of status ailments. The effect is small.",
		id: '638a4d49a44f4fa4b0deca7b',
		mergeFrom: [],
		name: 'Secret of Health',
		grade: 702,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases critical hit rate, and also increases damage dealt to Broken targets.',
		id: '638a4d49a44f4fa4b0deca79',
		mergeFrom: [],
		name: 'Power of Faith',
		grade: 703,
		traitCategories: ['ACCESSORY', 'WEAPON'],
	},
	{
		description: 'Effect: The target recovers from Poison and No Heal ailments.',
		id: '638a4d49a44f4fa4b0deca7a',
		mergeFrom: [],
		name: 'Medicine Compound',
		grade: 704,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases price when selling to shops.',
		id: '638a4d49a44f4fa4b0deca7f',
		mergeFrom: [],
		name: 'Rainbow Radiance',
		grade: 705,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Demon and Undead enemies.',
		id: '638a4d49a44f4fa4b0deca7c',
		mergeFrom: [],
		name: 'Wards Evil',
		grade: 706,
		traitCategories: ['WEAPON'],
	},
	{
		description:
			'Effect: Increases damage dealt to Broken targets by 20%, and a portion of damage dealt is absorbed to recover HP.',
		id: '638a4d49a44f4fa4b0deca7e',
		mergeFrom: [],
		name: 'Demon Soul',
		grade: 707,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases all stats by 15, and also increases skill power by 20%.',
		id: '638a4d49a44f4fa4b0deca7d',
		mergeFrom: [],
		name: 'Dragon Soul',
		grade: 708,
		traitCategories: ['WEAPON'],
	},
];

export default traits;
