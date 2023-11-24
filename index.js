module.exports = {
	extends: [
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'import', 'lodash', 'sonarjs', 'unicorn', 'folders'],
	rules: {
		'no-shadow': 'off',
		'no-void': 'off',
		'linebreak-style': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-unnecessary-type-assertion': 'off',
		'no-undef': 'warn',
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{ varsIgnorePattern: '^[_]+$' }
		],
		'@typescript-eslint/no-empty-interface': [
			'error',
			{
				allowSingleExtends: true
			}
		],
		'@typescript-eslint/array-type': ['error'],
		'@typescript-eslint/default-param-last': ['error'],
		'@typescript-eslint/no-shadow': ['error'],
		'@typescript-eslint/consistent-type-imports': ['error'],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'variable',
				types: ['boolean'],
				format: ['PascalCase', 'UPPER_CASE'],
				prefix: ['is', 'IS_', 'should', 'has', 'can', 'did', 'will'],
			},
			{
				selector: 'interface',
				format: ['StrictPascalCase'],
				prefix: ['I'],
			},
			{
				selector: 'typeParameter',
				format: ['PascalCase'],
				prefix: ['T']
			}
		],
		'camelcase': ['error'],
		'eol-last': ['error'],
		'object-curly-spacing': ['error', 'always'],
		'curly': ['error'],
		'for-direction': ['error'],
		'eqeqeq': ['error', 'always', { null: 'ignore' }],
		'use-isnan': ['error'],
		'arrow-parens': ['error'],
		'no-else-return': ['error'],
		'valid-typeof': ['error'],
		'object-shorthand': ['error'],
		'prefer-arrow-callback': ['error'],
		'prefer-const': ['error'],
		'prefer-destructuring': ['error'],
		'prefer-template': ['error'],
		'no-empty': ['error'],
		'no-var': ['error'],
		'no-array-constructor': ['error'],
		'no-lonely-if': ['error'],
		'no-multiple-empty-lines': ['error'],
		'no-extra-boolean-cast': ['error'],
		'no-empty-pattern': ['error'],
		'no-fallthrough': ['error'],
		'no-implicit-coercion': ['error'],
		'no-return-await': ['error'],
		'no-self-assign': ['error'],
		'no-useless-catch': ['error'],
		'no-useless-escape': ['error'],
		'require-await': ['error'],
		'no-extra-semi': ['error'],
		'no-promise-executor-return': ['error'],
		'no-unreachable': ['error'],
		'no-unreachable-loop': ['error'],
		'no-unsafe-negation': ['error'],
		'no-async-promise-executor': ['error'],
		'no-await-in-loop': ['error'],
		'no-dupe-args': ['error'],
		'no-dupe-keys': ['error'],
		'no-duplicate-case': ['error'],
		'no-dupe-else-if': ['error'],
		'arrow-body-style': ['error', 'as-needed'],
		'import/order': ['error', {
			alphabetize: { order: 'asc' },
			groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
			pathGroups: [
				{
					pattern: './**/styles*',
					group: 'object'
				},
				{
					pattern: './**/index.props',
					group: 'object'
				}
			],
		}],
		'import/no-unresolved': ['error'],
		'import/named': ['error'],
		'import/default': ['error'],
		'import/namespace': ['error', { allowComputed: true }],
		'import/no-self-import': ['error'],
		'import/no-useless-path-segments': ['error'],
		'import/export': ['error'],
		'import/no-duplicates': ['error', {considerQueryString: true}],
		'import/newline-after-import': ['error'],
		'import/prefer-default-export': ['error'],
		'import/no-named-default': ['error'],
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'never', prev: 'import', next: 'import' },
			{ blankLine: 'always', prev: '*', next: ['return', 'function', 'if', 'export', 'switch'] },
			{ blankLine: 'always', prev: ['if', 'switch'], next: '*' },
			{ blankLine: 'always', prev: ['const', 'let'], next: 'expression' },
		],
		'lodash/prefer-is-nil': ['error'],
		'lodash/prefer-some': ['error'],
		'lodash/prefer-matches': ['error'],
		'lodash/prefer-noop': ['error'],
		// 'sonarjs/cognitive-complexity': ['error', 30],
		'sonarjs/no-extra-arguments': ['error'],
		'sonarjs/no-all-duplicated-branches': ['error'],
		'sonarjs/no-element-overwrite': ['error'],
		'sonarjs/no-identical-conditions': ['error'],
		'sonarjs/no-identical-expressions': ['error'],
		'sonarjs/no-one-iteration-loop': ['error'],
		'sonarjs/no-use-of-empty-return-value': ['error'],
		'sonarjs/no-collapsible-if': ['error'],
		'sonarjs/no-duplicate-string': ['error'],
		'sonarjs/no-duplicated-branches': ['error'],
		'sonarjs/no-identical-functions': ['error'],
		'sonarjs/no-inverted-boolean-check': ['error'],
		'sonarjs/no-redundant-boolean': ['error'],
		'sonarjs/no-redundant-jump': ['error'],
		'sonarjs/no-same-line-conditional': ['error'],
		'sonarjs/prefer-immediate-return': ['error'],
		'sonarjs/prefer-single-boolean-return': ['error'],
		'unicorn/consistent-destructuring': ['error'],
		'unicorn/error-message': ['error'],
		'unicorn/filename-case': ['error', { case: 'kebabCase' }],
		'unicorn/import-index': ['error'],
		'unicorn/no-array-push-push': ['error'],
		'unicorn/no-nested-ternary': ['error'],
		'unicorn/no-this-assignment': ['error'],
		'unicorn/no-unused-properties': ['error'],
		'unicorn/prefer-date-now': ['error'],
		'unicorn/prefer-default-parameters': ['error'],
		'unicorn/prefer-number-properties': ['error'],
		'unicorn/prefer-reflect-apply': ['error'],
		'unicorn/prefer-regexp-test': ['error'],
		'unicorn/prefer-set-has': ['error'],
		'unicorn/prefer-string-starts-ends-with': ['error'],
		'unicorn/throw-new-error': ['error'],
		'folders/match-regex': [2, '^[a-z-]+$', '/src/'],
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'],
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			}
		},
		react: {
			version: 'detect',
		}
	},
};
