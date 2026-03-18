import pluginUnicorn from 'eslint-plugin-unicorn';

export default {
    plugins: {
        unicorn: pluginUnicorn,
    },
    rules: {
        'unicorn/consistent-destructuring': ['error'],
        'unicorn/error-message': ['error'],
        'unicorn/filename-case': ['error', { case: 'kebabCase' }],
        'unicorn/no-array-push-push': ['error'],
        'unicorn/no-nested-ternary': 'off',
        'unicorn/no-this-assignment': ['error'],
        'unicorn/no-unused-properties': ['error'],
        'no-restricted-imports': [
            'error',
            {
                patterns: [
                    {
                        group: ['**/index', '**/index.*'],
                        message: 'Import a directory instead of targeting its index file directly.',
                    },
                ],
            },
        ],
        'unicorn/prefer-date-now': ['error'],
        'unicorn/prefer-default-parameters': ['error'],
        'unicorn/prefer-number-properties': ['error'],
        'unicorn/prefer-reflect-apply': ['error'],
        'unicorn/prefer-regexp-test': ['error'],
        'unicorn/prefer-set-has': ['error'],
        'unicorn/prefer-string-starts-ends-with': ['error'],
        'unicorn/throw-new-error': ['error'],
    },
};
