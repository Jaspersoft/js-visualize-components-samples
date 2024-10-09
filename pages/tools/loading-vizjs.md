---
layout: default
title: Loading Visualize.js
nav_order: 1
has_children: false
parent: Tools
---

### Loading visualize.js

This function works in a browser environment (assumes access to DOM) by dynamically inserting a script tag to load Visualize.js. In your own code, when initializing your page, you can use this utility method to more easily load and store the Visualize.js object as you wish.

Alternatively, if you are already including Visualize.js using a script tag on the page, it will be stored in a global scope and will simply be returned by this function. 

In a react based application, you can use the `useEffect` hook to handle this as in the example below.
```typescript
  
  const credentials: Authentication = {
    name: "joeuser",
    password: "joeuser",
    organization: "organization_1",
  };

  const [vContainer, setVContainer] = useState(
    null as { v: VisualizeType } | null,
  );

  useEffect(() => {
      const loadVisualize = visualizejsLoader(visualizeUrl);
      console.log("Loading Visualize.js...");
      loadVisualize()
          .then((visualizeFactory: VisualizeFactory) => {
              // Connecting to JRS.
              console.log("Visualize.js loaded. Connecting to JRS...");
              visualizeFactory(
                  {
                      auth: {
                          ...credentials,
                          locale: "en_US",
                      },
                  },
                  (v: VisualizeClient) => {
                      console.log("Visualize client connected.");
                      setVContainer({ v });
                  },
                  (e: any) => {
                      console.log(String(e));
                  },
              );
          })
          .catch((error: Error) => {
              console.log("Error loading visualize.js: ", error);
          });
  }, []);

  useEffect(() => {
      if (!vContainer || !vContainer.v) {
          return;
      }
      renderInputControls(
          vContainer.v,
          reportUri,
          document.getElementById("basic-controls-section") as HTMLElement,
          {
              success: () => {
                  console.log("Basic controls rendered successfully");
              },
              error: (error) => {
                  console.log("Error when rendering the Basic controls: ", error);
              },
              config: {
                  bool: {
                      type: "switch"
                  },
              },
              events: {
                  change: (ics, validationResult) => {
                      console.log("validationResult => ", validationResult);
                      console.log("ics => ", ics);
                  },
              },
          },
      );
  }, [vContainer]);


```

In this sample, we eventually set vContainer which has one property, `v`, containing what is called the **V Object**, which can be used across several of the Visualize.js components.