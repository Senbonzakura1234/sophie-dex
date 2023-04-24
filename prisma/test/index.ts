import type { HIGHLIGHT_TEXT, HYPER_LINK_RECORD, HYPER_LINK_SEARCH, Rumor } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { highlightTextValidator, hyperLinkValidator } from '@root/types/common/zod';
import { writeFile } from 'fs/promises';
import rumors from 'prisma/data/rumors';

const prisma = new PrismaClient();

async function seed() {
	const data: Rumor[] = rumors.map(({ description, ...rest }) => {
		const contentText: string[] = [];
		const linkRecordMap: HYPER_LINK_RECORD[] = [];
		const linkSearchMap: HYPER_LINK_SEARCH[] = [];
		const highlightTextMap: HIGHLIGHT_TEXT[] = [];

		description.forEach(element => {
			try {
				const data = JSON.parse(element);
				const resultLink = hyperLinkValidator.safeParse(data);
				if (resultLink.success) {
					const res = resultLink.data;
					if (res.meta.type === 'RECORD') {
						contentText.push(`linkRecordMap-${linkRecordMap.length}`);
						linkRecordMap.push({
							id: res.meta.id,
							name: res.meta.name,
							table: res.table,
						});
						return;
					} else {
						contentText.push(`linkSearchMap-${linkSearchMap.length}`);
						linkSearchMap.push({
							table: res.table,
							searchQuery: res.meta.search,
						});
						return;
					}
				}
				const resultText = highlightTextValidator.safeParse(data);

				if (resultText.success) {
					contentText.push(`highlightTextMap-${highlightTextMap.length}`);
					highlightTextMap.push(resultText.data);
					return;
				}
				contentText.push(element);
			} catch (error) {
				contentText.push(element);
			}
		});

		return {
			description,
			...rest,
			newDescription: {
				contentText,
				linkSearchMap,
				linkRecordMap,
				highlightTextMap,
			},
		};
	});

	await writeFile('out.json', JSON.stringify(data));
}

seed()
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
