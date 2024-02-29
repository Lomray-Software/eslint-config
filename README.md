# eslint-config

This package provides Lomray eslint config as an extensible shared config.

## Usage

1. Install package:

  ```sh
  npm i --save-dev @lomray/eslint-config
  ```

2. Add config to your `eslint.config.js`
```js
import config from '@lomray/eslint-config';

export default [
    ...config.recommended,  
];
```
