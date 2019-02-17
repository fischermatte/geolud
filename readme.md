# geolud

[![WTFPL](https://img.shields.io/badge/license-WTFPL-blue.svg)](http://www.wtfpl.net/txt/copying)
[![Build Status](https://travis-ci.org/fischermatte/geolud.svg?branch=master)](https://travis-ci.org/fischermatte/geolud) 

## 1. What's this?

My personal 'cloud-native' homepage as a progressive web app. Totally over-engineered using the following technology stack:

### geolud-client
- Angular
- Bootstrap 
- NgRx for reactive state management (@ngrx/effects, @ngrx/entity, @ngrx/store) 
- Service Worker (@angular/pwa)
- Websocket (for Chat)
- Lazy Module Loading (for faster startup)

### geolud-server-java
- Spring: Boot 2 / Cloud / Data / Reactive (Mongo, Websockets, WebFlux)
- Netty
- MongoDB

### geolud-server-node
- NestJS
- TypeORM 
- MongoDB

## 2. How to run it locally

### geolud-client

    cd geolud-client
    npm install
    npm run start
    
This will run the ui locally at port 4200, connecting to the backend above at port 8080. 

Open http://localhost:4200 in browser - et voila!

### geolud-server-java

    cd geolud-server-java
    mvn clean install
    mvn spring-boot:run
    
Starts the server at port 8080 -> http://localhost:8080

### geolud-server-node

    cd geolud-server-node
    npm install
    npm run start
    
Starts the server at port 8080 -> http://localhost:8080


## 3. Push To Cloud Foundry

### geolud-client

    cd geolud-client
    npm run build
    cf push -f dist/manifest.yaml
    
### geolud-server-java

    cd geolud-server-java
    mvn package
    cf push -f cloudfoundry/manifest.yaml
    
### geolud-client-node

    cd geolud-server-node
    npm run build
    cf push
