---
layout: default
title: React Component
nav_order: 5
parent: Input Controls
has_children: false
---

# React Component for Input Controls

In addition to being able to render using JavaScript, it is also possible to use the provided `InputControlsPanel` component in an existing React application. Similar to the JavaScript approach, the V object, uri and an optional configuration can be provided when adding the component to your page.

```jsx
export default function MyPanel() {

const reportUri = '/path/to/report';
const panelDefinition = {
    config: {bool: {type: 'switch'}},
    events: {
        change: (controls: any, validations: any) => {
            if (validations === false) {console.log(controls)}
        }
    },
};

return (
    <>
      <h1> {reportUri} </h1>
        <InputControlsPanel 
            vObject={visualize} 
            uri={reportUri} 
            panelDef={panelDefinition}
        />
    </>
);

}
```
