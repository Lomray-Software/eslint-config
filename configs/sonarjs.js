import pluginSonarjs from 'eslint-plugin-sonarjs';

export default {
    plugins: {
        sonarjs: pluginSonarjs,
    },
    rules: {
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
    },
};
