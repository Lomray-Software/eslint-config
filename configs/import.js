import pluginImport from 'eslint-plugin-import';

export default {
    plugins: {
        import: pluginImport,
    },
    languageOptions: {
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
    },
    settings: {
        'import/parsers': {
            espree: ['.js', '.cjs', '.mjs', '.jsx'],
        },
        'import/resolver': {
            typescript: true,
            node: true,
        },
    },
    rules: {
        'import/order': [
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
        'import/no-unresolved': ['error'],
        'import/default': ['error'],
        'import/namespace': ['error', { allowComputed: true }],
        'import/no-self-import': ['error'],
        'import/no-useless-path-segments': ['error'],
        'import/export': ['error'],
        'import/no-duplicates': ['error', { considerQueryString: true }],
        'import/newline-after-import': ['error'],
        'import/prefer-default-export': ['error'],
        'import/no-named-default': ['error'],
        'import/no-named-as-default': 'warn',
        'import/no-named-as-default-member': 'warn',
    },
};
