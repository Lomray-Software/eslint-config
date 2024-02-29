import base from './configs/base';
import typescriptEslint from './configs/typescript-eslint';
import folders from './configs/folders';
import pluginImport from './configs/import';
import unicorn from './configs/unicorn';
import sonarjs from './configs/sonarjs';
import lodash from './configs/lodash';
import pluginPrettier from 'eslint-plugin-prettier/recommended';

export default {
	recommended: [
		base,
		typescriptEslint,
		folders,
		pluginImport,
		unicorn,
		sonarjs,
		lodash,
		pluginPrettier,
	],
};
