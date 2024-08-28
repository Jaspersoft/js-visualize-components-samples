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

In order to utilize this library, you will need access to a running instance of Jasperreports Server (version >= 8.0) configured to provide visualize.js. You can utilize these packages in your existing ReactJS project, or utilize them in another framework.


## Installation

Installation of packages can be done with either npm or yarn, as you see fit for your project. Packages are hosted on the public npm registry, and should be available without any additional configurations.

Packages utilize the `@jaspersoft` scope.

``` bash
> npm install --save @jaspersoft/jv-tools
> npm install --save @jaspersoft/jv-input-controls
```


## Getting Started

In order to work with many of these packages, you will need to be familiar with visualize.js, and have it loaded in the page where embedding happens. To do this you can utilize the jv-tools package included, or you can add a script tag to the page where the components will be used. 

