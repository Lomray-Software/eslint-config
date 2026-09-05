import pluginImport from 'eslint-plugin-import-x';

export default {
    plugins: {
        'import-x': pluginImport,
    },
    languageOptions: {
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
    },
    settings: {
        'import-x/parsers': {
            espree: ['.js', '.cjs', '.mjs', '.jsx'],
        },
        'import-x/resolver': {
            typescript: true,
            node: true,
        },
    },
    rules: {
        'import-x/order': [
            'error',
            {
                alphabetize: { order: 'asc' },
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
                pathGroups: [
                    {
                        pattern: './**/styles*',
                        group: 'object',
                    },
                    {
                        pattern: './**/index.props',
                        group: 'object',
                    },
                ],
            },
        ],
        'import-x/extensions': ['error'],
        'import-x/no-unresolved': ['error'],
        'import-x/default': ['error'],
        'import-x/namespace': ['error', { allowComputed: true }],
        'import-x/no-self-import': ['error'],
        'import-x/no-useless-path-segments': ['error'],
        'import-x/export': ['error'],
        'import-x/no-duplicates': ['error', { considerQueryString: true }],
        'import-x/newline-after-import': ['error'],
        'import-x/prefer-default-export': ['error'],
        'import-x/no-named-default': ['error'],
        'import-x/no-named-as-default': 'warn',
        'import-x/no-named-as-default-member': 'warn',
    },
};
