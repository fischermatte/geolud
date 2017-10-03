# Icke Web App

[![WTFPL](https://img.shields.io/badge/license-WTFPL-blue.svg)](http://www.wtfpl.net/txt/copying)
[![Build Status](https://travis-ci.org/fischermatte/icke.svg?branch=develop)](https://travis-ci.org/fischermatte/icke) 

My personal Homepage, totally over-engineered using the following technology stack:

- Spring Boot
- Angular 4
- Bootstrap 4 
- Apikana for contract first API integration with Typescript and Java (might by replaced by swagger-codegen-maven-plugin)
    
Build and run it:

    mvn clean install
    mvn spring-boot:run -f icke-server/pom.xml
    
Open `http://localhost:8080` in browser - et voila!
