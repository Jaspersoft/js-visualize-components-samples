---
layout: default
title: Report Viewer Sample
nav_order: 6
parent: Input Controls
has_children: false
---

<script type="module" src="../../assets/js/build/react-app-render-build.js"></script>

<div id="root"></div>

By combining the input controls component with Visualize.js's report viewer, reports can be controlled.

In order to do this, we provide a callback to the `events.change` property when configuring our input control component:

```typescript
type ReportSampleProps = {
    v: VisualizeClient;
    uri: string;
};

export const ReportSample = (props: ReportSampleProps) => {
  let reportUri = "/public/Samples/Reports/9g.CustomerDetailReport";
  const [vReport, setVReport] = useState<any>();
  const [controlState, setControlState] = useState<any>();

  const panelDefinition = {
    events: {
      change: (controls: any) => {
        setControlState(controls);
      },
    },
  };

  useEffect(() => {
    if (props.v) {
      const reportContainer = props.v.report({
        resource: reportUri,
        container: "#report-viewer",
      });
      setVReport(reportContainer);
    }
  }, []);

  useEffect(() => {
    if (vReport) {
      vReport.params(controlState).run();
    }
  }, [controlState]);

  return (
    <div id="report-viewer-sample">
      <InputControls
        v={props.v}
        uri={reportUri}
        config={panelDefinition}
      />
      <div id="report-viewer"></div>
    </div>
  );
};


```

The component accepts two parameters, vContainer and uri, which contain visualize's v object and the reports URI, respectively.

```typescript
<ReportSample v={visualizeObject} uri={reportUri} />

```
