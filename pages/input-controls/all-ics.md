---
layout: default
title: All Input Controls
nav_order: 2
parent: Input Controls
has_children: false
---
# Types of Input Controls

Input controls plugin can render controls in an existing web application for a given report or ad hoc view from a Jasperreports Server instance. The plugin permits customization for look and feel, which is done using a configuration object. Following are some descriptions of the types of input controls available.


##  Boolean
Depending on a desired look and feel, boolean input controls may be represented by either a `Checkbox` or a `Switch` component. If no configuration is provided, boolean inputs will be shown as a `Checkbox`. 

#### Switch

Switch components can be used if configured as below:
  ```js
  {
       bool: {
          type: "switch"
       }
  }
  ```

#### Checkbox
For checkbox components configuration may be omitted or specified as below:
```js
  {
       bool: {
          type: "checkbox"
       }
  }
  ```

##  Text
For text input controls, use the `textField` component. This component has some validations that may occur and errors can be displayed when the value is invalid. These validations are part of the input control and defined in JRS.

  ```js
  {
       singleValueText: {
          type: "textField"
       }
  }
  ```


##  Number
For number input controls, use the `number` component.

  ```js
  {
       singleValueNumber: {
          type: "number"
       }
  }
  ```

##  Date
For date input controls, use the `date` component.
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
