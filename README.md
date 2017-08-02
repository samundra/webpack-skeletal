### Webpack ready skeletal project
- For prototyping it's very quick to clone this skeletal and start working out of the box

### Feature
This skeletal contains the following libraries bundled together

- Bootstrap (Sass) based
- Typescript
- Jquery
- Webpack

### How to use it?
```bash
$ git clone https://github.com/samundra/webpack-skeletal.git
$ cd webpack-skeletal
$ npm install
$ node_modules/.bin/webpack
```
 
### View the changes
Host the application in webserver, point document root to `public` and see browse it.
You should be to see your changes. I generally use `php` to create server.

Below command will run PHP's builtin server that can be accessed at ```http://localhost:5000```
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
- add JsX

### Contributions
