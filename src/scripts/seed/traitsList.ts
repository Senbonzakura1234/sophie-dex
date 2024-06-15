import type { Trait } from '@root/server/postgresql/schema';

const traitsList: Array<Trait> = [
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
			'SYNTHESIS'
		],
		description: 'Price when selling to shops decreases quite a bit, but also decreases duplication price.',
		id: '01HVZGS2KVXEA5XZVFWXMEBZZK',
		index: 1,
		itemPresent: null,
		keyWords: 'low price+,1,accessory,armor,atk item,buff item,de buff item,heal item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Low Price+'
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
			'SYNTHESIS'
		],
		description: 'Price when selling to shops decreases quite a lot, but also decreases duplication price.',
		id: '01HVZGS2KVJGGYZF37XJFRRGFB',
		index: 2,
		itemPresent: null,
		keyWords: 'low price++,2,accessory,armor,atk item,buff item,de buff item,heal item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Low Price++'
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
			'SYNTHESIS'
		],
		description: 'Price when selling to shops increases massively.',
		id: '01HVZGS2KVQM1MHTW4ZYJNB8TY',
		index: 10,
		itemPresent: null,
		keyWords:
			'rare item,10,high price+,high price++,accessory,armor,atk item,buff item,de buff item,heal item,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KVPFEP3TN9F1ZEQT9B',
					name: 'High Price+',
					table: 'trait'
				},
				{
					id: '01HVZGS2KV11TWSGVBV7K8ZVJK',
					name: 'High Price++',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Rare Item'
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
			'SYNTHESIS'
		],
		description: 'Price when selling to shops plummets, but also decreases duplication price.',
		id: '01HVZGS2KVVQ4DMSPKZNX8KRRN',
		index: 5,
		itemPresent: null,
		keyWords:
			'no price,5,common item,mass produced,accessory,armor,atk item,buff item,de buff item,heal item,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2MAMNSJGNR2VEEH4VVD',
					name: 'Common Item',
					table: 'trait'
				},
				{
					id: '01HVZGS2KWATETJSPQBDQRF3X5',
					name: 'Mass Produced',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'No Price'
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
			'SYNTHESIS'
		],
		description: 'Price when selling to shops increases quite a lot.',
		id: '01HVZGS2KVN95YF4A0QNJ35A22',
		index: 9,
		itemPresent: null,
		keyWords:
			'high class,9,high price,high price+,accessory,armor,atk item,buff item,de buff item,heal item,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KV7R5CMTEV43P7YB6Q',
					name: 'High Price',
					table: 'trait'
				},
				{
					id: '01HVZGS2KVPFEP3TN9F1ZEQT9B',
					name: 'High Price+',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'High Class'
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
			'SYNTHESIS'
		],
		description: 'Price when selling to shops increases a little.',
		id: '01HVZGS2KV7R5CMTEV43P7YB6Q',
		index: 6,
		itemPresent: null,
		keyWords: 'high price,6,accessory,armor,atk item,buff item,de buff item,heal item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'High Price'
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
			'SYNTHESIS'
		],
		description: 'Price when selling to shops increases quite a bit.',
		id: '01HVZGS2KVPFEP3TN9F1ZEQT9B',
		index: 7,
		itemPresent: null,
		keyWords: 'high price+,7,accessory,armor,atk item,buff item,de buff item,heal item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'High Price+'
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
			'SYNTHESIS'
		],
		description: 'Price when selling to shops increases quite a lot.',
		id: '01HVZGS2KV11TWSGVBV7K8ZVJK',
		index: 8,
		itemPresent: null,
		keyWords: 'high price++,8,accessory,armor,atk item,buff item,de buff item,heal item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'High Price++'
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
			'SYNTHESIS'
		],
		description: 'Price when selling to shops skyrockets.',
		id: '01HVZGS2KW3SZZTE3CD7S19PWW',
		index: 11,
		itemPresent: null,
		keyWords:
			'premium price,11,high class,rare item,accessory,armor,atk item,buff item,de buff item,heal item,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KVN95YF4A0QNJ35A22',
					name: 'High Class',
					table: 'trait'
				},
				{
					id: '01HVZGS2KVQM1MHTW4ZYJNB8TY',
					name: 'Rare Item',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Premium Price'
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
			'SYNTHESIS'
		],
		description: 'Increases item quality by 20% when this trait is transferred.',
		id: '01HVZGS2KWT9AHG8ZZM4YXFQ4Y',
		index: 14,
		itemPresent: null,
		keyWords:
			'quality up++,14,accessory,armor,atk item,buff item,de buff item,heal item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Quality Up++'
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
			'SYNTHESIS'
		],
		description: 'Increases item quality by 20% when this trait is transferred.',
		id: '01HVZGS2KWQSXZRMKHXA6VKTEJ',
		index: 15,
		itemPresent: null,
		keyWords:
			'well made,15,quality up,quality up+,accessory,armor,atk item,buff item,de buff item,heal item,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KW2XM4F9FJVHVTPVM3',
					name: 'Quality Up',
					table: 'trait'
				},
				{
					id: '01HVZGS2KW60SHZMDQGD1B480G',
					name: 'Quality Up+',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Well Made'
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
			'SYNTHESIS'
		],
		description: 'Increases item quality by 10% when this trait is transferred.',
		id: '01HVZGS2KW2XM4F9FJVHVTPVM3',
		index: 12,
		itemPresent: null,
		keyWords: 'quality up,12,accessory,armor,atk item,buff item,de buff item,heal item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Quality Up'
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
			'SYNTHESIS'
		],
		description: 'Increases item quality by 15% when this trait is transferred.',
		id: '01HVZGS2KW60SHZMDQGD1B480G',
		index: 13,
		itemPresent: null,
		keyWords: 'quality up+,13,accessory,armor,atk item,buff item,de buff item,heal item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Quality Up+'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases attack item effect by 5%.',
		id: '01HVZGS2KWWRTQQ3FYBEX5AQVD',
		index: 52,
		itemPresent: null,
		keyWords: 'destruction up,52,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Destruction Up'
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
			'SYNTHESIS'
		],
		description: 'Price when selling to shops decreases massively, but also decreases duplication price.',
		id: '01HVZGS2KWATETJSPQBDQRF3X5',
		index: 4,
		itemPresent: null,
		keyWords:
			'mass produced,4,low price+,low price++,accessory,armor,atk item,buff item,de buff item,heal item,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KVXEA5XZVFWXMEBZZK',
					name: 'Low Price+',
					table: 'trait'
				},
				{
					id: '01HVZGS2KVJGGYZF37XJFRRGFB',
					name: 'Low Price++',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Mass Produced'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Maximum MP increases by 25.',
		id: '01HVZGS2KW7DE8FEV5N2BVJAQG',
		index: 199,
		itemPresent: null,
		keyWords: "magician's wisdom,199,mp enhance,mp boost,accessory,armor,exploration,synthesis",
		mergeFrom: [
			[
				{
					id: '01HVZGS2M23ST5ZKHJVRP1TJW5',
					name: 'MP Enhance',
					table: 'trait'
				},
				{
					id: '01HVZGS2KZ2Y0M9NJ19XB3JRS7',
					name: 'MP Boost',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: "Magician's Wisdom"
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases recovery item effect by 15%.',
		id: '01HVZGS2KWPBT8PVX9EV8DBK3R',
		index: 104,
		itemPresent: null,
		keyWords: 'recovery up+,104,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Recovery Up+'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Recovery item enhanced by a tiny, fixed amount. Lower power equals stronger effect.',
		id: '01HVZGS2KWQ2XS69WHK5082EHP',
		index: 110,
		itemPresent: null,
		keyWords: 'fixed recovery,110,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Fixed Recovery'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Recovery item enhanced by a small, fixed amount. Lower power equals stronger effect.',
		id: '01HVZGS2KWAP6S872D7YVW2XYG',
		index: 111,
		itemPresent: null,
		keyWords: 'fixed recovery+,111,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Fixed Recovery+'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases attack power by 15.',
		id: '01HVZGS2KWZ8ZE59E26113QB7Y',
		index: 221,
		itemPresent: null,
		keyWords: 'power of beasts,221,attack enhance,attack boost,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M1D2YBV8P6RZZYHTVA',
					name: 'Attack Enhance',
					table: 'trait'
				},
				{
					id: '01HVZGS2M1ET2YHR3NGC93AVDS',
					name: 'Attack Boost',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Power of Beasts'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a maximum LP increase. Maximum LP increases by 10.',
		id: '01HVZGS2KX5BABKS41MZ40YBW9',
		index: 204,
		itemPresent: null,
		keyWords: 'lp super enhance,204,accessory,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'LP Super Enhance'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Massively enhances item effect according to strength of traits present.',
		id: '01HVZGS2KXV80HE55SM47XH51N',
		index: 466,
		itemPresent: null,
		keyWords:
			'cost bonus,466,trait enhance,trait enhance+,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M69KVR5E8PKJ314KSC',
					name: 'Trait Enhance',
					table: 'trait'
				},
				{
					id: '01HVZGS2M40YK4D99DS7FY3BEX',
					name: 'Trait Enhance+',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Cost Bonus'
	},
	{
		categories: ['ACCESSORY', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows reduced MP consumption effect. Reduces MP consumption of skills by 15%.',
		id: '01HVZGS2KX4N7X65VY02ZYG577',
		index: 299,
		itemPresent: null,
		keyWords: 'consume mp -15%,299,accessory,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Consume MP -15%'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases skill power by 25%, and reduces MP consumption by 25%.',
		id: '01HVZGS2KXV6HWAMM6C8BW2F19',
		index: 313,
		itemPresent: null,
		keyWords: 'expert skill,313,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Expert Skill'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Has a chance to inflict Blind when dealing damage.',
		id: '01HVZGS2KYMK1JEENA824EDTHE',
		index: 369,
		itemPresent: null,
		keyWords: 'inflict blind,369,atk item,de buff item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Inflict Blind'
	},
	{
		categories: ['ATK_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases damage dealt to Dragon type enemies.',
		id: '01HVZGS2KYW9RMTEJA10J1SPWT',
		index: 426,
		itemPresent: null,
		keyWords: 'dragon slayer,426,atk item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Dragon Slayer'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Power increases by number of targets in effect area x 15%.',
		id: '01HVZGS2KY0AYN6HCT3EP9QKA4',
		index: 482,
		itemPresent: null,
		keyWords:
			'effective vs many,482,area bonus,area bonus+,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M4AXGDFXHH4AJTXSYK',
					name: 'Area Bonus',
					table: 'trait'
				},
				{
					id: '01HVZGS2M3EEP1X1R8VVTT0TZT',
					name: 'Area Bonus+',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Effective Vs Many'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases attack item effect by 40%.',
		id: '01HVZGS2KYA0D6QVPDXKBC6BTY',
		index: 58,
		itemPresent: null,
		keyWords: 'power to destroy gods,58,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Power to Destroy Gods'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases recovery item effect by 10%.',
		id: '01HVZGS2KY8Y0Z7YRDM7N1189S',
		index: 103,
		itemPresent: null,
		keyWords: 'recovery up,103,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Recovery Up'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases item use count by 3.',
		id: '01HVZGS2KY43M512T4SX60VD59',
		index: 174,
		itemPresent: null,
		keyWords:
			'multiply,174,use count +1,use count +2,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M0CB4H2ZP2RY41YVX0',
					name: 'Use Count +1',
					table: 'trait'
				},
				{
					id: '01HVZGS2KZQ3YPZHHXJ30W075E',
					name: 'Use Count +2',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Multiply'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Revive from KO, and also removes 3 status ailments.',
		id: '01HVZGS2KY1FYZX1YBHPF2A6DV',
		index: 193,
		itemPresent: null,
		keyWords: 'full of life,193,hp enhance,hp boost,accessory,armor,buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KZS2DK9G02154257KW',
					name: 'HP Enhance',
					table: 'trait'
				},
				{
					id: '01HVZGS2M10GDGWHQ4KV7M6ZYK',
					name: 'HP Boost',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Full of Life'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases recovery item effect by 50%.',
		id: '01HVZGS2KY0GC39RMHSJ7VMZPF',
		index: 108,
		itemPresent: null,
		keyWords: 'ultimate recovery,108,big recovery,intense recovery,buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KYED1XG6GHZTDYK6GX',
					name: 'Big Recovery',
					table: 'trait'
				},
				{
					id: '01HVZGS2KYZGK1C0MEA0H0QF3K',
					name: 'Intense Recovery',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Ultimate Recovery'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases attack item effect by 7%.',
		id: '01HVZGS2KY53F7XHH03QWHS0Z1',
		index: 53,
		itemPresent: null,
		keyWords: 'destruction up+,53,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Destruction Up+'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Attack item enhanced by a ridiculous, fixed amount. This increase scales with the original value.',
		id: '01HVZGS2KYAVFC84GVXWWW04B7',
		index: 65,
		itemPresent: null,
		keyWords: 'legendary destruction,65,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Legendary Destruction'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases attack item effect by 17%.',
		id: '01HVZGS2KZ3Q4GHQ8437TDFJKP',
		index: 56,
		itemPresent: null,
		keyWords: 'intense destruction,56,destruction up+,destruction up++,atk item,de buff item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KY53F7XHH03QWHS0Z1',
					name: 'Destruction Up+',
					table: 'trait'
				},
				{
					id: '01HVZGS2KZN33F1PAGKQG57QZC',
					name: 'Destruction Up++',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Intense Destruction'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Attack item enhanced by a fixed amount. Lower power equals stronger enhancement.',
		id: '01HVZGS2KZRTK0510W1Q97YGXE',
		index: 62,
		itemPresent: null,
		keyWords: 'pain in numbers,62,fixed power,fixed power+,atk item,de buff item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M063GVS5QEGYS8XSB7',
					name: 'Fixed Power',
					table: 'trait'
				},
				{
					id: '01HVZGS2KYYPPG2PVKFGNS2K7J',
					name: 'Fixed Power+',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Pain in Numbers'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Gives item a 15% chance to critical hit.',
		id: '01HVZGS2KZ6EVNXDX9YFHZGJRJ',
		index: 145,
		itemPresent: null,
		keyWords: 'critical,145,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Critical'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a maximum HP increase. Maximum HP increases by 10.',
		id: '01HVZGS2KZS2DK9G02154257KW',
		index: 190,
		itemPresent: null,
		keyWords: 'hp enhance,190,accessory,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'HP Enhance'
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases defense by 40.',
		id: '01HVZGS2KZERZF6KN312N6EF43',
		index: 229,
		itemPresent: null,
		keyWords: 'dragonscale defense,229,steel defense,diamond defense,armor,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M1DPQMTB81R304JM0A',
					name: 'Steel Defense',
					table: 'trait'
				},
				{
					id: '01HVZGS2M28SP349SC03HP9W50',
					name: 'Diamond Defense',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Dragonscale Defense'
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Enhances armor defense. Increases defense by 15.',
		id: '01HVZGS2KZYHDJDKA3470F7NPJ',
		index: 226,
		itemPresent: null,
		keyWords: 'defense super enhance,226,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Defense Super Enhance'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Recovery item enhanced by a ridiculous, fixed amount. This increase scales with the original value.',
		id: '01HVZGS2KWJ0BB1K0247MWHFF7',
		index: 116,
		itemPresent: null,
		keyWords: 'legendary recovery,116,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Legendary Recovery'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a maximum LP increase. Maximum LP increases by 7.',
		id: '01HVZGS2KWQ2Z9TPH2022R0KMR',
		index: 203,
		itemPresent: null,
		keyWords: 'lp boost,203,accessory,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'LP Boost'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases speed by 40.',
		id: '01HVZGS2KX2VXT9T8A548MF1ZV',
		index: 235,
		itemPresent: null,
		keyWords: 'speed of light,235,speed of skanda,speed of gods,accessory,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KZ4XQT4FJPF07Z13JJ',
					name: 'Speed of Skanda',
					table: 'trait'
				},
				{
					id: '01HVZGS2M22V93Z4Y1Q6C42GRN',
					name: 'Speed of Gods',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Speed of Light'
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases maximum HP and MP by 50.',
		id: '01HVZGS2KXPAPWVGS96S5PN1MN',
		index: 246,
		itemPresent: null,
		keyWords: 'flawless body,246,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Flawless Body'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows increased skill power effect. Increases skill power and MP consumption by 10%.',
		id: '01HVZGS2KXGZC741EAEM8ZPYKM',
		index: 306,
		itemPresent: null,
		keyWords: 'skill power +10%,306,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Skill Power +10%'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Massively increases the target's speed.",
		id: '01HVZGS2KXTAQ5WF673MTQWBYD',
		index: 352,
		itemPresent: null,
		keyWords: 'blessing of skanda,352,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Blessing of Skanda'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Increases attack power by 20, and absorb 10% of damage dealt through attacks to restore your own HP.',
		id: '01HVZGS2KYH2YPKJWP3YVM5RGF',
		index: 407,
		itemPresent: null,
		keyWords: 'over power,407,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Over Power'
	},
	{
		categories: ['ATK_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases damage dealt to Undead type enemies.',
		id: '01HVZGS2KYWKDGRHF354NAAWCY',
		index: 429,
		itemPresent: null,
		keyWords: 'undead slayer,429,atk item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Undead Slayer'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases attack item effect by 12%.',
		id: '01HVZGS2KY1G51V9PBE41TBM6W',
		index: 55,
		itemPresent: null,
		keyWords: 'big destruction,55,destruction up,destruction up+,atk item,de buff item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KWWRTQQ3FYBEX5AQVD',
					name: 'Destruction Up',
					table: 'trait'
				},
				{
					id: '01HVZGS2KY53F7XHH03QWHS0Z1',
					name: 'Destruction Up+',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Big Destruction'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases recovery item effect by 25%.',
		id: '01HVZGS2KYED1XG6GHZTDYK6GX',
		index: 106,
		itemPresent: null,
		keyWords: 'big recovery,106,recovery up,recovery up+,buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KY8Y0Z7YRDM7N1189S',
					name: 'Recovery Up',
					table: 'trait'
				},
				{
					id: '01HVZGS2KWPBT8PVX9EV8DBK3R',
					name: 'Recovery Up+',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Big Recovery'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Reduces item number variation, making it easier to score higher numbers.',
		id: '01HVZGS2KYWB0H167JFGXJ4MX6',
		index: 154,
		itemPresent: null,
		keyWords:
			'stability emphasis,154,stable effect,stable effect+,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M0BSABT5E5X39JGKE4',
					name: 'Stable Effect',
					table: 'trait'
				},
				{
					id: '01HVZGS2M18HFW5CSRKTV08SHC',
					name: 'Stable Effect+',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Stability Emphasis'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Reduces item use count by 5. Power is massively increased.',
		id: '01HVZGS2KYDVC2NSHCQ392P8XS',
		index: 177,
		itemPresent: null,
		keyWords:
			'reduction,177,use count -1,use count -2,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M1D7KT5AREWD7Y331V',
					name: 'Use Count -1',
					table: 'trait'
				},
				{
					id: '01HVZGS2M1SA33RYMXT4GCSG86',
					name: 'Use Count -2',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Reduction'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Maximum MP increases by 70.',
		id: '01HVZGS2KYMRS47H87BEJ4T2QP',
		index: 201,
		itemPresent: null,
		keyWords:
			"wisdom of the gods,201,magician's wisdom,grand magician's wisdom,accessory,armor,exploration,synthesis",
		mergeFrom: [
			[
				{
					id: '01HVZGS2KW7DE8FEV5N2BVJAQG',
					name: "Magician's Wisdom",
					table: 'trait'
				},
				{
					id: '01HVZGS2M1JTM1ZTJ1JK7JWT4A',
					name: "Grand Magician's Wisdom",
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Wisdom of the Gods'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases recovery item effect by 35%.',
		id: '01HVZGS2KYZGK1C0MEA0H0QF3K',
		index: 107,
		itemPresent: null,
		keyWords: 'intense recovery,107,recovery up+,recovery up++,buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KWPBT8PVX9EV8DBK3R',
					name: 'Recovery Up+',
					table: 'trait'
				},
				{
					id: '01HVZGS2KZEZ9CYN7DDVCADFBX',
					name: 'Recovery Up++',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Intense Recovery'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Attack item enhanced by a fixed amount. Lower power equals stronger enhancement.',
		id: '01HVZGS2KYYPPG2PVKFGNS2K7J',
		index: 60,
		itemPresent: null,
		keyWords: 'fixed power+,60,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Fixed Power+'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases recovery item effect by 20%.',
		id: '01HVZGS2KZEZ9CYN7DDVCADFBX',
		index: 105,
		itemPresent: null,
		keyWords: 'recovery up++,105,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Recovery Up++'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Recovery item enhanced by a fixed amount. Lower power equals stronger effect.',
		id: '01HVZGS2KZZZHZXSJSNP2CCNYN',
		index: 112,
		itemPresent: null,
		keyWords: 'fixed recovery++,112,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Fixed Recovery++'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Maximum LP increases by 30.',
		id: '01HVZGS2KZYFWT9T3AY2FD7AW1',
		index: 207,
		itemPresent: null,
		keyWords: 'infinite stamina,207,full of stamina,unabating stamina,accessory,armor,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2MAMZAM242Y396HFXVM',
					name: 'Full of Stamina',
					table: 'trait'
				},
				{
					id: '01HVZGS2MAWVT2N357QTABWE4F',
					name: 'Unabating Stamina',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Infinite Stamina'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases item use count by 2. Power is reduced slightly.',
		id: '01HVZGS2KZQ3YPZHHXJ30W075E',
		index: 173,
		itemPresent: null,
		keyWords: 'use count +2,173,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Use Count +2'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a maximum MP increase. Maximum MP increases by 15.',
		id: '01HVZGS2KZ2Y0M9NJ19XB3JRS7',
		index: 197,
		itemPresent: null,
		keyWords: 'mp boost,197,accessory,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'MP Boost'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Enhances weapon attack power. Increases attack power by 15.',
		id: '01HVZGS2KZ3R4TDDZEXYBNT2EA',
		index: 220,
		itemPresent: null,
		keyWords: 'attack super enhance,220,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Attack Super Enhance'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases speed by 15.',
		id: '01HVZGS2KZ4XQT4FJPF07Z13JJ',
		index: 233,
		itemPresent: null,
		keyWords: 'speed of skanda,233,speed enhance,speed boost,accessory,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M283E91QY2GN90Z119',
					name: 'Speed Enhance',
					table: 'trait'
				},
				{
					id: '01HVZGS2M1GWTPA98X0G8MM3PA',
					name: 'Speed Boost',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Speed of Skanda'
	},
	{
		categories: ['ACCESSORY', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases attack & speed by 7.',
		id: '01HVZGS2KZ2MN29SRS6V60ENYD',
		index: 241,
		itemPresent: null,
		keyWords: 'atk spd boost,241,attack boost,speed boost,accessory,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M1ET2YHR3NGC93AVDS',
					name: 'Attack Boost',
					table: 'trait'
				},
				{
					id: '01HVZGS2M1GWTPA98X0G8MM3PA',
					name: 'Speed Boost',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'ATK SPD Boost'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases item power by maximum use count x 2%.',
		id: '01HVZGS2KZ8QAPN864VYDRE4GM',
		index: 515,
		itemPresent: null,
		keyWords: 'count bonus,515,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Count Bonus'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases attack item effect by 10%.',
		id: '01HVZGS2KZN33F1PAGKQG57QZC',
		index: 54,
		itemPresent: null,
		keyWords: 'destruction up++,54,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Destruction Up++'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases attack item effect by 30%.',
		id: '01HVZGS2KZ4RENTN064M9KGH62',
		index: 57,
		itemPresent: null,
		keyWords:
			'ultimate destruction,57,big destruction,intense destruction,atk item,de buff item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KY1G51V9PBE41TBM6W',
					name: 'Big Destruction',
					table: 'trait'
				},
				{
					id: '01HVZGS2KZ3Q4GHQ8437TDFJKP',
					name: 'Intense Destruction',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Ultimate Destruction'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Attacks cause 10% additional damage, and increases skill power by 10%.',
		id: '01HVZGS2M0TJ2J3QPCQ7WB6081',
		index: 68,
		itemPresent: null,
		keyWords: 'increase aggression,68,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Increase Aggression'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Recovery item enhanced by a fixed amount. Lower power equals stronger effect.',
		id: '01HVZGS2M03Y8X5TD0ZB85XXR4',
		index: 114,
		itemPresent: null,
		keyWords: 'big medicine enhance,114,fixed recovery+,fixed recovery++,buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KWAP6S872D7YVW2XYG',
					name: 'Fixed Recovery+',
					table: 'trait'
				},
				{
					id: '01HVZGS2KZZZHZXSJSNP2CCNYN',
					name: 'Fixed Recovery++',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Big Medicine Enhance'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases item use count by 1. Power is reduced a little.',
		id: '01HVZGS2M0CB4H2ZP2RY41YVX0',
		index: 172,
		itemPresent: null,
		keyWords: 'use count +1,172,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Use Count +1'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases all stats except resistances by 25.',
		id: '01HVZGS2M03BWZ13HH8H6BCC6N',
		index: 245,
		itemPresent: null,
		keyWords:
			'well rounded power,245,all stat boost,all stat super enhance,accessory,armor,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2MBF4X021YBX3KH9YW4',
					name: 'All Stat Boost',
					table: 'trait'
				},
				{
					id: '01HVZGS2M233JF6S5VW1Z9BN6C',
					name: 'All Stat Super Enhance',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Well Rounded Power'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases skill power and MP consumption by 12%.',
		id: '01HVZGS2M0MD3N66G6CFAVG37J',
		index: 307,
		itemPresent: null,
		keyWords: 'skill enhance,307,skill power +5%,skill power +7%,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M3S2YPQWT3F89Q71R9',
					name: 'Skill Power +5%',
					table: 'trait'
				},
				{
					id: '01HVZGS2M3SSGASPW19W6FW5QN',
					name: 'Skill Power +7%',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Skill Enhance'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Recovery item enhanced by a large, fixed amount. Lower power equals stronger effect.',
		id: '01HVZGS2M0739PYZHC10HZJJC2',
		index: 115,
		itemPresent: null,
		keyWords:
			'super enhance recovery,115,medicine enhance,big medicine enhance,buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2MA3WV7G5A19NVAWV44',
					name: 'Medicine Enhance',
					table: 'trait'
				},
				{
					id: '01HVZGS2M03Y8X5TD0ZB85XXR4',
					name: 'Big Medicine Enhance',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Super Enhance Recovery'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Attacks cause 15% additional damage, and increases skill power by 10%.',
		id: '01HVZGS2M0Z8MKYNVYHSRQ8K44',
		index: 660,
		itemPresent: null,
		keyWords: 'avidya attack,660,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Avidya Attack'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Attacks cause 7% additional damage, and increases skill power by 7%.',
		id: '01HVZGS2M0R8EFRHDTC79RA6DA',
		index: 67,
		itemPresent: null,
		keyWords: 'cuts easily,67,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Cuts Easily'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Gives item a 35% chance to critical hit.',
		id: '01HVZGS2M0E10NFTBFKRE1Y5SJ',
		index: 147,
		itemPresent: null,
		keyWords: 'critical++,147,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Critical++'
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases defense by 15.',
		id: '01HVZGS2M1DPQMTB81R304JM0A',
		index: 227,
		itemPresent: null,
		keyWords: 'steel defense,227,defense enhance,defense boost,armor,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M22KB341Z65JAMM2ZV',
					name: 'Defense Enhance',
					table: 'trait'
				},
				{
					id: '01HVZGS2M2AXSJ27NG77JVTRGD',
					name: 'Defense Boost',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Steel Defense'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Reduces item number variation a little, making it easier to score higher numbers.',
		id: '01HVZGS2M18HFW5CSRKTV08SHC',
		index: 152,
		itemPresent: null,
		keyWords: 'stable effect+,152,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Stable Effect+'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Maximum MP increases by 40.',
		id: '01HVZGS2M1JTM1ZTJ1JK7JWT4A',
		index: 200,
		itemPresent: null,
		keyWords: "grand magician's wisdom,200,mp boost,mp super enhance,accessory,armor,exploration,synthesis",
		mergeFrom: [
			[
				{
					id: '01HVZGS2KZ2Y0M9NJ19XB3JRS7',
					name: 'MP Boost',
					table: 'trait'
				},
				{
					id: '01HVZGS2M0XHJPCH7E0413CSGC',
					name: 'MP Super Enhance',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: "Grand Magician's Wisdom"
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Maximum HP and MP increases by 40.',
		id: '01HVZGS2M1FNK06HP1XEV5A50J',
		index: 210,
		itemPresent: null,
		keyWords: 'hpmp super enhance,210,power of life,wisdom of the gods,accessory,armor,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M13844J8YA3EPQXDJK',
					name: 'Power of Life',
					table: 'trait'
				},
				{
					id: '01HVZGS2KYMRS47H87BEJ4T2QP',
					name: 'Wisdom of the Gods',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'HPMP Super Enhance'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases attack power by 25.',
		id: '01HVZGS2M1FHV6JS381S9N0BNA',
		index: 222,
		itemPresent: null,
		keyWords: 'power of destruction,222,attack boost,attack super enhance,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M1ET2YHR3NGC93AVDS',
					name: 'Attack Boost',
					table: 'trait'
				},
				{
					id: '01HVZGS2KZ3R4TDDZEXYBNT2EA',
					name: 'Attack Super Enhance',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Power of Destruction'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Enhances weapon attack power. Increases attack power by 10.',
		id: '01HVZGS2M1ET2YHR3NGC93AVDS',
		index: 219,
		itemPresent: null,
		keyWords: 'attack boost,219,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Attack Boost'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Accessories with this will increase speed. Increases speed by 10.',
		id: '01HVZGS2M1GWTPA98X0G8MM3PA',
		index: 231,
		itemPresent: null,
		keyWords: 'speed boost,231,accessory,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Speed Boost'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Reduces item number variation, making it easier to score higher numbers.',
		id: '01HVZGS2M15FBBP9262FM8K01Q',
		index: 153,
		itemPresent: null,
		keyWords: 'stable effect++,153,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Stable Effect++'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Attack item enhanced by a large, fixed amount. Lower power equals stronger enhancement.',
		id: '01HVZGS2KZ4F9B3Q6WR5NRC07A',
		index: 63,
		itemPresent: null,
		keyWords: 'damage in numbers,63,fixed power+,fixed power++,atk item,de buff item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KYYPPG2PVKFGNS2K7J',
					name: 'Fixed Power+',
					table: 'trait'
				},
				{
					id: '01HVZGS2KZBT75MCYNDWW65ESB',
					name: 'Fixed Power++',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Damage in Numbers'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Dreadful king enhances the material it resides in. Causes additional damage and status effects.',
		id: '01HVZGS2KZ60PGC0EDSN6D4EPY',
		index: 607,
		itemPresent: null,
		keyWords: 'dreadful king,607,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Dreadful King'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Attack item enhanced by a large, fixed amount. Lower power equals stronger enhancement.',
		id: '01HVZGS2KZBT75MCYNDWW65ESB',
		index: 61,
		itemPresent: null,
		keyWords: 'fixed power++,61,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Fixed Power++'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Attacks cause 5% additional damage, and increases skill power by 5%.',
		id: '01HVZGS2M03QK959JX0QZD6APV',
		index: 66,
		itemPresent: null,
		keyWords: 'increase sharpness,66,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Increase Sharpness'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a maximum MP increase. Maximum MP increases by 25.',
		id: '01HVZGS2M0XHJPCH7E0413CSGC',
		index: 198,
		itemPresent: null,
		keyWords: 'mp super enhance,198,accessory,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'MP Super Enhance'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Reduces item number variation slightly, making it easier to score higher numbers.',
		id: '01HVZGS2M0BSABT5E5X39JGKE4',
		index: 151,
		itemPresent: null,
		keyWords: 'stable effect,151,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Stable Effect'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a maximum LP increase. Maximum LP increases by 5.',
		id: '01HVZGS2M0AK5RX8B4Z9SZ2C7N',
		index: 202,
		itemPresent: null,
		keyWords: 'lp enhance,202,accessory,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'LP Enhance'
	},
	{
		categories: ['ACCESSORY', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Reduces MP consumption of skills by 30%.',
		id: '01HVZGS2M0M5Y2FR89SJ033HBX',
		index: 302,
		itemPresent: null,
		keyWords: 'compact mp consume,302,consume mp -15%,consume mp -20%,accessory,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KX4N7X65VY02ZYG577',
					name: 'Consume MP -15%',
					table: 'trait'
				},
				{
					id: '01HVZGS2M26SC0STT2594MRZ33',
					name: 'Consume MP -20%',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Compact MP Consume'
	},
	{
		categories: ['ACCESSORY', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows reduced MP consumption effect. Reduces MP consumption of skills by 10%.',
		id: '01HVZGS2M0EQS0V7D7H9GD1XTZ',
		index: 298,
		itemPresent: null,
		keyWords: 'consume mp -10%,298,accessory,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Consume MP -10%'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Attack item enhanced by a huge, fixed amount. Lower power equals stronger enhancement.',
		id: '01HVZGS2M0Z3RWYZ9QPTMRVBZ7',
		index: 64,
		itemPresent: null,
		keyWords: 'big damage numbers,64,pain in numbers,damage in numbers,atk item,de buff item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KZRTK0510W1Q97YGXE',
					name: 'Pain in Numbers',
					table: 'trait'
				},
				{
					id: '01HVZGS2KZ4F9B3Q6WR5NRC07A',
					name: 'Damage in Numbers',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Big Damage Numbers'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Attack item enhanced by a small, fixed amount. Lower power equals stronger enhancement.',
		id: '01HVZGS2M063GVS5QEGYS8XSB7',
		index: 59,
		itemPresent: null,
		keyWords: 'fixed power,59,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Fixed Power'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases recovery item effect by 40%.',
		id: '01HVZGS2M06HN75YXYP3JQ996N',
		index: 109,
		itemPresent: null,
		keyWords: 'blessed by god,109,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Blessed by God'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Has a chance to inflict Seal when dealing damage.',
		id: '01HVZGS2M158J4VR9ZSJ80QDDS',
		index: 372,
		itemPresent: null,
		keyWords: 'inflict seal,372,atk item,de buff item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Inflict Seal'
	},
	{
		categories: ['ARMOR', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases attack & defense by 5.',
		id: '01HVZGS2M1F29X5BRWG4W42JT8',
		index: 236,
		itemPresent: null,
		keyWords: 'atk def enhance,236,attack enhance,defense enhance,armor,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M1D2YBV8P6RZZYHTVA',
					name: 'Attack Enhance',
					table: 'trait'
				},
				{
					id: '01HVZGS2M22KB341Z65JAMM2ZV',
					name: 'Defense Enhance',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'ATK DEF Enhance'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Maximum HP increases by 70.',
		id: '01HVZGS2M13844J8YA3EPQXDJK',
		index: 195,
		itemPresent: null,
		keyWords: 'power of life,195,full of life,overflowing life,accessory,armor,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KY1FYZX1YBHPF2A6DV',
					name: 'Full of Life',
					table: 'trait'
				},
				{
					id: '01HVZGS2MAEJZ9PRW4XCWQM74T',
					name: 'Overflowing Life',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Power of Life'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Maximum HP and MP increases by 25.',
		id: '01HVZGS2M1CN7S41TBVT7HPKN8',
		index: 209,
		itemPresent: null,
		keyWords: "hpmp boost,209,overflowing life,grand magician's wisdom,accessory,armor,exploration,synthesis",
		mergeFrom: [
			[
				{
					id: '01HVZGS2MAEJZ9PRW4XCWQM74T',
					name: 'Overflowing Life',
					table: 'trait'
				},
				{
					id: '01HVZGS2M1JTM1ZTJ1JK7JWT4A',
					name: "Grand Magician's Wisdom",
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'HPMP Boost'
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases base stats by 12%.',
		id: '01HVZGS2M1NCSX0D6JXE635XAP',
		index: 215,
		itemPresent: null,
		keyWords: 'draw out power,215,parameters +6%,parameters +7%,armor,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M2GKHRFABFKYGCB2AV',
					name: 'Parameters +6%',
					table: 'trait'
				},
				{
					id: '01HVZGS2M2QQ8KQ7BT5HQVKQS1',
					name: 'Parameters +7%',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Draw Out Power'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Enhances weapon attack power. Increases attack power by 7.',
		id: '01HVZGS2M1D2YBV8P6RZZYHTVA',
		index: 218,
		itemPresent: null,
		keyWords: 'attack enhance,218,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Attack Enhance'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Item will always critical hit, and KO target (bosses excluded).',
		id: '01HVZGS2M1P0TWRE5FC8PG03A3',
		index: 150,
		itemPresent: null,
		keyWords: 'one hit kill,150,critical finish,always critical,atk item,de buff item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2MA67PBKBJC0S29KSV5',
					name: 'Critical Finish',
					table: 'trait'
				},
				{
					id: '01HVZGS2MA11TA0NRVSDK12P36',
					name: 'Always Critical',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'One Hit Kill'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Accessories with this will increase speed. Increases speed by 15.',
		id: '01HVZGS2M1MX3ENJ9RPXPXYSPW',
		index: 232,
		itemPresent: null,
		keyWords: 'speed super enhance,232,accessory,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Speed Super Enhance'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Reduces item use count by 1. Power is increased a little.',
		id: '01HVZGS2M1D7KT5AREWD7Y331V',
		index: 175,
		itemPresent: null,
		keyWords: 'use count -1,175,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Use Count -1'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a maximum HP increase. Maximum HP increases by 15.',
		id: '01HVZGS2M10GDGWHQ4KV7M6ZYK',
		index: 191,
		itemPresent: null,
		keyWords: 'hp boost,191,accessory,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'HP Boost'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Reduces item use count by 2. Power is increased.',
		id: '01HVZGS2M1SA33RYMXT4GCSG86',
		index: 176,
		itemPresent: null,
		keyWords: 'use count -2,176,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Use Count -2'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a maximum HP increase. Maximum HP increases by 25.',
		id: '01HVZGS2M1QQFWX1EEPHTJ68H1',
		index: 192,
		itemPresent: null,
		keyWords: 'hp super enhance,192,accessory,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'HP Super Enhance'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Halves item number variation, making it easier to score higher numbers.',
		id: '01HVZGS2M25J030HRJJZWNW1ES',
		index: 155,
		itemPresent: null,
		keyWords:
			'solid effect,155,stable effect+,stable effect++,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M18HFW5CSRKTV08SHC',
					name: 'Stable Effect+',
					table: 'trait'
				},
				{
					id: '01HVZGS2M15FBBP9262FM8K01Q',
					name: 'Stable Effect++',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Solid Effect'
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a stat boost. Increases base stats by 5%.',
		id: '01HVZGS2M2AQF66GXPSJP17NEH',
		index: 211,
		itemPresent: null,
		keyWords: 'parameters +5%,211,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Parameters +5%'
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a stat boost. Increases base stats by 7%.',
		id: '01HVZGS2M2QQ8KQ7BT5HQVKQS1',
		index: 213,
		itemPresent: null,
		keyWords: 'parameters +7%,213,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Parameters +7%'
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases defense by 25.',
		id: '01HVZGS2M28SP349SC03HP9W50',
		index: 228,
		itemPresent: null,
		keyWords: 'diamond defense,228,defense boost,defense super enhance,armor,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M2AXSJ27NG77JVTRGD',
					name: 'Defense Boost',
					table: 'trait'
				},
				{
					id: '01HVZGS2KZYHDJDKA3470F7NPJ',
					name: 'Defense Super Enhance',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Diamond Defense'
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Enhances armor defense. Increases defense by 7.',
		id: '01HVZGS2M22KB341Z65JAMM2ZV',
		index: 224,
		itemPresent: null,
		keyWords: 'defense enhance,224,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Defense Enhance'
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Enhances armor defense. Increases defense by 10.',
		id: '01HVZGS2M2AXSJ27NG77JVTRGD',
		index: 225,
		itemPresent: null,
		keyWords: 'defense boost,225,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Defense Boost'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Accessories with this will increase speed. Increases speed by 7.',
		id: '01HVZGS2M283E91QY2GN90Z119',
		index: 230,
		itemPresent: null,
		keyWords: 'speed enhance,230,accessory,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Speed Enhance'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Reduces WT after using item by 10%. Power is decreased slightly.',
		id: '01HVZGS2M2KYTZVTNFJS8PHPNQ',
		index: 541,
		itemPresent: null,
		keyWords: 'fast use,541,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Fast Use'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases attack power by 40.',
		id: '01HVZGS2M2Q95NS782APYG8WPA',
		index: 223,
		itemPresent: null,
		keyWords: 'power of gods,223,power of beasts,power of destruction,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KWZ8ZE59E26113QB7Y',
					name: 'Power of Beasts',
					table: 'trait'
				},
				{
					id: '01HVZGS2M1FHV6JS381S9N0BNA',
					name: 'Power of Destruction',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Power of Gods'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows increased skill power effect. Increases skill power and MP consumption by 5%.',
		id: '01HVZGS2M3S2YPQWT3F89Q71R9',
		index: 304,
		itemPresent: null,
		keyWords: 'skill power +5%,304,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Skill Power +5%'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Zeal factor enhances the material it resides in. Increases HP and attack.',
		id: '01HVZGS2M3BQBAZM0ST3XFERZR',
		index: 592,
		itemPresent: null,
		keyWords: 'zeal factor,592,accessory,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Zeal Factor'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Massively increases the target's level.",
		id: '01HVZGS2M300HY2PXYFS3P22QM',
		index: 349,
		itemPresent: null,
		keyWords: 'soul dwelling,349,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Soul Dwelling'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Has a chance to inflict Curse when dealing damage.',
		id: '01HVZGS2M3G3M4KGZE2K144XK0',
		index: 368,
		itemPresent: null,
		keyWords: 'inflict curse,368,atk item,de buff item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Inflict Curse'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Massively reduces the target's attack power.",
		id: '01HVZGS2M3PCVYVWC9XX499W2Y',
		index: 374,
		itemPresent: null,
		keyWords: 'powerless curse,374,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Powerless Curse'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Power increases by 30% when use count is 1.',
		id: '01HVZGS2M317DVKYBBKY2VDGZ8',
		index: 509,
		itemPresent: null,
		keyWords:
			'final blow,509,enhance last,enhance last+,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M5D1PNA60DGH706XCM',
					name: 'Enhance Last',
					table: 'trait'
				},
				{
					id: '01HVZGS2M72X95KX5D2X4X8BQ1',
					name: 'Enhance Last+',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Final Blow'
	},
	{
		categories: ['ACCESSORY', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Reduces MP consumption of skills by 50%.',
		id: '01HVZGS2M3AFW8FWMPZ2AZJBKF',
		index: 303,
		itemPresent: null,
		keyWords: 'halve mp consume,303,cut mp consume,compact mp consume,accessory,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M4AFQCPH8G9H2BAYQP',
					name: 'Cut MP Consume',
					table: 'trait'
				},
				{
					id: '01HVZGS2M0M5Y2FR89SJ033HBX',
					name: 'Compact MP Consume',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Halve MP Consume'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Power increases by number of targets in effect area x 20%.',
		id: '01HVZGS2M3FCYPY4P0EFKND1PX',
		index: 483,
		itemPresent: null,
		keyWords: 'multi bonus,483,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Multi Bonus'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases skill power and MP consumption by 30%.',
		id: '01HVZGS2M356HYTZV437EQXP0J',
		index: 309,
		itemPresent: null,
		keyWords: 'skill super enhance,309,skill enhance,skill boost,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M0MD3N66G6CFAVG37J',
					name: 'Skill Enhance',
					table: 'trait'
				},
				{
					id: '01HVZGS2M5ZJ8NV4H2VGMFSCDP',
					name: 'Skill Boost',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Skill Super Enhance'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Unwavering spirit enhances the material it resides in. Increases all stats by 15, bestows lightning and physical resistance.',
		id: '01HVZGS2M471YV3PKQRFDCC4BE',
		index: 603,
		itemPresent: null,
		keyWords: 'unwavering spirit,603,accessory,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Unwavering Spirit'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Absorb 7% of damage dealt through attacks to restore your own HP.',
		id: '01HVZGS2M4PM3ZMVK1SDNYK18H',
		index: 404,
		itemPresent: null,
		keyWords: 'hp absorb,404,damage absorb,damage absorb+,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M6SRCKZ9T8QKX5RVSA',
					name: 'Damage Absorb',
					table: 'trait'
				},
				{
					id: '01HVZGS2M42S8810ZKPKP8SJ6D',
					name: 'Damage Absorb+',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'HP Absorb'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a maximum MP increase. Maximum MP increases by 10.',
		id: '01HVZGS2M23ST5ZKHJVRP1TJW5',
		index: 196,
		itemPresent: null,
		keyWords: 'mp enhance,196,accessory,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'MP Enhance'
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases base stats by 10%.',
		id: '01HVZGS2M2MXN17QYT2EERMAS1',
		index: 214,
		itemPresent: null,
		keyWords: 'enhance the body,214,parameters +5%,parameters +6%,armor,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M2AQF66GXPSJP17NEH',
					name: 'Parameters +5%',
					table: 'trait'
				},
				{
					id: '01HVZGS2M2GKHRFABFKYGCB2AV',
					name: 'Parameters +6%',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Enhance the Body'
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows a stat boost. Increases base stats by 6%.',
		id: '01HVZGS2M2GKHRFABFKYGCB2AV',
		index: 212,
		itemPresent: null,
		keyWords: 'parameters +6%,212,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Parameters +6%'
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases base stats by 15%.',
		id: '01HVZGS2M2H1P1KPH2P74VVW69',
		index: 216,
		itemPresent: null,
		keyWords: 'develops the body,216,enhance the body,draw out power,armor,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M2MXN17QYT2EERMAS1',
					name: 'Enhance the Body',
					table: 'trait'
				},
				{
					id: '01HVZGS2M1NCSX0D6JXE635XAP',
					name: 'Draw Out Power',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Develops the Body'
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases base stats by 20%.',
		id: '01HVZGS2M2778SK2MG5J1RW8PV',
		index: 217,
		itemPresent: null,
		keyWords: 'evolves the body,217,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Evolves the Body'
	},
	{
		categories: ['ACCESSORY', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases attack & speed by 5.',
		id: '01HVZGS2M2WDT2DH40TSCEH7ZF',
		index: 237,
		itemPresent: null,
		keyWords: 'atk spd enhance,237,attack enhance,speed enhance,accessory,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M1D2YBV8P6RZZYHTVA',
					name: 'Attack Enhance',
					table: 'trait'
				},
				{
					id: '01HVZGS2M283E91QY2GN90Z119',
					name: 'Speed Enhance',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'ATK SPD Enhance'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases speed by 25.',
		id: '01HVZGS2M22V93Z4Y1Q6C42GRN',
		index: 234,
		itemPresent: null,
		keyWords: 'speed of gods,234,speed boost,speed super enhance,accessory,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M1GWTPA98X0G8MM3PA',
					name: 'Speed Boost',
					table: 'trait'
				},
				{
					id: '01HVZGS2M1MX3ENJ9RPXPXYSPW',
					name: 'Speed Super Enhance',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Speed of Gods'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases attack & defense by 7.',
		id: '01HVZGS2M2G3DVRF8874552AT6',
		index: 240,
		itemPresent: null,
		keyWords: 'atk def boost,240,attack boost,defense boost,accessory,armor,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M1ET2YHR3NGC93AVDS',
					name: 'Attack Boost',
					table: 'trait'
				},
				{
					id: '01HVZGS2M2AXSJ27NG77JVTRGD',
					name: 'Defense Boost',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'ATK DEF Boost'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases all stats except resistances by 10.',
		id: '01HVZGS2M233JF6S5VW1Z9BN6C',
		index: 244,
		itemPresent: null,
		keyWords:
			'all stat super enhance,244,all stat enhance,all stat boost,accessory,armor,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2MBKNTS5BRN8X9ZGEB8',
					name: 'All Stat Enhance',
					table: 'trait'
				},
				{
					id: '01HVZGS2MBF4X021YBX3KH9YW4',
					name: 'All Stat Boost',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'All Stat Super Enhance'
	},
	{
		categories: ['ACCESSORY', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows reduced MP consumption effect. Reduces MP consumption of skills by 20%.',
		id: '01HVZGS2M26SC0STT2594MRZ33',
		index: 300,
		itemPresent: null,
		keyWords: 'consume mp -20%,300,accessory,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Consume MP -20%'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Bestows increased skill power effect. Increases skill power and MP consumption by 7%.',
		id: '01HVZGS2M3SSGASPW19W6FW5QN',
		index: 305,
		itemPresent: null,
		keyWords: 'skill power +7%,305,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Skill Power +7%'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Maximum HP and MP increases by 15.',
		id: '01HVZGS2M3CVVNGTDTP8WQRNAH',
		index: 208,
		itemPresent: null,
		keyWords: "hpmp enhance,208,full of life,magician's wisdom,accessory,armor,exploration,synthesis",
		mergeFrom: [
			[
				{
					id: '01HVZGS2KY1FYZX1YBHPF2A6DV',
					name: 'Full of Life',
					table: 'trait'
				},
				{
					id: '01HVZGS2KW7DE8FEV5N2BVJAQG',
					name: "Magician's Wisdom",
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'HPMP Enhance'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Has a chance to inflict Slow when dealing damage.',
		id: '01HVZGS2M3XZNT9QRX4EN1AFKA',
		index: 367,
		itemPresent: null,
		keyWords: 'inflict slow,367,atk item,de buff item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Inflict Slow'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Massively reduces the target's level, reducing all stats and damage dealt.",
		id: '01HVZGS2M3B2ZXXWKQFQM9ZPC7',
		index: 373,
		itemPresent: null,
		keyWords: 'consume soul,373,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Consume Soul'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Absorb 7% of damage dealt through attacks to restore your own HP.',
		id: '01HVZGS2M3T3QBCE213N92YP19',
		index: 403,
		itemPresent: null,
		keyWords: 'damage absorb++,403,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Damage Absorb++'
	},
	{
		categories: ['EXPLORATION', 'SYNTHESIS'],
		description: 'Increases damage dealt to Slag type enemies.',
		id: '01HVZGS2M30RXE927NGAW707C9',
		index: 422,
		itemPresent: null,
		keyWords: 'slag slayer,422,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Slag Slayer'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Power increases by number of targets in effect area x 10%.',
		id: '01HVZGS2M3EEP1X1R8VVTT0TZT',
		index: 481,
		itemPresent: null,
		keyWords: 'area bonus+,481,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Area Bonus+'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Power increases by 30 / number of targets in effect area %.',
		id: '01HVZGS2M35M44NANDF1C1Q6E9',
		index: 487,
		itemPresent: null,
		keyWords: 'single bonus,487,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Single Bonus'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases defense & speed by 5.',
		id: '01HVZGS2M31P9J2GZ52SXXR9YZ',
		index: 238,
		itemPresent: null,
		keyWords: 'def spd enhance,238,defense enhance,speed enhance,accessory,armor,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M22KB341Z65JAMM2ZV',
					name: 'Defense Enhance',
					table: 'trait'
				},
				{
					id: '01HVZGS2M283E91QY2GN90Z119',
					name: 'Speed Enhance',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'DEF SPD Enhance'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Completely consumes item in 1 use during battle, but increases power by use count x 7%.',
		id: '01HVZGS2M490EYAHZARDX32CRG',
		index: 513,
		itemPresent: null,
		keyWords:
			'force final,513,count compress,count compress+,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M7Y7PHYSE2S38BM0NG',
					name: 'Count Compress',
					table: 'trait'
				},
				{
					id: '01HVZGS2M5XHYEMNXM7GH99YJA',
					name: 'Count Compress+',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Force Final'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases damage dealt to Broken targets by 60%.',
		id: '01HVZGS2M4HSNFA76TCCRG1RKF',
		index: 451,
		itemPresent: null,
		keyWords: 'ruthless blow,451,merciless blow,relentless blow,atk item,de buff item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M5VWSHKJPQY6TEFYZB',
					name: 'Merciless Blow',
					table: 'trait'
				},
				{
					id: '01HVZGS2MACE51MMN8PCZ5ZJ7T',
					name: 'Relentless Blow',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Ruthless Blow'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Massively increases the target's defense.",
		id: '01HVZGS2M48JDETA1WXQK3Q8YY',
		index: 351,
		itemPresent: null,
		keyWords: 'blessing of protection,351,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Blessing of Protection'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Has a chance to inflict Sleep when dealing damage.',
		id: '01HVZGS2M48KQ9SRBWC5R9JDQ9',
		index: 365,
		itemPresent: null,
		keyWords: 'inflict sleep,365,atk item,de buff item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Inflict Sleep'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Massively reduces the target's defense.",
		id: '01HVZGS2M4K3J33BGBDR0MA0TT',
		index: 375,
		itemPresent: null,
		keyWords: 'defenseless curse,375,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Defenseless Curse'
	},
	{
		categories: ['ATK_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases damage dealt to Plant and Spirit type enemies.',
		id: '01HVZGS2M4NN8VSM8FTSZ7DHYZ',
		index: 423,
		itemPresent: null,
		keyWords: 'spirit slayer,423,atk item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Spirit Slayer'
	},
	{
		categories: ['ACCESSORY', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Reduces MP consumption of skills by 20%.',
		id: '01HVZGS2M4AFQCPH8G9H2BAYQP',
		index: 301,
		itemPresent: null,
		keyWords: 'cut mp consume,301,consume mp -10%,consume mp -15%,accessory,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M0EQS0V7D7H9GD1XTZ',
					name: 'Consume MP -10%',
					table: 'trait'
				},
				{
					id: '01HVZGS2KX4N7X65VY02ZYG577',
					name: 'Consume MP -15%',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Cut MP Consume'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Power increases by number of targets in effect area x 5%.',
		id: '01HVZGS2M4AXGDFXHH4AJTXSYK',
		index: 480,
		itemPresent: null,
		keyWords: 'area bonus,480,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Area Bonus'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Completely consumes item in 1 use during battle, but increases power by use count x 10%.',
		id: '01HVZGS2M4H8ZHVXFEANV62VDF',
		index: 514,
		itemPresent: null,
		keyWords: 'one time end,514,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'One Time End'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Item size decreases by 1 level, equipment cost decreases by 10.',
		id: '01HVZGS2M4KSNF0C28E3NN3487',
		index: 573,
		itemPresent: null,
		keyWords: 'size -,573,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Size -'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Persistent faith enhances the material it resides in. Provides HP regeneration and chance to avoid KO.',
		id: '01HVZGS2M5DVRDHVTQMMPSQMK2',
		index: 598,
		itemPresent: null,
		keyWords: 'persistent faith,598,accessory,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Persistent Faith'
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases defense by 30, and increases all base stats by 15%.',
		id: '01HVZGS2M5GSB619KFY1S9FVVG',
		index: 247,
		itemPresent: null,
		keyWords: 'tenacious body,247,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Tenacious Body'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases defense & speed by 7.',
		id: '01HVZGS2M5TVTKWFWFVYZ9QR8F',
		index: 242,
		itemPresent: null,
		keyWords: 'def spd boost,242,defense boost,speed boost,accessory,armor,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M2AXSJ27NG77JVTRGD',
					name: 'Defense Boost',
					table: 'trait'
				},
				{
					id: '01HVZGS2M1GWTPA98X0G8MM3PA',
					name: 'Speed Boost',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'DEF SPD Boost'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Has a chance to inflict Poison when dealing damage.',
		id: '01HVZGS2M5PJ60VVX406NBCZJN',
		index: 366,
		itemPresent: null,
		keyWords: 'inflict poison,366,atk item,de buff item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Inflict Poison'
	},
	{
		categories: ['ATK_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases damage dealt to Animal and Beast type enemies.',
		id: '01HVZGS2M5K4803EPTQDRGM0Y3',
		index: 424,
		itemPresent: null,
		keyWords: 'beast slayer,424,atk item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Beast Slayer'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases damage dealt to Broken targets by 30%.',
		id: '01HVZGS2M53PWBJVJFAD3PD99C',
		index: 448,
		itemPresent: null,
		keyWords: 'enhance finisher++,448,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Enhance Finisher++'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Power increases by 10 / number of targets in effect area %.',
		id: '01HVZGS2M5Y9AG664WQ5CZMZ60',
		index: 484,
		itemPresent: null,
		keyWords: 'fewer bonus,484,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Fewer Bonus'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Completely consumes item in 1 use during battle, but increases power by use count x 5%.',
		id: '01HVZGS2M5XHYEMNXM7GH99YJA',
		index: 512,
		itemPresent: null,
		keyWords: 'count compress+,512,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Count Compress+'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases item power by a decent amount proportional to wait time after using item.',
		id: '01HVZGS2M5VKDQ5QH5M6N8ARHA',
		index: 549,
		itemPresent: null,
		keyWords: 'wait time enhance+,549,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Wait Time Enhance+'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Absorb 15% of damage dealt through attacks to restore your own HP.',
		id: '01HVZGS2M65DP8DV5AH3W1PA9K',
		index: 406,
		itemPresent: null,
		keyWords: 'absorb soul,406,hp absorb,steal life,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M4PM3ZMVK1SDNYK18H',
					name: 'HP Absorb',
					table: 'trait'
				},
				{
					id: '01HVZGS2MB6PWFMA9ERSF9EQXW',
					name: 'Steal Life',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Absorb Soul'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Hammer of justice enhances the material it resides in. Greatly increases skill power, adds Break value.',
		id: '01HVZGS2M609YHXNGY0TJZHY2Q',
		index: 606,
		itemPresent: null,
		keyWords: 'hammer of justice,606,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Hammer of Justice'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Has a chance to inflict Weak when dealing damage.',
		id: '01HVZGS2M62KWD40BNM97MDFR1',
		index: 370,
		itemPresent: null,
		keyWords: 'inflict weak,370,atk item,de buff item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Inflict Weak'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Absorb 3% of damage dealt through attacks to restore your own HP.',
		id: '01HVZGS2M6SRCKZ9T8QKX5RVSA',
		index: 401,
		itemPresent: null,
		keyWords: 'damage absorb,401,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Damage Absorb'
	},
	{
		categories: ['ATK_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases damage dealt to Demon type enemies.',
		id: '01HVZGS2M68KYS4G0DTMBC9EF8',
		index: 425,
		itemPresent: null,
		keyWords: 'demon slayer,425,atk item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Demon Slayer'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Reduces WT after using item by 30%. Power is decreased a small amount.',
		id: '01HVZGS2M687J81GEH924HH086',
		index: 543,
		itemPresent: null,
		keyWords: 'sonic throw,543,fast use,fast use+,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M2KYTZVTNFJS8PHPNQ',
					name: 'Fast Use',
					table: 'trait'
				},
				{
					id: '01HVZGS2M67PV61CS2A6ATXKZ1',
					name: 'Fast Use+',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Sonic Throw'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Power increases by 45% when use count is 1.',
		id: '01HVZGS2M6YW9JXEST5NB7NFH5',
		index: 510,
		itemPresent: null,
		keyWords: 'last strike,510,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Last Strike'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Reduces WT after using item by 20%. Power is decreased a small amount.',
		id: '01HVZGS2M67PV61CS2A6ATXKZ1',
		index: 542,
		itemPresent: null,
		keyWords: 'fast use+,542,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Fast Use+'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Has a chance to inflict No Heal when dealing damage.',
		id: '01HVZGS2M4Y34P4714AZMSQ64D',
		index: 371,
		itemPresent: null,
		keyWords: 'inflict no heal,371,atk item,de buff item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Inflict No Heal'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Absorb 5% of damage dealt through attacks to restore your own HP.',
		id: '01HVZGS2M42S8810ZKPKP8SJ6D',
		index: 402,
		itemPresent: null,
		keyWords: 'damage absorb+,402,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Damage Absorb+'
	},
	{
		categories: ['ATK_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases damage dealt to Puni type enemies.',
		id: '01HVZGS2M4NFEPDS7N6RA0RCPT',
		index: 428,
		itemPresent: null,
		keyWords: 'puni slayer,428,atk item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Puni Slayer'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Greatly enhances item effect according to strength of traits present.',
		id: '01HVZGS2M40YK4D99DS7FY3BEX',
		index: 465,
		itemPresent: null,
		keyWords: 'trait enhance+,465,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Trait Enhance+'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Power increases by 15 / number of targets in effect area %.',
		id: '01HVZGS2M49QEWZ5MEXMZWGK7Q',
		index: 485,
		itemPresent: null,
		keyWords: 'fewer bonus+,485,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Fewer Bonus+'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases item power by a small amount proportional to wait time after using item.',
		id: '01HVZGS2M4YBPRJSXVXBAQETVA',
		index: 548,
		itemPresent: null,
		keyWords: 'wait time enhance,548,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Wait Time Enhance'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases item effect by a decent amount as size increases.',
		id: '01HVZGS2M476BN9Q0VY603NFMT',
		index: 575,
		itemPresent: null,
		keyWords: 'size enhance,575,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Size Enhance'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Guiding intuition enhances the material it resides in. Increases critical hit rate, has a chance to shorten wait time.',
		id: '01HVZGS2M5E7Q5N148H60XHQG7',
		index: 599,
		itemPresent: null,
		keyWords: 'guide intuition,599,accessory,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Guide Intuition'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases skill power and MP consumption by 17%.',
		id: '01HVZGS2M5ZJ8NV4H2VGMFSCDP',
		index: 308,
		itemPresent: null,
		keyWords: 'skill boost,308,skill power +7%,skill power +10%,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M3SSGASPW19W6FW5QN',
					name: 'Skill Power +7%',
					table: 'trait'
				},
				{
					id: '01HVZGS2KXGZC741EAEM8ZPYKM',
					name: 'Skill Power +10%',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Skill Boost'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases skill power by 35%, and reduces MP consumption by 35%.',
		id: '01HVZGS2M5DZWW4SP8752Y1S8Z',
		index: 314,
		itemPresent: null,
		keyWords: 'super skill,314,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Super Skill'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases damage dealt to Broken targets by 30%.',
		id: '01HVZGS2M5VWSHKJPQY6TEFYZB',
		index: 449,
		itemPresent: null,
		keyWords: 'merciless blow,449,enhance finisher,enhance finisher+,atk item,de buff item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M6Q2H87SPSQ787HQNZ',
					name: 'Enhance Finisher',
					table: 'trait'
				},
				{
					id: '01HVZGS2MA4JT2FVW2BDH1CP56',
					name: 'Enhance Finisher+',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Merciless Blow'
	},
	{
		categories: ['ATK_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases damage dealt to monsters created through magic and alchemy.',
		id: '01HVZGS2M5XMF3RPQKM7PWEKVE',
		index: 427,
		itemPresent: {
			id: '01HVZGS2KC86ZRHDFPM8FR7ND9',
			name: 'Pretty Fragment',
			table: 'item'
		},
		keyWords: 'magical slayer,427,pretty fragment,atk item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Magical Slayer'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Enhances item effect according to strength of traits present. Stronger traits equal ridiculously greater enhancement.',
		id: '01HVZGS2M5KXJ55DM88VYMJPJR',
		index: 467,
		itemPresent: null,
		keyWords: 'trait super enhance,467,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Trait Super Enhance'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Power increases by 10% when use count is 1.',
		id: '01HVZGS2M5D1PNA60DGH706XCM',
		index: 507,
		itemPresent: null,
		keyWords: 'enhance last,507,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Enhance Last'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Reduces equipment cost of usable item by 12.',
		id: '01HVZGS2M5RRDBH6DP9P9S2RCV',
		index: 580,
		itemPresent: null,
		keyWords:
			'easy to handle,580,kind of light,light,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M6F6MTY9GCEEK3YT0Z',
					name: 'Kind of Light',
					table: 'trait'
				},
				{
					id: '01HVZGS2M80AST2J4DYC22CE38',
					name: 'Light',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Easy to Handle'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Reduces equipment cost of usable item by 5.',
		id: '01HVZGS2M6F6MTY9GCEEK3YT0Z',
		index: 578,
		itemPresent: null,
		keyWords: 'kind of light,578,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Kind of Light'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Cunning wit enhances the material it resides in. Increases critical bonus and accuracy.',
		id: '01HVZGS2M6TMW3CSW3HNM90ACP',
		index: 594,
		itemPresent: null,
		keyWords: 'cunning wit,594,accessory,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Cunning Wit'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Massively increases the target's attack power.",
		id: '01HVZGS2M6DZ9ATH6DNXFTGE4N',
		index: 350,
		itemPresent: null,
		keyWords: 'blessing of strength,350,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Blessing of Strength'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Massively reduces the target's speed.",
		id: '01HVZGS2M6VR9GN4F898E9SFX2',
		index: 376,
		itemPresent: null,
		keyWords: 'slowness curse,376,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Slowness Curse'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases skill power by 15%, and reduces MP consumption by 15%.',
		id: '01HVZGS2M6QTQ1ZBWVSR1J42PZ',
		index: 312,
		itemPresent: null,
		keyWords: 'skill savings,312,halve mp consume,skill super enhance,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M3AFW8FWMPZ2AZJBKF',
					name: 'Halve MP Consume',
					table: 'trait'
				},
				{
					id: '01HVZGS2M356HYTZV437EQXP0J',
					name: 'Skill Super Enhance',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Skill Savings'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases damage dealt to Broken targets by 10%.',
		id: '01HVZGS2M6Q2H87SPSQ787HQNZ',
		index: 446,
		itemPresent: null,
		keyWords: 'enhance finisher,446,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Enhance Finisher'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Enhances item effect according to strength of traits present.',
		id: '01HVZGS2M69KVR5E8PKJ314KSC',
		index: 464,
		itemPresent: null,
		keyWords: 'trait enhance,464,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Trait Enhance'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases item power by maximum use count x 3%.',
		id: '01HVZGS2M6J8N0958SZAPJC07R',
		index: 516,
		itemPresent: null,
		keyWords: 'count bonus+,516,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Count Bonus+'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Reduces WT after using item by 50%.',
		id: '01HVZGS2M6QSGJEGVSVVQN9MGJ',
		index: 544,
		itemPresent: null,
		keyWords: 'mach throw,544,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Mach Throw'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Wait time after using item increases, but power increases too.',
		id: '01HVZGS2M62VB6PHD7T0E30XR0',
		index: 546,
		itemPresent: null,
		keyWords: 'power throw+,546,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Power Throw+'
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Star of expectation enhances the material it resides in. Provides enhancement proportional to level.',
		id: '01HVZGS2M6697T9CESTA4J6ZYH',
		index: 610,
		itemPresent: null,
		keyWords: 'star of expectation,610,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Star of Expectation'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Attacks cause between 1 - 50% additional damage.',
		id: '01HVZGS2M7H4K0WC0R2MAE3ZAF',
		index: 664,
		itemPresent: null,
		keyWords: 'deadly attack,664,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Deadly Attack'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Restores some of the target's HP, and also recovers from Poison.",
		id: '01HVZGS2M7DN3TTWEZ9HEDY874',
		index: 683,
		itemPresent: {
			id: '01HVZGS2K6S98Y00KXRBWNM7Y8',
			name: 'Crimson Herb',
			table: 'item'
		},
		keyWords: 'slime compound,683,crimson herb,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Slime Compound'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'The target recovers a small amount of HP, and also recovers from Weak.',
		id: '01HVZGS2M7QQXE1TBN333GG697',
		index: 694,
		itemPresent: {
			id: '01HVZGS2KCHE7N4G05V466BF0P',
			name: 'Kirchen Milk',
			table: 'item'
		},
		keyWords: 'kirchen bell special,694,kirchen milk,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Kirchen Bell Special'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Power increases by 20% when use count is 1.',
		id: '01HVZGS2M72X95KX5D2X4X8BQ1',
		index: 508,
		itemPresent: null,
		keyWords: 'enhance last+,508,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Enhance Last+'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases item power by maximum use count x 7%.',
		id: '01HVZGS2M7HTC25VBMTM5YS157',
		index: 518,
		itemPresent: null,
		keyWords: 'enhance with count,518,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Enhance with Count'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases item effect as size increases.',
		id: '01HVZGS2M71PMMQ4KJB9F8DM6E',
		index: 576,
		itemPresent: null,
		keyWords: 'size super enhance,576,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Size Super Enhance'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Power of madness enhances the material it resides in. Greatly increases attack power, lose lots of HP each turn.',
		id: '01HVZGS2M7NT71G5D0034FNQ9R',
		index: 601,
		itemPresent: null,
		keyWords: 'power of madness,601,accessory,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Power of Madness'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Unceasing desire enhances the material it resides in. Absorbs a portion of damage dealt.',
		id: '01HVZGS2M78P0ZMG69W6V5KV5P',
		index: 608,
		itemPresent: null,
		keyWords: 'unceasing desire,608,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Unceasing Desire'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Attacks cause 20% additional damage, and increases skill power by 25%.',
		id: '01HVZGS2M77F7K2QKG7MV4WSW6',
		index: 662,
		itemPresent: null,
		keyWords: 'skillful attack,662,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Skillful Attack'
	},
	{
		categories: ['ACCESSORY', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Reduces skill power by 10%, but also reduces MP consumption by 30%.',
		id: '01HVZGS2M73QV9MSKM2EMNCJE8',
		index: 690,
		itemPresent: {
			id: '01HVZGS2K8C4FCC9FB94WE54PV',
			name: 'Night Crystal',
			table: 'item'
		},
		keyWords: 'absorbs light,690,night crystal,accessory,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Absorbs Light'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description:
			"Increases the target's maximum HP during battle, and also reduces the effectiveness of status ailments. The effect is small.",
		id: '01HVZGS2M7CV2YQ2MDB0846NBP',
		index: 702,
		itemPresent: {
			id: '01HVZGS2K85S7HYMEZSG8G6G6W',
			name: 'Zafloa Oil',
			table: 'item'
		},
		keyWords: 'secret of health,702,zafloa oil,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Secret of Health'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Wait time after using item increases a little, but power increases a little too.',
		id: '01HVZGS2M82XK1X5575MA7H4ZV',
		index: 545,
		itemPresent: null,
		keyWords: 'power throw,545,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Power Throw'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Item size decreases by 2 levels, equipment cost decreases by 20.',
		id: '01HVZGS2M8FQY1XW15QZBAKBY8',
		index: 574,
		itemPresent: null,
		keyWords: 'mini size,574,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Mini Size'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Splendid glory enhances the material it resides in. Increases WT delay resistance and Break resistance.',
		id: '01HVZGS2M8N5WPC23JNPBXB2DK',
		index: 595,
		itemPresent: null,
		keyWords: 'splendid glory,595,accessory,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Splendid Glory'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Fog of illusion enhances the material it resides in. Swaps HP and MP, adds evasion chance.',
		id: '01HVZGS2M8NK358SXA92S1P17K',
		index: 604,
		itemPresent: null,
		keyWords: 'fog of illusion,604,accessory,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Fog of Illusion'
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Indomitable soul enhances the material it resides in. Provides Break resistance and greatly increases speed of recovering from Break.',
		id: '01HVZGS2M84JQ3CF47WDWJ48ZY',
		index: 614,
		itemPresent: null,
		keyWords: 'indomitable soul,614,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Indomitable Soul'
	},
	{
		categories: ['HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Item automatically activates when the user's HP falls below 40% in battle. Consumes MP.",
		id: '01HVZGS2M8H4FS7EBBWS2B7VQS',
		index: 679,
		itemPresent: null,
		keyWords: 'auto activate 50%,679,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Auto Activate 50%'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description:
			"Pushes back the target's turn a little. This effect diminishes with each use until the target takes another turn.",
		id: '01HVZGS2M8C4Q4QWSS1EF1B681',
		index: 685,
		itemPresent: {
			id: '01HVZGS2K6QHA3YA17YTVTC9MN',
			name: 'Raiden Ore',
			table: 'item'
		},
		keyWords: 'electrified,685,raiden ore,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Electrified'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases attack item effect by 15%.',
		id: '01HVZGS2M8NNWBQF37T0DTDQTD',
		index: 699,
		itemPresent: null,
		keyWords: 'super fine,699,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Super Fine'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases item effect by a large amount as size increases.',
		id: '01HVZGS2M874QSZRVB381EYR6C',
		index: 577,
		itemPresent: null,
		keyWords:
			'crush dimension,577,size enhance,size super enhance,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M476BN9Q0VY603NFMT',
					name: 'Size Enhance',
					table: 'trait'
				},
				{
					id: '01HVZGS2M71PMMQ4KJB9F8DM6E',
					name: 'Size Super Enhance',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Crush Dimension'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Benevolent light enhances the material it resides in. Provides damage reversal and immunity to all ailments.',
		id: '01HVZGS2M8YT852RYAT5861QMS',
		index: 596,
		itemPresent: null,
		keyWords: 'benevolent light,596,accessory,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Benevolent Light'
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Ray of hope enhances the material it resides in. Increases maximum HP, provides automatic KO revival.',
		id: '01HVZGS2M8DNTEX1RZB4Q4BDBA',
		index: 611,
		itemPresent: null,
		keyWords: 'ray of hope,611,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Ray of Hope'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Wait time after using item increases a lot, but power increases a lot too.',
		id: '01HVZGS2M60DVZC61Q629N26SZ',
		index: 547,
		itemPresent: null,
		keyWords:
			'strong throw,547,power throw,power throw+,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M82XK1X5575MA7H4ZV',
					name: 'Power Throw',
					table: 'trait'
				},
				{
					id: '01HVZGS2M62VB6PHD7T0E30XR0',
					name: 'Power Throw+',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Strong Throw'
	},
	{
		categories: ['EXPLORATION', 'SYNTHESIS'],
		description:
			'Kind soul enhances the material it resides in. Provides a Burst Mode bonus and gauge fill rate increase.',
		id: '01HVZGS2M6NC4R12WQX3VFRP0W',
		index: 613,
		itemPresent: null,
		keyWords: 'kind soul,613,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Kind Soul'
	},
	{
		categories: ['HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Item automatically activates when the user's HP falls below 50% in battle.",
		id: '01HVZGS2M7JKB0DG79N7NM0044',
		index: 680,
		itemPresent: null,
		keyWords: 'auto use,680,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Auto Use'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases damage dealt to Puni and magical creatures.',
		id: '01HVZGS2M7EH2078NRNKHMWPHR',
		index: 689,
		itemPresent: {
			id: '01HVZGS2K7BEM75QDDN0N26EYQ',
			name: 'Ancient Tablet',
			table: 'item'
		},
		keyWords: 'ancient seal,689,ancient tablet,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Ancient Seal'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Power increases by 20 / number of targets in effect area % + number of targets in effect area x 10%.',
		id: '01HVZGS2M7GWCQK2HNHK83FKGV',
		index: 488,
		itemPresent: null,
		keyWords: 'few + many bonus,488,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Few + Many Bonus'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Completely consumes item in 1 use during battle, but increases power by use count x 3%.',
		id: '01HVZGS2M7Y7PHYSE2S38BM0NG',
		index: 511,
		itemPresent: null,
		keyWords: 'count compress,511,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Count Compress'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Item size increases by 2 levels, equipment cost increases by 10.',
		id: '01HVZGS2M7TCRXZY6K9YKDQ20Q',
		index: 572,
		itemPresent: null,
		keyWords: 'jumbo size,572,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Jumbo Size'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Reduces equipment cost of usable item by 20.',
		id: '01HVZGS2M7HBHPZXV3QQYEV3H0',
		index: 581,
		itemPresent: null,
		keyWords:
			'accustoms quickly,581,light,easy to handle,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M80AST2J4DYC22CE38',
					name: 'Light',
					table: 'trait'
				},
				{
					id: '01HVZGS2M5RRDBH6DP9P9S2RCV',
					name: 'Easy to Handle',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Accustoms Quickly'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Burning passion enhances the material it resides in. Increases all stats by 15, bestows fire and ice resistance.',
		id: '01HVZGS2M7VKVCYHNX96P8DJ2S',
		index: 602,
		itemPresent: null,
		keyWords: 'burning passion,602,accessory,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Burning Passion'
	},
	{
		categories: ['ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Awakening courage enhances the material it resides in. Provides a bonus against powerful foes and bosses.',
		id: '01HVZGS2M79BMD9CWCPY8CDDJX',
		index: 612,
		itemPresent: null,
		keyWords: 'awakening courage,612,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Awakening Courage'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Cold reduces the target's speed, and also has a low chance of inflicting Slow.",
		id: '01HVZGS2M716RJVJ473RJBZQDW',
		index: 687,
		itemPresent: {
			id: '01HVZGS2K7NDMT3FNKP01G78DZ',
			name: 'Hakurei Stone',
			table: 'item'
		},
		keyWords: 'carries cold,687,hakurei stone,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Carries Cold'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'The target recovers a small amount of HP, and also recovers from Curse.',
		id: '01HVZGS2M7CK343AVS9HV2T5TJ',
		index: 697,
		itemPresent: {
			id: '01HVZGS2KCSK51ETKPCYXAXWNX',
			name: 'Holy Water',
			table: 'item'
		},
		keyWords: 'purifying water,697,holy water,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Purifying Water'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Increases damage dealt to Broken targets by 20%, and a portion of damage dealt is absorbed to recover HP.',
		id: '01HVZGS2M8CMSW1ZBCQFJGKHPF',
		index: 707,
		itemPresent: {
			id: '01HVZGS2KP0QP6HXGKH3X4G8QK',
			name: 'Evil Core',
			table: 'item'
		},
		keyWords: 'demon soul,707,evil core,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Demon Soul'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Item size increases by 1 level, equipment cost increases by 5.',
		id: '01HVZGS2M8P9FTPMTFJM9RCWFW',
		index: 571,
		itemPresent: null,
		keyWords: 'size+,571,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Size+'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Reduces equipment cost of usable item by 8.',
		id: '01HVZGS2M80AST2J4DYC22CE38',
		index: 579,
		itemPresent: null,
		keyWords: 'light,579,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Light'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Empty world enhances the material it resides in. Provides damage conversion, reduces physical damage taken.',
		id: '01HVZGS2M86R70A1TRTEDDZZ90',
		index: 600,
		itemPresent: null,
		keyWords: 'empty world,600,accessory,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Empty World'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Pursuit of knowledge enhances the material it resides in. Causes additional damage.',
		id: '01HVZGS2M8MK2XE6WXCA29FBWB',
		index: 609,
		itemPresent: null,
		keyWords: 'pursuit of knowledge,609,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Pursuit of Knowledge'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Attacks cause 15% additional damage, and increases skill power by 20%.',
		id: '01HVZGS2M8FJCK9M5NZ301T5K0',
		index: 663,
		itemPresent: null,
		keyWords: 'persistent attack,663,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Persistent Attack'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Increases item power by 25%, and makes its effect non-attribute. Non-attribute is not affected by any resistances or weaknesses.',
		id: '01HVZGS2M890M6ZD092TRE4BRY',
		index: 681,
		itemPresent: null,
		keyWords: 'no attribute,681,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'No Attribute'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases attack item effect by 5%, and also has a chance to cause Weak.',
		id: '01HVZGS2M8ASGQ2E54P4ZBHPHQ',
		index: 696,
		itemPresent: {
			id: '01HVZGS2KPH4867XKYRXB43M3B',
			name: 'Rainbow Puni Fluid',
			table: 'item'
		},
		keyWords: 'unidentified,696,rainbow puni fluid,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Unidentified'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'The target recovers from Poison and No Heal ailments.',
		id: '01HVZGS2M862VKQ22DH9QDHD9F',
		index: 704,
		itemPresent: {
			id: '01HVZGS2K9KKQ0WB5ZMYQ1K60Q',
			name: 'Pelem Shell',
			table: 'item'
		},
		keyWords: 'medicine compound,704,pelem shell,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Medicine Compound'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Happy heart enhances the material it resides in. Increases MP and defense.',
		id: '01HVZGS2M8RA0KAV9WEFGNNYA5',
		index: 593,
		itemPresent: null,
		keyWords: 'happy heart,593,accessory,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Happy Heart'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Bonds of belief enhances the material it resides in. Increases assist effect, provides damage conversion.',
		id: '01HVZGS2M8ZH66MBR6GFVNK1M9',
		index: 605,
		itemPresent: null,
		keyWords: 'bonds of belief,605,accessory,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Bonds of Belief'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Attacks cause 7% additional damage, and increases skill power by 15%.',
		id: '01HVZGS2M9HYSQRGS02BP7AEA5',
		index: 659,
		itemPresent: null,
		keyWords: 'changing attack,659,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Changing Attack'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Has a high chance to inflict Poison when dealing damage.',
		id: '01HVZGS2M9WMJG6NB2AKF5G4JC',
		index: 682,
		itemPresent: {
			id: '01HVZGS2KNZW4CWGPYDCQJEP5Y',
			name: 'Fairy Poison Grass',
			table: 'item'
		},
		keyWords: 'poison mist,682,fairy poison grass,atk item,de buff item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Poison Mist'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Reduces the target's defense and speed.",
		id: '01HVZGS2M9Y9N6T2228APAHP79',
		index: 691,
		itemPresent: {
			id: '01HVZGS2KA7GFFSM6E9MVBH2K5',
			name: 'Island Fish Fin',
			table: 'item'
		},
		keyWords: 'stinks,691,island fish fin,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Stinks'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases damage dealt to Demon and Undead enemies.',
		id: '01HVZGS2M9F0X596R08AQV41DS',
		index: 706,
		itemPresent: null,
		keyWords: 'wards evil,706,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Wards Evil'
	},
	{
		categories: ['HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Item automatically activates when the user's HP falls below 30% in battle. Consumes MP.",
		id: '01HVZGS2M90K729S1XSF4V6FHD',
		index: 678,
		itemPresent: null,
		keyWords: 'auto activate 30%,678,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Auto Activate 30%'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases all stats by 8.',
		id: '01HVZGS2M93JYY3S4V3SKR48NA',
		index: 688,
		itemPresent: {
			id: '01HVZGS2KPF12ACDFG3RXVBT6Y',
			name: 'Black Orb',
			table: 'item'
		},
		keyWords: 'dark matter,688,black orb,accessory,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Dark Matter'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases all stats by 15, and also increases skill power by 20%.',
		id: '01HVZGS2M9W8BZ9QJ9411JCFK7',
		index: 708,
		itemPresent: null,
		keyWords: 'dragon soul,708,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Dragon Soul'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Gives item a 25% chance to critical hit.',
		id: '01HVZGS2M9SKWYZW3ZQ8TJV6EB',
		index: 146,
		itemPresent: null,
		keyWords: 'critical+,146,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Critical+'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases recovery item effect by 30%, but increases equipment cost by 5.',
		id: '01HVZGS2M9GNNJ5NV8WSPEPFJJ',
		index: 701,
		itemPresent: {
			id: '01HVZGS2KC53VKV9P269Y58AQP',
			name: 'Bursting Berry',
			table: 'item'
		},
		keyWords: 'special ingredient,701,bursting berry,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Special Ingredient'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases defense by 10, and also causes a decent amount of HP recovery each turn.',
		id: '01HVZGS2M9C2EYBN98SEA288Z3',
		index: 700,
		itemPresent: {
			id: '01HVZGS2K7G9AVV1FXZ7FEX962',
			name: 'Silver Potato',
			table: 'item'
		},
		keyWords: 'mutated material,700,silver potato,accessory,armor,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Mutated Material'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Recovery item enhanced by a small, fixed amount. Lower power equals stronger effect.',
		id: '01HVZGS2MA3WV7G5A19NVAWV44',
		index: 113,
		itemPresent: null,
		keyWords: 'medicine enhance,113,fixed recovery,fixed recovery+,buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KWQ2XS69WHK5082EHP',
					name: 'Fixed Recovery',
					table: 'trait'
				},
				{
					id: '01HVZGS2KWAP6S872D7YVW2XYG',
					name: 'Fixed Recovery+',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Medicine Enhance'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Maximum HP increases by 40.',
		id: '01HVZGS2MAEJZ9PRW4XCWQM74T',
		index: 194,
		itemPresent: null,
		keyWords: 'overflowing life,194,hp boost,hp super enhance,accessory,armor,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M10GDGWHQ4KV7M6ZYK',
					name: 'HP Boost',
					table: 'trait'
				},
				{
					id: '01HVZGS2M1QQFWX1EEPHTJ68H1',
					name: 'HP Super Enhance',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Overflowing Life'
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
			'SYNTHESIS'
		],
		description: 'Price when selling to shops decreases quite a lot, but also decreases duplication price.',
		id: '01HVZGS2MAMNSJGNR2VEEH4VVD',
		index: 3,
		itemPresent: null,
		keyWords:
			'common item,3,low price,low price+,accessory,armor,atk item,buff item,de buff item,heal item,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M9KAPSW7AB348CTBQN',
					name: 'Low Price',
					table: 'trait'
				},
				{
					id: '01HVZGS2KVXEA5XZVFWXMEBZZK',
					name: 'Low Price+',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Common Item'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases damage dealt to Broken targets by 20%.',
		id: '01HVZGS2MA4JT2FVW2BDH1CP56',
		index: 447,
		itemPresent: null,
		keyWords: 'enhance finisher+,447,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Enhance Finisher+'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Restores Break value to the target. Also reduces wait time after turns by a small amount.',
		id: '01HVZGS2MAXGSHPD04V25TWGRD',
		index: 692,
		itemPresent: {
			id: '01HVZGS2K7BHK95VCBEXABVVCD',
			name: 'Dawn Fur',
			table: 'item'
		},
		keyWords: 'sunny scent,692,dawn fur,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Sunny Scent'
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
			'SYNTHESIS'
		],
		description: 'Increases item quality by 50% when this trait is transferred.',
		id: '01HVZGS2MA3KED0QGJ3R8WS4CA',
		index: 17,
		itemPresent: null,
		keyWords:
			'super quality,17,well made,pro perfection,accessory,armor,atk item,buff item,de buff item,heal item,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KWQSXZRMKHXA6VKTEJ',
					name: 'Well Made',
					table: 'trait'
				},
				{
					id: '01HVZGS2MAVZ5NY6W3CMJZ2NGJ',
					name: 'Pro Perfection',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Super Quality'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Stabilizes item number variation, making it far easier to score higher numbers.',
		id: '01HVZGS2MANE22XE2CW2HDHSSK',
		index: 156,
		itemPresent: null,
		keyWords:
			'boost expected value,156,stability emphasis,solid effect,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KYWB0H167JFGXJ4MX6',
					name: 'Stability Emphasis',
					table: 'trait'
				},
				{
					id: '01HVZGS2M25J030HRJJZWNW1ES',
					name: 'Solid Effect',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Boost Expected Value'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Maximum LP increases by 17.',
		id: '01HVZGS2MAWVT2N357QTABWE4F',
		index: 206,
		itemPresent: null,
		keyWords: 'unabating stamina,206,lp boost,lp super enhance,accessory,armor,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KWQ2Z9TPH2022R0KMR',
					name: 'LP Boost',
					table: 'trait'
				},
				{
					id: '01HVZGS2KX5BABKS41MZ40YBW9',
					name: 'LP Super Enhance',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Unabating Stamina'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases skill power by 7%, and reduces MP consumption by 7%.',
		id: '01HVZGS2MA9J64V6XP85CN941P',
		index: 310,
		itemPresent: null,
		keyWords: 'eco skill,310,cut mp consume,skill enhance,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M4AFQCPH8G9H2BAYQP',
					name: 'Cut MP Consume',
					table: 'trait'
				},
				{
					id: '01HVZGS2M0MD3N66G6CFAVG37J',
					name: 'Skill Enhance',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Eco Skill'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases item power by maximum use count x 5%.',
		id: '01HVZGS2MABCJ21KRY9ECYJXA1',
		index: 517,
		itemPresent: null,
		keyWords:
			'count boost,517,count bonus,count bonus+,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KZ8QAPN864VYDRE4GM',
					name: 'Count Bonus',
					table: 'trait'
				},
				{
					id: '01HVZGS2M6J8N0958SZAPJC07R',
					name: 'Count Bonus+',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Count Boost'
	},
	{
		categories: ['HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Item automatically activates when the user's HP falls below 20% in battle. Consumes MP.",
		id: '01HVZGS2M9CPPXT4PFREY40TA5',
		index: 677,
		itemPresent: null,
		keyWords: 'auto activate 20%,677,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Auto Activate 20%'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Heat causes continuous damage. The effect is small.',
		id: '01HVZGS2M9FNAP23BDPYNET84V',
		index: 686,
		itemPresent: {
			id: '01HVZGS2KNETTHTXPKG0SMC0V4',
			name: 'Kaen Stone',
			table: 'item'
		},
		keyWords: 'carries heat,686,kaen stone,atk item,de buff item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Carries Heat'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: "Increases the target's evasion rate. This effect lasts 5 turns.",
		id: '01HVZGS2M9JJJM94Q4H8S443YD',
		index: 695,
		itemPresent: {
			id: '01HVZGS2K6K0P7H7FP537SZGZC',
			name: 'Luminous Water',
			table: 'item'
		},
		keyWords: 'flickering light,695,luminous water,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Flickering Light'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Attacks cause 15% additional damage, and increases skill power by 15%.',
		id: '01HVZGS2M91TX1FF5CYT7C0AG3',
		index: 661,
		itemPresent: null,
		keyWords: 'barrage attack,661,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Barrage Attack'
	},
	{
		categories: ['BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description:
			"Temporarily increases all of the target's stats. They will also automatically revive on their next turn after being KO'd.",
		id: '01HVZGS2M93TG11RRFWH96HGJ0',
		index: 684,
		itemPresent: {
			id: '01HVZGS2K5NKTE39PCS2NGWHM3',
			name: 'Dunkelstern',
			table: 'item'
		},
		keyWords: 'false flower,684,dunkelstern,buff item,heal item,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'False Flower'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases attack by 7, and attacks cause a small amount of additional damage.',
		id: '01HVZGS2M96WHBQ0TQM5E563JG',
		index: 693,
		itemPresent: {
			id: '01HVZGS2KB2NG0AMPBV162B9TN',
			name: 'Gold Steel Web',
			table: 'item'
		},
		keyWords: 'cutting thread,693,gold steel web,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Cutting Thread'
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
			'SYNTHESIS'
		],
		description: 'Price when selling to shops decreases a little, but also decreases duplication price.',
		id: '01HVZGS2M9KAPSW7AB348CTBQN',
		index: 0,
		itemPresent: null,
		keyWords: 'low price,0,accessory,armor,atk item,buff item,de buff item,heal item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Low Price'
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
			'SYNTHESIS'
		],
		description: 'Price when selling to shops increases quite a lot.',
		id: '01HVZGS2M9E2W0YRF26CPPWHZW',
		index: 698,
		itemPresent: {
			id: '01HVZGS2KC3GKEM3C7SGX06ZDM',
			name: 'Golden Puniball',
			table: 'item'
		},
		keyWords:
			'golden radiance,698,golden puniball,accessory,armor,atk item,buff item,de buff item,heal item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Golden Radiance'
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
			'SYNTHESIS'
		],
		description: 'Increases price when selling to shops.',
		id: '01HVZGS2M979608V5HPF9X4F2A',
		index: 705,
		itemPresent: null,
		keyWords:
			'rainbow radiance,705,accessory,armor,atk item,buff item,de buff item,heal item,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Rainbow Radiance'
	},
	{
		categories: ['ACCESSORY', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases critical hit rate, and also increases damage dealt to Broken targets.',
		id: '01HVZGS2M9CQ0WB00TE9DFY0VG',
		index: 703,
		itemPresent: {
			id: '01HVZGS2K7Y628GW4CSTEKVC3K',
			name: 'Pious Talisman',
			table: 'item'
		},
		keyWords: 'power of faith,703,pious talisman,accessory,weapon,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Power of Faith'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Maximum HP increases by 25.',
		id: '01HVZGS2MARCYQQHC7TZBNEEWW',
		index: 193,
		itemPresent: {
			id: '01HVZGS2K647SF4SNQWM2Z6JMM',
			name: 'Dunkelheit',
			table: 'item'
		},
		keyWords:
			'full of life,193,dunkelheit,hp enhance,hp boost,accessory,armor,buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KZS2DK9G02154257KW',
					name: 'HP Enhance',
					table: 'trait'
				},
				{
					id: '01HVZGS2M10GDGWHQ4KV7M6ZYK',
					name: 'HP Boost',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Full of Life'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Item will always critical hit.',
		id: '01HVZGS2MA11TA0NRVSDK12P36',
		index: 149,
		itemPresent: null,
		keyWords:
			'always critical,149,critical+,critical++,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M9SKWYZW3ZQ8TJV6EB',
					name: 'Critical+',
					table: 'trait'
				},
				{
					id: '01HVZGS2M0E10NFTBFKRE1Y5SJ',
					name: 'Critical++',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Always Critical'
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
			'SYNTHESIS'
		],
		description: 'Increases item quality by 30% when this trait is transferred.',
		id: '01HVZGS2MAVZ5NY6W3CMJZ2NGJ',
		index: 16,
		itemPresent: null,
		keyWords:
			'pro perfection,16,quality up+,quality up++,accessory,armor,atk item,buff item,de buff item,heal item,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KW60SHZMDQGD1B480G',
					name: 'Quality Up+',
					table: 'trait'
				},
				{
					id: '01HVZGS2KWT9AHG8ZZM4YXFQ4Y',
					name: 'Quality Up++',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Pro Perfection'
	},
	{
		categories: ['ACCESSORY', 'EXPLORATION', 'SYNTHESIS'],
		description:
			'Wild instinct enhances the material it resides in. Increases speed, reduces wait time after using skills.',
		id: '01HVZGS2MAMCVBYYD8051EM034',
		index: 597,
		itemPresent: null,
		keyWords: 'wild instinct,597,accessory,exploration,synthesis',
		mergeFrom: [],
		moduleId: 'trait',
		name: 'Wild Instinct'
	},
	{
		categories: ['ATK_ITEM', 'DE_BUFF_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases damage dealt to Broken targets by 40%.',
		id: '01HVZGS2MACE51MMN8PCZ5ZJ7T',
		index: 450,
		itemPresent: null,
		keyWords: 'relentless blow,450,enhance finisher+,enhance finisher++,atk item,de buff item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2MA4JT2FVW2BDH1CP56',
					name: 'Enhance Finisher+',
					table: 'trait'
				},
				{
					id: '01HVZGS2M53PWBJVJFAD3PD99C',
					name: 'Enhance Finisher++',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Relentless Blow'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Gives item a 50% chance to critical hit.',
		id: '01HVZGS2MA67PBKBJC0S29KSV5',
		index: 148,
		itemPresent: null,
		keyWords:
			'critical finish,148,critical,critical+,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2KZ6EVNXDX9YFHZGJRJ',
					name: 'Critical',
					table: 'trait'
				},
				{
					id: '01HVZGS2M9SKWYZW3ZQ8TJV6EB',
					name: 'Critical+',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Critical Finish'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Maximum LP increases by 12.',
		id: '01HVZGS2MAMZAM242Y396HFXVM',
		index: 205,
		itemPresent: null,
		keyWords: 'full of stamina,205,lp enhance,lp boost,accessory,armor,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M0AK5RX8B4Z9SZ2C7N',
					name: 'LP Enhance',
					table: 'trait'
				},
				{
					id: '01HVZGS2KWQ2Z9TPH2022R0KMR',
					name: 'LP Boost',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Full of Stamina'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases skill power by 10%, and reduces MP consumption by 10%.',
		id: '01HVZGS2MA4EGZ920FXEB06A3W',
		index: 311,
		itemPresent: null,
		keyWords: 'skill cost compress,311,compact mp consume,skill boost,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M0M5Y2FR89SJ033HBX',
					name: 'Compact MP Consume',
					table: 'trait'
				},
				{
					id: '01HVZGS2M5ZJ8NV4H2VGMFSCDP',
					name: 'Skill Boost',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Skill Cost Compress'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Power increases by 20 / number of targets in effect area %.',
		id: '01HVZGS2MA8W6YYRBY5TWYM7YQ',
		index: 486,
		itemPresent: null,
		keyWords:
			'effective vs one,486,fewer bonus,fewer bonus+,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M5Y9AG664WQ5CZMZ60',
					name: 'Fewer Bonus',
					table: 'trait'
				},
				{
					id: '01HVZGS2M49QEWZ5MEXMZWGK7Q',
					name: 'Fewer Bonus+',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Effective Vs One'
	},
	{
		categories: ['WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Absorb 10% of damage dealt through attacks to restore your own HP.',
		id: '01HVZGS2MB6PWFMA9ERSF9EQXW',
		index: 405,
		itemPresent: null,
		keyWords: 'steal life,405,damage absorb+,damage absorb++,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M42S8810ZKPKP8SJ6D',
					name: 'Damage Absorb+',
					table: 'trait'
				},
				{
					id: '01HVZGS2M3T3QBCE213N92YP19',
					name: 'Damage Absorb++',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Steal Life'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases all stats by 5.',
		id: '01HVZGS2MBKNTS5BRN8X9ZGEB8',
		index: 239,
		itemPresent: null,
		keyWords:
			'all stat enhance,239,atk def enhance,atk spd enhance,atk def enhance,def spd enhance,atk spd enhance,def spd enhance,accessory,armor,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M1F29X5BRWG4W42JT8',
					name: 'ATK DEF Enhance',
					table: 'trait'
				},
				{
					id: '01HVZGS2M2WDT2DH40TSCEH7ZF',
					name: 'ATK SPD Enhance',
					table: 'trait'
				}
			],
			[
				{
					id: '01HVZGS2M1F29X5BRWG4W42JT8',
					name: 'ATK DEF Enhance',
					table: 'trait'
				},
				{
					id: '01HVZGS2M31P9J2GZ52SXXR9YZ',
					name: 'DEF SPD Enhance',
					table: 'trait'
				}
			],
			[
				{
					id: '01HVZGS2M2WDT2DH40TSCEH7ZF',
					name: 'ATK SPD Enhance',
					table: 'trait'
				},
				{
					id: '01HVZGS2M31P9J2GZ52SXXR9YZ',
					name: 'DEF SPD Enhance',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'All Stat Enhance'
	},
	{
		categories: ['ATK_ITEM', 'BUFF_ITEM', 'DE_BUFF_ITEM', 'HEAL_ITEM', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases item power proportional to wait time after using item.',
		id: '01HVZGS2MBY2VSKG1XTK6SEV1M',
		index: 550,
		itemPresent: null,
		keyWords:
			'charge item,550,wait time enhance,wait time enhance+,atk item,buff item,de buff item,heal item,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M4YBPRJSXVXBAQETVA',
					name: 'Wait Time Enhance',
					table: 'trait'
				},
				{
					id: '01HVZGS2M5VKDQ5QH5M6N8ARHA',
					name: 'Wait Time Enhance+',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'Charge Item'
	},
	{
		categories: ['ACCESSORY', 'ARMOR', 'WEAPON', 'EXPLORATION', 'SYNTHESIS'],
		description: 'Increases all stats by 7.',
		id: '01HVZGS2MBF4X021YBX3KH9YW4',
		index: 243,
		itemPresent: null,
		keyWords:
			'all stat boost,243,atk def boost,atk spd boost,atk def boost,def spd boost,atk spd boost,def spd boost,accessory,armor,weapon,exploration,synthesis',
		mergeFrom: [
			[
				{
					id: '01HVZGS2M2G3DVRF8874552AT6',
					name: 'ATK DEF Boost',
					table: 'trait'
				},
				{
					id: '01HVZGS2KZ2MN29SRS6V60ENYD',
					name: 'ATK SPD Boost',
					table: 'trait'
				}
			],
			[
				{
					id: '01HVZGS2M2G3DVRF8874552AT6',
					name: 'ATK DEF Boost',
					table: 'trait'
				},
				{
					id: '01HVZGS2M5TVTKWFWFVYZ9QR8F',
					name: 'DEF SPD Boost',
					table: 'trait'
				}
			],
			[
				{
					id: '01HVZGS2KZ2MN29SRS6V60ENYD',
					name: 'ATK SPD Boost',
					table: 'trait'
				},
				{
					id: '01HVZGS2M5TVTKWFWFVYZ9QR8F',
					name: 'DEF SPD Boost',
					table: 'trait'
				}
			]
		],
		moduleId: 'trait',
		name: 'All Stat Boost'
	}
];

export default traitsList;
