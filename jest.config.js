// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

const clearMocks = true;
const collectCoverage = true;
const collectCoverageFrom = [
  'lib/**/*.{js,jsx}'
];
const coverageDirectory = 'coverage';
const globalSetup = './globalSetup.js';
const moduleFileExtensions =  ['js'];
const rootDir = './test';
const testEnvironment = 'node';
const testRegex = [
  '.*test\\.js$'
];
const transform = { };

export default {
  clearMocks,
  collectCoverage,
  collectCoverageFrom,
  coverageDirectory,
  globalSetup,
  moduleFileExtensions,
  rootDir,
  testEnvironment,
  testRegex,
  transform
};
