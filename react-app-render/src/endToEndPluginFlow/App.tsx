/*
 * Copyright © 2024. Cloud Software Group, Inc.
 * This file is subject to the license terms contained
 * in the license file that is distributed with this file.
 */

import {useEffect, useState} from "react";
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
import { ErrorDialog} from "./Error";


function App({visualize, uri}: any) {

    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [isErrorDialogOpen, setIsErrorDialogOpen] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");


    useEffect(() => {
            schedulerUIConfig.events.cancelBtnClick = () => {
                console.log("cancel button is clicked");
                setIsPanelOpen(false);
            };
            schedulerUIConfig.events.scheduleBtnClick = (
                isScheduleSuccessful,
                jobInfo,
            ) => {
                console.log("Schedule button clicked", isScheduleSuccessful, jobInfo);
                if (isScheduleSuccessful) setIsPanelOpen(false);
            };
            schedulerUIConfig.events.success = () => {
                console.log("Schedule panel rendered successfully");
            };

            schedulerUIConfig.events.error = (error: any) => {
                setIsPanelOpen(false)
                setIsErrorDialogOpen(true)
                Object.keys(error).forEach((key) => {
                    setErrorMsg(error[key])
                })
            }
    })
    console.log(defaultSchedulerConfig, "SchedulerConfig");
    return (
        <>
            <div id="scheduler"></div>
            {visualize ? (
                <>
                    <div id="header">
                        <h1 className="flexItem pageHeader-title-text">
                            Demo Application
                            <div className="pageHeader-subtitle-path">
                <span className="pageHeader-subtitle-path-label">
                  Resource URI:{" "}
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
                    { isErrorDialogOpen && <ErrorDialog errorMsg={errorMsg} handleCancelBtn={() => {
                        setIsErrorDialogOpen(false)
                    }}
                    />}
                </>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}

export default App;
