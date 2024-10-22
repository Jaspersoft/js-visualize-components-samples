---
layout: default
title: All Input Controls
nav_order: 2
parent: Input Controls
has_children: false
---
# All Input Controls

The Input Controls component allows you to render input controls in your web application. This guide will help you understand how to use different UI components for specific input control types.

##  Boolean
For boolean input controls, use the `checkbox` or the `switch` component. You can use the `checkbox` for rendering boolean input controls, however, you might want to use the `switch` component instead.

#### Checkbox
  To define a checkbox component, provide the param as follows:
  ```js
  {
       bool: {
          type: "checkbox"
       }
  }
  ```

#### Switch
To define a switch component, provide the param as follows:
  ```js
  {
       bool: {
          type: "switch"
       }
  }
  ```

##  Text
For text input controls, use the `textField` component.
Depending on the metadata defined for your text input control, all proper validations will be applied to it automatically. For example, if you have defined the input control as **mandatory**, the input control will be invalid when the user leaves it empty.

Only one style has been defined for this component, so you could ignore passing any attribute to this input control. However, the full configuration is:
  ```js
  {
       singleValueText: {
          type: "textField"
       }
  }
  ```

##  Number
For number input controls, use the `number` component.
Depending on the metadata defined for your number input control, all proper validations will be applied to it automatically. The number input control functions similarly to a text field, but with built-in validation to ensure the entered value is a number.

Only one style has been defined for this component, so you could ignore passing any attribute to this input control. However, the full configuration is:
  ```js
  {
       singleValueNumber: {
          type: "number"
       }
  }
  ```

##  Date
For date input controls, use the `date` component. All proper validations will be applied automatically depending on the metadata defined for your date input control. For example, when you have defined a min date and a max date (range of dates) as valid values, then this input control will enable only that range date. 

Additionally, you can keep the default Jaspersoft style of the date input or opt for [Material UI](https://mui.com/x/react-date-pickers/date-picker/) styling. If you don't provide any configuration the default styles will be used.

#### Default Styling
For a date component with default Jaspersoft styling, provide the following configuration:
  ```js
  {
    singleValueDate: {
          type: "default"
       }
  }
  ```

#### Material UI Styling
For a date component with Material UI styling, provide the following configuration:
  ```js
  {
    singleValueDate: {
          type: "material"
       }
  }
  ```

##  Datetime
For datetime input controls, use the `datetime` component.
All proper validations will be applied automatically depending on the metadata defined for your datetime input control. For example, when you have defined a min datetime and a max datetime (range of dates) as valid values, then this input control will enable only that range date.

Additionally, you can keep the default Jaspersoft style of the date input or opt for [Material UI](https://mui.com/x/react-date-pickers/date-picker/) styling. If you don't provide any configuration the default styles will be used.

#### Default Styling
For a datetime component with default Jaspersoft styling, provide the following configuration:
  ```js
  {
    singleValueDatetime: {
          type: "default"
       }
  }
  ```
#### Material UI Styling
For a datetime component with Material UI styling, provide the following configuration:
  ```js
  {
    singleValueDatetime: {
          type: "material"
       }
  }
  ```

##  Time
For time input controls, use the `time` component. All proper validations will be applied automatically depending on the metadata defined for your time input control. For example, when you have defined a min time and a max time (range of times) as valid values, then this input control will enable only that range time.

Additionally, you can keep the default Jaspersoft style of the date input or opt for [Material UI](https://mui.com/x/react-date-pickers/date-picker/) styling. If you don't provide any configuration the default styles will be used.

#### Default Styling
For a time component with default Jaspersoft styling, provide the following configuration:
  ```js
  {
    singleValueTime: {
          type: "default"
       }
  }
  ```

#### Material UI Styling
For a time component with Material UI styling, provide the following configuration:
  ```js
  {
    singleValueTime: {
          type: "material"
       }
  }
  ```

##  Single Select
All proper validations will be applied automatically depending on the metadata defined for your single select input control. For example, when you define a list of values as valid values, then this input control will enable only that list of values.

There are currently no additional configurations for this input control.

##  Multi Select
All proper validations will be applied automatically depending on the metadata defined for your multi select input control. For example, when you define a list of values as valid values, then this input control will enable only that list of values.

There are currently no additional configurations for this input control.