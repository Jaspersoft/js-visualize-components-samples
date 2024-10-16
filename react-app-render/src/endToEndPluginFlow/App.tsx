/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import {  useState } from "react";
import "@jaspersoft/jv-ui-components/dist/jv-ui.css";
import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup";
import {
    defaultSchedulerConfig,
} from "@jaspersoft/jv-scheduler";
import { JVButton } from "@jaspersoft/jv-ui-components";
import schedulerUIConfig from "../constants/jv_sheduler_config";
import ReportPanel from "./report/ReportPanel";
import "./App.css";
import { Scheduler } from "./Scheduler";


function App({visualize, uri}: any) {

    const [isPanelOpen, setIsPanelOpen] = useState(false);



    console.log(defaultSchedulerConfig, "SchedulerConfig");
    return (
        <>
            <div id="scheduler"></div>
            {visualize ? (
                <>
                    <div id="header">
                        <h1 className="flexItem pageHeader-title-text">
                            Scheduler App
                            <div className="pageHeader-subtitle-path">
                <span className="pageHeader-subtitle-path-label">
                  Schedule For:{" "}
                </span>
                                <span className="pageHeader-subtitle-path-text">
                  {uri}
                </span>
                            </div>
                        </h1>
                        <JVButton
                            id="scheduleBtn"
                            disableElevation
                            size="large"
                            color="primary"
                            variant="contained"
                            onClick={() => setIsPanelOpen(true)}
                        >
                            Schedule
                        </JVButton>
                    </div>
                    <div
                        id="pageDimmer"
                        className={`dimmer ${isPanelOpen ? "" : "hidden"}`}
                        style={{ zIndex: 999 }}
                    ></div>
                    <ReportPanel vObject={visualize.v} resourceURI={uri} />
                    {isPanelOpen && (
                        <Scheduler
                            v={visualize.v}
                            config={schedulerUIConfig}
                            uri={uri}
                        />
                    )}
                </>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}

export default App;
