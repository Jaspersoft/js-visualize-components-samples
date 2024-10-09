---
layout: default
title: Basic usage
nav_order: 1
parent: Input Controls
has_children: false
---

# Basic usage

## Configure the default styles

You have two options for configuring the import of default styles:

* In your main CSS file:
```css
@import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
```

* At the top of your main typescript or javascript file:
``` typescript
import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
```

Additionally, you can add a configuration that enables you to use the default styles for the input controls components only. When you use this configuration, the other styles in your application will not be affected by the Visualize Components CSS.

To add this configuration, import the following file:
```typescript
import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup";
```



## Load Visualize.js

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

- Provide the `visualizejsLoader` a valid URL from where the Visualize.js library should be downloaded.
- If you don't provide a URL because Visualize.js is already loaded into the window object, then this package will automatically take it from there.
- When you provide a valid URL, this method will add a new script tag in your application's document referencing the URL you provided, making the Visualize.js library available for your application.
- `visualizejsLoader` is a promise, so you must execute it and it will return the visualize object (VisualizeFactory). Make sure your store this reference in your application because it will be needed later for logging in the user to JRS.
- More details about this loading can be found here: [Loading visualize.js]({{site.baseurl}}/pages/tools/loading-vizjs).

## Authentication

* Now that the Visualize.js library is loaded in your application, you must authenticate with JasperReports Server.
* Use the object returned by the `visualizejsLoader` (VisualizeFactory) to execute the auth method from Visualize.js. As this is a promise, handling the success and error cases is an exercise for the user.
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

* After authenticating, the Visualize.js object ("V object") is returned. This is used to
  interact with the internal API of Visualize.js. Store a reference to this object in a global scope to perform other operations with Visualize.js such as loading a report viewer.

More info about the tools can be found in this [guide]({{site.baseurl}}/pages/tools/loading-vizjs).

## Render the input controls

### The JavaScript approach

InputControls package provides a method `renderInputControls` that accepts four parameters: "V object", uri, container, and panel configuration.

* `vObject` - (VisualizeClient) contains the API to interact with the Visualize.js library.
* `uri` - (string) path to report or Ad Hoc view _(/path/to/my/reports/SalesReport)_
* `container` - (DivElement) <div> element from the DOM where the input controls should be rendered
* `input control configuration` - (JSON) object containing configuration for input controls look and feel and event 
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
    params?: { [key: string]: string[] };
}
```

* For more information about the `config` parameter, refer to
  this [section]({{site.baseurl}}/pages/input-controls/basic-usage#configuration-of-the-input-controls)
* `success?: () => void` - This method will be triggered only once after the input controls are rendered correctly in the
  HTML element container provided.
* `error?: (error: any) => void` - This method will be triggered only if there is an error while either fetching
  the input controls or when rendering the input controls in the HTML element container. The most common error case is
  likely to happen when providing an HTML container that is not visible in the HTML tree.
* `config?` - This parameter will help to define the styles of the input controls. Refer to the
  [next section]({{site.baseurl}}/pages/input-controls/basic-usage#configuration-of-the-input-controls) for more info
  about the structure.
* `events?` - More information can be found on the [Events]({{site.baseurl}}/pages/input-controls/events) page
* `params?` - More information can be found on the [Overriding default values]({{site.baseurl}}/pages/input-controls/params) page
### The React approach
The package `@jaspersoft/jv-input-controls` provides a React component that uses the InputControls methods to render 
the input controls components. This component is called `InputControls` and can be used as follows:

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

## Configure the input controls
Each input control could be defined by the user in the `config` parameter
(for the [JavaScript approach]({{site.baseurl}}/pages/input-controls/basic-usage#the-javascript-approach)) or the
`panelDef` ([React approach]({{site.baseurl}}/pages/input-controls/basic-usage#the-react-approach)).
This parameter is a wrapper that allows the user to define the type of component to render, receive any modification 
done by the user in the UI, and receive information (if any) about the validity of the values the user could have 
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