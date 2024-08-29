---
layout: default
title: All Input Controls
nav_order: 2
parent: Input Controls
has_children: false
---
# List of all Input Controls

The input controls plugin enables you with different set of UI components to render input controls in your web
application. You may want to use a specific UI component for a specific input control type.
This guide will help you understand how to use different UI components for specific input control types.

##  Boolean input controls
For boolean input controls, you can use the `Checkbox` or the `Switch` component.
As mentioned in the [Input Controls]({{site.baseurl}}/pages/input-controls/basic-usage#panel-definition) guide, you could use the 
`Checkbox` for rendering boolean input controls, however, you might want to use the `Switch` component instead.

#### Switch component

To define a switch component, you have to provide the param like this:
  ```js
  {
       bool: {
          type: "switch"
       }
  }
  ```

#### Checkbox component
  To define a checkbox component, you have to provide the param like this:
  ```js
  {
       bool: {
          type: "checkbox"
       }
  }
  ```

##  Text input controls
For text input controls, you can use the `textField` component.
Depending on the metadata defined for your text input control, all proper validations will be applied to it
automatically.

E.g. assume you have defined the input control as **mandatory**, then the input control will be invalid
in case the user leaves it empty.

So far only 1 style has been defined for this component, so you could ignore passing any attribute to this
input control. However, the full configuration is:
  ```js
  {
       singleValueText: {
          type: "textField"
       }
  }
  ```


##  Number input controls
For number input controls, you can use the `number` component.
Depending on the metadata defined for your number input control, all proper validations will be applied to it
automatically. It will behave similarly to the text field input control, but it also validates the value written in this
input control is a number format.

So far only 1 style has been defined for this component, so you could ignore passing any attribute to this
input control. However, the full configuration is:
  ```js
  {
       singleValueNumber: {
          type: "number"
       }
  }
  ```

##  Date input controls
For date input controls, you can use the `date` component.
All proper validations will be applied automatically depending on the metadata defined for your date input control.
E.g. assume you have defined a min date and a max date (range of dates) as valid values, then this input control will
enable only that range date. Additionally, you could either provide a default style (JRS look alike) or a material
style (from [MUI](https://mui.com/x/react-date-pickers/date-picker/)).

#### JRS look alike component

To define a date component with JRS look alike, you have to provide the configuration like this:
  ```js
  {
    singleValueDate: {
          type: "default"
       }
  }
  ```

_Note: By default, this is the style that will be used if you don't provide any configuration._

#### Material component
To define a date component with Material look alike, you have to provide the configuration like this:
  ```js
  {
    singleValueDate: {
          type: "material"
       }
  }
  ```

##  Date time input controls
For date time input controls, you can use the `datetime` component.
All proper validations will be applied automatically depending on the metadata defined for your datetime input control.
E.g. assume you have defined a min datetime and a max datetime (range of dates) as valid values, then this input
control will enable only that range date.

Additionally, you could either provide a default style (JRS look alike) or a material style
(from [MUI](https://mui.com/x/react-date-pickers/date-picker/)).

#### JRS look alike component

To define a date time component with JRS look alike, you have to provide the configuration like this:
  ```js
  {
    singleValueDatetime: {
          type: "default"
       }
  }
  ```

_Note: By default, this is the style that will be used if you don't provide any configuration._

#### Material component
To define a date time component with Material look alike, you have to provide the configuration like this:
  ```js
  {
    singleValueDatetime: {
          type: "material"
       }
  }
  ```

##  Time input controls
For time input controls, you can use the `time` component.
All proper validations will be applied automatically depending on the metadata defined for your time input control.
E.g. assume you have defined a min time and a max time (range of times) as valid values, then this input control will
enable only that range time. 

Additionally, you could either provide a default style (JRS look alike) or a material style
(from [MUI](https://mui.com/x/react-date-pickers/date-picker/)). 

#### JRS look alike component

To define a time component with JRS look alike, you have to provide the configuration like this:
  ```js
  {
    singleValueTime: {
          type: "default"
       }
  }
  ```

_Note: By default, this is the style that will be used if you don't provide any configuration._

#### Material component
To define a time component with Material look alike, you have to provide the configuration like this:
  ```js
  {
    singleValueTime: {
          type: "material"
       }
  }
  ```

##  Single select input controls
All proper validations will be applied automatically depending on the metadata defined for your single select input
control. E.g. assume you have defined a list of values as valid values, then this input control will enable only that
list of values. 

Currently, there is no additional configurations for this input control. However, it is listed as one possible
input control option.
