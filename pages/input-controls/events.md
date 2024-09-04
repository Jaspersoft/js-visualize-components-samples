---
layout: default
title: Events
nav_order: 3
parent: Input Controls
has_children: false
---

# Events

In order to work with user input, you may provide a callback function which is called when certain events occur. Currently we only support change events. 

When configuring the input controls component, you may provide a JSON object in the events property of your configuration object.

See [Input Controls]({{site.baseurl}}/pages/input-controls/basic-usage#rendering-the-control-panel) for more information on configuring the input controls component.
In read-only scenarios where you do not wish to process user input, you may omit this configuration.
``` js
events?: {
    change?: (
        ic: { [key: string]: any[] },
        validationResult: { [key: string]: string } | boolean,
        ) => void;
    };
```

## Parameters

The `events.change` property accepts a callback which is given the following parameters when called:

* `ic`: contains a representation of all the input controls that are being rendered in the HTML element container. The format of the object matches the format used by visualize.js when working with input controls.
Keys are input control IDs and values are an array of values. For example:
``` json
{
  "column_boolean_1": [false],
  "column_string_1": ["string value"],
  "column_date_1": ["2009-09-12"],
  "column_time_1": ["23:44:21"],
  "column_timestamp_1": ["2014-09-12T15:46:18"],
  "id_1": ["1"],
  "column_float_1": ["0.33"]
}
```
* `validationResult`: contains any validation errors that may be present.
The keys of this object represent the input control IDs while the value will either be an empty array when no validation errors occur, or a string value with a user-readable message regarding the validation failure.
When all controls have valid input, this parameter will be a boolean value: `false`.

For example:
``` json
{
  "column_time_1": [],
  "column_timestamp_1": "Verify the date is before or exactly 2014-09-11T15:00:00.",
}
```
##### **_Notes_**
* When all input controls are valid, the `validationResult` will be the boolean value `false`.
* Events are triggered by the InputControl class, a controlled component. Therefore, the class will handle the state of the input controls and update the state when users interact. InputControls will trigger the `change` event every time the state changes, irregardless of the validity of the values.

## Handling validations

To handle validations on the developer side, use the
[events.change]({{site.baseurl}}/pages/input-controls/events) method when calling
the `renderControlPanel`. This method will return a second parameter that contains all validations.
For example:

```javascript
    plugin.renderControlPanel(
      '/My/URI',
      document.getElementById("my-container"),
      {
        events: {
          change: (ics, validationResult) => {
              console.log("ics => ", ics);
              console.log("validationResult => ", validationResult);
          }
        }
      }
    )
```

### What to expect in case the input control is invalid

Every change to an input control state will execute the `events.change` method.

For example, given an input control, `id_1`, that is mandatory, in the case it has no value, a validationResult is returned:
```json 
{"id_1": "Specify a valid value for type number."}
```

## Handling errors
To handle errors, use the `error` property when calling `renderControlPanel`. Errors will be provided as a parameter to the callback provided. 
E.g.: 
```javascript
    plugin.renderControlPanel(
      '/My/URI',
      document.getElementById("my-container"),
      {
        error: (error) => {
            console.log("error => ", error);
        }
      }
    )
```

### When the container provided is not visible

A possible situation is when the container provided is not visible. In this case, the error object will contain:
```json
{
  "message": "createRoot(...): Target container is not a DOM element"
}
```

### When the report URL is not found in the JRS server.
Another possible situation is when the report URL is not found in the JRS server. In this case, the error object
will contain:
```json
{
  "message": "Resource URI:<URI_of_the_report> Type:com.jaspersoft.jasperserver.api.metadata.common.domain.InputControlsContainer not found.",
  "errorCode": "resource.not.found",
  "parameters": [
    "URI:<URI_of_the_report> Type:com.jaspersoft.jasperserver.api.metadata.common.domain.InputControlsContainer"
  ]
}
```



