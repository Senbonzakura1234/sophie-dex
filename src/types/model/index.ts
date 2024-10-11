import type { CommonRecord } from '@root/server/postgresql/schema';
import type { PreparedPGQuery } from '@root/types/common';
import type { ModuleIdEnum } from '@root/types/common/zod/generic';

export type ListMetaData = { totalPage: number; totalRecord: number };

export type ListRecord<TRecord extends CommonRecord> = { records: Array<TRecord> } & ListMetaData;

export type ExportDBQueriesMap = Record<ModuleIdEnum, PreparedPGQuery<Array<CommonRecord>>>;
export type GetBookmarksQueriesMap = {
	effect: PreparedPGQuery<{ bookmarkedEffectList: Array<string> } | undefined>;
	item: PreparedPGQuery<{ bookmarkedItemList: Array<string> } | undefined>;
	rumor: PreparedPGQuery<{ bookmarkedRumorList: Array<string> } | undefined>;
	trait: PreparedPGQuery<{ bookmarkedTraitList: Array<string> } | undefined>;
};
