/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import {
  Scheduler as JaspersoftScheduler,
  SchedulerConfigProps,
} from "@jaspersoft/jv-scheduler";
import { JVDrawer } from "@jaspersoft/jv-ui-components";

interface SchedulerProps {
  visualize: any;
  schedulerUIConfig: SchedulerConfigProps;
  isPanelOpen: boolean;
}
export const Scheduler = ({
  visualize,
  schedulerUIConfig,
  isPanelOpen,
}: SchedulerProps) => {
  return (
    <JVDrawer
      anchor="right"
      open={isPanelOpen}
      style={{ top: "3px" }}
      classes={{
        paper: "jv-uOverflow-hide jv-uWidth-750px",
      }}
    >
      <div
        className="jv-lColumns-column  jv-uOverflow-auto"
        style={{ height: "100%" }}
      >
        <JaspersoftScheduler
            // @ts-ignore
          schedulerUIConfig={schedulerUIConfig}
          visualize={visualize}
        />
      </div>
    </JVDrawer>
  );
};
