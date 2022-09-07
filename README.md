# eslint-plugin-lwc-augmented

Eslint plugin for LWC where we augment some rules and code convention

## Install it

### Globally

````
npm install --global eslint-plugin-lwc-augmented
````

### In your project

````
npm install --save --save-exact eslint-plugin-lwc-augmented
````

## Configure your eslintrc file

Here an example of configuration which uses the plugin

```js
{
  // Instal the lwc-augmented plugin, please do:
  // > npm install -g eslint-plugin-lwc-augmented
  "plugins": [
    "lwc-augmented"
  ],
  "extends": [
    "plugin:lwc-augmented/recommended"
  ]
}
```

## Rules

 * 