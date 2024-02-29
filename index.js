import pluginPrettier from 'eslint-plugin-prettier/recommended';
import base from './configs/base.js';
import typescriptEslint from './configs/typescript-eslint.js';
import folders from './configs/folders.js';
import pluginImport from './configs/import.js';
import unicorn from './configs/unicorn.js';
import sonarjs from './configs/sonarjs.js';
import lodash from './configs/lodash.js';

const filesIgnores = {
	files: ['src/**/*.{ts,tsx,*.ts,*tsx}'],
	ignores: ['node_modules/**/*', 'build/**/*'],
};

const recommended = [
	base,
	typescriptEslint,
	folders,
	pluginImport,
	unicorn,
	sonarjs,
	lodash,
	pluginPrettier,
]

export default {
	filesIgnores,
	recommended,
	config: (extendConfig = filesIgnores) =>
		recommended.map((original) => ({ ...original, ...extendConfig })),
};
