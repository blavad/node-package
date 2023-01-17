# Node package template

Template to create a typescript node Package from scratch.

### Settings our node package

This template contains is configured to be used with `typescript` and `jest`.

Please edit the following attributes in the `package.json` file:
- `name` : the name of your package (this name will be used to publish the package on **npm**)
- `packageModuleName` : the name of the module when using the package in HTML  
- `urlName`: the name of the generated javascript file that can be included in HTML
- `description`: the description of the package  


### Publish a new version to NPM
```bash
npm version [major | minor | patch] -m "My message"
npm publish
```

### References 
- https://blog.logrocket.com/publishing-node-modules-typescript-es-modules/
- https://cloudfour.com/thinks/how-to-publish-an-updated-version-of-an-npm-package/ 
- https://zellwk.com/blog/publish-to-npm/ 