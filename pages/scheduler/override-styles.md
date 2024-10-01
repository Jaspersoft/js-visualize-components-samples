---
layout: default
title: Override Styles
nav_order: 4
parent: Scheduler
has_children: false
---

# Overriding default styles

Currently, scheduler are shipped with default styles. 
These default styles are applied to the scheduler when they are rendered in the HTML element container.
In order to prevent any conflicts with your app's styles, the scheduler styles have been scoped to the scheduler container by using a prefix class. The prefix class is `jv-`.

## The default styles

The package `@jaspersoft/jv-ui-components` provides a stylesheet that contains the default styles for the scheduler.
This file can be located in the following path: `@jaspersoft/jv-ui-components/dist/jv-ui.css`.
By default, it is imported in the sample app's `App.tsx` file. E.g:
``` ts
    import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
    import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup";
```
**_Note_**: _The second import is to configure the styles to be applied only to the scheduler UI components._

You can choose not to import them at all, or you can import them and override the styles as needed.

## How to overwrite the default styles

Consider the following code that is rendered for `Create schedule` button when the scheduler is rendered:
``` html
<button class="jv-MuiButtonBase-root jv-MuiButton-root jv-MuiButton-contained jv-MuiButton-containedPrimary jv-MuiButton-sizeMedium jv-MuiButton-containedSizeMedium jv-MuiButton-disableElevation jv-MuiButton-root jv-MuiButton-contained jv-MuiButton-containedPrimary jv-MuiButton-sizeMedium jv-MuiButton-containedSizeMedium jv-MuiButton-disableElevation jv-mButton  jv-mButtonPrimary mui  css-zddlty-MuiButtonBase-root-MuiButton-root" tabindex="0" type="button">
    <span class="jv-MuiButton-label jv-mButton-label mui ">Create schedule</span>
    <span class="jv-MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root"></span>
</button>
```
The component that is being rendered contains the CSS rule: `.jv-mButtonPrimary.jv-MuiButton-contained.mui`
which is in charge of the background color of the button.
To override this style, you can add the following CSS to your app:
``` css
.jv-mButtonPrimary.jv-MuiButton-contained.mui {
    background-color: red;
}
```
Which will make the background color of the button to red.

## UI Components
All UI components are based on the [material UI](https://v5.mui.com/material-ui/getting-started/) components v5.

As mentioned, every component has its own default styles. However, the stylesheet provided overrides the styling of the 
material UI components. In the end, you will never get the exact same look and feel as in MUI components, instead, 
you'll get a version of those components with styling of our own.