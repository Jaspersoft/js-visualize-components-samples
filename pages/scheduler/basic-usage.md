---
layout: default
title: Basic Usage
nav_order: 1
parent: Scheduler
has_children: false
---

# Basic usage

## Changes in JasperReports Server
1. Navigate to Path_to_tomcat/webapps/jasperserver-pro/WEB-INF/applicationContext-security-pro-web.xml
2. Add the following entries to `<property name="allowedHeaders">` property: <br>
   - `<value>Fetch-Csrf-Token</value>`
   - `<value>Owasp_csrftoken</value>`



## Configure the default styles

You have two options for configuring the import of default styles:

* In your main CSS file:
```css
@import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
```

* At the top of your main TypeScript or JavaScript file:
``` typescript
import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
```

Additionally, you must add a configuration that enables you to use the default styles for the scheduler components only. When you use this configuration, the other styles in your application will not be affected by the Jaspersoft Visualize Components CSS.

To add this configuration, import the following file:
```typescript
import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup";
```


## Load Visualize.js

- Import the visualizejsLoader function from the `@jaspersoft/jv-tools` package.
```typescript 
import {
    Authentication,
    VisualizeClient,
    VisualizeFactory,
    visualizejsLoader,
} from "@jaspersoft/jv-tools";
```

- Provide the `visualizejsLoader` a valid URL from where the Visualize.js library should be downloaded.
- If you don't provide a URL because Visualize.js is already loaded into the window object, then this package will automatically take it from there.
- When you provide a valid URL, this method will add a new script tag in your application's document referencing the URL you provided, making the Visualize.js library available for your application.
- `visualizejsLoader` is a promise, so you must execute it and it will return the `VisualizeFactory`. Make sure to store this reference in your application because it will be needed later for logging in the user to JasperReports Server.

## Authentication

* Now that the Visualize.js library is loaded in your application, you must authenticate with JasperReports Server.
* Use `VisualizeFactory` object returned by the `visualizejsLoader` to authenticate with JasperReports Server. As this is a promise, handling the success and error cases is an exercise for the user.
* Example authentication object:
``` js
   {
      auth: {
         name: "joeuser",
         password: "joeuser",
         organization: "organization_1",
         locale: "en_US",
         },
   }
```

* After authenticating, the `VisualizeClient` object (or simply `v` object) is returned. It is used to
  interact with the Visualize.js API. Store a reference to this object in a global scope of your application to perform other operations with Visualize.js, such as loading a report.

More details about Visualize.js loader can be found at [loading visualize.js]({{site.baseurl}}/pages/tools/loading-vizjs).

## Render the Scheduler

### The JavaScript approach

#### Import
```js 
import { renderScheduler, SchedulerConfig } from "@jaspersoft/jv-scheduler";
```

Scheduler package provides a
`renderScheduler(v: VisualizeClient, uri:string, container: HTMLElement, config: SchedulerConfigProps): void` method.

Parameters:
* `v` - The `VisualizeClient` instance used to interact with Visualize.js API.
* `uri` - The path to a report or a dashboard _(/path/to/my/reports/SalesReport)_.
* `container` - The DOM element to render input controls to.
* `config` <sup>(optional)</sup> - The configuration object for the input controls. See [configure input controls]({{site.baseurl}}/pages/input-controls/basic-usage#configure-the-input-controls).

Return value:
* None.

Example:
```tsx
renderScheduler(visualizeClient, container, schedulerConfig)
```

### The React approach
#### Import

```js 
import { Scheduler, SchedulerConfigProps } from "@jaspersoft/jv-scheduler";
```
The package `@jaspersoft/jv-scheduler` provides a React component that uses the Scheduler methods to render 
the scheduler component in the UI. This component is called `Scheduler` and can be used as follows:

```tsx
<Scheduler
    v={visualizeClient}
    config={schedulerConfig}
/>
```

The attributes the `Scheduler` component receives are very similar to what has been explained in the 
[JavaScript approach]({{site.baseurl}}/pages/scheduler/basic-usage#the-javascript-approach).
