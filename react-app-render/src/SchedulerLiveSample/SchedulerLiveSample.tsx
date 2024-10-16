import schedulerUIConfig from "../constants/jv_sheduler_config";
import {
    Scheduler
} from "@jaspersoft/jv-scheduler";
import { JVDrawer,JVCheckboxGroup, JVCheckbox  } from "@jaspersoft/jv-ui-components";
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
                    <JVCheckboxGroup size="large" title="Show stepper">
                        <JVCheckbox label="Show stepper"
                                    CheckboxProps={{checked: showStepper, name: "stepper", onChange: handleStepperChange}}/>
                    </JVCheckboxGroup>

                    <JVCheckboxGroup size="large" title="Show tabs">
                        <JVCheckbox label="Schedule"
                                    CheckboxProps={{checked: showStepper, name: "stepper", onChange: handleStepperChange}}/>
                        <JVCheckbox label="Parameters"
                                    CheckboxProps={{checked: showStepper, name: "stepper", onChange: handleStepperChange}}/>
                        <JVCheckbox label="Notifications"
                                    CheckboxProps={{checked: showStepper, name: "stepper", onChange: handleStepperChange}}/>
                        <JVCheckbox label="Output"
                                    CheckboxProps={{checked: showStepper, name: "stepper", onChange: handleStepperChange}}/>

                    </JVCheckboxGroup>

                </div>
            </JVDrawer>
            </>
    )
}