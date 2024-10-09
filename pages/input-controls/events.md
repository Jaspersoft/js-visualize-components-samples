---
layout: default
title: Events
nav_order: 3
parent: Input Controls
has_children: false
---

# Events

To work with user input, you may provide a callback function that is called when certain events occur. Currently we only support change events. 

When configuring the Input Controls component, you may provide a JSON object in the events property of your configuration object.

See [Input Controls]({{site.baseurl}}/pages/input-controls/basic-usage#rendering-the-control-panel) for more information on configuring the Input Controls component.
In read-only scenarios where you do not wish to process user input, you can omit this configuration.
``` js
events?: {
    change?: (
        ic: { [key: string]: any[] },
        validationResult: { [key: string]: string } | boolean,
        ) => void;
    };
```

## Parameters

The `events.change` property accepts a callback that is given the following parameters when called:

* `ic` - contains a representation of all the input controls that are being rendered in the HTML element container. The format of the object matches the format used by Visualize.js when working with input controls.
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
* `validationResult` - contains any validation errors that may be present.
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
* When all values for all input controls are valid, the param `validationResult` will be a boolean value `false`.
* This event is being triggered by the InputControl class because the InputControl class is a
controlled component. The InputControl class will handle the state of the input controls and will 
update the state of the input controls when the user interacts with them. This is why the InputControl class will
trigger the `change` event every time the state of the input controls changes.

## Handling validations

To handle validations on the developer side, use the [events.change]({{site.baseurl}}/pages/input-controls/events) method when calling
the `renderInputControls`. This method will return a second parameter that contains all validations.
For example:

```typescript
    renderInputControls(
      vContainer.v,
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
For every change that happens in the input control, the events.change method will be executed.
Suppose you have defined a mandatory text input control. This means the input control must have a value. Let's
assume the user has not entered any value in the input control. In this case, the validationResult will contain:
```json 
{"id_1": "Specify a valid value for type number."}
```
where:
* "id_1": is the id of the input control
* "Specify a valid value for type number." is the message that is displayed in the UI.

When all values for all input controls are valid, the param `validationResult` will be a boolean value `false`.

## Handling errors
Use the `error` property when calling the renderInputControls method. When there is an error, this method will 
return an error object when trying to render the input controls.
For example: 
```javascript
    renderInputControls(
      vContainer.v,
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



