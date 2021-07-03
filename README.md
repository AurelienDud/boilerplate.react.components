# Boilerplate React components

This is a boilerplate to set up a project containing individual React components that will be build into separate bundles. 

The project include Storybook to show components in action. 

<img src="https://media.giphy.com/media/26CaMGtaoD9j0hoAg/giphy.gif" />

## Overview

Ready to use with:
* [Webpack](https://webpack.js.org/)
* [TypeScript](https://www.typescriptlang.org/) 
* [React](https://reactjs.org/)
* [Storybook](https://storybook.js.org/)
* [Jest](https://jestjs.io/) & [Enzyme](https://enzymejs.github.io/enzyme/)
* [ESLint](https://eslint.org/)
* [web-vitals](https://web.dev/vitals/) (dev tool)
* [Goober](https://goober.js.org/) (CSS-in-JS)

## From scratch packages installation

Here are what i have installed  

```node
yarn add react react-dom @types/react @types/react-dom

yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript typescript ts-loader web-vitals eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin goober jest babel-jest react-test-renderer @testing-library/react enzyme enzyme-adapter-react-16 @types/jest @types/enzyme @types/react-test-renderer @types/enzyme-adapter-react-16 glob

npx sb init  
```

then i create and changed many things ;) 

## /src

### /src/index

This entry point is only used to serve a component during development. 
No HTML will be builded by this project. 
This is why *react-dom* is set as a dev-dependency.

### /src/components

Each component must be located into a folder named by the component name.
The component entry point has to be named *index.tsx*

To remember to perform it, test files could be defined into the component folder with the pattern *{asyouwant}.test.tsx*

### /stories

If test are directly related to components producing, display them in a Storybook app is a parallel project. 
This is why i located the stories folder outside */src*.
The Storybook build is independant so it's not mandatory to use the library.