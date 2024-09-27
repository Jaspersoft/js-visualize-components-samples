---
layout: default
title: Introduction
nav_order: 1
has_children: false
---

# Introduction

JS Visualize Components is a toolkit of React components that work in conjunction with visualize.js to provide web developers rich, modern UI components that interact with their existing JRS installation. By utilizing these components web developers can forge their own user experience utilizing the reporting concepts found in JRS. 


## About Visualize Components Toolkit

The aim of this project is to provide components that are ready-to-use, modern, customizable, accessible and open source. 

## Requirements

In order to utilize this library, you will need access to a running instance of JasperReports Server (version >= 8.0)
configured to provide visualize.js. You can utilize these packages in your existing ReactJS project, or utilize them in another framework.


## Installation

Installation of packages can be done with either `npm` or `yarn`, as you see fit for your project. Packages are 
hosted on the public npm registry, and should be available without any additional configurations.

Packages are organized under the `@jaspersoft` scope.

#### npm
``` bash
> npm install --save @jaspersoft/jv-input-controls @jaspersoft/jv-tools @jaspersoft/jv-ui-components
```
#### yarn
``` bash
> yarn add @jaspersoft/jv-input-controls @jaspersoft/jv-tools @jaspersoft/jv-ui-components
```

## Getting Started

You need to have access to visualize.js on the pages where these components will be used. To do this you can include 
it using a script tag or utilize the jv-tools package to load the script programmatically. More info about this can 
be found here: [Loading visualize.js]({{site.baseurl}}/pages/tools/loading-vizjs).


