import schedulerUIConfig from "../constants/jv_sheduler_config";
import {
    Scheduler
} from "@jaspersoft/jv-scheduler";
import { JVDrawer,JVCheckboxGroup, JVCheckbox, JVAccordionFull, JVTypography, JVAccordion, JVAccordionSummary, JVAccordionDetails  } from "@jaspersoft/jv-ui-components";
import {useState} from "react";



export const SchedulerLiveSample = ({vContainer, uri}: any) => {

    const [showStepper, setShowStepper] = useState(true);


    const handleStepperChange = (event: any) => {
        setShowStepper(event.target.checked)
    }
    return (
        <>
            <Scheduler v={vContainer.v} config={schedulerUIConfig} uri={uri} />
            <JVDrawer
                anchor="right"
                open={true}
                style={{ top: "3px", width: "0px" }}
                classes={{
                    paper: "jv-uOverflow-hide",
                }}
                hideBackdrop={true}
                disableEnforceFocus={true}
            >
                <div
                    className="jv-lColumns-column  jv-uOverflow-auto"
                    style={{ height: "100%" }}
                >
                    <JVAccordion size="small">
                        <JVAccordionSummary
                            size="small"
                            aria-controls="stepper-content"
                            id="stepper"
                        >
                            <JVTypography>Show Stepper</JVTypography>
                        </JVAccordionSummary>
                        <JVAccordionDetails className={"jr-mAccordion-body mui"}>
                                <JVCheckbox label="Show stepper"
                                             CheckboxProps={{checked: showStepper, name: "stepper", onChange: handleStepperChange}}/>
                        </JVAccordionDetails>
                    </JVAccordion>
                    <JVAccordion size="small">
                        <JVAccordionSummary
                            size="small"
                            aria-controls="tabs-content"
                            id="tabs"
                        >
                            <JVTypography>Show Tabs</JVTypography>
                        </JVAccordionSummary>
                        <JVAccordionDetails className={"jr-mAccordion-body mui"}>
                            <JVCheckboxGroup size="large" title="Assign responsibility">
                                <JVCheckbox label="Schedule"
                                            CheckboxProps={{checked: showStepper, name: "stepper", onChange: handleStepperChange}}/>
                                <JVCheckbox label="Parameters"
                                            CheckboxProps={{checked: showStepper, name: "stepper", onChange: handleStepperChange}}/>
                                <JVCheckbox label="Notifications"
                                            CheckboxProps={{checked: showStepper, name: "stepper", onChange: handleStepperChange}}/>
                                <JVCheckbox label="Output"
                                            CheckboxProps={{checked: showStepper, name: "stepper", onChange: handleStepperChange}}/>

                            </JVCheckboxGroup>
                        </JVAccordionDetails>
                    </JVAccordion>
                    <JVAccordionFull
                        size="small"
                        expanded={true}
                    >
                        <JVAccordion size="small">
                            <JVAccordionSummary
                                size="small"
                                aria-controls="title2-content"
                                id="title2"
                            >
                                <JVTypography>Schedule</JVTypography>
                            </JVAccordionSummary>
                            <JVAccordionDetails className={"jr-mAccordion-body mui"}>
                                <JVTypography>
                                    The content of Accordions is mounted by default even if the accordion is not expanded.
                                </JVTypography>
                            </JVAccordionDetails>
                        </JVAccordion>
                        <JVAccordion size="small">
                            <JVAccordionSummary
                                size="small"
                                aria-controls="labels2-content"
                                id="labels2"
                            >
                                <JVTypography>Parameters</JVTypography>
                            </JVAccordionSummary>
                            <JVAccordionDetails>
                                <JVTypography>
                                    An accordion is a lightweight container that may either stand alone or be connected to a larger surface, such as a card.
                                </JVTypography>
                            </JVAccordionDetails>
                        </JVAccordion>
                        <JVAccordion size="small">
                            <JVAccordionSummary
                                size="small"
                                aria-controls="labels2-content"
                                id="labels2"
                            >
                                <JVTypography>Notifications</JVTypography>
                            </JVAccordionSummary>
                            <JVAccordionDetails>
                                <JVTypography>
                                    An accordion is a lightweight container that may either stand alone or be connected to a larger surface, such as a card.
                                </JVTypography>
                            </JVAccordionDetails>
                        </JVAccordion>
                        <JVAccordion size="small">
                            <JVAccordionSummary
                                size="small"
                                aria-controls="labels2-content"
                                id="labels2"
                            >
                                <JVTypography>Output</JVTypography>
                            </JVAccordionSummary>
                            <JVAccordionDetails>
                                <JVTypography>
                                    An accordion is a lightweight container that may either stand alone or be connected to a larger surface, such as a card.
                                </JVTypography>
                            </JVAccordionDetails>
                        </JVAccordion>

                    </JVAccordionFull>
                </div>
            </JVDrawer>
            </>
    )
}