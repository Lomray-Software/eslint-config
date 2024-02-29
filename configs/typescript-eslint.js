import tsEslint from 'typescript-eslint';

export default {
    plugins: {
        '@typescript-eslint': tsEslint.plugin,
    },
    languageOptions: {
        parser: tsEslint.parser,
        parserOptions: {
            project: true,
        },
    },
    rules: {
        'no-unused-vars': 'off',
        'no-array-constructor': 'off',
        'no-loss-of-precision': 'off',
        'no-implied-eval': 'off',
        'require-await': 'off',

        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-duplicate-type-constituents': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-redundant-type-constituents': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-enum-comparison': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': 'error',
        '@typescript-eslint/unbound-method': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-duplicate-enum-values': 'error',
        '@typescript-eslint/no-extra-non-null-assertion': 'error',
        '@typescript-eslint/no-loss-of-precision': 'error',
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-this-alias': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-unsafe-declaration-merging': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/no-unused-vars': ['warn', { varsIgnorePattern: '^[_]+$' }],
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                allowSingleExtends: true,
            },
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
                prefix: ['T'],
            },
        ],
    },
};
