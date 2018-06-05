# Geolud Web App

[![WTFPL](https://img.shields.io/badge/license-WTFPL-blue.svg)](http://www.wtfpl.net/txt/copying)
[![Build Status](https://travis-ci.org/fischermatte/geolud.svg?branch=develop)](https://travis-ci.org/fischermatte/geolud) 

## Whats this?

My personal 'cloud-native' Homepage, totally over-engineered using the following technology stack:

- Spring: Boot V2 / Cloud / WebFlux / Data Reactive Mongo
- Angular 6
- Bootstrap 4 
- MongoDB
- Swagger-Codegen for API First integration with Typescript and Java. Client and Server interfaces are generated from OpenApi 2 yml.

## How to run it locally?

### geolud-server

    mvn clean install
    mvn spring-boot:run -f geolud-server/pom.xml
    
This will start tomcat at http://localhost:8080
    
### geolud-client

    npm install
    npm run-script start-local
    
This will run the ui locally at port 4200, connecting to the backend above at port 8080. 

So open `http://localhost:4200` in browser - et voila!

## Push To Cloud Foundry

Spring Boot apps pushed to Cloud Foundry are using the Java Build
Pack. It's memory calculator defaults to 1GB ram per instance. This was at 
least the case when I tried on it Pivotal and IBM Bluemix Cloud Foundry. In order 
to use less, it is not enough to define `memory:256m` in your manifest.  

### geolud-server

This example below configures the app to be used with less than 1GB. It also shows how to configure 
spring boot properties to configure the mail service within geolud-server.

Note: the example below does not use the memory calculator of the build pack but has hardcoded VM properties. This
is not a good approach when you want to scale dynamically. 

```yml
# Cloud Foundry Example Manifest with 400m memory
applications:
- name: geolud-server
  path: geolud-server/target/geolud-server-1.4.0.jar
  instances: 1
  buildpack: https://github.com/cloudfoundry/java-buildpack.git#v4.12
  memory: 500m
  env:
    JAVA_OPTS: '-XX:MaxMetaspaceSize=80000K -Xss512k -XX:ReservedCodeCacheSize=16M -XX:MaxDirectMemorySize=10M'
    JBP_CONFIG_OPEN_JDK_JRE: '{ jre: { version: 10.+ } }'
    SPRING_PROFILES_ACTIVE: cloud
```

### geolud-client
The ui app is a plain angular project with static files. For this one uses the Cloud Foudnry static file build pack:

```yml
applications:
- name: geolud-client
  path: dist
  instances: 1
  buildpack: https://github.com/cloudfoundry/staticfile-buildpack.git#v1.4.20
  memory: 12m

```

Save the file as manifest.yml in root folder of this project. Build the project and then push it
to cloud foundry:

    cf push
    
    
