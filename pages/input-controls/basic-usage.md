---
layout: default
title: Basic Usage
nav_order: 2
parent: Input Controls
grand_parent: Components
has_children: false
---

# Basic Usage

## Configure the Default Styles

You have two options for configuring the import of default styles:

* In your main CSS file:
```css
@import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
```

* At the top of your main TypeScript or JavaScript file:
``` typescript
import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
```

Additionally, you must add a configuration that enables you to use the default styles for the input controls components only. When you use this configuration, the other styles in your application will not be affected by the Jaspersoft Visualize Components CSS.

To add this configuration, import the following file:
```typescript
import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup";
```


## Load Visualize.js

- Import the visualizejsLoader function from the `@jaspersoft/jv-tools` package.
```typescript 
import {
    Authentication,
    InputControlProperties,
    VisualizeClient,
    VisualizeFactory,
    visualizejsLoader,
} from "@jaspersoft/jv-tools";
```

- Provide the `visualizejsLoader` a valid URL from where the Visualize.js library should be downloaded.
- If you don't provide a URL because Visualize.js is already loaded into the window object, then this package will automatically take it from there.
- When you provide a valid URL, this method will add a new script tag in your application's document referencing the URL you provided, making the Visualize.js library available for your application.
- `visualizejsLoader` is a promise, so you must execute it and it will return the `VisualizeFactory`. Make sure your store this reference in your application because it will be needed later for logging in the user to JasperReports Server.

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

## Render the Input Controls

### The JavaScript Approach

InputControls package provides a `renderInputControls(v: VisualizeClient, uri: string, container: HTMLElement, config?: InputControlsConfig): void` method. 

Parameters:
* `v` - The `VisualizeClient` instance used to interact with Visualize.js API.
* `uri` - The path to a report or an Ad Hoc View _(/path/to/my/reports/SalesReport)_.
* `container` - The DOM element to render input controls to.
* `config` <sup>(optional)</sup> - The configuration object for the input controls. See [configure input controls]({{site.baseurl}}/pages/input-controls/basic-usage#configure-the-input-controls).

Return value:
* None.

Example:
```tsx
renderInputControls(visualizeClient, reportUri, container, inputControlsConfig)
```

### The React Approach
The `@jaspersoft/jv-input-controls` package provides `InputControls` React component.

Example:
```tsx
<InputControls
    v={visualizeClient}
    uri={reportUri}
    config={inputControlsConfig}
/>
```
The `InputControls` component props are similar to `renderInputControls` parameters explained in the 
[JavaScript approach]({{site.baseurl}}/pages/input-controls/basic-usage#the-javascript-approach).

## Configure the Input Controls
The input controls configuration has the following structure:
```ts
interface InputControlsConfig {
  success?: (controls: any) => void;
  error?: (error: any) => void;
  typeConfig?: InputControlsTypeConfig;
  events?: {
    change?: (
      ic: { [key: string]: any[] },
      validationResult: { [key: string]: string } | boolean,
    ) => void;
  };
  params?: { [key: string]: string[] };
}
```

Members:
* `success` <sup>(optional)</sup> - Triggered only once after the input controls are rendered correctly in the
  HTML container.
* `error` <sup>(optional)</sup> - Triggered if there is an error while either fetching
  the input controls or when rendering the input controls in the HTML container. The most common error case is
  likely to happen when providing an HTML container that is not visible in the HTML tree.
* `typeConfig` <sup>(optional)</sup> - Defines the styles of the input controls. Structure:
```typescript
{
    bool?: {
        type: "switch" | "checkbox";
    };
    singleValueText?: {
        type: "textField";
    };
    singleValueNumber?: {
        type: "number";
    };
    singleValueDate?: {
        type: "default" | "material";
    };
    singleValueDatetime?: {
        type: "default" | "material";
    };
    singleValueTime?: {
        type: "default" | "material";
    };
}
``` 
See [all input controls]({{site.baseurl}}/pages/input-controls/all-ics) for more information.
* `events` <sup>(optional)</sup> - Configures events listeners. See [events]({{site.baseurl}}/pages/input-controls/events).
* `params` <sup>(optional)</sup> - Defines initial values of input controls. See [overriding default values]({{site.baseurl}}/pages/input-controls/params).

## Source Code
For a complete example of how to use the input controls, you can check [demo input controls](https://github.com/Jaspersoft/js-visualize-components/tree/main/packages/demo-input-controls) project.