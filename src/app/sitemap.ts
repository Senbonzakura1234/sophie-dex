import { moduleIdList } from '@root/constants/common';
import { getBaseUrl } from '@root/utils/common';
import { getOgImgUrl, getSiteMapPriority } from '@root/utils/server';
import { generateRecordDetailSitemap, generateRecordListSitemap } from '@root/utils/server/database';
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const detailList = await Promise.all(moduleIdList.map(generateRecordDetailSitemap));

	return [
		{
			url: getBaseUrl(true),
			changeFrequency: 'weekly',
			priority: getSiteMapPriority('home'),
			images: [getOgImgUrl()]
		},
		...detailList.flat(),
		...generateRecordListSitemap(),
		{
			url: `${getBaseUrl(true)}/about`,
			changeFrequency: 'weekly',
			priority: getSiteMapPriority('about'),
			images: [getOgImgUrl()]
		},
		{
			url: `${getBaseUrl(true)}/license`,
			changeFrequency: 'monthly',
			priority: getSiteMapPriority('license'),
			images: [getOgImgUrl()]
		}
	];
}
