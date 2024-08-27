---
layout: default
title: Events
nav_order: 3
parent: Input Controls
has_children: false
---

# Events

The `events` prop is an object that allows you to listen to events that are emitted by the input control. It is part of
the panel definition object explained in the
[Input Controls](/pages/input-controls/basic-usage#injecting-the-visualizejs-object-into-the-plugin) page.
It is optional. If you don't provide it, the input control will not emit any events.
``` js
events?: {
    change?: (
        ic: { [key: string]: any[] },
        validationResult: { [key: string]: string } | boolean,
        ) => void;
    };
```

## Parameters

The params of the `events.change` event are:

* `ic`. This is an object that contains all the input controls that are being rendered in the HTML element container.
The key of this object is the ID of the input control and the value is an array of the selected values. Example of
this object could be:
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
* `validationResult`. This is an object that contains all the input controls that are being rendered in the HTML element
container with information about the _validity_ of the value per each input control. The keys of this object is the ID
of the input control and the value is a string that represents the result of the validation for the input control.
If the input control is valid, the value will be an **empty array**. If the input control is invalid, the value
will be **a string** that contains the error message. Example:
``` json
{
  "column_time_1": "Verify the time is before or exactly 22:00:00."
  "column_timestamp_1": "Verify the date is before or exactly 2014-09-11T15:00:00.",
}
```
##### **_Notes_**
* In case all values for all input controls are valid, the param `validationResult` will be a boolean value `false`.
* This is an event that is being triggered by the InputControl class. This is because the InputControl class is a
controlled component. This means that the InputControl class will handle the state of the input controls and will 
update the state of the input controls when the user interacts with them. This is why the InputControl class will
trigger the `change` event every time the state of the input controls changes.