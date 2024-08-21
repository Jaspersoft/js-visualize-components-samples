---
layout: default
title: Basic Usage
nav_order: 1
has_children: false
---

# Basic example

## Installation

Refer to the installation guide for the `@jaspersoft/jv-tools` and `@jaspersoft/jv-input-controls` packages.

## Load the visualize.js into your app

Once installed, the first step you have to take is to use the jv-tools package to load the visualize.js library into
your app.

1. Import the visualizejsLoader from the @jaspersoft/jv-tools package.
2. Provide the visualizejsLoader a valid URL from where the visualize library should be downloaded.
    3. In case you don't provide a URL because the visualize.js is already loaded into the window object, then this
       package will automatically take it from there.
    4. If you provide a valid URL, this method will add a new script tag in your app's document referencing the URL you
       provided, making the visualize.js library available for your app.
    5. visualizejsLoader is a promise so you must execute it and it will return the visualize object (VisualizeFactory).
       Make sure to store this reference in your app because it will be needed later for logging in the user to JRS.

## Logging in the user

* Now that the visualize.js library is loaded in your app, you have to log in the user to be able to fetch resources to
  JRS.
* Use the object returned by the visualizejsLoader (VisualizeFactory) to execute the auth method from visualize.js. Take
  into consideration that this is a promise, so it's up to you to handle the success and the error scenarios.
* Example of the auth object to provide:

```
   {
      auth: {
         name: "joeuser",
         password: "joeuser",
         organization: "organization_1",
         locale: "en_US",
         },
   }
```

* Once the user is logged in, you'll get the visualize.js object (more commonly known as _**v**_) that is used to
  interact with the internal API of visualize.js. Make sure to store this reference globally in your app because this
  will be needed to fetch resources from JRS.

## Injecting the visualize.js object into the plugin

* At this point in time, the visualize.js object is ready to interact with JRS. We recommend providing this object to
  the InputControls Plugin for an easier interaction between JRS and the new Input Controls provided by
  @jaspersoft/jv-input-control package.
  * To provide the visualize.js object to the InputControlsPlugin, you have to instantiate an object of this class. E.g.:
    ``const plugin = new InputControls(v)``, where 'v' is the visualize.js object
      * you could also provide a second parameter to the class called ``config``. It has the following structure:
        ``{hostname?: string;  username: string;  password: string;  tenant: string;}``
        You must provide the same parameters as in the 'logging in the user' section.
        * The InputControl class comes shipped with a method: ``renderControlPanel``. It accepts the following 3 parameters:
          uri, container, panel definition:
            * `uri`. It's an string referencing to the report from where the input controls will be fetched. E.g.:
              _/public/viz/Adhoc/Ad_Hoc_View_All_filters_Report_
            * `container`. This is the containing HTML element where the input controls will be rendered by the InputControl
              class. It's up to the user to style the element as he wants. It is **mandatory** the HTML element is available
              throughout the DOM structure.
            * `panel definition`. This is the place where you'll define the look and feel of the new input controls, but also it is the place where you'll interact with the new Input Controls. 
               It has the following structure:
            ```
              {
                success?: () => void;
                error?: (error: any) => void;
                exclude?: string[];
                config?: InputControlUserConfig;
                events?: {
                  change?: (
                  ic: { [key: string]: any[] },
                  validationResult: { [key: string]: string } | boolean,
                  ) => void;
                };
              }
              ```
              Where InputControlUserConfig is:
              ```
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
          asdas