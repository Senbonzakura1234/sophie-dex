export type SearchQuery<Model extends Record<string, unknown>> = {
	query?: string | undefined;
	page?: number | undefined;
	limit?: number | undefined;
	sortBy?: keyof Model | undefined;
	isAscending?: boolean | undefined;
};

export type FindAllResult<Model extends Record<string, unknown>> = {
	result: Model[];
	page: number;
	limit: number;
	totalPage: number;
	totalRecord: number;
};
