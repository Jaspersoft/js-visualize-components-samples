---
layout: default
title: Basic Usage
nav_order: 1
parent: Scheduler
has_children: false
---

# Basic example

## Changes in JRS
1. Navigate to Path_to_tomcat/webapps/jasperserver-pro/WEB-INF/applicationContext-security-pro-web.xml
2. Add the following entries to `<property name="allowedHeaders">` property: <br>
   `<value>Fetch-Csrf-Token</value>` <br>
   `<value>Owasp_csrftoken</value>`



## Configure the default styles

At the top of your main typescript or javascript file, import the CSS file that will allow you to use the default 
styles for the scheduler:
``` typescript
import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
```

Consequently, import the following file to configure the previous CSS file to be used in the Scheduler UI 
component only:
```typescript
import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup";
```

Having this configuration enables you to use the default styles for the Scheduler UI components. 
Also, it won't affect the styles of your application, it will only affect the styles of the scheduler.

## Load visualize.js

- Import the visualize.js Loader function from the `@jaspersoft/jv-tools` package.

```js 
import {
    Authentication,
    VisualizeFactory,
    visualizejsLoader,
    VisualizeType,
} from "@jaspersoft/jv-tools";
```

- Provide the `visualizejsLoader` a valid URL from where the visualize library should be downloaded.
- In case you don't provide a URL because the visualize.js is already loaded into the window object, then this
   package will automatically take it from there.
- If you provide a valid URL, this method will add a new script tag in your app's document referencing the URL you
   provided, making the visualize.js library available for your app.
- `visualizejsLoader` is a promise so you must execute it and it will return the visualize object (VisualizeFactory).
   Make sure to store this reference in your app because it will be needed later for logging in the user to JRS.

## Authentication

* Now that the visualize.js library is loaded in your app, you must authenticate with JasperReports Server.
* Use the object returned by the `visualizejsLoader` (VisualizeFactory) to execute the auth method from visualize.js. As
  this is a promise, handling the success and error cases is an exercise for the user.
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

* After authenticating the visualize.js object ("V object") is returned. This is used to
  interact with the internal API of visualize.js. Store a reference to this object in a global scope to perform other
  operations with visualize.js such as loading a report viewer.

More info about the JVTools can be found in this [guide]({{site.baseurl}}/pages/tools/loading-vizjs).

## Rendering the scheduler plugin

### The JavaScript approach

#### Import
```js 
import { renderScheduler, SchedulerConfig } from "@jaspersoft/jv-scheduler";
```
Scheduler component has a method `renderScheduler` that accepts 3 parameters: container, visualize object, scheduler configuration.
`SchedulerConfig` is a typing for scheduler configuration object.

```js
renderScheduler(
    document.getElementById("my-container"),
    visualize_object, 
    schedulerUIConfig,
);

```

* `container`: (DivElement) <div> element from the DOM where the scheduler should be rendered
* `visualize_object`: (any) visualization object in format {v: visualize_object}
* `schedulerUIConfig`: (SchedulerConfig) object containing configuration for scheduler look and feel and event handling. [reference]({{site.baseurl}}/pages/scheduler/configuration.html#configuration)


* For more information about the `scheduler configuration` parameter, refer to
  this [section]({{site.baseurl}}/pages/scheduler/configuration.html#configuration)


### The React approach
#### Import

```js 
import { Scheduler, SchedulerConfigProps } from "@jaspersoft/jv-scheduler";
```
The package `@jaspersoft/jv-scheduler` provides a React component that uses the Scheduler methods to render 
the Scheduler UI component. This component is called `Scheduler` and can be used as follows:

```tsx
<Scheduler
    schedulerUIConfig={schedulerUIConfig}
    visualize={visualize}
/>
```

The attributes the `Scheduler` component receives are very similar to what has been explained in the 
[JavaScript approach]({{site.baseurl}}/pages/scheduler/basic-usage#the-javascript-approach). The only difference
is that it isn't needed to provide the HTML element because the React component will render the scheduler in 
the DOM.

More info about the `vContainer` can be found in this
[guide]({{site.baseurl}}/pages/tools/loading-vizjs.html#loading-visualizejs).
