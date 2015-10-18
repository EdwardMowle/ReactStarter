# Setting up the app

Install all required dev tools and dependencies with the node package manager.

```
npm install
```

Build the project by running webpack.

```
webpack
```

Serve the project using webpack-dev-server.

For convenience a start script has been defined in package.json to do this:

```
npm start
```

You should now be able to access your project on port http://localhost:8080. Webpack has been configured to transpile your ES6 and JSX to ES5 javascript for the browser. It also uses react-hot loader so that when you make updates to your React components they automatically update in the browser without requiring a manual refresh or a reset of your application state.
