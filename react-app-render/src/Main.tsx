import useVisualize from "./visualize/useVisualize";
import { ReactNode, useEffect, useState } from "react";
import InputControlsLiveSample from "./InputControlsLiveSample/InputControlsLiveSample";
import { SchedulerLiveSample } from "./SchedulerLiveSample/SchedulerLiveSample";
import App from "./endToEndPluginFlow/App";
import { ReportSample } from "./ReportSample/ReportSample.tsx";
import InputControlTypes from "./InputControlTypes/InputControlTypes.tsx";

const visualizeUrl =
  "https://mobiledemo.jaspersoft.com/jasperserver-pro/client/visualize.js";
// const visualizeUrl = "http://localhost:8080/jasperserver-pro/client/visualize.js";

export const inputControlsPageStart = "/input-controls/live-sample.html";
export const inputControlsTypesPageStart = "/input-controls/types-samples.html";
export const schedulerPageStart = "/scheduler/demo.html";
export const applicationPageStart = "Application.html";

const resourceUri = "/public/Samples/Reports/9.CustomerDetailReport";

const Main = () => {
  const vContainer = useVisualize(visualizeUrl);
  const [sampleComponent, setSampleComponent] = useState<ReactNode | null>(
    null,
  );

  useEffect(() => {
    if (vContainer) {
      const lastPartOfUrl = window.location.href;
      if (lastPartOfUrl.endsWith(inputControlsPageStart)) {
        setSampleComponent(<InputControlsLiveSample vContainer={vContainer} />);
      } else if (lastPartOfUrl.endsWith(inputControlsTypesPageStart)) {
        setSampleComponent(<InputControlTypes vContainer={vContainer} />);
      } else if (lastPartOfUrl.endsWith(schedulerPageStart)) {
        setSampleComponent(
          <SchedulerLiveSample vContainer={vContainer} uri={resourceUri} />,
        );
      } else if (lastPartOfUrl.endsWith(applicationPageStart)) {
        setSampleComponent(<App visualize={vContainer} uri={resourceUri} />);
      } else if (lastPartOfUrl.endsWith("input-controls/report-sample.html")) {
        setSampleComponent(
          <ReportSample vContainer={vContainer} uri={resourceUri} />,
        );
      }
    }
  }, [vContainer]);
  return <>{vContainer ? sampleComponent : <>Loading...</>}</>;
};

export default Main;
