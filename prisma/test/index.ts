import type { HIGHLIGHT_TEXT, HYPER_LINK_RECORD, HYPER_LINK_SEARCH, Rumor } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { highlightTextValidator, hyperLinkValidator } from '@root/types/common/zod';
import { writeFile } from 'fs/promises';
import rumors from 'prisma/data/rumors';

const prisma = new PrismaClient();

async function seed() {
	const data: Rumor[] = rumors.map(({ description, ...rest }) => {
		let contentText = '';
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
						linkRecordMap.push({
							id: res.meta.id,
							name: res.meta.name,
							table: res.table,
						});
						contentText += `@{linkRecordMap-${linkRecordMap.length - 1}}`;
						return;
					} else {
						linkSearchMap.push({
							...res.meta.search,
						});
						contentText += `@{linkSearchMap-${linkRecordMap.length - 1}}`;
						return;
					}
				}
				const resultText = highlightTextValidator.safeParse(data);

				if (resultText.success) {
					highlightTextMap.push(resultText.data);
					contentText += `@{highlightTextMap-${highlightTextMap.length - 1}}`;
					return;
				}
				contentText += element;
			} catch (error) {
				contentText += element;
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
