/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */
import { VisualizeClient } from "@jaspersoft/jv-tools";
import { useEffect } from "react";

export interface ReportPanelProps {
  resourceURI?: string;
  vObject?: VisualizeClient | any;
}

export default function ReportPanel(props: ReportPanelProps) {
  useEffect(() => {
    props.vObject?.report({
      resource: props.resourceURI || "",
      container: "#report-viewer",
      isolateDom: true,
      defaultJiveUi: { enabled: false },
    });
  }, []);

  return (
    <div
      id="report-viewer"
      style={{
        position: "absolute",
        top: "50px",
        height: "720px",
        width: "650px",
        zIndex: -10,
      }}
    ></div>
  );
}
