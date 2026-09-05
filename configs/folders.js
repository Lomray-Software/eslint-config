import path from 'node:path';

const defaultRegexp = /^([a-z0-9]+)([A-Z][a-z0-9]+)*$/g;

const parseFilename = (filename) => {
    const extension = path.extname(filename);
    const basename = path.basename(filename, extension);
    const dir = path.dirname(filename);

    return {
        extension,
        basename,
        dir,
    };
};

const pluginFolders = {
    rules: {
        'match-regex': {
            meta: {
                schema: [
                    {
                        type: 'string',
                    },
                    {
                        type: 'string',
                    },
                ],
            },
            create(context) {
                const conventionRegexp = context.options[0] ?? defaultRegexp;
                const root = context.options[1];

                return {
                    Program(node) {
                        const filename = context.filename;
                        const absoluteFilename = path.resolve(filename);
                        const parsed = parseFilename(absoluteFilename);
                        const [, relativePath] = parsed.dir.split(root);

                        if (!relativePath) {
                            return;
                        }

                        relativePath.split(path.sep).forEach((directory) => {
                            if (!directory) {
                                return;
                            }

                            const regex = new RegExp(conventionRegexp);
                            const matchesRegex = regex.test(directory);

                            if (!matchesRegex) {
                                context.report({
                                    node,
                                    message:
                                        "FolderName '{{name}}' in path '{{path}}' does not match the naming convention.",
                                    data: {
                                        name: directory,
                                        path: relativePath,
                                    },
                                });
                            }
                        });
                    },
                };
            },
        },
    },
};

export default {
    plugins: {
        folders: pluginFolders,
    },
    rules: {
        'folders/match-regex': [2, '^[a-z-]+$', '/src/'],
    },
};
