ReactStarter is a simple starter kit for those wanting to play around with React without having to go through the process of configuring the required build tools.

Webpack is the chosen tool for building and serving this app. It has been configured to use Babel to transpile your ES6 and JSX for the browser. It also uses React Hot Loader so that when you make updates to your React components they automatically update in the browser without requiring a manual refresh or a reset of your application state.

If you want to keep things even simpler, or encounter issues getting this app setup on your machine, then you could try ReactSimples instead.

# Getting setup

Clone this repository into a directory on your machine.

```
git clone https://github.com/SevenInitiative/ReactStarter.git
```

Navigate into the new directory.

```
cd ReactStarter
```

Install all required dev tools and dependencies with the node package manager.

```
npm install
```

Build the project by running webpack.

```
webpack
```

Serve the project using webpack-dev-server using the start script defined in package.json.

```
npm start
```

You should now be able to access your project on port [http://localhost:8080](http://localhost:8080).

Start hacking!
