export default {
  rules: {},
  configs: {
    recommended: {
      extends: ['eslint:recommended'],
      plugins: ['eslint-plugin-lwc-augmented'],
      env: {
        browser: true,
        es6: true
      },
      parserOptions: {
        ecmaVersion: 5
      },
      globals: {},
      rules: {}
    }
  }
};
