---
layout: default
title: Override default styles
nav_order: 4
parent: Scheduler
has_children: false
---

# Override default styles

The scheduler is shipped with default styles. These default styles are applied to the scheduler when they are rendered in the HTML element container. To prevent any conflicts with your application's styles, the scheduler styles have been scoped to the scheduler container only by using the prefix `jv-` on all CSS classnames.

## The default styles

The package `@jaspersoft/jv-ui-components` provides a stylesheet that contains the default styles for the scheduler.
This file can be located in the following path: `@jaspersoft/jv-ui-components/dist/jv-ui.css`.
It is imported in the sample application's `index.css` and `App.tsx` files as follows:
``` ts
    import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
    import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup";
```
**_Note_**: _The second import is to configure the styles to be applied only to the scheduler UI components._

You can choose not to import them at all, or you can import them and override the styles as needed.

## How to overwrite the default styles

The following code is rendered for `Create schedule` button in the scheduler:
``` html
<button class="jv-MuiButtonBase-root jv-MuiButton-root jv-MuiButton-contained jv-MuiButton-containedPrimary jv-MuiButton-sizeMedium jv-MuiButton-containedSizeMedium jv-MuiButton-disableElevation jv-MuiButton-root jv-MuiButton-contained jv-MuiButton-containedPrimary jv-MuiButton-sizeMedium jv-MuiButton-containedSizeMedium jv-MuiButton-disableElevation jv-mButton  jv-mButtonPrimary mui  css-zddlty-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
    <span class="jv-MuiButton-label jv-mButton-label mui ">Create schedule</span>
    <span class="jv-MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span>
</button>
```
This button references the CSS rule: `.jv-mButtonPrimary.jv-MuiButton-contained.mui`,
which applies the background color of the button. To override this style, you can add your own custom CSS to your application. For example, the following rule will make the background color of the button red:
``` css
.jv-mButtonPrimary.jv-MuiButton-contained.mui {
    background-color: red;
}
```


## About the default styles
All Jaspersoft Visualize Components are based on [Material UI](https://v5.mui.com/material-ui/getting-started/) v5 components.
(Check the list of all available input controls [here]({{site.baseurl}}/pages/input-controls/all-ics)). However, we created our own CSS file that overrides the default Material UI styles, giving all components the look and feel of Jaspersoft. As a result, you will not get the exact same look and feel as out-of-the-box Material UI components. Instead, you get a version of those components with styling of our own.