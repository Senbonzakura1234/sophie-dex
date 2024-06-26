import type { Effect } from '@root/server/postgresql/schema';

const effectsList: Array<Effect> = [
	{
		description: "Deals supreme physical damage. Physical damage is affected by the target's defense value.",
		id: '01HVZGS2HS6Y5GJYJZ77ZN7ACD',
		index: 4,
		keyWords: 'savage impact,4',
		moduleId: 'effect',
		name: 'Savage Impact'
	},
	{
		description: "Deals ultimate fire damage. Fire damage is affected by the target's fire resistance value.",
		id: '01HVZGS2HT5P18W81Z9SJZYJ79',
		index: 11,
		keyWords: 'flames of hell,11',
		moduleId: 'effect',
		name: 'Flames of Hell'
	},
	{
		description: "Deals moderate ice damage. Ice damage is affected by the target's ice resistance value.",
		id: '01HVZGS2HTG7JDMEZ1T8PCZT37',
		index: 13,
		keyWords: 'ice damage m,13',
		moduleId: 'effect',
		name: 'Ice Damage M'
	},
	{
		description: "Deals supreme ice damage. Ice damage is affected by the target's ice resistance value.",
		id: '01HVZGS2HT9PM6MH7HAMF4ZTJB',
		index: 16,
		keyWords: 'ice age,16',
		moduleId: 'effect',
		name: 'Ice Age'
	},
	{
		description:
			"Deals moderate lightning damage. Lightning damage is affected by the target's lightning resistance value.",
		id: '01HVZGS2HT0KCK3FVAC259GKWX',
		index: 19,
		keyWords: 'lightning damage m,19',
		moduleId: 'effect',
		name: 'Lightning Damage M'
	},
	{
		description: "Deals strong magic damage. Magic damage is affected by the target's magic resistance value.",
		id: '01HVZGS2HTA1927M3J4B745W92',
		index: 25,
		keyWords: 'large missile,25',
		moduleId: 'effect',
		name: 'Large Missile'
	},
	{
		description:
			"Pushes the target's turn back a little. This effect diminishes with each use until they take another turn.",
		id: '01HVZGS2HTK5DAC0MXNN7QZ064',
		index: 126,
		keyWords: 'a little numbing,126',
		moduleId: 'effect',
		name: 'A Little Numbing'
	},
	{
		description:
			'Calls a rain cloud, activating 1 time card that deals lightning damage to the target. The effect lasts 1 turn.',
		id: '01HVZGS2HT80X5M2K63DTJYBYS',
		index: 132,
		keyWords: 'call rain cloud,132',
		moduleId: 'effect',
		name: 'Call Rain Cloud'
	},
	{
		description:
			'Calls a thunder cloud, activating 1 time card that deals lightning damage to the target. The effect lasts 2 turns.',
		id: '01HVZGS2HVKWHHRV07GG0S0A0R',
		index: 133,
		keyWords: 'call thunder cloud,133',
		moduleId: 'effect',
		name: 'Call Thunder Cloud'
	},
	{
		description:
			"Reduces all of the target's resistances by 1 level. Has no effect if the target has no resistances, and this cannot cause weaknesses.",
		id: '01HVZGS2HVAVJGWE8WEJT0WQ4Z',
		index: 144,
		keyWords: 'weight of happiness,144',
		moduleId: 'effect',
		name: 'Weight of Happiness'
	},
	{
		description: "Restores the target's LP by a slight amount.",
		id: '01HVZGS2HVF9QBCEX1WKEVESPZ',
		index: 207,
		keyWords: 'lp recovery xs,207',
		moduleId: 'effect',
		name: 'LP Recovery XS'
	},
	{
		description: "Restores a small amount of the target's HP and MP.",
		id: '01HVZGS2HVH7ASKTW1MD8KXQ85',
		index: 214,
		keyWords: 'hpmp recovery s,214',
		moduleId: 'effect',
		name: 'HPMP Recovery S'
	},
	{
		description: "Restores a small amount of the target's HP and LP.",
		id: '01HVZGS2HVS450ZZ0PQYGKB7W0',
		index: 219,
		keyWords: 'hplp recovery s,219',
		moduleId: 'effect',
		name: 'HPLP Recovery S'
	},
	{
		description: "Restores a huge amount of the target's HP and LP.",
		id: '01HVZGS2HVBKSBTY7A697JJEBD',
		index: 222,
		keyWords: 'hplp recovery xl,222',
		moduleId: 'effect',
		name: 'HPLP Recovery XL'
	},
	{
		description: "Restores the whole party's HP by a slight amount.",
		id: '01HVZGS2HVYNC9QGJMX046MZS4',
		index: 228,
		keyWords: 'calming aroma,228',
		moduleId: 'effect',
		name: 'Calming Aroma'
	},
	{
		description:
			"Restores a slight amount of the target's HP and LP. Recovery amount increases with higher maximum HP.",
		id: '01HVZGS2HW36K3G70MBV1PWBR4',
		index: 278,
		keyWords: 'eat and recover xs,278',
		moduleId: 'effect',
		name: 'Eat and Recover XS'
	},
	{
		description: 'Sits in the stomach, delaying your turn in battle a small amount. Also restores LP.',
		id: '01HVZGS2HWKSFXDHN3KAESWGTD',
		index: 285,
		keyWords: 'filling,285',
		moduleId: 'effect',
		name: 'Filling'
	},
	{
		description: "It's hard to digest, inflicting Slow. The effect is small.",
		id: '01HVZGS2HWE42FP6NVR8VPBCSF',
		index: 288,
		keyWords: 'hard to digest,288',
		moduleId: 'effect',
		name: 'Hard to Digest'
	},
	{
		description:
			"Reduces the target's ice resistance by 1 level. Has no effect if the target has no resistance, and this cannot cause weaknesses.",
		id: '01HVZGS2HW6V8T5V9T9N80PVMK',
		index: 729,
		keyWords: 'weak to ice,729',
		moduleId: 'effect',
		name: 'Weak to Ice'
	},
	{
		description: "Reduces the target's level a little. Reduced level decreases all stats and damage dealt.",
		id: '01HVZGS2HWE8R1ZDSJSWFKDCW4',
		index: 731,
		keyWords: 'level down s,731',
		moduleId: 'effect',
		name: 'Level Down S'
	},
	{
		description: 'Deals continuous damage to the target. The effect is big, but the time is short.',
		id: '01HVZGS2HWZZMZBPJMEJK65HD0',
		index: 736,
		keyWords: 'damage over time l,736',
		moduleId: 'effect',
		name: 'Damage Over Time L'
	},
	{
		description: 'Increases Break effect dealt to the target. If multiple targets are hit, the effect is split.',
		id: '01HVZGS2HWTM750N5NFA37KRWF',
		index: 740,
		keyWords: 'add break s,740',
		moduleId: 'effect',
		name: 'Add Break S'
	},
	{
		description: 'Reduces the rate at which enemies use powerful attacks a little.',
		id: '01HVZGS2HW9DS3VP5Z9YG1XPMK',
		index: 744,
		keyWords: 'restrain attack s,744',
		moduleId: 'effect',
		name: 'Restrain Attack S'
	},
	{
		description: 'Consumes a slight amount of HP. The amount is influenced by maximum HP.',
		id: '01HVZGS2HXP3AQHZXEQ94XHTFG',
		index: 797,
		keyWords: 'consume hp xs,797',
		moduleId: 'effect',
		name: 'Consume HP XS'
	},
	{
		description: 'Consumes a large amount of HP. The amount is influenced by maximum HP.',
		id: '01HVZGS2HXXJKS3J3X0310S3YC',
		index: 800,
		keyWords: 'consume hp l,800',
		moduleId: 'effect',
		name: 'Consume HP L'
	},
	{
		description: 'Consumes a huge amount of MP. The effect is weakened when MP is insufficient.',
		id: '01HVZGS2HXPQB3N7NF7AF0CNY6',
		index: 806,
		keyWords: 'consume mp xl,806',
		moduleId: 'effect',
		name: 'Consume MP XL'
	},
	{
		description: 'Rest for 5 hours, restoring 50% of HP, MP, and LP.',
		id: '01HVZGS2HXMSSPGZ8BQWMPXZDF',
		index: 859,
		keyWords: 'rest 5 hours,859',
		moduleId: 'effect',
		name: 'Rest 5 Hours'
	},
	{
		description:
			'Allows you to select items that you gathered, and send them back to the atelier. You can send up to 30 at a time.',
		id: '01HVZGS2HXGR7EG8Z089XAKKS6',
		index: 865,
		keyWords: 'average cart,865',
		moduleId: 'effect',
		name: 'Average Cart'
	},
	{
		description: 'Reduces the chance of incidents by a small amount.',
		id: '01HVZGS2HXK1KR9F01RF2PJ5S2',
		index: 869,
		keyWords: 'keeps away danger,869',
		moduleId: 'effect',
		name: 'Keeps Away Danger'
	},
	{
		description: '',
		id: '01HVZGS2HXKQMCH7SKHZ810SZM',
		index: 873,
		keyWords: 'wards off monsters,873',
		moduleId: 'effect',
		name: 'Wards Off Monsters'
	},
	{
		description: 'Move speed increases by 10%.',
		id: '01HVZGS2HX01H6GEKD4V73DF8H',
		index: 928,
		keyWords: 'move speed up s,928',
		moduleId: 'effect',
		name: 'Move Speed Up S'
	},
	{
		description: 'Increases number of items gathered each time a lot.',
		id: '01HVZGS2HXDDM9ZCYNJBPEGMXN',
		index: 938,
		keyWords: 'gather a lot more,938',
		moduleId: 'effect',
		name: 'Gather a Lot More'
	},
	{
		description: 'Increases experience points gained from battle by a lot.',
		id: '01HVZGS2HYRP24HS956GQCFD2K',
		index: 944,
		keyWords: 'training mastery,944',
		moduleId: 'effect',
		name: 'Training Mastery'
	},
	{
		description: 'Makes it easier for gathering level and enemy level to increase.',
		id: '01HVZGS2HYG5ARC2GFAZ7K5YZR',
		index: 948,
		keyWords: 'seal of chaos,948',
		moduleId: 'effect',
		name: 'Seal of Chaos'
	},
	{
		description: 'Increases effect of all Assist actions by a little.',
		id: '01HVZGS2HYMZW1T5GTXVP4B6TW',
		index: 1003,
		keyWords: 'seal of trust,1003',
		moduleId: 'effect',
		name: 'Seal of Trust'
	},
	{
		description: 'Hide your presence, making it hard for monsters to notice you for a short time.',
		id: '01HVZGS2HYWYJBM58PXYMHN77R',
		index: 1008,
		keyWords: 'hard to notice,1008',
		moduleId: 'effect',
		name: 'Hard to Notice'
	},
	{
		description:
			"Erase your presence, making it impossible for monsters to see you for a short time. Just don't get too close.",
		id: '01HVZGS2HY676A73AXKSD6CX6Y',
		index: 1009,
		keyWords: 'erase presence,1009',
		moduleId: 'effect',
		name: 'Erase Presence'
	},
	{
		description: 'Reduces wait time after all actions by a small amount.',
		id: '01HVZGS2HY4M3J9324ZFCGN08R',
		index: 1012,
		keyWords: 'progress time,1012',
		moduleId: 'effect',
		name: 'Progress Time'
	},
	{
		description: 'Increases the chance of higher expected values a little when attacking.',
		id: '01HVZGS2HYBW9TV1G3A86GMX3T',
		index: 1024,
		keyWords: 'change the future,1024',
		moduleId: 'effect',
		name: 'Change the Future'
	},
	{
		description: "Automatically revive on turn when KO'd in battle. HP after revival is decent.",
		id: '01HVZGS2HYRDV56AJ2Z7DVPZXP',
		index: 1032,
		keyWords: 'soul awakening,1032',
		moduleId: 'effect',
		name: 'Soul Awakening'
	},
	{
		description: "Increases the target's speed a little. The effect lasts 5 turns.",
		id: '01HVZGS2HYQER9V79KJG932ZV1',
		index: 1123,
		keyWords: 'speed up s,1123',
		moduleId: 'effect',
		name: 'Speed Up S'
	},
	{
		description: 'Increases hit rate by 30%.',
		id: '01HVZGS2HY0A0D8MDP6DRGDSRJ',
		index: 1131,
		keyWords: 'hit rate up xl,1131',
		moduleId: 'effect',
		name: 'Hit Rate Up XL'
	},
	{
		description: 'Increases critical hit rate by 6%.',
		id: '01HVZGS2HZCGXZ2CA2ZBEAMGED',
		index: 1138,
		keyWords: 'critical up s,1138',
		moduleId: 'effect',
		name: 'Critical Up S'
	},
	{
		description: 'Increases item power by 10%.',
		id: '01HVZGS2HZEQ9X0KKW59XS3E30',
		index: 1151,
		keyWords: 'item enhance s,1151',
		moduleId: 'effect',
		name: 'Item Enhance S'
	},
	{
		description: 'Immunity to Sleep ailment.',
		id: '01HVZGS2HZ4AAJN5C6JJ25T512',
		index: 1160,
		keyWords: 'nullify sleep,1160',
		moduleId: 'effect',
		name: 'Nullify Sleep'
	},
	{
		description: 'Immunity to No Heal ailment.',
		id: '01HVZGS2HZGB3Q86P19F3VS37D',
		index: 1166,
		keyWords: 'nullify no heal,1166',
		moduleId: 'effect',
		name: 'Nullify No Heal'
	},
	{
		description: 'Immunity to all ailments.',
		id: '01HVZGS2HZ6PX3GEGN2EKV8RF2',
		index: 1170,
		keyWords: 'nullify all ailments,1170',
		moduleId: 'effect',
		name: 'Nullify All Ailments'
	},
	{
		description:
			'You have a chance to survive with 1 HP when you receive damage that would reduce your HP to 0. Has a very low chance to work.',
		id: '01HVZGS2HZ2W8403817VA67YTJ',
		index: 1176,
		keyWords: 'avoid ko xs,1176',
		moduleId: 'effect',
		name: 'Avoid KO XS'
	},
	{
		description:
			'You have a chance to survive with 1 HP when you receive damage that would reduce your HP to 0. Has a high chance to work.',
		id: '01HVZGS2HZDFGFKX4P0XA9QVP1',
		index: 1180,
		keyWords: 'avoid ko xl,1180',
		moduleId: 'effect',
		name: 'Avoid KO XL'
	},
	{
		description: 'Absorbs a portion of damage dealt to the target as HP. The effect is small.',
		id: '01HVZGS2HZTXDS1N6K7V35202C',
		index: 1184,
		keyWords: 'damage absorb s,1184',
		moduleId: 'effect',
		name: 'Damage Absorb S'
	},
	{
		description: 'Increases Break value when attacking enemies by a slight amount.',
		id: '01HVZGS2HZBM3T1YZYPZ2QQ8S9',
		index: 1192,
		keyWords: 'break enhance s,1192',
		moduleId: 'effect',
		name: 'Break Enhance S'
	},
	{
		description: 'Changes the item color to Blue.',
		id: '01HVZGS2J06DC251331R0KR608',
		index: 1284,
		keyWords: 'change color blue,1284',
		moduleId: 'effect',
		name: 'Change Color Blue'
	},
	{
		description: "Deals very powerful physical damage. Physical damage is affected by the target's defense value.",
		id: '01HVZGS2J0XC4Q5DP2QV0PCJ2E',
		index: 3,
		keyWords: 'physical damage xl,3',
		moduleId: 'effect',
		name: 'Physical Damage XL'
	},
	{
		description: "Deals supreme fire damage. Fire damage is affected by the target's fire resistance value.",
		id: '01HVZGS2J0JXWY6CPB8FKYJRW7',
		index: 10,
		keyWords: 'fires of purgatory,10',
		moduleId: 'effect',
		name: 'Fires of Purgatory'
	},
	{
		description: "Deals strong fire damage. Fire damage is affected by the target's fire resistance value.",
		id: '01HVZGS2J1P360Q6M02PD2FHKE',
		index: 8,
		keyWords: 'fire damage l,8',
		moduleId: 'effect',
		name: 'Fire Damage L'
	},
	{
		description: "Deals ice damage. Ice damage is affected by the target's ice resistance value.",
		id: '01HVZGS2J12EDQXKR08HK3NRA0',
		index: 12,
		keyWords: 'ice damage s,12',
		moduleId: 'effect',
		name: 'Ice Damage S'
	},
	{
		description: "Deals strong ice damage. Ice damage is affected by the target's ice resistance value.",
		id: '01HVZGS2J1X310VDFEX599NZMY',
		index: 14,
		keyWords: 'ice damage l,14',
		moduleId: 'effect',
		name: 'Ice Damage L'
	},
	{
		description: "Deals lightning damage. Lightning damage is affected by the target's lightning resistance value.",
		id: '01HVZGS2J16ESBAVG03QRJMP6K',
		index: 18,
		keyWords: 'lightning damage s,18',
		moduleId: 'effect',
		name: 'Lightning Damage S'
	},
	{
		description:
			"Deals supreme lightning damage. Lightning damage is affected by the target's lightning resistance value.",
		id: '01HVZGS2J13403JCG45CJDVTK1',
		index: 22,
		keyWords: 'judgment bolt,22',
		moduleId: 'effect',
		name: 'Judgment Bolt'
	},
	{
		description:
			"Deals ultimate lightning damage. Lightning damage is affected by the target's lightning resistance value.",
		id: '01HVZGS2J29NJMNMKVBNS2KN8E',
		index: 23,
		keyWords: 'hammer of god,23',
		moduleId: 'effect',
		name: 'Hammer of God'
	},
	{
		description: "Deals supreme magic damage. Magic damage is affected by the target's magic resistance value.",
		id: '01HVZGS2J2K4T4C9Q0ZBD237TC',
		index: 27,
		keyWords: 'supersonic missile,27',
		moduleId: 'effect',
		name: 'Supersonic Missile'
	},
	{
		description: "Deals very powerful magic damage. Magic damage is affected by the target's magic resistance value.",
		id: '01HVZGS2J2HPNKS3WB9WF4779N',
		index: 26,
		keyWords: 'super large missile,26',
		moduleId: 'effect',
		name: 'Super Large Missile'
	},
	{
		description: "Deals moderate physical damage. Physical damage is affected by the target's defense value.",
		id: '01HVZGS2J2D5NFT6829CS3XAHK',
		index: 1,
		keyWords: 'physical damage m,1',
		moduleId: 'effect',
		name: 'Physical Damage M'
	},
	{
		description: 'Deals strong physical damage. Can also randomly cause a number of effects.',
		id: '01HVZGS2J2M58D874CP35Q436R',
		index: 28,
		keyWords: 'power of origin,28',
		moduleId: 'effect',
		name: 'Power of Origin'
	},
	{
		description:
			'Deals supreme non-attribute damage. This is not affected by any resistance. The damage increases according to how powerful the applied traits are.',
		id: '01HVZGS2J2ES16X2J18N7JJ6Q5',
		index: 38,
		keyWords: 'light of the end,38',
		moduleId: 'effect',
		name: 'Light of the End'
	},
	{
		description: 'Uni rain from the sky, dealing physical damage to all enemies. Also activates 1 time card.',
		id: '01HVZGS2J2Q1EZ51GR7CS7G1MN',
		index: 40,
		keyWords: 'falling uni,40',
		moduleId: 'effect',
		name: 'Falling Uni'
	},
	{
		description: 'Meteors rain from the sky, dealing fire damage to all enemies. Also activates 1 time card.',
		id: '01HVZGS2J20P4VV2F0Z7EXWMDE',
		index: 42,
		keyWords: 'falling meteors,42',
		moduleId: 'effect',
		name: 'Falling Meteors'
	},
	{
		description: '??? rains from the sky, dealing physical damage to all enemies. Also activates 1 time card.',
		id: '01HVZGS2J37Q2B7HWR0ZXJZAM4',
		index: 43,
		keyWords: 'falling ???,43',
		moduleId: 'effect',
		name: 'Falling ???'
	},
	{
		description: 'Stars rain from the sky, dealing physical damage to all enemies. Also activates 1 time card.',
		id: '01HVZGS2J3V73RK74R7A7F7AHQ',
		index: 44,
		keyWords: 'falling stars,44',
		moduleId: 'effect',
		name: 'Falling Stars'
	},
	{
		description:
			"Summons a beast to deal physical damage. Physical damage is affected by the target's defense value.",
		id: '01HVZGS2J3NDRC5JCWZ92VMFJS',
		index: 49,
		keyWords: 'summon beast,49',
		moduleId: 'effect',
		name: 'Summon Beast'
	},
	{
		description: "Summons a Puni to deal physical damage. Physical damage is affected by the target's defense value.",
		id: '01HVZGS2J3H7SFYDH9X4RMXCFZ',
		index: 50,
		keyWords: 'summon puni∞,50',
		moduleId: 'effect',
		name: 'Summon Puni∞'
	},
	{
		description:
			"Summons a ghost to deal magic damage. Magic damage is affected by the target's magic resistance value.",
		id: '01HVZGS2J38ZK2SYMEAXHMYGAR',
		index: 51,
		keyWords: 'summon ghost,51',
		moduleId: 'effect',
		name: 'Summon Ghost'
	},
	{
		description:
			"Deals physical damage, and recover for half the damage dealt. This damage is affected by the target's defense value.",
		id: '01HVZGS2J3Y63P4X5W3QYP8GAP',
		index: 54,
		keyWords: 'steal some life,54',
		moduleId: 'effect',
		name: 'Steal Some Life'
	},
	{
		description:
			"Deals very powerful physical damage, and recover for half the damage dealt. This damage is affected by the target's defense value.",
		id: '01HVZGS2J30TSHHDH6QZQP1WYX',
		index: 56,
		keyWords: 'steal lots of life,56',
		moduleId: 'effect',
		name: 'Steal Lots of Life'
	},
	{
		description: "Deals physical damage. Physical damage is affected by the target's defense value.",
		id: '01HVZGS2J4AQDTZW7DQHSC50MM',
		index: 59,
		keyWords: 'steal lots of spirit,59',
		moduleId: 'effect',
		name: 'Steal Lots of Spirit'
	},
	{
		description: 'Piercing thorns stab into the target, draining HP over time. The effect is fairly big.',
		id: '01HVZGS2J470XMES4193M68V14',
		index: 115,
		keyWords: 'soul stabbing thorns,115',
		moduleId: 'effect',
		name: 'Soul Stabbing Thorns'
	},
	{
		description: 'Severe burns deal continuous damage. The effect is big.',
		id: '01HVZGS2J4VMEXP2WYBMSBCQDW',
		index: 121,
		keyWords: 'inflicts severe burns,121',
		moduleId: 'effect',
		name: 'Inflicts Severe Burns'
	},
	{
		description: 'Increases attack, defense, and speed by 15% at night. No effect during other times.',
		id: '01HVZGS2J4G2T195CBA5JMQ20R',
		index: 1039,
		keyWords: 'strong at night,1039',
		moduleId: 'effect',
		name: 'Strong at Night'
	},
	{
		description:
			'Increases attack, defense, and speed by 15% in the evening and night. No effect during morning or day.',
		id: '01HVZGS2J4BERTZVRMVGTAJXR5',
		index: 1041,
		keyWords: 'envoy of the moon,1041',
		moduleId: 'effect',
		name: 'Envoy of the Moon'
	},
	{
		description: 'The power of spirits increases base damage.',
		id: '01HVZGS2J4JD3PHNKFCQPJTH6Y',
		index: 1061,
		keyWords: "spirit's power,1061",
		moduleId: 'effect',
		name: "Spirit's Power"
	},
	{
		description: 'Increases maximum HP by 15.',
		id: '01HVZGS2J42HC39YZHKFH29C5J',
		index: 1103,
		keyWords: 'max hp up s,1103',
		moduleId: 'effect',
		name: 'Max HP Up S'
	},
	{
		description: 'Increases attack power by 25.',
		id: '01HVZGS2J5MGZKE87YGQARF752',
		index: 1116,
		keyWords: 'attack up xl,1116',
		moduleId: 'effect',
		name: 'Attack Up XL'
	},
	{
		description: 'Increases evasion rate by 4%.',
		id: '01HVZGS2J5WXXCA07ZE7QZ0YGR',
		index: 1132,
		keyWords: 'evasion up xs,1132',
		moduleId: 'effect',
		name: 'Evasion Up XS'
	},
	{
		description: 'Increases critical hit rate by 3%.',
		id: '01HVZGS2J5T1C7W0AK8WVF3TPZ',
		index: 1137,
		keyWords: 'critical up xs,1137',
		moduleId: 'effect',
		name: 'Critical Up XS'
	},
	{
		description: 'Reduces wait time after using item by 15%.',
		id: '01HVZGS2J5X38WSVJWPF0XNSRF',
		index: 1155,
		keyWords: 'item shorten m,1155',
		moduleId: 'effect',
		name: 'Item Shorten M'
	},
	{
		description: 'Reduces chance of being affected by ailments by a fair amount.',
		id: '01HVZGS2J5YM9N2T8CTNRSY761',
		index: 1173,
		keyWords: 'ailment resist m,1173',
		moduleId: 'effect',
		name: 'Ailment Resist M'
	},
	{
		description: 'Absorbs a portion of damage dealt to the target as HP. The effect is large.',
		id: '01HVZGS2J58ZZ4WXKGZ6Z0M7E1',
		index: 1187,
		keyWords: 'damage absorb xl,1187',
		moduleId: 'effect',
		name: 'Damage Absorb XL'
	},
	{
		description: 'Increases Break resistance by a small amount.',
		id: '01HVZGS2J58F68VQ7X6HYRDW0R',
		index: 1196,
		keyWords: 'break resist s,1196',
		moduleId: 'effect',
		name: 'Break Resist S'
	},
	{
		description: 'This cauldron has “Synergy”, “Tuning”, “Time Limit”, and “Color Surroundings” effects.',
		id: '01HVZGS2J5PY246DZRF2Y5FQC1',
		index: 1255,
		keyWords: 'combined effect,1255',
		moduleId: 'effect',
		name: 'Combined Effect'
	},
	{
		description: 'The panel size is 6x6.',
		id: '01HVZGS2J6G0JW1SJW09DK2D71',
		index: 1263,
		keyWords: 'panel 6x6,1263',
		moduleId: 'effect',
		name: 'Panel 6x6'
	},
	{
		description: 'When placing materials, you can press <LB><RB> to flip it horizontally.',
		id: '01HVZGS2J6BZH2APFFQE4W3DTH',
		index: 1275,
		keyWords: 'horizontal flip,1275',
		moduleId: 'effect',
		name: 'Horizontal Flip'
	},
	{
		description: 'Increases (Ingredient) category value by 5.',
		id: '01HVZGS2J6QEVK763PR5MCE5VM',
		index: 1298,
		keyWords: '(ingredient) +5,1298',
		moduleId: 'effect',
		name: '(Ingredient) +5'
	},
	{
		description: 'Gain ultimate mobility. Wait time after using skills is reduced by 20%.',
		id: '01HVZGS2J65EXKG19KXR1RY9DV',
		index: 1401,
		keyWords: 'ultimate mobility,1401',
		moduleId: 'effect',
		name: 'Ultimate Mobility'
	},
	{
		description: 'Gain ultimate lightning resistance. Gain super lightning resistance.',
		id: '01HVZGS2J685JJJGZYN10JJT4W',
		index: 1416,
		keyWords: 'ultimate thunder resist,1416',
		moduleId: 'effect',
		name: 'Ultimate Thunder Resist'
	},
	{
		description: "Gain ultimate revival. Automatically revive on your next turn after being KO'd.",
		id: '01HVZGS2J6XGG6MGQZZ0FJ2FEE',
		index: 1421,
		keyWords: 'ultimate revival,1421',
		moduleId: 'effect',
		name: 'Ultimate Revival'
	},
	{
		description: 'Explodes to deal physical damage to the target. Its power is small.',
		id: '01HVZGS2J6FAB86YF1JF9BCWQK',
		index: 111,
		keyWords: 'explodes,111',
		moduleId: 'effect',
		name: 'Explodes'
	},
	{
		description: 'Reduces damage taken by 5%.',
		id: '01HVZGS2HZK3145CBF8538B84F',
		index: 1188,
		keyWords: 'damage cut s,1188',
		moduleId: 'effect',
		name: 'Damage Cut S'
	},
	{
		description: 'When placing materials, you can press <LB><RB> to flip it vertically.',
		id: '01HVZGS2J02ZRM8Q3EX3240SJB',
		index: 1274,
		keyWords: 'vertical flip,1274',
		moduleId: 'effect',
		name: 'Vertical Flip'
	},
	{
		description: "Deals strong physical damage. Physical damage is affected by the target's defense value.",
		id: '01HVZGS2J0SHVMQZNBFMT6PHRF',
		index: 2,
		keyWords: 'physical damage l,2',
		moduleId: 'effect',
		name: 'Physical Damage L'
	},
	{
		description: "Deals physical damage. Physical damage is affected by the target's defense value.",
		id: '01HVZGS2J0N3Y4SEHHSSB7DYZR',
		index: 0,
		keyWords: 'physical damage s',
		moduleId: 'effect',
		name: 'Physical Damage S'
	},
	{
		description: "Deals moderate fire damage. Fire damage is affected by the target's fire resistance value.",
		id: '01HVZGS2J1PMCTTQJA35GXYS7H',
		index: 7,
		keyWords: 'fire damage m,7',
		moduleId: 'effect',
		name: 'Fire Damage M'
	},
	{
		description: "Deals very powerful fire damage. Fire damage is affected by the target's fire resistance value.",
		id: '01HVZGS2J12D3PBS50GEG2ZQ6E',
		index: 9,
		keyWords: 'fire damage xl,9',
		moduleId: 'effect',
		name: 'Fire Damage XL'
	},
	{
		description: "Deals ultimate ice damage. Ice damage is affected by the target's ice resistance value.",
		id: '01HVZGS2J1SYGW901FKVZBZK78',
		index: 17,
		keyWords: 'absolute zero,17',
		moduleId: 'effect',
		name: 'Absolute Zero'
	},
	{
		description: "Deals very powerful ice damage. Ice damage is affected by the target's ice resistance value.",
		id: '01HVZGS2J1TVJDQMEJQP76WRAH',
		index: 15,
		keyWords: 'ice damage xl,15',
		moduleId: 'effect',
		name: 'Ice Damage XL'
	},
	{
		description:
			"Deals very powerful lightning damage. Lightning damage is affected by the target's lightning resistance value.",
		id: '01HVZGS2J17HXCKKBHC5CWKZK6',
		index: 21,
		keyWords: 'lightning damage xl,21',
		moduleId: 'effect',
		name: 'Lightning Damage XL'
	},
	{
		description:
			"Deals strong lightning damage. Lightning damage is affected by the target's lightning resistance value.",
		id: '01HVZGS2J1Y3GG8RBTYZHBKZ8V',
		index: 20,
		keyWords: 'lightning damage l,20',
		moduleId: 'effect',
		name: 'Lightning Damage L'
	},
	{
		description: "Deals magic damage. Magic damage is affected by the target's magic resistance value.",
		id: '01HVZGS2J2EYBYAGAYYW73VGP1',
		index: 24,
		keyWords: 'small missile,24',
		moduleId: 'effect',
		name: 'Small Missile'
	},
	{
		description: 'Deals very powerful physical damage. Can also randomly cause a number of effects.',
		id: '01HVZGS2J2DWPB50MQS0MDQXS8',
		index: 29,
		keyWords: 'power of creation,29',
		moduleId: 'effect',
		name: 'Power of Creation'
	},
	{
		description: "Deals fire damage. Fire damage is affected by the target's fire resistance value.",
		id: '01HVZGS2J2B04J098WPW6DQ2Z6',
		index: 6,
		keyWords: 'fire damage s,6',
		moduleId: 'effect',
		name: 'Fire Damage S'
	},
	{
		description: "Deals ultimate physical damage. Physical damage is affected by the target's defense value.",
		id: '01HVZGS2J2NGA9MYNMMK66W3B7',
		index: 5,
		keyWords: "giant's blow,5",
		moduleId: 'effect',
		name: "Giant's Blow"
	},
	{
		description:
			'Deals ultimate non-attribute damage. This is not affected by any resistance. The damage increases according to how powerful the applied traits are.',
		id: '01HVZGS2J2AABSCGY1VNE86NEM',
		index: 39,
		keyWords: 'aurora of ruin,39',
		moduleId: 'effect',
		name: 'Aurora of Ruin'
	},
	{
		description: 'Bombs rain from the sky, dealing fire damage to all enemies. Also activates 1 time card.',
		id: '01HVZGS2J2VKTQM62J9ZG8F4RN',
		index: 45,
		keyWords: 'falling bombs,45',
		moduleId: 'effect',
		name: 'Falling Bombs'
	},
	{
		description: 'Puni rain from the sky, dealing magic damage to all enemies. Also activates 1 time card.',
		id: '01HVZGS2J27E8MZN1B3PZZVMCN',
		index: 41,
		keyWords: 'falling puni,41',
		moduleId: 'effect',
		name: 'Falling Puni'
	},
	{
		description: 'Summons an Ardra to deal physical damage, also delaying turn a little.',
		id: '01HVZGS2J3JRFT426AP9Q85G32',
		index: 48,
		keyWords: 'summon ardra,48',
		moduleId: 'effect',
		name: 'Summon Ardra'
	},
	{
		description: 'Island Fish rain from the sky, dealing physical damage to all enemies. Also activates 1 time card.',
		id: '01HVZGS2J32GBFTGAANFC89JTJ',
		index: 46,
		keyWords: 'falling island fish,46',
		moduleId: 'effect',
		name: 'Falling Island Fish'
	},
	{
		description:
			'Treasure chests rain from the sky, dealing magic damage to all enemies. Also activates 1 time card.',
		id: '01HVZGS2J3JB051QPF3MFXT5VH',
		index: 47,
		keyWords: 'gift from heaven,47',
		moduleId: 'effect',
		name: 'Gift from Heaven'
	},
	{
		description: 'Summons a Lich to deal magic damage. Part of damage dealt is absorbed as HP.',
		id: '01HVZGS2J3XEKB3P7P25BKXT0A',
		index: 53,
		keyWords: 'summon lich,53',
		moduleId: 'effect',
		name: 'Summon Lich'
	},
	{
		description: "Deals moderate physical damage. Physical damage is affected by the target's defense value.",
		id: '01HVZGS2J3T8KCFJVFJW0BK4DF',
		index: 57,
		keyWords: 'steal some spirit,57',
		moduleId: 'effect',
		name: 'Steal Some Spirit'
	},
	{
		description: 'Summons a mandrake to deal magic damage. Has a chance to inflict Poison.',
		id: '01HVZGS2J39FD8F377C6Y41ACV',
		index: 52,
		keyWords: 'summon mandrake,52',
		moduleId: 'effect',
		name: 'Summon Mandrake'
	},
	{
		description:
			"Deals strong physical damage, and recover for half the damage dealt. This damage is affected by the target's defense value.",
		id: '01HVZGS2J3AYDMB9Z8JYPC8VJ7',
		index: 55,
		keyWords: 'steal life,55',
		moduleId: 'effect',
		name: 'Steal Life'
	},
	{
		description: "Deals moderate physical damage. Physical damage is affected by the target's defense value.",
		id: '01HVZGS2J44GD3MJD19YYC4NAA',
		index: 58,
		keyWords: 'steal spirit,58',
		moduleId: 'effect',
		name: 'Steal Spirit'
	},
	{
		description: 'Bursts to deal minor physical damage to the target. Its power is very small.',
		id: '01HVZGS2J4TM6MY7M8BR6RGTAC',
		index: 110,
		keyWords: 'bursts,110',
		moduleId: 'effect',
		name: 'Bursts'
	},
	{
		description: 'Burns deal continuous damage. The effect is fairly small.',
		id: '01HVZGS2J4M90GD7EA1KGTHJHH',
		index: 120,
		keyWords: 'inflicts burns,120',
		moduleId: 'effect',
		name: 'Inflicts Burns'
	},
	{
		description: 'Increases attack, defense, and speed by 15% in the evening. No effect during other times.',
		id: '01HVZGS2J4ZJT16AXRWZJ35AA5',
		index: 1038,
		keyWords: 'strong in evening,1038',
		moduleId: 'effect',
		name: 'Strong in Evening'
	},
	{
		description:
			'Increases attack, defense, and speed by 15% in the morning and day. No effect during evening or night.',
		id: '01HVZGS2J40RCPEX02M04WA8JB',
		index: 1040,
		keyWords: 'embodiment of the sun,1040',
		moduleId: 'effect',
		name: 'Embodiment of the Sun'
	},
	{
		description: 'The hidden magic of the Tool Rune increases item power and reduces wait time.',
		id: '01HVZGS2J42A4SGMJ88EJ1FTN7',
		index: 1058,
		keyWords: 'tool rune,1058',
		moduleId: 'effect',
		name: 'Tool Rune'
	},
	{
		description: 'Inner fighting spirit burns bright, revealing true power when fighting stronger enemies.',
		id: '01HVZGS2J4995HAE3F4A451DRT',
		index: 1067,
		keyWords: 'inner fire,1067',
		moduleId: 'effect',
		name: 'Inner Fire'
	},
	{
		description: 'Increases attack power by 5.',
		id: '01HVZGS2J4GWGVQKHBMX32W7QX',
		index: 1112,
		keyWords: 'attack up xs,1112',
		moduleId: 'effect',
		name: 'Attack Up XS'
	},
	{
		description: 'Increases speed by 5.',
		id: '01HVZGS2J5MB3SSYSG0FZD4RXW',
		index: 1122,
		keyWords: 'speed up xs,1122',
		moduleId: 'effect',
		name: 'Speed Up XS'
	},
	{
		description: "Increases the target's evasion rate by a lot. The effect lasts 5 turns.",
		id: '01HVZGS2J5X9BKQ0XWWB7ZPWTY',
		index: 1135,
		keyWords: 'evasion up l,1135',
		moduleId: 'effect',
		name: 'Evasion Up L'
	},
	{
		description: 'Increases item power by 15%.',
		id: '01HVZGS2J5Y0TXBDKYK3XD5VD4',
		index: 1152,
		keyWords: 'item enhance m,1152',
		moduleId: 'effect',
		name: 'Item Enhance M'
	},
	{
		description: 'Increases Burst Gauge fill rate by 2%.',
		id: '01HVZGS2J5BCX20PKEBENN3BTF',
		index: 1158,
		keyWords: 'burst up +2%,1158',
		moduleId: 'effect',
		name: 'Burst Up +2%'
	},
	{
		description: 'Gain lightning resistance.',
		id: '01HVZGS2J5NNFEA3XWVNDVR55R',
		index: 1183,
		keyWords: 'lightning resistance,1183',
		moduleId: 'effect',
		name: 'Lightning Resistance'
	},
	{
		description: 'Reduces damage taken by 10%.',
		id: '01HVZGS2J5W11XVW60H1WCZMK9',
		index: 1191,
		keyWords: 'damage cut xl,1191',
		moduleId: 'effect',
		name: 'Damage Cut XL'
	},
	{
		description: 'Increases damage dealt to Broken enemies by a small amount.',
		id: '01HVZGS2J5KW21ZAWZX662H5TR',
		index: 1200,
		keyWords: 'use opportunity m,1200',
		moduleId: 'effect',
		name: 'Use Opportunity M'
	},
	{
		description:
			'The Synthesis panel display is level 3. Higher display level increases bonus placement at the start of Synthesis.',
		id: '01HVZGS2J50TD754PD1C1N88AZ',
		index: 1259,
		keyWords: 'bonus display level 3,1259',
		moduleId: 'effect',
		name: 'Bonus Display Level 3'
	},
	{
		description:
			'When a material is placed, the Synthesis bonuses in all 8 directions around it become the same color.',
		id: '01HVZGS2J65J9NTYHM8TNBVF9N',
		index: 1270,
		keyWords: 'color surroundings,1270',
		moduleId: 'effect',
		name: 'Color Surroundings'
	},
	{
		description: 'Adds 10 category value to (Ingredient).',
		id: '01HVZGS2J6HPJA7P39HY9DFJKS',
		index: 1288,
		keyWords: 'add (ingredient),1288',
		moduleId: 'effect',
		name: 'Add (Ingredient)'
	},
	{
		description: 'Increases (Gunpowder) category value by 5.',
		id: '01HVZGS2J6PSVG16F6WP5RS7K1',
		index: 1299,
		keyWords: '(powder) +5,1299',
		moduleId: 'effect',
		name: '(Powder) +5'
	},
	{
		description: 'Gain ultimate enhancement. Increases maximum HP and MP by 50.',
		id: '01HVZGS2J6DENG2DKNH3923JVC',
		index: 1408,
		keyWords: 'ultimate enhancement,1408',
		moduleId: 'effect',
		name: 'Ultimate Enhancement'
	},
	{
		description: 'Gain ultimate growth. Greatly increases expected damage value.',
		id: '01HVZGS2J602EB87FYJY5NKHP2',
		index: 1420,
		keyWords: 'ultimate growth,1420',
		moduleId: 'effect',
		name: 'Ultimate Growth'
	},
	{
		description: 'Gain ultimate reduction. You have a 35% chance after a turn to reduce wait time by 25%.',
		id: '01HVZGS2J65XWX9AJPPJK7SGA6',
		index: 1425,
		keyWords: 'ultimate reduction,1425',
		moduleId: 'effect',
		name: 'Ultimate Reduction'
	},
	{
		description: 'The attack area becomes single target, but deals ultimate additional damage that ignores defense.',
		id: '01HVZGS2J6EAF754KNC2RK19TX',
		index: 125,
		keyWords: 'pinpoint flare,125',
		moduleId: 'effect',
		name: 'Pinpoint Flare'
	},
	{
		description: 'Increases maximum MP by 30.',
		id: '01HVZGS2JD1JAHP0ASVXHDQR6J',
		index: 1111,
		keyWords: 'max mp up xl,1111',
		moduleId: 'effect',
		name: 'Max MP Up XL'
	},
	{
		description:
			"Shocks the target with intense electricity, reducing their HP. The amount depends on the target's maximum HP.",
		id: '01HVZGS2J6BBXA0WD02DFN9JCC',
		index: 129,
		keyWords: 'intense shock,129',
		moduleId: 'effect',
		name: 'Intense Shock'
	},
	{
		description: "Activates automatically when the user's HP falls below 40%.",
		id: '01HVZGS2J6FVM0DTW46VQC3VG8',
		index: 140,
		keyWords: 'enthusiastic,140',
		moduleId: 'effect',
		name: 'Enthusiastic'
	},
	{
		description: "Restores the target's HP by an extreme amount.",
		id: '01HVZGS2J7EFFG8RNXSQGJ6S08',
		index: 200,
		keyWords: 'hp recovery xxl,200',
		moduleId: 'effect',
		name: 'HP Recovery XXL'
	},
	{
		description: "Restores a slight amount of the target's HP and LP.",
		id: '01HVZGS2J7AGQ7Y6P1577JN3ET',
		index: 218,
		keyWords: 'hplp recovery xs,218',
		moduleId: 'effect',
		name: 'HPLP Recovery XS'
	},
	{
		description: 'Sits in the stomach, delaying your turn in battle a slight amount. Also restores LP.',
		id: '01HVZGS2J7TGCWDGD3K4CZ1PSV',
		index: 284,
		keyWords: 'a little filling,284',
		moduleId: 'effect',
		name: 'A Little Filling'
	},
	{
		description: 'The nutritious flavor increases all stats by a small amount.',
		id: '01HVZGS2J7ED38RANGA0JF1ER4',
		index: 305,
		keyWords: 'nutritious,305',
		moduleId: 'effect',
		name: 'Nutritious'
	},
	{
		description: 'Grants the target a slight HP recovery bonus.',
		id: '01HVZGS2J7BW8DNZPTPSSEFZBM',
		index: 360,
		keyWords: 'recovery bonus xs,360',
		moduleId: 'effect',
		name: 'Recovery Bonus XS'
	},
	{
		description: 'The target recovers a small amount of Break value.',
		id: '01HVZGS2J7C3XAQFP5AZ426JFF',
		index: 365,
		keyWords: 'clears the mind,365',
		moduleId: 'effect',
		name: 'Clears the Mind'
	},
	{
		description: 'Revives the target from KO, and restores a huge amount of HP.',
		id: '01HVZGS2J74YJ37CMCW427M7QJ',
		index: 374,
		keyWords: 'revive from ko xl,374',
		moduleId: 'effect',
		name: 'Revive from KO XL'
	},
	{
		description: 'The target recovers from 1 ailment.',
		id: '01HVZGS2J7S7B7FVG0YFZQ5W1D',
		index: 384,
		keyWords: 'removes 1 ailment,384',
		moduleId: 'effect',
		name: 'Removes 1 Ailment'
	},
	{
		description: 'Temporarily reduces physical damage taken by the target. The effect is decent.',
		id: '01HVZGS2J76KXZAS1RF72RV4YM',
		index: 445,
		keyWords: "angel's protection l,445",
		moduleId: 'effect',
		name: "Angel's Protection L"
	},
	{
		description:
			"Receive the goddess' blessing, temporarily increasing the target's level a small amount. Higher level increases attack and speed.",
		id: '01HVZGS2J7WKWJHT7S7BQ0WBYJ',
		index: 450,
		keyWords: 'goddess blessing,450',
		moduleId: 'effect',
		name: 'Goddess Blessing'
	},
	{
		description: 'Item becomes a timed effect, allowing it to activate again. Effect lasts 1 turn.',
		id: '01HVZGS2J8XYH67D4XMVPBVQBQ',
		index: 463,
		keyWords: 'activate split,463',
		moduleId: 'effect',
		name: 'Activate Split'
	},
	{
		description: "Increases the target's attack power a little. The effect lasts 5 turns.",
		id: '01HVZGS2J8S481TMVWEYFJ24CG',
		index: 510,
		keyWords: 'attack up s,510',
		moduleId: 'effect',
		name: 'Attack Up S'
	},
	{
		description: "Increases all the target's stats a little. The effect lasts 5 turns.",
		id: '01HVZGS2J8JTJQ5RSXWFQSTJD7',
		index: 519,
		keyWords: 'all stats up s,519',
		moduleId: 'effect',
		name: 'All Stats Up S'
	},
	{
		description: "Increases the target's evasion rate. The effect lasts 5 turns.",
		id: '01HVZGS2J8PDBE2EDB3JV18EXQ',
		index: 526,
		keyWords: 'evasion up m,526',
		moduleId: 'effect',
		name: 'Evasion Up M'
	},
	{
		description: 'The target recovers HP on each turn. The effect lasts for 5 turns.',
		id: '01HVZGS2J8YCFPZPQJZ2PMJWWD',
		index: 536,
		keyWords: 'hp regen m,536',
		moduleId: 'effect',
		name: 'HP Regen M'
	},
	{
		description: "Temporarily increases the target's maximum HP in battle. The effect is moderate.",
		id: '01HVZGS2J8GXVFH8FDSWAYMZP7',
		index: 547,
		keyWords: 'temp stamina up m,547',
		moduleId: 'effect',
		name: 'Temp Stamina Up M'
	},
	{
		description: "Increases the target's chance to activate a chain attack by 25%. Effect lasts 5 turns.",
		id: '01HVZGS2J93YEVTAAS2HXJHBBK',
		index: 561,
		keyWords: 'chain attack up s,561',
		moduleId: 'effect',
		name: 'Chain Attack Up S'
	},
	{
		description:
			"Pushes the target's turn back a decent amount. This effect diminishes with each use until they take another turn.",
		id: '01HVZGS2J96SYNTC16JTCT6C9D',
		index: 619,
		keyWords: 'appetizing aroma,619',
		moduleId: 'effect',
		name: 'Appetizing Aroma'
	},
	{
		description: "Reduces the target's defense by a small amount, and temporarily increases your own by that amount.",
		id: '01HVZGS2J9CM4ZTMWXWV92TQ9F',
		index: 629,
		keyWords: 'steal defense s,629',
		moduleId: 'effect',
		name: 'Steal Defense S'
	},
	{
		description: '',
		id: '01HVZGS2J9463JSE7A8KE4QYVT',
		index: 637,
		keyWords: 'purge enhancements,637',
		moduleId: 'effect',
		name: 'Purge Enhancements'
	},
	{
		description: "Reduces the target's defense.",
		id: '01HVZGS2J9NJPX47C5NGH64EPN',
		index: 692,
		keyWords: 'defense down m,692',
		moduleId: 'effect',
		name: 'Defense Down M'
	},
	{
		description:
			'Has a low chance of Cursing the target. The effect is small. Curse causes the target to take damage when healing.',
		id: '01HVZGS2JAD6P4QHPK8CP0KA48',
		index: 709,
		keyWords: 'inflict curse s,709',
		moduleId: 'effect',
		name: 'Inflict Curse S'
	},
	{
		description:
			'Has a high chance of Blinding the target. The effect is big. Blind reduces attack hit rate and evasion rate.',
		id: '01HVZGS2JA8HR59RCHJ0NHBSVE',
		index: 714,
		keyWords: 'inflict blind l,714',
		moduleId: 'effect',
		name: 'Inflict Blind L'
	},
	{
		description:
			'Increases damage dealt to the target by a fixed ratio. It cannot be stacked, so only the highest effect will apply.',
		id: '01HVZGS2JA2AS5F8R2M09DATMG',
		index: 739,
		keyWords: 'weak to impacts,739',
		moduleId: 'effect',
		name: 'Weak to Impacts'
	},
	{
		description: 'Deals fixed damage to the target, unaffected by defense. Its power is small.',
		id: '01HVZGS2JACC9DF4628NEC7K8T',
		index: 117,
		keyWords: 'piercing damage m,117',
		moduleId: 'effect',
		name: 'Piercing Damage M'
	},
	{
		description: "Expands the item's area of effect a little.",
		id: '01HVZGS2JA63GYGD8GDJPYYPC4',
		index: 135,
		keyWords: 'expand effect area,135',
		moduleId: 'effect',
		name: 'Expand Effect Area'
	},
	{
		description: "Restores the target's HP by a huge amount.",
		id: '01HVZGS2JA49C25SMTWFTKC6QH',
		index: 199,
		keyWords: 'hp recovery xl,199',
		moduleId: 'effect',
		name: 'HP Recovery XL'
	},
	{
		description: "Restores the target's LP by a large amount.",
		id: '01HVZGS2JB7CAXH2QSMYYNXMR6',
		index: 210,
		keyWords: 'lp recovery l,210',
		moduleId: 'effect',
		name: 'LP Recovery L'
	},
	{
		description: "Restores the target's HP and LP.",
		id: '01HVZGS2JB7WXMPDDTDQFQCP8X',
		index: 220,
		keyWords: 'hplp recovery m,220',
		moduleId: 'effect',
		name: 'HPLP Recovery M'
	},
	{
		description:
			"Restores an extreme amount of the target's HP and LP. Recovery amount increases with higher maximum HP.",
		id: '01HVZGS2JBB6CCNZC6JWDA29ZN',
		index: 283,
		keyWords: 'eat and recover xxl,283',
		moduleId: 'effect',
		name: 'Eat and Recover XXL'
	},
	{
		description: "This is digested so quickly that it doesn't affect the body.",
		id: '01HVZGS2JBQR90PWBDY02GCM8K',
		index: 289,
		keyWords: 'digests quickly,289',
		moduleId: 'effect',
		name: 'Digests Quickly'
	},
	{
		description: 'The target recovers from Weak.',
		id: '01HVZGS2JBKR6QQ84KC8G3FG4F',
		index: 380,
		keyWords: 'cures weak,380',
		moduleId: 'effect',
		name: 'Cures Weak'
	},
	{
		description: "Restores the target's HP. Recovery amount increases the closer it is to 3pm.",
		id: '01HVZGS2JBEPCPZ3D5FY89GYHF',
		index: 308,
		keyWords: 'snack companion,308',
		moduleId: 'effect',
		name: 'Snack Companion'
	},
	{
		description: "Activates automatically when the user's HP falls below 20%.",
		id: '01HVZGS2JBQPR0B2JB38WE3B6H',
		index: 466,
		keyWords: 'auto activate 20%,466',
		moduleId: 'effect',
		name: 'Auto Activate 20%'
	},
	{
		description: "Increases the target's hit rate by a lot. The effect lasts 5 turns.",
		id: '01HVZGS2JB7DEVVHSMMX1KHYME',
		index: 524,
		keyWords: 'hit rate up l,524',
		moduleId: 'effect',
		name: 'Hit Rate Up L'
	},
	{
		description: "Increases the target's critical hit damage bonus by a decent amount.",
		id: '01HVZGS2JBZ6YK2KTKGR3GRH1S',
		index: 532,
		keyWords: 'crit power up m,532',
		moduleId: 'effect',
		name: 'Crit Power Up M'
	},
	{
		description: 'The target recovers a huge amount of HP on each turn. The effect lasts for 5 turns.',
		id: '01HVZGS2JCVFFT4TV2W44VVKJS',
		index: 538,
		keyWords: 'hp regen xl,538',
		moduleId: 'effect',
		name: 'HP Regen XL'
	},
	{
		description: "Reduces wait time after the target's next turn by a fair bit.",
		id: '01HVZGS2JC9PW9PD1XGP0BVGMH',
		index: 559,
		keyWords: 'cut wait time m,559',
		moduleId: 'effect',
		name: 'Cut Wait Time M'
	},
	{
		description:
			"Pushes the target's turn back a little. This effect diminishes with each use until they take another turn.",
		id: '01HVZGS2JCPC1ZC5FW9418G8PG',
		index: 618,
		keyWords: 'tasty aroma,618',
		moduleId: 'effect',
		name: 'Tasty Aroma'
	},
	{
		description: "Reduces the target's speed by a large amount, and temporarily increases your own by that amount.",
		id: '01HVZGS2JCW7WRAYZD6RA3S4Y0',
		index: 634,
		keyWords: 'steal speed l,634',
		moduleId: 'effect',
		name: 'Steal Speed L'
	},
	{
		description: "Greatly reduces the target's defense.",
		id: '01HVZGS2JCFDS1FY545JR3M5BA',
		index: 693,
		keyWords: 'defense down l,693',
		moduleId: 'effect',
		name: 'Defense Down L'
	},
	{
		description:
			'Has a high chance of Poisoning the target. The effect is big. Poison deals damage every time the target takes a turn.',
		id: '01HVZGS2JCN2SVGQGE4YWZCKK4',
		index: 705,
		keyWords: 'inflict poison l,705',
		moduleId: 'effect',
		name: 'Inflict Poison L'
	},
	{
		description: 'Inflicts 3 random status effects on the target. The chance and effect are both moderate.',
		id: '01HVZGS2JCVCNCJWPG3BNA85BV',
		index: 725,
		keyWords: 'inflict corruption m,725',
		moduleId: 'effect',
		name: 'Inflict Corruption M'
	},
	{
		description: 'Reduces defense by 15%, increasing attack by that amount.',
		id: '01HVZGS2JC65A9N1JDCCH5BNCQ',
		index: 1043,
		keyWords: 'protection to power,1043',
		moduleId: 'effect',
		name: 'Protection to Power'
	},
	{
		description: 'The hidden magic of the Speed Rune increases speed by 15.',
		id: '01HVZGS2JC7B5NX09Y5TCX1NPH',
		index: 1053,
		keyWords: 'speed rune,1053',
		moduleId: 'effect',
		name: 'Speed Rune'
	},
	{
		description: 'The power of the spirit king greatly increases base damage.',
		id: '01HVZGS2JCSPHRW5Y4MWA24QTD',
		index: 1062,
		keyWords: "spirit king's power,1062",
		moduleId: 'effect',
		name: "Spirit King's Power"
	},
	{
		description: 'The target recovers a large amount of HP on each turn. The effect lasts for 5 turns.',
		id: '01HVZGS2JCK7SKSQTKB19T4795',
		index: 1096,
		keyWords: 'hp regen l,1096',
		moduleId: 'effect',
		name: 'HP Regen L'
	},
	{
		description:
			'Calls a tempest, activating 1 time card that deals lightning damage to the target. The effect lasts 3 turns.',
		id: '01HVZGS2J6M16P1A0AVE94HBX8',
		index: 134,
		keyWords: 'call tempest,134',
		moduleId: 'effect',
		name: 'Call Tempest'
	},
	{
		description: 'The rain of fire spawns meteors, dealing big fixed additional damage to the target.',
		id: '01HVZGS2J7NH2N7WDMAZN1NHNG',
		index: 142,
		keyWords: 'shooting stars,142',
		moduleId: 'effect',
		name: 'Shooting Stars'
	},
	{
		description: "Restores the target's MP by a small amount.",
		id: '01HVZGS2J7S93NBCS7K43Z3STY',
		index: 202,
		keyWords: 'mp recovery s,202',
		moduleId: 'effect',
		name: 'MP Recovery S'
	},
	{
		description: "Restores a large amount of the target's HP and LP.",
		id: '01HVZGS2J7XFG6ACE2CM96WB0R',
		index: 221,
		keyWords: 'hplp recovery l,221',
		moduleId: 'effect',
		name: 'HPLP Recovery L'
	},
	{
		description: "It's so bad tasting that it causes pain, inflicting damage.",
		id: '01HVZGS2J7CQ39Q4R7PTYM5GGX',
		index: 290,
		keyWords: 'bad taste,290',
		moduleId: 'effect',
		name: 'Bad Taste'
	},
	{
		description: 'The highly nourishing flavor increases all stats.',
		id: '01HVZGS2J7H8V762B2VGNXA3P4',
		index: 306,
		keyWords: 'very nutritious,306',
		moduleId: 'effect',
		name: 'Very Nutritious'
	},
	{
		description: 'The target recovers from Slow.',
		id: '01HVZGS2J7FJ6Q9Y3MWY1WEA3Y',
		index: 377,
		keyWords: 'cures slow,377',
		moduleId: 'effect',
		name: 'Cures Slow'
	},
	{
		description: 'The target recovers a large amount of Break value.',
		id: '01HVZGS2J7QNH6XT7VZW3AQ08V',
		index: 368,
		keyWords: 'peppy,368',
		moduleId: 'effect',
		name: 'Peppy'
	},
	{
		description: 'The target recovers from Curse.',
		id: '01HVZGS2J7S4VZGX3XCH3F79RP',
		index: 378,
		keyWords: 'cures curse,378',
		moduleId: 'effect',
		name: 'Cures Curse'
	},
	{
		description: 'Grants all allies fire resistance.',
		id: '01HVZGS2J7G79Z8CFRCFN384PK',
		index: 439,
		keyWords: 'fire spirit blessing,439',
		moduleId: 'effect',
		name: 'Fire Spirit Blessing'
	},
	{
		description:
			"Receive the goddess' protection, temporarily increasing the target's level a slight amount. Higher level increases attack and speed.",
		id: '01HVZGS2J7F238QH62C791F9VZ',
		index: 449,
		keyWords: 'goddess protection,449',
		moduleId: 'effect',
		name: 'Goddess Protection'
	},
	{
		description: 'Deals damage to the target, but increases base damage on the next turn.',
		id: '01HVZGS2J89CKJ03RWME17VS7J',
		index: 457,
		keyWords: 'draws out power,457',
		moduleId: 'effect',
		name: 'Draws Out Power'
	},
	{
		description: 'Item becomes a timed effect, allowing it to activate again. Effect lasts 3 turns.',
		id: '01HVZGS2J89PZSN7TW88B18PAM',
		index: 465,
		keyWords: 'activate division,465',
		moduleId: 'effect',
		name: 'Activate Division'
	},
	{
		description: "Increases the target's defense by a lot. The effect lasts 5 turns.",
		id: '01HVZGS2J8Q4DVMM6T3FDVY13H',
		index: 515,
		keyWords: 'defense up l,515',
		moduleId: 'effect',
		name: 'Defense Up L'
	},
	{
		description: "Increases all the target's stats. The effect lasts 5 turns.",
		id: '01HVZGS2J86YG3SZQEWTM8C4J4',
		index: 520,
		keyWords: 'all stats up m,520',
		moduleId: 'effect',
		name: 'All Stats Up M'
	},
	{
		description: "Increases the target's chance to score a critical hit by a large amount.",
		id: '01HVZGS2J8VVXDGJHAKF01VQR0',
		index: 530,
		keyWords: 'crit rate up l,530',
		moduleId: 'effect',
		name: 'Crit Rate Up L'
	},
	{
		description: "Temporarily increases the target's maximum HP in battle. The effect is small.",
		id: '01HVZGS2J847VD116DHEZP4P32',
		index: 546,
		keyWords: 'temp stamina up s,546',
		moduleId: 'effect',
		name: 'Temp Stamina Up S'
	},
	{
		description: 'Reduces the effectiveness of status ailments by a little.',
		id: '01HVZGS2J80S4AXG6GM8MABX4S',
		index: 555,
		keyWords: 'reduce ailments s,555',
		moduleId: 'effect',
		name: 'Reduce Ailments S'
	},
	{
		description: 'Increases damage dealt to Broken enemies by 50%. Effect lasts 5 turns.',
		id: '01HVZGS2J9PTDD3RAWJ348WPF3',
		index: 566,
		keyWords: 'more opportunity l,566',
		moduleId: 'effect',
		name: 'More Opportunity L'
	},
	{
		description:
			"Pushes the target's turn back a considerable amount. This effect diminishes with each use until they take another turn.",
		id: '01HVZGS2J9428A65W0HXV4J17F',
		index: 620,
		keyWords: 'tempting aroma,620',
		moduleId: 'effect',
		name: 'Tempting Aroma'
	},
	{
		description: "Reduces the target's speed, and temporarily increases your own by that amount.",
		id: '01HVZGS2J986RCFZ5JSJ5E88ZJ',
		index: 633,
		keyWords: 'steal speed m,633',
		moduleId: 'effect',
		name: 'Steal Speed M'
	},
	{
		description: "Greatly reduces the target's attack power.",
		id: '01HVZGS2J9V4W067ASNCSHAZJE',
		index: 690,
		keyWords: 'attack down l,690',
		moduleId: 'effect',
		name: 'Attack Down L'
	},
	{
		description:
			'Has a low chance of Slowing the target. The effect is small. Slow increases wait time after taking a turn.',
		id: '01HVZGS2JAXD96QM7DME5YZQY5',
		index: 706,
		keyWords: 'inflict slow s,706',
		moduleId: 'effect',
		name: 'Inflict Slow S'
	},
	{
		description:
			'Has a moderate chance of Cursing the target. The effect is moderate. Curse causes the target to take damage when healing.',
		id: '01HVZGS2JASD7KEC80YAW2YFS8',
		index: 710,
		keyWords: 'inflict curse m,710',
		moduleId: 'effect',
		name: 'Inflict Curse M'
	},
	{
		description: 'Inflicts 3 random status effects on the target. The chance and effect are both low.',
		id: '01HVZGS2JA7H4YM1RZ97JMJ298',
		index: 724,
		keyWords: 'inflict corruption s,724',
		moduleId: 'effect',
		name: 'Inflict Corruption S'
	},
	{
		description: 'Sharp thorns inside burst out, dealing physical damage to the target. Its power is fairly high.',
		id: '01HVZGS2JANEXHPMJ2PWJ276FX',
		index: 112,
		keyWords: 'thorn attack,112',
		moduleId: 'effect',
		name: 'Thorn Attack'
	},
	{
		description: 'Emits a hotter than usual flame, dealing a large amount of additional damage that ignores defense.',
		id: '01HVZGS2JAQ5CPCBR7NZTFZJJT',
		index: 124,
		keyWords: 'blue flames,124',
		moduleId: 'effect',
		name: 'Blue Flames'
	},
	{
		description:
			'Has a high chance to inflict Poison on the target. The effect is very big. Poison deals damage on each turn.',
		id: '01HVZGS2JAXNESABW9GPEHPCCT',
		index: 143,
		keyWords: 'treat hazardous materials,143',
		moduleId: 'effect',
		name: 'Treat Hazardous Materials'
	},
	{
		description: "Restores the target's MP.",
		id: '01HVZGS2JASRVPJA3F68B2BEMD',
		index: 203,
		keyWords: 'mp recovery m,203',
		moduleId: 'effect',
		name: 'MP Recovery M'
	},
	{
		description: "Restores a slight amount of the target's HP and MP.",
		id: '01HVZGS2JBXHYT3CY83Z7XRGYE',
		index: 213,
		keyWords: 'hpmp recovery xs,213',
		moduleId: 'effect',
		name: 'HPMP Recovery XS'
	},
	{
		description: "Restores a slight amount of the target's HP and LP.",
		id: '01HVZGS2JBP30KWQH1M5C7AK88',
		index: 223,
		keyWords: 'mplp recovery xs,223',
		moduleId: 'effect',
		name: 'MPLP Recovery XS'
	},
	{
		description: "It's so hard that it slows you down, inflicting Slow. The effect is moderate.",
		id: '01HVZGS2JB14ZR496F8KAW0DDJ',
		index: 287,
		keyWords: 'hard,287',
		moduleId: 'effect',
		name: 'Hard'
	},
	{
		description: 'The crumbly texture makes you feel weird, reducing defense a small amount.',
		id: '01HVZGS2JBNYRX59R6NHDEAVFX',
		index: 302,
		keyWords: 'crumbly,302',
		moduleId: 'effect',
		name: 'Crumbly'
	},
	{
		description:
			"The unknown chewiness excites you, increasing defense a little. Also speeds up the target's turn a little.",
		id: '01HVZGS2JB325AW6XCK2EGN9E4',
		index: 304,
		keyWords: 'strange elasticity,304',
		moduleId: 'effect',
		name: 'Strange Elasticity'
	},
	{
		description: 'Item use count might not decrease when used. The chance is high.',
		id: '01HVZGS2JB14576P72QWSGMMJM',
		index: 462,
		keyWords: 'recycle,462',
		moduleId: 'effect',
		name: 'Recycle'
	},
	{
		description: "Increases all the target's stats by a lot. The effect lasts 5 turns.",
		id: '01HVZGS2JBDXZEC5Q7250GKZHD',
		index: 521,
		keyWords: 'all stats up l,521',
		moduleId: 'effect',
		name: 'All Stats Up L'
	},
	{
		description: "Increases the target's evasion rate by a lot. The effect lasts 5 turns.",
		id: '01HVZGS2JB14GR5Q3JS3PYY8S3',
		index: 527,
		keyWords: 'evasion up l,527',
		moduleId: 'effect',
		name: 'Evasion Up L'
	},
	{
		description: 'The target recovers a small amount of HP on each turn. The effect lasts for 5 turns.',
		id: '01HVZGS2JC5AE1KJ596XFES8S4',
		index: 535,
		keyWords: 'hp regen s,535',
		moduleId: 'effect',
		name: 'HP Regen S'
	},
	{
		description: "Automatically revive on the next turn after being KO'd. HP after revival is low.",
		id: '01HVZGS2JC3ZNJZQZ7NBPHNQ5C',
		index: 552,
		keyWords: 'auto revive s,552',
		moduleId: 'effect',
		name: 'Auto Revive S'
	},
	{
		description: "Increases the target's chance to activate a chain attack by 75%. Effect lasts 5 turns.",
		id: '01HVZGS2JCKG03JCVTN8K8WGTE',
		index: 563,
		keyWords: 'chain attack up l,563',
		moduleId: 'effect',
		name: 'Chain Attack Up L'
	},
	{
		description: "Reduces the target's attack, and temporarily increases your own by that amount.",
		id: '01HVZGS2JCTRXSZC7SPVQGJZGQ',
		index: 627,
		keyWords: 'steal attack m,627',
		moduleId: 'effect',
		name: 'Steal Attack M'
	},
	{
		description: "Slightly reduces the target's attack power.",
		id: '01HVZGS2JCK43G6H1EZZRAZVEX',
		index: 688,
		keyWords: 'attack down s,688',
		moduleId: 'effect',
		name: 'Attack Down S'
	},
	{
		description: "Greatly reduces all of the target's stats.",
		id: '01HVZGS2JCN76RBV1DDWNP4125',
		index: 699,
		keyWords: 'all stats down l,699',
		moduleId: 'effect',
		name: 'All Stats Down L'
	},
	{
		description:
			'Has a low chance of Weakening the target. The effect is small. Weak reduces the power of all skills.',
		id: '01HVZGS2JC9KAQDD205DGKYCTP',
		index: 715,
		keyWords: 'inflict weak s,715',
		moduleId: 'effect',
		name: 'Inflict Weak S'
	},
	{
		description: 'Increases attack, defense, and speed by 15% in the morning. No effect during other times.',
		id: '01HVZGS2JCHGE76XHTB9RK1QMF',
		index: 1036,
		keyWords: 'strong in morning,1036',
		moduleId: 'effect',
		name: 'Strong in Morning'
	},
	{
		description: 'Greatly increases attack, defense, and speed when ailments are removed.',
		id: '01HVZGS2JC8MPEEQQAXM5Z3BXS',
		index: 1050,
		keyWords: 'power of ten,1050',
		moduleId: 'effect',
		name: 'Power of Ten'
	},
	{
		description: 'The hidden magic of the Bulwark Rune reduces all damage taken.',
		id: '01HVZGS2JCPWAG4QCAQNYXJJV7',
		index: 1059,
		keyWords: 'bulwark rune,1059',
		moduleId: 'effect',
		name: 'Bulwark Rune'
	},
	{
		description: 'Find paths to escape, massively increasing the success rate of “Run”.',
		id: '01HVZGS2JCWY479P8934BV0ZA7',
		index: 1066,
		keyWords: 'search for escape,1066',
		moduleId: 'effect',
		name: 'Search for Escape'
	},
	{
		description: 'MP recovers on each turn.',
		id: '01HVZGS2JDXXDGVW015QP5DTA9',
		index: 1100,
		keyWords: 'mp regen l,1100',
		moduleId: 'effect',
		name: 'MP Regen L'
	},
	{
		description: 'Increases defense by 25.',
		id: '01HVZGS2JDPXWWQKRWSPAEYZGE',
		index: 1121,
		keyWords: 'defense up xl,1121',
		moduleId: 'effect',
		name: 'Defense Up XL'
	},
	{
		description: "Increases the target's speed by a lot. The effect lasts 5 turns.",
		id: '01HVZGS2JDM535YDQ8XM8TCJS6',
		index: 1125,
		keyWords: 'speed up l,1125',
		moduleId: 'effect',
		name: 'Speed Up L'
	},
	{
		description: 'Increases evasion rate by 12%.',
		id: '01HVZGS2JDDSE2SHZWDWJ5FA9K',
		index: 1136,
		keyWords: 'evasion up xl,1136',
		moduleId: 'effect',
		name: 'Evasion Up XL'
	},
	{
		description: 'Reduces wait time after using item by 10%.',
		id: '01HVZGS2JDQNQ80RRT0V4ENPZP',
		index: 1154,
		keyWords: 'item shorten s,1154',
		moduleId: 'effect',
		name: 'Item Shorten S'
	},
	{
		description: 'Reduces chance of being affected by ailments by a slight amount.',
		id: '01HVZGS2JDSAHMEGXB1DHSHCND',
		index: 1171,
		keyWords: 'ailment resist xs,1171',
		moduleId: 'effect',
		name: 'Ailment Resist XS'
	},
	{
		description: 'Deals fixed damage to the target, unaffected by defense. Its power is big.',
		id: '01HVZGS2JDGVHHGZJF4EA4538X',
		index: 118,
		keyWords: 'piercing damage l,118',
		moduleId: 'effect',
		name: 'Piercing Damage L'
	},
	{
		description: "Expands the item's area of effect.",
		id: '01HVZGS2JDP0K3PC4T6DNCK3AD',
		index: 136,
		keyWords: 'expand effect area +,136',
		moduleId: 'effect',
		name: 'Expand Effect Area +'
	},
	{
		description: 'Deals additional big fixed damage to the target.',
		id: '01HVZGS2JDDPPKZ9HS79QDK2BF',
		index: 141,
		keyWords: 'black bullets,141',
		moduleId: 'effect',
		name: 'Black Bullets'
	},
	{
		description: "Restores the target's HP and MP.",
		id: '01HVZGS2JDQ652YKDG0EZY37T4',
		index: 215,
		keyWords: 'hpmp recovery m,215',
		moduleId: 'effect',
		name: 'HPMP Recovery M'
	},
	{
		description: "Restores the whole party's HP by a small amount.",
		id: '01HVZGS2JE81M1JHENDKGWF3PF',
		index: 229,
		keyWords: 'tranquil aroma,229',
		moduleId: 'effect',
		name: 'Tranquil Aroma'
	},
	{
		description: 'Sits in the stomach, delaying your turn in battle. Also restores LP.',
		id: '01HVZGS2JE2H3V3MSTH3QRHJEF',
		index: 286,
		keyWords: 'very filling,286',
		moduleId: 'effect',
		name: 'Very Filling'
	},
	{
		description: "Warms the body, increasing the target's speed a lot, but also deals continuous damage.",
		id: '01HVZGS2JETZEWJS8D67EVHM5N',
		index: 298,
		keyWords: 'hot,298',
		moduleId: 'effect',
		name: 'Hot'
	},
	{
		description: 'Grants the target a small HP recovery bonus.',
		id: '01HVZGS2JECACJTHRS1QMZAQBB',
		index: 361,
		keyWords: 'recovery bonus s,361',
		moduleId: 'effect',
		name: 'Recovery Bonus S'
	},
	{
		description: 'The target recovers a huge amount of Break value.',
		id: '01HVZGS2JEMAB42W61EWKYZXJY',
		index: 369,
		keyWords: 'great feeling,369',
		moduleId: 'effect',
		name: 'Great Feeling'
	},
	{
		description: 'Grants all allies ice resistance.',
		id: '01HVZGS2JEE5CSGKGTJEW62WQY',
		index: 440,
		keyWords: 'ice spirit blessing,440',
		moduleId: 'effect',
		name: 'Ice Spirit Blessing'
	},
	{
		description:
			"Receive the heroic spirit's protection, temporarily increasing the target's level. Higher level increases attack and speed.",
		id: '01HVZGS2JEW31SWBC2AQ6KK8TN',
		index: 451,
		keyWords: 'heroic protection,451',
		moduleId: 'effect',
		name: 'Heroic Protection'
	},
	{
		description: 'Item becomes a timed effect, allowing it to activate again. Effect lasts 2 turns.',
		id: '01HVZGS2JEKFNYHJQFTYQMXPJJ',
		index: 464,
		keyWords: 'activate scatter,464',
		moduleId: 'effect',
		name: 'Activate Scatter'
	},
	{
		description: "Increases the target's defense a little. The effect lasts 5 turns.",
		id: '01HVZGS2JE7M9S0YN8ZGXNJ2JG',
		index: 513,
		keyWords: 'defense up s,513',
		moduleId: 'effect',
		name: 'Defense Up S'
	},
	{
		description: "Increases the target's hit rate. The effect lasts 5 turns.",
		id: '01HVZGS2JEEVZ5XZ0AF55EFTMM',
		index: 523,
		keyWords: 'hit rate up m,523',
		moduleId: 'effect',
		name: 'Hit Rate Up M'
	},
	{
		description: "Increases the target's critical hit damage bonus by a large amount.",
		id: '01HVZGS2JF3Z2T0VHF1J8FFZTM',
		index: 533,
		keyWords: 'crit power up l,533',
		moduleId: 'effect',
		name: 'Crit Power Up L'
	},
	{
		description: "Automatically revive on the next turn after being KO'd. HP after revival is moderate.",
		id: '01HVZGS2JFSDSMYDXJDSF1XVM5',
		index: 553,
		keyWords: 'auto revive m,553',
		moduleId: 'effect',
		name: 'Auto Revive M'
	},
	{
		description: 'Increases damage dealt to Broken enemies by 35%. Effect lasts 5 turns.',
		id: '01HVZGS2JFG2G5KJK44HE35ECZ',
		index: 565,
		keyWords: 'more opportunity m,565',
		moduleId: 'effect',
		name: 'More Opportunity M'
	},
	{
		description: "Reduces the target's defense, and temporarily increases your own by that amount.",
		id: '01HVZGS2JF49JTWGT11AXA2VQ0',
		index: 630,
		keyWords: 'steal defense m,630',
		moduleId: 'effect',
		name: 'Steal Defense M'
	},
	{
		description: "Reduces all of the target's stats.",
		id: '01HVZGS2JF8HJZKFVN5YAQ2C9X',
		index: 698,
		keyWords: 'all stats down m,698',
		moduleId: 'effect',
		name: 'All Stats Down M'
	},
	{
		description:
			'Has a moderate chance of Slowing the target. The effect is moderate. Slow increases wait time after taking a turn.',
		id: '01HVZGS2JFHN46773BSDFGKQVC',
		index: 707,
		keyWords: 'inflict slow m,707',
		moduleId: 'effect',
		name: 'Inflict Slow M'
	},
	{
		description: 'Has a moderate chance of No Healing the target. No Heal causes all recovery effects to heal for 0.',
		id: '01HVZGS2JFEHJRJWZ59SB85R3V',
		index: 719,
		keyWords: 'inflict no heal m,719',
		moduleId: 'effect',
		name: 'Inflict No Heal M'
	},
	{
		description: 'Deals continuous damage to the target. The effect is small, and the time is short.',
		id: '01HVZGS2JFGD898456R1MPWAKZ',
		index: 734,
		keyWords: 'damage over time s,734',
		moduleId: 'effect',
		name: 'Damage Over Time S'
	},
	{
		description: 'Consumes a huge amount of HP. The amount is influenced by maximum HP.',
		id: '01HVZGS2JF30RNQEY08PCEATKJ',
		index: 801,
		keyWords: 'consume hp xl,801',
		moduleId: 'effect',
		name: 'Consume HP XL'
	},
	{
		description: 'Rest for 10 hours, restoring all HP, MP, and LP.',
		id: '01HVZGS2JFRR4RN46G04GK6V5R',
		index: 860,
		keyWords: 'rest 10 hours,860',
		moduleId: 'effect',
		name: 'Rest 10 Hours'
	},
	{
		description: 'Reduces the chance of incidents.',
		id: '01HVZGS2JFV9FYQSZ2G5BPSZRV',
		index: 870,
		keyWords: 'wards off danger,870',
		moduleId: 'effect',
		name: 'Wards Off Danger'
	},
	{
		description: 'Reduces LP consumed while moving on the World Map to 0.',
		id: '01HVZGS2JFRPTFPTTPFTMSS7B1',
		index: 927,
		keyWords: 'lightens body a lot,927',
		moduleId: 'effect',
		name: 'Lightens Body a Lot'
	},
	{
		description: 'Increases money gained from battle a little. Has no effect when money obtained is 0.',
		id: '01HVZGS2JG717T3J9ZZN9DM034',
		index: 939,
		keyWords: 'find money,939',
		moduleId: 'effect',
		name: 'Find Money'
	},
	{
		description: 'Inextinguishable flames deal continuous damage. The effect is very big.',
		id: '01HVZGS2JGXBMYVEKTEVMQPMCS',
		index: 122,
		keyWords: 'inextinguishable flame,122',
		moduleId: 'effect',
		name: 'Inextinguishable Flame'
	},
	{
		description: "Restores the target's MP by a slight amount.",
		id: '01HVZGS2JG2NG463V06F6JVG1J',
		index: 201,
		keyWords: 'mp recovery xs,201',
		moduleId: 'effect',
		name: 'MP Recovery XS'
	},
	{
		description: "Restores the target's LP by a huge amount.",
		id: '01HVZGS2JGZCWAJS0VDF69H193',
		index: 211,
		keyWords: 'lp recovery xl,211',
		moduleId: 'effect',
		name: 'LP Recovery XL'
	},
	{
		description: "Restores a small amount of the target's HP and LP.",
		id: '01HVZGS2JGNX070FKD6DJPBVDR',
		index: 224,
		keyWords: 'mplp recovery s,224',
		moduleId: 'effect',
		name: 'MPLP Recovery S'
	},
	{
		description:
			"Restores a huge amount of the target's HP and LP. Recovery amount increases with higher maximum HP.",
		id: '01HVZGS2JG6CX0R2Q2645JE8EP',
		index: 282,
		keyWords: 'eat and recover xl,282',
		moduleId: 'effect',
		name: 'Eat and Recover XL'
	},
	{
		description: 'The target recovers from Sleep.',
		id: '01HVZGS2JGRXVDTM92KQS5CXAN',
		index: 292,
		keyWords: 'bitter,292',
		moduleId: 'effect',
		name: 'Bitter'
	},
	{
		description:
			"The texture experienced for the first time excites you, increasing attack power a little. Also restores a small amount of the target's HP each turn.",
		id: '01HVZGS2JGWN54P27BSKDPEZ8Q',
		index: 301,
		keyWords: 'unique texture,301',
		moduleId: 'effect',
		name: 'Unique Texture'
	},
	{
		description: 'Revives the target from KO, and restores a small amount of HP.',
		id: '01HVZGS2JG1PFDHN5A27EP6H4Z',
		index: 371,
		keyWords: 'revive from ko s,371',
		moduleId: 'effect',
		name: 'Revive from KO S'
	},
	{
		description: 'Grants all allies fire, ice, and lightning resistance.',
		id: '01HVZGS2JGKXRR6NNYD3E7KSWH',
		index: 442,
		keyWords: 'grand spirit blessing,442',
		moduleId: 'effect',
		name: 'Grand Spirit Blessing'
	},
	{
		description: 'Massively reduces the effectiveness of the next attack the target receives.',
		id: '01HVZGS2JHY5S6AEM1TG7RV01Q',
		index: 448,
		keyWords: "spirit's protection l,448",
		moduleId: 'effect',
		name: "Spirit's Protection L"
	},
	{
		description: 'Item use count might not decrease when used. The chance is fairly low.',
		id: '01HVZGS2JH3EW1FFM6F2BH6TKY',
		index: 460,
		keyWords: 'reduce consumption,460',
		moduleId: 'effect',
		name: 'Reduce Consumption'
	},
	{
		description: 'Has a low chance of No Healing the target. No Heal causes all recovery effects to heal for 0.',
		id: '01HVZGS2JHQMAREGJM2VNYZQ56',
		index: 718,
		keyWords: 'inflict no heal s,718',
		moduleId: 'effect',
		name: 'Inflict No Heal S'
	},
	{
		description:
			"Reduces the target's lightning resistance by 1 level. Has no effect if the target has no resistance, and this cannot cause weaknesses.",
		id: '01HVZGS2JHVBAEMN0RYJWE9X1C',
		index: 730,
		keyWords: 'weak to thunder,730',
		moduleId: 'effect',
		name: 'Weak to Thunder'
	},
	{
		description:
			'Massively increases Break effect dealt to the target. If multiple targets are hit, the effect is split.',
		id: '01HVZGS2JH8QQ3DPPK21JVWAG8',
		index: 742,
		keyWords: 'add break l,742',
		moduleId: 'effect',
		name: 'Add Break L'
	},
	{
		description: 'Consumes a small amount of MP. The effect is weakened when MP is insufficient.',
		id: '01HVZGS2JHZ1X3E6BSVF0VPEM0',
		index: 803,
		keyWords: 'consume mp s,803',
		moduleId: 'effect',
		name: 'Consume MP S'
	},
	{
		description: 'Rest until dusk, restoring HP, MP, and LP. The amount restored depends on how long you rested.',
		id: '01HVZGS2JH4DY5DSBE9K2N6H93',
		index: 861,
		keyWords: 'rest to dusk,861',
		moduleId: 'effect',
		name: 'Rest to Dusk'
	},
	{
		description: 'Hide your presence, making it hard for monsters to notice you for a short time.',
		id: '01HVZGS2JHM0YYBNYD1FP7SZQE',
		index: 867,
		keyWords: 'hard to notice,867',
		moduleId: 'effect',
		name: 'Hard to Notice'
	},
	{
		description: "Increases the target's evasion rate a little. The effect lasts 5 turns.",
		id: '01HVZGS2JD05QPV4DZ6AQHKDDH',
		index: 1133,
		keyWords: 'evasion up s,1133',
		moduleId: 'effect',
		name: 'Evasion Up S'
	},
	{
		description: 'Increases critical damage bonus by 9%.',
		id: '01HVZGS2JDT6PV1YPWN66YA98C',
		index: 1144,
		keyWords: 'critical enhance m,1144',
		moduleId: 'effect',
		name: 'Critical Enhance M'
	},
	{
		description: 'Increases Burst Gauge fill rate by 3%.',
		id: '01HVZGS2JD2JAC85E8H8CE00J4',
		index: 1159,
		keyWords: 'burst up +3%,1159',
		moduleId: 'effect',
		name: 'Burst Up +3%'
	},
	{
		description: 'Thorns stick into the target, draining HP over time. The effect is very small.',
		id: '01HVZGS2JD27GDW8G5TJ9GPK17',
		index: 113,
		keyWords: 'sticking thorns,113',
		moduleId: 'effect',
		name: 'Sticking Thorns'
	},
	{
		description: 'A vast level of unending heat deals continuous damage. The effect is supremely big.',
		id: '01HVZGS2JDSW4GCWCA6P3RC5AY',
		index: 123,
		keyWords: 'scorching earth,123',
		moduleId: 'effect',
		name: 'Scorching Earth'
	},
	{
		description: "Activates automatically when the user's HP falls below 20%.",
		id: '01HVZGS2JDNZR8VWWDHKCNFFQX',
		index: 138,
		keyWords: 'alive,138',
		moduleId: 'effect',
		name: 'Alive'
	},
	{
		description: "Restores the target's LP by a small amount.",
		id: '01HVZGS2JD971S4FQGDE57QVFE',
		index: 208,
		keyWords: 'lp recovery s,208',
		moduleId: 'effect',
		name: 'LP Recovery S'
	},
	{
		description: "Restores the target's HP and LP.",
		id: '01HVZGS2JDTJXA75ENS0C4VTXT',
		index: 225,
		keyWords: 'mplp recovery m,225',
		moduleId: 'effect',
		name: 'MPLP Recovery M'
	},
	{
		description:
			"Restores a small amount of the target's HP and LP. Recovery amount increases with higher maximum HP.",
		id: '01HVZGS2JE74C9A7GEWEY0ZQ0V',
		index: 279,
		keyWords: 'eat and recover s,279',
		moduleId: 'effect',
		name: 'Eat and Recover S'
	},
	{
		description: "Coldness slows down the body, reducing the target's speed a little.",
		id: '01HVZGS2JEWHZD8X7P6VY2DR3J',
		index: 296,
		keyWords: 'cold,296',
		moduleId: 'effect',
		name: 'Cold'
	},
	{
		description: "The fluffy texture is quite pleasant. Increases the target's defense a little.",
		id: '01HVZGS2JEH2T2SMMZ16H5NSES',
		index: 303,
		keyWords: 'fluffy,303',
		moduleId: 'effect',
		name: 'Fluffy'
	},
	{
		description: 'The target recovers Break value.',
		id: '01HVZGS2JEF1FYSR6AWSY1JP87',
		index: 367,
		keyWords: 'cure dizziness,367',
		moduleId: 'effect',
		name: 'Cure Dizziness'
	},
	{
		description: 'The target recovers from revival After Effects.',
		id: '01HVZGS2JE2AS94E3FKNRS62R2',
		index: 383,
		keyWords: 'cures after effects,383',
		moduleId: 'effect',
		name: 'Cures After Effects'
	},
	{
		description: 'Temporarily reduces physical damage taken by the target. The effect is fairly small.',
		id: '01HVZGS2JEQ0MNPSCRXAQJVC3J',
		index: 444,
		keyWords: "angel's protection m,444",
		moduleId: 'effect',
		name: "Angel's Protection M"
	},
	{
		description: 'Deals large damage to the target, but greatly increases base damage on the next turn.',
		id: '01HVZGS2JE99S13KJ18WWGDJVF',
		index: 458,
		keyWords: 'power overflowing,458',
		moduleId: 'effect',
		name: 'Power Overflowing'
	},
	{
		description: "Activates automatically when the user's HP falls below 30%.",
		id: '01HVZGS2JEXQTQYEE6BCNN456B',
		index: 467,
		keyWords: 'auto activate 30%,467',
		moduleId: 'effect',
		name: 'Auto Activate 30%'
	},
	{
		description: "Increases the target's speed by a lot. The effect lasts 5 turns.",
		id: '01HVZGS2JEXVKEGDD2PKX6ZYY6',
		index: 518,
		keyWords: 'speed up l,518',
		moduleId: 'effect',
		name: 'Speed Up L'
	},
	{
		description: "Increases the target's chance to score a critical hit by a small amount.",
		id: '01HVZGS2JE8T5D4YZAVYZ7JV3M',
		index: 528,
		keyWords: 'crit rate up s,528',
		moduleId: 'effect',
		name: 'Crit Rate Up S'
	},
	{
		description: 'The target recovers an extreme amount of HP on each turn. The effect lasts for 5 turns.',
		id: '01HVZGS2JF7B0408S5PDZ4XZS6',
		index: 539,
		keyWords: 'hp regen xxl,539',
		moduleId: 'effect',
		name: 'HP Regen XXL'
	},
	{
		description: 'Reduces the effectiveness of status ailments by a good amount.',
		id: '01HVZGS2JF4DXCVJ36A8Z6V9C4',
		index: 557,
		keyWords: 'reduce ailments l,557',
		moduleId: 'effect',
		name: 'Reduce Ailments L'
	},
	{
		description: "Reduces the target's attack by a small amount, and temporarily increases your own by that amount.",
		id: '01HVZGS2JF4ST9XRSYMKWS377J',
		index: 626,
		keyWords: 'steal attack s,626',
		moduleId: 'effect',
		name: 'Steal Attack S'
	},
	{
		description: "Reduces the target's speed.",
		id: '01HVZGS2JF0PH0HTM2J3RK8QY7',
		index: 695,
		keyWords: 'speed down m,695',
		moduleId: 'effect',
		name: 'Speed Down M'
	},
	{
		description:
			'Has a moderate chance of Sleeping the target. Sleep renders the target unable to act on their turn.',
		id: '01HVZGS2JFV3R9P1MR99REZJFP',
		index: 701,
		keyWords: 'inflict sleep m,701',
		moduleId: 'effect',
		name: 'Inflict Sleep M'
	},
	{
		description:
			'Has a low chance of Blinding the target. The effect is small. Blind reduces attack hit rate and evasion rate.',
		id: '01HVZGS2JFZ09E3QYY5VAYJTMS',
		index: 712,
		keyWords: 'inflict blind s,712',
		moduleId: 'effect',
		name: 'Inflict Blind S'
	},
	{
		description:
			"Reduces all of the target's resistances by 1 level. Has no effect if the target has no resistances, and this cannot cause weaknesses.",
		id: '01HVZGS2JF9EJ8TQ3TPMGZ5XHH',
		index: 727,
		keyWords: 'reduce all resistances,727',
		moduleId: 'effect',
		name: 'Reduce All Resistances'
	},
	{
		description: 'Reduces the rate at which enemies use powerful attacks.',
		id: '01HVZGS2JFJ7B0HJ0X9097S9KQ',
		index: 745,
		keyWords: 'restrain attack m,745',
		moduleId: 'effect',
		name: 'Restrain Attack M'
	},
	{
		description: 'Increases the chances of finding better materials in the field.',
		id: '01HVZGS2JFC0CY2N31R0ZEVAW5',
		index: 857,
		keyWords: 'grow good materials?,857',
		moduleId: 'effect',
		name: 'Grow Good Materials?'
	},
	{
		description:
			'Allows you to select many items that you gathered, and send them back to the atelier. You can send up to 50 at a time.',
		id: '01HVZGS2JFEKNEGRSKKE3A5C3N',
		index: 866,
		keyWords: 'big cart,866',
		moduleId: 'effect',
		name: 'Big Cart'
	},
	{
		description: 'Reduces the chance of incidents by a large amount.',
		id: '01HVZGS2JF7ZGZPAG0Q6NQ1RKS',
		index: 871,
		keyWords: 'good health,871',
		moduleId: 'effect',
		name: 'Good Health'
	},
	{
		description: 'Reduces items lost by party wipe a little.',
		id: '01HVZGS2JGJVZCYJAG7NY8RW2Q',
		index: 933,
		keyWords: 'prepared for emergency,933',
		moduleId: 'effect',
		name: 'Prepared for Emergency'
	},
	{
		description: 'Sharp thorns stick into the target, draining HP over time. The effect is small.',
		id: '01HVZGS2JGCV9PPSX0RG5CDCPF',
		index: 114,
		keyWords: 'painful thorns,114',
		moduleId: 'effect',
		name: 'Painful Thorns'
	},
	{
		description: "Restores the target's HP by a large amount.",
		id: '01HVZGS2JGE2Y1DV335AGR7Z2P',
		index: 198,
		keyWords: 'hp recovery l,198',
		moduleId: 'effect',
		name: 'HP Recovery L'
	},
	{
		description: "Restores the target's MP by an extreme amount.",
		id: '01HVZGS2JGW3F6RYXR3G71AW9T',
		index: 206,
		keyWords: 'mp recovery xxl,206',
		moduleId: 'effect',
		name: 'MP Recovery XXL'
	},
	{
		description: "Restores a large amount of the target's HP and MP.",
		id: '01HVZGS2JGSVNPG8ZSNPGZJ38Q',
		index: 216,
		keyWords: 'hpmp recovery l,216',
		moduleId: 'effect',
		name: 'HPMP Recovery L'
	},
	{
		description: "Restores the whole party's HP.",
		id: '01HVZGS2JG5H53D5S4BDC9RDYR',
		index: 230,
		keyWords: 'healing aroma,230',
		moduleId: 'effect',
		name: 'Healing Aroma'
	},
	{
		description: "It's delicious, restoring a small amount of HP.",
		id: '01HVZGS2JGPPNRM2JYFC5NNMH5',
		index: 291,
		keyWords: 'very delicious,291',
		moduleId: 'effect',
		name: 'Very Delicious'
	},
	{
		description: "Warms the body, increasing the target's speed a little.",
		id: '01HVZGS2JG2RKJ0BADYNDWEBZZ',
		index: 297,
		keyWords: 'warm,297',
		moduleId: 'effect',
		name: 'Warm'
	},
	{
		description: 'Grants the target a large HP recovery bonus.',
		id: '01HVZGS2JG64BC555N5TWNJNYF',
		index: 363,
		keyWords: 'recovery bonus l,363',
		moduleId: 'effect',
		name: 'Recovery Bonus L'
	},
	{
		description:
			"Automatically revive on the next turn after being KO'd. Affects all allies, but HP after revival is moderate.",
		id: '01HVZGS2JGR8RA0K2W5ABWJ52Z',
		index: 437,
		keyWords: 'soul awakening tone,437',
		moduleId: 'effect',
		name: 'Soul Awakening Tone'
	},
	{
		description: 'Greatly reduces the effectiveness of the next attack the target receives.',
		id: '01HVZGS2JGV79KETKNV153D1XB',
		index: 447,
		keyWords: "spirit's protection m,447",
		moduleId: 'effect',
		name: "Spirit's Protection M"
	},
	{
		description:
			"Receive the heroic spirit's blessing, temporarily increasing the target's level a large amount. Higher level increases attack and speed.",
		id: '01HVZGS2JH5QQF9JK1HCMTSKYP',
		index: 452,
		keyWords: 'heroic blessing,452',
		moduleId: 'effect',
		name: 'Heroic Blessing'
	},
	{
		description: "Greatly reduces the target's speed.",
		id: '01HVZGS2JH264NYH6MWSV4KD4A',
		index: 696,
		keyWords: 'speed down l,696',
		moduleId: 'effect',
		name: 'Speed Down L'
	},
	{
		description: 'Has a high chance of Sealing the target. Seal renders the target unable to use powerful attacks.',
		id: '01HVZGS2JH8K2P9PQNTDHAQ36C',
		index: 723,
		keyWords: 'inflict seal l,723',
		moduleId: 'effect',
		name: 'Inflict Seal L'
	},
	{
		description: "Reduces the target's level a lot. Reduced level decreases all stats and damage dealt.",
		id: '01HVZGS2JHEJV2PRENR1J3G40Z',
		index: 733,
		keyWords: 'level down l,733',
		moduleId: 'effect',
		name: 'Level Down L'
	},
	{
		description:
			'Ridiculously increases Break effect dealt to the target. If multiple targets are hit, the effect is split.',
		id: '01HVZGS2JH1AS8Y2QMGPC4F5SN',
		index: 743,
		keyWords: 'add break xl,743',
		moduleId: 'effect',
		name: 'Add Break XL'
	},
	{
		description: 'Greatly increases the chances of finding better materials in the field.',
		id: '01HVZGS2JHSWA85XKJHVY9QGB8',
		index: 858,
		keyWords: 'grow great materials?,858',
		moduleId: 'effect',
		name: 'Grow Great Materials?'
	},
	{
		description: 'Rest until night, restoring HP, MP, and LP. The amount restored depends on how long you rested.',
		id: '01HVZGS2JHRK7XEW9TEGGEP1K5',
		index: 862,
		keyWords: 'rest to night,862',
		moduleId: 'effect',
		name: 'Rest to Night'
	},
	{
		description: 'Move speed increases by 30%.',
		id: '01HVZGS2JHP8HJ9JYEX4QWTDAM',
		index: 930,
		keyWords: 'move speed up l,930',
		moduleId: 'effect',
		name: 'Move Speed Up L'
	},
	{
		description: 'Reduces items lost by party wipe.',
		id: '01HVZGS2JHY45VPFDS7BET3JBD',
		index: 934,
		keyWords: 'emergency escape,934',
		moduleId: 'effect',
		name: 'Emergency Escape'
	},
	{
		description: 'Reduces items lost by party wipe a lot.',
		id: '01HVZGS2JHTP02X2X0WXZ5G7PY',
		index: 935,
		keyWords: 'insure items,935',
		moduleId: 'effect',
		name: 'Insure Items'
	},
	{
		description: 'Increases money gained from battle. Has no effect when money obtained is 0.',
		id: '01HVZGS2JHHNCP5SC767APF619',
		index: 940,
		keyWords: 'find lots of money,940',
		moduleId: 'effect',
		name: 'Find Lots of Money'
	},
	{
		description: 'Increases friend points gained when giving presents a little.',
		id: '01HVZGS2JJ2NV6FE9WR4MW07KT',
		index: 945,
		keyWords: 'get more friendly,945',
		moduleId: 'effect',
		name: 'Get More Friendly'
	},
	{
		description: 'Reduces wait time after all actions by a large amount.',
		id: '01HVZGS2JJZQNDKHSQ8DG6JR7Y',
		index: 1014,
		keyWords: 'accelerate time,1014',
		moduleId: 'effect',
		name: 'Accelerate Time'
	},
	{
		description: 'Increases attack, defense, and speed by 20% of base maximum HP.',
		id: '01HVZGS2JJV3QPZA4ZHX2FEYDH',
		index: 1028,
		keyWords: 'life to power,1028',
		moduleId: 'effect',
		name: 'Life to Power'
	},
	{
		description: 'Recover a small amount of HP when recovering HP or removing ailments.',
		id: '01HVZGS2JJVWAHYM3N4RR3SAFM',
		index: 1044,
		keyWords: 'calm blessing,1044',
		moduleId: 'effect',
		name: 'Calm Blessing'
	},
	{
		description: 'Recover HP when recovering HP or removing ailments.',
		id: '01HVZGS2JJK0HRBJTKNW9CZFV6',
		index: 1046,
		keyWords: 'healthy blessing,1046',
		moduleId: 'effect',
		name: 'Healthy Blessing'
	},
	{
		description: 'Increases maximum HP by 20.',
		id: '01HVZGS2JJVSFMBE8VXRAX81BA',
		index: 1104,
		keyWords: 'max hp up m,1104',
		moduleId: 'effect',
		name: 'Max HP Up M'
	},
	{
		description: 'Increases maximum MP by 10.',
		id: '01HVZGS2JJ62H5R7J09JDQ7CJW',
		index: 1107,
		keyWords: 'max mp up xs,1107',
		moduleId: 'effect',
		name: 'Max MP Up XS'
	},
	{
		description: 'Increases hit rate by 10%.',
		id: '01HVZGS2JJQ7HRS4RDSNKMR7AZ',
		index: 1127,
		keyWords: 'hit rate up xs,1127',
		moduleId: 'effect',
		name: 'Hit Rate Up XS'
	},
	{
		description:
			"When the target's HP falls below a certain amount, they can be finished with one hit. This has no effect on certain enemies.",
		id: '01HVZGS2JJ8SRNX9DNVDN63RPB',
		index: 119,
		keyWords: 'hits vitals,119',
		moduleId: 'effect',
		name: 'Hits Vitals'
	},
	{
		description:
			"Pushes the target's turn back a considerable amount. This effect diminishes with each use until they take another turn.",
		id: '01HVZGS2JJHVK3RE8B47KE956R',
		index: 128,
		keyWords: 'very numbing,128',
		moduleId: 'effect',
		name: 'Very Numbing'
	},
	{
		description: "Expands the item's area of effect by a lot.",
		id: '01HVZGS2JK2J93SN1288XMBWWK',
		index: 137,
		keyWords: 'expand effect area ++,137',
		moduleId: 'effect',
		name: 'Expand Effect Area ++'
	},
	{
		description:
			'Freezes the target with very powerful cold, pushing back their turn. This effect diminishes with each use until they take another turn.',
		id: '01HVZGS2JKP1TV88KX4HW2EHN4',
		index: 131,
		keyWords: 'spatial freeze,131',
		moduleId: 'effect',
		name: 'Spatial Freeze'
	},
	{
		description: "Restores the target's HP by a small amount.",
		id: '01HVZGS2JKH0AVG7T33EG29F2Z',
		index: 196,
		keyWords: 'hp recovery s,196',
		moduleId: 'effect',
		name: 'HP Recovery S'
	},
	{
		description: "Restores the target's MP by a large amount.",
		id: '01HVZGS2JKMXK07H7T891KJJCA',
		index: 204,
		keyWords: 'mp recovery l,204',
		moduleId: 'effect',
		name: 'MP Recovery L'
	},
	{
		description: "Restores the target's LP.",
		id: '01HVZGS2JKC1NN5K787FVV6XRF',
		index: 209,
		keyWords: 'lp recovery m,209',
		moduleId: 'effect',
		name: 'LP Recovery M'
	},
	{
		description: "Restores the target's LP by an extreme amount.",
		id: '01HVZGS2JKRRN6AMWER7R3XHVK',
		index: 212,
		keyWords: 'lp recovery xxl,212',
		moduleId: 'effect',
		name: 'LP Recovery XXL'
	},
	{
		description: "Restores a huge amount of the target's HP and LP.",
		id: '01HVZGS2JKFF5A2PB94R4RXE50',
		index: 227,
		keyWords: 'mplp recovery xl,227',
		moduleId: 'effect',
		name: 'MPLP Recovery XL'
	},
	{
		description:
			"Restores a large amount of the target's HP and LP. Recovery amount increases with higher maximum HP.",
		id: '01HVZGS2JK4T93D3N6QRFR05NX',
		index: 281,
		keyWords: 'eat and recover l,281',
		moduleId: 'effect',
		name: 'Eat and Recover L'
	},
	{
		description: "Restores a small amount of the target's HP and LP.",
		id: '01HVZGS2JK1R6D756HBK6CXFCY',
		index: 295,
		keyWords: 'super sweet,295',
		moduleId: 'effect',
		name: 'Super Sweet'
	},
	{
		description: 'The sloppy texture makes you feel weird, reducing attack power a small amount.',
		id: '01HVZGS2JM0S5VMY6VZF51Z6EM',
		index: 299,
		keyWords: 'sloppy,299',
		moduleId: 'effect',
		name: 'Sloppy'
	},
	{
		description: "Restores the target's HP. Recovery amount increases the closer it is to 7am.",
		id: '01HVZGS2JM8WDCYTRC0HXMKQPK',
		index: 307,
		keyWords: 'wake up cup,307',
		moduleId: 'effect',
		name: 'Wake Up Cup'
	},
	{
		description: 'The target recovers a slight amount of Break value.',
		id: '01HVZGS2JMK9WZ42QC6G8FGSMF',
		index: 364,
		keyWords: 'refreshing,364',
		moduleId: 'effect',
		name: 'Refreshing'
	},
	{
		description: 'The target recovers a decent amount of Break value.',
		id: '01HVZGS2JMSCC0Y6XHZTJXPZ10',
		index: 366,
		keyWords: 'awakening,366',
		moduleId: 'effect',
		name: 'Awakening'
	},
	{
		description: 'Revives the target from KO, and restores a slight amount of HP.',
		id: '01HVZGS2JM1V9PZQMPTB4W8SGQ',
		index: 370,
		keyWords: 'revive from ko xs,370',
		moduleId: 'effect',
		name: 'Revive from KO XS'
	},
	{
		description: 'Revives the target from KO, and restores a large amount of HP.',
		id: '01HVZGS2JMEHVWW3JHAJFQHZFW',
		index: 373,
		keyWords: 'revive from ko l,373',
		moduleId: 'effect',
		name: 'Revive from KO L'
	},
	{
		description: 'The target recovers from No Heal.',
		id: '01HVZGS2JMD7JN1ASCWDCH83EQ',
		index: 381,
		keyWords: 'cures no heal,381',
		moduleId: 'effect',
		name: 'Cures No Heal'
	},
	{
		description: 'The target recovers from Seal.',
		id: '01HVZGS2JM08TWRFJW9TPGQ0MW',
		index: 382,
		keyWords: 'cures seal,382',
		moduleId: 'effect',
		name: 'Cures Seal'
	},
	{
		description:
			"Automatically revive on the next turn after being KO'd. Affects all allies, but HP after revival is low.",
		id: '01HVZGS2JMZSFH7AK2S1AAFM0H',
		index: 436,
		keyWords: 'body awakening tone,436',
		moduleId: 'effect',
		name: 'Body Awakening Tone'
	},
	{
		description: "Increases all of the target's stats by 20. The effect lasts for 5 turns.",
		id: '01HVZGS2JNNV0DH0ZQWZAJ29MM',
		index: 438,
		keyWords: 'hidden power,438',
		moduleId: 'effect',
		name: 'Hidden Power'
	},
	{
		description: 'Reduces the effectiveness of the next attack the target receives.',
		id: '01HVZGS2JNY5BFSQAH3VWSQG74',
		index: 446,
		keyWords: "spirit's protection,446",
		moduleId: 'effect',
		name: "Spirit's Protection"
	},
	{
		description: 'Deals huge damage to the target, but massively increases base damage on the next turn.',
		id: '01HVZGS2JNBYBW4S3P1ZRNB713',
		index: 459,
		keyWords: 'adrenaline rush,459',
		moduleId: 'effect',
		name: 'Adrenaline Rush'
	},
	{
		description: "Increases the target's attack power. The effect lasts 5 turns.",
		id: '01HVZGS2JNYR23HCQ5G7N0QDN6',
		index: 511,
		keyWords: 'attack up m,511',
		moduleId: 'effect',
		name: 'Attack Up M'
	},
	{
		description: "Increases the target's attack power by a lot. The effect lasts 5 turns.",
		id: '01HVZGS2JNHJZGE5HASCP8N0DA',
		index: 512,
		keyWords: 'attack up l,512',
		moduleId: 'effect',
		name: 'Attack Up L'
	},
	{
		description: "Increases the target's speed a little. The effect lasts 5 turns.",
		id: '01HVZGS2JNW9ERNY09FT7TVEYT',
		index: 516,
		keyWords: 'speed up s,516',
		moduleId: 'effect',
		name: 'Speed Up S'
	},
	{
		description: "Increases the target's hit rate a little. The effect lasts 5 turns.",
		id: '01HVZGS2JNHT9GS33X52JV1391',
		index: 522,
		keyWords: 'hit rate up s,522',
		moduleId: 'effect',
		name: 'Hit Rate Up S'
	},
	{
		description: "Increases the target's chance to score a critical hit by a decent amount.",
		id: '01HVZGS2JPFHBS5N6066YFZ7W5',
		index: 529,
		keyWords: 'crit rate up m,529',
		moduleId: 'effect',
		name: 'Crit Rate Up M'
	},
	{
		description: 'The target recovers a slight amount of HP on each turn. The effect lasts for 5 turns.',
		id: '01HVZGS2JPFT9TAFQ03C8CZ7F0',
		index: 534,
		keyWords: 'hp regen xs,534',
		moduleId: 'effect',
		name: 'HP Regen XS'
	},
	{
		description: 'Reduces the effectiveness of status ailments by a fair amount.',
		id: '01HVZGS2JPRRVBEQH14G9QEBB6',
		index: 556,
		keyWords: 'reduce ailments m,556',
		moduleId: 'effect',
		name: 'Reduce Ailments M'
	},
	{
		description: 'Increases damage dealt to Broken enemies by 25%. Effect lasts 5 turns.',
		id: '01HVZGS2JPG8TM4JNRCVRC9RYZ',
		index: 564,
		keyWords: 'more opportunity s,564',
		moduleId: 'effect',
		name: 'More Opportunity S'
	},
	{
		description: '',
		id: '01HVZGS2JPPRAZZ9D1GM6GD4PT',
		index: 636,
		keyWords: 'erase enhancements,636',
		moduleId: 'effect',
		name: 'Erase Enhancements'
	},
	{
		description: "Slightly reduces all of the target's stats.",
		id: '01HVZGS2JP8KG026H4GP764BNK',
		index: 697,
		keyWords: 'all stats down s,697',
		moduleId: 'effect',
		name: 'All Stats Down S'
	},
	{
		description: 'Has a high chance of Sleeping the target. Sleep renders the target unable to act on their turn.',
		id: '01HVZGS2JPJ5CQ9F2QWTECG78J',
		index: 702,
		keyWords: 'inflict sleep l,702',
		moduleId: 'effect',
		name: 'Inflict Sleep L'
	},
	{
		description:
			'Has a moderate chance of Weakening the target. The effect is moderate. Weak reduces the power of all skills.',
		id: '01HVZGS2JPFRAFH3FJ1A4Z9CGM',
		index: 716,
		keyWords: 'inflict weak m,716',
		moduleId: 'effect',
		name: 'Inflict Weak M'
	},
	{
		description: 'When placing materials, you can press <LB><RB> to rotate it.',
		id: '01HVZGS2JPWHQWEN3YW1XMEWGY',
		index: 1276,
		keyWords: 'rotate,1276',
		moduleId: 'effect',
		name: 'Rotate'
	},
	{
		description: 'Inflicts 3 random status effects on the target. The chance and effect are both high.',
		id: '01HVZGS2JPZX76VJCZNQAP2ND9',
		index: 726,
		keyWords: 'inflict corruption l,726',
		moduleId: 'effect',
		name: 'Inflict Corruption L'
	},
	{
		description: "Decreases the target's critical hit rate.",
		id: '01HVZGS2JQVFR8E20FPNGMQ2Q2',
		index: 737,
		keyWords: 'critical down,737',
		moduleId: 'effect',
		name: 'Critical Down'
	},
	{
		description: 'Pacifies the enemy, delaying the activation of powerful attacks by fair bit.',
		id: '01HVZGS2JQSV1AAYGS42EZBE2Y',
		index: 748,
		keyWords: 'pacification m,748',
		moduleId: 'effect',
		name: 'Pacification M'
	},
	{
		description: 'Consumes HP. The amount is influenced by maximum HP.',
		id: '01HVZGS2JQBCH1QJ23E7KZR5PT',
		index: 799,
		keyWords: 'consume hp m,799',
		moduleId: 'effect',
		name: 'Consume HP M'
	},
	{
		description: 'Upon use, you will be instantly returned to the atelier.',
		id: '01HVZGS2JQ3ZMZ273SVANDR3GR',
		index: 863,
		keyWords: 'return to base,863',
		moduleId: 'effect',
		name: 'Return to Base'
	},
	{
		description: 'Reduces LP consumed while moving on the World Map by half.',
		id: '01HVZGS2JQ63CDRR8GMVEDQ1QT',
		index: 926,
		keyWords: 'lightens body,926',
		moduleId: 'effect',
		name: 'Lightens Body'
	},
	{
		description: 'Increases experience points gained from battle a little.',
		id: '01HVZGS2JQRZHK4G51CEMACJ4W',
		index: 942,
		keyWords: 'trains the body,942',
		moduleId: 'effect',
		name: 'Trains the Body'
	},
	{
		description: 'Increases experience points gained from battle.',
		id: '01HVZGS2JH228XXHD40WA9940M',
		index: 943,
		keyWords: 'trains the body a lot,943',
		moduleId: 'effect',
		name: 'Trains the Body a Lot'
	},
	{
		description: 'Stats are temporarily increased in battle, but the boost decreases with each turn.',
		id: '01HVZGS2JJB0EVZJJV5T9TRT12',
		index: 999,
		keyWords: 'fighting spirit calm,999',
		moduleId: 'effect',
		name: 'Fighting Spirit Calm'
	},
	{
		description: 'Reduces damage taken by 10%, but delays turn.',
		id: '01HVZGS2JJP4YN90SMPAM2PBCH',
		index: 1022,
		keyWords: 'guardian angel blessing,1022',
		moduleId: 'effect',
		name: 'Guardian Angel Blessing'
	},
	{
		description: 'Halves turn delaying effects.',
		id: '01HVZGS2JJN40J1WJ94MVZPJNT',
		index: 1035,
		keyWords: 'super resist gravity,1035',
		moduleId: 'effect',
		name: 'Super Resist Gravity'
	},
	{
		description: 'Removes 2 status ailments when HP is recovered.',
		id: '01HVZGS2JJH19PS47Z6FJ7B2JA',
		index: 1045,
		keyWords: 'pure blessing,1045',
		moduleId: 'effect',
		name: 'Pure Blessing'
	},
	{
		description: 'The hidden magic of the Herculean Rune increases attack by 25.',
		id: '01HVZGS2JJ7NB6M6YXVWGGBW7R',
		index: 1054,
		keyWords: 'herculean rune,1054',
		moduleId: 'effect',
		name: 'Herculean Rune'
	},
	{
		description: 'Increases maximum HP by 25.',
		id: '01HVZGS2JJAESAC9B9ZAXY9ZRY',
		index: 1105,
		keyWords: 'max hp up l,1105',
		moduleId: 'effect',
		name: 'Max HP Up L'
	},
	{
		description: "Increases the target's defense. The effect lasts 5 turns.",
		id: '01HVZGS2JJDWFMAZX1ZEHQ52ST',
		index: 1119,
		keyWords: 'defense up m,1119',
		moduleId: 'effect',
		name: 'Defense Up M'
	},
	{
		description: 'Deals fixed damage to the target, unaffected by defense. Its power is very small.',
		id: '01HVZGS2JJC3EBT55MZ0SAPKBH',
		index: 116,
		keyWords: 'piercing damage s,116',
		moduleId: 'effect',
		name: 'Piercing Damage S'
	},
	{
		description:
			"Pushes the target's turn back a decent amount. This effect diminishes with each use until they take another turn.",
		id: '01HVZGS2JJFEJ1T2XEXRADEN7J',
		index: 127,
		keyWords: 'numbing,127',
		moduleId: 'effect',
		name: 'Numbing'
	},
	{
		description:
			'Freezes the target with powerful cold, pushing back their turn. This effect diminishes with each use until they take another turn.',
		id: '01HVZGS2JKMF8NA589SC8CAATD',
		index: 130,
		keyWords: 'total freeze,130',
		moduleId: 'effect',
		name: 'Total Freeze'
	},
	{
		description: "Activates automatically when the user's HP falls below 30%.",
		id: '01HVZGS2JKXPZFQ2DRN90FSPTY',
		index: 139,
		keyWords: 'lively,139',
		moduleId: 'effect',
		name: 'Lively'
	},
	{
		description: "Restores the target's HP by a slight amount.",
		id: '01HVZGS2JKXZS2FRDP5P4H81EF',
		index: 195,
		keyWords: 'hp recovery xs,195',
		moduleId: 'effect',
		name: 'HP Recovery XS'
	},
	{
		description: "Restores the target's HP.",
		id: '01HVZGS2JK5NT3S50XCQR8S5KG',
		index: 197,
		keyWords: 'hp recovery m,197',
		moduleId: 'effect',
		name: 'HP Recovery M'
	},
	{
		description: "Restores the target's MP by a huge amount.",
		id: '01HVZGS2JKCNGFKHFEXV6FN21F',
		index: 205,
		keyWords: 'mp recovery xl,205',
		moduleId: 'effect',
		name: 'MP Recovery XL'
	},
	{
		description: "Restores a huge amount of the target's HP and MP.",
		id: '01HVZGS2JKHH0A53MT25HZJYJR',
		index: 217,
		keyWords: 'hpmp recovery xl,217',
		moduleId: 'effect',
		name: 'HPMP Recovery XL'
	},
	{
		description: "Restores a large amount of the target's HP and LP.",
		id: '01HVZGS2JKG90PKRMDZ1H9EFEH',
		index: 226,
		keyWords: 'mplp recovery l,226',
		moduleId: 'effect',
		name: 'MPLP Recovery L'
	},
	{
		description: "Restores the target's HP and LP. Recovery amount increases with higher maximum HP.",
		id: '01HVZGS2JK04FF4H6KGKCBYNQY',
		index: 280,
		keyWords: 'eat and recover m,280',
		moduleId: 'effect',
		name: 'Eat and Recover M'
	},
	{
		description: "Restores a slight amount of the target's HP and LP.",
		id: '01HVZGS2JKHH1EK91PMACAP48Z',
		index: 294,
		keyWords: 'sweet,294',
		moduleId: 'effect',
		name: 'Sweet'
	},
	{
		description: "Reduces the wait time after the target's next turn by a small amount.",
		id: '01HVZGS2JMXT8AQZF6Z22FJGHP',
		index: 293,
		keyWords: 'salty,293',
		moduleId: 'effect',
		name: 'Salty'
	},
	{
		description: "The jiggly texture is quite pleasant. Increases the target's attack power a little.",
		id: '01HVZGS2JMFQYHB1SVSHW5TS5R',
		index: 300,
		keyWords: 'jiggly,300',
		moduleId: 'effect',
		name: 'Jiggly'
	},
	{
		description: "Restores the target's HP. Recovery amount increases the closer it is to 10pm.",
		id: '01HVZGS2JMBSF7BPYZM3STRWGG',
		index: 309,
		keyWords: 'bedtime cup,309',
		moduleId: 'effect',
		name: 'Bedtime Cup'
	},
	{
		description: 'Grants the target an HP recovery bonus.',
		id: '01HVZGS2JMR50TQGC7Q1Q48JA9',
		index: 362,
		keyWords: 'recovery bonus m,362',
		moduleId: 'effect',
		name: 'Recovery Bonus M'
	},
	{
		description: 'Revives the target from KO, and restores a moderate amount of HP.',
		id: '01HVZGS2JM2KEJEB2APV18XMCF',
		index: 372,
		keyWords: 'revive from ko m,372',
		moduleId: 'effect',
		name: 'Revive from KO M'
	},
	{
		description: 'The target recovers from Sleep.',
		id: '01HVZGS2JMEDCYGZVSK2JTE3BQ',
		index: 375,
		keyWords: 'cures sleep,375',
		moduleId: 'effect',
		name: 'Cures Sleep'
	},
	{
		description: 'The target recovers from Poison.',
		id: '01HVZGS2JMJYW9P3M9KTM1T6MN',
		index: 376,
		keyWords: 'cures poison,376',
		moduleId: 'effect',
		name: 'Cures Poison'
	},
	{
		description: 'The target recovers from Blind.',
		id: '01HVZGS2JMDE0E38133AVDX7J0',
		index: 379,
		keyWords: 'cures blind,379',
		moduleId: 'effect',
		name: 'Cures Blind'
	},
	{
		description: 'The target recovers from 2 ailments.',
		id: '01HVZGS2JMVVD5KYDQ1MQ046XE',
		index: 385,
		keyWords: 'removes many ailments,385',
		moduleId: 'effect',
		name: 'Removes Many Ailments'
	},
	{
		description: 'Grants all allies lightning resistance.',
		id: '01HVZGS2JM73PRHAVFC8CBCNVN',
		index: 441,
		keyWords: 'thunder spirit blessing,441',
		moduleId: 'effect',
		name: 'Thunder Spirit Blessing'
	},
	{
		description: 'Temporarily reduces physical damage taken by the target. The effect is small.',
		id: '01HVZGS2JNHARG8TSDAJA8Z1TJ',
		index: 443,
		keyWords: "angel's protection,443",
		moduleId: 'effect',
		name: "Angel's Protection"
	},
	{
		description:
			"The heroic spirit descends, temporarily increasing the target's level a massive amount. Higher level increases attack and speed.",
		id: '01HVZGS2JNHH88RHJS2AEV0R8F',
		index: 453,
		keyWords: 'heroic descent,453',
		moduleId: 'effect',
		name: 'Heroic Descent'
	},
	{
		description: 'Item use count might not decrease when used. The chance is low.',
		id: '01HVZGS2JNMAWGCNV97VZ95ZC2',
		index: 461,
		keyWords: 'relieve consumption,461',
		moduleId: 'effect',
		name: 'Relieve Consumption'
	},
	{
		description: "Activates automatically when the user's HP falls below 50%.",
		id: '01HVZGS2JNHVS2W33QHEMARG19',
		index: 468,
		keyWords: 'auto activate 50%,468',
		moduleId: 'effect',
		name: 'Auto Activate 50%'
	},
	{
		description: "Increases the target's defense. The effect lasts 5 turns.",
		id: '01HVZGS2JN8QNSFHGC2K6WJ27Q',
		index: 514,
		keyWords: 'defense up m,514',
		moduleId: 'effect',
		name: 'Defense Up M'
	},
	{
		description: "Increases the target's speed. The effect lasts 5 turns.",
		id: '01HVZGS2JNK2ZDE8TW1JH7YW46',
		index: 517,
		keyWords: 'speed up m,517',
		moduleId: 'effect',
		name: 'Speed Up M'
	},
	{
		description: "Increases the target's evasion rate a little. The effect lasts 5 turns.",
		id: '01HVZGS2JP4N6WC9M4WBC38D60',
		index: 525,
		keyWords: 'evasion up s,525',
		moduleId: 'effect',
		name: 'Evasion Up S'
	},
	{
		description: "Increases the target's critical hit damage bonus by a small amount.",
		id: '01HVZGS2JPFNT4WKA0HEDPMY9X',
		index: 531,
		keyWords: 'crit power up s,531',
		moduleId: 'effect',
		name: 'Crit Power Up S'
	},
	{
		description: 'The target recovers a large amount of HP on each turn. The effect lasts for 5 turns.',
		id: '01HVZGS2JP25WNG7Y9JM7YA1C8',
		index: 537,
		keyWords: 'hp regen l,537',
		moduleId: 'effect',
		name: 'HP Regen L'
	},
	{
		description: "Reduces wait time after the target's next turn by a good amount.",
		id: '01HVZGS2JP7YWSCM7DBB0ZANWJ',
		index: 560,
		keyWords: 'cut wait time l,560',
		moduleId: 'effect',
		name: 'Cut Wait Time L'
	},
	{
		description: "Reduces the target's speed by a small amount, and temporarily increases your own by that amount.",
		id: '01HVZGS2JPZH3AS2HZVBH8F4FC',
		index: 632,
		keyWords: 'steal speed s,632',
		moduleId: 'effect',
		name: 'Steal Speed S'
	},
	{
		description: "Slightly reduces the target's defense.",
		id: '01HVZGS2JP9MCFSYN4P19772BK',
		index: 691,
		keyWords: 'defense down s,691',
		moduleId: 'effect',
		name: 'Defense Down S'
	},
	{
		description: 'Has a low chance of Sleeping the target. Sleep renders the target unable to act on their turn.',
		id: '01HVZGS2JPV3YK6ERC400X26TQ',
		index: 700,
		keyWords: 'inflict sleep s,700',
		moduleId: 'effect',
		name: 'Inflict Sleep S'
	},
	{
		description:
			'Has a high chance of Slowing the target. The effect is big. Slow increases wait time after taking a turn.',
		id: '01HVZGS2JP2WE88WRHNW0BJB55',
		index: 708,
		keyWords: 'inflict slow l,708',
		moduleId: 'effect',
		name: 'Inflict Slow L'
	},
	{
		description:
			'Has a high chance of Weakening the target. The effect is big. Weak reduces the power of all skills.',
		id: '01HVZGS2JP8J8E72EY0WP5R7NP',
		index: 717,
		keyWords: 'inflict weak l,717',
		moduleId: 'effect',
		name: 'Inflict Weak L'
	},
	{
		description: 'Has a low chance of Sealing the target. Seal renders the target unable to use powerful attacks.',
		id: '01HVZGS2JPE8JXPTFEF6HZNDGX',
		index: 721,
		keyWords: 'inflict seal s,721',
		moduleId: 'effect',
		name: 'Inflict Seal S'
	},
	{
		description: 'Deals continuous damage to the target. The effect is moderate, and the time is short.',
		id: '01HVZGS2JQ6844KEDAQRHXF2KR',
		index: 735,
		keyWords: 'damage over time m,735',
		moduleId: 'effect',
		name: 'Damage Over Time M'
	},
	{
		description:
			'Greatly increases Break effect dealt to the target. If multiple targets are hit, the effect is split.',
		id: '01HVZGS2JQZYC9C4CX5WQBWEWQ',
		index: 741,
		keyWords: 'add break m,741',
		moduleId: 'effect',
		name: 'Add Break M'
	},
	{
		description: 'Consumes a small amount of HP. The amount is influenced by maximum HP.',
		id: '01HVZGS2JQMR1MGZ63NSSNP6G7',
		index: 798,
		keyWords: 'consume hp s,798',
		moduleId: 'effect',
		name: 'Consume HP S'
	},
	{
		description: 'Consumes MP. The effect is weakened when MP is insufficient.',
		id: '01HVZGS2JQ0G1NWHJJMJDGM3XJ',
		index: 804,
		keyWords: 'consume mp m,804',
		moduleId: 'effect',
		name: 'Consume MP M'
	},
	{
		description: '',
		id: '01HVZGS2JQ1XK2TX5EZJMHKQXD',
		index: 872,
		keyWords: 'wards off misfortune,872',
		moduleId: 'effect',
		name: 'Wards Off Misfortune'
	},
	{
		description:
			'Increases money gained from battle by a lot. Allows you to gain some money even when amount obtained is 0.',
		id: '01HVZGS2JQDD5S0PW413YA9CS7',
		index: 941,
		keyWords: "miser's secrets,941",
		moduleId: 'effect',
		name: "Miser's Secrets"
	},
	{
		description: 'Increases friend points gained when giving presents.',
		id: '01HVZGS2JQK65SRCCKMB9JV06M',
		index: 946,
		keyWords: 'get much more friendly,946',
		moduleId: 'effect',
		name: 'Get Much More Friendly'
	},
	{
		description: 'Makes it harder for gathering level and enemy level to increase.',
		id: '01HVZGS2JQ42QNC11JQPNDQS6N',
		index: 949,
		keyWords: 'seal of stability,949',
		moduleId: 'effect',
		name: 'Seal of Stability'
	},
	{
		description: 'Increases effect of all Assist actions by a lot.',
		id: '01HVZGS2JQZJHTFA7SPFFRSFPB',
		index: 1005,
		keyWords: 'oath of friendship,1005',
		moduleId: 'effect',
		name: 'Oath of Friendship'
	},
	{
		description: 'Reduces the number of turns status ailments last by a large amount.',
		id: '01HVZGS2JRZCSF542TF1JEY6AV',
		index: 1007,
		keyWords: "god's protection,1007",
		moduleId: 'effect',
		name: "God's Protection"
	},
	{
		description: 'Increases chain attack chance by a small amount.',
		id: '01HVZGS2JR6M8ZKB4T3R57RBHZ',
		index: 1015,
		keyWords: 'chain attack practice,1015',
		moduleId: 'effect',
		name: 'Chain Attack Practice'
	},
	{
		description: 'Increases attack skill power by an amount depending on wait time after use.',
		id: '01HVZGS2JRQ3429DK9QMSJRB1R',
		index: 1027,
		keyWords: 'time to power,1027',
		moduleId: 'effect',
		name: 'Time to Power'
	},
	{
		description: 'Increases attack, defense, and speed by 15% during the day. No effect during other times.',
		id: '01HVZGS2JR3482VYAF1A4R1NR0',
		index: 1037,
		keyWords: 'strong in day,1037',
		moduleId: 'effect',
		name: 'Strong in Day'
	},
	{
		description: 'Temporarily increases attack, defense, and speed when ailments are removed.',
		id: '01HVZGS2JRGXA6YF64GPVGX5CM',
		index: 1049,
		keyWords: 'power of one,1049',
		moduleId: 'effect',
		name: 'Power of One'
	},
	{
		description: 'The hidden magic of the Swift Gale Rune increases speed by 25.',
		id: '01HVZGS2JR6TSCXY615EZKA8PK',
		index: 1056,
		keyWords: 'swift gale rune,1056',
		moduleId: 'effect',
		name: 'Swift Gale Rune'
	},
	{
		description: "Automatically revive on turn when KO'd in battle. HP after revival is decent.",
		id: '01HVZGS2JRMC5FA3629QG2KB34',
		index: 1065,
		keyWords: 'soul awakening,1065',
		moduleId: 'effect',
		name: 'Soul Awakening'
	},
	{
		description: 'MP recovers a decent amount on each turn.',
		id: '01HVZGS2JR869YX79CST5A5AXK',
		index: 1099,
		keyWords: 'mp regen m,1099',
		moduleId: 'effect',
		name: 'MP Regen M'
	},
	{
		description: 'Increases maximum MP by 20.',
		id: '01HVZGS2JRJA84WC28NBJ4945H',
		index: 1109,
		keyWords: 'max mp up m,1109',
		moduleId: 'effect',
		name: 'Max MP Up M'
	},
	{
		description: "Increases the target's hit rate by a lot. The effect lasts 5 turns.",
		id: '01HVZGS2JR9F904Q4QXT80TXY4',
		index: 1130,
		keyWords: 'hit rate up l,1130',
		moduleId: 'effect',
		name: 'Hit Rate Up L'
	},
	{
		description: "Temporarily increases the target's maximum HP in battle. The effect is large.",
		id: '01HVZGS2JS2233FFECTD2MZ0BM',
		index: 548,
		keyWords: 'temp stamina up l,548',
		moduleId: 'effect',
		name: 'Temp Stamina Up L'
	},
	{
		description: "Reduces wait time after the target's next turn by a little.",
		id: '01HVZGS2JSBVMDKFTGBV354CR0',
		index: 558,
		keyWords: 'cut wait time s,558',
		moduleId: 'effect',
		name: 'Cut Wait Time S'
	},
	{
		description: 'Has a set chance of causing Poison, Blind, and Weak on the target.',
		id: '01HVZGS2JS1F9EPY7BEZFZBPPD',
		index: 617,
		keyWords: 'cause misfortune,617',
		moduleId: 'effect',
		name: 'Cause Misfortune'
	},
	{
		description: "Reduces the target's defense by a large amount, and temporarily increases your own by that amount.",
		id: '01HVZGS2JS467DZ72GW72QQCD5',
		index: 631,
		keyWords: 'steal defense l,631',
		moduleId: 'effect',
		name: 'Steal Defense L'
	},
	{
		description: "Reduces the target's attack power.",
		id: '01HVZGS2JSVD4Y2FD1V6GGXX7C',
		index: 689,
		keyWords: 'attack down m,689',
		moduleId: 'effect',
		name: 'Attack Down M'
	},
	{
		description:
			'Has a low chance of Poisoning the target. The effect is small. Poison deals damage every time the target takes a turn.',
		id: '01HVZGS2JS3JWA9GSAWC6RK1HS',
		index: 703,
		keyWords: 'inflict poison s,703',
		moduleId: 'effect',
		name: 'Inflict Poison S'
	},
	{
		description:
			'Has a high chance of Cursing the target. The effect is big. Curse causes the target to take damage when healing.',
		id: '01HVZGS2JS0Y52QEJTJF87C2CE',
		index: 711,
		keyWords: 'inflict curse l,711',
		moduleId: 'effect',
		name: 'Inflict Curse L'
	},
	{
		description: 'Has a high chance of No Healing the target. No Heal causes all recovery effects to heal for 0.',
		id: '01HVZGS2JTG28BZ596QP2C6V9N',
		index: 720,
		keyWords: 'inflict no heal l,720',
		moduleId: 'effect',
		name: 'Inflict No Heal L'
	},
	{
		description:
			"Reduces the target's fire resistance by 1 level. Has no effect if the target has no resistance, and this cannot cause weaknesses.",
		id: '01HVZGS2JTSHKNC6KZP325YZRK',
		index: 728,
		keyWords: 'weak to fire,728',
		moduleId: 'effect',
		name: 'Weak to Fire'
	},
	{
		description:
			'Increases the effectiveness of status ailments on the target. It does not increase the chances of ailments occurring.',
		id: '01HVZGS2JTYTVH2VJNFZB1MDKS',
		index: 738,
		keyWords: 'weak to changes,738',
		moduleId: 'effect',
		name: 'Weak to Changes'
	},
	{
		description: 'Consumes a large amount of MP. The effect is weakened when MP is insufficient.',
		id: '01HVZGS2JTR5BTP01C0YGZGXT1',
		index: 805,
		keyWords: 'consume mp l,805',
		moduleId: 'effect',
		name: 'Consume MP L'
	},
	{
		description: 'Increases item capacity by 40.',
		id: '01HVZGS2JTZHPJVWWTEZJBVXC4',
		index: 932,
		keyWords: 'fits a whole lot,932',
		moduleId: 'effect',
		name: 'Fits a Whole Lot'
	},
	{
		description: 'Increases critical hit rate a little.',
		id: '01HVZGS2JTY3JY1Y8AGZ71VSBE',
		index: 1000,
		keyWords: 'inject will to fight,1000',
		moduleId: 'effect',
		name: 'Inject Will to Fight'
	},
	{
		description: 'Become more likely to be targeted during battle.',
		id: '01HVZGS2JT185N7XGHEMBDTT6H',
		index: 1011,
		keyWords: 'gather attention,1011',
		moduleId: 'effect',
		name: 'Gather Attention'
	},
	{
		description: "Automatically revive on turn when KO'd in battle. HP after revival is low.",
		id: '01HVZGS2JTV6Q604BE8XCQBMWY',
		index: 1031,
		keyWords: 'feather awakening,1031',
		moduleId: 'effect',
		name: 'Feather Awakening'
	},
	{
		description: 'Pacifies the enemy, delaying the activation of powerful attacks by a little.',
		id: '01HVZGS2JTNXFYMYPJNE73EQC0',
		index: 747,
		keyWords: 'pacification s,747',
		moduleId: 'effect',
		name: 'Pacification S'
	},
	{
		description:
			'Allows you to select a few items that you gathered, and send them back to the atelier. You can send up to 10 at a time.',
		id: '01HVZGS2JVT610KZN1BDPEBB8Z',
		index: 864,
		keyWords: 'small cart,864',
		moduleId: 'effect',
		name: 'Small Cart'
	},
	{
		description: '',
		id: '01HVZGS2JVH0GDP213MZMP5ZW3',
		index: 874,
		keyWords: "charm's blessing,874",
		moduleId: 'effect',
		name: "Charm's Blessing"
	},
	{
		description: 'Move speed increases by 20%.',
		id: '01HVZGS2JV4ZT6NYJK0YP4A8T5',
		index: 929,
		keyWords: 'move speed up m,929',
		moduleId: 'effect',
		name: 'Move Speed Up M'
	},
	{
		description: 'Increases chain attack chance.',
		id: '01HVZGS2JVJXG9J8GG05G1E5GE',
		index: 1016,
		keyWords: 'chain attack skills,1016',
		moduleId: 'effect',
		name: 'Chain Attack Skills'
	},
	{
		description: 'Completely swaps maximum HP and MP values.',
		id: '01HVZGS2JV4N4937R6BFA6R0CX',
		index: 1020,
		keyWords: "sage's wisdom,1020",
		moduleId: 'effect',
		name: "Sage's Wisdom"
	},
	{
		description: 'Increases attack, defense, and speed by 25% of base maximum MP.',
		id: '01HVZGS2JVSCADFRXCGPREEBS7',
		index: 1029,
		keyWords: 'spirit to power,1029',
		moduleId: 'effect',
		name: 'Spirit to Power'
	},
	{
		description: 'During battle, 10% of damage taken and MP consumed is absorbed into the other pool.',
		id: '01HVZGS2JWANNVZV3WZBH3BGWB',
		index: 1047,
		keyWords: 'conversion spell,1047',
		moduleId: 'effect',
		name: 'Conversion Spell'
	},
	{
		description: 'Reduces speed by 15%, increasing attack by that amount.',
		id: '01HVZGS2JW5RFYRK4R0211CWGK',
		index: 1060,
		keyWords: 'speed to power,1060',
		moduleId: 'effect',
		name: 'Speed to Power'
	},
	{
		description: 'The target recovers a small amount of HP on each turn. The effect lasts for 5 turns.',
		id: '01HVZGS2JW4NY6SJ6YYV2CV1X0',
		index: 1094,
		keyWords: 'hp regen s,1094',
		moduleId: 'effect',
		name: 'HP Regen S'
	},
	{
		description: 'MP recovers a large amount on each turn.',
		id: '01HVZGS2JWKCWC9KKFVS5J5NKC',
		index: 1101,
		keyWords: 'mp regen xl,1101',
		moduleId: 'effect',
		name: 'MP Regen XL'
	},
	{
		description: "Increases the target's attack power. The effect lasts 5 turns.",
		id: '01HVZGS2JW2S5M6914JAKPX6Y6',
		index: 1114,
		keyWords: 'attack up m,1114',
		moduleId: 'effect',
		name: 'Attack Up M'
	},
	{
		description: "Increases the target's speed. The effect lasts 5 turns.",
		id: '01HVZGS2JW2EP9NVGPF1VKPKGZ',
		index: 1124,
		keyWords: 'speed up m,1124',
		moduleId: 'effect',
		name: 'Speed Up M'
	},
	{
		description: 'Increases critical damage bonus by 6%.',
		id: '01HVZGS2JWZ1KDN47N6FK2G4KD',
		index: 1143,
		keyWords: 'critical enhance s,1143',
		moduleId: 'effect',
		name: 'Critical Enhance S'
	},
	{
		description: 'Increases item power by 20%.',
		id: '01HVZGS2JW91BEBP2DMXE39XVX',
		index: 1153,
		keyWords: 'item enhance l,1153',
		moduleId: 'effect',
		name: 'Item Enhance L'
	},
	{
		description: 'Increases Burst Gauge fill rate by 1%.',
		id: '01HVZGS2JWNT9G2K3PAN3B6005',
		index: 1157,
		keyWords: 'burst up +1%,1157',
		moduleId: 'effect',
		name: 'Burst Up +1%'
	},
	{
		description: 'Immunity to Weak ailment.',
		id: '01HVZGS2JWDYBE70HMHWXMK0Q6',
		index: 1165,
		keyWords: 'nullify weak,1165',
		moduleId: 'effect',
		name: 'Nullify Weak'
	},
	{
		description: 'Immunity to revival After Effects ailment.',
		id: '01HVZGS2JXXKF85FZ349AX07HB',
		index: 1168,
		keyWords: 'nullify after effect,1168',
		moduleId: 'effect',
		name: 'Nullify After Effect'
	},
	{
		description:
			'You have a chance to survive with 1 HP when you receive damage that would reduce your HP to 0. Has a fairly low chance to work.',
		id: '01HVZGS2JXSVNSZSKMNXH3DSZS',
		index: 1178,
		keyWords: 'avoid ko m,1178',
		moduleId: 'effect',
		name: 'Avoid KO M'
	},
	{
		description: 'Increases Break value when attacking enemies by a small amount.',
		id: '01HVZGS2JX4BXTJHRETM9FE13K',
		index: 1193,
		keyWords: 'break enhance m,1193',
		moduleId: 'effect',
		name: 'Break Enhance M'
	},
	{
		description: 'The panel size is 5x5.',
		id: '01HVZGS2JX4PFPWEH7APMRGW9A',
		index: 1262,
		keyWords: 'panel 5x5,1262',
		moduleId: 'effect',
		name: 'Panel 5x5'
	},
	{
		description: 'Increases item quality by the ratio of the most common synthesis panel color.',
		id: '01HVZGS2JYRWYBF3FS4KXHE3SW',
		index: 1272,
		keyWords: 'quality boost,1272',
		moduleId: 'effect',
		name: 'Quality Boost'
	},
	{
		description: 'Adds 10 category value to (Poison Mat).',
		id: '01HVZGS2JYT447YC7KRRCSECT7',
		index: 1291,
		keyWords: 'add (poison mat),1291',
		moduleId: 'effect',
		name: 'Add (Poison Mat)'
	},
	{
		description: 'Gain ultimate stability. Nullifies turn delaying effects by 100%.',
		id: '01HVZGS2JY58XMANM8533VD0GF',
		index: 1399,
		keyWords: 'ultimate stability,1399',
		moduleId: 'effect',
		name: 'Ultimate Stability'
	},
	{
		description: 'Increases friend points gained when giving presents by a lot.',
		id: '01HVZGS2JQZQFDF8E29YM92FD4',
		index: 947,
		keyWords: 'connects hearts,947',
		moduleId: 'effect',
		name: 'Connects Hearts'
	},
	{
		description: 'Increases effect of all Assist actions.',
		id: '01HVZGS2JQ50VP7H38MQZSWQ93',
		index: 1004,
		keyWords: 'seal of friendship,1004',
		moduleId: 'effect',
		name: 'Seal of Friendship'
	},
	{
		description: 'Temporarily reduces physical damage taken by the target. The effect is small.',
		id: '01HVZGS2JR7XKQVVPA3B4CG416',
		index: 1006,
		keyWords: "angel's protection,1006",
		moduleId: 'effect',
		name: "Angel's Protection"
	},
	{
		description: 'Reduces wait time after all actions.',
		id: '01HVZGS2JRPRCVXE1W4WM1JH80',
		index: 1013,
		keyWords: 'speed up time,1013',
		moduleId: 'effect',
		name: 'Speed Up Time'
	},
	{
		description: 'Reduces damage taken by 10%, and converts it into MP damage.',
		id: '01HVZGS2JR8WC30W09AT1P7MQG',
		index: 1021,
		keyWords: 'magician blessing,1021',
		moduleId: 'effect',
		name: 'Magician Blessing'
	},
	{
		description: 'Increases critical hit rate, evasion rate, and other values when below 25% HP.',
		id: '01HVZGS2JRMP46C4Z49JGW38TK',
		index: 1030,
		keyWords: 'strong in a pinch,1030',
		moduleId: 'effect',
		name: 'Strong in a Pinch'
	},
	{
		description: 'Reduces attack by 15%, increasing defense by that amount.',
		id: '01HVZGS2JRYEYT1FCHSB0B5SR3',
		index: 1042,
		keyWords: 'power to protection,1042',
		moduleId: 'effect',
		name: 'Power to Protection'
	},
	{
		description: 'The hidden magic of the Power Rune increases attack power by 15.',
		id: '01HVZGS2JR9DGTV6TR06DZFH0N',
		index: 1051,
		keyWords: 'power rune,1051',
		moduleId: 'effect',
		name: 'Power Rune'
	},
	{
		description: "Increases attack, defense, and speed. Increase grows with the wearer's level.",
		id: '01HVZGS2JRVNHYR10YXSTEF8MZ',
		index: 1064,
		keyWords: 'power awakening,1064',
		moduleId: 'effect',
		name: 'Power Awakening'
	},
	{
		description: 'The target recovers HP on each turn. The effect lasts for 5 turns.',
		id: '01HVZGS2JRMEQAM9BWF9RPHR79',
		index: 1095,
		keyWords: 'hp regen m,1095',
		moduleId: 'effect',
		name: 'HP Regen M'
	},
	{
		description: 'Increases maximum HP by 30.',
		id: '01HVZGS2JRCPJAP8QX87WTWHSP',
		index: 1106,
		keyWords: 'max hp up xl,1106',
		moduleId: 'effect',
		name: 'Max HP Up XL'
	},
	{
		description: 'Increases defense by 5.',
		id: '01HVZGS2JRT6R8YYTD284MK3BB',
		index: 1117,
		keyWords: 'defense up xs,1117',
		moduleId: 'effect',
		name: 'Defense Up XS'
	},
	{
		description: "Increases the target's evasion rate. The effect lasts 5 turns.",
		id: '01HVZGS2JR7TACR6MB6DBJKX0R',
		index: 1134,
		keyWords: 'evasion up m,1134',
		moduleId: 'effect',
		name: 'Evasion Up M'
	},
	{
		description: "Automatically revive on the next turn after being KO'd. HP after revival is fairly high.",
		id: '01HVZGS2JS0RF3CQXMQWF8M5Q6',
		index: 554,
		keyWords: 'auto revive l,554',
		moduleId: 'effect',
		name: 'Auto Revive L'
	},
	{
		description: "Increases the target's chance to activate a chain attack by 50%. Effect lasts 5 turns.",
		id: '01HVZGS2JS9D5HBJGX2RRNCNZR',
		index: 562,
		keyWords: 'chain attack up m,562',
		moduleId: 'effect',
		name: 'Chain Attack Up M'
	},
	{
		description: "Reduces the target's attack by a large amount, and temporarily increases your own by that amount.",
		id: '01HVZGS2JS141KWGTYG4E4V1ZT',
		index: 628,
		keyWords: 'steal attack l,628',
		moduleId: 'effect',
		name: 'Steal Attack L'
	},
	{
		description: 'Nullifies 1 enhancement effect on the target.',
		id: '01HVZGS2JS1D0198GS74TQH63P',
		index: 635,
		keyWords: 'remove enhancements,635',
		moduleId: 'effect',
		name: 'Remove Enhancements'
	},
	{
		description: "Slightly reduces the target's speed.",
		id: '01HVZGS2JSZB23RWARMPBE2XB2',
		index: 694,
		keyWords: 'speed down s,694',
		moduleId: 'effect',
		name: 'Speed Down S'
	},
	{
		description:
			'Has a moderate chance of Poisoning the target. The effect is moderate. Poison deals damage every time the target takes a turn.',
		id: '01HVZGS2JSEDFSCEKPM7W2SSYF',
		index: 704,
		keyWords: 'inflict poison m,704',
		moduleId: 'effect',
		name: 'Inflict Poison M'
	},
	{
		description:
			'Has a moderate chance of Blinding the target. The effect is moderate. Blind reduces attack hit rate and evasion rate.',
		id: '01HVZGS2JTZNQY2WDPYZ0NXHGN',
		index: 713,
		keyWords: 'inflict blind m,713',
		moduleId: 'effect',
		name: 'Inflict Blind M'
	},
	{
		description:
			'Has a moderate chance of Sealing the target. Seal renders the target unable to use powerful attacks.',
		id: '01HVZGS2JT4K20KTEKX78F9EW8',
		index: 722,
		keyWords: 'inflict seal m,722',
		moduleId: 'effect',
		name: 'Inflict Seal M'
	},
	{
		description: "Reduces the target's level. Reduced level decreases all stats and damage dealt.",
		id: '01HVZGS2JTJ2V856R92WCP03W3',
		index: 732,
		keyWords: 'level down m,732',
		moduleId: 'effect',
		name: 'Level Down M'
	},
	{
		description: 'Pacifies the enemy, delaying the activation of powerful attacks.',
		id: '01HVZGS2JT3KW0R86BD83EW1CR',
		index: 749,
		keyWords: 'pacification l,749',
		moduleId: 'effect',
		name: 'Pacification L'
	},
	{
		description: 'Increases item capacity by 20.',
		id: '01HVZGS2JTCJZ3YECQGCQVBHK4',
		index: 931,
		keyWords: 'fits a lot,931',
		moduleId: 'effect',
		name: 'Fits a Lot'
	},
	{
		description: 'Increases number of items gathered each time a little.',
		id: '01HVZGS2JTGE2FM8EJ1B3RW4XM',
		index: 936,
		keyWords: 'gather a little more,936',
		moduleId: 'effect',
		name: 'Gather a Little More'
	},
	{
		description: 'Increases critical hit rate and critical hit damage bonus a little.',
		id: '01HVZGS2JTC79QQDANRMZKXPT5',
		index: 1001,
		keyWords: 'inject fighting spirit,1001',
		moduleId: 'effect',
		name: 'Inject Fighting Spirit'
	},
	{
		description: 'Increases the chance of higher expected values when attacking.',
		id: '01HVZGS2JT5MPFTXMDPQZW2CSM',
		index: 1025,
		keyWords: 'affect the future,1025',
		moduleId: 'effect',
		name: 'Affect the Future'
	},
	{
		description: 'Reduces the rate at which enemies use powerful attacks a lot.',
		id: '01HVZGS2JT3K491V3NXGR2P3H9',
		index: 746,
		keyWords: 'restrain attack l,746',
		moduleId: 'effect',
		name: 'Restrain Attack L'
	},
	{
		description: 'Consumes a slight amount of MP. The effect is weakened when MP is insufficient.',
		id: '01HVZGS2JTD0RDF1M41ZARDQG5',
		index: 802,
		keyWords: 'consume mp xs,802',
		moduleId: 'effect',
		name: 'Consume MP XS'
	},
	{
		description:
			"Erase your presence, making it impossible for monsters to see you for a short time. Just don't get too close.",
		id: '01HVZGS2JVX31K77M8J8Q3MJDH',
		index: 868,
		keyWords: 'erase presence,868',
		moduleId: 'effect',
		name: 'Erase Presence'
	},
	{
		description: 'Reduces LP consumed while moving on the World Map by 25%.',
		id: '01HVZGS2JVAZ4KWSEEBA1CJ73J',
		index: 925,
		keyWords: 'lightens body a little,925',
		moduleId: 'effect',
		name: 'Lightens Body a Little'
	},
	{
		description: 'Increases number of items gathered each time.',
		id: '01HVZGS2JVBRZDD6P7PP9CF4CT',
		index: 937,
		keyWords: 'gather more,937',
		moduleId: 'effect',
		name: 'Gather More'
	},
	{
		description: 'Increases chain attack chance by a huge amount.',
		id: '01HVZGS2JVB96MNH2TCW2825GQ',
		index: 1018,
		keyWords: 'chain attack mastery,1018',
		moduleId: 'effect',
		name: 'Chain Attack Mastery'
	},
	{
		description: 'Increases the chance of higher expected values a lot when attacking.',
		id: '01HVZGS2JVHGB05MQS71YPDTYC',
		index: 1026,
		keyWords: 'control the future,1026',
		moduleId: 'effect',
		name: 'Control the Future'
	},
	{
		description: 'Reduces turn delaying effects.',
		id: '01HVZGS2JV94V2F9F1F03VQWK8',
		index: 1034,
		keyWords: 'resist gravity,1034',
		moduleId: 'effect',
		name: 'Resist Gravity'
	},
	{
		description: 'The hidden magic of the Guardian Rune increases defense by 25.',
		id: '01HVZGS2JWESEV3RD0SE4H4FBP',
		index: 1055,
		keyWords: 'guardian rune,1055',
		moduleId: 'effect',
		name: 'Guardian Rune'
	},
	{
		description: 'The power of the spirit god massively increases base damage.',
		id: '01HVZGS2JWZAEJY8Y6X7HV1R7F',
		index: 1063,
		keyWords: "spirit god's power,1063",
		moduleId: 'effect',
		name: "Spirit God's Power"
	},
	{
		description: 'MP recovers a small amount on each turn.',
		id: '01HVZGS2JWMWHCPYGRN2ES6429',
		index: 1098,
		keyWords: 'mp regen s,1098',
		moduleId: 'effect',
		name: 'MP Regen S'
	},
	{
		description: 'Increases maximum MP by 15.',
		id: '01HVZGS2JWDN00496700FPG0B8',
		index: 1108,
		keyWords: 'max mp up s,1108',
		moduleId: 'effect',
		name: 'Max MP Up S'
	},
	{
		description: "Increases the target's defense a little. The effect lasts 5 turns.",
		id: '01HVZGS2JW5CYHBCE4MRGCS1JJ',
		index: 1118,
		keyWords: 'defense up s,1118',
		moduleId: 'effect',
		name: 'Defense Up S'
	},
	{
		description: 'Increases speed by 25.',
		id: '01HVZGS2JWCGWT2RE4VY1WAJ8Q',
		index: 1126,
		keyWords: 'speed up xl,1126',
		moduleId: 'effect',
		name: 'Speed Up XL'
	},
	{
		description: 'Increases critical damage bonus by 15%.',
		id: '01HVZGS2JW3SP4G7PESMEMG332',
		index: 1146,
		keyWords: 'critical enhance xl,1146',
		moduleId: 'effect',
		name: 'Critical Enhance XL'
	},
	{
		description: 'Reduces wait time after using item by 20%.',
		id: '01HVZGS2JWG8YQ41E2G29AQH3B',
		index: 1156,
		keyWords: 'item shorten l,1156',
		moduleId: 'effect',
		name: 'Item Shorten L'
	},
	{
		description: 'Immunity to Slow ailment.',
		id: '01HVZGS2JWWZ28NFVKRDRFE0BT',
		index: 1162,
		keyWords: 'nullify slow,1162',
		moduleId: 'effect',
		name: 'Nullify Slow'
	},
	{
		description: 'Immunity to Seal ailment.',
		id: '01HVZGS2JW4PM0FXZKY5MZK5J0',
		index: 1167,
		keyWords: 'nullify seal,1167',
		moduleId: 'effect',
		name: 'Nullify Seal'
	},
	{
		description: 'Reduces chance of being affected by ailments.',
		id: '01HVZGS2JXXJJ66HWEHY7M453D',
		index: 1175,
		keyWords: 'ailment resist xl,1175',
		moduleId: 'effect',
		name: 'Ailment Resist XL'
	},
	{
		description: 'Gain ice resistance.',
		id: '01HVZGS2JXSSW1RCXQ6E6MXZPK',
		index: 1182,
		keyWords: 'ice resistance,1182',
		moduleId: 'effect',
		name: 'Ice Resistance'
	},
	{
		description: '',
		id: '01HVZGS2JXKSGT159X8TNQNJ7F',
		index: 1256,
		keyWords: 'input time limit 20,1256',
		moduleId: 'effect',
		name: 'Input Time Limit 20'
	},
	{
		description:
			'Obtaining bonuses that are the same color as materials already placed causes those materials to gain the same bonus.',
		id: '01HVZGS2JYHKBFVXGMWKF96SKK',
		index: 1268,
		keyWords: 'tuning,1268',
		moduleId: 'effect',
		name: 'Tuning'
	},
	{
		description: 'Changes the item color to Green.',
		id: '01HVZGS2JYVRXWRN3BR5JGN02Q',
		index: 1285,
		keyWords: 'change color green,1285',
		moduleId: 'effect',
		name: 'Change Color Green'
	},
	{
		description: 'Gain ultimate destruction. Increases critical hit damage bonus by 30%.',
		id: '01HVZGS2JY7FWXTNVJ795R5TST',
		index: 1398,
		keyWords: 'ultimate destruction,1398',
		moduleId: 'effect',
		name: 'Ultimate Destruction'
	},
	{
		description: 'Gain ultimate conversion. 20% of damage taken is absorbed into MP.',
		id: '01HVZGS2JYDMACVB6R28WBNPFP',
		index: 1404,
		keyWords: 'ultimate conversion,1404',
		moduleId: 'effect',
		name: 'Ultimate Conversion'
	},
	{
		description: 'Gain ultimate ice resistance. Gain super ice resistance.',
		id: '01HVZGS2JYC9GH7QGN37EY3JHJ',
		index: 1415,
		keyWords: 'ultimate ice resist,1415',
		moduleId: 'effect',
		name: 'Ultimate Ice Resist'
	},
	{
		description: 'Gain ultimate energy. Increases speed by 50.',
		id: '01HVZGS2JY4EGJ9W6KY2CSQRRD',
		index: 1411,
		keyWords: 'ultimate energy,1411',
		moduleId: 'effect',
		name: 'Ultimate Energy'
	},
	{
		description: 'Gain ultimate stunning force. Greatly increases Break value when attacking.',
		id: '01HVZGS2JYBJEPWSYE4F756K37',
		index: 1428,
		keyWords: 'ultimate stunning force,1428',
		moduleId: 'effect',
		name: 'Ultimate Stunning Force'
	},
	{
		description: 'Increases critical hit rate and critical hit damage bonus.',
		id: '01HVZGS2JZ83Y88AGVK0JKT177',
		index: 1002,
		keyWords: 'inject warlike spirit,1002',
		moduleId: 'effect',
		name: 'Inject Warlike Spirit'
	},
	{
		description: 'Increases chain attack chance by a large amount.',
		id: '01HVZGS2JZCJPFYS469K9Z4SC0',
		index: 1017,
		keyWords: 'chain attack secrets,1017',
		moduleId: 'effect',
		name: 'Chain Attack Secrets'
	},
	{
		description: 'Reduces damage taken by 10%, but increases Break value.',
		id: '01HVZGS2JZ6XHKNS8ZXRV4D0ES',
		index: 1023,
		keyWords: 'ancient god blessing,1023',
		moduleId: 'effect',
		name: 'Ancient God Blessing'
	},
	{
		description: 'During battle, 15% of damage taken and MP consumed is absorbed into the other pool.',
		id: '01HVZGS2JZ6C2RY2YES3XJH1S4',
		index: 1048,
		keyWords: 'mass conversion spell,1048',
		moduleId: 'effect',
		name: 'Mass Conversion Spell'
	},
	{
		description: 'The hidden magic of the Weapon Rune increases base damage.',
		id: '01HVZGS2JZPEZ9H38AGEEEGXD3',
		index: 1057,
		keyWords: 'weapon rune,1057',
		moduleId: 'effect',
		name: 'Weapon Rune'
	},
	{
		description: 'The target recovers a huge amount of HP on each turn. The effect lasts for 5 turns.',
		id: '01HVZGS2JZBPJJ6NDYDE5FBVQ7',
		index: 1097,
		keyWords: 'hp regen xl,1097',
		moduleId: 'effect',
		name: 'HP Regen XL'
	},
	{
		description: 'Increases maximum MP by 25.',
		id: '01HVZGS2JZS50W92ZRTSGZ4MMX',
		index: 1110,
		keyWords: 'max mp up l,1110',
		moduleId: 'effect',
		name: 'Max MP Up L'
	},
	{
		description: "Increases the target's attack power by a lot. The effect lasts 5 turns.",
		id: '01HVZGS2JZBKMEQNSHSRTCEMH8',
		index: 1115,
		keyWords: 'attack up l,1115',
		moduleId: 'effect',
		name: 'Attack Up L'
	},
	{
		description: "Increases the target's hit rate a little. The effect lasts 5 turns.",
		id: '01HVZGS2JZC5FKZ0MJCM7VQA2K',
		index: 1128,
		keyWords: 'hit rate up s,1128',
		moduleId: 'effect',
		name: 'Hit Rate Up S'
	},
	{
		description: 'Increases critical damage bonus by 12%.',
		id: '01HVZGS2JZ8FVZQ7NKW18NKH8X',
		index: 1145,
		keyWords: 'critical enhance l,1145',
		moduleId: 'effect',
		name: 'Critical Enhance L'
	},
	{
		description: 'Increases Break value when attacking enemies.',
		id: '01HVZGS2K09Y87C4H09XNVKS6Q',
		index: 1194,
		keyWords: 'break enhance l,1194',
		moduleId: 'effect',
		name: 'Break Enhance L'
	},
	{
		description: '',
		id: '01HVZGS2K0SGBW7K3AC3PZBD64',
		index: 1260,
		keyWords: 'panel display level 3,1260',
		moduleId: 'effect',
		name: 'Panel Display Level 3'
	},
	{
		description: 'The ultimate alchemy cauldron, featuring all effects other than “Time Limit”.',
		id: '01HVZGS2K0RKFEYEP6HZ03KZYK',
		index: 1273,
		keyWords: 'true combined effect,1273',
		moduleId: 'effect',
		name: 'True Combined Effect'
	},
	{
		description: 'Changes the item color to White.',
		id: '01HVZGS2K0SSWPPQ5B9HNY24G7',
		index: 1287,
		keyWords: 'change color white,1287',
		moduleId: 'effect',
		name: 'Change Color White'
	},
	{
		description: 'Increases (Neutralizer) category value by 5.',
		id: '01HVZGS2K0SE7S7F7G9DG05YX4',
		index: 1301,
		keyWords: '(neutralizer) +5,1301',
		moduleId: 'effect',
		name: '(Neutralizer) +5'
	},
	{
		description: 'Gain ultimate mentality. Increases maximum MP by 100.',
		id: '01HVZGS2K0GMBR9J9T283S8MCQ',
		index: 1407,
		keyWords: 'ultimate mentality,1407',
		moduleId: 'effect',
		name: 'Ultimate Mentality'
	},
	{
		description: 'Gain ultimate compensation. Increases skill power by 30%.',
		id: '01HVZGS2K06J6TSCR20PXK7R1E',
		index: 1419,
		keyWords: 'ultimate compensation,1419',
		moduleId: 'effect',
		name: 'Ultimate Compensation'
	},
	{
		description:
			'Gain ultimate invulnerability. You have a 35% chance to survive with 1 HP when taking damage that would KO you.',
		id: '01HVZGS2K0AQG805ZF7ZJ4DJNR',
		index: 1424,
		keyWords: 'ultimate invulnerability,1424',
		moduleId: 'effect',
		name: 'Ultimate Invulnerability'
	},
	{
		description: 'Increases critical hit rate by 12%.',
		id: '01HVZGS2K1R8SD7EH04W839A8D',
		index: 1140,
		keyWords: 'critical up l,1140',
		moduleId: 'effect',
		name: 'Critical Up L'
	},
	{
		description: 'Increases skill power by 5%.',
		id: '01HVZGS2K14JDYWBYJM4SZ5GXS',
		index: 1147,
		keyWords: 'skill enhance s,1147',
		moduleId: 'effect',
		name: 'Skill Enhance S'
	},
	{
		description: 'Increases critical hit rate by 9%.',
		id: '01HVZGS2K1GA3YC4MG8W9W51AS',
		index: 1139,
		keyWords: 'critical up m,1139',
		moduleId: 'effect',
		name: 'Critical Up M'
	},
	{
		description: 'Immunity to Poison ailment.',
		id: '01HVZGS2K1RGJARXMFMM50YEE4',
		index: 1161,
		keyWords: 'nullify poison,1161',
		moduleId: 'effect',
		name: 'Nullify Poison'
	},
	{
		description: 'Immunity to Blind ailment.',
		id: '01HVZGS2K1D86BZRAYWAB5AWYY',
		index: 1164,
		keyWords: 'nullify blind,1164',
		moduleId: 'effect',
		name: 'Nullify Blind'
	},
	{
		description: 'Reduces chance of being affected by ailments by a decent amount.',
		id: '01HVZGS2K1R4AC5TGEGWJG0A5R',
		index: 1174,
		keyWords: 'ailment resist l,1174',
		moduleId: 'effect',
		name: 'Ailment Resist L'
	},
	{
		description: 'Absorbs a portion of damage dealt to the target as HP. The effect is fairly small.',
		id: '01HVZGS2K2V3J7PMMG6F9ZBCP3',
		index: 1185,
		keyWords: 'damage absorb m,1185',
		moduleId: 'effect',
		name: 'Damage Absorb M'
	},
	{
		description: 'Increases Break resistance by a decent amount.',
		id: '01HVZGS2K2EN05EGHZTHJWSMPH',
		index: 1197,
		keyWords: 'break resist m,1197',
		moduleId: 'effect',
		name: 'Break Resist M'
	},
	{
		description: 'Increases damage dealt to Broken enemies.',
		id: '01HVZGS2K29ZWPCJ06GMVH8NBS',
		index: 1201,
		keyWords: 'use opportunity l,1201',
		moduleId: 'effect',
		name: 'Use Opportunity L'
	},
	{
		description:
			'The cauldron Sophie inherited from her grandmother. It was used for a long time, so it only has minimal power left.',
		id: '01HVZGS2K2KFBSVHMRSWRCBYAC',
		index: 1264,
		keyWords: 'worn out cauldron,1264',
		moduleId: 'effect',
		name: 'Worn Out Cauldron'
	},
	{
		description:
			'Increases alchemy experience points by the ratio of the most common synthesis panel color upon item completion.',
		id: '01HVZGS2K2FKP39MPGEHT7418M',
		index: 1271,
		keyWords: 'quick to improve,1271',
		moduleId: 'effect',
		name: 'Quick to Improve'
	},
	{
		description: 'Gain ultimate reversal. 15% of damage taken is converted into MP damage and reduced.',
		id: '01HVZGS2K2ANTWZ7W2CMC3N7ZF',
		index: 1400,
		keyWords: 'ultimate reversal,1400',
		moduleId: 'effect',
		name: 'Ultimate Reversal'
	},
	{
		description: 'Gain ultimate attack power. Increases attack power by 50.',
		id: '01HVZGS2K26BK8BRBJE81JJM9Y',
		index: 1409,
		keyWords: 'ultimate attack,1409',
		moduleId: 'effect',
		name: 'Ultimate Attack'
	},
	{
		description: 'Gain ultimate resistance. Gain resistance to all status ailments.',
		id: '01HVZGS2K2AXSQF8DGPX03JFPK',
		index: 1417,
		keyWords: 'ultimate resistance,1417',
		moduleId: 'effect',
		name: 'Ultimate Resistance'
	},
	{
		description: 'Gain ultimate turn-around. Greatly increases stats when fighting powerful enemies.',
		id: '01HVZGS2K2AXGJAC348NWBEDPT',
		index: 1422,
		keyWords: 'ultimate turn-around,1422',
		moduleId: 'effect',
		name: 'Ultimate Turn-Around'
	},
	{
		description: 'Reduces chance of being affected by ailments by a small amount.',
		id: '01HVZGS2K2PCA9PDVKARA2CY39',
		index: 1172,
		keyWords: 'ailment resist s,1172',
		moduleId: 'effect',
		name: 'Ailment Resist S'
	},
	{
		description:
			'You have a chance to survive with 1 HP when you receive damage that would reduce your HP to 0. Has a moderate chance to work.',
		id: '01HVZGS2K2VKY1CPYVEGT9G4QD',
		index: 1179,
		keyWords: 'avoid ko l,1179',
		moduleId: 'effect',
		name: 'Avoid KO L'
	},
	{
		description: 'Reduces damage taken by 8%.',
		id: '01HVZGS2K3ACG4MYTGKX65NQ4H',
		index: 1190,
		keyWords: 'damage cut l,1190',
		moduleId: 'effect',
		name: 'Damage Cut L'
	},
	{
		description: 'Increases Break resistance.',
		id: '01HVZGS2K3ZS6BG1PPG8CT6FXJ',
		index: 1198,
		keyWords: 'break resist l,1198',
		moduleId: 'effect',
		name: 'Break Resist L'
	},
	{
		description:
			'The color of panels in the cauldron changes each day. Cycles red → blue → green → yellow → white → red.',
		id: '01HVZGS2K32R31F83FF14009T3',
		index: 1253,
		keyWords: 'panels change each day,1253',
		moduleId: 'effect',
		name: 'Panels Change Each Day'
	},
	{
		description: 'The panel size is 4x4.',
		id: '01HVZGS2K3X70GNN65JE8KF3CT',
		index: 1261,
		keyWords: 'panel 4x4,1261',
		moduleId: 'effect',
		name: 'Panel 4x4'
	},
	{
		description:
			'60 second time limit. Exceeding this time will result in failure. Countdown begins after selecting materials and you cannot reselect the cauldron',
		id: '01HVZGS2K3Z93XCWPQ09Q2G3KT',
		index: 1269,
		keyWords: 'time limit,1269',
		moduleId: 'effect',
		name: 'Time Limit'
	},
	{
		description: 'Gain ultimate regeneration. Recover 50 HP on every turn.',
		id: '01HVZGS2K3VK7E50EX37JER8CX',
		index: 1402,
		keyWords: 'ultimate regeneration,1402',
		moduleId: 'effect',
		name: 'Ultimate Regeneration'
	},
	{
		description: 'Gain ultimate defense. Increases defense by 50.',
		id: '01HVZGS2K38N83Q6WGBJ19XB0N',
		index: 1410,
		keyWords: 'ultimate defense,1410',
		moduleId: 'effect',
		name: 'Ultimate Defense'
	},
	{
		description: 'Gain ultimate mitigation. Reduces all damage taken by 10%.',
		id: '01HVZGS2K3F71HH3SW7X8594NH',
		index: 1426,
		keyWords: 'ultimate mitigation,1426',
		moduleId: 'effect',
		name: 'Ultimate Mitigation'
	},
	{
		description:
			'Gain ultimate opposition. Increases damage dealt and reduces damage taken when fighting powerful enemies.',
		id: '01HVZGS2K3ENASNJEJCHA6YT3H',
		index: 1429,
		keyWords: 'ultimate opposition,1429',
		moduleId: 'effect',
		name: 'Ultimate Opposition'
	},
	{
		description: 'During battle, stats increase with each turn. There is a limit to this increase.',
		id: '01HVZGS2JZDWJ0EXC0FYFPYEDT',
		index: 998,
		keyWords: 'fighting spirit active,998',
		moduleId: 'effect',
		name: 'Fighting Spirit Active'
	},
	{
		description: 'Become a little more likely to be targeted during battle.',
		id: '01HVZGS2JZ0VBCDWX2BBKE9N0B',
		index: 1010,
		keyWords: 'draw attention,1010',
		moduleId: 'effect',
		name: 'Draw Attention'
	},
	{
		description: 'Swaps 50% of maximum HP and MP values with each other.',
		id: '01HVZGS2JZSGHVBHWMXCBXFETS',
		index: 1019,
		keyWords: "scholar's wisdom,1019",
		moduleId: 'effect',
		name: "Scholar's Wisdom"
	},
	{
		description: "Automatically revive on turn when KO'd in battle. HP after revival is about half.",
		id: '01HVZGS2JZVCS4X4TQ33SQDE9D',
		index: 1033,
		keyWords: 'samsara awakening,1033',
		moduleId: 'effect',
		name: 'Samsara Awakening'
	},
	{
		description: 'The hidden magic of the Defense Rune increases defense by 15.',
		id: '01HVZGS2JZBPJG3E0QXB41JT79',
		index: 1052,
		keyWords: 'defense rune,1052',
		moduleId: 'effect',
		name: 'Defense Rune'
	},
	{
		description: 'Gain the heroic soul, revealing true power when fighting powerful foes.',
		id: '01HVZGS2JZW75TW2GHWY4YS69K',
		index: 1068,
		keyWords: "hero's ambition,1068",
		moduleId: 'effect',
		name: "Hero's Ambition"
	},
	{
		description: 'Increases maximum HP by 10.',
		id: '01HVZGS2JZ1TQQ9SJ0WMYCNW1A',
		index: 1102,
		keyWords: 'max hp up xs,1102',
		moduleId: 'effect',
		name: 'Max HP Up XS'
	},
	{
		description: "Increases the target's attack power a little. The effect lasts 5 turns.",
		id: '01HVZGS2JZBV5H8ES5Y4RJ6FMW',
		index: 1113,
		keyWords: 'attack up s,1113',
		moduleId: 'effect',
		name: 'Attack Up S'
	},
	{
		description: "Increases the target's defense by a lot. The effect lasts 5 turns.",
		id: '01HVZGS2JZJ5A4JFCRTWDMJVQ8',
		index: 1120,
		keyWords: 'defense up l,1120',
		moduleId: 'effect',
		name: 'Defense Up L'
	},
	{
		description: 'Increases critical damage bonus by 3%.',
		id: '01HVZGS2JZPQK935PPF6F9J7S8',
		index: 1142,
		keyWords: 'critical enhance xs,1142',
		moduleId: 'effect',
		name: 'Critical Enhance XS'
	},
	{
		description: 'Increases skill power by 10%.',
		id: '01HVZGS2JZG6GS7EZXVMSTEJNQ',
		index: 1149,
		keyWords: 'skill enhance l,1149',
		moduleId: 'effect',
		name: 'Skill Enhance L'
	},
	{
		description: '',
		id: '01HVZGS2K0NK5J563251WHCZ0S',
		index: 1254,
		keyWords: "plachta's cauldron,1254",
		moduleId: 'effect',
		name: "Plachta's Cauldron"
	},
	{
		description: "Performing Synthesis at quality value 0 won't result in failure, and produce the desired item.",
		id: '01HVZGS2K0A5SGC8EEEJP4MZQJ',
		index: 1265,
		keyWords: 'no failures,1265',
		moduleId: 'effect',
		name: 'No Failures'
	},
	{
		description: 'Changes the item color to Red.',
		id: '01HVZGS2K0C5WWRX4PYKKDFGF2',
		index: 1283,
		keyWords: 'change color red,1283',
		moduleId: 'effect',
		name: 'Change Color Red'
	},
	{
		description: 'Increases (Wood) category value by 5.',
		id: '01HVZGS2K0G78YMQVMPR9PSNSR',
		index: 1300,
		keyWords: '(wood) +5,1300',
		moduleId: 'effect',
		name: '(Wood) +5'
	},
	{
		description: 'Gain ultimate criticality. Increases critical hit rate by 50%.',
		id: '01HVZGS2K0D1Y3R1NFMM95HK28',
		index: 1403,
		keyWords: 'ultimate criticality,1403',
		moduleId: 'effect',
		name: 'Ultimate Criticality'
	},
	{
		description: 'Gain ultimate accuracy. Increases hit rate by 50%.',
		id: '01HVZGS2K0EXP5MVJKCF0P9HGE',
		index: 1412,
		keyWords: 'ultimate accuracy,1412',
		moduleId: 'effect',
		name: 'Ultimate Accuracy'
	},
	{
		description: 'Gain ultimate explosive force. Increases damage bonus by 15% during Burst.',
		id: '01HVZGS2K0B36DANMVHVYX8RSK',
		index: 1423,
		keyWords: 'ultimate explosive force,1423',
		moduleId: 'effect',
		name: 'Ultimate Explosive Force'
	},
	{
		description: "Increases the target's hit rate. The effect lasts 5 turns.",
		id: '01HVZGS2K06CE8BVYJRR65XQ5B',
		index: 1129,
		keyWords: 'hit rate up m,1129',
		moduleId: 'effect',
		name: 'Hit Rate Up M'
	},
	{
		description: 'Increases critical hit rate by 15%.',
		id: '01HVZGS2K1V72C9RR0QZNBHZDT',
		index: 1141,
		keyWords: 'critical up xl,1141',
		moduleId: 'effect',
		name: 'Critical Up XL'
	},
	{
		description: 'Increases skill power by 7%.',
		id: '01HVZGS2K125P7K7BDN5YK2XAB',
		index: 1148,
		keyWords: 'skill enhance m,1148',
		moduleId: 'effect',
		name: 'Skill Enhance M'
	},
	{
		description: 'Increases skill power by 15%.',
		id: '01HVZGS2K1C11P4NCKBCMX8FRP',
		index: 1150,
		keyWords: 'skill enhance xl,1150',
		moduleId: 'effect',
		name: 'Skill Enhance XL'
	},
	{
		description: 'Immunity to Curse ailment.',
		id: '01HVZGS2K117DWHRJ58B7493R2',
		index: 1163,
		keyWords: 'nullify curse,1163',
		moduleId: 'effect',
		name: 'Nullify Curse'
	},
	{
		description: 'Immunity to One Hit KO.',
		id: '01HVZGS2K1H53PBF9VMQHQWN93',
		index: 1169,
		keyWords: 'nullify one hit ko,1169',
		moduleId: 'effect',
		name: 'Nullify One Hit KO'
	},
	{
		description: 'Gain fire resistance.',
		id: '01HVZGS2K1DTRV72F1R0QFT778',
		index: 1181,
		keyWords: 'fire resistance,1181',
		moduleId: 'effect',
		name: 'Fire Resistance'
	},
	{
		description: 'Reduces damage taken by 6%.',
		id: '01HVZGS2K27K9MFK7NM1ZZQG56',
		index: 1189,
		keyWords: 'damage cut m,1189',
		moduleId: 'effect',
		name: 'Damage Cut M'
	},
	{
		description: 'Increases damage dealt to Broken enemies by a slight amount.',
		id: '01HVZGS2K2RA1M8KGDVTX6X2RW',
		index: 1199,
		keyWords: 'use opportunity s,1199',
		moduleId: 'effect',
		name: 'Use Opportunity S'
	},
	{
		description:
			'The Synthesis panel display is level 1. Higher display level increases bonus placement at the start of Synthesis.',
		id: '01HVZGS2K2KY3K1PGKQX6RRWJP',
		index: 1257,
		keyWords: 'bonus display level 1,1257',
		moduleId: 'effect',
		name: 'Bonus Display Level 1'
	},
	{
		description: 'Obtaining bonuses that are the same color as the liquid in the cauldron increases effect by 50%.',
		id: '01HVZGS2K2N0YVJ1BV10XVAJRT',
		index: 1267,
		keyWords: 'synergy,1267',
		moduleId: 'effect',
		name: 'Synergy'
	},
	{
		description: 'Changes the item color to Yellow.',
		id: '01HVZGS2K2J7MYBQQCJMM1RR8J',
		index: 1286,
		keyWords: 'change color yellow,1286',
		moduleId: 'effect',
		name: 'Change Color Yellow'
	},
	{
		description: 'Gain ultimate evolution. Greatly enhances stats of the wearer depending on level.',
		id: '01HVZGS2K28VBR98A7XCGHMPG6',
		index: 1405,
		keyWords: 'ultimate evolution,1405',
		moduleId: 'effect',
		name: 'Ultimate Evolution'
	},
	{
		description: 'Gain ultimate evasion. Increases evasion rate by 15%.',
		id: '01HVZGS2K2ST587KNHP5H73AEY',
		index: 1413,
		keyWords: 'ultimate evasion,1413',
		moduleId: 'effect',
		name: 'Ultimate Evasion'
	},
	{
		description: 'Gain ultimate support. Enhances Assist action effects by 15%.',
		id: '01HVZGS2K244DBAQB47B5X3FE1',
		index: 1418,
		keyWords: 'ultimate support,1418',
		moduleId: 'effect',
		name: 'Ultimate Support'
	},
	{
		description: 'Gain ultimate zeal. Increases Burst Gauge refill rate by 10% when attacking.',
		id: '01HVZGS2K2X06YAP2RPKH8HRGZ',
		index: 1427,
		keyWords: 'ultimate zeal,1427',
		moduleId: 'effect',
		name: 'Ultimate Zeal'
	},
	{
		description:
			'You have a chance to survive with 1 HP when you receive damage that would reduce your HP to 0. Has a low chance to work.',
		id: '01HVZGS2K22JYTWSGX40E40F44',
		index: 1177,
		keyWords: 'avoid ko s,1177',
		moduleId: 'effect',
		name: 'Avoid KO S'
	},
	{
		description: 'Absorbs a portion of damage dealt to the target as HP. The effect is decent.',
		id: '01HVZGS2K323TZVERYHXZXY5HV',
		index: 1186,
		keyWords: 'damage absorb l,1186',
		moduleId: 'effect',
		name: 'Damage Absorb L'
	},
	{
		description: 'Increases Break value when attacking enemies by a large amount.',
		id: '01HVZGS2K3CJ14V3Q6DCSSCSJC',
		index: 1195,
		keyWords: 'break enhance xl,1195',
		moduleId: 'effect',
		name: 'Break Enhance XL'
	},
	{
		description: 'Increases damage dealt to Broken enemies by a large amount.',
		id: '01HVZGS2K3KGC5QT8Y419RJWG0',
		index: 1202,
		keyWords: 'use opportunity xl,1202',
		moduleId: 'effect',
		name: 'Use Opportunity XL'
	},
	{
		description:
			'The Synthesis panel display is level 2. Higher display level increases bonus placement at the start of Synthesis.',
		id: '01HVZGS2K3DJR4WEF2DSZ36VW2',
		index: 1258,
		keyWords: 'bonus display level 2,1258',
		moduleId: 'effect',
		name: 'Bonus Display Level 2'
	},
	{
		description:
			"A practice cauldron for alchemists in training. Since it's for practice, it only has basic functions.",
		id: '01HVZGS2K3PVW64DVP1PCEJXYB',
		index: 1266,
		keyWords: 'for practice,1266',
		moduleId: 'effect',
		name: 'For Practice'
	},
	{
		description: 'Adds 10 category value to (Fuel).',
		id: '01HVZGS2K3N6SDBV9HK6BXTFD2',
		index: 1289,
		keyWords: 'add (fuel),1289',
		moduleId: 'effect',
		name: 'Add (Fuel)'
	},
	{
		description: 'Gain ultimate vitality. Increases maximum HP by 100.',
		id: '01HVZGS2K3188X95QK954D91CA',
		index: 1406,
		keyWords: 'ultimate vitality,1406',
		moduleId: 'effect',
		name: 'Ultimate Vitality'
	},
	{
		description: 'Gain ultimate fire resistance. Gain super fire resistance.',
		id: '01HVZGS2K3TPSZ8RWPV4ZGDCC7',
		index: 1414,
		keyWords: 'ultimate fire resist,1414',
		moduleId: 'effect',
		name: 'Ultimate Fire Resist'
	},
	{
		description: 'Adds 10 category value to (Medicine Mat).',
		id: '01HVZGS2K37MHKAWEHTKGCTGZY',
		index: 1290,
		keyWords: 'add (medicine mat),1290',
		moduleId: 'effect',
		name: 'Add (Medicine Mat)'
	}
];

export default effectsList;
