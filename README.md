# Node package template

Template to create a typescript node Package from scratch.

### Setting a node package

This template is configured for use with `typescript` and `jest` .

Please change  the settings below in the file `package.json`
- `name` : the name of your package (this name will be used to publish the package on **npm**)
- `packageModuleName` : the name of the **U**niversal **M**odule **D**efinition*
- `urlName`: the name of the generated UMD file
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