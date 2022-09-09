import fs from 'fs';
import path from 'path';
import * as url from 'url';

import { createRequire } from 'module';

import eslint from 'eslint';
import I18nPropertyRule from '../../lib/rules/i18n-property.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const require = createRequire(import.meta.url);
const { RuleTester } = eslint;

describe('eslint-plugin-lwc-augmented/rules/i18n-property', () => {
  const ruleTester = new RuleTester({
    parser: require.resolve('@babel/eslint-parser'),
    parserOptions: {
      requireConfigFile: false,
      babelOptions: {
        parserOpts: {
          plugins: ['classProperties', ['decorators', { decoratorsBeforeExport: false }]]
        }
      }
    },
    extends: ['eslint:recommended']
  });

  ruleTester.run('i18n-property', I18nPropertyRule, {
    valid: [
      {
        name: 'Basic LWC component with i18n',
        code: fs.readFileSync(path.resolve(path.join(__dirname, '../fake-files/i18n/basic.js'))).toString(),
        options: [],
        filename: 'basic.js'
      }
    ],

    invalid: []
  });
});
