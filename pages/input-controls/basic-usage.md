---
layout: default
title: Basic Usage
nav_order: 1
parent: Input Controls
has_children: false
---

# Basic example

## Configure the default styles

You have 2 options:

* You could configure the default styles by importing them into your main CSS file like this:
```css
@import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
```

* Or at the top of your main typescript or javascript file:
``` typescript
import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
```

Consequently, import the following file to configure the previous CSS file to be used in the Input Controls UI 
component only:
```typescript
import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup";
```

Having this configuration enables you to use the default styles for the input controls UI components. 
Also, it won't affect the styles of your application, it will only affect the styles of the input controls.

## Load visualize.js

- Import the visualizejsLoader function from the `@jaspersoft/jv-tools` package.

```typescript 
import {
    Authentication,
    BaseInputControlProps,
    VisualizeClient,
    VisualizeFactory,
    visualizejsLoader,
} from "@jaspersoft/jv-tools";
```

- Provide the `visualizejsLoader` a valid URL from where the visualize library should be downloaded.
- In case you don't provide a URL because the visualize.js is already loaded into the window object, then this
   package will automatically take it from there.
- If you provide a valid URL, this method will add a new script tag in your app's document referencing the URL you
   provided, making the visualize.js library available for your app.
- `visualizejsLoader` is a promise so you must execute it and it will return the visualize object (VisualizeFactory).
   Make sure to store this reference in your app because it will be needed later for logging in the user to JRS.
- More details about this loading can be found here: [Loading visualize.js]({{site.baseurl}}/pages/tools/loading-vizjs).

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

## Rendering the input controls

### The JavaScript approach

InputControls package provides a method `renderInputControls` that accepts 4 parameters: "V object", uri, container, 
panel
configuration.

* `vObject`: (VisualizeClient) contains the API to interact with the visualize.js library.
* `uri`: (string) path to report or ad hoc view _(/path/to/my/reports/SalesReport)_
* `container`: (DivElement) <div> element from the DOM where the input controls should be rendered
* `input control configuration`: (JSON) object containing configuration for input controls look and feel and event 
  handling.

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

* For more information about the `config` parameter, refer to
  this [section]({{site.baseurl}}/pages/input-controls/basic-usage#configuration-of-the-input-controls)
* `success?: () => void`. This method will be triggered only once after the input controls are rendered correctly in the
  HTML element container provided.
* `error?: (error: any) => void`. This method will be triggered if and only if, there is an error while either fetching
  the input controls or when rendering the input controls in the HTML element container. The most common error case is
  likely to happen when providing an HTML container that is not visible in the HTML tree.
* `config?`. This parameter will help to define the styles of the input controls. Refer to the
  [next]({{site.baseurl}}/pages/input-controls/basic-usage#configuration-of-the-input-controls) section for more info
  about the structure.
* `events?`. More information can be found at [Events]({{site.baseurl}}/pages/input-controls/events)

### The React approach
The package `@jaspersoft/jv-input-controls` provides a React component that uses the InputControls methods to render 
the input controls UI components. This component is called `InputControls` and can be used as follows:

```tsx
<InputControls
    vObject={vContainer?.v}
    uri={reportUri}
    panelDef={panelD}
/>
```
The attributes the `InputControls` component receives are very similar to what has been explained in the 
[JavaScript approach]({{site.baseurl}}/pages/input-controls/basic-usage#the-javascript-approach). The only difference
is that it isn't needed to provide the HTML element because the React component will render the input controls in 
the DOM.

More info about the `vContainer` can be found in this
[guide]({{site.baseurl}}/pages/tools/loading-vizjs.html#loading-visualizejs).

## Configuration of the input controls
Each and every input control could be defined by the user in the `config` parameter
(for the [JavaScript approach]({{site.baseurl}}/pages/input-controls/basic-usage#the-javascript-approach)) or the
`panelDef` ([React approach]({{site.baseurl}}/pages/input-controls/basic-usage#the-react-approach)).
This parameter is a wrapper that allows the user to define the type of component to render, receive any modification 
done by the user in the UI, and receive (if any) information about the validity of the values the user could have 
typed in any of the input controls. 
The `config` parameter has the following structure:

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

If you want to see more information about the different types of components for the input controls, refer to
this [guide]({{site.baseurl}}/pages/input-controls/all-ics).

## Source code
For a complete example of how to use the input controls, you can check the following [link](https://github.com/Jaspersoft/js-visualize-components/tree/main/packages/demo-input-controls)