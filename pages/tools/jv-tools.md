---
layout: default
title: jv-tools
nav_order: 3
has_children: true
---

# jv-tools Package

The jv-tools package is a collection of utility functions for working with the component toolkit. Currently this is the home of two important pieces: a loader and typescript interfaces for working with visualize in your IDE.

## Installation

Installing the jv-tools package can be done with your package tool, npm or yarn

`npm install @jaspersoft/jv-tools` or `yarn add @jaspersoft/jv-tools`


### visualizeJsLoader

The main utility you will use from jv-tools is the `visualizeJsLoader` function. This function allows you to load visualize from a provided URL. It will then create a script tag to load the script, making it available to work with in code. Optionally you can maintain loading of visualize on your own and allowing it to be set on the global scope, if this is done visualizeJsLoader will return the one from global scope instead of loading a new one.

#### Authentication

To authenticate to your JRS server, you must provide credentials, you can do this with an Authentication object.

```json
{
  auth: {
         name: "joeuser",
         password: "joeuser",
         organization: "organization_1",
         locale: "en_US",
       },
}
```

##### Parameters

* name - username for the JRS server where the visualize.js script will be loaded from
* password - password for the JRS server where the visualize.js script will be loaded from
* organization - (optional) organization for the user
* locale - (optional) user locale to use 


