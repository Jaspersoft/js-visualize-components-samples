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

See [Input Controls](/pages/input-controls/basic-usage#injecting-the-visualizejs-object-into-the-plugin) for more information on configuring the input controls component.
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
* In case all values for all input controls are valid, the param `validationResult` will be a boolean value `false`.
* This is an event that is being triggered by the InputControl class. This is because the InputControl class is a
controlled component. This means that the InputControl class will handle the state of the input controls and will 
update the state of the input controls when the user interacts with them. This is why the InputControl class will
trigger the `change` event every time the state of the input controls changes.
