---
layout: default
title: Override default styles
nav_order: 4
parent: Input Controls
has_children: false
---

# Override default styles

All input controls are shipped with default styles. These default styles are applied to the input controls when they are rendered in the HTML element container. To prevent any conflicts with your application's styles, the input control styles have been scoped to the input control container only by using the prefix `jv-` on all CSS classnames.

## The default styles

The package `@jaspersoft/jv-ui-components` provides a stylesheet that contains the default styles for the input controls.
This file can be located at the following path: `@jaspersoft/jv-ui-components/dist/jv-ui.css`.
It is imported in the sample application's `index.css` and `App.tsx` files as follows:
```css
@import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
```
There is a configuration that enables you to use the default styles for the input controls components only. When this configuration is used, the other styles in your application will not be affected by the Visualize Components CSS:

``` ts
import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup";
```

You can choose not to import them at all, or you can import them and override the styles as needed.

## How to overwrite the default styles

The following code is rendered when using a `checkbox` component for a boolean input control:
``` html
<div class="jv-mInput jv-mInputSwitch jv-mInputInline jv-mInputLarge mui">
    <label class="jv-MuiFormControlLabel-root jv-MuiFormControlLabel-labelPlacementEnd">
        <span class="jv-MuiSwitch-root jv-MuiSwitch-sizeMedium jv-mInput-switch mui">
            <span class="jv-PrivateSwitchBase-root jv-MuiSwitch-switchBase jv-MuiSwitch-colorPrimary Mui-checked">
                <input class="jv-PrivateSwitchBase-input jv-MuiSwitch-input" type="checkbox" checked="">
                <span class="jv-MuiSwitch-thumb"></span>
                <span class="jv-MuiTouchRipple-root"></span>
            </span>
            <span class="jv-MuiSwitch-track"></span>
        </span>
        <span class="jv-MuiTypography-root jv-MuiFormControlLabel-label jv-mInput-label mui">column_boolean</span>
    </label>
</div>
```
This checkbox component references the CSS rule `.jv-MuiSwitch-colorPrimary.Mui-checked + .jv-MuiSwitch-track`,
which is used to apply the background color of the switch when it is checked.
To override this style, you can add your own custom CSS to your application. For example, the following rule will make the background color of the switch red when it is checked.:
``` css
.jv-MuiSwitch-colorPrimary.Mui-checked + .jv-MuiSwitch-track {
    background-color: red;
}
```

## About the default styles
All Jaspersoft Visualize Components are based on [Material UI](https://v5.mui.com/material-ui/getting-started/) v5 components.
(Check the list of all available input controls [here]({{site.baseurl}}/pages/input-controls/all-ics)). However, we created our own CSS file that overrides the default Material UI styles, giving all components the look and feel of Jaspersoft. As a result, you will not get the exact same look and feel as out-of-the-box Material UI components. Instead, you get a version of those components with styling of our own.