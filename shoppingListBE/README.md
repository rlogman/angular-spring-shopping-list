# ShoppingList REST API
This project is a REST API for the ShoppingList model described in the technical test at Precima.
## How to execute 
Go to the project's root directory and run:
```bash
mvn spring-boot:run
```
Use your favorite REST client and test the endpoints under http://localhost:8080/shopping-list-items

This is a HATEOAS API, so it publishes its interface and possible deeper links on each request. All common REST verbs are available, so new items can be added, modified or deleted as needed.

## How to deploy
Go to the project's root directory and run:
```bash
mvn package spring-boot:repackage
```
Go to the target directory and grab `shopping-list-rest-api-0.1.war.original`. This is a standard WAR file that you can deploy on any modern Java EE container.
