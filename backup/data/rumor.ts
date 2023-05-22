import type { InsertRumor } from '@root/server/db/schema';

const rumors: InsertRumor[] = [
	{
		price: 250,
		keyWords: 'pilgrim road,greatly grown magic grass,material,magic grass,jumbo size',
		location: 'Pilgrim Road',
		name: 'Greatly Grown Magic Grass',
		rumorType: 'MATERIAL',
		id: '13ffceae-6d47-41a3-b158-d3c3bbae72ca',
		description: {
			contentData: [
				{ id: '95619510-d2d2-4da9-910f-0e8681a0da21', name: 'Magic Grass', table: 'ITEM' },
				{ id: 'b3e5cac5-b7b5-4731-9fae-f437a953a4de', name: 'Jumbo Size', table: 'TRAIT' },
			],
			contentText: ['Provide ', 'keyMap-1', ' with ', 'keyMap-3'],
		},
	},
	{
		price: 300,
		keyWords: 'chick woods,downpour of uni,material,uni,enhance finisher++',
		location: 'Chick Woods',
		name: 'Downpour of Uni',
		rumorType: 'MATERIAL',
		id: 'd592fd95-ef8c-4bb7-809c-efc36e602c78',
		description: {
			contentData: [
				{ id: '7a23023e-9538-4d53-90ef-2864a118f8eb', name: 'Uni', table: 'ITEM' },
				{ id: '6967c1fc-f973-4ad3-bc7c-e03303e1ec32', name: 'Enhance Finisher++', table: 'TRAIT' },
			],
			contentText: ['Provide ', 'keyMap-1', ' with ', 'keyMap-3'],
		},
	},
	{
		price: 300,
		keyWords: 'chick woods,funny ghosts,monster,funny face',
		location: 'Chick Woods',
		name: 'Funny Ghosts',
		rumorType: 'MONSTER',
		id: 'bccef833-1ccd-4a1d-adb5-f903edca26bb',
		description: { contentData: [{ content: 'Funny Face' }], contentText: ['Spawn ', 'keyMap-1'] },
	},
	{
		price: 300,
		keyWords: 'merbert farm,care to taste some wheat?,material,ramel wheat,low price++',
		location: 'Merbert Farm',
		name: 'Care to Taste Some Wheat?',
		rumorType: 'MATERIAL',
		id: 'db4dc271-dcbd-47d3-9c84-cb715d245d4a',
		description: {
			contentData: [
				{ id: '83ec45ca-bfc0-4dca-be74-1f152213dca1', name: 'Ramel Wheat', table: 'ITEM' },
				{ id: 'bbf1c521-da5c-4c19-9c41-5974107d4e06', name: 'Low Price++', table: 'TRAIT' },
			],
			contentText: ['Provide ', 'keyMap-1', ' with ', 'keyMap-3'],
		},
	},
	{
		price: 300,
		keyWords: 'open ruins,fruit that gives strength,material,bursting berry',
		location: 'Open Ruins',
		name: 'Fruit that Gives Strength',
		rumorType: 'MATERIAL',
		id: '562a912d-a2cf-4124-86e8-ac10e9f16dc1',
		description: {
			contentData: [{ id: '5a3836d4-70b8-45c6-97a1-15d70f05a272', name: 'Bursting Berry', table: 'ITEM' }],
			contentText: ['Provide ', 'keyMap-1'],
		},
	},
	{
		price: 300,
		keyWords: "prospector's strand,shore of treasures,remnant of a past sea?,material,seabed soil",
		location: "Prospector's Strand - Shore of Treasures",
		name: 'Remnant of a Past Sea?',
		rumorType: 'MATERIAL',
		id: '68ce4d08-e155-4014-82e9-e48c038ae3b6',
		description: {
			contentData: [{ id: 'e584df9b-bc40-4c29-9098-2417d5f574ae', name: 'Seabed Soil', table: 'ITEM' }],
			contentText: ['Provide ', 'keyMap-1'],
		},
	},
	{
		price: 300,
		keyWords: 'green ruins,strange miniature eggs,material,unknown egg',
		location: 'Green Ruins',
		name: 'Strange Miniature Eggs',
		rumorType: 'MATERIAL',
		id: 'e7cbf131-8461-405a-ae63-2fc306c50ea6',
		description: {
			contentData: [{ id: '38848f6d-453e-4a0b-b27f-3aef10c965f9', name: 'Unknown Egg', table: 'ITEM' }],
			contentText: ['Provide ', 'keyMap-1'],
		},
	},
	{
		price: 300,
		keyWords: 'gathering of beasts,cursed ancient trees,material,kifa,inflict curse',
		location: 'Gathering of Beasts',
		name: 'Cursed Ancient Trees',
		rumorType: 'MATERIAL',
		id: 'f5370057-6e0b-471e-92e7-318a23924a32',
		description: {
			contentData: [
				{ id: '2cbf08b2-0f2c-4698-be70-5082036b612f', name: 'Kifa', table: 'ITEM' },
				{ id: 'ecd3b15f-ec05-45a9-922b-12e465281bb4', name: 'Inflict Curse', table: 'TRAIT' },
			],
			contentText: ['Provide ', 'keyMap-1', ' with ', 'keyMap-3'],
		},
	},
	{
		price: 300,
		keyWords:
			'fallen palace,inverse entrance, upside down corridor, opposite living room,vividly colored oil,material,zafloa oil,secret of health',
		location: 'Fallen Palace - Inverse Entrance, Upside Down Corridor, Opposite Living Room',
		name: 'Vividly Colored Oil',
		rumorType: 'MATERIAL',
		id: 'd5800460-12bf-446f-a4c9-21f910b9ef17',
		description: {
			contentData: [
				{ id: '4e72da07-8bb8-4da0-b8ff-194d8e4ff033', name: 'Zafloa Oil', table: 'ITEM' },
				{ id: '11d53eb1-2385-4445-ace1-13e0a056414e', name: 'Secret of Health', table: 'TRAIT' },
			],
			contentText: ['Provide ', 'keyMap-1', ' with ', 'keyMap-3'],
		},
	},
	{
		price: 350,
		keyWords: 'flower garden,not so whimsy strawberries?,material,whimsy strawberry,stable effect++',
		location: 'Flower Garden',
		name: 'Not So Whimsy Strawberries?',
		rumorType: 'MATERIAL',
		id: 'a6ca4520-3986-4b2e-8d6c-7c8ebf0c3173',
		description: {
			contentData: [
				{ id: 'b1f9b50b-7fe8-41e1-ae7a-b207aba45232', name: 'Whimsy Strawberry', table: 'ITEM' },
				{ id: 'eb34c21a-9aa0-49a4-8b50-9ebf115ec8d1', name: 'Stable Effect++', table: 'TRAIT' },
			],
			contentText: ['Provide ', 'keyMap-1', ' with ', 'keyMap-3'],
		},
	},
	{
		price: 350,
		keyWords: 'puzzling path,thin line between poison and medicine,material,fairy poison grass',
		location: 'Puzzling Path',
		name: 'Thin Line Between Poison and Medicine',
		rumorType: 'MATERIAL',
		id: '36f21e71-0b29-49cf-a6a7-ed640bc5228a',
		description: {
			contentData: [{ id: '1e73e6c2-76db-4003-b7b6-a70901f2da3f', name: 'Fairy Poison Grass', table: 'ITEM' }],
			contentText: ['Provide ', 'keyMap-1'],
		},
	},
	{
		price: 350,
		keyWords: 'three bridge springs,moss with sleep compounds,material,mossy driftwood,inflict sleep',
		location: 'Three Bridge Springs',
		name: 'Moss with Sleep Compounds',
		rumorType: 'MATERIAL',
		id: '0abe93a9-9401-4a1e-adf1-1a072ab0a18e',
		description: {
			contentData: [
				{ id: '507a3c01-768c-4487-ad40-22a0bb8d0aa0', name: 'Mossy Driftwood', table: 'ITEM' },
				{ id: '5bdf02c9-470a-4bbf-a500-ef4961b37bac', name: 'Inflict Sleep', table: 'TRAIT' },
			],
			contentText: ['Provide ', 'keyMap-1', ' with ', 'keyMap-3'],
		},
	},
	{
		price: 400,
		keyWords: 'verdant hill,icy cave,enormous hakurei stones,material,hakurei stone,jumbo size',
		location: 'Verdant Hill - Icy Cave',
		name: 'Enormous Hakurei Stones',
		rumorType: 'MATERIAL',
		id: '2797039b-c4e1-461b-9dfb-37b87d1b3a70',
		description: {
			contentData: [
				{ id: '992fc648-0e38-4acc-8c36-2f9fbb622664', name: 'Hakurei Stone', table: 'ITEM' },
				{ id: 'b3e5cac5-b7b5-4731-9fae-f437a953a4de', name: 'Jumbo Size', table: 'TRAIT' },
			],
			contentText: ['Provide ', 'keyMap-1', ' with ', 'keyMap-3'],
		},
	},
	{
		price: 400,
		keyWords: 'rocky grove,herb effective for medicine,material,mystic herb,critical++',
		location: 'Rocky Grove',
		name: 'Herb Effective for Medicine',
		rumorType: 'MATERIAL',
		id: 'cec87fb3-64a3-4aad-990c-fb2b905dfbd0',
		description: {
			contentData: [
				{ id: 'f9aec733-af0d-445b-b2bf-2bd45b28b58d', name: 'Mystic Herb', table: 'ITEM' },
				{ id: 'd5773ac5-6ce2-43d7-8b94-24a414b2a707', name: 'Critical++', table: 'TRAIT' },
			],
			contentText: ['Provide ', 'keyMap-1', ' with ', 'keyMap-3'],
		},
	},
	{
		price: 400,
		keyWords: 'pilgrim road,huge puni outbreak!?,monster,gold puni,black puni,punipuni?,super puni',
		location: 'Pilgrim Road',
		name: 'Huge Puni Outbreak!?',
		rumorType: 'MONSTER',
		id: '2f08faff-f385-484f-bcee-baa036e624d4',
		description: {
			contentData: [
				{ content: 'Gold Puni' },
				{ content: 'Black Puni' },
				{ content: 'Punipuni?' },
				{ content: 'Super Puni' },
			],
			contentText: ['Spawn ', 'keyMap-1', ', ', 'keyMap-3', ', ', 'keyMap-5', ' and ', 'keyMap-7'],
		},
	},
	{
		price: 450,
		keyWords: 'underground lake,chalk white shell,material,pelem shell',
		location: 'Underground Lake',
		name: 'Chalk White Shell',
		rumorType: 'MATERIAL',
		id: '2cfbf159-8904-48f9-be30-411abcaa7672',
		description: {
			contentData: [{ id: 'd9d43713-5748-4efd-9ba7-d40631100ff9', name: 'Pelem Shell', table: 'ITEM' }],
			contentText: ['Provide ', 'keyMap-1'],
		},
	},
	{
		price: 450,
		keyWords: 'small islet,pure and clear spring water,material,good water,quality up++',
		location: 'Small Islet',
		name: 'Pure and Clear Spring Water',
		rumorType: 'MATERIAL',
		id: '3e8fc7e8-467d-470c-8ebd-dc2fabea4ecd',
		description: {
			contentData: [
				{ id: '8234ab13-e547-495f-8326-73fe6ec79f39', name: 'Good Water', table: 'ITEM' },
				{ id: 'c432e9ba-5720-4592-83e5-e25a6d5b8204', name: 'Quality Up++', table: 'TRAIT' },
			],
			contentText: ['Provide ', 'keyMap-1', ' with ', 'keyMap-3'],
		},
	},
	{
		price: 450,
		keyWords: 'verdant hill,cotton disliked by dragons,material,mountain cotton,dragon slayer',
		location: 'Verdant Hill',
		name: 'Cotton Disliked by Dragons',
		rumorType: 'MATERIAL',
		id: '1f761cbf-ef55-4faa-a7a5-1d96c3fef402',
		description: {
			contentData: [
				{ id: '09923333-e710-4055-87db-cc673a847812', name: 'Mountain Cotton', table: 'ITEM' },
				{ id: 'e85e7a10-1ab5-4b70-9fe6-6cf1cf42fe29', name: 'Dragon Slayer', table: 'TRAIT' },
			],
			contentText: ['Provide ', 'keyMap-1', ' with ', 'keyMap-3'],
		},
	},
	{
		price: 450,
		keyWords: 'sealed temple,stash of high grade flour?,material,weiss powder,super fine',
		location: 'Sealed Temple',
		name: 'Stash of High Grade Flour?',
		rumorType: 'MATERIAL',
		id: '31dc689d-b389-45b8-b256-da24e05d0797',
		description: {
			contentData: [
				{ id: 'e04f1902-3546-4644-8fa8-49b811213bf2', name: 'Weiss Powder', table: 'ITEM' },
				{ id: 'a8e068a7-8c26-4a79-994b-ffd421b341f1', name: 'Super Fine', table: 'TRAIT' },
			],
			contentText: ['Provide ', 'keyMap-1', ' with ', 'keyMap-3'],
		},
	},
	{
		price: 500,
		keyWords: 'forgotten nursery,ancient kitchen,book that steals souls,monster,lich order',
		location: 'Forgotten Nursery - Ancient Kitchen',
		name: 'Book that Steals Souls',
		rumorType: 'MONSTER',
		id: '84ad95ca-bc06-4f0e-b589-9556b69901bd',
		description: { contentData: [{ content: 'Lich Order' }], contentText: ['Spawn ', 'keyMap-1'] },
	},
	{
		price: 500,
		keyWords: 'calm banks,shell like gemstone,material,pretty shell,high price++',
		location: 'Calm Banks',
		name: 'Shell Like Gemstone',
		rumorType: 'MATERIAL',
		id: '60c9babf-235b-4afe-be50-5d2429b4552e',
		description: {
			contentData: [
				{ id: 'e5452301-c65b-45be-a9eb-23999eceaf16', name: 'Pretty Shell', table: 'ITEM' },
				{ id: '2aafeddc-bfad-4bd8-b5ed-169134a3b9f8', name: 'High Price++', table: 'TRAIT' },
			],
			contentText: ['Provide ', 'keyMap-1', ' with ', 'keyMap-3'],
		},
	},
	{
		price: 550,
		keyWords: 'moon sun moor,silent bedroom,fallen sorcerer,monster,sorcerer titus',
		location: 'Moon Sun Moor - Silent Bedroom',
		name: 'Fallen Sorcerer',
		rumorType: 'MONSTER',
		id: '9033406a-31fb-4aa2-9440-cbbf607ea958',
		description: { contentData: [{ content: 'Sorcerer Titus' }], contentText: ['Spawn ', 'keyMap-1'] },
	},
	{
		price: 600,
		keyWords: 'scar of the land,scab of the earth,brutal dragon,monster,dragonaire',
		location: 'Scar of the Land - Scab of the Earth',
		name: 'Brutal Dragon',
		rumorType: 'MONSTER',
		id: '10ac610c-30c1-4feb-81b4-0612b50b5e90',
		description: { contentData: [{ content: 'Dragonaire' }], contentText: ['Spawn ', 'keyMap-1'] },
	},
	{
		price: 600,
		keyWords: 'forgotten nursery,masterless gazebo,golden strong thread,material,gold steel web',
		location: 'Forgotten Nursery - Masterless Gazebo',
		name: 'Golden Strong Thread',
		rumorType: 'MATERIAL',
		id: '7eeb13ee-65d0-4a7b-aa4c-03dd9c57d85c',
		description: {
			contentData: [{ id: '802a5261-a9e4-46ec-9539-d7f99475edb5', name: 'Gold Steel Web', table: 'ITEM' }],
			contentText: ['Provide ', 'keyMap-1'],
		},
	},
	{
		price: 600,
		keyWords: 'soul space,edge of pitch darkness,faintly shining ore,material,pendegrune',
		location: 'Soul Space - Edge of Pitch Darkness',
		name: 'Faintly Shining Ore',
		rumorType: 'MATERIAL',
		id: 'adda7d26-10f2-4b9a-9238-d0b239964d6d',
		description: {
			contentData: [{ id: '7351a54c-d7dd-4063-a042-a318e0f135fd', name: 'Pendegrune', table: 'ITEM' }],
			contentText: ['Provide ', 'keyMap-1'],
		},
	},
	{
		price: 650,
		keyWords: 'fallen palace,blue sky altar,demon with horns,monster,devil horn',
		location: 'Fallen Palace - Blue Sky Altar',
		name: 'Demon with Horns',
		rumorType: 'MONSTER',
		id: '9934723e-752a-4612-a743-e8ca2bb3e8ab',
		description: { contentData: [{ content: 'Devil Horn' }], contentText: ['Spawn ', 'keyMap-1'] },
	},
	{
		price: 650,
		keyWords: "prospector's strand,prospector's hunt,brave master of water,monster,isanasius",
		location: "Prospector's Strand - Prospector's Hunt",
		name: 'Brave Master of Water',
		rumorType: 'MONSTER',
		id: '065715d1-9f2e-4d3f-8ec2-e4fa1cd9391e',
		description: { contentData: [{ content: 'Isanasius' }], contentText: ['Spawn ', 'keyMap-1'] },
	},
	{
		price: 700,
		keyWords: 'small islet,prayerless altar,maiden full of grudges,monster,dark maiden',
		location: 'Small Islet - Prayerless Altar',
		name: 'Maiden Full of Grudges',
		rumorType: 'MONSTER',
		id: 'dc2d9cd0-9955-492f-8ba5-919e3b73280f',
		description: { contentData: [{ content: 'Dark Maiden' }], contentText: ['Spawn ', 'keyMap-1'] },
	},
	{
		price: 700,
		keyWords: 'pilgrim road,puni among puni,monster,admiral puni',
		location: 'Pilgrim Road',
		name: 'Puni Among Puni',
		rumorType: 'MONSTER',
		id: '6f76fab1-cdfb-4128-b393-388e0578d757',
		description: { contentData: [{ content: 'Admiral Puni' }], contentText: ['Spawn ', 'keyMap-1'] },
	},
	{
		price: 750,
		keyWords: 'sealed temple,beyond desired dreams,sealed disaster,monster,sealed demon lord',
		location: 'Sealed Temple - Beyond Desired Dreams',
		name: 'Sealed Disaster',
		rumorType: 'MONSTER',
		id: '0e8cee03-cf9f-46c3-8762-9b040e731546',
		description: { contentData: [{ content: 'Sealed Demon Lord' }], contentText: ['Spawn ', 'keyMap-1'] },
	},
	{
		price: 750,
		keyWords: 'moon sun moor,a shattered star?,material,star powder',
		location: 'Moon Sun Moor',
		name: 'A Shattered Star?',
		rumorType: 'MATERIAL',
		id: '203dced5-107d-47d0-b269-355b3c15ad08',
		description: {
			contentData: [{ id: 'afcc7a38-8ef1-4e2f-bc1e-590a2f64053d', name: 'Star Powder', table: 'ITEM' }],
			contentText: ['Provide ', 'keyMap-1'],
		},
	},
	{
		price: 750,
		keyWords: 'scar of the land,pierced ruins,soaring monster bird,monster,rok',
		location: 'Scar of the Land - Pierced Ruins',
		name: 'Soaring Monster Bird',
		rumorType: 'MONSTER',
		id: '49e5a76d-816f-4d62-ab53-ca8a2b016849',
		description: { contentData: [{ content: 'Rok' }], contentText: ['Spawn ', 'keyMap-1'] },
	},
	{
		price: 1000,
		keyWords: 'verdant hill,icy cave,ruler of ice,monster,ice elemental',
		location: 'Verdant Hill - Icy Cave',
		name: 'Ruler of Ice',
		rumorType: 'MONSTER',
		id: 'c15e24b9-df3d-49f7-8576-0c8f0d729460',
		description: { contentData: [{ content: 'Ice Elemental' }], contentText: ['Spawn ', 'keyMap-1'] },
	},
	{
		price: 1000,
		keyWords: 'open ruins,ruler of wind,monster,wind elemental',
		location: 'Open Ruins',
		name: 'Ruler of Wind',
		rumorType: 'MONSTER',
		id: '3ae5061c-101a-4735-a0ac-d8b718cee306',
		description: { contentData: [{ content: 'Wind Elemental' }], contentText: ['Spawn ', 'keyMap-1'] },
	},
	{
		price: 1000,
		keyWords: 'scar of the land,pierced ruins,crystal blessed by spirits,material,spirit crystal',
		location: 'Scar of the Land - Pierced Ruins',
		name: 'Crystal Blessed by Spirits',
		rumorType: 'MATERIAL',
		id: 'f4e342ec-7a02-4415-a7f6-f2026f0bfdea',
		description: {
			contentData: [{ id: 'ac240a43-eea9-41ad-9d98-de02ca7c0c64', name: 'Spirit Crystal', table: 'ITEM' }],
			contentText: ['Provide ', 'keyMap-1'],
		},
	},
	{
		price: 1000,
		keyWords: 'underground lake,damp banks,ruler of the ocean,monster,grand ocean',
		location: 'Underground Lake - Damp Banks',
		name: 'Ruler of the Ocean',
		rumorType: 'MONSTER',
		id: '8631afa7-5e7e-4410-9c14-82a42e0b06c8',
		description: { contentData: [{ content: 'Grand Ocean' }], contentText: ['Spawn ', 'keyMap-1'] },
	},
	{
		price: 1100,
		keyWords: 'sealed temple,sacred bird, sharp fang of earth,monster,crimson fang,heavenly bird',
		location: 'Sealed Temple',
		name: 'Sacred Bird, Sharp Fang of Earth',
		rumorType: 'MONSTER',
		id: '72bca2ed-cde3-486e-bb8e-350b1bee578a',
		description: {
			contentData: [{ content: 'Crimson Fang' }, { content: 'Heavenly Bird' }],
			contentText: ['Spawn ', 'keyMap-1', ' and ', 'keyMap-3'],
		},
	},
	{
		price: 1250,
		keyWords: "moon sun moor,prayerless church,heaven's twin dragons,monster,moon eater durak,sun destroyer yasuk",
		location: 'Moon Sun Moor - Prayerless Church',
		name: "Heaven's Twin Dragons",
		rumorType: 'MONSTER',
		id: '4e093136-0e23-4c55-a83b-b3b1a8b74adb',
		description: {
			contentData: [{ content: 'Moon Eater Durak' }, { content: 'Sun Destroyer Yasuk' }],
			contentText: ['Spawn ', 'keyMap-1', ' and ', 'keyMap-3'],
		},
	},
	{
		price: 1500,
		keyWords: 'moon sun moor,sun waiting ring,ruler of light,monster,light elemental',
		location: 'Moon Sun Moor - Sun Waiting Ring',
		name: 'Ruler of Light',
		rumorType: 'MONSTER',
		id: '88e0348e-7bbb-4106-89c2-53babab1224c',
		description: { contentData: [{ content: 'Light Elemental' }], contentText: ['Spawn ', 'keyMap-1'] },
	},
	{
		price: 2000,
		keyWords: 'forest of fairies,flower blooming in silence,material,dunkelheit',
		location: 'Forest of Fairies',
		name: 'Flower Blooming in Silence',
		rumorType: 'MATERIAL',
		id: '44329036-4226-4500-ba42-d936a54a9ebc',
		description: {
			contentData: [{ id: '4aeb3148-1743-4337-b2f9-3f68e132e5c7', name: 'Dunkelheit', table: 'ITEM' }],
			contentText: ['Provide ', 'keyMap-1'],
		},
	},
	{
		price: 3000,
		keyWords: 'soul space,flash of darkness,monster,demon king',
		location: 'Soul Space',
		name: 'Flash of Darkness',
		rumorType: 'MONSTER',
		id: '3c2c8833-79cc-4d9d-957d-55869718f201',
		description: { contentData: [{ content: 'Demon King' }], contentText: ['Spawn ', 'keyMap-1'] },
	},
];

export default rumors;
