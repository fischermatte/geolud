# Icke Web App

[![WTFPL](https://img.shields.io/badge/license-WTFPL-blue.svg)](http://www.wtfpl.net/txt/copying)
[![Build Status](https://travis-ci.org/fischermatte/icke.svg?branch=develop)](https://travis-ci.org/fischermatte/icke) 

## Whats this?

My personal Homepage, totally over-engineered using the following technology stack:

- Spring Boot
- Angular 4
- Bootstrap 4 
- Apikana for contract first API integration with Typescript and Java (will by replaced by swagger-codegen-maven-plugin)
    
Build and run it:

    mvn clean install
    mvn spring-boot:run -f icke-server/pom.xml
    
Open `http://localhost:8080` in browser - et voila!

## Push To Cloud Foundry

Spring Boot apps pushed to Cloud Foundry are using the Java Build
Pack. It's memory calculator defaults to 1GB ram per instance. This was at 
least the case when I tried on it Pivotal and IBM Bluemix Cloud Foundry. In order 
to use less, it is not enough to define `memory:256m` in your manifest.  

### Java Backend (icke-server)

This example below configures the app to be used with 256m. At IBM Bluemix for example up
to 512MB are free. It also shows how to configure spring boot properties to configure
the mail service within icke-server.

```yml
# Cloud Foundry Example Manifest with 256m memory
applications:
- name: icke-api
  path: icke-server/target/icke-server-1.2.0-SNAPSHOT.jar
  instances: 1
  buildpack: https://github.com/cloudfoundry/java-buildpack.git
  memory: 256m
  env:
    JAVA_OPTS: '-XX:ReservedCodeCacheSize=32M -XX:MaxDirectMemorySize=32M'
    JBP_CONFIG_OPEN_JDK_JRE: '{ jre: { version: 1.8.0_+ }, memory_calculator: { stack_threads: 30 } }'
    spring.profiles.active: cloud
    application.mail.to: [email address]
```

### Angular Frontent (icke-ui)
The ui app is a plain angular project with static files. For this one uses the Cloud Foudnry static file build pack:

```yml
applications:
- name: icke-ui
  path: dist
  instances: 1
  buildpack: https://github.com/cloudfoundry/staticfile-buildpack.git
  memory: 32m

```

Save the file as manifest.yml in root folder of this project. Build the project and then push it
to cloud foundry:

    cf push
    
    