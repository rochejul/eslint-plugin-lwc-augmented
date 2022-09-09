import eslint from 'eslint';
import * as eslintParser from '@babel/eslint-parser';

const { RuleTester } = eslint;

describe('eslint-plugin-lwc-augmented', () => {
  test('could instantiate ruleTester', () => {
    const ruleTester = new RuleTester({
      parser: eslintParser,
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
    
    expect(ruleTester).toBeDefined();
  });
});
