# Geolud Web App

[![WTFPL](https://img.shields.io/badge/license-WTFPL-blue.svg)](http://www.wtfpl.net/txt/copying)
[![Build Status](https://travis-ci.org/fischermatte/geolud.svg?branch=develop)](https://travis-ci.org/fischermatte/geolud) 

## Whats this?

My personal 'cloud-native' homepage as a progressive web app. Totally over-engineered using the following technology stack:

- Spring: Boot 2 / Cloud / Data / Reactive (Mongo, Websockets, WebFlux)
- Angular 6
- Bootstrap 4 
- Service Worker (@angular/pwa)
- MongoDB
- Websocket (for Chat)

## How to run it locally?

### geolud-server

    mvn clean install
    mvn spring-boot:run -f geolud-server/pom.xml
    
This will start tomcat at http://localhost:8000
    
### geolud-client

    npm install
    npm run start
    
This will run the ui locally at port 4200, connecting to the backend above at port 8000. 

Open http://localhost:4200 in browser - et voila!

## Push To Cloud Foundry

    cf push -f manifest.yaml

### geolud-server

```yml
# Cloud Foundry Example Manifest with 400m memory
applications:
- name: geolud-server
  path: geolud-server-1.4.8.jar
  instances: 1
  buildpack: https://github.com/cloudfoundry/java-buildpack.git#v4.12
  memory: 500m
  env:
    JAVA_OPTS: '-XX:MaxMetaspaceSize=80000K -Xss512k -XX:ReservedCodeCacheSize=16M -XX:MaxDirectMemorySize=10M'
    JBP_CONFIG_OPEN_JDK_JRE: '{ jre: { version: 10.+ } }'
    SPRING_PROFILES_ACTIVE: cloud
```

### geolud-client

```yml
applications:
- name: geolud-client
  instances: 1
  buildpack: https://github.com/cloudfoundry/nodejs-buildpack.git#v1.6.28
  memory: 24m
  routes:
  - route: dev-geolud.mybluemix.net
  - route: dev-geolud-ui.mybluemix.net
  env:
    BACKEND_HOST: 'geolud-server.mybluemix.net'
    BACKEND_IS_SSL: true
    OPTIMIZE_MEMORY: true

```
    
    
