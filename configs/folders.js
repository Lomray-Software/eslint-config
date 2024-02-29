import pluginFolders from 'eslint-plugin-folders';

export default {
    plugins: {
        folders: pluginFolders,
    },
    rules: {
        'folders/match-regex': [2, '^[a-z-]+$', '/src/'],
    },
};
