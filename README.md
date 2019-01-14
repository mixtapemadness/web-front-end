#MIXTAPE_FRONT
MIXTAPEMADNESS is a site for urban mixtapes & singles 

#Stack
   >frontend: react, apollo, 
   >backend: node, graphql, wordpress api 

#Notable_Packages 
 Recompose _ https://github.com/acdlite/recompose
 Styled Components _ https://github.com/styled-components/styled-components


#Enviroment
    local: localhost/8001
    development: http://mixtapeapi.vobi.io 
    production:  http://mixtapeapi.vobi.io

#How To Run
  >expect of different enviroments, project can be run with or without ssr mode 
  npm run start - starts server with staging mode,
  npm run start:local - server with development mode, needs backend to be started localy
  npm run build:testing - makes project build, in dist folder with development configuration,
  npm run start:dist - runs builded project, from dist folder,
  npm run build:prod - builds project with production configuration,
  >ssr
  build:ssr:testing - builds project with ssr with development configuration in dist folder
  build:ssr:prod - builds project with ssr with production configuration in dist folder
  start:ssr:dist - starts project with ssr from dist folder


#Folder_Structure
 The pattern that's mostly used is "Container and View pattern(smart and dumb compnents)",
 _Container Components_ are constructed With Recompose, (hoc that makes props chain till the view component)  
   smart components name ends With Enhancer ex:aboutUsEnhancer, interviewsEnhancer
 _Views_ are simple Stateless Functional Components that recieve props,

 __notable folders__
   all the components that are responsible for routing are in  pages folder, 
   components - holds all the reusable components,
   hocs - are high order functions with reusable loginc, basicaly to make gql querys more efficent way     
   graphql - all the queryes and mutations
    sesources - all the assets , css, imgs, svg ...

#How CI works
Every new commits to develop branch should go to staging server
If new commits goes to master branch it will be automatically deployed on production server