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

Additionally, you must add a configuration that enables you to use the default styles for the scheduler component only. When you use this configuration, the other styles in your application will not be affected by the Jaspersoft Visualize Components CSS.

To add this configuration, import the following file:
```typescript
import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup";
```


Having this configuration enables you to use the default styles for the scheduler component. 
Also, it won't affect the styles of your application, it will only affect the styles of the scheduler.

## Load Visualize.js

- Import the visualizejsLoader function from the `@jaspersoft/jv-tools` package.
```typescript 
import {
    Authentication,
    VisualizeFactory,
    visualizejsLoader,
    VisualizeClient,
} from "@jaspersoft/jv-tools";
```

- Provide the `visualizejsLoader` a valid URL from where the Visualize.js library should be downloaded.
- If you don't provide a URL because Visualize.js is already loaded into the window object, then this
  package will automatically take it from there.
- If you provide a valid URL, this method will add a new script tag in your application's document referencing the URL you provided, making the Visualize.js library available for your application.
- `visualizejsLoader` is a promise, so you must execute it and it will return the Visualize.js object (VisualizeFactory).
  Make sure to store this reference in your application because it will be needed later for logging in the user to JasperReports Server.
- More details about this loading can be found at [Loading Visualize.js]({{site.baseurl}}/pages/tools/loading-vizjs).

## Authentication

* Now that the Visualize.js library is loaded in your application, you must authenticate with JasperReports Server.
* Use the object returned by the `visualizejsLoader` (VisualizeFactory) to execute the auth method from Visualize.js. As
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

* After authenticating, the `VisualizeClient` object (or simply `v` object) is returned. This is used to interact 
  with the internal API of Visualize.js. Store a reference to this object in a global scope to perform other 
  operations with Visualize.js such as loading a report viewer.

More info about the tools can be found in this [guide]({{site.baseurl}}/pages/tools/loading-vizjs).

## Render the Scheduler plugin

### The JavaScript approach

#### Import
```js 
import { renderScheduler, SchedulerConfig } from "@jaspersoft/jv-scheduler";
```

Scheduler package provides a
`renderScheduler(container: HTMLElement, v: VisualizeClient, config: SchedulerConfigProps): void` method.
Parameters:
* `container` - (DivElement) <div> element from the DOM where the scheduler should be rendered
* `v` - (VisualizeClient) visualization object
* `config` - (SchedulerConfig) object containing configuration for scheduler look and feel and event handling. ([reference]({{site.baseurl}}/pages/scheduler/configuration.html#configuration))


* For more information about the `scheduler configuration` parameter, refer to
  the [Configuration]({{site.baseurl}}/pages/scheduler/configuration.html#configuration) page


### The React approach
#### Import

```js 
import { Scheduler, SchedulerConfigProps } from "@jaspersoft/jv-scheduler";
```
The package `@jaspersoft/jv-scheduler` provides a React component that uses the Scheduler methods to render 
the scheduler component in the UI. This component is called `Scheduler` and can be used as follows:

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
