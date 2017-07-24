This project illustrates a problem with webpack/babel that does not transpile
required module when it is included in node_modules as link created by lerna (which is a typical
use case of monorepo).

Steps to reproduce:

```
$ npm install -g lerna
$ lerna bootstrap
$ cd packages/webApp
$ npm run build
```

This will report error:
`ERROR in bundle.js from UglifyJs
SyntaxError: Unexpected token: punc ()) [../shared/index.js:1,0]`

If you copy `packages/shared` into `packages/webApp/node_modules`, then you will not
get this error and `shared` package will be transpiled.