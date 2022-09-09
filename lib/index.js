import i18nPropertyRule from './rules/i18n-property.js';

export default {
  rules: {
    i18nProperty: i18nPropertyRule
  },
  configs: {
    recommended: {
      extends: ['eslint:recommended'],
      plugins: ['eslint-plugin-lwc-augmented'],
      env: {
        browser: true,
        es6: true
      },
      parserOptions: {
        ecmaVersion: 2021
      },
      globals: {},
      rules: {
        'lwc-augmented/i18nProperty': 'error'
      }
    }
  }
};
