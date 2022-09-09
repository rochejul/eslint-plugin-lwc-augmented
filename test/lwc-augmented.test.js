import eslint from 'eslint';

const { RuleTester } = eslint;

describe('eslint-plugin-lwc-augmented', () => {
  test('could instantiate ruleTester', () => {
    const ruleTester = new RuleTester({
      parserOptions: {
        requireConfigFile: false
      },
      extends: ['eslint:recommended']
    });
    
    expect(ruleTester).toBeDefined();
  });
});
