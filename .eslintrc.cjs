/** @type {import('prettier').Config} */
const prettierRules = {
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

/** @type {Partial<import('eslint-define-config').Override>} */
const tsCodeConfig = {
	parserOptions: { project: './tsconfig.json', ecmaVersion: 'latest', sourceType: 'module' },
	parser: '@typescript-eslint/parser'
};

/** @type {Partial<import('eslint-define-config').Override>} */
const jsCodeConfig = {
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	parser: '@typescript-eslint/parser'
};

/** @type {Partial<import('eslint-define-config').Rules>} */
const commonCodeRules = {
	'@typescript-eslint/comma-dangle': 'warn',
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
	]
};

/** @type {Partial<import('eslint-define-config').Rules>} */
const tsCodeRules = {
	'@typescript-eslint/consistent-type-imports': 'warn',
	'@typescript-eslint/no-unused-vars': 'off',
	...commonCodeRules
};

/** @type {Partial<import('eslint-define-config').Rules>} */
const jsCodeRules = {
	'@typescript-eslint/ban-ts-comment': 'off',
	'@typescript-eslint/no-var-requires': 'off',
	...commonCodeRules
};

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
	overrides: [
		{
			extends: ['plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
			files: ['**/*.mjs', '**/*.cjs'],
			...jsCodeConfig,
			rules: { ...jsCodeRules, 'prettier/prettier': ['warn', prettierRules] }
		},
		{
			extends: [
				'plugin:prettier/recommended',
				'plugin:@typescript-eslint/recommended-type-checked',
				'next/core-web-vitals',
				'plugin:tailwindcss/recommended'
			],
			files: ['**/*.ts', '**/*.tsx'],
			...tsCodeConfig,
			plugins: ['unused-imports'],
			rules: {
				...tsCodeRules,
				...importRules,
				'react/destructuring-assignment': 'off',
				'react/jsx-props-no-spreading': 'off',
				'react/require-default-props': 'off',
				'prettier/prettier': ['warn', prettierRules],
				'tailwindcss/classnames-order': ['warn', { officialSorting: true }],
				'tailwindcss/no-custom-classname': 'off'
			}
		},
		{
			extends: ['next/core-web-vitals'],
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
