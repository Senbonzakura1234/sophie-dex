import type { Rumor } from '@root/server/postgresql/schema';

const rumorsList: Array<Rumor> = [
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2KBQ01S539V3CR07BXP',
					name: 'Unknown Egg',
					table: 'item'
				}
			],
			contentText: ['Provide ', 'keyMap-0']
		},
		id: '01HVZGS2KRMSJPJWRWKMC32VG1',
		keyWords: 'strange miniature eggs,300,green ruins,material,unknown egg',
		location: 'Green Ruins',
		moduleId: 'rumor',
		name: 'Strange Miniature Eggs',
		price: 300,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2K7GNCB7CDHG9V34N2A',
					name: 'Seabed Soil',
					table: 'item'
				}
			],
			contentText: ['Provide ', 'keyMap-0']
		},
		id: '01HVZGS2KRDP37WXW6GTF0E4RG',
		keyWords: "remnant of a past sea?,300,prospector's strand - shore of treasures,material,seabed soil",
		location: "Prospector's Strand - Shore of Treasures",
		moduleId: 'rumor',
		name: 'Remnant of a Past Sea?',
		price: 300,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2K6ZTMTTAKZVVY5T48Q',
					name: 'Whimsy Strawberry',
					table: 'item'
				},
				{
					id: '01HVZGS2M15FBBP9262FM8K01Q',
					name: 'Stable Effect++',
					table: 'trait'
				}
			],
			contentText: ['Provide ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		id: '01HVZGS2KRSDRFC92TM4WGBMDD',
		keyWords: 'not so whimsy strawberries?,350,flower garden,material,whimsy strawberry,stable effect++',
		location: 'Flower Garden',
		moduleId: 'rumor',
		name: 'Not So Whimsy Strawberries?',
		price: 350,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					content: 'Gold Puni'
				},
				{
					content: 'Black Puni'
				},
				{
					content: 'Punipuni?'
				},
				{
					content: 'Super Puni'
				}
			],
			contentText: ['Spawn ', 'keyMap-0', ', ', 'keyMap-1', ', ', 'keyMap-2', ' and ', 'keyMap-3']
		},
		id: '01HVZGS2KSZFN5EVFBEPVB36E0',
		keyWords: 'huge puni outbreak!?,400,pilgrim road,monster,gold puni,black puni,punipuni?,super puni',
		location: 'Pilgrim Road',
		moduleId: 'rumor',
		name: 'Huge Puni Outbreak!?',
		price: 400,
		rumorType: 'MONSTER'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2K9KKQ0WB5ZMYQ1K60Q',
					name: 'Pelem Shell',
					table: 'item'
				}
			],
			contentText: ['Provide ', 'keyMap-0']
		},
		id: '01HVZGS2KSDVGDK2EAE6H4FGZD',
		keyWords: 'chalk white shell,450,underground lake,material,pelem shell',
		location: 'Underground Lake',
		moduleId: 'rumor',
		name: 'Chalk White Shell',
		price: 450,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2K7NDMT3FNKP01G78DZ',
					name: 'Hakurei Stone',
					table: 'item'
				},
				{
					id: '01HVZGS2M7TCRXZY6K9YKDQ20Q',
					name: 'Jumbo Size',
					table: 'trait'
				}
			],
			contentText: ['Provide ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		id: '01HVZGS2KS9PW3BNGGFA302YAM',
		keyWords: 'enormous hakurei stones,400,verdant hill - icy cave,material,hakurei stone,jumbo size',
		location: 'Verdant Hill - Icy Cave',
		moduleId: 'rumor',
		name: 'Enormous Hakurei Stones',
		price: 400,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2K85S7HYMEZSG8G6G6W',
					name: 'Zafloa Oil',
					table: 'item'
				},
				{
					id: '01HVZGS2M7CV2YQ2MDB0846NBP',
					name: 'Secret of Health',
					table: 'trait'
				}
			],
			contentText: ['Provide ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		id: '01HVZGS2KSHPWRRDHW7S2NQVC7',
		keyWords:
			'vividly colored oil,300,fallen palace - inverse entrance, upside down corridor, opposite living room,material,zafloa oil,secret of health',
		location: 'Fallen Palace - Inverse Entrance, Upside Down Corridor, Opposite Living Room',
		moduleId: 'rumor',
		name: 'Vividly Colored Oil',
		price: 300,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2KC53VKV9P269Y58AQP',
					name: 'Bursting Berry',
					table: 'item'
				}
			],
			contentText: ['Provide ', 'keyMap-0']
		},
		id: '01HVZGS2KSNHV6WR8JG711FEX2',
		keyWords: 'fruit that gives strength,300,open ruins,material,bursting berry',
		location: 'Open Ruins',
		moduleId: 'rumor',
		name: 'Fruit that Gives Strength',
		price: 300,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					content: 'Sorcerer Titus'
				}
			],
			contentText: ['Spawn ', 'keyMap-0']
		},
		id: '01HVZGS2KSCASR2Q8VJ3KN96G3',
		keyWords: 'fallen sorcerer,550,moon sun moor - silent bedroom,monster,sorcerer titus',
		location: 'Moon Sun Moor - Silent Bedroom',
		moduleId: 'rumor',
		name: 'Fallen Sorcerer',
		price: 550,
		rumorType: 'MONSTER'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2K52SB0GPT2NQG9K540',
					name: 'Mystic Herb',
					table: 'item'
				},
				{
					id: '01HVZGS2M0E10NFTBFKRE1Y5SJ',
					name: 'Critical++',
					table: 'trait'
				}
			],
			contentText: ['Provide ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		id: '01HVZGS2KS2YXYSKK2EWFDCDD8',
		keyWords: 'herb effective for medicine,400,rocky grove,material,mystic herb,critical++',
		location: 'Rocky Grove',
		moduleId: 'rumor',
		name: 'Herb Effective for Medicine',
		price: 400,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2K56XYHM139V8257RWN',
					name: 'Mossy Driftwood',
					table: 'item'
				},
				{
					id: '01HVZGS2M48KQ9SRBWC5R9JDQ9',
					name: 'Inflict Sleep',
					table: 'trait'
				}
			],
			contentText: ['Provide ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		id: '01HVZGS2KS0Y33FCA0MSFMSN9F',
		keyWords: 'moss with sleep compounds,350,three bridge springs,material,mossy driftwood,inflict sleep',
		location: 'Three Bridge Springs',
		moduleId: 'rumor',
		name: 'Moss with Sleep Compounds',
		price: 350,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2KNZW4CWGPYDCQJEP5Y',
					name: 'Fairy Poison Grass',
					table: 'item'
				}
			],
			contentText: ['Provide ', 'keyMap-0']
		},
		id: '01HVZGS2KSM7W57HPTXAYNZ764',
		keyWords: 'thin line between poison and medicine,350,puzzling path,material,fairy poison grass',
		location: 'Puzzling Path',
		moduleId: 'rumor',
		name: 'Thin Line Between Poison and Medicine',
		price: 350,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2K96WVEJYJD3BPE3ZR4',
					name: 'Good Water',
					table: 'item'
				},
				{
					id: '01HVZGS2KWT9AHG8ZZM4YXFQ4Y',
					name: 'Quality Up++',
					table: 'trait'
				}
			],
			contentText: ['Provide ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		id: '01HVZGS2KSX4XEAGTJDZDQY0BS',
		keyWords: 'pure and clear spring water,450,small islet,material,good water,quality up++',
		location: 'Small Islet',
		moduleId: 'rumor',
		name: 'Pure and Clear Spring Water',
		price: 450,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2K5JB9YW1RNDMZT70S2',
					name: 'Mountain Cotton',
					table: 'item'
				},
				{
					id: '01HVZGS2KYW9RMTEJA10J1SPWT',
					name: 'Dragon Slayer',
					table: 'trait'
				}
			],
			contentText: ['Provide ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		id: '01HVZGS2KSF43FQF00NDBKQNWZ',
		keyWords: 'cotton disliked by dragons,450,verdant hill,material,mountain cotton,dragon slayer',
		location: 'Verdant Hill',
		moduleId: 'rumor',
		name: 'Cotton Disliked by Dragons',
		price: 450,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2K7Z2CPXS4WAVQG5TEB',
					name: 'Ramel Wheat',
					table: 'item'
				},
				{
					id: '01HVZGS2KVJGGYZF37XJFRRGFB',
					name: 'Low Price++',
					table: 'trait'
				}
			],
			contentText: ['Provide ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		id: '01HVZGS2KSBXT5VKWTEDRGD0ZD',
		keyWords: 'care to taste some wheat?,300,merbert farm,material,ramel wheat,low price++',
		location: 'Merbert Farm',
		moduleId: 'rumor',
		name: 'Care to Taste Some Wheat?',
		price: 300,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2KP89R2JNSKTQ3CTHT9',
					name: 'Weiss Powder',
					table: 'item'
				},
				{
					id: '01HVZGS2M8NNWBQF37T0DTDQTD',
					name: 'Super Fine',
					table: 'trait'
				}
			],
			contentText: ['Provide ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		id: '01HVZGS2KS1SXPRGM430MRQZ7A',
		keyWords: 'stash of high grade flour?,450,sealed temple,material,weiss powder,super fine',
		location: 'Sealed Temple',
		moduleId: 'rumor',
		name: 'Stash of High Grade Flour?',
		price: 450,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					content: 'Dark Maiden'
				}
			],
			contentText: ['Spawn ', 'keyMap-0']
		},
		id: '01HVZGS2KSSBV7YWPE0BHEY0PZ',
		keyWords: 'maiden full of grudges,700,small islet - prayerless altar,monster,dark maiden',
		location: 'Small Islet - Prayerless Altar',
		moduleId: 'rumor',
		name: 'Maiden Full of Grudges',
		price: 700,
		rumorType: 'MONSTER'
	},
	{
		description: {
			contentData: [
				{
					content: 'Admiral Puni'
				}
			],
			contentText: ['Spawn ', 'keyMap-0']
		},
		id: '01HVZGS2KS3FDYR3H9QF0WN629',
		keyWords: 'puni among puni,700,pilgrim road,monster,admiral puni',
		location: 'Pilgrim Road',
		moduleId: 'rumor',
		name: 'Puni Among Puni',
		price: 700,
		rumorType: 'MONSTER'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2KCK17H621GDG42RGYM',
					name: 'Uni',
					table: 'item'
				},
				{
					id: '01HVZGS2M53PWBJVJFAD3PD99C',
					name: 'Enhance Finisher++',
					table: 'trait'
				}
			],
			contentText: ['Provide ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		id: '01HVZGS2KSG618YGYMCPNAVGE9',
		keyWords: 'downpour of uni,300,chick woods,material,uni,enhance finisher++',
		location: 'Chick Woods',
		moduleId: 'rumor',
		name: 'Downpour of Uni',
		price: 300,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					content: 'Wind Elemental'
				}
			],
			contentText: ['Spawn ', 'keyMap-0']
		},
		id: '01HVZGS2KSN3DMG1BXPA1NQJ4X',
		keyWords: 'ruler of wind,1000,open ruins,monster,wind elemental',
		location: 'Open Ruins',
		moduleId: 'rumor',
		name: 'Ruler of Wind',
		price: 1000,
		rumorType: 'MONSTER'
	},
	{
		description: {
			contentData: [
				{
					content: 'Crimson Fang'
				},
				{
					content: 'Heavenly Bird'
				}
			],
			contentText: ['Spawn ', 'keyMap-0', ' and ', 'keyMap-1']
		},
		id: '01HVZGS2KSREEV00D4J9GEXHJC',
		keyWords: 'sacred bird, sharp fang of earth,1100,sealed temple,monster,crimson fang,heavenly bird',
		location: 'Sealed Temple',
		moduleId: 'rumor',
		name: 'Sacred Bird, Sharp Fang of Earth',
		price: 1100,
		rumorType: 'MONSTER'
	},
	{
		description: {
			contentData: [
				{
					content: 'Lich Order'
				}
			],
			contentText: ['Spawn ', 'keyMap-0']
		},
		id: '01HVZGS2KSXH6GTTAK50G4Z7FT',
		keyWords: 'book that steals souls,500,forgotten nursery - ancient kitchen,monster,lich order',
		location: 'Forgotten Nursery - Ancient Kitchen',
		moduleId: 'rumor',
		name: 'Book that Steals Souls',
		price: 500,
		rumorType: 'MONSTER'
	},
	{
		description: {
			contentData: [
				{
					content: 'Sealed Demon Lord'
				}
			],
			contentText: ['Spawn ', 'keyMap-0']
		},
		id: '01HVZGS2KT1JGDB8HFJGK9KHC1',
		keyWords: 'sealed disaster,750,sealed temple - beyond desired dreams,monster,sealed demon lord',
		location: 'Sealed Temple - Beyond Desired Dreams',
		moduleId: 'rumor',
		name: 'Sealed Disaster',
		price: 750,
		rumorType: 'MONSTER'
	},
	{
		description: {
			contentData: [
				{
					content: 'Demon King'
				}
			],
			contentText: ['Spawn ', 'keyMap-0']
		},
		id: '01HVZGS2KTCG2PVPH18XE768XH',
		keyWords: 'flash of darkness,3000,soul space,monster,demon king',
		location: 'Soul Space',
		moduleId: 'rumor',
		name: 'Flash of Darkness',
		price: 3000,
		rumorType: 'MONSTER'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2K6862V5Q1H1H8PWEZA',
					name: 'Pendegrune',
					table: 'item'
				}
			],
			contentText: ['Provide ', 'keyMap-0']
		},
		id: '01HVZGS2KTB0KJB4K05EKC7BHY',
		keyWords: 'faintly shining ore,600,soul space - edge of pitch darkness,material,pendegrune',
		location: 'Soul Space - Edge of Pitch Darkness',
		moduleId: 'rumor',
		name: 'Faintly Shining Ore',
		price: 600,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					content: 'Ice Elemental'
				}
			],
			contentText: ['Spawn ', 'keyMap-0']
		},
		id: '01HVZGS2KT0QJXMH3VCFDZ97VK',
		keyWords: 'ruler of ice,1000,verdant hill - icy cave,monster,ice elemental',
		location: 'Verdant Hill - Icy Cave',
		moduleId: 'rumor',
		name: 'Ruler of Ice',
		price: 1000,
		rumorType: 'MONSTER'
	},
	{
		description: {
			contentData: [
				{
					content: 'Devil Horn'
				}
			],
			contentText: ['Spawn ', 'keyMap-0']
		},
		id: '01HVZGS2KTE80PPJM3MTYV2VD7',
		keyWords: 'demon with horns,650,fallen palace - blue sky altar,monster,devil horn',
		location: 'Fallen Palace - Blue Sky Altar',
		moduleId: 'rumor',
		name: 'Demon with Horns',
		price: 650,
		rumorType: 'MONSTER'
	},
	{
		description: {
			contentData: [
				{
					content: 'Moon Eater Durak'
				},
				{
					content: 'Sun Destroyer Yasuk'
				}
			],
			contentText: ['Spawn ', 'keyMap-0', ' and ', 'keyMap-1']
		},
		id: '01HVZGS2KTYVKVD12SS4T9CFBJ',
		keyWords:
			"heaven's twin dragons,1250,moon sun moor - prayerless church,monster,moon eater durak,sun destroyer yasuk",
		location: 'Moon Sun Moor - Prayerless Church',
		moduleId: 'rumor',
		name: "Heaven's Twin Dragons",
		price: 1250,
		rumorType: 'MONSTER'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2KN36Z8QVJM89J84EGZ',
					name: 'Magic Grass',
					table: 'item'
				},
				{
					id: '01HVZGS2M7TCRXZY6K9YKDQ20Q',
					name: 'Jumbo Size',
					table: 'trait'
				}
			],
			contentText: ['Provide ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		id: '01HVZGS2KTD1SK7395YJYTSQA5',
		keyWords: 'greatly grown magic grass,250,pilgrim road,material,magic grass,jumbo size',
		location: 'Pilgrim Road',
		moduleId: 'rumor',
		name: 'Greatly Grown Magic Grass',
		price: 250,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2K5M0TE6KD692V38Y5D',
					name: 'Kifa',
					table: 'item'
				},
				{
					id: '01HVZGS2M3G3M4KGZE2K144XK0',
					name: 'Inflict Curse',
					table: 'trait'
				}
			],
			contentText: ['Provide ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		id: '01HVZGS2KTNKQWPE6CECRBMRRJ',
		keyWords: 'cursed ancient trees,300,gathering of beasts,material,kifa,inflict curse',
		location: 'Gathering of Beasts',
		moduleId: 'rumor',
		name: 'Cursed Ancient Trees',
		price: 300,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2KCRWBY5SG0GY8F30DP',
					name: 'Star Powder',
					table: 'item'
				}
			],
			contentText: ['Provide ', 'keyMap-0']
		},
		id: '01HVZGS2KV03V17E8DTXHYSBWZ',
		keyWords: 'a shattered star?,750,moon sun moor,material,star powder',
		location: 'Moon Sun Moor',
		moduleId: 'rumor',
		name: 'A Shattered Star?',
		price: 750,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2KB2NG0AMPBV162B9TN',
					name: 'Gold Steel Web',
					table: 'item'
				}
			],
			contentText: ['Provide ', 'keyMap-0']
		},
		id: '01HVZGS2KSXWCDVMEYTZT3XHJB',
		keyWords: 'golden strong thread,600,forgotten nursery - masterless gazebo,material,gold steel web',
		location: 'Forgotten Nursery - Masterless Gazebo',
		moduleId: 'rumor',
		name: 'Golden Strong Thread',
		price: 600,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2KAY1PPHGEM02HD1KBK',
					name: 'Spirit Crystal',
					table: 'item'
				}
			],
			contentText: ['Provide ', 'keyMap-0']
		},
		id: '01HVZGS2KTZ9MZ81B9NHWRB7P8',
		keyWords: 'crystal blessed by spirits,1000,scar of the land - pierced ruins,material,spirit crystal',
		location: 'Scar of the Land - Pierced Ruins',
		moduleId: 'rumor',
		name: 'Crystal Blessed by Spirits',
		price: 1000,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2K647SF4SNQWM2Z6JMM',
					name: 'Dunkelheit',
					table: 'item'
				}
			],
			contentText: ['Provide ', 'keyMap-0']
		},
		id: '01HVZGS2KTKNVRHA3DFYNBQZ85',
		keyWords: 'flower blooming in silence,2000,forest of fairies,material,dunkelheit',
		location: 'Forest of Fairies',
		moduleId: 'rumor',
		name: 'Flower Blooming in Silence',
		price: 2000,
		rumorType: 'MATERIAL'
	},
	{
		description: {
			contentData: [
				{
					content: 'Isanasius'
				}
			],
			contentText: ['Spawn ', 'keyMap-0']
		},
		id: '01HVZGS2KTQKCQM020V5Y6D9B4',
		keyWords: "brave master of water,650,prospector's strand - prospector's hunt,monster,isanasius",
		location: "Prospector's Strand - Prospector's Hunt",
		moduleId: 'rumor',
		name: 'Brave Master of Water',
		price: 650,
		rumorType: 'MONSTER'
	},
	{
		description: {
			contentData: [
				{
					content: 'Light Elemental'
				}
			],
			contentText: ['Spawn ', 'keyMap-0']
		},
		id: '01HVZGS2KTQ0DYYSJMDX79B9HQ',
		keyWords: 'ruler of light,1500,moon sun moor - sun waiting ring,monster,light elemental',
		location: 'Moon Sun Moor - Sun Waiting Ring',
		moduleId: 'rumor',
		name: 'Ruler of Light',
		price: 1500,
		rumorType: 'MONSTER'
	},
	{
		description: {
			contentData: [
				{
					content: 'Dragonaire'
				}
			],
			contentText: ['Spawn ', 'keyMap-0']
		},
		id: '01HVZGS2KTTM0DTH53EZX7YRD0',
		keyWords: 'brutal dragon,600,scar of the land - scab of the earth,monster,dragonaire',
		location: 'Scar of the Land - Scab of the Earth',
		moduleId: 'rumor',
		name: 'Brutal Dragon',
		price: 600,
		rumorType: 'MONSTER'
	},
	{
		description: {
			contentData: [
				{
					content: 'Rok'
				}
			],
			contentText: ['Spawn ', 'keyMap-0']
		},
		id: '01HVZGS2KTA4MNMH7NFHMCD4JX',
		keyWords: 'soaring monster bird,750,scar of the land - pierced ruins,monster,rok',
		location: 'Scar of the Land - Pierced Ruins',
		moduleId: 'rumor',
		name: 'Soaring Monster Bird',
		price: 750,
		rumorType: 'MONSTER'
	},
	{
		description: {
			contentData: [
				{
					content: 'Funny Face'
				}
			],
			contentText: ['Spawn ', 'keyMap-0']
		},
		id: '01HVZGS2KTSQ9GRZEJR0GR6ZV1',
		keyWords: 'funny ghosts,300,chick woods,monster,funny face',
		location: 'Chick Woods',
		moduleId: 'rumor',
		name: 'Funny Ghosts',
		price: 300,
		rumorType: 'MONSTER'
	},
	{
		description: {
			contentData: [
				{
					content: 'Grand Ocean'
				}
			],
			contentText: ['Spawn ', 'keyMap-0']
		},
		id: '01HVZGS2KVGPE8QSXVZH6M7SGF',
		keyWords: 'ruler of the ocean,1000,underground lake - damp banks,monster,grand ocean',
		location: 'Underground Lake - Damp Banks',
		moduleId: 'rumor',
		name: 'Ruler of the Ocean',
		price: 1000,
		rumorType: 'MONSTER'
	},
	{
		description: {
			contentData: [
				{
					id: '01HVZGS2K6VB47AF671TFPZ32C',
					name: 'Pretty Shell',
					table: 'item'
				},
				{
					id: '01HVZGS2KV11TWSGVBV7K8ZVJK',
					name: 'High Price++',
					table: 'trait'
				}
			],
			contentText: ['Provide ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		id: '01HVZGS2KV96QJE9K6EYJ8TVTH',
		keyWords: 'shell like gemstone,500,calm banks,material,pretty shell,high price++',
		location: 'Calm Banks',
		moduleId: 'rumor',
		name: 'Shell Like Gemstone',
		price: 500,
		rumorType: 'MATERIAL'
	}
];

export default rumorsList;
