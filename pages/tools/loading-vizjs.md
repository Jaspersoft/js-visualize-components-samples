---
layout: default
title: Loading visualize.js
nav_order: 1
has_children: false
parent: jv-tools
---

### Loading visualize.js

This function works in a browser environment (assumes access to DOM), by dynamically inserting a script tag to load visualize.js. In your own code, when initializing your page, you can use this utility method to more easily load and store as you wish the visualize.js object.

Alternatively, if you are already including visulize using a script tag on the page, it will be stored in a global scope and will simply be returned by this function. 

In a react based application, you can use the `useEffect` hook to handle this as in the example below.
```typescript
  
  const credentials: Authentication = {
    name: "joeuser",
    password: "joeuser",
    organization: "organization_1",
  };

  const [visualizeFactoryContainer, setVisualizeFactoryContainer] = useState(
    null as { viz: VisualizeFactory } | null,
  );

  const [vContainer, setVContainer] = useState(
    null as { v: VisualizeType } | null,
  );

  const [plugin, setPlugin] = useState<InputControls>();

  useEffect(() => {
    const loadVisualize = visualizejsLoader(visualizeUrl);
    loadVisualize().then((visualizeFactory: VisualizeFactory) => {
      setVisualizeFactoryContainer({ viz: visualizeFactory });
    });
  }, []);

  useEffect(() => {
    if (credentials && visualizeFactoryContainer) {
      new Promise<VisualizeType>((resolve, reject) => {
        visualizeFactoryContainer.viz(
          {
            auth: {
              name: credentials.name,
              password: credentials.password,
              organization: credentials.organization || null,
              locale: "en_US",
            },
          },
          resolve,
          reject,
        );
      })
        .then((v: VisualizeType) => {
          setVContainer({ v });
        })
        .catch((e: any) => {
          console.log(String(e));
        }); 
    }
  }, [visualizeFactoryContainer]);

  useEffect(() => {
    vContainer && setPlugin(new InputControls(vContainer.v));
  }, [vContainer]);

```

In this sample, we eventually set vContainer which has one property, v, containing what is called the **V Object**, which can be used across several of the visualize components.

