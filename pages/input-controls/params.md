---
layout: default
title: Override default values
nav_order: 5
parent: Input Controls
has_children: false
---

# Override default values

This document explains how to override the default values of input controls with your own predefined values. By default,
input controls display initial values fetched from the server. However, you can use the `params` property to specify
different initial values.

### How to use the `params` property

1. **Create a JSON object**<br>In your input controls configuration, add a `params` property containing a JSON object.
2. **Define input control IDs and values**<br>Each key in the JSON object should match the ID of an input control. The
   corresponding value should be an array of values you want to set as the initial value for that input control.
``` typescript
        params: {
          column_boolean_1: ["false"],
          column_string_1: [
            "This is a predefined text different than the stored in the server",
          ],
          column_date_1: ["2009-03-02"],
          column_timestamp_1: ["2014-03-02T10:00:00"],
          column_time_1: ["14:00:00"],
          ProductFamily: ["Drink", "Food"],
        }
```

### Important notes

* **Multi-select controls** <br>Only multi-select input controls (like `ProductFamily` in the example) accept multiple values
  in the array.
* **Single-value controls**<br>For all other input control types, only the first value in the array will be used as the
  initial value.
* **Non-existent IDs**<br>If you provide an ID that doesn't match any input control, it will simply be ignored. No errors will
  be thrown.
* **Optional property**<br>The `params` property is optional. If you don't provide it, the input controls will display the
  initial values fetched from the server.
