import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { describe, it } from 'node:test';
import { ESLint } from 'eslint';
import config from '../index.js';

const fixtureRoot = fileURLToPath(new URL('./fixtures/', import.meta.url));
const createLinter = (overrides = {}) =>
    new ESLint({
        cwd: fixtureRoot,
        overrideConfigFile: true,
        overrideConfig: config.config({
            languageOptions: { parserOptions: { tsconfigRootDir: fixtureRoot } },
            ...overrides,
        }),
    });

describe('ESLint 10 shared config', () => {
    it('lints a typed consumer without configuration errors', async () => {
        const [result] = await createLinter().lintFiles(['src/valid.ts']);

        assert.deepEqual(result.messages, []);
    });

    it('reports real type-aware problems', async () => {
        const [result] = await createLinter().lintFiles(['src/invalid.ts']);

        assert.ok(
            result.messages.some(
                ({ ruleId }) => ruleId === '@typescript-eslint/no-floating-promises',
            ),
        );
        assert.equal(result.fatalErrorCount, 0);
    });

    it('merges consumer overrides without discarding preset rules or the parser', async () => {
        const linter = createLinter({ rules: { '@typescript-eslint/require-await': 'off' } });
        const actual = await linter.calculateConfigForFile('src/invalid.ts');
        const [result] = await linter.lintFiles(['src/invalid.ts']);

        assert.equal(actual.rules['@typescript-eslint/require-await'][0], 0);
        assert.equal(actual.rules['import-x/no-unresolved'][0], 2);
        assert.ok(
            result.messages.some(
                ({ ruleId }) => ruleId === '@typescript-eslint/no-floating-promises',
            ),
        );
        assert.equal(result.fatalErrorCount, 0);
    });
});
