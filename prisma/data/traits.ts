import type { Trait } from '@prisma/client';

const traits: Trait[] = [
	{
		description: 'Effect: Price when selling to shops decreases a little, but also decreases duplication price.',
		id: '638a4d47a44f4fa4b0dec965',
		mergeFrom: [],
		name: 'Low Price',
		noId: 0,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops decreases quite a bit, but also decreases duplication price.',
		id: '638a4d47a44f4fa4b0dec96a',
		mergeFrom: [],
		name: 'Low Price+',
		noId: 1,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops decreases quite a lot, but also decreases duplication price.',
		id: '638a4d47a44f4fa4b0dec968',
		mergeFrom: [],
		name: 'Low Price++',
		noId: 2,
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
						noId: 0,
					},
					{
						description:
							'Effect: Price when selling to shops decreases quite a bit, but also decreases duplication price.',
						id: '638a4d47a44f4fa4b0dec96a',
						name: 'Low Price+',
						noId: 1,
					},
				],
			},
		],
		name: 'Common Item',
		noId: 3,
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
						noId: 1,
					},
					{
						description:
							'Effect: Price when selling to shops decreases quite a lot, but also decreases duplication price.',
						id: '638a4d47a44f4fa4b0dec968',
						name: 'Low Price++',
						noId: 2,
					},
				],
			},
		],
		name: 'Mass Produced',
		noId: 4,
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
						noId: 3,
					},
					{
						description:
							'Effect: Price when selling to shops decreases massively, but also decreases duplication price.',
						id: '638a4d47a44f4fa4b0dec96b',
						name: 'Mass Produced',
						noId: 4,
					},
				],
			},
		],
		name: 'No Price',
		noId: 5,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops increases a little.',
		id: '638a4d47a44f4fa4b0dec967',
		mergeFrom: [],
		name: 'High Price',
		noId: 6,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops increases quite a bit.',
		id: '638a4d47a44f4fa4b0dec962',
		mergeFrom: [],
		name: 'High Price+',
		noId: 7,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Price when selling to shops increases quite a lot.',
		id: '638a4d47a44f4fa4b0dec966',
		mergeFrom: [],
		name: 'High Price++',
		noId: 8,
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
						noId: 6,
					},
					{
						description: 'Effect: Price when selling to shops increases quite a bit.',
						id: '638a4d47a44f4fa4b0dec962',
						name: 'High Price+',
						noId: 7,
					},
				],
			},
		],
		name: 'High Class',
		noId: 9,
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
						noId: 7,
					},
					{
						description: 'Effect: Price when selling to shops increases quite a lot.',
						id: '638a4d47a44f4fa4b0dec966',
						name: 'High Price++',
						noId: 8,
					},
				],
			},
		],
		name: 'Rare Item',
		noId: 10,
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
						noId: 9,
					},
					{
						description: 'Effect: Price when selling to shops increases massively.',
						id: '638a4d47a44f4fa4b0dec96d',
						name: 'Rare Item',
						noId: 10,
					},
				],
			},
		],
		name: 'Premium Price',
		noId: 11,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases item quality by 10% when this trait is transferred.',
		id: '638a4d47a44f4fa4b0dec982',
		mergeFrom: [],
		name: 'Quality Up',
		noId: 12,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases item quality by 15% when this trait is transferred.',
		id: '638a4d47a44f4fa4b0dec970',
		mergeFrom: [],
		name: 'Quality Up+',
		noId: 13,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases item quality by 20% when this trait is transferred.',
		id: '638a4d47a44f4fa4b0dec972',
		mergeFrom: [],
		name: 'Quality Up++',
		noId: 14,
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
						noId: 12,
					},
					{
						description: 'Effect: Increases item quality by 15% when this trait is transferred.',
						id: '638a4d47a44f4fa4b0dec970',
						name: 'Quality Up+',
						noId: 13,
					},
				],
			},
		],
		name: 'Well Made',
		noId: 15,
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
						noId: 13,
					},
					{
						description: 'Effect: Increases item quality by 20% when this trait is transferred.',
						id: '638a4d47a44f4fa4b0dec972',
						name: 'Quality Up++',
						noId: 14,
					},
				],
			},
		],
		name: 'Pro Perfection',
		noId: 16,
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
						noId: 15,
					},
					{
						description: 'Effect: Increases item quality by 30% when this trait is transferred.',
						id: '638a4d47a44f4fa4b0dec97e',
						name: 'Pro Perfection',
						noId: 16,
					},
				],
			},
		],
		name: 'Super Quality',
		noId: 17,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases attack item effect by 5%.',
		id: '638a4d47a44f4fa4b0dec96c',
		mergeFrom: [],
		name: 'Destruction Up',
		noId: 52,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases attack item effect by 7%.',
		id: '638a4d47a44f4fa4b0dec96f',
		mergeFrom: [],
		name: 'Destruction Up+',
		noId: 53,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases attack item effect by 10%.',
		id: '638a4d47a44f4fa4b0dec984',
		mergeFrom: [],
		name: 'Destruction Up++',
		noId: 54,
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
						noId: 52,
					},
					{
						description: 'Effect: Increases attack item effect by 7%.',
						id: '638a4d47a44f4fa4b0dec96f',
						name: 'Destruction Up+',
						noId: 53,
					},
				],
			},
		],
		name: 'Big Destruction',
		noId: 55,
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
						noId: 53,
					},
					{
						description: 'Effect: Increases attack item effect by 10%.',
						id: '638a4d47a44f4fa4b0dec984',
						name: 'Destruction Up++',
						noId: 54,
					},
				],
			},
		],
		name: 'Intense Destruction',
		noId: 56,
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
						noId: 55,
					},
					{
						description: 'Effect: Increases attack item effect by 17%.',
						id: '638a4d47a44f4fa4b0dec977',
						name: 'Intense Destruction',
						noId: 56,
					},
				],
			},
		],
		name: 'Ultimate Destruction',
		noId: 57,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases attack item effect by 40%.',
		id: '638a4d47a44f4fa4b0dec979',
		mergeFrom: [],
		name: 'Power to Destroy Gods',
		noId: 58,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Attack item enhanced by a small, fixed amount. Lower power equals stronger enhancement.',
		id: '638a4d47a44f4fa4b0dec978',
		mergeFrom: [],
		name: 'Fixed Power',
		noId: 59,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Attack item enhanced by a fixed amount. Lower power equals stronger enhancement.',
		id: '638a4d47a44f4fa4b0dec976',
		mergeFrom: [],
		name: 'Fixed Power+',
		noId: 60,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Attack item enhanced by a large, fixed amount. Lower power equals stronger enhancement.',
		id: '638a4d47a44f4fa4b0dec97b',
		mergeFrom: [],
		name: 'Fixed Power++',
		noId: 61,
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
						noId: 59,
					},
					{
						description:
							'Effect: Attack item enhanced by a fixed amount. Lower power equals stronger enhancement.',
						id: '638a4d47a44f4fa4b0dec976',
						name: 'Fixed Power+',
						noId: 60,
					},
				],
			},
		],
		name: 'Pain in Numbers',
		noId: 62,
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
						noId: 60,
					},
					{
						description:
							'Effect: Attack item enhanced by a large, fixed amount. Lower power equals stronger enhancement.',
						id: '638a4d47a44f4fa4b0dec97b',
						name: 'Fixed Power++',
						noId: 61,
					},
				],
			},
		],
		name: 'Damage in Numbers',
		noId: 63,
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
						noId: 62,
					},
					{
						description:
							'Effect: Attack item enhanced by a large, fixed amount. Lower power equals stronger enhancement.',
						id: '638a4d47a44f4fa4b0dec97a',
						name: 'Damage in Numbers',
						noId: 63,
					},
				],
			},
		],
		name: 'Big Damage Numbers',
		noId: 64,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description:
			'Effect: Attack item enhanced by a ridiculous, fixed amount. This increase scales with the original value.',
		id: '638a4d47a44f4fa4b0dec97c',
		mergeFrom: [],
		name: 'Legendary Destruction',
		noId: 65,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Attacks cause 5% additional damage, and increases skill power by 5%.',
		id: '638a4d47a44f4fa4b0dec97f',
		mergeFrom: [],
		name: 'Increase Sharpness',
		noId: 66,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause 7% additional damage, and increases skill power by 7%.',
		id: '638a4d47a44f4fa4b0dec980',
		mergeFrom: [],
		name: 'Cuts Easily',
		noId: 67,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause 10% additional damage, and increases skill power by 10%.',
		id: '638a4d47a44f4fa4b0dec97d',
		mergeFrom: [],
		name: 'Increase Aggression',
		noId: 68,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases recovery item effect by 10%.',
		id: '638a4d47a44f4fa4b0dec9a1',
		mergeFrom: [],
		name: 'Recovery Up',
		noId: 103,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases recovery item effect by 15%.',
		id: '638a4d47a44f4fa4b0dec983',
		mergeFrom: [],
		name: 'Recovery Up+',
		noId: 104,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases recovery item effect by 20%.',
		id: '638a4d47a44f4fa4b0dec985',
		mergeFrom: [],
		name: 'Recovery Up++',
		noId: 105,
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
						noId: 103,
					},
					{
						description: 'Effect: Increases recovery item effect by 15%.',
						id: '638a4d47a44f4fa4b0dec983',
						name: 'Recovery Up+',
						noId: 104,
					},
				],
			},
		],
		name: 'Big Recovery',
		noId: 106,
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
						noId: 104,
					},
					{
						description: 'Effect: Increases recovery item effect by 20%.',
						id: '638a4d47a44f4fa4b0dec985',
						name: 'Recovery Up++',
						noId: 105,
					},
				],
			},
		],
		name: 'Intense Recovery',
		noId: 107,
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
						noId: 106,
					},
					{
						description: 'Effect: Increases recovery item effect by 35%.',
						id: '638a4d47a44f4fa4b0dec986',
						name: 'Intense Recovery',
						noId: 107,
					},
				],
			},
		],
		name: 'Ultimate Recovery',
		noId: 108,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases recovery item effect by 40%.',
		id: '638a4d47a44f4fa4b0dec988',
		mergeFrom: [],
		name: 'Blessed by God',
		noId: 109,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Recovery item enhanced by a tiny, fixed amount. Lower power equals stronger effect.',
		id: '638a4d47a44f4fa4b0dec989',
		mergeFrom: [],
		name: 'Fixed Recovery',
		noId: 110,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Recovery item enhanced by a small, fixed amount. Lower power equals stronger effect.',
		id: '638a4d47a44f4fa4b0dec987',
		mergeFrom: [],
		name: 'Fixed Recovery+',
		noId: 111,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Recovery item enhanced by a fixed amount. Lower power equals stronger effect.',
		id: '638a4d47a44f4fa4b0dec98a',
		mergeFrom: [],
		name: 'Fixed Recovery++',
		noId: 112,
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
						noId: 110,
					},
					{
						description:
							'Effect: Recovery item enhanced by a small, fixed amount. Lower power equals stronger effect.',
						id: '638a4d47a44f4fa4b0dec987',
						name: 'Fixed Recovery+',
						noId: 111,
					},
				],
			},
		],
		name: 'Medicine Enhance',
		noId: 113,
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
						noId: 111,
					},
					{
						description: 'Effect: Recovery item enhanced by a fixed amount. Lower power equals stronger effect.',
						id: '638a4d47a44f4fa4b0dec98a',
						name: 'Fixed Recovery++',
						noId: 112,
					},
				],
			},
		],
		name: 'Big Medicine Enhance',
		noId: 114,
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
						noId: 113,
					},
					{
						description: 'Effect: Recovery item enhanced by a fixed amount. Lower power equals stronger effect.',
						id: '638a4d47a44f4fa4b0dec98b',
						name: 'Big Medicine Enhance',
						noId: 114,
					},
				],
			},
		],
		name: 'Super Enhance Recovery',
		noId: 115,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description:
			'Effect: Recovery item enhanced by a ridiculous, fixed amount. This increase scales with the original value.',
		id: '638a4d47a44f4fa4b0dec98c',
		mergeFrom: [],
		name: 'Legendary Recovery',
		noId: 116,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Gives item a 15% chance to critical hit.',
		id: '638a4d47a44f4fa4b0dec990',
		mergeFrom: [],
		name: 'Critical',
		noId: 145,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Gives item a 25% chance to critical hit.',
		id: '638a4d47a44f4fa4b0dec98f',
		mergeFrom: [],
		name: 'Critical+',
		noId: 146,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Gives item a 35% chance to critical hit.',
		id: '638a4d47a44f4fa4b0dec991',
		mergeFrom: [],
		name: 'Critical++',
		noId: 147,
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
						noId: 145,
					},
					{
						description: 'Effect: Gives item a 25% chance to critical hit.',
						id: '638a4d47a44f4fa4b0dec98f',
						name: 'Critical+',
						noId: 146,
					},
				],
			},
		],
		name: 'Critical Finish',
		noId: 148,
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
						noId: 146,
					},
					{
						description: 'Effect: Gives item a 35% chance to critical hit.',
						id: '638a4d47a44f4fa4b0dec991',
						name: 'Critical++',
						noId: 147,
					},
				],
			},
		],
		name: 'Always Critical',
		noId: 149,
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
						noId: 148,
					},
					{
						description: 'Effect: Item will always critical hit.',
						id: '638a4d47a44f4fa4b0dec992',
						name: 'Always Critical',
						noId: 149,
					},
				],
			},
		],
		name: 'One Hit Kill',
		noId: 150,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Reduces item number variation slightly, making it easier to score higher numbers.',
		id: '638a4d47a44f4fa4b0dec998',
		mergeFrom: [],
		name: 'Stable Effect',
		noId: 151,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces item number variation a little, making it easier to score higher numbers.',
		id: '638a4d47a44f4fa4b0dec996',
		mergeFrom: [],
		name: 'Stable Effect+',
		noId: 152,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces item number variation, making it easier to score higher numbers.',
		id: '638a4d47a44f4fa4b0dec999',
		mergeFrom: [],
		name: 'Stable Effect++',
		noId: 153,
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
						noId: 151,
					},
					{
						description:
							'Effect: Reduces item number variation a little, making it easier to score higher numbers.',
						id: '638a4d47a44f4fa4b0dec996',
						name: 'Stable Effect+',
						noId: 152,
					},
				],
			},
		],
		name: 'Stability Emphasis',
		noId: 154,
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
						noId: 152,
					},
					{
						description: 'Effect: Reduces item number variation, making it easier to score higher numbers.',
						id: '638a4d47a44f4fa4b0dec999',
						name: 'Stable Effect++',
						noId: 153,
					},
				],
			},
		],
		name: 'Solid Effect',
		noId: 155,
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
						noId: 154,
					},
					{
						description: 'Effect: Halves item number variation, making it easier to score higher numbers.',
						id: '638a4d48a44f4fa4b0dec9ca',
						name: 'Solid Effect',
						noId: 155,
					},
				],
			},
		],
		name: 'Boost Expected Value',
		noId: 156,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item use count by 1. Power is reduced a little.',
		id: '638a4d47a44f4fa4b0dec99a',
		mergeFrom: [],
		name: 'Use Count +1',
		noId: 172,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item use count by 2. Power is reduced slightly.',
		id: '638a4d47a44f4fa4b0dec99b',
		mergeFrom: [],
		name: 'Use Count +2',
		noId: 173,
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
						noId: 172,
					},
					{
						description: 'Effect: Increases item use count by 2. Power is reduced slightly.',
						id: '638a4d47a44f4fa4b0dec99b',
						name: 'Use Count +2',
						noId: 173,
					},
				],
			},
		],
		name: 'Multiply',
		noId: 174,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces item use count by 1. Power is increased a little.',
		id: '638a4d47a44f4fa4b0dec99c',
		mergeFrom: [],
		name: 'Use Count -1',
		noId: 175,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces item use count by 2. Power is increased.',
		id: '638a4d47a44f4fa4b0dec99f',
		mergeFrom: [],
		name: 'Use Count -2',
		noId: 176,
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
						noId: 175,
					},
					{
						description: 'Effect: Reduces item use count by 2. Power is increased.',
						id: '638a4d47a44f4fa4b0dec99f',
						name: 'Use Count -2',
						noId: 176,
					},
				],
			},
		],
		name: 'Reduction',
		noId: 177,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 10.',
		id: '638a4d47a44f4fa4b0dec99e',
		mergeFrom: [],
		name: 'HP Enhance',
		noId: 190,
		traitCategories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 15.',
		id: '638a4d48a44f4fa4b0dec9cd',
		mergeFrom: [],
		name: 'HP Boost',
		noId: 191,
		traitCategories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 25.',
		id: '638a4d47a44f4fa4b0dec9a2',
		mergeFrom: [],
		name: 'HP Super Enhance',
		noId: 192,
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
						noId: 190,
					},
					{
						description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 15.',
						id: '638a4d48a44f4fa4b0dec9cd',
						name: 'HP Boost',
						noId: 191,
					},
				],
			},
		],
		name: 'Full of Life',
		noId: 193,
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
						noId: 190,
					},
					{
						description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 15.',
						id: '638a4d48a44f4fa4b0dec9cd',
						name: 'HP Boost',
						noId: 191,
					},
				],
			},
		],
		name: 'Full of Life',
		noId: 193,
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
						noId: 191,
					},
					{
						description: 'Bestows a maximum HP increase. Effect: Maximum HP increases by 25.',
						id: '638a4d47a44f4fa4b0dec9a2',
						name: 'HP Super Enhance',
						noId: 192,
					},
				],
			},
		],
		name: 'Overflowing Life',
		noId: 194,
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
						noId: 193,
					},
					{
						description: 'Effect: Maximum HP increases by 40.',
						id: '638a4d47a44f4fa4b0dec9a9',
						name: 'Overflowing Life',
						noId: 194,
					},
				],
			},
		],
		name: 'Power of Life',
		noId: 195,
		traitCategories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 10.',
		id: '638a4d47a44f4fa4b0dec9a6',
		mergeFrom: [],
		name: 'MP Enhance',
		noId: 196,
		traitCategories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 15.',
		id: '638a4d47a44f4fa4b0dec9a7',
		mergeFrom: [],
		name: 'MP Boost',
		noId: 197,
		traitCategories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 25.',
		id: '638a4d47a44f4fa4b0dec9aa',
		mergeFrom: [],
		name: 'MP Super Enhance',
		noId: 198,
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
						noId: 196,
					},
					{
						description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 15.',
						id: '638a4d47a44f4fa4b0dec9a7',
						name: 'MP Boost',
						noId: 197,
					},
				],
			},
		],
		name: "Magician's Wisdom",
		noId: 199,
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
						noId: 197,
					},
					{
						description: 'Bestows a maximum MP increase. Effect: Maximum MP increases by 25.',
						id: '638a4d47a44f4fa4b0dec9aa',
						name: 'MP Super Enhance',
						noId: 198,
					},
				],
			},
		],
		name: "Grand Magician's Wisdom",
		noId: 200,
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
						noId: 199,
					},
					{
						description: 'Effect: Maximum MP increases by 40.',
						id: '638a4d47a44f4fa4b0dec9ab',
						name: "Grand Magician's Wisdom",
						noId: 200,
					},
				],
			},
		],
		name: 'Wisdom of the Gods',
		noId: 201,
		traitCategories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 5.',
		id: '638a4d47a44f4fa4b0dec9ac',
		mergeFrom: [],
		name: 'LP Enhance',
		noId: 202,
		traitCategories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 7.',
		id: '638a4d47a44f4fa4b0dec9ae',
		mergeFrom: [],
		name: 'LP Boost',
		noId: 203,
		traitCategories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 10.',
		id: '638a4d48a44f4fa4b0dec9af',
		mergeFrom: [],
		name: 'LP Super Enhance',
		noId: 204,
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
						noId: 202,
					},
					{
						description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 7.',
						id: '638a4d47a44f4fa4b0dec9ae',
						name: 'LP Boost',
						noId: 203,
					},
				],
			},
		],
		name: 'Full of Stamina',
		noId: 205,
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
						noId: 203,
					},
					{
						description: 'Bestows a maximum LP increase. Effect: Maximum LP increases by 10.',
						id: '638a4d48a44f4fa4b0dec9af',
						name: 'LP Super Enhance',
						noId: 204,
					},
				],
			},
		],
		name: 'Unabating Stamina',
		noId: 206,
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
						noId: 205,
					},
					{
						description: 'Effect: Maximum LP increases by 17.',
						id: '638a4d48a44f4fa4b0dec9b1',
						name: 'Unabating Stamina',
						noId: 206,
					},
				],
			},
		],
		name: 'Infinite Stamina',
		noId: 207,
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
						noId: 193,
					},
					{
						description: 'Effect: Maximum MP increases by 25.',
						id: '638a4d47a44f4fa4b0dec9ad',
						name: "Magician's Wisdom",
						noId: 199,
					},
				],
			},
		],
		name: 'HPMP Enhance',
		noId: 208,
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
						noId: 194,
					},
					{
						description: 'Effect: Maximum MP increases by 40.',
						id: '638a4d47a44f4fa4b0dec9ab',
						name: "Grand Magician's Wisdom",
						noId: 200,
					},
				],
			},
		],
		name: 'HPMP Boost',
		noId: 209,
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
						noId: 195,
					},
					{
						description: 'Effect: Maximum MP increases by 70.',
						id: '638a4d48a44f4fa4b0dec9b4',
						name: 'Wisdom of the Gods',
						noId: 201,
					},
				],
			},
		],
		name: 'HPMP Super Enhance',
		noId: 210,
		traitCategories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Bestows a stat boost. Effect: Increases base stats by 5%.',
		id: '638a4d48a44f4fa4b0dec9b3',
		mergeFrom: [],
		name: 'Parameters +5%',
		noId: 211,
		traitCategories: ['ARMOR'],
	},
	{
		description: 'Bestows a stat boost. Effect: Increases base stats by 6%.',
		id: '638a4d48a44f4fa4b0dec9b6',
		mergeFrom: [],
		name: 'Parameters +6%',
		noId: 212,
		traitCategories: ['ARMOR'],
	},
	{
		description: 'Bestows a stat boost. Effect: Increases base stats by 7%.',
		id: '638a4d48a44f4fa4b0dec9bc',
		mergeFrom: [],
		name: 'Parameters +7%',
		noId: 213,
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
						noId: 211,
					},
					{
						description: 'Bestows a stat boost. Effect: Increases base stats by 6%.',
						id: '638a4d48a44f4fa4b0dec9b6',
						name: 'Parameters +6%',
						noId: 212,
					},
				],
			},
		],
		name: 'Enhance the Body',
		noId: 214,
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
						noId: 212,
					},
					{
						description: 'Bestows a stat boost. Effect: Increases base stats by 7%.',
						id: '638a4d48a44f4fa4b0dec9bc',
						name: 'Parameters +7%',
						noId: 213,
					},
				],
			},
		],
		name: 'Draw Out Power',
		noId: 215,
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
						noId: 214,
					},
					{
						description: 'Effect: Increases base stats by 12%.',
						id: '638a4d48a44f4fa4b0dec9be',
						name: 'Draw Out Power',
						noId: 215,
					},
				],
			},
		],
		name: 'Develops the Body',
		noId: 216,
		traitCategories: ['ARMOR'],
	},
	{
		description: 'Effect: Increases base stats by 20%.',
		id: '638a4d48a44f4fa4b0dec9c0',
		mergeFrom: [],
		name: 'Evolves the Body',
		noId: 217,
		traitCategories: ['ARMOR'],
	},
	{
		description: 'Enhances weapon attack power. Effect: Increases attack power by 7.',
		id: '638a4d48a44f4fa4b0dec9d3',
		mergeFrom: [],
		name: 'Attack Enhance',
		noId: 218,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Enhances weapon attack power. Effect: Increases attack power by 10.',
		id: '638a4d48a44f4fa4b0dec9bf',
		mergeFrom: [],
		name: 'Attack Boost',
		noId: 219,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Enhances weapon attack power. Effect: Increases attack power by 15.',
		id: '638a4d48a44f4fa4b0dec9bd',
		mergeFrom: [],
		name: 'Attack Super Enhance',
		noId: 220,
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
						noId: 218,
					},
					{
						description: 'Enhances weapon attack power. Effect: Increases attack power by 10.',
						id: '638a4d48a44f4fa4b0dec9bf',
						name: 'Attack Boost',
						noId: 219,
					},
				],
			},
		],
		name: 'Power of Beasts',
		noId: 221,
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
						noId: 219,
					},
					{
						description: 'Enhances weapon attack power. Effect: Increases attack power by 15.',
						id: '638a4d48a44f4fa4b0dec9bd',
						name: 'Attack Super Enhance',
						noId: 220,
					},
				],
			},
		],
		name: 'Power of Destruction',
		noId: 222,
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
						noId: 221,
					},
					{
						description: 'Effect: Increases attack power by 25.',
						id: '638a4d48a44f4fa4b0dec9c3',
						name: 'Power of Destruction',
						noId: 222,
					},
				],
			},
		],
		name: 'Power of Gods',
		noId: 223,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Enhances armor defense. Effect: Increases defense by 7.',
		id: '638a4d48a44f4fa4b0dec9c1',
		mergeFrom: [],
		name: 'Defense Enhance',
		noId: 224,
		traitCategories: ['ARMOR'],
	},
	{
		description: 'Enhances armor defense. Effect: Increases defense by 10.',
		id: '638a4d48a44f4fa4b0dec9c2',
		mergeFrom: [],
		name: 'Defense Boost',
		noId: 225,
		traitCategories: ['ARMOR'],
	},
	{
		description: 'Enhances armor defense. Effect: Increases defense by 15.',
		id: '638a4d48a44f4fa4b0dec9c6',
		mergeFrom: [],
		name: 'Defense Super Enhance',
		noId: 226,
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
						noId: 224,
					},
					{
						description: 'Enhances armor defense. Effect: Increases defense by 10.',
						id: '638a4d48a44f4fa4b0dec9c2',
						name: 'Defense Boost',
						noId: 225,
					},
				],
			},
		],
		name: 'Steel Defense',
		noId: 227,
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
						noId: 225,
					},
					{
						description: 'Enhances armor defense. Effect: Increases defense by 15.',
						id: '638a4d48a44f4fa4b0dec9c6',
						name: 'Defense Super Enhance',
						noId: 226,
					},
				],
			},
		],
		name: 'Diamond Defense',
		noId: 228,
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
						noId: 227,
					},
					{
						description: 'Effect: Increases defense by 25.',
						id: '638a4d48a44f4fa4b0dec9cc',
						name: 'Diamond Defense',
						noId: 228,
					},
				],
			},
		],
		name: 'Dragonscale Defense',
		noId: 229,
		traitCategories: ['ARMOR'],
	},
	{
		description: 'Accessories with this will increase speed. Effect: Increases speed by 7.',
		id: '638a4d48a44f4fa4b0dec9c7',
		mergeFrom: [],
		name: 'Speed Enhance',
		noId: 230,
		traitCategories: ['ACCESSORY'],
	},
	{
		description: 'Accessories with this will increase speed. Effect: Increases speed by 10.',
		id: '638a4d48a44f4fa4b0dec9c9',
		mergeFrom: [],
		name: 'Speed Boost',
		noId: 231,
		traitCategories: ['ACCESSORY'],
	},
	{
		description: 'Accessories with this will increase speed. Effect: Increases speed by 15.',
		id: '638a4d48a44f4fa4b0dec9d0',
		mergeFrom: [],
		name: 'Speed Super Enhance',
		noId: 232,
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
						noId: 230,
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 10.',
						id: '638a4d48a44f4fa4b0dec9c9',
						name: 'Speed Boost',
						noId: 231,
					},
				],
			},
		],
		name: 'Speed of Skanda',
		noId: 233,
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
						noId: 231,
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 15.',
						id: '638a4d48a44f4fa4b0dec9d0',
						name: 'Speed Super Enhance',
						noId: 232,
					},
				],
			},
		],
		name: 'Speed of Gods',
		noId: 234,
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
						noId: 233,
					},
					{
						description: 'Effect: Increases speed by 25.',
						id: '638a4d48a44f4fa4b0dec9d1',
						name: 'Speed of Gods',
						noId: 234,
					},
				],
			},
		],
		name: 'Speed of Light',
		noId: 235,
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
						noId: 218,
					},
					{
						description: 'Enhances armor defense. Effect: Increases defense by 7.',
						id: '638a4d48a44f4fa4b0dec9c1',
						name: 'Defense Enhance',
						noId: 224,
					},
				],
			},
		],
		name: 'ATK DEF Enhance',
		noId: 236,
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
						noId: 218,
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 7.',
						id: '638a4d48a44f4fa4b0dec9c7',
						name: 'Speed Enhance',
						noId: 230,
					},
				],
			},
		],
		name: 'ATK SPD Enhance',
		noId: 237,
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
						noId: 224,
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 7.',
						id: '638a4d48a44f4fa4b0dec9c7',
						name: 'Speed Enhance',
						noId: 230,
					},
				],
			},
		],
		name: 'DEF SPD Enhance',
		noId: 238,
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
						noId: 236,
					},
					{
						description: 'Effect: Increases attack & speed by 5.',
						id: '638a4d48a44f4fa4b0dec9d4',
						name: 'ATK SPD Enhance',
						noId: 237,
					},
				],
			},
			{
				consist: [
					{
						description: 'Effect: Increases attack & defense by 5.',
						id: '638a4d48a44f4fa4b0dec9d8',
						name: 'ATK DEF Enhance',
						noId: 236,
					},
					{
						description: 'Effect: Increases defense & speed by 5.',
						id: '638a4d48a44f4fa4b0dec9d6',
						name: 'DEF SPD Enhance',
						noId: 238,
					},
				],
			},
			{
				consist: [
					{
						description: 'Effect: Increases attack & speed by 5.',
						id: '638a4d48a44f4fa4b0dec9d4',
						name: 'ATK SPD Enhance',
						noId: 237,
					},
					{
						description: 'Effect: Increases defense & speed by 5.',
						id: '638a4d48a44f4fa4b0dec9d6',
						name: 'DEF SPD Enhance',
						noId: 238,
					},
				],
			},
		],
		name: 'All Stat Enhance',
		noId: 239,
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
						noId: 219,
					},
					{
						description: 'Enhances armor defense. Effect: Increases defense by 10.',
						id: '638a4d48a44f4fa4b0dec9c2',
						name: 'Defense Boost',
						noId: 225,
					},
				],
			},
		],
		name: 'ATK DEF Boost',
		noId: 240,
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
						noId: 219,
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 10.',
						id: '638a4d48a44f4fa4b0dec9c9',
						name: 'Speed Boost',
						noId: 231,
					},
				],
			},
		],
		name: 'ATK SPD Boost',
		noId: 241,
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
						noId: 225,
					},
					{
						description: 'Accessories with this will increase speed. Effect: Increases speed by 10.',
						id: '638a4d48a44f4fa4b0dec9c9',
						name: 'Speed Boost',
						noId: 231,
					},
				],
			},
		],
		name: 'DEF SPD Boost',
		noId: 242,
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
						noId: 240,
					},
					{
						description: 'Effect: Increases attack & speed by 7.',
						id: '638a4d48a44f4fa4b0dec9db',
						name: 'ATK SPD Boost',
						noId: 241,
					},
				],
			},
			{
				consist: [
					{
						description: 'Effect: Increases attack & defense by 7.',
						id: '638a4d48a44f4fa4b0dec9d2',
						name: 'ATK DEF Boost',
						noId: 240,
					},
					{
						description: 'Effect: Increases defense & speed by 7.',
						id: '638a4d48a44f4fa4b0dec9d9',
						name: 'DEF SPD Boost',
						noId: 242,
					},
				],
			},
			{
				consist: [
					{
						description: 'Effect: Increases attack & speed by 7.',
						id: '638a4d48a44f4fa4b0dec9db',
						name: 'ATK SPD Boost',
						noId: 241,
					},
					{
						description: 'Effect: Increases defense & speed by 7.',
						id: '638a4d48a44f4fa4b0dec9d9',
						name: 'DEF SPD Boost',
						noId: 242,
					},
				],
			},
		],
		name: 'All Stat Boost',
		noId: 243,
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
						noId: 239,
					},
					{
						description: 'Effect: Increases all stats by 7.',
						id: '638a4d48a44f4fa4b0dec9e4',
						name: 'All Stat Boost',
						noId: 243,
					},
				],
			},
		],
		name: 'All Stat Super Enhance',
		noId: 244,
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
						noId: 243,
					},
					{
						description: 'Effect: Increases all stats except resistances by 10.',
						id: '638a4d48a44f4fa4b0dec9d7',
						name: 'All Stat Super Enhance',
						noId: 244,
					},
				],
			},
		],
		name: 'Well Rounded Power',
		noId: 245,
		traitCategories: ['ACCESSORY', 'ARMOR', 'WEAPON'],
	},
	{
		description: 'Effect: Increases maximum HP and MP by 50.',
		id: '638a4d48a44f4fa4b0dec9dd',
		mergeFrom: [],
		name: 'Flawless Body',
		noId: 246,
		traitCategories: ['ARMOR'],
	},
	{
		description: 'Effect: Increases defense by 30, and increases all base stats by 15%.',
		id: '638a4d48a44f4fa4b0dec9dc',
		mergeFrom: [],
		name: 'Tenacious Body',
		noId: 247,
		traitCategories: ['ARMOR'],
	},
	{
		description: 'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 10%.',
		id: '638a4d48a44f4fa4b0dec9de',
		mergeFrom: [],
		name: 'Consume MP -10%',
		noId: 298,
		traitCategories: ['ACCESSORY', 'WEAPON'],
	},
	{
		description: 'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 15%.',
		id: '638a4d48a44f4fa4b0dec9e0',
		mergeFrom: [],
		name: 'Consume MP -15%',
		noId: 299,
		traitCategories: ['ACCESSORY', 'WEAPON'],
	},
	{
		description: 'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 20%.',
		id: '638a4d48a44f4fa4b0dec9e1',
		mergeFrom: [],
		name: 'Consume MP -20%',
		noId: 300,
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
						noId: 298,
					},
					{
						description:
							'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 15%.',
						id: '638a4d48a44f4fa4b0dec9e0',
						name: 'Consume MP -15%',
						noId: 299,
					},
				],
			},
		],
		name: 'Cut MP Consume',
		noId: 301,
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
						noId: 299,
					},
					{
						description:
							'Bestows reduced MP consumption effect. Effect: Reduces MP consumption of skills by 20%.',
						id: '638a4d48a44f4fa4b0dec9e1',
						name: 'Consume MP -20%',
						noId: 300,
					},
				],
			},
		],
		name: 'Compact MP Consume',
		noId: 302,
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
						noId: 301,
					},
					{
						description: 'Effect: Reduces MP consumption of skills by 30%.',
						id: '638a4d48a44f4fa4b0dec9e7',
						name: 'Compact MP Consume',
						noId: 302,
					},
				],
			},
		],
		name: 'Halve MP Consume',
		noId: 303,
		traitCategories: ['ACCESSORY', 'WEAPON'],
	},
	{
		description: 'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 5%.',
		id: '638a4d48a44f4fa4b0dec9e2',
		mergeFrom: [],
		name: 'Skill Power +5%',
		noId: 304,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 7%.',
		id: '638a4d48a44f4fa4b0dec9e5',
		mergeFrom: [],
		name: 'Skill Power +7%',
		noId: 305,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 10%.',
		id: '638a4d48a44f4fa4b0dec9e6',
		mergeFrom: [],
		name: 'Skill Power +10%',
		noId: 306,
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
						noId: 304,
					},
					{
						description:
							'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 7%.',
						id: '638a4d48a44f4fa4b0dec9e5',
						name: 'Skill Power +7%',
						noId: 305,
					},
				],
			},
		],
		name: 'Skill Enhance',
		noId: 307,
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
						noId: 305,
					},
					{
						description:
							'Bestows increased skill power effect. Effect: Increases skill power and MP consumption by 10%.',
						id: '638a4d48a44f4fa4b0dec9e6',
						name: 'Skill Power +10%',
						noId: 306,
					},
				],
			},
		],
		name: 'Skill Boost',
		noId: 308,
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
						noId: 307,
					},
					{
						description: 'Effect: Increases skill power and MP consumption by 17%.',
						id: '638a4d48a44f4fa4b0dec9eb',
						name: 'Skill Boost',
						noId: 308,
					},
				],
			},
		],
		name: 'Skill Super Enhance',
		noId: 309,
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
						noId: 301,
					},
					{
						description: 'Effect: Increases skill power and MP consumption by 12%.',
						id: '638a4d48a44f4fa4b0dec9ee',
						name: 'Skill Enhance',
						noId: 307,
					},
				],
			},
		],
		name: 'Eco Skill',
		noId: 310,
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
						noId: 302,
					},
					{
						description: 'Effect: Increases skill power and MP consumption by 17%.',
						id: '638a4d48a44f4fa4b0dec9eb',
						name: 'Skill Boost',
						noId: 308,
					},
				],
			},
		],
		name: 'Skill Cost Compress',
		noId: 311,
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
						noId: 303,
					},
					{
						description: 'Effect: Increases skill power and MP consumption by 30%.',
						id: '638a4d48a44f4fa4b0dec9ef',
						name: 'Skill Super Enhance',
						noId: 309,
					},
				],
			},
		],
		name: 'Skill Savings',
		noId: 312,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases skill power by 25%, and reduces MP consumption by 25%.',
		id: '638a4d48a44f4fa4b0dec9e8',
		mergeFrom: [],
		name: 'Expert Skill',
		noId: 313,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases skill power by 35%, and reduces MP consumption by 35%.',
		id: '638a4d48a44f4fa4b0dec9ec',
		mergeFrom: [],
		name: 'Super Skill',
		noId: 314,
		traitCategories: ['WEAPON'],
	},
	{
		description: "Effect: Massively increases the target's level.",
		id: '638a4d48a44f4fa4b0dec9e9',
		mergeFrom: [],
		name: 'Soul Dwelling',
		noId: 349,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: "Effect: Massively increases the target's attack power.",
		id: '638a4d48a44f4fa4b0dec9f0',
		mergeFrom: [],
		name: 'Blessing of Strength',
		noId: 350,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: "Effect: Massively increases the target's defense.",
		id: '638a4d48a44f4fa4b0dec9ea',
		mergeFrom: [],
		name: 'Blessing of Protection',
		noId: 351,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: "Effect: Massively increases the target's speed.",
		id: '638a4d48a44f4fa4b0dec9f3',
		mergeFrom: [],
		name: 'Blessing of Skanda',
		noId: 352,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Has a chance to inflict Sleep when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9f4',
		mergeFrom: [],
		name: 'Inflict Sleep',
		noId: 365,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict Poison when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9f5',
		mergeFrom: [],
		name: 'Inflict Poison',
		noId: 366,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict Slow when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9f6',
		mergeFrom: [],
		name: 'Inflict Slow',
		noId: 367,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict Curse when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9fa',
		mergeFrom: [],
		name: 'Inflict Curse',
		noId: 368,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict Blind when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9fb',
		mergeFrom: [],
		name: 'Inflict Blind',
		noId: 369,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict Weak when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9f8',
		mergeFrom: [],
		name: 'Inflict Weak',
		noId: 370,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict No Heal when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9f7',
		mergeFrom: [],
		name: 'Inflict No Heal',
		noId: 371,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Has a chance to inflict Seal when dealing damage.',
		id: '638a4d48a44f4fa4b0dec9fc',
		mergeFrom: [],
		name: 'Inflict Seal',
		noId: 372,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: "Effect: Massively reduces the target's level, reducing all stats and damage dealt.",
		id: '638a4d48a44f4fa4b0dec9f9',
		mergeFrom: [],
		name: 'Consume Soul',
		noId: 373,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: "Effect: Massively reduces the target's attack power.",
		id: '638a4d48a44f4fa4b0dec9fd',
		mergeFrom: [],
		name: 'Powerless Curse',
		noId: 374,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: "Effect: Massively reduces the target's defense.",
		id: '638a4d48a44f4fa4b0dec9fe',
		mergeFrom: [],
		name: 'Defenseless Curse',
		noId: 375,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: "Effect: Massively reduces the target's speed.",
		id: '638a4d48a44f4fa4b0dec9ff',
		mergeFrom: [],
		name: 'Slowness Curse',
		noId: 376,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Absorb 3% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca02',
		mergeFrom: [],
		name: 'Damage Absorb',
		noId: 401,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Absorb 5% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca03',
		mergeFrom: [],
		name: 'Damage Absorb+',
		noId: 402,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Absorb 7% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca01',
		mergeFrom: [],
		name: 'Damage Absorb++',
		noId: 403,
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
						noId: 401,
					},
					{
						description: 'Effect: Absorb 5% of damage dealt through attacks to restore your own HP.',
						id: '638a4d48a44f4fa4b0deca03',
						name: 'Damage Absorb+',
						noId: 402,
					},
				],
			},
		],
		name: 'HP Absorb',
		noId: 404,
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
						noId: 402,
					},
					{
						description: 'Effect: Absorb 7% of damage dealt through attacks to restore your own HP.',
						id: '638a4d48a44f4fa4b0deca01',
						name: 'Damage Absorb++',
						noId: 403,
					},
				],
			},
		],
		name: 'Steal Life',
		noId: 405,
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
						noId: 404,
					},
					{
						description: 'Effect: Absorb 10% of damage dealt through attacks to restore your own HP.',
						id: '638a4d48a44f4fa4b0deca06',
						name: 'Steal Life',
						noId: 405,
					},
				],
			},
		],
		name: 'Absorb Soul',
		noId: 406,
		traitCategories: ['WEAPON'],
	},
	{
		description:
			'Effect: Increases attack power by 20, and absorb 10% of damage dealt through attacks to restore your own HP.',
		id: '638a4d48a44f4fa4b0deca00',
		mergeFrom: [],
		name: 'Over Power',
		noId: 407,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Slag type enemies.',
		id: '638a4d48a44f4fa4b0deca04',
		mergeFrom: [],
		name: 'Slag Slayer',
		noId: 422,
		traitCategories: [],
	},
	{
		description: 'Effect: Increases damage dealt to Plant and Spirit type enemies.',
		id: '638a4d48a44f4fa4b0deca08',
		mergeFrom: [],
		name: 'Spirit Slayer',
		noId: 423,
		traitCategories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Animal and Beast type enemies.',
		id: '638a4d48a44f4fa4b0deca09',
		mergeFrom: [],
		name: 'Beast Slayer',
		noId: 424,
		traitCategories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Demon type enemies.',
		id: '638a4d48a44f4fa4b0deca0a',
		mergeFrom: [],
		name: 'Demon Slayer',
		noId: 425,
		traitCategories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Dragon type enemies.',
		id: '638a4d48a44f4fa4b0deca0b',
		mergeFrom: [],
		name: 'Dragon Slayer',
		noId: 426,
		traitCategories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to monsters created through magic and alchemy.',
		id: '638a4d48a44f4fa4b0deca0d',
		mergeFrom: [],
		name: 'Magical Slayer',
		noId: 427,
		traitCategories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Puni type enemies.',
		id: '638a4d48a44f4fa4b0deca0f',
		mergeFrom: [],
		name: 'Puni Slayer',
		noId: 428,
		traitCategories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Undead type enemies.',
		id: '638a4d48a44f4fa4b0deca0c',
		mergeFrom: [],
		name: 'Undead Slayer',
		noId: 429,
		traitCategories: ['ATK_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Broken targets by 10%.',
		id: '638a4d48a44f4fa4b0deca0e',
		mergeFrom: [],
		name: 'Enhance Finisher',
		noId: 446,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases damage dealt to Broken targets by 20%.',
		id: '638a4d48a44f4fa4b0deca11',
		mergeFrom: [],
		name: 'Enhance Finisher+',
		noId: 447,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases damage dealt to Broken targets by 30%.',
		id: '638a4d48a44f4fa4b0deca12',
		mergeFrom: [],
		name: 'Enhance Finisher++',
		noId: 448,
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
						noId: 446,
					},
					{
						description: 'Effect: Increases damage dealt to Broken targets by 20%.',
						id: '638a4d48a44f4fa4b0deca11',
						name: 'Enhance Finisher+',
						noId: 447,
					},
				],
			},
		],
		name: 'Merciless Blow',
		noId: 449,
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
						noId: 447,
					},
					{
						description: 'Effect: Increases damage dealt to Broken targets by 30%.',
						id: '638a4d48a44f4fa4b0deca12',
						name: 'Enhance Finisher++',
						noId: 448,
					},
				],
			},
		],
		name: 'Relentless Blow',
		noId: 450,
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
						noId: 449,
					},
					{
						description: 'Effect: Increases damage dealt to Broken targets by 40%.',
						id: '638a4d48a44f4fa4b0deca19',
						name: 'Relentless Blow',
						noId: 450,
					},
				],
			},
		],
		name: 'Ruthless Blow',
		noId: 451,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Enhances item effect according to strength of traits present.',
		id: '638a4d48a44f4fa4b0deca17',
		mergeFrom: [],
		name: 'Trait Enhance',
		noId: 464,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Greatly enhances item effect according to strength of traits present.',
		id: '638a4d48a44f4fa4b0deca10',
		mergeFrom: [],
		name: 'Trait Enhance+',
		noId: 465,
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
						noId: 464,
					},
					{
						description: 'Effect: Greatly enhances item effect according to strength of traits present.',
						id: '638a4d48a44f4fa4b0deca10',
						name: 'Trait Enhance+',
						noId: 465,
					},
				],
			},
		],
		name: 'Cost Bonus',
		noId: 466,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description:
			'Effect: Enhances item effect according to strength of traits present. Stronger traits equal ridiculously greater enhancement.',
		id: '638a4d48a44f4fa4b0deca13',
		mergeFrom: [],
		name: 'Trait Super Enhance',
		noId: 467,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by number of targets in effect area x 5%.',
		id: '638a4d48a44f4fa4b0deca14',
		mergeFrom: [],
		name: 'Area Bonus',
		noId: 480,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by number of targets in effect area x 10%.',
		id: '638a4d48a44f4fa4b0deca15',
		mergeFrom: [],
		name: 'Area Bonus+',
		noId: 481,
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
						noId: 480,
					},
					{
						description: 'Effect: Power increases by number of targets in effect area x 10%.',
						id: '638a4d48a44f4fa4b0deca15',
						name: 'Area Bonus+',
						noId: 481,
					},
				],
			},
		],
		name: 'Effective Vs Many',
		noId: 482,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by number of targets in effect area x 20%.',
		id: '638a4d48a44f4fa4b0deca1a',
		mergeFrom: [],
		name: 'Multi Bonus',
		noId: 483,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by 10 / number of targets in effect area %.',
		id: '638a4d48a44f4fa4b0deca18',
		mergeFrom: [],
		name: 'Fewer Bonus',
		noId: 484,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by 15 / number of targets in effect area %.',
		id: '638a4d49a44f4fa4b0deca22',
		mergeFrom: [],
		name: 'Fewer Bonus+',
		noId: 485,
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
						noId: 484,
					},
					{
						description: 'Effect: Power increases by 15 / number of targets in effect area %.',
						id: '638a4d49a44f4fa4b0deca22',
						name: 'Fewer Bonus+',
						noId: 485,
					},
				],
			},
		],
		name: 'Effective Vs One',
		noId: 486,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by 30 / number of targets in effect area %.',
		id: '638a4d49a44f4fa4b0deca1e',
		mergeFrom: [],
		name: 'Single Bonus',
		noId: 487,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description:
			'Effect: Power increases by 20 / number of targets in effect area % + number of targets in effect area x 10%.',
		id: '638a4d49a44f4fa4b0deca1d',
		mergeFrom: [],
		name: 'Few + Many Bonus',
		noId: 488,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by 10% when use count is 1.',
		id: '638a4d49a44f4fa4b0deca29',
		mergeFrom: [],
		name: 'Enhance Last',
		noId: 507,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by 20% when use count is 1.',
		id: '638a4d49a44f4fa4b0deca23',
		mergeFrom: [],
		name: 'Enhance Last+',
		noId: 508,
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
						noId: 507,
					},
					{
						description: 'Effect: Power increases by 20% when use count is 1.',
						id: '638a4d49a44f4fa4b0deca23',
						name: 'Enhance Last+',
						noId: 508,
					},
				],
			},
		],
		name: 'Final Blow',
		noId: 509,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Power increases by 45% when use count is 1.',
		id: '638a4d49a44f4fa4b0deca24',
		mergeFrom: [],
		name: 'Last Strike',
		noId: 510,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Completely consumes item in 1 use during battle, but increases power by use count x 3%.',
		id: '638a4d49a44f4fa4b0deca21',
		mergeFrom: [],
		name: 'Count Compress',
		noId: 511,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Completely consumes item in 1 use during battle, but increases power by use count x 5%.',
		id: '638a4d49a44f4fa4b0deca25',
		mergeFrom: [],
		name: 'Count Compress+',
		noId: 512,
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
						noId: 511,
					},
					{
						description:
							'Effect: Completely consumes item in 1 use during battle, but increases power by use count x 5%.',
						id: '638a4d49a44f4fa4b0deca25',
						name: 'Count Compress+',
						noId: 512,
					},
				],
			},
		],
		name: 'Force Final',
		noId: 513,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Completely consumes item in 1 use during battle, but increases power by use count x 10%.',
		id: '638a4d49a44f4fa4b0deca26',
		mergeFrom: [],
		name: 'One Time End',
		noId: 514,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item power by maximum use count x 2%.',
		id: '638a4d49a44f4fa4b0deca2d',
		mergeFrom: [],
		name: 'Count Bonus',
		noId: 515,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item power by maximum use count x 3%.',
		id: '638a4d49a44f4fa4b0deca2c',
		mergeFrom: [],
		name: 'Count Bonus+',
		noId: 516,
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
						noId: 515,
					},
					{
						description: 'Effect: Increases item power by maximum use count x 3%.',
						id: '638a4d49a44f4fa4b0deca2c',
						name: 'Count Bonus+',
						noId: 516,
					},
				],
			},
		],
		name: 'Count Boost',
		noId: 517,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item power by maximum use count x 7%.',
		id: '638a4d49a44f4fa4b0deca3b',
		mergeFrom: [],
		name: 'Enhance with Count',
		noId: 518,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces WT after using item by 10%. Power is decreased slightly.',
		id: '638a4d49a44f4fa4b0deca2a',
		mergeFrom: [],
		name: 'Fast Use',
		noId: 541,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces WT after using item by 20%. Power is decreased a small amount.',
		id: '638a4d49a44f4fa4b0deca2b',
		mergeFrom: [],
		name: 'Fast Use+',
		noId: 542,
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
						noId: 541,
					},
					{
						description: 'Effect: Reduces WT after using item by 20%. Power is decreased a small amount.',
						id: '638a4d49a44f4fa4b0deca2b',
						name: 'Fast Use+',
						noId: 542,
					},
				],
			},
		],
		name: 'Sonic Throw',
		noId: 543,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces WT after using item by 50%.',
		id: '638a4d49a44f4fa4b0deca2e',
		mergeFrom: [],
		name: 'Mach Throw',
		noId: 544,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Wait time after using item increases a little, but power increases a little too.',
		id: '638a4d49a44f4fa4b0deca30',
		mergeFrom: [],
		name: 'Power Throw',
		noId: 545,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Wait time after using item increases, but power increases too.',
		id: '638a4d49a44f4fa4b0deca33',
		mergeFrom: [],
		name: 'Power Throw+',
		noId: 546,
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
						noId: 545,
					},
					{
						description: 'Effect: Wait time after using item increases, but power increases too.',
						id: '638a4d49a44f4fa4b0deca33',
						name: 'Power Throw+',
						noId: 546,
					},
				],
			},
		],
		name: 'Strong Throw',
		noId: 547,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item power by a small amount proportional to wait time after using item.',
		id: '638a4d49a44f4fa4b0deca32',
		mergeFrom: [],
		name: 'Wait Time Enhance',
		noId: 548,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item power by a decent amount proportional to wait time after using item.',
		id: '638a4d49a44f4fa4b0deca31',
		mergeFrom: [],
		name: 'Wait Time Enhance+',
		noId: 549,
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
						noId: 548,
					},
					{
						description:
							'Effect: Increases item power by a decent amount proportional to wait time after using item.',
						id: '638a4d49a44f4fa4b0deca31',
						name: 'Wait Time Enhance+',
						noId: 549,
					},
				],
			},
		],
		name: 'Charge Item',
		noId: 550,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Item size increases by 1 level, equipment cost increases by 5.',
		id: '638a4d49a44f4fa4b0deca3a',
		mergeFrom: [],
		name: 'Size+',
		noId: 571,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Item size increases by 2 levels, equipment cost increases by 10.',
		id: '638a4d49a44f4fa4b0deca3e',
		mergeFrom: [],
		name: 'Jumbo Size',
		noId: 572,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Item size decreases by 1 level, equipment cost decreases by 10.',
		id: '638a4d49a44f4fa4b0deca38',
		mergeFrom: [],
		name: 'Size -',
		noId: 573,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Item size decreases by 2 levels, equipment cost decreases by 20.',
		id: '638a4d49a44f4fa4b0deca39',
		mergeFrom: [],
		name: 'Mini Size',
		noId: 574,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item effect by a decent amount as size increases.',
		id: '638a4d49a44f4fa4b0deca36',
		mergeFrom: [],
		name: 'Size Enhance',
		noId: 575,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases item effect as size increases.',
		id: '638a4d49a44f4fa4b0deca3c',
		mergeFrom: [],
		name: 'Size Super Enhance',
		noId: 576,
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
						noId: 575,
					},
					{
						description: 'Effect: Increases item effect as size increases.',
						id: '638a4d49a44f4fa4b0deca3c',
						name: 'Size Super Enhance',
						noId: 576,
					},
				],
			},
		],
		name: 'Crush Dimension',
		noId: 577,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces equipment cost of usable item by 5.',
		id: '638a4d49a44f4fa4b0deca3d',
		mergeFrom: [],
		name: 'Kind of Light',
		noId: 578,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Reduces equipment cost of usable item by 8.',
		id: '638a4d49a44f4fa4b0deca3f',
		mergeFrom: [],
		name: 'Light',
		noId: 579,
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
						noId: 578,
					},
					{
						description: 'Effect: Reduces equipment cost of usable item by 8.',
						id: '638a4d49a44f4fa4b0deca3f',
						name: 'Light',
						noId: 579,
					},
				],
			},
		],
		name: 'Easy to Handle',
		noId: 580,
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
						noId: 579,
					},
					{
						description: 'Effect: Reduces equipment cost of usable item by 12.',
						id: '638a4d49a44f4fa4b0deca46',
						name: 'Easy to Handle',
						noId: 580,
					},
				],
			},
		],
		name: 'Accustoms Quickly',
		noId: 581,
		traitCategories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Zeal factor enhances the material it resides in. Effect: Increases HP and attack.',
		id: '638a4d49a44f4fa4b0deca47',
		mergeFrom: [],
		name: 'Zeal Factor',
		noId: 592,
		traitCategories: ['ACCESSORY'],
	},
	{
		description: 'Happy heart enhances the material it resides in. Effect: Increases MP and defense.',
		id: '638a4d49a44f4fa4b0deca40',
		mergeFrom: [],
		name: 'Happy Heart',
		noId: 593,
		traitCategories: ['ACCESSORY'],
	},
	{
		description: 'Cunning wit enhances the material it resides in. Effect: Increases critical bonus and accuracy.',
		id: '638a4d49a44f4fa4b0deca42',
		mergeFrom: [],
		name: 'Cunning Wit',
		noId: 594,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Splendid glory enhances the material it resides in. Effect: Increases WT delay resistance and Break resistance.',
		id: '638a4d49a44f4fa4b0deca44',
		mergeFrom: [],
		name: 'Splendid Glory',
		noId: 595,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Benevolent light enhances the material it resides in. Effect: Provides damage reversal and immunity to all ailments.',
		id: '638a4d49a44f4fa4b0deca48',
		mergeFrom: [],
		name: 'Benevolent Light',
		noId: 596,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Wild instinct enhances the material it resides in. Effect: Increases speed, reduces wait time after using skills.',
		id: '638a4d49a44f4fa4b0deca41',
		mergeFrom: [],
		name: 'Wild Instinct',
		noId: 597,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Persistent faith enhances the material it resides in. Effect: Provides HP regeneration and chance to avoid KO.',
		id: '638a4d49a44f4fa4b0deca45',
		mergeFrom: [],
		name: 'Persistent Faith',
		noId: 598,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Guiding intuition enhances the material it resides in. Effect: Increases critical hit rate, has a chance to shorten wait time.',
		id: '638a4d49a44f4fa4b0deca4a',
		mergeFrom: [],
		name: 'Guide Intuition',
		noId: 599,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Empty world enhances the material it resides in. Effect: Provides damage conversion, reduces physical damage taken.',
		id: '638a4d49a44f4fa4b0deca49',
		mergeFrom: [],
		name: 'Empty World',
		noId: 600,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Power of madness enhances the material it resides in. Effect: Greatly increases attack power, lose lots of HP each turn.',
		id: '638a4d49a44f4fa4b0deca4c',
		mergeFrom: [],
		name: 'Power of Madness',
		noId: 601,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Burning passion enhances the material it resides in. Effect: Increases all stats by 15, bestows fire and ice resistance.',
		id: '638a4d49a44f4fa4b0deca4e',
		mergeFrom: [],
		name: 'Burning Passion',
		noId: 602,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Unwavering spirit enhances the material it resides in. Effect: Increases all stats by 15, bestows lightning and physical resistance.',
		id: '638a4d49a44f4fa4b0deca4d',
		mergeFrom: [],
		name: 'Unwavering Spirit',
		noId: 603,
		traitCategories: ['ACCESSORY'],
	},
	{
		description: 'Fog of illusion enhances the material it resides in. Effect: Swaps HP and MP, adds evasion chance.',
		id: '638a4d49a44f4fa4b0deca4f',
		mergeFrom: [],
		name: 'Fog of Illusion',
		noId: 604,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Bonds of belief enhances the material it resides in. Effect: Increases assist effect, provides damage conversion.',
		id: '638a4d49a44f4fa4b0deca5a',
		mergeFrom: [],
		name: 'Bonds of Belief',
		noId: 605,
		traitCategories: ['ACCESSORY'],
	},
	{
		description:
			'Hammer of justice enhances the material it resides in. Effect: Greatly increases skill power, adds Break value.',
		id: '638a4d49a44f4fa4b0deca52',
		mergeFrom: [],
		name: 'Hammer of Justice',
		noId: 606,
		traitCategories: ['WEAPON'],
	},
	{
		description:
			'Dreadful king enhances the material it resides in. Effect: Causes additional damage and status effects.',
		id: '638a4d49a44f4fa4b0deca51',
		mergeFrom: [],
		name: 'Dreadful King',
		noId: 607,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Unceasing desire enhances the material it resides in. Effect: Absorbs a portion of damage dealt.',
		id: '638a4d49a44f4fa4b0deca55',
		mergeFrom: [],
		name: 'Unceasing Desire',
		noId: 608,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Pursuit of knowledge enhances the material it resides in. Effect: Causes additional damage.',
		id: '638a4d49a44f4fa4b0deca53',
		mergeFrom: [],
		name: 'Pursuit of Knowledge',
		noId: 609,
		traitCategories: ['WEAPON'],
	},
	{
		description:
			'Star of expectation enhances the material it resides in. Effect: Provides enhancement proportional to level.',
		id: '638a4d49a44f4fa4b0deca50',
		mergeFrom: [],
		name: 'Star of Expectation',
		noId: 610,
		traitCategories: ['ARMOR'],
	},
	{
		description:
			'Ray of hope enhances the material it resides in. Effect: Increases maximum HP, provides automatic KO revival.',
		id: '638a4d49a44f4fa4b0deca57',
		mergeFrom: [],
		name: 'Ray of Hope',
		noId: 611,
		traitCategories: ['ARMOR'],
	},
	{
		description:
			'Awakening courage enhances the material it resides in. Effect: Provides a bonus against powerful foes and bosses.',
		id: '638a4d49a44f4fa4b0deca54',
		mergeFrom: [],
		name: 'Awakening Courage',
		noId: 612,
		traitCategories: ['ARMOR'],
	},
	{
		description:
			'Kind soul enhances the material it resides in. Effect: Provides a Burst Mode bonus and gauge fill rate increase.',
		id: '638a4d49a44f4fa4b0deca58',
		mergeFrom: [],
		name: 'Kind Soul',
		noId: 613,
		traitCategories: [],
	},
	{
		description:
			'Indomitable soul enhances the material it resides in. Effect: Provides Break resistance and greatly increases speed of recovering from Break.',
		id: '638a4d49a44f4fa4b0deca59',
		mergeFrom: [],
		name: 'Indomitable Soul',
		noId: 614,
		traitCategories: ['ARMOR'],
	},
	{
		description: 'Effect: Attacks cause 7% additional damage, and increases skill power by 15%.',
		id: '638a4d49a44f4fa4b0deca56',
		mergeFrom: [],
		name: 'Changing Attack',
		noId: 659,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause 15% additional damage, and increases skill power by 10%.',
		id: '638a4d49a44f4fa4b0deca5e',
		mergeFrom: [],
		name: 'Avidya Attack',
		noId: 660,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause 15% additional damage, and increases skill power by 15%.',
		id: '638a4d49a44f4fa4b0deca5c',
		mergeFrom: [],
		name: 'Barrage Attack',
		noId: 661,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause 20% additional damage, and increases skill power by 25%.',
		id: '638a4d49a44f4fa4b0deca5b',
		mergeFrom: [],
		name: 'Skillful Attack',
		noId: 662,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause 15% additional damage, and increases skill power by 20%.',
		id: '638a4d49a44f4fa4b0deca5d',
		mergeFrom: [],
		name: 'Persistent Attack',
		noId: 663,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Attacks cause between 1 - 50% additional damage.',
		id: '638a4d49a44f4fa4b0deca5f',
		mergeFrom: [],
		name: 'Deadly Attack',
		noId: 664,
		traitCategories: ['WEAPON'],
	},
	{
		description: "Effect: Item automatically activates when the user's HP falls below 20% in battle. Consumes MP.",
		id: '638a4d49a44f4fa4b0deca61',
		mergeFrom: [],
		name: 'Auto Activate 20%',
		noId: 677,
		traitCategories: ['HEAL_ITEM'],
	},
	{
		description: "Effect: Item automatically activates when the user's HP falls below 30% in battle. Consumes MP.",
		id: '638a4d49a44f4fa4b0deca60',
		mergeFrom: [],
		name: 'Auto Activate 30%',
		noId: 678,
		traitCategories: ['HEAL_ITEM'],
	},
	{
		description: "Effect: Item automatically activates when the user's HP falls below 40% in battle. Consumes MP.",
		id: '638a4d49a44f4fa4b0deca63',
		mergeFrom: [],
		name: 'Auto Activate 50%',
		noId: 679,
		traitCategories: ['HEAL_ITEM'],
	},
	{
		description: "Effect: Item automatically activates when the user's HP falls below 50% in battle.",
		id: '638a4d49a44f4fa4b0deca62',
		mergeFrom: [],
		name: 'Auto Use',
		noId: 680,
		traitCategories: ['HEAL_ITEM'],
	},
	{
		description:
			'Effect: Increases item power by 25%, and makes its effect non-attribute. Non-attribute is not affected by any resistances or weaknesses.',
		id: '638a4d49a44f4fa4b0deca67',
		mergeFrom: [],
		name: 'No Attribute',
		noId: 681,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Has a high chance to inflict Poison when dealing damage.',
		id: '638a4d49a44f4fa4b0deca68',
		mergeFrom: [],
		name: 'Poison Mist',
		noId: 682,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON'],
	},
	{
		description: "Effect: Restores some of the target's HP, and also recovers from Poison.",
		id: '638a4d49a44f4fa4b0deca6a',
		mergeFrom: [],
		name: 'Slime Compound',
		noId: 683,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description:
			"Effect: Temporarily increases all of the target's stats. They will also automatically revive on their next turn after being KO'd.",
		id: '638a4d49a44f4fa4b0deca66',
		mergeFrom: [],
		name: 'False Flower',
		noId: 684,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description:
			"Effect: Pushes back the target's turn a little. This effect diminishes with each use until the target takes another turn.",
		id: '638a4d49a44f4fa4b0deca64',
		mergeFrom: [],
		name: 'Electrified',
		noId: 685,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Heat causes continuous damage. The effect is small.',
		id: '638a4d49a44f4fa4b0deca65',
		mergeFrom: [],
		name: 'Carries Heat',
		noId: 686,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: "Effect: Cold reduces the target's speed, and also has a low chance of inflicting Slow.",
		id: '638a4d49a44f4fa4b0deca69',
		mergeFrom: [],
		name: 'Carries Cold',
		noId: 687,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases all stats by 8.',
		id: '638a4d49a44f4fa4b0deca6b',
		mergeFrom: [],
		name: 'Dark Matter',
		noId: 688,
		traitCategories: ['ACCESSORY'],
	},
	{
		description: 'Effect: Increases damage dealt to Puni and magical creatures.',
		id: '638a4d49a44f4fa4b0deca6c',
		mergeFrom: [],
		name: 'Ancient Seal',
		noId: 689,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: Reduces skill power by 10%, but also reduces MP consumption by 30%.',
		id: '638a4d49a44f4fa4b0deca71',
		mergeFrom: [],
		name: 'Absorbs Light',
		noId: 690,
		traitCategories: ['ACCESSORY', 'WEAPON'],
	},
	{
		description: "Effect: Reduces the target's defense and speed.",
		id: '638a4d49a44f4fa4b0deca6f',
		mergeFrom: [],
		name: 'Stinks',
		noId: 691,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Restores Break value to the target. Also reduces wait time after turns by a small amount.',
		id: '638a4d49a44f4fa4b0deca6e',
		mergeFrom: [],
		name: 'Sunny Scent',
		noId: 692,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases attack by 7, and attacks cause a small amount of additional damage.',
		id: '638a4d49a44f4fa4b0deca6d',
		mergeFrom: [],
		name: 'Cutting Thread',
		noId: 693,
		traitCategories: ['WEAPON'],
	},
	{
		description: 'Effect: The target recovers a small amount of HP, and also recovers from Weak.',
		id: '638a4d49a44f4fa4b0deca72',
		mergeFrom: [],
		name: 'Kirchen Bell Special',
		noId: 694,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: "Effect: Increases the target's evasion rate. This effect lasts 5 turns.",
		id: '638a4d49a44f4fa4b0deca75',
		mergeFrom: [],
		name: 'Flickering Light',
		noId: 695,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases attack item effect by 5%, and also has a chance to cause Weak.',
		id: '638a4d49a44f4fa4b0deca70',
		mergeFrom: [],
		name: 'Unidentified',
		noId: 696,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: The target recovers a small amount of HP, and also recovers from Curse.',
		id: '638a4d49a44f4fa4b0deca76',
		mergeFrom: [],
		name: 'Purifying Water',
		noId: 697,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Price when selling to shops increases quite a lot.',
		id: '638a4d49a44f4fa4b0deca78',
		mergeFrom: [],
		name: 'Golden Radiance',
		noId: 698,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases attack item effect by 15%.',
		id: '638a4d49a44f4fa4b0deca73',
		mergeFrom: [],
		name: 'Super Fine',
		noId: 699,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases defense by 10, and also causes a decent amount of HP recovery each turn.',
		id: '638a4d49a44f4fa4b0deca74',
		mergeFrom: [],
		name: 'Mutated Material',
		noId: 700,
		traitCategories: ['ACCESSORY', 'ARMOR'],
	},
	{
		description: 'Effect: Increases recovery item effect by 30%, but increases equipment cost by 5.',
		id: '638a4d49a44f4fa4b0deca77',
		mergeFrom: [],
		name: 'Special Ingredient',
		noId: 701,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description:
			"Effect: Increases the target's maximum HP during battle, and also reduces the effectiveness of status ailments. The effect is small.",
		id: '638a4d49a44f4fa4b0deca7b',
		mergeFrom: [],
		name: 'Secret of Health',
		noId: 702,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases critical hit rate, and also increases damage dealt to Broken targets.',
		id: '638a4d49a44f4fa4b0deca79',
		mergeFrom: [],
		name: 'Power of Faith',
		noId: 703,
		traitCategories: ['ACCESSORY', 'WEAPON'],
	},
	{
		description: 'Effect: The target recovers from Poison and No Heal ailments.',
		id: '638a4d49a44f4fa4b0deca7a',
		mergeFrom: [],
		name: 'Medicine Compound',
		noId: 704,
		traitCategories: ['BUFF_ITEM', 'HEAL_ITEM'],
	},
	{
		description: 'Effect: Increases price when selling to shops.',
		id: '638a4d49a44f4fa4b0deca7f',
		mergeFrom: [],
		name: 'Rainbow Radiance',
		noId: 705,
		traitCategories: ['ACCESSORY', 'ARMOR', 'ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'WEAPON'],
	},
	{
		description: 'Effect: Increases damage dealt to Demon and Undead enemies.',
		id: '638a4d49a44f4fa4b0deca7c',
		mergeFrom: [],
		name: 'Wards Evil',
		noId: 706,
		traitCategories: ['WEAPON'],
	},
	{
		description:
			'Effect: Increases damage dealt to Broken targets by 20%, and a portion of damage dealt is absorbed to recover HP.',
		id: '638a4d49a44f4fa4b0deca7e',
		mergeFrom: [],
		name: 'Demon Soul',
		noId: 707,
		traitCategories: ['ATK_ITEM', 'DE_BUFF_ITEM'],
	},
	{
		description: 'Effect: Increases all stats by 15, and also increases skill power by 20%.',
		id: '638a4d49a44f4fa4b0deca7d',
		mergeFrom: [],
		name: 'Dragon Soul',
		noId: 708,
		traitCategories: ['WEAPON'],
	},
];

export default traits;
