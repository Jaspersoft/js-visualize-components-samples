---
layout: default
title: Override Styles
nav_order: 4
parent: Input Controls
has_children: false
---

# Overriding default styles

Currently, all input controls are shipped with default styles. 
These default styles are applied to the input controls when they are rendered in the HTML element container.
In order to prevent any conflicts with your app's styles, the input control styles have been scoped to the input
control container by using a prefix class. The prefix class is `jv-`.

## The default styles

The package `@jaspersoft/jv-ui-components` provides a stylesheet that contains the default styles for the input controls.
This file can be located in the following path: `@jaspersoft/jv-ui-components/dist/jv-ui.css`.
By default, it is imported in the sample app's `index.css` and `App.tsx` files. E.g:
```css
@import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
```
``` ts
    import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup";
```
**_Note_**: _The second import is to configure the styles to be applied only to the input controls UI components._

You can choose not to import them at all, or you can import them and override the styles as needed.

## How to overwrite the default styles

Consider the following code that is rendered when using a `checkbox` component for a boolean input control:
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
The component that is being rendered contains the CSS rule: `.jv-MuiSwitch-colorPrimary.Mui-checked + .jv-MuiSwitch-track`
which is in charge of the background color of the switch when it is checked.
To override this style, you can add the following CSS to your app:
``` css
.jv-MuiSwitch-colorPrimary.Mui-checked + .jv-MuiSwitch-track {
    background-color: red;
}
```
Which will make the background color of the switch red when it is checked.

## UI Components
All UI components are based on the [material UI](https://v5.mui.com/material-ui/getting-started/) components v5.
(Check the list of all available input controls [here]({{site.baseurl}}/pages/input-controls/all-ics)).

As mentioned, every component has its own default styles. However, the stylesheet provided overrides the styling of the 
material UI components. In the end, you will never get the exact same look and feel as in MUI components, instead, 
you'll get a version of those components with styling of our own.