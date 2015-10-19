ReactStarter is a simple starter kit for those wanting to play around with React without having to go through the process of installing it's dependencies and configuring the required build tools.

[Webpack](https://webpack.github.io/) is the chosen tool for building and serving this app - it seems to be the most popular within the React community. It has been configured to use [Babel](https://babeljs.io/) to transpile your ES6 and JSX for the browser. It also uses [React Hot Loader](https://gaearon.github.io/react-hot-loader/) so that you can make changes to your React components and watch them update automatically in the browser without losing your app state.

# Getting setup

Clone this repository into a directory on your machine.

```
$ git clone https://github.com/SevenInitiative/ReactStarter.git
```

Navigate into the new directory.

```
$ cd ReactStarter
```

Install all required dev tools and dependencies with the node package manager.

```
$ npm install
```

Build the project by running webpack (or the npm build script).

```
$ npm run build
```

Serve the project using webpack-dev-server using the start script defined in package.json.

```
$ npm start
```

You should now be able to access your project at [http://localhost:8080](http://localhost:8080).

Start hacking!
