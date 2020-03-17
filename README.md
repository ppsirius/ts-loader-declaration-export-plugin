# ts-loader-declaration-export-plugin

# Currently WIP!!!

# What is this?

This is a small webpack plugin to export only declaration files you choose. It's connected with ts-loader. So you install it first and then add "declaration": true in tsconfig.json.

# How do I use it?

## Add plugin

```sh
yarn add ts-loader-declaration-export-plugin
```

```sh
npm install ts-loader-declaration-export-plugin
```

## Add plugin to webpack

```javascript
// webpack.config.js
const DeclarationExportPlugin = require('ts-loader-declaration-export-plugin');

module.exports = {
  ...
  plugins: [
    new DeclarationExportPlugin({
      modulePath: 'src/index.d.ts',
      output: 'index.d.ts',
      folderName: path
        .resolve(__dirname, '')
        .split('/')
        .pop(),
    }),
  ],
  ...
}
```

### Enjoy ;)
