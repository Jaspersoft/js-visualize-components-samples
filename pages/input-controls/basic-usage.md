---
layout: default
title: Basic Usage
nav_order: 1
parent: Input Controls
has_children: false
---

# Basic example

## Load visualize.js 

1. Import the visualizejsLoader function from the @jaspersoft/jv-tools package.
```js 
import {
  Authentication,
  VisualizeFactory,
  visualizejsLoader,
  VisualizeType,
} from "@jaspersoft/jv-tools";
```

1. Provide the visualizejsLoader a valid URL from where the visualize library should be downloaded.
1. In case you don't provide a URL because the visualize.js is already loaded into the window object, then this
   package will automatically take it from there.
1. If you provide a valid URL, this method will add a new script tag in your app's document referencing the URL you
   provided, making the visualize.js library available for your app.
1. visualizejsLoader is a promise so you must execute it and it will return the visualize object (VisualizeFactory).
   Make sure to store this reference in your app because it will be needed later for logging in the user to JRS.

## Authentication

* Now that the visualize.js library is loaded in your app, you must authenticate with Jasperreports Server.
* Use the object returned by the visualizejsLoader (VisualizeFactory) to execute the auth method from visualize.js. As this is a promise, handling the success and error cases is an exercise for the user.
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
  interact with the internal API of visualize.js. Store a reference to this object in a global scope to perform other operations with visualize.js such as loading a report viewer.

## Preparing Input Control Component

To use the Input Control component, you can instantiate it and provide visualize.js's v object to enable it to access JRS.

```js
const inputControlComponent = new InputControls(v);
```
Now you can interact with the component's javascript api as described in the following sections.

## Rendering the control panel
InputControls component has a method `renderControlPanel` that accepts 3 parameters: uri, container, panel configuration.

* `uri`: (string) path to report or ad hoc view _(/path/to/my/reports/SalesReport)_
* `container`: (DivElement) <div> element from the DOM where the input controls should be rendered 
* `panel configuration`: (JSON) object containing configuration for panel look and feel and event handling
```ts
{
    success?: () => void;
    error?: (error: any) => void;
    config?: InputControlUserConfig;
    events?: {
      change?: (
      ic: { [key: string]: any[] },
      validationResult: { [key: string]: string } | boolean,
      ) => void;
    };
}
```
* For more information about the `config` parameter, refer to this [section](/pages/input-controls/basic-usage#configuration-of-the-input-controls)
* `success?: () => void`. This method will be triggered only once after the input controls are rendered correctly in the HTML element container provided.
* `error?: (error: any) => void`. This method will be triggered if and only if, there is an error while either fetching the input controls or when rendering the input controls in the HTML element container. The most common error case is likely to happen when providing an HTML container that is not visible in the HTML tree.
* `config?`. This parameter will help to define the styles of the input controls. Refer to the
[next](/pages/input-controls/basic-usage#configuration-of-the-input-controls) section for more info about the structure.
* `events?`. More information can be found at [Events](/pages/input-controls/events)

## Configuration of the input controls
Each and every input control could be defined by the user in the `config` parameter. This parameter is a wrapper that
allows the user to define the type of component to render, receive any modification done by the user in the UI, and
receive (if any) information about the validity of the values the user could have typed in any of the input controls.
The `config` parameter has the following structure:
```js
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
If you want to see more information about the different types of components for the input controls, refer to
this [guide]({{site.baseurl}}/pages/input-controls/all-ics).
