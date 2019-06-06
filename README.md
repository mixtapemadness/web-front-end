# Mixtape Madness Website Front End

## Current Version
1

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Make sure you're using at least Node version 10. Preferably Yarn is used as the package manager. 
- Make sure the [MM API](https://github.com/mixtapemadness/mm-api) is running first.

### Installing

Run the install script

```
$ yarn install
```

### Run Locally

Assuming all dependencies downloaded okay, run the following script and the front end should start working! This requires tha backend API to be running.

```
$ yarn run start:local
```

Starts project with SSR from dist folder:
```
 $ yarn start:ssr:dist
```

If its all good, check http://localhost:9000

### Run Test Environment

```
$ yarn start:local

$ yarn start:testing
```


Builds project with SSR with development configuration in dist folder:

```
$ yarn build:ssr:testing
  
```

If its all good, check http://localhost:9000

### Production

The production environment, is setup to allow Server Side Rendering (SSR). All the inital rendering is done by Node/Express and it is passed to the server, which allows browsers to get any dynamic content from initial load.

#### Build

Builds project with SSR with production configuration in dist folder:
```
$ yarn build:ssr:prod

```

#### Start

```
$ yarn pm2_delete_ssr_prod
```
```
$ yarn pm2_ssr_prod
```

## Built With

* [ReactJS](https://facebook.github.io/react/) - UI component library.
* [Apollo](https://www.apollographql.com/) - Middleware to connect with GraphQL to build UI apps.
* [Sass](https://sass-lang.com/) - CSS preprocessor scripting language.
* [Styled Component](https://www.styled-components.com/).
* [MM API](https://github.com/mixtapemadness/mm-api) - The backend api this project is based off.


## Notable Folders
- Pages: all the components that are responsible for routing.
- Components: holds all the reusable components,
- hocs: High Order Functions with reusable logic.    
- graphql: all the GraphQL queries and mutations.
- resources - all the assets , css, imgs, svg.

## Potential Issues

On production, you may need to ensure the PM2 module is installed. to allow node to run the application in the background.

```
$ npm i -g pm2

```
