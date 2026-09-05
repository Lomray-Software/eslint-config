# @lomray/eslint-config

Lomray's shared ESLint configuration for TypeScript projects.

## Install

Requires Node `^22.13.0 || >=24`, ESLint 10.4+, TypeScript 4.8.4–6.0 and Prettier 3.

```sh
npm install --save-dev @lomray/eslint-config eslint@^10.4 typescript@~6.0 prettier@^3
```

Create `eslint.config.js` in a project with a `tsconfig.json`:

```js
import lomray from '@lomray/eslint-config';

export default lomray.config();
```

The default scope is `src/**/*.{ts,tsx,mts,cts}`. Type-aware rules use TypeScript’s project service and the nearest `tsconfig.json`.
Your files must be included in that project. Set `languageOptions.parserOptions.tsconfigRootDir`
when the config runs from a different working directory.

## Customize

```js
import lomray from '@lomray/eslint-config';

export default lomray.config({
    files: ['src/**/*.ts', 'tests/**/*.ts'],
    ignores: ['src/generated/**'],
    rules: {
        'import-x/prefer-default-export': 'off',
    },
});
```

Overrides are merged after the presets, preserving their other rules and parser settings.
For full control, spread `lomray.recommended` into your own flat config; it has no file scope.
Use a standalone `{ ignores: ['build/**'] }` entry to ignore files globally.

## Migrate from v6

- Use ESLint 10.4+ and the Node versions listed above.
- Rename `import/*` rules and `import/*` resolver settings to `import-x/*`.
  The TypeScript resolver and import ordering remain configured.
- `config({ rules, languageOptions, settings })` now merges overrides instead of replacing
  those sections in every preset.
- Type checking now uses `parserOptions.projectService`. If you set an explicit `project`,
  set `projectService: false` in the same override.
- `.mts` and `.cts` sources are included by default.

## Develop

```sh
npm ci
npm test
npm run test:packed
npm audit
```

The release workflow runs these checks before publishing a changed package version.
