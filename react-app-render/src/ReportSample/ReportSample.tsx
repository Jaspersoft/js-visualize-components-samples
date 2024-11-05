/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */
import { useState, useEffect } from "react";
import { InputControls } from "@jaspersoft/jv-input-controls";

export type ReportSampleProps = {
  vContainer: any;
  uri: string;
};
export const ReportSample = (props: ReportSampleProps) => {
  let reportUri =
    props.uri || "/public/Samples/Reports/9g.CustomerDetailReport";
  const [vReport, setVReport] = useState<any>();
  const [controlState, setControlState] = useState<any>();

  const panelDefinition = {
    events: {
      change: (ics: any) => {
        setControlState(ics);
      },
    },
  };

  useEffect(() => {
    if (props.vContainer?.v) {
      const reportContainer = props.vContainer?.v.report({
        container: "#report-viewer",
        resource: reportUri,
        defaultJiveUi: { enabled: false },
        isolateDom: true,
      });
      setVReport(reportContainer);
    }
  }, []);

  const updateButtonClick = () => {
    if (vReport) {
      vReport.params(controlState).run();
    }
  };

  return (
    <div id="report-viewer-sample">
      <InputControls
        v={props.vContainer.v}
        uri={reportUri}
        config={panelDefinition}
      />
      <input
        type="button"
        id="update"
        onClick={updateButtonClick}
        value="Update Report"
      />
      <div
        id="report-viewer"
        style={{
          position: "absolute",
          top: "140px",
          width: "650px",
          height: "720px",
          zIndex: -10,
        }}
      ></div>
    </div>
  );
};
