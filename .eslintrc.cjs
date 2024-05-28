// @ts-check

/** @type {import('prettier').Config} */
const prettierConfig = {
	arrowParens: 'avoid',
	bracketSameLine: false,
	bracketSpacing: true,
	endOfLine: 'auto',
	jsxSingleQuote: true,
	printWidth: 120,
	singleQuote: true,
	tabWidth: 3,
	trailingComma: 'none',
	useTabs: true
};

/** @type {import('eslint-define-config').ESLintConfig} */
module.exports = {
	extends: ['plugin:@typescript-eslint/recommended', 'next/core-web-vitals'],
	overrides: [
		{ plugins: ['markdown'], files: ['**/*.md', '**/*.mdx'], processor: 'markdown/markdown' },
		{ extends: ['plugin:json/recommended-legacy'], files: ['**/*.json'] },
		{
			extends: ['plugin:prettier/recommended'],
			files: ['**/*.mjs', '**/*.cjs'],
			parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
			rules: {
				'@typescript-eslint/ban-ts-comment': 'off',
				'@typescript-eslint/no-var-requires': 'off',
				'prettier/prettier': ['warn', prettierConfig]
			}
		},
		{
			extends: ['plugin:tailwindcss/recommended'],
			files: ['**/*.ts', '**/*.tsx'],
			rules: {
				'tailwindcss/classnames-order': ['warn', { officialSorting: true }],
				'tailwindcss/no-custom-classname': 'off'
			},
			excludedFiles: ['src/server/postgresql/repository/seed/**/*.ts']
		},
		{
			extends: ['plugin:prettier/recommended'],
			files: ['**/*.ts', '**/*.tsx'],
			parserOptions: { project: './tsconfig.json', ecmaVersion: 'latest', sourceType: 'module' },
			plugins: ['@typescript-eslint', 'unused-imports'],
			rules: {
				'@typescript-eslint/comma-dangle': 'warn',
				'@typescript-eslint/consistent-type-imports': 'warn',
				'@typescript-eslint/no-unused-vars': 'off',
				'import/extensions': [
					'warn',
					'ignorePackages',
					{ '': 'never', js: 'never', jsx: 'never', ts: 'never', tsx: 'never' }
				],
				'react/destructuring-assignment': 'off',
				'react/jsx-props-no-spreading': 'off',
				'react/require-default-props': 'off',
				'sort-imports': [
					'warn',
					{
						allowSeparatedGroups: true,
						ignoreCase: false,
						ignoreDeclarationSort: true,
						ignoreMemberSort: false,
						memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
					}
				],
				'unused-imports/no-unused-imports': 'warn',
				'unused-imports/no-unused-vars': [
					'warn',
					{ vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
				],
				'prettier/prettier': ['warn', prettierConfig]
			}
		},
		{
			files: ['**/og/**/*.ts', '**/og/**/*.tsx'],
			rules: { '@next/next/no-img-element': 'off' }
		}
	],
	parser: '@typescript-eslint/parser'
};
