/** @type {Partial<import('eslint-define-config').Override>} */
const modernCodeConfig = {
	parserOptions: { project: './tsconfig.json', ecmaVersion: 'latest', sourceType: 'module' },
	parser: '@typescript-eslint/parser'
};

/** @type {Partial<import('eslint-define-config').Override>} */
const cjsCodeConfig = {
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	parser: '@typescript-eslint/parser'
};

/** @type {Partial<import('eslint-define-config').Rules>} */
const commonCodeRules = {
	'@typescript-eslint/comma-dangle': 'warn',
	'@typescript-eslint/no-unused-vars': 'off'
};

/** @type {Partial<import('eslint-define-config').Rules>} */
const modernCodeRules = {
	'@typescript-eslint/consistent-type-imports': 'warn',
	'@typescript-eslint/no-floating-promises': 'warn',
	'@typescript-eslint/require-await': 'off',
	'@typescript-eslint/unbound-method': 'off',
	'@typescript-eslint/no-unnecessary-type-assertion': 'off',
	'@typescript-eslint/no-misused-promises': [
		'error',
		{
			checksConditionals: true,
			checksSpreads: true,
			checksVoidReturn: { arguments: true, attributes: false, properties: false, returns: true, variables: false }
		}
	],
	...commonCodeRules
};

const cjsCodeRules = { '@typescript-eslint/no-var-requires': 'off', ...commonCodeRules };

/** @type {Partial<import('eslint-define-config').Rules>} */
const importRules = {
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
	]
};

/** @type {import('eslint-define-config').ESLintConfig} */
module.exports = {
	extends: ['plugin:prettier/recommended', 'next/core-web-vitals'],
	rules: {
		'prettier/prettier': 'warn',
		'react/destructuring-assignment': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/require-default-props': 'off'
	},
	overrides: [
		{
			extends: ['plugin:@typescript-eslint/recommended-type-checked'],
			files: ['**/*.ts', '**/*.tsx', '**/*.mjs'],
			...modernCodeConfig,
			plugins: ['unused-imports'],
			rules: { ...modernCodeRules, ...importRules }
		},
		{
			extends: ['plugin:@typescript-eslint/recommended'],
			files: ['**/*.cjs'],
			...cjsCodeConfig,
			plugins: ['unused-imports'],
			rules: { ...cjsCodeRules, ...importRules }
		},
		{
			extends: ['plugin:tailwindcss/recommended'],
			files: ['src/app/**/*.ts', 'src/app/**/*.tsx'],
			rules: {
				'tailwindcss/classnames-order': ['warn', { officialSorting: true }],
				'tailwindcss/no-custom-classname': 'off'
			},
			excludedFiles: ['src/server/**/*.ts', 'src/utils/server/**/*.ts']
		},
		{
			files: ['**/app/api/**/*.ts', '**/app/api/**/*.tsx'],
			rules: { '@next/next/no-img-element': 'off' }
		},
		{
			extends: ['plugin:markdown/recommended-legacy'],
			files: ['**/*.md', '**/*.mdx'],
			processor: 'markdown/markdown'
		},
		{ extends: ['plugin:json/recommended-legacy'], files: ['**/*.json'] }
	],
	ignorePatterns: ['node_modules', 'dist', '.next']
};
