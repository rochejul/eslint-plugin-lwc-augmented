import path from 'path';
import * as url from 'url';
import eslint from 'eslint';
import * as eslintrc from '@eslint/eslintrc';
import { jest } from '@jest/globals';

import eslintLwcAugmented from '../index.js';

const { ESLint } = eslint;
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const baseTestFiles = path.resolve(path.join(__dirname, './fake-files/'));
const mockEslintLwcAugmentedPath = path.resolve(__dirname, '../index.js');

jest.mock(
  '@eslint/eslintrc',
  () => {
    return {
      ModuleResolver: {
        ...jest.requireActual('@eslint/eslintrc'),
        resolve: () => {
          return mockEslintLwcAugmentedPath;
        }
      }
    };
  },
  { virtual: true }
);

describe('eslint-plugin-lwc-augmented - ', () => {
  let instance;

  beforeEach(() => {
    jest.resetModules();
    jest.spyOn(eslintrc.ModuleResolver, 'resolve').mockImplementation(() => mockEslintLwcAugmentedPath);
  });

  beforeEach(async () => {
    instance = new ESLint({
      baseConfig: eslintLwcAugmented.configs.recommended,
      useEslintrc: false,
      ignore: false
    });
  });

  function extractErrorReport(errorReport) {
    return errorReport.messages.map(({ ruleId, message }) => `${ruleId}::${message}`);
  }

  test('with basic code', async () => {
    const eslintReport = await instance.lintFiles([`${baseTestFiles}/basic.js`]);
    const [errorReport] = eslintReport.results;

    expect(extractErrorReport(errorReport)).toMatchSnapshot();
  });
});
