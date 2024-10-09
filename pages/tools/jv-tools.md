---
layout: default
title: Tools
nav_order: 3
has_children: true
---

# Tools

The tools package is a collection of utility functions for working with the components. Currently this is the home of two important pieces: a loader and TypeScript interfaces for working with Visualize.js in your IDE.

## Installation

Installing the tools package can be done with your package tool, npm or yarn

`npm install @jaspersoft/jv-tools` or `yarn add @jaspersoft/jv-tools`


### visualizeJsLoader

The main utility you will use from the tools is the `visualizeJsLoader` function. This function allows you to load Visualize.js from a provided URL. It will then create a script tag to load the script, making it available to work with in code. You can optionally maintain loading of Visualize.js on your own, and allow it to be set on the global scope. If this is done, visualizeJsLoader will return the function from global scope instead of loading a new one.

#### Authentication

To authenticate to your JasperReports Server, you must provide credentials. You can do this with an Authentication object.

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

* `name` - username for the JasperReports Server where the Visualize.js script will be loaded from
* `password` - password for the JasperReports Server where the Visualize.js script will be loaded from
* `organization` - organization for the user (optional)
* `locale` - user locale to use (optional)