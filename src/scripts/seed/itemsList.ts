import type { Item } from '@root/server/postgresql/schema';

const itemsList: Array<Item> = [
	{
		category: 'MATERIAL',
		color: 'GREEN',
		description: {
			hunt: ['White Root', 'Alraunem', 'Starfish.'],
			location: ['Gate of Trees', 'Three Bridge Spring', 'Small Islet', "Prospector's Strand."],
			rumor: { id: '01HVZGS2KS0Y33FCA0MSFMSN9F', name: 'Moss with Sleep Compounds', table: 'rumor' }
		},
		id: '01HVZGS2K56XYHM139V8257RWN',
		index: 7,
		keyWords:
			"mossy driftwood,green,material,7,13,wood,plant,white root,alraunem,starfish.,moss with sleep compounds,gate of trees,three bridge spring,small islet,prospector's strand.",
		level: 13,
		moduleId: 'item',
		name: 'Mossy Driftwood',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WOOD', 'PLANT'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'GREEN',
		description: {
			hunt: [],
			location: ['Small Islet', 'Moon Sun Mor (Unlock after Oskar event).']
		},
		id: '01HVZGS2K50H141R7VWAFFBF7R',
		index: 9,
		keyWords: 'altare,green,material,9,8,plant,medicine mat,small islet,moon sun mor (unlock after oskar event).',
		level: 8,
		moduleId: 'item',
		name: 'Altare',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['PLANT', 'MEDICINE_MAT'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: {
			hunt: ['Kimmoch', 'Nightshade', 'Sorcerer Titus.'],
			location: ['Rocky Grove', 'Gate of trees', 'Forest of Fairies.'],
			rumor: { id: '01HVZGS2KS2YXYSKK2EWFDCDD8', name: 'Herb Effective for Medicine', table: 'rumor' }
		},
		id: '01HVZGS2K52SB0GPT2NQG9K540',
		index: 3,
		keyWords:
			'mystic herb,white,material,3,15,plant,secret power,medicine mat,kimmoch,nightshade,sorcerer titus.,herb effective for medicine,rocky grove,gate of trees,forest of fairies.',
		level: 15,
		moduleId: 'item',
		name: 'Mystic Herb',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['PLANT', 'SECRET_POWER', 'MEDICINE_MAT'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'GREEN',
		description: {
			hunt: ['White Root', 'Alraunem', 'Starfish.'],
			location: ['Funal Garden', 'Foggy Woodland', 'Forest of Faries.']
		},
		id: '01HVZGS2K56QV0AX1S55JKHWPS',
		index: 5,
		keyWords:
			'five day vine,green,material,5,10,plant,secret power,white root,alraunem,starfish.,funal garden,foggy woodland,forest of faries.',
		level: 10,
		moduleId: 'item',
		name: 'Five Day Vine',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['PLANT', 'SECRET_POWER'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: {
			hunt: ['White Root', 'Alraunem', 'Starfish.'],
			location: ['Rocky Mountain', 'Verdant Hill', 'Scar of the land.'],
			rumor: { id: '01HVZGS2KSF43FQF00NDBKQNWZ', name: 'Cotton Disliked by Dragons', table: 'rumor' }
		},
		id: '01HVZGS2K5JB9YW1RNDMZT70S2',
		index: 6,
		keyWords:
			'mountain cotton,white,material,6,7,plant,thread,fuel,white root,alraunem,starfish.,cotton disliked by dragons,rocky mountain,verdant hill,scar of the land.',
		level: 7,
		moduleId: 'item',
		name: 'Mountain Cotton',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['PLANT', 'THREAD', 'FUEL'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'YELLOW',
		description: {
			hunt: [],
			location: ['Gathering of Beast', 'Rocky Grove', 'Gate of Trees', 'Foggy Woodland', 'Forest of Faries.'],
			rumor: { id: '01HVZGS2KTNKQWPE6CECRBMRRJ', name: 'Cursed Ancient Trees', table: 'rumor' }
		},
		id: '01HVZGS2K5M0TE6KD692V38Y5D',
		index: 8,
		keyWords:
			'kifa,yellow,material,8,10,wood,plant,cursed ancient trees,gathering of beast,rocky grove,gate of trees,foggy woodland,forest of faries.',
		level: 10,
		moduleId: 'item',
		name: 'Kifa',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WOOD', 'PLANT'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'YELLOW',
		description: {
			hunt: ['White Root', 'Araune', 'Kimmoch.'],
			location: ['Chick Woods', 'lisure Plaza', 'Fungal garden', 'Rocky Mountain', 'Dead Tree Wasteland.']
		},
		id: '01HVZGS2K5Z91N0SQ14GPP8C6T',
		index: 4,
		keyWords:
			'sunset grass,yellow,material,4,2,plant,fuel,white root,araune,kimmoch.,chick woods,lisure plaza,fungal garden,rocky mountain,dead tree wasteland.',
		level: 2,
		moduleId: 'item',
		name: 'Sunset Grass',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['PLANT', 'FUEL'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'BLUE',
		description: {
			hunt: ['White Root', 'Alraune', 'Kimmoch.'],
			location: ['Pilgram Road', 'Flower Garden', 'Verdant Hill', 'Underground lake.']
		},
		id: '01HVZGS2K5SJHHSNS1BDGM0DYJ',
		index: 1,
		keyWords:
			'cobalt grass,blue,material,1,3,plant,water,white root,alraune,kimmoch.,pilgram road,flower garden,verdant hill,underground lake.',
		level: 3,
		moduleId: 'item',
		name: 'Cobalt Grass',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['PLANT', 'WATER'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: {
			hunt: [],
			location: ['Underground Lake  (Unlock after Oskar event).']
		},
		id: '01HVZGS2K50RBXW4EZT1A30S6N',
		index: 11,
		keyWords: 'princess grass,white,material,11,17,plant,medicine mat,underground lake  (unlock after oskar event).',
		level: 17,
		moduleId: 'item',
		name: 'Princess Grass',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['PLANT', 'MEDICINE_MAT'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'RED',
		description: {
			hunt: ['Kimmoch', 'Nightshade', 'Sealed Demon Lord', 'Sorcerer Titus', 'Light Elemental.'],
			location: []
		},
		id: '01HVZGS2K5NKTE39PCS2NGWHM3',
		index: 14,
		keyWords:
			'dunkelstern,red,material,14,37,plant,poison mat,secret power,false flower,kimmoch,nightshade,sealed demon lord,sorcerer titus,light elemental.',
		level: 37,
		moduleId: 'item',
		name: 'Dunkelstern',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['PLANT', 'POISON_MAT', 'SECRET_POWER'],
		traitPresent: { id: '01HVZGS2M93TG11RRFWH96HGJ0', name: 'False Flower', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: {
			hunt: [],
			location: ['Forest of Faries  (Unlock after Oskar final event).']
		},
		id: '01HVZGS2K5KRE2513934EK5XX0',
		index: 12,
		keyWords: 'eternal blossom,white,material,12,34,plant,elixir,forest of faries  (unlock after oskar final event).',
		level: 34,
		moduleId: 'item',
		name: 'Eternal Blossom',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['PLANT', 'ELIXIR'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'RED',
		description: {
			hunt: [],
			location: [
				'Gate of Tress',
				'Three Bridge Spring',
				'Silent Lakeside',
				"Prospector's Strand",
				'Underground Lake  (Unlock after Oskar event).'
			]
		},
		id: '01HVZGS2K6S98Y00KXRBWNM7Y8',
		index: 10,
		keyWords:
			"crimson herb,red,material,10,14,plant,medicine mat,slime compound,gate of tress,three bridge spring,silent lakeside,prospector's strand,underground lake  (unlock after oskar event).",
		level: 14,
		moduleId: 'item',
		name: 'Crimson Herb',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['PLANT', 'MEDICINE_MAT'],
		traitPresent: { id: '01HVZGS2M7DN3TTWEZ9HEDY874', name: 'Slime Compound', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: {
			hunt: [],
			location: ['Fairy Forest (Rumor only).'],
			rumor: { id: '01HVZGS2KTKNVRHA3DFYNBQZ85', name: 'Flower Blooming in Silence', table: 'rumor' }
		},
		id: '01HVZGS2K647SF4SNQWM2Z6JMM',
		index: 13,
		keyWords:
			'dunkelheit,white,material,13,50,plant,medicine mat,elixir,full of life,flower blooming in silence,fairy forest (rumor only).',
		level: 50,
		moduleId: 'item',
		name: 'Dunkelheit',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['PLANT', 'MEDICINE_MAT', 'ELIXIR'],
		traitPresent: { id: '01HVZGS2KY1FYZX1YBHPF2A6DV', name: 'Full of Life', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'YELLOW',
		description: {
			hunt: ['Magic Book', 'Gargolye', 'Apostle', 'Mini Demon.'],
			location: ['Merbert Farm', 'Enlightened Mountain', 'Underground Lake.']
		},
		id: '01HVZGS2K680HHX367B01H22HQ',
		index: 15,
		keyWords:
			'aizen ore,yellow,material,15,7,ore,magic book,gargolye,apostle,mini demon.,merbert farm,enlightened mountain,underground lake.',
		level: 7,
		moduleId: 'item',
		name: 'Aizen Ore',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ORE'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'RED',
		description: {
			hunt: ['Punipuni?', 'Magic book', 'Book Familiar', 'Mini Demon', 'Tricker', 'Devil Horn', 'Sealed Demon.'],
			location: ['Flower Garden', 'Sealed Temple.']
		},
		id: '01HVZGS2K6799K2N19XA84MGSG',
		index: 17,
		keyWords:
			'kupulf ore,red,material,17,9,ore,punipuni?,magic book,book familiar,mini demon,tricker,devil horn,sealed demon.,flower garden,sealed temple.',
		level: 9,
		moduleId: 'item',
		name: 'Kupulf Ore',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ORE'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'GREEN',
		description: {
			hunt: ['Punipuni?', 'Magic book', 'Book Familiar', 'Mini Demon', 'Tricker.'],
			location: ['Flower Garden', 'Sealed Temple.']
		},
		id: '01HVZGS2K6QHA3YA17YTVTC9MN',
		index: 16,
		keyWords:
			'raiden ore,green,material,16,9,ore,electrified,punipuni?,magic book,book familiar,mini demon,tricker.,flower garden,sealed temple.',
		level: 9,
		moduleId: 'item',
		name: 'Raiden Ore',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ORE'],
		traitPresent: { id: '01HVZGS2M8C4Q4QWSS1EF1B681', name: 'Electrified', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: {
			hunt: ['Devil Horn', 'Sealed Demon Lord.'],
			location: ['Scar of the Land', ' Enlightend Mountain.']
		},
		id: '01HVZGS2K6ZX08FVQJ8195XVBG',
		index: 20,
		keyWords:
			'spirit stone,white,material,20,15,ore,metal,devil horn,sealed demon lord.,scar of the land, enlightend mountain.',
		level: 15,
		moduleId: 'item',
		name: 'Spirit Stone',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ORE', 'METAL'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'GREEN',
		description: {
			hunt: ['Island Fish', 'Isanasius.'],
			location: ['Calm Banks', 'Fertile Shore', 'Underground Lake,.']
		},
		id: '01HVZGS2K6X92SP0NPG6P4QH6Z',
		index: 23,
		keyWords:
			'lakebottom soil,green,material,23,9,clay,island fish,isanasius.,calm banks,fertile shore,underground lake,.',
		level: 9,
		moduleId: 'item',
		name: 'Lakebottom Soil',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['CLAY'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: {
			hunt: [
				'Wise Spirit',
				'Rok',
				'Twin Header',
				'Sorcer Titus',
				'Ifritter',
				'Tempestus',
				'Dragonaire',
				'Mamacius',
				'Sun Destroyer Yasuk',
				'Moon Eater Durak..'
			],
			location: []
		},
		id: '01HVZGS2K6Q5WWRS65SRH91X36',
		index: 41,
		keyWords:
			'dragon scale,white,material,41,39,animal,medicine mat,elixir,wise spirit,rok,twin header,sorcer titus,ifritter,tempestus,dragonaire,mamacius,sun destroyer yasuk,moon eater durak..',
		level: 39,
		moduleId: 'item',
		name: 'Dragon Scale',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ANIMAL', 'MEDICINE_MAT', 'ELIXIR'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KF2S3XBQJ9A5A5HN2D',
		index: 578,
		keyWords: 'wandering staff,red,weapon,578,24,weapon',
		level: 24,
		moduleId: 'item',
		name: 'Wandering Staff',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'GREEN',
		description: {
			hunt: ['Dragonaire', 'Magmacius.'],
			location: ['Fertile Shore', 'Moon Sun Moor.']
		},
		id: '01HVZGS2K6K0P7H7FP537SZGZC',
		index: 45,
		keyWords:
			'luminous water,green,material,45,23,water,secret power,flickering light,dragonaire,magmacius.,fertile shore,moon sun moor.',
		level: 23,
		moduleId: 'item',
		name: 'Luminous Water',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WATER', 'SECRET_POWER'],
		traitPresent: { id: '01HVZGS2M9JJJM94Q4H8S443YD', name: 'Flickering Light', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'GREEN',
		description: {
			hunt: ['Magic Book', 'Book Familiar', 'living Grimoire', 'Forbidden Codex.'],
			location: ['Flower Garden', 'Forgotten Nursery', 'Fallen Palace', 'Sealed Temple.']
		},
		id: '01HVZGS2K63QXGCF8G612S5N57',
		index: 64,
		keyWords:
			'paper scrap,green,material,64,5,paper,fuel,magic book,book familiar,living grimoire,forbidden codex.,flower garden,forgotten nursery,fallen palace,sealed temple.',
		level: 5,
		moduleId: 'item',
		name: 'Paper Scrap',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['PAPER', 'FUEL'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'GREEN',
		description: {
			hunt: ['Sealed Demon Lord', 'Wind Elemental', 'Light Elemental.'],
			location: [],
			rumor: { id: '01HVZGS2KTB0KJB4K05EKC7BHY', name: 'Faintly Shining Ore', table: 'rumor' }
		},
		id: '01HVZGS2K6862V5Q1H1H8PWEZA',
		index: 78,
		keyWords:
			'pendegrune,green,material,78,28,secret power,elixir,sealed demon lord,wind elemental,light elemental.,faintly shining ore',
		level: 28,
		moduleId: 'item',
		name: 'Pendegrune',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['SECRET_POWER', 'ELIXIR'],
		traitPresent: null
	},
	{
		category: 'BUFF_ITEM',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K6H6Z9CFYJCQGSDK4X',
		index: 297,
		keyWords: "hero's medicine,red,buff item,297,46,mystery recipes,medicine,ruins,blue sky altar,fallen palace",
		level: 46,
		moduleId: 'item',
		name: "Hero's Medicine",
		recipeIdea: {
			contentData: [{ content: 'Ruins' }, { content: 'Blue Sky Altar' }, { content: 'Fallen Palace' }],
			contentText: ['Investigate ', 'keyMap-0', ' at the ', 'keyMap-1', ' at ', 'keyMap-2']
		},
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['MEDICINE'],
		traitPresent: null
	},
	{
		category: 'HEAL_ITEM',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K6W1RFDHXPBR9WT882',
		index: 239,
		keyWords: 'honey syrup,blue,heal item,239,12,hope recipes,medicine,tess',
		level: 12,
		moduleId: 'item',
		name: 'Honey Syrup',
		recipeIdea: { contentData: [{ content: 'Tess' }], contentText: ['From ', 'keyMap-0', ' Events'] },
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['MEDICINE'],
		traitPresent: null
	},
	{
		category: 'EXPLORATION',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K6ST9QB9B3FKWWT3Y5',
		index: 368,
		keyWords: 'warding charm,yellow,exploration,368,17,beginner recipes,magic item,paper,pious talisman,pamela',
		level: 17,
		moduleId: 'item',
		name: 'Warding Charm',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2K7Y628GW4CSTEKVC3K', name: 'Pious Talisman', table: 'item' },
				{ content: 'Pamela' }
			],
			contentText: ['Buy ', 'keyMap-0', ' from ', 'keyMap-1']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['MAGIC_ITEM', 'PAPER'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'BLUE',
		description: {
			hunt: ['Punipuni?', 'Book Familiar', 'Tricker.'],
			location: ['Gate of Trees', 'Three Bridge Spring', 'Silent Lakeside', 'Merbert Farm', "Prospector's Strand."],
			rumor: { id: '01HVZGS2KS9PW3BNGGFA302YAM', name: 'Enormous Hakurei Stones', table: 'rumor' }
		},
		id: '01HVZGS2K7NDMT3FNKP01G78DZ',
		index: 19,
		keyWords:
			"hakurei stone,blue,material,19,7,ore,gem,carries cold,punipuni?,book familiar,tricker.,enormous hakurei stones,gate of trees,three bridge spring,silent lakeside,merbert farm,prospector's strand.",
		level: 7,
		moduleId: 'item',
		name: 'Hakurei Stone',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ORE', 'GEM'],
		traitPresent: { id: '01HVZGS2M716RJVJ473RJBZQDW', name: 'Carries Cold', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: {
			hunt: ['Gargoyle', 'Apostle.'],
			location: ['Moon Sun Moor', 'City of the lost', 'Sealed temple.']
		},
		id: '01HVZGS2K7BEM75QDDN0N26EYQ',
		index: 25,
		keyWords:
			'ancient tablet,white,material,25,15,ore,clay,secret power,ancient seal,gargoyle,apostle.,moon sun moor,city of the lost,sealed temple.',
		level: 15,
		moduleId: 'item',
		name: 'Ancient Tablet',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ORE', 'CLAY', 'SECRET_POWER'],
		traitPresent: { id: '01HVZGS2M7EH2078NRNKHMWPHR', name: 'Ancient Seal', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'RED',
		description: {
			hunt: [
				'Black Puni',
				'Kaiser Pigeon',
				'Saber Claw',
				'Gustaf',
				'Lightning',
				'Fang ',
				'Twin Header',
				'Silent Beast',
				'Crimson Fang Dragonaire',
				'Magmacius',
				'Wind Elemental.'
			],
			location: []
		},
		id: '01HVZGS2K7BHK95VCBEXABVVCD',
		index: 38,
		keyWords:
			'dawn fur,red,material,38,21,animal,thread,sunny scent,black puni,kaiser pigeon,saber claw,gustaf,lightning,fang ,twin header,silent beast,crimson fang dragonaire,magmacius,wind elemental.',
		level: 21,
		moduleId: 'item',
		name: 'Dawn Fur',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ANIMAL', 'THREAD'],
		traitPresent: { id: '01HVZGS2MAXGSHPD04V25TWGRD', name: 'Sunny Scent', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'GREEN',
		description: {
			hunt: ['Mandragora', 'Single Horn.'],
			location: ['Merbert Farm', 'Moon Sun Moor.'],
			rumor: { id: '01HVZGS2KSBXT5VKWTEDRGD0ZD', name: 'Care to Taste Some Wheat?', table: 'rumor' }
		},
		id: '01HVZGS2K7Z2CPXS4WAVQG5TEB',
		index: 56,
		keyWords:
			'ramel wheat,green,material,56,6,ingredient,plant,mandragora,single horn.,care to taste some wheat?,merbert farm,moon sun moor.',
		level: 6,
		moduleId: 'item',
		name: 'Ramel Wheat',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['INGREDIENT', 'PLANT'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'YELLOW',
		description: {
			hunt: ['Kimmoch', 'Nightshade', 'Sorcerer Titus.'],
			location: ['Gathering Of Beast', 'Puzzling Path', 'Forest of Fairies.']
		},
		id: '01HVZGS2K7G9AVV1FXZ7FEX962',
		index: 59,
		keyWords:
			'silver potato,yellow,material,59,15,ingredient,metal,mutated material,kimmoch,nightshade,sorcerer titus.,gathering of beast,puzzling path,forest of fairies.',
		level: 15,
		moduleId: 'item',
		name: 'Silver Potato',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['INGREDIENT', 'METAL'],
		traitPresent: { id: '01HVZGS2M9C2EYBN98SEA288Z3', name: 'Mutated Material', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: {
			hunt: ['Devil Horn', 'Sealed Demon Lord', 'Dragonaire', 'magmacius.'],
			location: []
		},
		id: '01HVZGS2K7ZQJ6CCHN8E25ZB13',
		index: 83,
		keyWords: 'forgotten ore,white,material,83,41,ore,devil horn,sealed demon lord,dragonaire,magmacius.',
		level: 41,
		moduleId: 'item',
		name: 'Forgotten Ore',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ORE'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'BLUE',
		description: { hunt: [], location: ['Library of All Creation.'] },
		id: '01HVZGS2K7NMYS2WW2E50DMXQ6',
		index: 92,
		keyWords: 'magic page,blue,material,92,18,paper,fuel,magic item,library of all creation.',
		level: 18,
		moduleId: 'item',
		name: 'Magic Page',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['PAPER', 'FUEL', 'MAGIC_ITEM'],
		traitPresent: null
	},
	{
		category: 'ATK_ITEM',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K7WDVHN0M494QC8YG0',
		index: 164,
		keyWords: 'flame of the end,white,atk item,164,60,mystery recipes,bomb,magic item',
		level: 60,
		moduleId: 'item',
		name: 'Flame of the End',
		recipeIdea: {
			contentData: [],
			contentText: ['Accept 5 Time-Limited Request, let them Expire and then Cancel them']
		},
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['BOMB', 'MAGIC_ITEM'],
		traitPresent: null
	},
	{
		category: 'ATK_ITEM',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K7YWCW2K9A3D6F5VGB',
		index: 153,
		keyWords: "magician's flute,green,atk item,153,31,dream recipes,magic item,book shop",
		level: 31,
		moduleId: 'item',
		name: "Magician's Flute",
		recipeIdea: {
			contentData: [{ content: 'Book Shop' }],
			contentText: ['Talk to the NPC at the conner of ', 'keyMap-0']
		},
		recipeType: 'DREAM_RECIPES',
		relatedCategories: ['MAGIC_ITEM'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'BLUE',
		description: {
			hunt: ['Grand Ocean.'],
			location: [],
			rumor: { id: '01HVZGS2KRDP37WXW6GTF0E4RG', name: 'Remnant of a Past Sea?', table: 'rumor' }
		},
		id: '01HVZGS2K7GNCB7CDHG9V34N2A',
		index: 24,
		keyWords: 'seabed soil,blue,material,24,11,clay,grand ocean.,remnant of a past sea?',
		level: 11,
		moduleId: 'item',
		name: 'Seabed Soil',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['CLAY'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'YELLOW',
		description: {
			hunt: [
				'Mini Demon',
				'Ardra',
				'Chimera Beast',
				'Lightning',
				'Fang',
				'Twin Header',
				'Island Fish',
				'Single Horn.'
			],
			location: []
		},
		id: '01HVZGS2K8P8HBB57X6VN5JGSM',
		index: 37,
		keyWords:
			'animal fur,yellow,material,37,8,animal,thread,mini demon,ardra,chimera beast,lightning,fang,twin header,island fish,single horn.',
		level: 8,
		moduleId: 'item',
		name: 'Animal Fur',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ANIMAL', 'THREAD'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'YELLOW',
		description: {
			hunt: ['Mini Demon', 'Ardra', 'Chimera Beast.'],
			location: []
		},
		id: '01HVZGS2K8MYJ1SZY8Z5MMXN9S',
		index: 65,
		keyWords: 'natural oil,yellow,material,65,9,fuel,mini demon,ardra,chimera beast.',
		level: 9,
		moduleId: 'item',
		name: 'Natural Oil',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['FUEL'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K8ZAZYJMRY48FDVJEB',
		index: 580,
		keyWords: 'eternal cycle staff,white,weapon,580,42,weapon',
		level: 42,
		moduleId: 'item',
		name: 'Eternal Cycle Staff',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'GREEN',
		description: {
			hunt: [],
			location: ['Merbert Farm', 'Flower Garden', 'Open Ruins', 'Verdant Hilld.'],
			rumor: { id: '01HVZGS2KRSDRFC92TM4WGBMDD', name: 'Not So Whimsy Strawberries?', table: 'rumor' }
		},
		id: '01HVZGS2K6ZTMTTAKZVVY5T48Q',
		index: 62,
		keyWords:
			'whimsy strawberry,green,material,62,10,ingredient,plant,not so whimsy strawberries?,merbert farm,flower garden,open ruins,verdant hilld.',
		level: 10,
		moduleId: 'item',
		name: 'Whimsy Strawberry',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['INGREDIENT', 'PLANT'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'BLUE',
		description: {
			hunt: ['Kaiser Pigeon', 'Saber Claw', 'Gustaf', 'Fang.'],
			location: ['Calm Banks', 'Silent Lakeside', "Prospector's Strand."],
			rumor: { id: '01HVZGS2KV96QJE9K6EYJ8TVTH', name: 'Shell Like Gemstone', table: 'rumor' }
		},
		id: '01HVZGS2K6VB47AF671TFPZ32C',
		index: 70,
		keyWords:
			"pretty shell,blue,material,70,5,gem,medicine mat,kaiser pigeon,saber claw,gustaf,fang.,shell like gemstone,calm banks,silent lakeside,prospector's strand.",
		level: 5,
		moduleId: 'item',
		name: 'Pretty Shell',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['GEM', 'MEDICINE_MAT'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K6B3T2254Z87H98PGW',
		index: 420,
		keyWords: 'neutralizer r,red,synthesis,420,2,beginner recipes,neutralizer,red uni',
		level: 2,
		moduleId: 'item',
		name: 'Neutralizer R',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2KA97AV6Y0FXEWZCSTY', name: 'Red Uni', table: 'item' }],
			contentText: ['Gather ', 'keyMap-0']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['NEUTRALIZER'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K6NBV9B9A90G607DEY',
		index: 428,
		keyWords: 'honey,yellow,synthesis,428,6,beginner recipes,ingredient,beehive',
		level: 6,
		moduleId: 'item',
		name: 'Honey',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2K80JM8045PC8QF0BD4', name: 'Beehive', table: 'item' }],
			contentText: ['Gather ', 'keyMap-0']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['INGREDIENT'],
		traitPresent: null
	},
	{
		category: 'EXPLORATION',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K6SWYG1PP1NSNK5PN2',
		index: 362,
		keyWords: "traveler's shoes,green,exploration,362,18,hope recipes,cloth",
		level: 18,
		moduleId: 'item',
		name: "Traveler's Shoes",
		recipeIdea: { contentData: [], contentText: ['Explore 5 Areas'] },
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['CLOTH'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K64RBKN35Q24EW0K5J',
		index: 434,
		keyWords: 'blitzlite,green,synthesis,434,25,hope recipes,metal,lightning skill',
		level: 25,
		moduleId: 'item',
		name: 'Blitzlite',
		recipeIdea: {
			contentData: [{ content: 'Lightning Skill' }],
			contentText: ['Get attacked by ', 'keyMap-0', ' in Combat']
		},
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['METAL'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'RED',
		description: {
			hunt: ['Black Puni', 'Punipuni? Kaiser pigeonm Saber claw', 'Gustaf', 'Lightning', 'Silent Beast.'],
			location: ['Forgotten Nursery', 'Waterside', 'Ruins', 'Small Islet,.']
		},
		id: '01HVZGS2K77E6KCN4BT84J09DQ',
		index: 47,
		keyWords:
			'suspicious liquid,red,material,47,20,water,poison mat,black puni,punipuni? kaiser pigeonm saber claw,gustaf,lightning,silent beast.,forgotten nursery,waterside,ruins,small islet,.',
		level: 20,
		moduleId: 'item',
		name: 'Suspicious Liquid',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WATER', 'POISON_MAT'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'YELLOW',
		description: {
			hunt: ['Gargoyle', 'Apostle.'],
			location: ['Forgotten nursery', 'Small islet', 'City of the Lost', 'Fallen Palace.']
		},
		id: '01HVZGS2K7JR4YTZWPHH3FCX5D',
		index: 26,
		keyWords:
			'broken stone,yellow,material,26,11,ore,clay,gargoyle,apostle.,forgotten nursery,small islet,city of the lost,fallen palace.',
		level: 11,
		moduleId: 'item',
		name: 'Broken Stone',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ORE', 'CLAY'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'BLUE',
		description: {
			hunt: ['Blue Puni', 'Green Puni', 'Red Puni', 'Gold Puni', 'Black Puni.'],
			location: []
		},
		id: '01HVZGS2K7XNF8A3PRGM1THK1D',
		index: 48,
		keyWords: 'puni fluid,blue,material,48,9,water,medicine mat,blue puni,green puni,red puni,gold puni,black puni.',
		level: 9,
		moduleId: 'item',
		name: 'Puni Fluid',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WATER', 'MEDICINE_MAT'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'YELLOW',
		description: {
			hunt: ['Kimmoch', 'Nightshade', 'Sorcerer Titus.'],
			location: ['Gathering Of Beast', 'Puzzling Path', 'Forest of Fairies.']
		},
		id: '01HVZGS2K719T7BPFD993Y17P2',
		index: 58,
		keyWords:
			'soil potato,yellow,material,58,9,ingredient,plant,kimmoch,nightshade,sorcerer titus.,gathering of beast,puzzling path,forest of fairies.',
		level: 9,
		moduleId: 'item',
		name: 'Soil Potato',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['INGREDIENT', 'PLANT'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: {
			hunt: ['Lich Ordser', 'Haunt', 'Sealed Demon Lord', 'Unliving King.'],
			location: []
		},
		id: '01HVZGS2K7Y628GW4CSTEKVC3K',
		index: 69,
		keyWords:
			'pious talisman,white,material,69,26,paper,fuel,magic item,power of faith,lich ordser,haunt,sealed demon lord,unliving king.',
		level: 26,
		moduleId: 'item',
		name: 'Pious Talisman',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['PAPER', 'FUEL', 'MAGIC_ITEM'],
		traitPresent: { id: '01HVZGS2M9CQ0WB00TE9DFY0VG', name: 'Power of Faith', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'GREEN',
		description: { hunt: [], location: [], special: 'Obtain through event.' },
		id: '01HVZGS2K7Y0C07YTE8NGZ4DD4',
		index: 90,
		keyWords: 'haze grass petal,green,material,90,28,important,obtain through event.',
		level: 28,
		moduleId: 'item',
		name: 'Haze Grass Petal',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'HEAL_ITEM',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K7MVRWC8NXHSARTSH3',
		index: 216,
		keyWords: 'berg medicine,green,heal item,216,1,beginner recipes,medicine,berg medicine',
		level: 1,
		moduleId: 'item',
		name: 'Berg Medicine',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2K7MVRWC8NXHSARTSH3', name: 'Berg Medicine', table: 'item' }],
			contentText: ['Synthesize ', 'keyMap-0']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['MEDICINE'],
		traitPresent: null
	},
	{
		category: 'DE_BUFF_ITEM',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K76283VGKE72W0E2MW',
		index: 296,
		keyWords: "imp's mischief,yellow,de buff item,296,16,growth recipes,magic item,monsters",
		level: 16,
		moduleId: 'item',
		name: "Imp's Mischief",
		recipeIdea: { contentData: [{ content: 'Monsters' }], contentText: ['Loot Chest Dropped From ', 'keyMap-0'] },
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['MAGIC_ITEM'],
		traitPresent: null
	},
	{
		category: 'ATK_ITEM',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K7Q4R0KWE9BSP5P70Z',
		index: 148,
		keyWords: 'stahl ice bomb,blue,atk item,148,30,hope recipes,bomb,ice bomb',
		level: 30,
		moduleId: 'item',
		name: 'Stahl Ice Bomb',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2KQW91AMQYRAJY8WYR5', name: 'Ice Bomb', table: 'item' }],
			contentText: ['Use ', 'keyMap-0']
		},
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['BOMB'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'GREEN',
		description: {
			hunt: ['Magic Book', 'Mini Demon Dragonaire', 'Magmacius.'],
			location: ['Waterside ruins', 'Fallen Palace', 'Forgotten Nursery.']
		},
		id: '01HVZGS2K8T4KG2BQ9P9TNGYAZ',
		index: 27,
		keyWords:
			'ancient pillar,green,material,27,21,ore,plant,magic book,mini demon dragonaire,magmacius.,waterside ruins,fallen palace,forgotten nursery.',
		level: 21,
		moduleId: 'item',
		name: 'Ancient Pillar',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ORE', 'PLANT'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'YELLOW',
		description: {
			hunt: ['Mini Demon', 'Ardra', 'Chimera Beast.'],
			location: ['Blessed Forest', 'Leaisure Plaza', 'Green Ruins', 'gate of trees.']
		},
		id: '01HVZGS2K80JM8045PC8QF0BD4',
		index: 60,
		keyWords:
			'beehive,yellow,material,60,9,ingredient,gunpowder,mini demon,ardra,chimera beast.,blessed forest,leaisure plaza,green ruins,gate of trees.',
		level: 9,
		moduleId: 'item',
		name: 'Beehive',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['INGREDIENT', 'GUNPOWDER'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'GREEN',
		description: {
			hunt: ['Kaiser Pengeon', 'Saber Claw', 'Gustaf', 'Fang.'],
			location: [],
			rumor: { id: '01HVZGS2KSHPWRRDHW7S2NQVC7', name: 'Vividly Colored Oil', table: 'rumor' }
		},
		id: '01HVZGS2K85S7HYMEZSG8G6G6W',
		index: 66,
		keyWords:
			'zafloa oil,green,material,66,13,fuel,secret of health,kaiser pengeon,saber claw,gustaf,fang.,vividly colored oil',
		level: 13,
		moduleId: 'item',
		name: 'Zafloa Oil',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['FUEL'],
		traitPresent: { id: '01HVZGS2M7CV2YQ2MDB0846NBP', name: 'Secret of Health', table: 'trait' }
	},
	{
		category: 'SYNTHESIS',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K8K5A2BY2V1WPB31W5',
		index: 456,
		keyWords: 'crimson stone,red,synthesis,456,42,mystery recipes,animal,gunpowder,elixir,neutralizer,magmacius',
		level: 42,
		moduleId: 'item',
		name: 'Crimson Stone',
		recipeIdea: { contentData: [{ content: 'Magmacius' }], contentText: ['Hunt ', 'keyMap-0'] },
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['ANIMAL', 'GUNPOWDER', 'ELIXIR', 'NEUTRALIZER'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K8Q5JPE5CYWKRBQ41Z',
		index: 436,
		keyWords: 'alchemic clay,white,synthesis,436,8,growth recipes,clay,elixir,fritz',
		level: 8,
		moduleId: 'item',
		name: 'Alchemic Clay',
		recipeIdea: { contentData: [{ content: 'Fritz' }], contentText: ['Talk to ', 'keyMap-0'] },
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['CLAY', 'ELIXIR'],
		traitPresent: null
	},
	{
		category: 'MACHINE',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K8F4M164RC3GS9VAH7',
		index: 513,
		keyWords: 'fairy cauldron,white,machine,513,23,dream recipes,important,fairy cauldron,forest of fairies',
		level: 23,
		moduleId: 'item',
		name: 'Fairy Cauldron',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2K8F4M164RC3GS9VAH7', name: 'Fairy Cauldron', table: 'item' },
				{ content: 'Forest of Fairies' }
			],
			contentText: ['Obtain ', 'keyMap-0', ' at the ', 'keyMap-1']
		},
		recipeType: 'DREAM_RECIPES',
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K8YP42KZMAZHS3PF92',
		index: 422,
		keyWords: 'neutralizer g,green,synthesis,422,2,growth recipes,neutralizer',
		level: 2,
		moduleId: 'item',
		name: 'Neutralizer G',
		recipeIdea: { contentData: [], contentText: ['Buy & Sell 300 Cole of Items'] },
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['NEUTRALIZER'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K826MGXF9K1ZFYFXY1',
		index: 442,
		keyWords: 'rubilium,red,synthesis,442,23,hope recipes,weapon mat,metal',
		level: 23,
		moduleId: 'item',
		name: 'Rubilium',
		recipeIdea: { contentData: [], contentText: ['Perform Synthesis & Get thanks gifts'] },
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['WEAPON_MAT', 'METAL'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K8BFWYQNCNFCZ5RJYX',
		index: 431,
		keyWords: 'zettel,red,synthesis,431,5,beginner recipes,paper,fuel,bookshelf,book shop',
		level: 5,
		moduleId: 'item',
		name: 'Zettel',
		recipeIdea: {
			contentData: [{ content: 'Bookshelf' }, { content: 'Book Shop' }],
			contentText: ['Investigate ', 'keyMap-0', ' in the ', 'keyMap-1']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['PAPER', 'FUEL'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'BLUE',
		description: {
			hunt: ['Living grimoire.'],
			location: ['Mountain Boundary', 'Underground Lake', 'Fallen Palace.']
		},
		id: '01HVZGS2K8C4FCC9FB94WE54PV',
		index: 30,
		keyWords:
			'night crystal,blue,material,30,29,ore,gem,absorbs light,living grimoire.,mountain boundary,underground lake,fallen palace.',
		level: 29,
		moduleId: 'item',
		name: 'Night Crystal',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ORE', 'GEM'],
		traitPresent: { id: '01HVZGS2M73QV9MSKM2EMNCJE8', name: 'Absorbs Light', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'BLUE',
		description: {
			hunt: [],
			location: ['Calm Banks', 'Underwater Lake.'],
			rumor: { id: '01HVZGS2KSX4XEAGTJDZDQY0BS', name: 'Pure and Clear Spring Water', table: 'rumor' }
		},
		id: '01HVZGS2K96WVEJYJD3BPE3ZR4',
		index: 43,
		keyWords: 'good water,blue,material,43,8,water,pure and clear spring water,calm banks,underwater lake.',
		level: 8,
		moduleId: 'item',
		name: 'Good Water',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WATER'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: {
			hunt: [
				'Forbidden Codex',
				'Lich Order',
				'Wise Spirit',
				'Rok',
				'twin Header',
				'Sorcer Titus',
				'Ifritter',
				'Tempestus',
				'Wind Elemental.'
			],
			location: ['Moon Sun Moor', 'Fallen Palace', 'Forgotten Nursery.']
		},
		id: '01HVZGS2K9HBGVS5EVG67ZKYKE',
		index: 76,
		keyWords:
			'rainbow crystal,white,material,76,25,gem,ore,secret power,forbidden codex,lich order,wise spirit,rok,twin header,sorcer titus,ifritter,tempestus,wind elemental.,moon sun moor,fallen palace,forgotten nursery.',
		level: 25,
		moduleId: 'item',
		name: 'Rainbow Crystal',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['GEM', 'ORE', 'SECRET_POWER'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'BLUE',
		description: {
			hunt: [],
			location: ['Forgotten Nursery', 'Sealed Temple', 'Soul Space.']
		},
		id: '01HVZGS2K9BX09SAW523PTCQH8',
		index: 87,
		keyWords: 'stinky fragment,blue,material,87,3,elixir,forgotten nursery,sealed temple,soul space.',
		level: 3,
		moduleId: 'item',
		name: 'Stinky Fragment',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ELIXIR'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K95Z9AXE93KV01Q97W',
		index: 585,
		keyWords: 'bright night,white,weapon,585,39,weapon',
		level: 39,
		moduleId: 'item',
		name: 'Bright Night',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K9Y3EHV1RXG54ZFS5J',
		index: 430,
		keyWords:
			'elixir base,red,synthesis,430,35,mystery recipes,medicine mat,poison mat,life powder skill,forest of fairies',
		level: 35,
		moduleId: 'item',
		name: 'Elixir Base',
		recipeIdea: {
			contentData: [{ content: 'Life Powder Skill' }, { content: 'Forest of Fairies' }],
			contentText: ['Getting Hit by ', 'keyMap-0', ' in Combat or Gather in ', 'keyMap-1', ' 5 times']
		},
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['MEDICINE_MAT', 'POISON_MAT'],
		traitPresent: null
	},
	{
		category: 'EXPLORATION',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KA1EHP1YVM7V5F2X7G',
		index: 369,
		keyWords: 'heart pendant,white,exploration,369,21,dream recipes,metal,bridge,waterside ruins',
		level: 21,
		moduleId: 'item',
		name: 'Heart Pendant',
		recipeIdea: {
			contentData: [{ content: 'Bridge' }, { content: 'Waterside Ruins' }],
			contentText: ['Investigate ', 'keyMap-0', ' at ', 'keyMap-1']
		},
		recipeType: 'DREAM_RECIPES',
		relatedCategories: ['METAL'],
		traitPresent: null
	},
	{
		category: 'EXPLORATION',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KAR1QDVHEY2KTQ982Y',
		index: 361,
		keyWords: 'mana feather,blue,exploration,361,11,beginner recipes,magic item,animal,kaiser pigeon',
		level: 11,
		moduleId: 'item',
		name: 'Mana Feather',
		recipeIdea: { contentData: [{ content: 'Kaiser Pigeon' }], contentText: ['Hunt ', 'keyMap-0'] },
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['MAGIC_ITEM', 'ANIMAL'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'BLUE',
		description: {
			hunt: ['Dragonaire', 'Magmacius.'],
			location: ['Dead Tree', 'Small Islet.']
		},
		id: '01HVZGS2KA5HQVQTB2YAC26SMY',
		index: 31,
		keyWords: 'shining ore,blue,material,31,34,ore,gem,dragonaire,magmacius.,dead tree,small islet.',
		level: 34,
		moduleId: 'item',
		name: 'Shining Ore',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ORE', 'GEM'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'YELLOW',
		description: {
			hunt: [
				'Mini Demon',
				'Ardra',
				'Chimera Beast',
				'Lightning',
				'Fang',
				'Twin Header',
				'Island Fish',
				'Single Horn.'
			],
			location: ['Open Ruins', 'Fungal Gardens', 'Husk Forest', 'Moon Sun Mor.']
		},
		id: '01HVZGS2KA5KP4FPSABM8HG159',
		index: 35,
		keyWords:
			'strong bone,yellow,material,35,6,animal,medicine mat,mini demon,ardra,chimera beast,lightning,fang,twin header,island fish,single horn.,open ruins,fungal gardens,husk forest,moon sun mor.',
		level: 6,
		moduleId: 'item',
		name: 'Strong Bone',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ANIMAL', 'MEDICINE_MAT'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'BLUE',
		description: {
			hunt: [],
			location: ['Calm Banks', 'Small Islet', "Prospector's Strand", 'Underground Lake.']
		},
		id: '01HVZGS2KA42T5QBPQ770F523M',
		index: 42,
		keyWords: "well water,blue,material,42,1,water,calm banks,small islet,prospector's strand,underground lake.",
		level: 1,
		moduleId: 'item',
		name: 'Well Water',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WATER'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'BLUE',
		description: {
			hunt: ['Black Puni', 'Kaiser Pigeon', 'Saber Claw', 'Gustaf', 'Lightning Silent Beast.'],
			location: ['Merbert Farm', 'Sealed Temple', 'Underground Lake', 'Scar of the land.']
		},
		id: '01HVZGS2KAWM5213T1FHXS3Y06',
		index: 72,
		keyWords:
			'blue steel stone,blue,material,72,26,gem,ore,black puni,kaiser pigeon,saber claw,gustaf,lightning silent beast.,merbert farm,sealed temple,underground lake,scar of the land.',
		level: 26,
		moduleId: 'item',
		name: 'Blue Steel Stone',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['GEM', 'ORE'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'RED',
		description: {
			hunt: ['Dragonaire', 'Magmacius', 'Sun Destroyer Yasuk', 'Moon Eater Durakk.'],
			location: []
		},
		id: '01HVZGS2KBNJXB1VGSD9V38TME',
		index: 80,
		keyWords:
			'dragon heart,red,material,80,40,gem,secret power,elixir,dragonaire,magmacius,sun destroyer yasuk,moon eater durakk.',
		level: 40,
		moduleId: 'item',
		name: 'Dragon Heart',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['GEM', 'SECRET_POWER', 'ELIXIR'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'YELLOW',
		description: {
			hunt: [],
			location: ['Moon Sun Mor', 'Fallen Palace', 'Soul Space.']
		},
		id: '01HVZGS2KB4EJQR5Y4NAJBP2YT',
		index: 85,
		keyWords: 'useless fragment,yellow,material,85,3,elixir,moon sun mor,fallen palace,soul space.',
		level: 3,
		moduleId: 'item',
		name: 'Useless Fragment',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ELIXIR'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'RED',
		description: { hunt: [], location: [], special: 'Obtain through event.' },
		id: '01HVZGS2KB38H058JN5SKR59WR',
		index: 91,
		keyWords: 'eternity scale,red,material,91,38,important,obtain through event.',
		level: 38,
		moduleId: 'item',
		name: 'Eternity Scale',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'MACHINE',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K8MFS5K7CDRDWWC4W9',
		index: 522,
		keyWords: 'eye of mercury,white,machine,522,18,hope recipes,magic item,story progress',
		level: 18,
		moduleId: 'item',
		name: 'Eye of Mercury',
		recipeIdea: { contentData: [{ content: 'Story Progress' }], contentText: ['Unlocked through ', 'keyMap-0'] },
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['MAGIC_ITEM'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K8MCZF1084404XRBYJ',
		index: 446,
		keyWords: 'mofcott,yellow,synthesis,446,12,growth recipes,armor mat,cloth,cloth,carries heat',
		level: 12,
		moduleId: 'item',
		name: 'Mofcott',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KFA88E23FANB0RFRVB', name: 'Cloth', table: 'item' },
				{ id: '01HVZGS2M9FNAP23BDPYNET84V', name: 'Carries Heat', table: 'trait' }
			],
			contentText: ['Synthesize ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['ARMOR_MAT', 'CLOTH'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K8K382M9D8AVC7BSST',
		index: 451,
		keyWords: 'snowflake crystal,blue,synthesis,451,28,hope recipes,metal,gem,silver crystal',
		level: 28,
		moduleId: 'item',
		name: 'Snowflake Crystal',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2KBQXK74RZS4GVG8BZC', name: 'Silver Crystal', table: 'item' }],
			contentText: ['Obtain ', 'keyMap-0']
		},
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['METAL', 'GEM'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K8N2DX6SRV4XZ85J4T',
		index: 425,
		keyWords: 'spirit tears,blue,synthesis,425,33,mystery recipes,water,secret power,small island,small islet',
		level: 33,
		moduleId: 'item',
		name: 'Spirit Tears',
		recipeIdea: {
			contentData: [{ content: 'Small Island' }, { content: 'Small Islet' }],
			contentText: ['Investigate the ', 'keyMap-0', ' at ', 'keyMap-1']
		},
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['WATER', 'SECRET_POWER'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'YELLOW',
		description: {
			hunt: [],
			location: [
				'Merbert Farm',
				'Three Bridge Spring',
				'Dead Tree Wasteland',
				'Waterside Ruins',
				'Prospectors Strand.'
			]
		},
		id: '01HVZGS2K8BARQ2MTNXF32S1XT',
		index: 22,
		keyWords:
			'fairy ball,yellow,material,22,3,clay,medicine mat,merbert farm,three bridge spring,dead tree wasteland,waterside ruins,prospectors strand.',
		level: 3,
		moduleId: 'item',
		name: 'Fairy Ball',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['CLAY', 'MEDICINE_MAT'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'YELLOW',
		description: {
			hunt: ['Kaiser Pigeon', 'Saber Claw', 'Gusaf', 'Fang.'],
			location: ['Flower Garden', 'Underground Lake', 'Forgotten Nursery', 'Sealed temple.']
		},
		id: '01HVZGS2K9HTC866GYAAVW5M72',
		index: 39,
		keyWords:
			'silver web,yellow,material,39,10,thread,kaiser pigeon,saber claw,gusaf,fang.,flower garden,underground lake,forgotten nursery,sealed temple.',
		level: 10,
		moduleId: 'item',
		name: 'Silver Web',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['THREAD'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: {
			hunt: ['Black Puni', 'Kaiser Pigeon', 'Saber Claw', 'Gustaf', 'Lightning Silent Beast', 'Isanasius.'],
			location: ['Underwater Lake.'],
			rumor: { id: '01HVZGS2KSDVGDK2EAE6H4FGZD', name: 'Chalk White Shell', table: 'rumor' }
		},
		id: '01HVZGS2K9KKQ0WB5ZMYQ1K60Q',
		index: 71,
		keyWords:
			'pelem shell,white,material,71,16,gem,medicine mat,medicine compound,black puni,kaiser pigeon,saber claw,gustaf,lightning silent beast,isanasius.,chalk white shell,underwater lake.',
		level: 16,
		moduleId: 'item',
		name: 'Pelem Shell',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['GEM', 'MEDICINE_MAT'],
		traitPresent: { id: '01HVZGS2M862VKQ22DH9QDHD9F', name: 'Medicine Compound', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: {
			hunt: ['Kimmoch', 'Nightshade', 'Sorcerer Titus', 'Light Elemental.'],
			location: []
		},
		id: '01HVZGS2K9RR4GR33D3TWPP3CE',
		index: 81,
		keyWords: 'forgotten wood,white,material,81,43,wood,kimmoch,nightshade,sorcerer titus,light elemental.',
		level: 43,
		moduleId: 'item',
		name: 'Forgotten Wood',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WOOD'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'RED',
		description: { hunt: [], location: ['Library of All Creation.'] },
		id: '01HVZGS2K9M5BC1NB783CGQ0XP',
		index: 93,
		keyWords: 'torn grimoire,red,material,93,25,magic item,fuel,paper,library of all creation.',
		level: 25,
		moduleId: 'item',
		name: 'Torn Grimoire',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['MAGIC_ITEM', 'FUEL', 'PAPER'],
		traitPresent: null
	},
	{
		category: 'ATK_ITEM',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2K98WVZBJG9CDPYEED8',
		index: 143,
		keyWords: 'bomb,red,atk item,143,10,beginner recipes,bomb,monsters,complete request',
		level: 10,
		moduleId: 'item',
		name: 'Bomb',
		recipeIdea: {
			contentData: [{ content: 'Monsters' }, { content: 'Complete Request' }],
			contentText: ['Hunt ', 'keyMap-0', ' & ', 'keyMap-1']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['BOMB'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KA4VM7S6557B9Q54JV',
		index: 437,
		keyWords: 'gold thread,yellow,synthesis,437,10,beginner recipes,thread,metal,silver web',
		level: 10,
		moduleId: 'item',
		name: 'Gold Thread',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2K9HTC866GYAAVW5M72', name: 'Silver Web', table: 'item' }],
			contentText: ['Obtain ', 'keyMap-0']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['THREAD', 'METAL'],
		traitPresent: null
	},
	{
		category: 'ATK_ITEM',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KAAPZ055P9GYKMCAV1',
		index: 149,
		keyWords: 'lightning crystal,green,atk item,149,35,dream recipes,bomb,night thunderstorm,prospectors strand',
		level: 35,
		moduleId: 'item',
		name: 'Lightning Crystal',
		recipeIdea: {
			contentData: [{ content: 'Night Thunderstorm' }, { content: 'Prospectors Strand' }],
			contentText: ['Encounter ', 'keyMap-0', ' at ', 'keyMap-1']
		},
		recipeType: 'DREAM_RECIPES',
		relatedCategories: ['BOMB'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: {
			hunt: ['Punipuni? Book familiar Tricker.'],
			location: ['Silent Lakeside', 'Sealed Temple', 'Fallen Palace', 'Soul Space.']
		},
		id: '01HVZGS2KAM29D1FXH5EG2HXCV',
		index: 28,
		keyWords:
			'smoldering stone,white,material,28,19,ore,clay,metal,punipuni? book familiar tricker.,silent lakeside,sealed temple,fallen palace,soul space.',
		level: 19,
		moduleId: 'item',
		name: 'Smoldering Stone',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ORE', 'CLAY', 'METAL'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: {
			hunt: ['Wind Elemental', 'Light Elemental.'],
			location: ['Scar of the land (Big Cystal).'],
			rumor: { id: '01HVZGS2KTZ9MZ81B9NHWRB7P8', name: 'Crystal Blessed by Spirits', table: 'rumor' }
		},
		id: '01HVZGS2KAY1PPHGEM02HD1KBK',
		index: 33,
		keyWords:
			'spirit crystal,white,material,33,39,ore,gem,elixir,secret power,wind elemental,light elemental.,crystal blessed by spirits,scar of the land (big cystal).',
		level: 39,
		moduleId: 'item',
		name: 'Spirit Crystal',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ORE', 'GEM', 'ELIXIR', 'SECRET_POWER'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'GREEN',
		description: {
			hunt: ['Island Fish', 'Signle Horn', 'Star Fish', 'Isanasius', 'Grand Ocean.'],
			location: []
		},
		id: '01HVZGS2KA7GFFSM6E9MVBH2K5',
		index: 36,
		keyWords:
			'island fish fin,green,material,36,14,animal,ingredient,medicine mat,stinks,island fish,signle horn,star fish,isanasius,grand ocean.',
		level: 14,
		moduleId: 'item',
		name: 'Island Fish Fin',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ANIMAL', 'INGREDIENT', 'MEDICINE_MAT'],
		traitPresent: { id: '01HVZGS2M9Y9N6T2228APAHP79', name: 'Stinks', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'RED',
		description: {
			hunt: ['White Root', 'Alraune', 'Kimmoch.'],
			location: ['Blessed Forest', 'Green Ruins', 'Puzzling Path', 'Sealed Temple.']
		},
		id: '01HVZGS2KA97AV6Y0FXEWZCSTY',
		index: 55,
		keyWords:
			'red uni,red,material,55,9,ingredient,plant,gunpowder,white root,alraune,kimmoch.,blessed forest,green ruins,puzzling path,sealed temple.',
		level: 9,
		moduleId: 'item',
		name: 'Red Uni',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['INGREDIENT', 'PLANT', 'GUNPOWDER'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'BLUE',
		description: {
			hunt: ['Magic book', 'Book of Familiar', 'Ghost', 'Scarlady', 'Gentle Phantom', 'Funny Face', 'Dark Maiden.'],
			location: ['Rocky Mountain', 'Mountain Boundary', 'Dead Tree Wasteland', 'Scard of the land.']
		},
		id: '01HVZGS2KA34EGPKAQRSB2X397',
		index: 75,
		keyWords:
			'crystal shard,blue,material,75,11,gem,ore,magic book,book of familiar,ghost,scarlady,gentle phantom,funny face,dark maiden.,rocky mountain,mountain boundary,dead tree wasteland,scard of the land.',
		level: 11,
		moduleId: 'item',
		name: 'Crystal Shard',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['GEM', 'ORE'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: {
			hunt: [
				'Wise Spirit',
				'Rok',
				'Twin Header',
				'Grand Ocean',
				'Sorcerer Titus',
				'Ifritter',
				'Tempestus',
				'Dragonaire',
				'Magmacius',
				'Light Elemental.'
			],
			location: []
		},
		id: '01HVZGS2KBBP3183E27SPJEQWC',
		index: 82,
		keyWords:
			'forgotten gem,white,material,82,40,gem,wise spirit,rok,twin header,grand ocean,sorcerer titus,ifritter,tempestus,dragonaire,magmacius,light elemental.',
		level: 40,
		moduleId: 'item',
		name: 'Forgotten Gem',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['GEM'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'GREEN',
		description: {
			hunt: [],
			location: ['Flower Garden Sealed Temple', 'Soul Space.']
		},
		id: '01HVZGS2KB5VJG1D9YETQSWDN6',
		index: 86,
		keyWords: 'burnt fragment,green,material,86,3,elixir,flower garden sealed temple,soul space.',
		level: 3,
		moduleId: 'item',
		name: 'Burnt Fragment',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ELIXIR'],
		traitPresent: null
	},
	{
		category: 'ATK_ITEM',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KBQ0QB54X1D6A40SNE',
		index: 145,
		keyWords: 'lightning bomb,green,atk item,145,14,beginner recipes,bomb,raiden ore',
		level: 14,
		moduleId: 'item',
		name: 'Lightning Bomb',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2K6QHA3YA17YTVTC9MN', name: 'Raiden Ore', table: 'item' }],
			contentText: ['Obtain ', 'keyMap-0']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['BOMB'],
		traitPresent: null
	},
	{
		category: 'HEAL_ITEM',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KBRGH5BRHJT887SP5H',
		index: 222,
		keyWords: 'sotea,blue,heal item,222,3,beginner recipes,food,sweets,well water',
		level: 3,
		moduleId: 'item',
		name: 'Sotea',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2KA42T5QBPQ770F523M', name: 'Well Water', table: 'item' }],
			contentText: ['Gather ', 'keyMap-0', ' From Outside well']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['FOOD', 'SWEETS'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'BLUE',
		description: {
			hunt: ['Sealed Demon Lord', 'Wind Elemental', 'Light Elemental.'],
			location: ['Fertile Shore', 'Underground Lake.']
		},
		id: '01HVZGS2KBQXK74RZS4GVG8BZC',
		index: 32,
		keyWords:
			'silver crystal,blue,material,32,28,ore,secret power,sealed demon lord,wind elemental,light elemental.,fertile shore,underground lake.',
		level: 28,
		moduleId: 'item',
		name: 'Silver Crystal',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ORE', 'SECRET_POWER'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'YELLOW',
		description: {
			hunt: ['Wise', 'Spirit', 'Rok', 'Twin Header', 'Sorcerer Titus', 'Ifritter', 'Tempestus', 'Wind Elemental.'],
			location: [],
			rumor: { id: '01HVZGS2KSXWCDVMEYTZT3XHJB', name: 'Golden Strong Thread', table: 'rumor' }
		},
		id: '01HVZGS2KB2NG0AMPBV162B9TN',
		index: 40,
		keyWords:
			'gold steel web,yellow,material,40,30,thread,cutting thread,wise,spirit,rok,twin header,sorcerer titus,ifritter,tempestus,wind elemental.,golden strong thread',
		level: 30,
		moduleId: 'item',
		name: 'Gold Steel Web',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['THREAD'],
		traitPresent: { id: '01HVZGS2M96WHBQ0TQM5E563JG', name: 'Cutting Thread', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'YELLOW',
		description: {
			hunt: ['Kaiser Pigeon', 'Saber Claw', 'Gustaf', 'Fang.'],
			location: ['Chickk Woods', 'Green RUins.'],
			rumor: { id: '01HVZGS2KRMSJPJWRWKMC32VG1', name: 'Strange Miniature Eggs', table: 'rumor' }
		},
		id: '01HVZGS2KBQ01S539V3CR07BXP',
		index: 61,
		keyWords:
			'unknown egg,yellow,material,61,17,ingredient,fuel,medicine mat,kaiser pigeon,saber claw,gustaf,fang.,strange miniature eggs,chickk woods,green ruins.',
		level: 17,
		moduleId: 'item',
		name: 'Unknown Egg',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['INGREDIENT', 'FUEL', 'MEDICINE_MAT'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'GREEN',
		description: { hunt: ['Haunt', 'Unliving King.'], location: [] },
		id: '01HVZGS2KB2H0VCTQWXB79P4AJ',
		index: 68,
		keyWords: 'high class talisman,green,material,68,17,paper,fuel,haunt,unliving king.',
		level: 17,
		moduleId: 'item',
		name: 'High Class Talisman',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['PAPER', 'FUEL'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KBWPXNNASAD8ZXAWHG',
		index: 599,
		keyWords: 'banisher,red,weapon,599,34,weapon',
		level: 34,
		moduleId: 'item',
		name: 'Banisher',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'ATK_ITEM',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KBACCP6NWZ2PX2AE71',
		index: 152,
		keyWords: 'flame of origin,white,atk item,152,50,dream recipes,bomb,magic item',
		level: 50,
		moduleId: 'item',
		name: 'Flame of Origin',
		recipeIdea: { contentData: [], contentText: ['Taking Damage from Combat'] },
		recipeType: 'DREAM_RECIPES',
		relatedCategories: ['BOMB', 'MAGIC_ITEM'],
		traitPresent: null
	},
	{
		category: 'ATK_ITEM',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KCH83WGQP1XQ9KQZG9',
		index: 147,
		keyWords: 'ori bomb,red,atk item,147,26,hope recipes,bomb,bomb,blue flames',
		level: 26,
		moduleId: 'item',
		name: 'Ori Bomb',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2K98WVZBJG9CDPYEED8', name: 'Bomb', table: 'item' },
				{ id: '01HVZGS2JAQ5CPCBR7NZTFZJJT', name: 'Blue Flames', table: 'effect' }
			],
			contentText: ['Synthesize ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['BOMB'],
		traitPresent: null
	},
	{
		category: 'ATK_ITEM',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KC2JSV34PCPED4ZX7P',
		index: 142,
		keyWords: 'uni bag,yellow,atk item,142,4,beginner recipes,bomb,uni',
		level: 4,
		moduleId: 'item',
		name: 'Uni Bag',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2KCK17H621GDG42RGYM', name: 'Uni', table: 'item' }],
			contentText: ['Gather ', 'keyMap-0']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['BOMB'],
		traitPresent: null
	},
	{
		category: 'ACCESSORY',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KCV5043N4WS8RCE1PA',
		index: 41,
		keyWords: 'time control hourglass,green,accessory,41,41,mystery recipes,accessory,clock,clock shop',
		level: 41,
		moduleId: 'item',
		name: 'Time Control Hourglass',
		recipeIdea: {
			contentData: [{ content: 'Clock' }, { content: 'Clock Shop' }],
			contentText: ['Investigate ', 'keyMap-0', ' at ', 'keyMap-1']
		},
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['ACCESSORY'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'BLUE',
		description: {
			hunt: ['Blue Puni', 'Green Puni', 'Red Puni', 'Gold Puni', 'Black Puni.'],
			location: []
		},
		id: '01HVZGS2KC2CNJB33F7G0NKQC6',
		index: 52,
		keyWords:
			'puniball,blue,material,52,4,ingredient,secret power,blue puni,green puni,red puni,gold puni,black puni.',
		level: 4,
		moduleId: 'item',
		name: 'Puniball',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['INGREDIENT', 'SECRET_POWER'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'YELLOW',
		description: {
			hunt: ['Madragora', 'Single Horn.'],
			location: ['Chick Woods', 'Blessed Forest', 'Green Ruins', 'Puzzling Path', 'Sealed Temple.'],
			rumor: { id: '01HVZGS2KSG618YGYMCPNAVGE9', name: 'Downpour of Uni', table: 'rumor' }
		},
		id: '01HVZGS2KCK17H621GDG42RGYM',
		index: 54,
		keyWords:
			'uni,yellow,material,54,2,ingredient,plant,madragora,single horn.,downpour of uni,chick woods,blessed forest,green ruins,puzzling path,sealed temple.',
		level: 2,
		moduleId: 'item',
		name: 'Uni',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['INGREDIENT', 'PLANT'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'RED',
		description: {
			hunt: ['Heavenly Bird', 'Draagonaire', 'Magmacius.'],
			location: ['Sun Moon Moor.'],
			rumor: { id: '01HVZGS2KV03V17E8DTXHYSBWZ', name: 'A Shattered Star?', table: 'rumor' }
		},
		id: '01HVZGS2KCRWBY5SG0GY8F30DP',
		index: 73,
		keyWords:
			'star powder,red,material,73,36,elixir,gunpowder,heavenly bird,draagonaire,magmacius.,a shattered star?,sun moon moor.',
		level: 36,
		moduleId: 'item',
		name: 'Star Powder',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ELIXIR', 'GUNPOWDER'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: {
			hunt: ['Wise Spirit', 'Rok', 'Twin header', 'Sorcerer Titus', 'ifritter', 'Tempestus.'],
			location: []
		},
		id: '01HVZGS2KC31Z4P5RCR2TWC7KC',
		index: 84,
		keyWords:
			'forgotten part,white,material,84,43,metal,wise spirit,rok,twin header,sorcerer titus,ifritter,tempestus.',
		level: 43,
		moduleId: 'item',
		name: 'Forgotten Part',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['METAL'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KCPMSM0KHJYRR5RXMH',
		index: 89,
		keyWords: 'failure ash,white,material,89,1,elixir,magic item',
		level: 1,
		moduleId: 'item',
		name: 'Failure Ash',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ELIXIR', 'MAGIC_ITEM'],
		traitPresent: null
	},
	{
		category: 'BUFF_ITEM',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KD802FVVJ9SHSASPMZ',
		index: 294,
		keyWords: 'fire dragon medicine,red,buff item,294,35,dream recipes,medicine,dragon bloodstone',
		level: 35,
		moduleId: 'item',
		name: 'Fire Dragon Medicine',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2KP8W3Y86W41BH4T5Q1', name: 'Dragon Bloodstone', table: 'item' }],
			contentText: ['Obtain ', 'keyMap-0']
		},
		recipeType: 'DREAM_RECIPES',
		relatedCategories: ['MEDICINE'],
		traitPresent: null
	},
	{
		category: 'HEAL_ITEM',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KDRNYFXQR75JSGFYKA',
		index: 223,
		keyWords:
			'puni jelly,blue,heal item,223,7,growth recipes,food,sweets,secret power,green puni,red puni,black puni',
		level: 7,
		moduleId: 'item',
		name: 'Puni Jelly',
		recipeIdea: {
			contentData: [{ content: 'Green Puni' }, { content: 'Red Puni' }, { content: 'Black Puni' }],
			contentText: ['Hunt ', 'keyMap-0', ', ', 'keyMap-1', ' & ', 'keyMap-2']
		},
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['FOOD', 'SWEETS', 'SECRET_POWER'],
		traitPresent: null
	},
	{
		category: 'ATK_ITEM',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KBXNR8Z6C7BSPW7YHN',
		index: 150,
		keyWords: 'puni missile,blue,atk item,150,20,growth recipes,bomb,puni press,puni monsters',
		level: 20,
		moduleId: 'item',
		name: 'Puni Missile',
		recipeIdea: {
			contentData: [{ content: 'Puni Press' }, { content: 'Puni Monsters' }],
			contentText: ['Get Hit by ', 'keyMap-0', ' Skill from any ', 'keyMap-1', ' in Combat']
		},
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['BOMB'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: {
			hunt: ['Heavenly Bird', 'Dragonaire', 'Magmacius.'],
			location: ['Mountain Boundary', 'Husk Forest', 'Scar of the land', 'Moon Sun Moor.']
		},
		id: '01HVZGS2KBZFW4NRRKW9W2AGBN',
		index: 29,
		keyWords:
			'fardenlite,white,material,29,25,ore,thread,heavenly bird,dragonaire,magmacius.,mountain boundary,husk forest,scar of the land,moon sun moor.',
		level: 25,
		moduleId: 'item',
		name: 'Fardenlite',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ORE', 'THREAD'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'RED',
		description: {
			hunt: ['Ardra', 'Kaiser Pigeon', 'Saber Claw', 'Gustaf', 'Rok', 'Heavenly bird.'],
			location: ['Blessed Forest', 'Liesure Plaza', 'Funal Garden', 'Enlightened Mountain.']
		},
		id: '01HVZGS2KBR1MRYVSXJ1S56CF9',
		index: 34,
		keyWords:
			'monster feather,red,material,34,4,animal,thread,ardra,kaiser pigeon,saber claw,gustaf,rok,heavenly bird.,blessed forest,liesure plaza,funal garden,enlightened mountain.',
		level: 4,
		moduleId: 'item',
		name: 'Monster Feather',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ANIMAL', 'THREAD'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'RED',
		description: {
			hunt: ['Dragonaire', 'Magmacius.'],
			location: ['Waterside Ruins', 'Sealed temple', 'Soul Space.']
		},
		id: '01HVZGS2KBYD348B5Y0EADRZAV',
		index: 46,
		keyWords:
			'nitro water,red,material,46,30,gunpowder,water,poison mat,dragonaire,magmacius.,waterside ruins,sealed temple,soul space.',
		level: 30,
		moduleId: 'item',
		name: 'Nitro Water',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['GUNPOWDER', 'WATER', 'POISON_MAT'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'GREEN',
		description: { hunt: ['Haunt', 'Unliving King.'], location: [] },
		id: '01HVZGS2KBFKM9402NBDXJTC57',
		index: 67,
		keyWords: 'church talisman,green,material,67,10,paper,fuel,haunt,unliving king.',
		level: 10,
		moduleId: 'item',
		name: 'Church Talisman',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['PAPER', 'FUEL'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'GREEN',
		description: { hunt: [], location: ['Library of All Creation.'] },
		id: '01HVZGS2KB2YJZCBRPSRM6CCAA',
		index: 94,
		keyWords: 'unknown knowledge scrap,green,material,94,21,paper,fuel,secret power,library of all creation.',
		level: 21,
		moduleId: 'item',
		name: 'Unknown Knowledge Scrap',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['PAPER', 'FUEL', 'SECRET_POWER'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KBV0G6F8PM542NSTT4',
		index: 605,
		keyWords: 'light of dawn,blue,weapon,605,45,weapon',
		level: 45,
		moduleId: 'item',
		name: 'Light of Dawn',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'HEAL_ITEM',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KC087VK1F14QPGF8C6',
		index: 220,
		keyWords: 'mystery elixir,white,heal item,220,50,mystery recipes,medicine,elixir,dunkelheit',
		level: 50,
		moduleId: 'item',
		name: 'Mystery Elixir',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2K647SF4SNQWM2Z6JMM', name: 'Dunkelheit', table: 'item' }],
			contentText: ['Obtain ', 'keyMap-0']
		},
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['MEDICINE', 'ELIXIR'],
		traitPresent: null
	},
	{
		category: 'BUFF_ITEM',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KCC6Q0W9RK6Z9RZ728',
		index: 291,
		keyWords: 'warding incense,green,buff item,291,40,hope recipes,medicine,julio',
		level: 40,
		moduleId: 'item',
		name: 'Warding Incense',
		recipeIdea: { contentData: [{ content: 'Julio' }], contentText: ['From ', 'keyMap-0', ' Events'] },
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['MEDICINE'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'BLUE',
		description: { hunt: [], location: ['Bought.'] },
		id: '01HVZGS2KCHE7N4G05V466BF0P',
		index: 44,
		keyWords: 'kirchen milk,blue,material,44,10,ingredient,water,kirchen bell special,bought.',
		level: 10,
		moduleId: 'item',
		name: 'Kirchen Milk',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['INGREDIENT', 'WATER'],
		traitPresent: { id: '01HVZGS2M7QQXE1TBN333GG697', name: 'Kirchen Bell Special', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: { hunt: ['Haunt Unliving King.'], location: [] },
		id: '01HVZGS2KCSK51ETKPCYXAXWNX',
		index: 51,
		keyWords: 'holy water,white,material,51,10,water,secret power,purifying water,haunt unliving king.',
		level: 10,
		moduleId: 'item',
		name: 'Holy Water',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WATER', 'SECRET_POWER'],
		traitPresent: { id: '01HVZGS2M7CK343AVS9HV2T5TJ', name: 'Purifying Water', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'YELLOW',
		description: {
			hunt: ['Blue Puni', 'Green Puni', 'Red Puni', 'Gold Puni', 'Punipuni? Super Puni', 'Admiral Puni.'],
			location: []
		},
		id: '01HVZGS2KC3GKEM3C7SGX06ZDM',
		index: 53,
		keyWords:
			'golden puniball,yellow,material,53,15,ingredient,secret power,golden radiance,blue puni,green puni,red puni,gold puni,punipuni? super puni,admiral puni.',
		level: 15,
		moduleId: 'item',
		name: 'Golden Puniball',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['INGREDIENT', 'SECRET_POWER'],
		traitPresent: { id: '01HVZGS2M9E2W0YRF26CPPWHZW', name: 'Golden Radiance', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'BLUE',
		description: {
			hunt: ['White Root', 'Alraune', 'Star fish.'],
			location: ['Open Ruins', 'Moon Sun Moor.'],
			rumor: { id: '01HVZGS2KSNHV6WR8JG711FEX2', name: 'Fruit that Gives Strength', table: 'rumor' }
		},
		id: '01HVZGS2KC53VKV9P269Y58AQP',
		index: 63,
		keyWords:
			'bursting berry,blue,material,63,11,ingredient,plant,special ingredient,white root,alraune,star fish.,fruit that gives strength,open ruins,moon sun moor.',
		level: 11,
		moduleId: 'item',
		name: 'Bursting Berry',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['INGREDIENT', 'PLANT'],
		traitPresent: { id: '01HVZGS2M9GNNJ5NV8WSPEPFJJ', name: 'Special Ingredient', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'RED',
		description: {
			hunt: ['Crimson Fang', 'Dragonaire', 'Magmacius.'],
			location: ['Sealed Temple', 'Moon Sun Moor.']
		},
		id: '01HVZGS2KC7HX94MB65PBH3EHK',
		index: 74,
		keyWords:
			'sun powder,red,material,74,37,elixir,gunpowder,crimson fang,dragonaire,magmacius.,sealed temple,moon sun moor.',
		level: 37,
		moduleId: 'item',
		name: 'Sun Powder',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ELIXIR', 'GUNPOWDER'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'RED',
		description: {
			hunt: ['Dragonaire', 'Magmacius.'],
			location: ['Small Islet', 'Fallen Palace', 'Soul Space.']
		},
		id: '01HVZGS2KC86ZRHDFPM8FR7ND9',
		index: 88,
		keyWords:
			'pretty fragment,red,material,88,3,elixir,magical slayer,dragonaire,magmacius.,small islet,fallen palace,soul space.',
		level: 3,
		moduleId: 'item',
		name: 'Pretty Fragment',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ELIXIR'],
		traitPresent: { id: '01HVZGS2M5XMF3RPQKM7PWEKVE', name: 'Magical Slayer', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'YELLOW',
		description: { hunt: [], location: ['Library of All Creation.'] },
		id: '01HVZGS2KCJDXWRCEETJ44FYJR',
		index: 95,
		keyWords: 'sealed knowledge scrap,yellow,material,95,21,paper,fuel,secret power,library of all creation.',
		level: 21,
		moduleId: 'item',
		name: 'Sealed Knowledge Scrap',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['PAPER', 'FUEL', 'SECRET_POWER'],
		traitPresent: null
	},
	{
		category: 'ATK_ITEM',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KDG7BAAR628G6TB73Q',
		index: 151,
		keyWords: "god's gift,yellow,atk item,151,47,dream recipes,bomb,magic item,silent bedroom,moon sun moor",
		level: 47,
		moduleId: 'item',
		name: "God's Gift",
		recipeIdea: {
			contentData: [{ content: 'Silent Bedroom' }, { content: 'Moon Sun Moor' }],
			contentText: ['Investigate ', 'keyMap-0', ' at ', 'keyMap-1']
		},
		recipeType: 'DREAM_RECIPES',
		relatedCategories: ['BOMB', 'MAGIC_ITEM'],
		traitPresent: null
	},
	{
		category: 'HEAL_ITEM',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KDJKYYEX0GHQ2F2NVN',
		index: 217,
		keyWords: 'refuel bottle,blue,heal item,217,10,growth recipes,medicine,pond,forgotten nursery',
		level: 10,
		moduleId: 'item',
		name: 'Refuel Bottle',
		recipeIdea: {
			contentData: [{ content: 'Pond' }, { content: 'Forgotten Nursery' }],
			contentText: ['Investigate ', 'keyMap-0', ' in ', 'keyMap-1']
		},
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['MEDICINE'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KD1VH4JVSN7H86EQSP',
		index: 601,
		keyWords: 'demon slayer,red,weapon,601,10,weapon',
		level: 10,
		moduleId: 'item',
		name: 'Demon Slayer',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KDY4R80RXE8BABB7T1',
		index: 609,
		keyWords: 'resplendent frost,blue,weapon,609,35,weapon',
		level: 35,
		moduleId: 'item',
		name: 'Resplendent Frost',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KDX16CW2QS4NFFBZF0',
		index: 615,
		keyWords: 'wild cat,blue,weapon,615,39,weapon',
		level: 39,
		moduleId: 'item',
		name: 'Wild Cat',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'HEAL_ITEM',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KDRJX0MYTKN2C4TPXY',
		index: 238,
		keyWords: 'supreme hot milk,blue,heal item,238,24,hope recipes,food,kirchen milk',
		level: 24,
		moduleId: 'item',
		name: 'Supreme Hot Milk',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2KCHE7N4G05V466BF0P', name: 'Kirchen Milk', table: 'item' }],
			contentText: ['Buy ', 'keyMap-0']
		},
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['FOOD'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KD7N299F9YPBT8F5Q2',
		index: 604,
		keyWords: 'true dark light,red,weapon,604,35,weapon',
		level: 35,
		moduleId: 'item',
		name: 'True Dark Light',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KDJ4CE4MEQJ880B1KW',
		index: 610,
		keyWords: 'devouring flame,red,weapon,610,38,weapon',
		level: 38,
		moduleId: 'item',
		name: 'Devouring Flame',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'HEAL_ITEM',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KDQ7A3RB5KSTGVHX83',
		index: 228,
		keyWords: 'bagel sandwich,red,heal item,228,9,beginner recipes,food,ramel flour',
		level: 9,
		moduleId: 'item',
		name: 'Bagel Sandwich',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2KFQ1D92SBMFY2SJSHB', name: 'Ramel Flour', table: 'item' }],
			contentText: ['Obtain or Synthesize ', 'keyMap-0']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['FOOD'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KDTE2RTTWE5WG9DSF0',
		index: 453,
		keyWords: 'dusk drop,red,synthesis,453,31,mystery recipes,poison mat,water,fuel,ore,yasuk,dorak',
		level: 31,
		moduleId: 'item',
		name: 'Dusk Drop',
		recipeIdea: {
			contentData: [{ content: 'Yasuk' }, { content: 'Dorak' }],
			contentText: ['Hunt ', 'keyMap-0', ' and ', 'keyMap-1']
		},
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['POISON_MAT', 'WATER', 'FUEL', 'ORE'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KDE8VR33NKN9MNP71T',
		index: 444,
		keyWords: 'harmonium,red,synthesis,444,35,mystery recipes,weapon mat,metal,spirit crystal',
		level: 35,
		moduleId: 'item',
		name: 'Harmonium',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2KAY1PPHGEM02HD1KBK', name: 'Spirit Crystal', table: 'item' }],
			contentText: ['Obtain ', 'keyMap-0']
		},
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['WEAPON_MAT', 'METAL'],
		traitPresent: null
	},
	{
		category: 'HEAL_ITEM',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KDJC7KDS5CRD24EAJ2',
		index: 227,
		keyWords: 'plain waffle,red,heal item,227,29,hope recipes,food,supreme hot milk,hot',
		level: 29,
		moduleId: 'item',
		name: 'Plain Waffle',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KDRJX0MYTKN2C4TPXY', name: 'Supreme Hot Milk', table: 'item' },
				{ id: '01HVZGS2JETZEWJS8D67EVHM5N', name: 'Hot', table: 'effect' }
			],
			contentText: ['Synthesize ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['FOOD'],
		traitPresent: null
	},
	{
		category: 'HEAL_ITEM',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KDEVFCVZTJ5VQ1PYQN',
		index: 221,
		keyWords: 'simple sweets,green,heal item,221,2,beginner recipes,food,sweets,ramel wheat',
		level: 2,
		moduleId: 'item',
		name: 'Simple Sweets',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2K7Z2CPXS4WAVQG5TEB', name: 'Ramel Wheat', table: 'item' }],
			contentText: ['Gather ', 'keyMap-0']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['FOOD', 'SWEETS'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KD7N1A473993ARXJG7',
		index: 577,
		keyWords: 'flourish heart,blue,weapon,577,14,weapon',
		level: 14,
		moduleId: 'item',
		name: 'Flourish Heart',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KENJEJMZYSANXQ3HXM',
		index: 593,
		keyWords: "heaven's shovel,red,weapon,593,23,weapon",
		level: 23,
		moduleId: 'item',
		name: "Heaven's Shovel",
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KEYSEMSP45YJJ3WWSH',
		index: 602,
		keyWords: 'dark light,green,weapon,602,18,weapon',
		level: 18,
		moduleId: 'item',
		name: 'Dark Light',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KEMNTS9XF74VA550ES',
		index: 689,
		keyWords: 'colorful vest,green,armor,689,34,armor',
		level: 34,
		moduleId: 'item',
		name: 'Colorful Vest',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KEHGH8V7Y02TZCPXZ4',
		index: 454,
		keyWords: 'crystal ball,yellow,synthesis,454,27,growth recipes,gem,secret power,street,night',
		level: 27,
		moduleId: 'item',
		name: 'Crystal Ball',
		recipeIdea: {
			contentData: [{ content: 'Street' }, { content: 'Night' }],
			contentText: ['Talk to the NPC at ', 'keyMap-0', ' at ', 'keyMap-1']
		},
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['GEM', 'SECRET_POWER'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KERB6YNGPFXPZ5TPTE',
		index: 443,
		keyWords: 'golt aizen,red,synthesis,443,29,dream recipes,weapon mat,metal,ingot,golden radiance',
		level: 29,
		moduleId: 'item',
		name: 'Golt Aizen',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KP1JJXGFJ67YYS0NHV', name: 'Ingot', table: 'item' },
				{ id: '01HVZGS2M9E2W0YRF26CPPWHZW', name: 'Golden Radiance', table: 'trait' }
			],
			contentText: ['Synthesize ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		recipeType: 'DREAM_RECIPES',
		relatedCategories: ['WEAPON_MAT', 'METAL'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KE5X71464PNPB6P7Z7',
		index: 432,
		keyWords: 'refresh oil,yellow,synthesis,432,7,growth recipes,fuel,water,ancient kitchen,forgotten nursery',
		level: 7,
		moduleId: 'item',
		name: 'Refresh Oil',
		recipeIdea: {
			contentData: [{ content: 'Ancient Kitchen' }, { content: 'Forgotten Nursery' }],
			contentText: ['Investigate ', 'keyMap-0', ' at ', 'keyMap-1']
		},
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['FUEL', 'WATER'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KDM2953YCG0X7EPJQG',
		index: 426,
		keyWords: 'apcol,yellow,synthesis,426,5,beginner recipes,ingredient,medicine mat,whimsy strawberry',
		level: 5,
		moduleId: 'item',
		name: 'Apcol',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2K6ZTMTTAKZVVY5T48Q', name: 'Whimsy Strawberry', table: 'item' }],
			contentText: ['Obtain ', 'keyMap-0']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['INGREDIENT', 'MEDICINE_MAT'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KDE3SHEAQ2X06R3PRR',
		index: 449,
		keyWords: 'fairheit,yellow,synthesis,449,31,dream recipes,armor mat,cloth,adal cloth,high class',
		level: 31,
		moduleId: 'item',
		name: 'Fairheit',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KN6VX1DKMSA195TCWN', name: 'Adal Cloth', table: 'item' },
				{ id: '01HVZGS2KVN95YF4A0QNJ35A22', name: 'High Class', table: 'trait' }
			],
			contentText: ['Synthesize ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		recipeType: 'DREAM_RECIPES',
		relatedCategories: ['ARMOR_MAT', 'CLOTH'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KDF3PPDN63TEF50WDF',
		index: 423,
		keyWords: 'neutralizer y,yellow,synthesis,423,2,growth recipes,neutralizer,monsters',
		level: 2,
		moduleId: 'item',
		name: 'Neutralizer Y',
		recipeIdea: { contentData: [{ content: 'Monsters' }], contentText: ['Exploration and Hunting ', 'keyMap-0'] },
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['NEUTRALIZER'],
		traitPresent: null
	},
	{
		category: 'MACHINE',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KD3TY7M1PW8CAWPS6V',
		index: 510,
		keyWords: 'practice cauldron,white,machine,510,4,growth recipes,important,practice cauldron,cory',
		level: 4,
		moduleId: 'item',
		name: 'Practice Cauldron',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KD3TY7M1PW8CAWPS6V', name: 'Practice Cauldron', table: 'item' },
				{ content: 'Cory' }
			],
			contentText: ['Buy ', 'keyMap-0', ' from ', 'keyMap-1']
		},
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'EXPLORATION',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KDHVZE5X31AB9MHH1D',
		index: 367,
		keyWords: 'training charm,green,exploration,367,17,hope recipes,magic item,furnace,blacksmith',
		level: 17,
		moduleId: 'item',
		name: 'Training Charm',
		recipeIdea: {
			contentData: [{ content: 'Furnace' }, { content: 'Blacksmith' }],
			contentText: ['Investigate the ', 'keyMap-0', ' at the ', 'keyMap-1']
		},
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['MAGIC_ITEM'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KD6WJ4KSY59BJ8GWDZ',
		index: 586,
		keyWords: 'formal rapier,blue,weapon,586,8,weapon',
		level: 8,
		moduleId: 'item',
		name: 'Formal Rapier',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KEJDD37V631TR0696E',
		index: 595,
		keyWords: 'bountiful harvester,green,weapon,595,43,weapon',
		level: 43,
		moduleId: 'item',
		name: 'Bountiful Harvester',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KE873WGE8TBTPRMYFE',
		index: 606,
		keyWords: 'steel gauntlet,red,weapon,606,9,weapon',
		level: 9,
		moduleId: 'item',
		name: 'Steel Gauntlet',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KEKRK02ASPSFGH7883',
		index: 695,
		keyWords: 'reactive coat,blue,armor,695,25,armor',
		level: 25,
		moduleId: 'item',
		name: 'Reactive Coat',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KE8V5B6RT0V8T9PYG7',
		index: 435,
		keyWords: 'geist aizen,white,synthesis,435,29,dream recipes,metal,secret power,prayerless altar,small islet',
		level: 29,
		moduleId: 'item',
		name: 'Geist Aizen',
		recipeIdea: {
			contentData: [{ content: 'Prayerless Altar' }, { content: 'Small Islet' }],
			contentText: ['Investigate ', 'keyMap-0', ' at ', 'keyMap-1']
		},
		recipeType: 'DREAM_RECIPES',
		relatedCategories: ['METAL', 'SECRET_POWER'],
		traitPresent: null
	},
	{
		category: 'MACHINE',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KE4Z1ZGRKR23T9CHE3',
		index: 517,
		keyWords:
			'miraculous cauldron,white,machine,517,50,mystery recipes,important,miraculous cauldron,final area of dlc map',
		level: 50,
		moduleId: 'item',
		name: 'Miraculous Cauldron',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KE4Z1ZGRKR23T9CHE3', name: 'Miraculous Cauldron', table: 'item' },
				{ content: 'Final Area of DLC map' }
			],
			contentText: ['Obtain ', 'keyMap-0', ' at ', 'keyMap-1']
		},
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KEXT8YBPDR1R61C0Y3',
		index: 424,
		keyWords: 'pure water,blue,synthesis,424,20,hope recipes,water,luminous water',
		level: 20,
		moduleId: 'item',
		name: 'Pure Water',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2K6K0P7H7FP537SZGZC', name: 'Luminous Water', table: 'item' }],
			contentText: ['Gather ', 'keyMap-0']
		},
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['WATER'],
		traitPresent: null
	},
	{
		category: 'EXPLORATION',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KE4GTFV98NGNSQ05XV',
		index: 366,
		keyWords: "victor's charm,red,exploration,366,12,beginner recipes,magic item",
		level: 12,
		moduleId: 'item',
		name: "Victor's Charm",
		recipeIdea: { contentData: [], contentText: ['Win A Battle at Low HP'] },
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['MAGIC_ITEM'],
		traitPresent: null
	},
	{
		category: 'EXPLORATION',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KE411SDKV0NA7PTCHS',
		index: 356,
		keyWords: 'wonder stimulant,green,exploration,356,9,growth recipes,medicine,medicine,size+',
		level: 9,
		moduleId: 'item',
		name: 'Wonder Stimulant',
		recipeIdea: {
			contentData: [
				{ searchQuery: { relatedCategory: 'MEDICINE' }, table: 'item' },
				{ id: '01HVZGS2M8P9FTPMTFJM9RCWFW', name: 'Size+', table: 'trait' }
			],
			contentText: ['Synthesize ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['MEDICINE'],
		traitPresent: null
	},
	{
		category: 'EXPLORATION',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KEXQCS21TKYR73RZCR',
		index: 365,
		keyWords: 'gathering gloves,blue,exploration,365,16,cloth',
		level: 16,
		moduleId: 'item',
		name: 'Gathering Gloves',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['CLOTH'],
		traitPresent: null
	},
	{
		category: 'EXPLORATION',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KEBD09Z37H43FNR4TS',
		index: 360,
		keyWords: 'clear drops,blue,exploration,360,20,hope recipes,magic item,alchemy drops,super sweet',
		level: 20,
		moduleId: 'item',
		name: 'Clear Drops',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KNP9012JQBRW527XY5', name: 'Alchemy Drops', table: 'item' },
				{ id: '01HVZGS2JK1R6D756HBK6CXFCY', name: 'Super Sweet', table: 'effect' }
			],
			contentText: ['Synthesize ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['MAGIC_ITEM'],
		traitPresent: null
	},
	{
		category: 'EXPLORATION',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KE2N3J0A8T5CNWY4ZE',
		index: 363,
		keyWords: 'deluxe backpack,yellow,exploration,363,22,growth recipes,cloth',
		level: 22,
		moduleId: 'item',
		name: 'Deluxe Backpack',
		recipeIdea: { contentData: [], contentText: ['Gathering 10 Items continuously'] },
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['CLOTH'],
		traitPresent: null
	},
	{
		category: 'EXPLORATION',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KECHTQD55ZT7XV8MHP',
		index: 364,
		keyWords: 'emergency bag,yellow,exploration,364,20,dream recipes,magic item',
		level: 20,
		moduleId: 'item',
		name: 'Emergency Bag',
		recipeIdea: { contentData: [], contentText: ['Run away from Combat'] },
		recipeType: 'DREAM_RECIPES',
		relatedCategories: ['MAGIC_ITEM'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KFS54ZCZKAG44J0S9S',
		index: 433,
		keyWords: 'flame powder,red,synthesis,433,25,hope recipes,gunpowder,black orb',
		level: 25,
		moduleId: 'item',
		name: 'Flame Powder',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2KPF12ACDFG3RXVBT6Y', name: 'Black Orb', table: 'item' }],
			contentText: ['Obtain ', 'keyMap-0']
		},
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['GUNPOWDER'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KF9T2DRT9C84XK5YK0',
		index: 579,
		keyWords: 'prosper heart,yellow,weapon,579,32,weapon',
		level: 32,
		moduleId: 'item',
		name: 'Prosper Heart',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KF4QW0MEBCM5V6GXMT',
		index: 582,
		keyWords: 'aura bangle,blue,weapon,582,15,weapon',
		level: 15,
		moduleId: 'item',
		name: 'Aura Bangle',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KFX118CB9ZB0A6J7G0',
		index: 590,
		keyWords: "monika's estoc,white,weapon,590,40,weapon",
		level: 40,
		moduleId: 'item',
		name: "Monika's Estoc",
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KFYF3CWNYBZ1EHTVB9',
		index: 594,
		keyWords: 'shovel of hope,yellow,weapon,594,33,weapon',
		level: 33,
		moduleId: 'item',
		name: 'Shovel of Hope',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KFA88E23FANB0RFRVB',
		index: 445,
		keyWords: 'cloth,yellow,synthesis,445,8,beginner recipes,armor mat,cloth,animal fur',
		level: 8,
		moduleId: 'item',
		name: 'Cloth',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2K8P8HBB57X6VN5JGSM', name: 'Animal Fur', table: 'item' }],
			contentText: ['Gather ', 'keyMap-0']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['ARMOR_MAT', 'CLOTH'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KFMWWQVCWRJF29PGK9',
		index: 421,
		keyWords: 'neutralizer b,blue,synthesis,421,2,beginner recipes,neutralizer,fountain,plaza',
		level: 2,
		moduleId: 'item',
		name: 'Neutralizer B',
		recipeIdea: {
			contentData: [{ content: 'Fountain' }, { content: 'Plaza' }],
			contentText: ['Investigate ', 'keyMap-0', ' at the ', 'keyMap-1']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['NEUTRALIZER'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KFQ1D92SBMFY2SJSHB',
		index: 427,
		keyWords: 'ramel flour,red,synthesis,427,3,beginner recipes,ingredient,gunpowder,south wheat field,merbert farm',
		level: 3,
		moduleId: 'item',
		name: 'Ramel Flour',
		recipeIdea: {
			contentData: [{ content: 'South Wheat Field' }, { content: 'Merbert Farm' }],
			contentText: ['Investigate ', 'keyMap-0', ' at ', 'keyMap-1']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['INGREDIENT', 'GUNPOWDER'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KFARFBGTT897EYBTCN',
		index: 438,
		keyWords: 'spruce,green,synthesis,438,9,beginner recipes,wood,kifa',
		level: 9,
		moduleId: 'item',
		name: 'Spruce',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2K5M0TE6KD692V38Y5D', name: 'Kifa', table: 'item' }],
			contentText: ['Gather ', 'keyMap-0']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['WOOD'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KGDDH8QWW49FRB29CE',
		index: 600,
		keyWords: 'evandeit,yellow,weapon,600,44,weapon',
		level: 44,
		moduleId: 'item',
		name: 'Evandeit',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'KEY_ITEM',
		color: 'WHITE',
		description: { hunt: [], location: [], special: 'Obtain through event.' },
		id: '01HVZGS2KG4XY3R715MTG9CQBE',
		index: 837,
		keyWords: 'date ticket,white,key item,837,1,important,obtain through event.',
		level: 1,
		moduleId: 'item',
		name: 'Date Ticket',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'BOOK',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KGY4RHGC0KH3CQ7R3S',
		index: 894,
		keyWords: "alchemist's book,red,book,894,28,important",
		level: 28,
		moduleId: 'item',
		name: "Alchemist's Book",
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'ACCESSORY',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KGFR8WZGRBEGAPBESR',
		index: 765,
		keyWords: 'ambrosia garland,green,accessory,765,40,mystery recipes,accessory,dark maiden',
		level: 40,
		moduleId: 'item',
		name: 'Ambrosia Garland',
		recipeIdea: { contentData: [{ content: 'Dark Maiden' }], contentText: ['Hunt ', 'keyMap-0'] },
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['ACCESSORY'],
		traitPresent: null
	},
	{
		category: 'ACCESSORY',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KGRTM61BVXKVSV7G30',
		index: 774,
		keyWords: 'gunade ring,blue,accessory,774,30,hope recipes,accessory,gunade ring,tess',
		level: 30,
		moduleId: 'item',
		name: 'Gunade Ring',
		recipeIdea: {
			contentData: [{ content: 'Gunade Ring' }, { content: 'Tess' }],
			contentText: ['Buy ', 'keyMap-0', ' from ', 'keyMap-1']
		},
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['ACCESSORY'],
		traitPresent: null
	},
	{
		category: 'MACHINE',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KG07N3FMACHR0NGQV1',
		index: 509,
		keyWords: "grandma's cauldron,white,machine,509,4,beginner recipes,important,ice bomb",
		level: 4,
		moduleId: 'item',
		name: "Grandma's Cauldron",
		recipeIdea: {
			contentData: [{ id: '01HVZGS2KQW91AMQYRAJY8WYR5', name: 'Ice Bomb', table: 'item' }],
			contentText: ['Synthesize ', 'keyMap-0']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KG5E52GYS7ZDCMA72G',
		index: 830,
		keyWords: 'hexe auris,white,synthesis,830,46,hope recipes,metal,magic item,story progress',
		level: 46,
		moduleId: 'item',
		name: 'Hexe Auris',
		recipeIdea: { contentData: [{ content: 'Story Progress' }], contentText: ['Unlocked through ', 'keyMap-0'] },
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['METAL', 'MAGIC_ITEM'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KGFTSEHJ98WHWRGMXX',
		index: 452,
		keyWords: 'noble sapphire,blue,synthesis,452,25,hope recipes,gem,accessory',
		level: 25,
		moduleId: 'item',
		name: 'Noble Sapphire',
		recipeIdea: {
			contentData: [{ searchQuery: { relatedCategory: 'ACCESSORY' }, table: 'item' }],
			contentText: ['Synthesize ', 'keyMap-0']
		},
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['GEM'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KG12B95JKT0NGPXF78',
		index: 461,
		keyWords: 'precise parts,white,synthesis,461,24,hope recipes,metal,cory',
		level: 24,
		moduleId: 'item',
		name: 'Precise Parts',
		recipeIdea: { contentData: [{ content: 'Cory' }], contentText: ['From ', 'keyMap-0', ' Events'] },
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['METAL'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KG95E99FBFKXYZTZHD',
		index: 583,
		keyWords: 'cosmo caller,red,weapon,583,25,weapon',
		level: 25,
		moduleId: 'item',
		name: 'Cosmo Caller',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KHAARVYP1ZZ6HS7PHQ',
		index: 587,
		keyWords: 'brave rapier,green,weapon,587,18,weapon',
		level: 18,
		moduleId: 'item',
		name: 'Brave Rapier',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KHK0RX3T2AKXSEXJ5Y',
		index: 592,
		keyWords: 'idle shovel,blue,weapon,592,13,weapon',
		level: 13,
		moduleId: 'item',
		name: 'Idle Shovel',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KHQ7BN0PPKABY615TZ',
		index: 597,
		keyWords: 'breaker,red,weapon,597,18,weapon',
		level: 18,
		moduleId: 'item',
		name: 'Breaker',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KHKFF82YP4TBE3Z6WD',
		index: 603,
		keyWords: 'demon god slayer,blue,weapon,603,25,weapon',
		level: 25,
		moduleId: 'item',
		name: 'Demon God Slayer',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KH857WBHEYQDT76FDP',
		index: 611,
		keyWords: 'metal bullets,red,weapon,611,8,weapon',
		level: 8,
		moduleId: 'item',
		name: 'Metal Bullets',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KHX1MHAVC3XEN51AXE',
		index: 617,
		keyWords: 'madcat spear,yellow,weapon,617,18,weapon',
		level: 18,
		moduleId: 'item',
		name: 'Madcat Spear',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KF5Y9B8KMYX0V144WR',
		index: 581,
		keyWords: 'moon caller,yellow,weapon,581,7,weapon',
		level: 7,
		moduleId: 'item',
		name: 'Moon Caller',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KFF7WH1K437MP4086G',
		index: 589,
		keyWords: "hero's rapier,blue,weapon,589,34,weapon",
		level: 34,
		moduleId: 'item',
		name: "Hero's Rapier",
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KFE1A0KKQ2RM707ZGF',
		index: 591,
		keyWords: 'earth shovel,yellow,weapon,591,5,weapon',
		level: 5,
		moduleId: 'item',
		name: 'Earth Shovel',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KFQNHTA0ZMEWEN8P90',
		index: 690,
		keyWords: 'aegis jacket,red,armor,690,38,armor',
		level: 38,
		moduleId: 'item',
		name: 'Aegis Jacket',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'MACHINE',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KFYAECRXTHE2ND2PXH',
		index: 512,
		keyWords:
			'expert cauldron,white,machine,512,17,growth recipes,important,expert cauldron,silent bedroom,sun moon mor',
		level: 17,
		moduleId: 'item',
		name: 'Expert Cauldron',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KFYAECRXTHE2ND2PXH', name: 'Expert Cauldron', table: 'item' },
				{ content: 'Silent Bedroom' },
				{ content: 'Sun Moon Mor' }
			],
			contentText: ['Obtain ', 'keyMap-0', ' in ', 'keyMap-1', ' at ', 'keyMap-2']
		},
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KFCEBRNSRKXTK89NR5',
		index: 441,
		keyWords: 'silvalia,red,synthesis,441,14,growth recipes,weapon mat,metal,monsters,weapons',
		level: 14,
		moduleId: 'item',
		name: 'Silvalia',
		recipeIdea: {
			contentData: [{ content: 'Monsters' }, { content: 'Weapons' }],
			contentText: ['Hunting ', 'keyMap-0', ' & Crafting ', 'keyMap-1']
		},
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['WEAPON_MAT', 'METAL'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KFHE4TVFBJX68BN295',
		index: 458,
		keyWords: 'sun drop,red,synthesis,458,40,mystery recipes,secret power,fuel,medicine mat,neutralizer,monika',
		level: 40,
		moduleId: 'item',
		name: 'Sun Drop',
		recipeIdea: { contentData: [{ content: 'Monika' }], contentText: ['From ', 'keyMap-0', ' Quest'] },
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['SECRET_POWER', 'FUEL', 'MEDICINE_MAT', 'NEUTRALIZER'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KGV4QFVEY50MB342YX',
		index: 450,
		keyWords: 'velvetis,yellow,synthesis,450,37,mystery recipes,armor mat,cloth,rainbow puni fluid',
		level: 37,
		moduleId: 'item',
		name: 'Velvetis',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2KPH4867XKYRXB43M3B', name: 'Rainbow Puni Fluid', table: 'item' }],
			contentText: ['Obtain ', 'keyMap-0']
		},
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['ARMOR_MAT', 'CLOTH'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KGKWCK3P6WME4032Y8',
		index: 703,
		keyWords: 'full metal shirt,red,armor,703,35,armor',
		level: 35,
		moduleId: 'item',
		name: 'Full Metal Shirt',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'KEY_ITEM',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KG01PGC4PQF2F5NZG6',
		index: 842,
		keyWords: 'old clothing,white,key item,842,1,important',
		level: 1,
		moduleId: 'item',
		name: 'Old Clothing',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'ACCESSORY',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KGY1CGDFW34PG0KEBS',
		index: 773,
		keyWords: 'element guard,green,accessory,773,38,mystery recipes,accessory,sophie,positive release',
		level: 38,
		moduleId: 'item',
		name: 'Element Guard',
		recipeIdea: {
			contentData: [{ content: 'Sophie' }, { content: 'Positive Release' }],
			contentText: ['Use ', 'keyMap-0', "'s Special Guard Skill ", 'keyMap-1']
		},
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['ACCESSORY'],
		traitPresent: null
	},
	{
		category: 'BOOK',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KG4ER59R88Z5YDDC55',
		index: 887,
		keyWords: 'gathering buddy,red,book,887,8,growth recipes,important,story progress',
		level: 8,
		moduleId: 'item',
		name: 'Gathering Buddy',
		recipeIdea: { contentData: [{ content: 'Story Progress' }], contentText: ['Unlocked through ', 'keyMap-0'] },
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'MACHINE',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KGQB4BCRW2MMS42N3R',
		index: 516,
		keyWords: "hermit's cauldron,white,machine,516,32,hope recipes,important,hermit's cauldron,tess",
		level: 32,
		moduleId: 'item',
		name: "Hermit's Cauldron",
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KGQB4BCRW2MMS42N3R', name: "Hermit's Cauldron", table: 'item' },
				{ content: 'Tess' }
			],
			contentText: ['Buy ', 'keyMap-0', ' from ', 'keyMap-1']
		},
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KG0YS08116GKRZ9MPE',
		index: 845,
		keyWords: 'corneria doll,white,synthesis,845,1,mystery recipes,cloth,secret power,story progress',
		level: 1,
		moduleId: 'item',
		name: 'Corneria Doll',
		recipeIdea: { contentData: [{ content: 'Story Progress' }], contentText: ['Unlocked through ', 'keyMap-0'] },
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['CLOTH', 'SECRET_POWER'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KGBC6EF5XB2FR957WS',
		index: 829,
		keyWords: 'key of truth,white,synthesis,829,41,mystery recipes,important,story progress',
		level: 41,
		moduleId: 'item',
		name: 'Key of Truth',
		recipeIdea: { contentData: [{ content: 'Story Progress' }], contentText: ['Unlocked through ', 'keyMap-0'] },
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KG0RG8M1JFK8066EEJ',
		index: 457,
		keyWords:
			'philosopher stone,white,synthesis,457,59,mystery recipes,metal,medicine mat,elixir,secret power,synthesis level',
		level: 59,
		moduleId: 'item',
		name: 'Philosopher Stone',
		recipeIdea: { contentData: [{ content: 'Synthesis Level' }], contentText: ['Raise ', 'keyMap-0', ' to 45'] },
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['METAL', 'MEDICINE_MAT', 'ELIXIR', 'SECRET_POWER'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KGR7S31H5AWZV367PQ',
		index: 576,
		keyWords: 'starting staff,green,weapon,576,6,weapon',
		level: 6,
		moduleId: 'item',
		name: 'Starting Staff',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KG4ZN39YVFSWJWF3XR',
		index: 584,
		keyWords: 'arch bangle,green,weapon,584,34,weapon',
		level: 34,
		moduleId: 'item',
		name: 'Arch Bangle',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KH7X6CDCS8TKBM7HB9',
		index: 588,
		keyWords: "knight's rapier,red,weapon,588,28,weapon",
		level: 28,
		moduleId: 'item',
		name: "Knight's Rapier",
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KHE5SMNDYKX65SGXXF',
		index: 596,
		keyWords: 'knight blade,white,weapon,596,9,weapon',
		level: 9,
		moduleId: 'item',
		name: 'Knight Blade',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KH0HEAH4NQ085BS419',
		index: 598,
		keyWords: 'paladin blade,blue,weapon,598,24,weapon',
		level: 24,
		moduleId: 'item',
		name: 'Paladin Blade',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KHTGHXJZ8BQWBCW9C1',
		index: 608,
		keyWords: 'puni gauntlet,blue,weapon,608,26,weapon',
		level: 26,
		moduleId: 'item',
		name: 'Puni Gauntlet',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KHGWE184CNZDR747J9',
		index: 616,
		keyWords: "maiden's spear,blue,weapon,616,10,weapon",
		level: 10,
		moduleId: 'item',
		name: "Maiden's Spear",
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KH1Q77A4T85G2WDKV1',
		index: 618,
		keyWords: "lady's spear,green,weapon,618,24,weapon",
		level: 24,
		moduleId: 'item',
		name: "Lady's Spear",
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KHZ6TDWNHZFETXKVCS',
		index: 691,
		keyWords: 'alchemy vest,blue,armor,691,43,armor',
		level: 43,
		moduleId: 'item',
		name: 'Alchemy Vest',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KHXWM16WEVQ7JDNVNP',
		index: 698,
		keyWords: 'first shirt,green,armor,698,3,armor',
		level: 3,
		moduleId: 'item',
		name: 'First Shirt',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KJNV84XW8RB094A8GS',
		index: 707,
		keyWords: 'tight shirt,blue,armor,707,32,armor',
		level: 32,
		moduleId: 'item',
		name: 'Tight Shirt',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KJSY6GMKDS62PD0WSE',
		index: 607,
		keyWords: 'roaring thunder,green,weapon,607,19,weapon',
		level: 19,
		moduleId: 'item',
		name: 'Roaring Thunder',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KJ57TRYFZTF120A38Z',
		index: 613,
		keyWords: 'crystal bullets,blue,weapon,613,24,weapon',
		level: 24,
		moduleId: 'item',
		name: 'Crystal Bullets',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KJDA066TJTYH84Q05J',
		index: 687,
		keyWords: 'plate vest,red,armor,687,11,armor',
		level: 11,
		moduleId: 'item',
		name: 'Plate Vest',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KJV2BNZYWSZBX4M1AX',
		index: 694,
		keyWords: 'farden coat,green,armor,694,19,armor',
		level: 19,
		moduleId: 'item',
		name: 'Farden Coat',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: { hunt: [], location: [], special: 'Obtain through event.' },
		id: '01HVZGS2KKZ68TDGVGN4AARJH5',
		index: 827,
		keyWords: 'soul stone,white,material,827,12,important,obtain through event.',
		level: 12,
		moduleId: 'item',
		name: 'Soul Stone',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'BOOK',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KKP64J95PC5MKQSC9Z',
		index: 888,
		keyWords: 'eternal brilliance,green,book,888,10,important',
		level: 10,
		moduleId: 'item',
		name: 'Eternal Brilliance',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'KEY_ITEM',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KKDBAQJMQK9DSKJYYR',
		index: 840,
		keyWords: 'atelier tent,white,key item,840,40,mystery recipes,important,story progress',
		level: 40,
		moduleId: 'item',
		name: 'Atelier Tent',
		recipeIdea: { contentData: [{ content: 'Story Progress' }], contentText: ['Unlocked through ', 'keyMap-0'] },
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'ACCESSORY',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KK204MA81EE6GZFTWE',
		index: 767,
		keyWords: "mind's eye monocle,green,accessory,767,23,dream recipes,accessory,weak",
		level: 23,
		moduleId: 'item',
		name: "Mind's Eye Monocle",
		recipeIdea: {
			contentData: [{ content: 'Weak' }],
			contentText: ['Inflict ', 'keyMap-0', ' on Enemies in Combat']
		},
		recipeType: 'DREAM_RECIPES',
		relatedCategories: ['ACCESSORY'],
		traitPresent: null
	},
	{
		category: 'ACCESSORY',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KKAJC237WJ85W16C1S',
		index: 761,
		keyWords: 'white-hot headband,red,accessory,761,27,dream recipes,accessory,really strong monsters',
		level: 27,
		moduleId: 'item',
		name: 'White-Hot Headband',
		recipeIdea: { contentData: [{ content: 'Really Strong Monsters' }], contentText: ['Hunt ', 'keyMap-0'] },
		recipeType: 'DREAM_RECIPES',
		relatedCategories: ['ACCESSORY'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KKM2JQ7W43A7KNXY96',
		index: 686,
		keyWords: "traveler's vest,green,armor,686,6,armor",
		level: 6,
		moduleId: 'item',
		name: "Traveler's Vest",
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KKNSJZ5RGJ4ER0H3A3',
		index: 701,
		keyWords: 'weightless shirt,blue,armor,701,21,armor',
		level: 21,
		moduleId: 'item',
		name: 'Weightless Shirt',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KK51M89T4F9XA77HGV',
		index: 709,
		keyWords: 'resurrection wear,white,armor,709,42,armor',
		level: 42,
		moduleId: 'item',
		name: 'Resurrection Wear',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'KEY_ITEM',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KKGAFHYFDEH4XY090M',
		index: 826,
		keyWords: "plachta's clothes,green,key item,826,1,important",
		level: 1,
		moduleId: 'item',
		name: "Plachta's Clothes",
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'BOOK',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KMDSQE42VCY65PSW3E',
		index: 893,
		keyWords: "puppeteer's tools,white,book,893,22,important",
		level: 22,
		moduleId: 'item',
		name: "Puppeteer's Tools",
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'ACCESSORY',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KMF7213MPZ9XHTSWCA',
		index: 766,
		keyWords: 'meister mittens,yellow,accessory,766,13,beginner recipes,accessory,simple sweets,salty',
		level: 13,
		moduleId: 'item',
		name: 'Meister Mittens',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KDEVFCVZTJ5VQ1PYQN', name: 'Simple Sweets', table: 'item' },
				{ id: '01HVZGS2JMXT8AQZF6Z22FJGHP', name: 'Salty', table: 'effect' }
			],
			contentText: ['Synthesize ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['ACCESSORY'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KMECTXWXDDJ73QPN5Q',
		index: 696,
		keyWords: 'dragonscale coat,red,armor,696,40,armor',
		level: 40,
		moduleId: 'item',
		name: 'Dragonscale Coat',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KM17NQ00FXWHW1X832',
		index: 705,
		keyWords: 'alchemy mantle,white,armor,705,41,armor',
		level: 41,
		moduleId: 'item',
		name: 'Alchemy Mantle',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'KEY_ITEM',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KMJREMEK94GMMG2A7P',
		index: 833,
		keyWords: 'music box of memory,green,key item,833,1,important',
		level: 1,
		moduleId: 'item',
		name: 'Music Box of Memory',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'BOOK',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KM8K094WQGM316M6M8',
		index: 891,
		keyWords: 'blessing of the sun,yellow,book,891,20,important',
		level: 20,
		moduleId: 'item',
		name: 'Blessing of the Sun',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'ACCESSORY',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KMHR7CF0MKQW65MC83',
		index: 831,
		keyWords: 'ares brooch,green,accessory,831,19,hope recipes,accessory,leon',
		level: 19,
		moduleId: 'item',
		name: 'Ares Brooch',
		recipeIdea: { contentData: [{ content: 'Leon' }], contentText: ['From ', 'keyMap-0', ' Events'] },
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['ACCESSORY'],
		traitPresent: null
	},
	{
		category: 'ACCESSORY',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KM5DNWQ35DG0PDNZEZ',
		index: 772,
		keyWords: 'hustle belt,red,accessory,772,29,hope recipes,accessory,drilled scar,scar of the land',
		level: 29,
		moduleId: 'item',
		name: 'Hustle Belt',
		recipeIdea: {
			contentData: [{ content: 'Drilled Scar' }, { content: 'Scar of the Land' }],
			contentText: ['Investigate ', 'keyMap-0', ' at the ', 'keyMap-1']
		},
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['ACCESSORY'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KMKKJSMWF86XEQCGEA',
		index: 834,
		keyWords: 'puppeteer string,yellow,synthesis,834,16,beginner recipes,thread,house,night,pilgrim road',
		level: 16,
		moduleId: 'item',
		name: 'Puppeteer String',
		recipeIdea: {
			contentData: [{ content: 'House' }, { content: 'Night' }, { content: 'Pilgrim Road' }],
			contentText: ['Investigate a ', 'keyMap-0', ' at ', 'keyMap-1', ' at ', 'keyMap-2']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['THREAD'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KHEWMYKWQWTK99YPST',
		index: 619,
		keyWords: 'white panther,green,weapon,619,29,weapon',
		level: 29,
		moduleId: 'item',
		name: 'White Panther',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KHYR7XM534D4460PX5',
		index: 692,
		keyWords: 'hard coat,green,armor,692,8,armor',
		level: 8,
		moduleId: 'item',
		name: 'Hard Coat',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KHHVMXNVTQ6YF9VEYC',
		index: 704,
		keyWords: 'paraselene clothes,white,armor,704,32,armor',
		level: 32,
		moduleId: 'item',
		name: 'Paraselene Clothes',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KJP1G8D4JWSEBT7RMW',
		index: 708,
		keyWords: 'bridal blouse,white,armor,708,37,armor',
		level: 37,
		moduleId: 'item',
		name: 'Bridal Blouse',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KJH9R6CXKEZSN07705',
		index: 612,
		keyWords: 'piercing bullets,yellow,weapon,612,18,weapon',
		level: 18,
		moduleId: 'item',
		name: 'Piercing Bullets',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KJNZPWHQFQXDXX343F',
		index: 614,
		keyWords: 'diamant,red,weapon,614,34,weapon',
		level: 34,
		moduleId: 'item',
		name: 'Diamant',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KJ6SA8GXZ8GT6MXQCV',
		index: 688,
		keyWords: 'gold jacket,yellow,armor,688,28,armor',
		level: 28,
		moduleId: 'item',
		name: 'Gold Jacket',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KJ3N7STFX2G9AEWECA',
		index: 700,
		keyWords: "wanderer's shirt,green,armor,700,14,armor",
		level: 14,
		moduleId: 'item',
		name: "Wanderer's Shirt",
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'KEY_ITEM',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KKZVR0A7KC88VYASHN',
		index: 841,
		keyWords: 'old certificate,white,key item,841,1,important',
		level: 1,
		moduleId: 'item',
		name: 'Old Certificate',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'BOOK',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KKRT3G6KMSJQ6ZMMH3',
		index: 889,
		keyWords: 'soul techniques,blue,book,889,11,important',
		level: 11,
		moduleId: 'item',
		name: 'Soul Techniques',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'ACCESSORY',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KKS7S0C4QYSMNRJKC1',
		index: 771,
		keyWords: "friendly persona,yellow,accessory,771,16,beginner recipes,accessory,silent beast,prospector's strand",
		level: 16,
		moduleId: 'item',
		name: 'Friendly Persona',
		recipeIdea: {
			contentData: [{ content: 'Silent Beast' }, { content: "Prospector's Strand" }],
			contentText: ['Hunt ', 'keyMap-0', ' at ', 'keyMap-1']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['ACCESSORY'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KKE0AQXK9NJH09FS3Z',
		index: 836,
		keyWords: 'prototype fertilizer,white,synthesis,836,7,mystery recipes,important,story progress',
		level: 7,
		moduleId: 'item',
		name: 'Prototype Fertilizer',
		recipeIdea: { contentData: [{ content: 'Story Progress' }], contentText: ['Unlocked through ', 'keyMap-0'] },
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'WEAPON',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KKVSJN0484TXYZZBM1',
		index: 620,
		keyWords: 'vivid spear,red,weapon,620,39,weapon',
		level: 39,
		moduleId: 'item',
		name: 'Vivid Spear',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WEAPON'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KKW1C2PP6QE1WQPEHX',
		index: 693,
		keyWords: 'plate coat,red,armor,693,14,armor',
		level: 14,
		moduleId: 'item',
		name: 'Plate Coat',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KKXC85JSRXK8SDCVQQ',
		index: 702,
		keyWords: 'natural clothes,green,armor,702,25,armor',
		level: 25,
		moduleId: 'item',
		name: 'Natural Clothes',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'KEY_ITEM',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KKD0HJ036XCB60VF3B',
		index: 825,
		keyWords: "plachta's core,green,key item,825,1,important",
		level: 1,
		moduleId: 'item',
		name: "Plachta's Core",
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: { hunt: [], location: [], special: 'Obtain through event.' },
		id: '01HVZGS2KKYNB7BQSKZ4HP1T7G',
		index: 838,
		keyWords: 'moisture grass,white,material,838,2,important,obtain through event.',
		level: 2,
		moduleId: 'item',
		name: 'Moisture Grass',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'KEY_ITEM',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KMVK7MCZDHSAKXX4J6',
		index: 843,
		keyWords: "grandma's clothes,white,key item,843,1,growth recipes,important,story progress",
		level: 1,
		moduleId: 'item',
		name: "Grandma's Clothes",
		recipeIdea: { contentData: [{ content: 'Story Progress' }], contentText: ['Unlocked through ', 'keyMap-0'] },
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'ACCESSORY',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KMAPJ15MKZVEN975Z2',
		index: 760,
		keyWords: 'life bangle,red,accessory,760,35,dream recipes,accessory,world map',
		level: 35,
		moduleId: 'item',
		name: 'Life Bangle',
		recipeIdea: {
			contentData: [{ content: 'World Map' }],
			contentText: ['Use 100 LP to traveling around the ', 'keyMap-0']
		},
		recipeType: 'DREAM_RECIPES',
		relatedCategories: ['ACCESSORY'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KMNY5W5FPG0CFCETPJ',
		index: 697,
		keyWords: 'ancient coat,white,armor,697,45,armor',
		level: 45,
		moduleId: 'item',
		name: 'Ancient Coat',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'KEY_ITEM',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KMAYA981SKEYANVWFH',
		index: 832,
		keyWords: 'plachta doll,white,key item,832,1,important',
		level: 1,
		moduleId: 'item',
		name: 'Plachta Doll',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'BOOK',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KMFH0SG7XCQ5WGF3K3',
		index: 890,
		keyWords: 'alchemic drive guide,yellow,book,890,13,important',
		level: 13,
		moduleId: 'item',
		name: 'Alchemic Drive Guide',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'BOOK',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KMF68N9815K2C1B9K4',
		index: 892,
		keyWords: 'recipe of origin,white,book,892,22,important',
		level: 22,
		moduleId: 'item',
		name: 'Recipe of Origin',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'ACCESSORY',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KM918BMFVEYZZWFJ1N',
		index: 763,
		keyWords: 'feather ornament,green,accessory,763,24,growth recipes,accessory,saber claw',
		level: 24,
		moduleId: 'item',
		name: 'Feather Ornament',
		recipeIdea: { contentData: [{ content: 'Saber Claw' }], contentText: ['Hunt ', 'keyMap-0'] },
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['ACCESSORY'],
		traitPresent: null
	},
	{
		category: 'ACCESSORY',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KMA5TS83288R3JPEHQ',
		index: 768,
		keyWords: 'monochrome glasses,white,accessory,768,19,growth recipes,accessory,monika,light edge,brave heart',
		level: 19,
		moduleId: 'item',
		name: 'Monochrome Glasses',
		recipeIdea: {
			contentData: [{ content: 'Monika' }, { content: 'Light Edge' }, { content: 'Brave Heart' }],
			contentText: ['Use ', 'keyMap-0', "'s ", 'keyMap-1', ' and ', 'keyMap-2', ' Skills.']
		},
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['ACCESSORY'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KMN5SBAYNRXW5JJ4JJ',
		index: 828,
		keyWords: 'spirit needle,white,synthesis,828,20,growth recipes,important,julio',
		level: 20,
		moduleId: 'item',
		name: 'Spirit Needle',
		recipeIdea: { contentData: [{ content: 'Julio' }], contentText: ['From ', 'keyMap-0', ' Events'] },
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KMA0ZB2XM07QEY248S',
		index: 835,
		keyWords: "sage's soil,yellow,synthesis,835,17,hope recipes,clay,fritz",
		level: 17,
		moduleId: 'item',
		name: "Sage's Soil",
		recipeIdea: { contentData: [{ content: 'Fritz' }], contentText: ['From ', 'keyMap-0', ' Events'] },
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['CLAY'],
		traitPresent: null
	},
	{
		category: 'HEAL_ITEM',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KNR5NVKW1H2ZTAM6BC',
		index: 224,
		keyWords: 'sofinancier,yellow,heal item,224,34,dream recipes,food,sweets,natural yeast,sunny scent',
		level: 34,
		moduleId: 'item',
		name: 'Sofinancier',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KPWNKG0ZHW0W8GMZ3H', name: 'Natural Yeast', table: 'item' },
				{ id: '01HVZGS2MAXGSHPD04V25TWGRD', name: 'Sunny Scent', table: 'trait' }
			],
			contentText: ['Synthesize ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		recipeType: 'DREAM_RECIPES',
		relatedCategories: ['FOOD', 'SWEETS'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KNKRYKNRM85B57J2HN',
		index: 706,
		keyWords: 'soft armor,blue,armor,706,29,armor',
		level: 29,
		moduleId: 'item',
		name: 'Soft Armor',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'HEAL_ITEM',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KNP9012JQBRW527XY5',
		index: 226,
		keyWords: 'alchemy drops,red,heal item,226,11,growth recipes,food,sweets,gem,honey,kirchen bell special',
		level: 11,
		moduleId: 'item',
		name: 'Alchemy Drops',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2K6NBV9B9A90G607DEY', name: 'Honey', table: 'item' },
				{ id: '01HVZGS2M7QQXE1TBN333GG697', name: 'Kirchen Bell Special', table: 'trait' }
			],
			contentText: ['Synthesize ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['FOOD', 'SWEETS', 'GEM'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KN6VX1DKMSA195TCWN',
		index: 447,
		keyWords: 'adal cloth,yellow,synthesis,447,21,growth recipes,armor mat,cloth,leon',
		level: 21,
		moduleId: 'item',
		name: 'Adal Cloth',
		recipeIdea: { contentData: [{ content: 'Leon' }], contentText: ['From ', 'keyMap-0', ' Events'] },
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['ARMOR_MAT', 'CLOTH'],
		traitPresent: null
	},
	{
		category: 'HEAL_ITEM',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KNDX467ESQWAH2EK8A',
		index: 218,
		keyWords: 'breezy aroma,green,heal item,218,39,mystery recipes,medicine,hill,front of atelier',
		level: 39,
		moduleId: 'item',
		name: 'Breezy Aroma',
		recipeIdea: {
			contentData: [{ content: 'Hill' }, { content: 'Front of Atelier' }],
			contentText: ['Investigating ', 'keyMap-0', ' at the ', 'keyMap-1']
		},
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['MEDICINE'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KN7MX5NABM7BJFG1T9',
		index: 455,
		keyWords: 'compass of hades,white,synthesis,455,27,growth recipes,important,spirit needle',
		level: 27,
		moduleId: 'item',
		name: 'Compass of Hades',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2KMN5SBAYNRXW5JJ4JJ', name: 'Spirit Needle', table: 'item' }],
			contentText: ['Synthesize ', 'keyMap-0']
		},
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KN2F0HFTQQ8JQKBS28',
		index: 448,
		keyWords: "flugel,yellow,synthesis,448,27,dream recipes,armor mat,cloth,angel's whisper,soul awakening",
		level: 27,
		moduleId: 'item',
		name: 'Flugel',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KNJMPK6RC5TJG49WVY', name: "Angel's Whisper", table: 'item' },
				{ id: '01HVZGS2HYRDV56AJ2Z7DVPZXP', name: 'Soul Awakening', table: 'effect' }
			],
			contentText: ['Synthesize ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		recipeType: 'DREAM_RECIPES',
		relatedCategories: ['ARMOR_MAT', 'CLOTH'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KNAV7MVSEKAGCZG1KK',
		index: 844,
		keyWords: 'living broom,green,synthesis,844,1,hope recipes,magic item,wood,fuel,story progress',
		level: 1,
		moduleId: 'item',
		name: 'Living Broom',
		recipeIdea: { contentData: [{ content: 'Story Progress' }], contentText: ['Unlocked through ', 'keyMap-0'] },
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['MAGIC_ITEM', 'WOOD', 'FUEL'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'GREEN',
		description: {
			hunt: ['Mandragora', 'White Root', 'Alraune', 'Kimmoch', 'Single Horn.'],
			location: ['Pilgram Road', 'Flower Garden', 'Rocky Grove', 'Scar of the Land.'],
			rumor: { id: '01HVZGS2KTD1SK7395YJYTSQA5', name: 'Greatly Grown Magic Grass', table: 'rumor' }
		},
		id: '01HVZGS2KN36Z8QVJM89J84EGZ',
		index: 0,
		keyWords:
			'magic grass,green,material,0,2,plant,medicine mat,mandragora,white root,alraune,kimmoch,single horn.,greatly grown magic grass,pilgram road,flower garden,rocky grove,scar of the land.',
		level: 2,
		moduleId: 'item',
		name: 'Magic Grass',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['PLANT', 'MEDICINE_MAT'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'RED',
		description: {
			hunt: ['Magic Book', 'Gargolye', 'Apostle', 'Mini Demon.'],
			location: ['Pilgrim Road', 'Merbert Farm', 'Enlightened Mountain', 'Moon Sun Mor.']
		},
		id: '01HVZGS2KNETTHTXPKG0SMC0V4',
		index: 18,
		keyWords:
			'kaen stone,red,material,18,5,ore,gunpowder,carries heat,magic book,gargolye,apostle,mini demon.,pilgrim road,merbert farm,enlightened mountain,moon sun mor.',
		level: 5,
		moduleId: 'item',
		name: 'Kaen Stone',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ORE', 'GUNPOWDER'],
		traitPresent: { id: '01HVZGS2M9FNAP23BDPYNET84V', name: 'Carries Heat', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: {
			hunt: ['Devil Horn', 'Sealed Demon Lord.'],
			location: ['Fertile Shore', 'Husk Forest', 'Sealed Temple', 'Underground lake.']
		},
		id: '01HVZGS2KPF12ACDFG3RXVBT6Y',
		index: 21,
		keyWords:
			'black orb,white,material,21,23,ore,poison mat,fuel,dark matter,devil horn,sealed demon lord.,fertile shore,husk forest,sealed temple,underground lake.',
		level: 23,
		moduleId: 'item',
		name: 'Black Orb',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ORE', 'POISON_MAT', 'FUEL'],
		traitPresent: { id: '01HVZGS2M93JYY3S4V3SKR48NA', name: 'Dark Matter', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'GREEN',
		description: {
			hunt: ['Mandragora', 'Single Horn.'],
			location: ['Gathering Of Beast', 'Puzzling Path', 'Forest of Fairies.'],
			rumor: { id: '01HVZGS2KS1SXPRGM430MRQZ7A', name: 'Stash of High Grade Flour?', table: 'rumor' }
		},
		id: '01HVZGS2KP89R2JNSKTQ3CTHT9',
		index: 57,
		keyWords:
			'weiss powder,green,material,57,14,ingredient,gunpowder,mandragora,single horn.,stash of high grade flour?,gathering of beast,puzzling path,forest of fairies.',
		level: 14,
		moduleId: 'item',
		name: 'Weiss Powder',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['INGREDIENT', 'GUNPOWDER'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'BLUE',
		description: {
			hunt: ['Devil Horn', 'Sealed Demon Lord', 'Flare Demon', 'Thunderous', 'Hell gate', 'Great Demon.'],
			location: []
		},
		id: '01HVZGS2KP0QP6HXGKH3X4G8QK',
		index: 79,
		keyWords:
			'evil core,blue,material,79,22,gem,poison mat,demon soul,devil horn,sealed demon lord,flare demon,thunderous,hell gate,great demon.',
		level: 22,
		moduleId: 'item',
		name: 'Evil Core',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['GEM', 'POISON_MAT'],
		traitPresent: { id: '01HVZGS2M8CMSW1ZBCQFJGKHPF', name: 'Demon Soul', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'BLUE',
		description: {
			hunt: ['Ghost', 'Scarlady', 'Gentle Phantom', 'Haunt', 'Lich', 'Shadow', 'Death Inquisitor', 'Archlich.'],
			location: ['Moon Sun Moor', 'City of the Lost', 'Forgotten NUrsery', 'Soul Space.']
		},
		id: '01HVZGS2KPZK5FC5GX43RA4GM3',
		index: 77,
		keyWords:
			'pendeloch,blue,material,77,14,secret power,gem,ghost,scarlady,gentle phantom,haunt,lich,shadow,death inquisitor,archlich.,moon sun moor,city of the lost,forgotten nursery,soul space.',
		level: 14,
		moduleId: 'item',
		name: 'Pendeloch',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['SECRET_POWER', 'GEM'],
		traitPresent: null
	},
	{
		category: 'ATK_ITEM',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KP9V8VVJR5EMYR73K3',
		index: 165,
		keyWords: 'necromancer flute,green,atk item,165,48,mystery recipes,magic item,nearby forest,night',
		level: 48,
		moduleId: 'item',
		name: 'Necromancer Flute',
		recipeIdea: {
			contentData: [{ content: 'Nearby Forest' }, { content: 'Night' }],
			contentText: ['Talk to the NPC at ', 'keyMap-0', ' at ', 'keyMap-1']
		},
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['MAGIC_ITEM'],
		traitPresent: null
	},
	{
		category: 'KEY_ITEM',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KN61NC61FS98VG10D6',
		index: 839,
		keyWords: "sage's emblem,white,key item,839,48,mystery recipes,important,story progress",
		level: 48,
		moduleId: 'item',
		name: "Sage's Emblem",
		recipeIdea: { contentData: [{ content: 'Story Progress' }], contentText: ['Unlocked through ', 'keyMap-0'] },
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'ARMOR',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KNGAC480989A13PC1Y',
		index: 699,
		keyWords: 'mixed fur shirt,yellow,armor,699,8,armor',
		level: 8,
		moduleId: 'item',
		name: 'Mixed Fur Shirt',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['ARMOR'],
		traitPresent: null
	},
	{
		category: 'MACHINE',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KNM2902WDG9GASJ64N',
		index: 514,
		keyWords:
			'ancient cauldron,white,machine,514,28,mystery recipes,important,ancient cauldron,library of all creation,luard',
		level: 28,
		moduleId: 'item',
		name: 'Ancient Cauldron',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KNM2902WDG9GASJ64N', name: 'Ancient Cauldron', table: 'item' },
				{ content: 'Library of All Creation' },
				{ content: 'Luard' }
			],
			contentText: ['Obtain ', 'keyMap-0', ' at the ', 'keyMap-1', ' after Defeat ', 'keyMap-2']
		},
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'ACCESSORY',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KNAE7SZEFZ7G3FBB8N',
		index: 762,
		keyWords: 'angel ribbon,yellow,accessory,762,21,hope recipes,accessory,gold thread,purifying water',
		level: 21,
		moduleId: 'item',
		name: 'Angel Ribbon',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KA4VM7S6557B9Q54JV', name: 'Gold Thread', table: 'item' },
				{ id: '01HVZGS2M7CK343AVS9HV2T5TJ', name: 'Purifying Water', table: 'trait' }
			],
			contentText: ['Synthesize ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['ACCESSORY'],
		traitPresent: null
	},
	{
		category: 'BUFF_ITEM',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KNJMPK6RC5TJG49WVY',
		index: 290,
		keyWords: "angel's whisper,white,buff item,290,35,hope recipes,magic item,unliving king",
		level: 35,
		moduleId: 'item',
		name: "Angel's Whisper",
		recipeIdea: { contentData: [{ content: 'Unliving King' }], contentText: ['Hunt ', 'keyMap-0'] },
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['MAGIC_ITEM'],
		traitPresent: null
	},
	{
		category: 'DE_BUFF_ITEM',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KNCSNNZ6WH8R24J95K',
		index: 292,
		keyWords: 'bottled misfortune,red,de buff item,292,12,growth recipes,medicine',
		level: 12,
		moduleId: 'item',
		name: 'Bottled Misfortune',
		recipeIdea: { contentData: [], contentText: ['Lose a Battle'] },
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['MEDICINE'],
		traitPresent: null
	},
	{
		category: 'ATK_ITEM',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KNPCTT1G1JQB05G6DE',
		index: 146,
		keyWords: 'craft,yellow,atk item,146,15,growth recipes,bomb,uni bag,explodes',
		level: 15,
		moduleId: 'item',
		name: 'Craft',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KC2JSV34PCPED4ZX7P', name: 'Uni Bag', table: 'item' },
				{ id: '01HVZGS2J6FAB86YF1JF9BCWQK', name: 'Explodes', table: 'effect' }
			],
			contentText: ['Synthesize ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['BOMB'],
		traitPresent: null
	},
	{
		category: 'ATK_ITEM',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KNH8XRVZ5S5F3GCXT4',
		index: 163,
		keyWords: "heaven's cleanser,yellow,atk item,163,54,mystery recipes,bomb,magic item,light elemental",
		level: 54,
		moduleId: 'item',
		name: "Heaven's Cleanser",
		recipeIdea: { contentData: [{ content: 'Light Elemental' }], contentText: ['Hunt ', 'keyMap-0'] },
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['BOMB', 'MAGIC_ITEM'],
		traitPresent: null
	},
	{
		category: 'HEAL_ITEM',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KNYMK1NMZWNBVB9RQV',
		index: 219,
		keyWords: 'nectar of life,white,heal item,219,23,hope recipes,medicine,secret power',
		level: 23,
		moduleId: 'item',
		name: 'Nectar of Life',
		recipeIdea: { contentData: [], contentText: ['Get LP Reach 0'] },
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['MEDICINE', 'SECRET_POWER'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'BLUE',
		description: {
			hunt: ['Kimmoch', 'Nightshade', 'Sorcerer Titus.'],
			location: [
				'Gathering of Beast',
				'Puzzzling Path',
				'Foggy Woodland',
				'Mountain Boundary',
				'Forest of fairies',
				'Sealed Temple.'
			],
			rumor: { id: '01HVZGS2KSM7W57HPTXAYNZ764', name: 'Thin Line Between Poison and Medicine', table: 'rumor' }
		},
		id: '01HVZGS2KNZW4CWGPYDCQJEP5Y',
		index: 2,
		keyWords:
			'fairy poison grass,blue,material,2,11,plant,poison mat,poison mist,kimmoch,nightshade,sorcerer titus.,thin line between poison and medicine,gathering of beast,puzzzling path,foggy woodland,mountain boundary,forest of fairies,sealed temple.',
		level: 11,
		moduleId: 'item',
		name: 'Fairy Poison Grass',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['PLANT', 'POISON_MAT'],
		traitPresent: { id: '01HVZGS2M9WMJG6NB2AKF5G4JC', name: 'Poison Mist', table: 'trait' }
	},
	{
		category: 'ATK_ITEM',
		color: 'WHITE',
		description: { hunt: [], location: [], shop: 'Elise' },
		id: '01HVZGS2KN8VGC49PJTJKZKWAS',
		index: 295,
		keyWords:
			'codex of creation,white,atk item,295,30,growth recipes,magic item,paper,artisans (harol, leon, cory, logy),elise',
		level: 30,
		moduleId: 'item',
		name: 'Codex of Creation',
		recipeIdea: {
			contentData: [{ content: 'Artisans (Harol, Leon, Cory, Logy)' }],
			contentText: ['Friendly with the ', 'keyMap-0']
		},
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['MAGIC_ITEM', 'PAPER'],
		traitPresent: null
	},
	{
		category: 'MATERIAL',
		color: 'WHITE',
		description: {
			hunt: ['Rainbow Puni', 'Admiral Puni', 'Slead Demon Lord.'],
			location: []
		},
		id: '01HVZGS2KPH4867XKYRXB43M3B',
		index: 49,
		keyWords:
			'rainbow puni fluid,white,material,49,35,water,secret power,medicine mat,unidentified,rainbow puni,admiral puni,slead demon lord.',
		level: 35,
		moduleId: 'item',
		name: 'Rainbow Puni Fluid',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WATER', 'SECRET_POWER', 'MEDICINE_MAT'],
		traitPresent: { id: '01HVZGS2M8ASGQ2E54P4ZBHPHQ', name: 'Unidentified', table: 'trait' }
	},
	{
		category: 'MATERIAL',
		color: 'RED',
		description: {
			hunt: [
				'Wise Spirit',
				'rok',
				'Twin Header',
				'Sorcer Titus',
				'Ifritter',
				'Tempestus',
				'Dragonaire',
				'Magmacius',
				'Sun Destroyer Yasuk',
				'Moon Destroyer Durak.'
			],
			location: []
		},
		id: '01HVZGS2KP8W3Y86W41BH4T5Q1',
		index: 50,
		keyWords:
			'dragon bloodstone,red,material,50,42,water,elixir,poison mat,wise spirit,rok,twin header,sorcer titus,ifritter,tempestus,dragonaire,magmacius,sun destroyer yasuk,moon destroyer durak.',
		level: 42,
		moduleId: 'item',
		name: 'Dragon Bloodstone',
		recipeIdea: null,
		recipeType: null,
		relatedCategories: ['WATER', 'ELIXIR', 'POISON_MAT'],
		traitPresent: null
	},
	{
		category: 'DE_BUFF_ITEM',
		color: 'WHITE',
		description: { hunt: [], location: [], shop: 'Elise' },
		id: '01HVZGS2KP61A5NH3Z5M0QVTW7',
		index: 303,
		keyWords:
			'sealing book,white,de buff item,303,42,mystery recipes,magic item,paper,codex of creation,steal lots of life,elise',
		level: 42,
		moduleId: 'item',
		name: 'Sealing Book',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KN8VGC49PJTJKZKWAS', name: 'Codex of Creation', table: 'item' },
				{ id: '01HVZGS2J30TSHHDH6QZQP1WYX', name: 'Steal Lots of Life', table: 'effect' }
			],
			contentText: ['Synthesize ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['MAGIC_ITEM', 'PAPER'],
		traitPresent: null
	},
	{
		category: 'EXPLORATION',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KPGAQWNMQWM16HR3B8',
		index: 359,
		keyWords: 'living cart,yellow,exploration,359,33,mystery recipes,magic item,wood,refuel bottle,auto activate 50%',
		level: 33,
		moduleId: 'item',
		name: 'Living Cart',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KDJKYYEX0GHQ2F2NVN', name: 'Refuel Bottle', table: 'item' },
				{ id: '01HVZGS2JNHVS2W33QHEMARG19', name: 'Auto Activate 50%', table: 'effect' }
			],
			contentText: ['Synthesize ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['MAGIC_ITEM', 'WOOD'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'GREEN',
		description: {
			hunt: [],
			location: ['Bought at Marguerite', 'Synthsized (Hope).']
		},
		id: '01HVZGS2KPWNKG0ZHW0W8GMZ3H',
		index: 429,
		keyWords:
			'natural yeast,green,synthesis,429,23,hope recipes,ingredient,gunpowder,poison mat,bagel sandwich,fluffy,bought at marguerite,synthsized (hope).',
		level: 23,
		moduleId: 'item',
		name: 'Natural Yeast',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KDQ7A3RB5KSTGVHX83', name: 'Bagel Sandwich', table: 'item' },
				{ id: '01HVZGS2JEH2T2SMMZ16H5NSES', name: 'Fluffy', table: 'effect' }
			],
			contentText: ['Synthesize ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['INGREDIENT', 'GUNPOWDER', 'POISON_MAT'],
		traitPresent: null
	},
	{
		category: 'BUFF_ITEM',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KP0N9HYB7SWJ32TKH2',
		index: 293,
		keyWords: 'spirit weave cloth,blue,buff item,293,33,hope recipes,cloth,puni jelly,activate division',
		level: 33,
		moduleId: 'item',
		name: 'Spirit Weave Cloth',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KDRNYFXQR75JSGFYKA', name: 'Puni Jelly', table: 'item' },
				{ id: '01HVZGS2J89PZSN7TW88B18PAM', name: 'Activate Division', table: 'effect' }
			],
			contentText: ['Synthesize ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['CLOTH'],
		traitPresent: null
	},
	{
		category: 'HEAL_ITEM',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KPW8Z5ZFYAHZC4N797',
		index: 225,
		keyWords: 'piro sotea,blue,heal item,225,31,dream recipes,food,secret power,pure water,secret of health',
		level: 31,
		moduleId: 'item',
		name: 'Piro Sotea',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KEXT8YBPDR1R61C0Y3', name: 'Pure Water', table: 'item' },
				{ id: '01HVZGS2M7CV2YQ2MDB0846NBP', name: 'Secret of Health', table: 'trait' }
			],
			contentText: ['Synthesize ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		recipeType: 'DREAM_RECIPES',
		relatedCategories: ['FOOD', 'SECRET_POWER'],
		traitPresent: null
	},
	{
		category: 'MACHINE',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KP0MVTTEATFT0ABR0J',
		index: 511,
		keyWords: 'tuned cauldron,white,machine,511,14,hope recipes,important,tuned cauldron,final area,underground lake',
		level: 14,
		moduleId: 'item',
		name: 'Tuned Cauldron',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KP0MVTTEATFT0ABR0J', name: 'Tuned Cauldron', table: 'item' },
				{ content: 'Final Area' },
				{ content: 'Underground Lake' }
			],
			contentText: ['Obtain ', 'keyMap-0', ' at the ', 'keyMap-1', ' at ', 'keyMap-2']
		},
		recipeType: 'HOPE_RECIPES',
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'GREEN',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KPZY0ZAPVSYQ2WG0YD',
		index: 459,
		keyWords: 'mineral extract,green,synthesis,459,23,growth recipes,medicine mat,water,metal,good water',
		level: 23,
		moduleId: 'item',
		name: 'Mineral Extract',
		recipeIdea: {
			contentData: [{ id: '01HVZGS2K96WVEJYJD3BPE3ZR4', name: 'Good Water', table: 'item' }],
			contentText: ['Obtain ', 'keyMap-0']
		},
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['MEDICINE_MAT', 'WATER', 'METAL'],
		traitPresent: null
	},
	{
		category: 'MACHINE',
		color: 'WHITE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KQ6PKXGTYJ0QYXJDEF',
		index: 515,
		keyWords: "teacher's cauldron,white,machine,515,10,growth recipes,important,teacher's cauldron,cory",
		level: 10,
		moduleId: 'item',
		name: "Teacher's Cauldron",
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KQ6PKXGTYJ0QYXJDEF', name: "Teacher's Cauldron", table: 'item' },
				{ content: 'Cory' }
			],
			contentText: ['Buy ', 'keyMap-0', ' from ', 'keyMap-1']
		},
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['IMPORTANT'],
		traitPresent: null
	},
	{
		category: 'ACCESSORY',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KQEXWJPTB065RCBX45',
		index: 764,
		keyWords: 'spirit earrings,blue,accessory,764,33,dream recipes,accessory,bomb,magic item,medicine',
		level: 33,
		moduleId: 'item',
		name: 'Spirit Earrings',
		recipeIdea: {
			contentData: [
				{ searchQuery: { relatedCategory: 'BOMB' }, table: 'item' },
				{ searchQuery: { relatedCategory: 'MAGIC_ITEM' }, table: 'item' },
				{ searchQuery: { relatedCategory: 'MEDICINE' }, table: 'item' }
			],
			contentText: ['Use ', 'keyMap-0', ', ', 'keyMap-1', ', And ', 'keyMap-2', ' in combat']
		},
		recipeType: 'DREAM_RECIPES',
		relatedCategories: ['ACCESSORY'],
		traitPresent: null
	},
	{
		category: 'EXPLORATION',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KPGH90TMGPMJDWYMT9',
		index: 358,
		keyWords: 'fairy guide,yellow,exploration,358,25,growth recipes,magic item,spruce,flickering light',
		level: 25,
		moduleId: 'item',
		name: 'Fairy Guide',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KFARFBGTT897EYBTCN', name: 'Spruce', table: 'item' },
				{ id: '01HVZGS2M9JJJM94Q4H8S443YD', name: 'Flickering Light', table: 'trait' }
			],
			contentText: ['Synthesize ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['MAGIC_ITEM'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KPRRDFP2X3MYPEHDGM',
		index: 440,
		keyWords: 'stahl metal,red,synthesis,440,10,growth recipes,weapon mat,metal',
		level: 10,
		moduleId: 'item',
		name: 'Stahl Metal',
		recipeIdea: { contentData: [], contentText: ['Perform Synthesis & Use Items in Combat'] },
		recipeType: 'GROWTH_RECIPES',
		relatedCategories: ['WEAPON_MAT', 'METAL'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'YELLOW',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KP0RCM0KX0J1D1R27T',
		index: 460,
		keyWords: 'fertile soil,yellow,synthesis,460,25,mystery recipes,clay,oskar',
		level: 25,
		moduleId: 'item',
		name: 'Fertile Soil',
		recipeIdea: { contentData: [{ content: 'Oskar' }], contentText: ['From ', 'keyMap-0', ' Quest'] },
		recipeType: 'MYSTERY_RECIPES',
		relatedCategories: ['CLAY'],
		traitPresent: null
	},
	{
		category: 'SYNTHESIS',
		color: 'RED',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KP1JJXGFJ67YYS0NHV',
		index: 439,
		keyWords: 'ingot,red,synthesis,439,7,beginner recipes,weapon mat,metal,beast,merbert farm,complete request',
		level: 7,
		moduleId: 'item',
		name: 'Ingot',
		recipeIdea: {
			contentData: [{ content: 'Beast' }, { content: 'Merbert Farm' }, { content: 'Complete Request' }],
			contentText: ['Hunt ', 'keyMap-0', ' at ', 'keyMap-1', ' & ', 'keyMap-2']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['WEAPON_MAT', 'METAL'],
		traitPresent: null
	},
	{
		category: 'ACCESSORY',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KQ7303Q00N5TW42R2K',
		index: 769,
		keyWords: 'chronicle mark,blue,accessory,769,36,dream recipes,accessory,noble sapphire,ancient seal',
		level: 36,
		moduleId: 'item',
		name: 'Chronicle Mark',
		recipeIdea: {
			contentData: [
				{ id: '01HVZGS2KGFTSEHJ98WHWRGMXX', name: 'Noble Sapphire', table: 'item' },
				{ id: '01HVZGS2M7EH2078NRNKHMWPHR', name: 'Ancient Seal', table: 'trait' }
			],
			contentText: ['Synthesize ', 'keyMap-0', ' with ', 'keyMap-1']
		},
		recipeType: 'DREAM_RECIPES',
		relatedCategories: ['ACCESSORY'],
		traitPresent: null
	},
	{
		category: 'ATK_ITEM',
		color: 'BLUE',
		description: { hunt: [], location: [] },
		id: '01HVZGS2KQW91AMQYRAJY8WYR5',
		index: 144,
		keyWords: 'ice bomb,blue,atk item,144,12,beginner recipes,bomb,performing synthesis,water',
		level: 12,
		moduleId: 'item',
		name: 'Ice Bomb',
		recipeIdea: {
			contentData: [
				{ content: 'Performing Synthesis' },
				{ searchQuery: { relatedCategory: 'WATER' }, table: 'item' }
			],
			contentText: ['keyMap-0', ' & Obtain ', 'keyMap-1']
		},
		recipeType: 'BEGINNER_RECIPES',
		relatedCategories: ['BOMB'],
		traitPresent: null
	}
];

export default itemsList;
