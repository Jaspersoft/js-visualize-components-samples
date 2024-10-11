---
layout: default
title: Loading Visualize.js
nav_order: 1
has_children: false
parent: Tools
---

# Loading Visualize.js

## Visualize.js loader

The main utility you will use from the tools is the `visualizeJsLoader` function. This function allows you to load Visualize.js from a provided URL. It will then create a script tag to load the script, making it available to work with in code.

You can optionally maintain loading of Visualize.js on your own (for example, using script tag), and allow it to be set on the global scope. If this is done, `visualizeJsLoader` will return `VisualizeFactory` function from global scope instead of loading Visualize.js script again.

## Authentication

To work with your JasperReports Server instance via Visualize.js API you need to authenticate with it using `VisualizeFactory` function and get `VisualizeClient` instance. 

There are different ways to authenticate with JasperReports Server: 
* organization, username, and password
* token
* custom login and logout functions

You should use `Authentication` object to provide credentials or custom authentication functions:

```typescript
type Authentication = {
  url?: string;
  name?: string;
  password?: string;
  organization?: string | null;
  locale?: string;
  timezone?: string;
  token?: string;
  preAuth?: boolean;
  tokenName?: string;
  loginFn?: () => void;
  logoutFn?: () => void;
}
```

### Sample of authentication in React application
In the following sample we will use the `useEffect` hook to load Visualize.js, authenticate with the JasperReports Server and store `VisualizeClient` instance in `vContainer` as `v` property:
```typescript
  const myAuth: Authentication = {
    name: "joeuser",
    password: "joeuser",
    organization: "organization_1",
    locale: "en_US"
  };

  const [vContainer, setVContainer] = useState(
    null as { v: VisualizeClient } | null,
  );

  useEffect(() => {
      const loadVisualize = visualizejsLoader(visualizeUrl);
      console.log("Loading Visualize.js...");
      loadVisualize()
          .then((visualizeFactory: VisualizeFactory) => {
              // Connecting to JRS.
              console.log("Visualize.js loaded. Connecting to JasperReports Server...");
              visualizeFactory(
                  {
                      auth: myAuth
                  },
                  (v: VisualizeClient) => {
                      console.log("Visualize client connected.");
                      setVContainer({ v });
                  },
                  (e: any) => {
                    console.log("Error connecting to JasperReports Server.");
                      console.log(String(e));
                  },
              );
          })
          .catch((error: Error) => {
              console.log("Error loading visualize.js: ", error);
          });
  }, []);
```

And now we will render input controls using `VisualizeClient` instance and `renderInputControls` function:
```typescript
    useEffect(() => {
        if (!vContainer || !vContainer.v) {
            return;
        }
        renderInputControls(
            vContainer.v,
            reportUri,
            document.getElementById("input-controls-container") as HTMLElement,
            {
                success: () => {
                    console.log("Input controls rendered successfully");
                },
                error: (error) => {
                    console.log("Error rendering input controls: ", error);
                },
                typeConfig: {
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