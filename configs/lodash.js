import pluginLodash from 'eslint-plugin-lodash';

export default {
    plugins: {
        lodash: pluginLodash,
    },
    rules: {
        'lodash/prefer-is-nil': ['error'],
        'lodash/prefer-some': ['error'],
        'lodash/prefer-matches': ['error'],
    },
};
