### Webpack ready skeletal project
- For prototyping it's very quick to clone this skeletal and start working out of the box

### Feature
This skeletal contains the following libraries bundled together

- Bootstrap (Sass) based
- Typescript
- Jquery
- Webpack

### Directory Structure
```
.
├── assets
│   ├── sass
│   └── typescripts
├── public
│   ├── build
│   └── index.html
├── cleanup.sh
├── package.json
├── README.md
├── tsconfig.json
├── webpack.config.js
└── webpack.config.prod.js
```

### Directory Descriptions

|Directory | Remarks|
|----------|--------|
|assets/sass| All the sass files will be here|
|assets/typescript| All the typescript source files will be here|
|public/build | Webpack generates bundled css, js, resources and place them in build folder.|

### File Descriptions
| File | Remarks |
|------|---------|
|cleanup.sh | Used to cleanup the public directory, very useful during development|
|package.json | Node module package configuration |
|tsconfig.json | Typescript configuration file |
|webpack.config.js | Webpack Configuration File |
|webpack.config.prod.js | Webpack configuration, supposedly to be used for production. The only difference is it minifies the js, css files. It also limits the output from webpack.

### How to use it?
```bash
$ git clone https://github.com/samundra/webpack-skeletal.git
$ cd webpack-skeletal
$ npm install

// Webpack will execute and generate css, js in `public/build` folder in respective folders
$ node_modules/.bin/webpack
```
 
### Development
Host the application in webserver, point document root to `public` and see browse it.
You should be to see your changes. I generally use ```php```s in-built web-server.

Below command will run PHP's builtin web-server accessible at ```http://localhost:5000```
```bash
$ php -S localhost:5000 -t public
```

### Cleanup Build folder
 ```bash
 $ cd webpack-skeletal
 $ ./cleanup.sh
 ```

### TODO
- add live-reload
- better code-splitting (https://webpack.js.org/guides/code-splitting/)
- add JSX
- add RxJS in webpack

### Contributions
- PRs are always welcome, please fork it and send PRs.
