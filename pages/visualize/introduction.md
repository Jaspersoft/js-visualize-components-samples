---
layout: default
title: Introduction
parent: Visualize.js
nav_order: 1
---

# Introduction
{: .no_toc }

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Installing Jaspersoft
{:toc}
Note: All samples in this guide are live and available to view before install

* Download the commercial edition of [JasperReport Server](https://www.jaspersoft.com/download)
* Use our [quick start guide](https://www.jaspersoft.com/getting-started) for installation and configuration

## Getting Started
{:toc}

### Samples
{: .no_toc }
View and reuse the live Visualize.js API samples in this guide and(or) reference to your own [installation](https://www.jaspersoft.com/download).

To use your own install change the following HTML in the samples...

``` html
 <script src="https://mobiledemo.jaspersoft.com/jasperserver-pro/client/visualize.js"></script>
```

and reference the location of your JasperReport Server installation...

``` html
 <script src="[myserver]/jasperserver-pro/client/visualize.js"></script>
```

### Video Tutorials
{: .no_toc }
* Need a jump start? Watch our [API video tutorials](https://community.jaspersoft.com/wiki/visualizejs-tutorials) for more information on Visualize.js and embedding inside your application.

### Via GitHub
{: .no_toc }
* Download our [sample application](https://github.com/TIBCOSoftware/JS-FDSample) on GitHub featuring Visualize.js

## `visualize` Function
{:toc}
`visualize` is a factory function for visualize.js client object.
### Syntax
{: .no_toc }
`visualize(properties, successCallback, errorCallback, alwaysCallback)`

#### Parameters
{: .no_toc }
- `properties` _(optional)_ - visualize properties to establish a user session with the JasperReports Server. This parameter should be skipped when used togather with `visualize.config` function.
- `successCallback` _(optional)_ - success callback function. It is called with an instance of visualize.js client as an argument. 
- `errorCallback` _(optional)_ - error callback function. It is called with an instance of error object as an argument. 
- `alwaysCallback` _(optional)_ - always callback function. It is called with an instance of visualize.js client and error as an argument. 

## `visualize.config` Function
{:toc}
`visualize.config(properties)` is a function to configure storage for common configuration between subsequent calls of `visualize` function. 

When `visualize.config` function is used, `properties` parameter in `visualize` function can be skipped (use function signature like this `visualize(successCallback, errorCallback, alwaysCallback)`) and the same user session will be reused for all subsequent calls of `visualize` function. Actual authentication with JasperReports Server will be performed during the first call of `visualize` function and the user session will be established during this call.

### Syntax
{: .no_toc }
`visualize.config(properties)`

#### Parameters
{: .no_toc }
- `properties` - visualize properties to establish a user session with the JasperReports Server.

## Authentication
{:toc}
To start working with the Visualize.js you need to establish a user session with JasperReports Server that hosts your visualizations.
There are several authentication options available which we will show below.

### Authentication Options
#### Plain Text Credentials
When authenticating with plain credentials you can specify `organization` (if required), `name` and `password` properties as part of `auth` object:
<div id="auth-plain-text-cred-container"></div>

#### SSO token
If you have single-sign-on (SSO) implemented and have configured JasperReports Server to use it, you can specify `token` and `tokenName` properties as part of `auth` object to authenticate (more information about SSO can be found in our **Authentication Cookbook** located at [TIBCO JasperReports Server Documentation](https://community.jaspersoft.com/documentation) website).

{: .note }
This SSO sample code is for demonstration purposes only. The JRS instance used here is not configured to work with SSO.
<div id="auth-report-sso-container"></div>

#### Pre-authentication token
If you your JasperReports Server configured for pre-authentication, you can specify `token`, `preAuth` and `tokenName` properties as part of `auth` object to authenticate (more information about pre-authentication can be found in our **Authentication Cookbook** located at [TIBCO JasperReports Server Documentation](https://community.jaspersoft.com/documentation) website).

{: .note }
This pre-authentication sample code is for demonstration purposes only. The JRS instance used here is not configured to work with pre-authentication.
<div id="auth-pre-auth-container"></div>

#### Login (and logout) with hooks
If you have external authentication providers, you can invoke their login and logout URLs. To do that you can use `loginFn` and `logoutFn` properties of `auth` object. 

##### Syntax
{: .no_toc }
- `loginFn(properties, request)`
- `logoutFn(properties, request)`

###### Parameters
{: .no_toc }
- `properties` - an object that contains all the properties passed to `auth` object.
- `request` - a request function that can be used by your function to make authentication requests.

<div id="auth-report-login-hook-container"></div>


### Change User Locale
{:toc}
If visualization support non-English locale it can be set using `locale` property of `auth` object. This locale will affect the entire user session and will be applied to all the visualizations called with the visualize client within the user session.
<div id="auth-change-locale-container"></div>

### Enable Console Logging
{:toc}
Information on user locale.

### Refreshing a Session
{:toc}
Information on refreshing sessions.
<div id="auth-adhoc-refresh-session-container"></div>

### Destroying a Session
{:toc}
Information on destroying a session.
<div id="auth-adhoc-destroy-session-container"></div>

### Logout
{:toc}
Information on logging out.
#### Report
<div id="auth-report-logout-container"></div>

#### Dashboard
<div id="auth-dash-logout-container"></div>

<script src="https://mobiledemo.jaspersoft.com/jasperserver-pro/client/visualize.js"></script>
<script src="./config/vizConfig.js"></script>
<script src="../../assets/js/build/react-app-render-build.js"></script>