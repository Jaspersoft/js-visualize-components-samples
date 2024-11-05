---
layout: default
title: Introduction
nav_order: 1
has_children: false
---

# Introduction

Jaspersoft Visualize Components is a toolkit of React components that work together with Visualize.js to provide web developers rich, modern UI components that interact with their existing JasperReports Server&#xae; installation. Web developers can forge their own user experience with these components by using the reporting concepts found in JasperReports Server.


## About Visualize Components

This project provides modern components that are ready-to-use, customizable, and have accessibility built right in. Integrate these packages into your current React project, or use them with any other framework.


## Requirements

You will need access to a running instance of JasperReports Server 8.0 or newer that is configured to provide Visualize.js.


## Installation

Installation of packages can be done with either `npm` or `yarn`, as you see fit for your project. Packages are 
hosted on the public npm registry, and should be available without any additional configurations.

Packages are organized under the `@jaspersoft` scope.

#### npm
``` bash
> npm install --save @jaspersoft/jv-input-controls @jaspersoft/jv-tools @jaspersoft/jv-ui-components @jaspersoft/jv-scheduler
```
#### yarn
``` bash
> yarn add @jaspersoft/jv-input-controls @jaspersoft/jv-tools @jaspersoft/jv-ui-components @jaspersoft/jv-scheduler
```

## Getting Started

You need to have access to Visualize.js on the pages where these components will be used. To do this you can include 
it using a script tag or utilize the jv-tools package to load the script programmatically. More info about this can 
be found here: [Loading Visualize.js]({{site.baseurl}}/pages/tools/loading-vizjs).


