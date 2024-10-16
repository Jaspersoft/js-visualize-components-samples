import schedulerUIConfig from "../constants/jv_sheduler_config";
import {
    Scheduler
} from "@jaspersoft/jv-scheduler";
import { JVDrawer,JVCheckboxGroup, JVCheckbox  } from "@jaspersoft/jv-ui-components";
import {useEffect, useState} from "react";


const createConfiguration = (showStepper: any, showTabs: any, showScheduleFields: any) => {
    const newScheduleConfig = {...schedulerUIConfig};
    if(newScheduleConfig.stepper) newScheduleConfig.stepper.show = showStepper;

    const tabs = []
    for (const key in showTabs) {
        if (showTabs[key]) {
            tabs.push(key);
        }
    }
    if(newScheduleConfig.tabs) newScheduleConfig.tabs.tabsOrder = tabs;

   if( newScheduleConfig.tabs && newScheduleConfig.tabs.tabsData && newScheduleConfig.tabs.tabsData.schedule && newScheduleConfig.tabs.tabsData.schedule.label) {
       newScheduleConfig.tabs.tabsData.schedule.label && (newScheduleConfig.tabs.tabsData.schedule.label.show = showScheduleFields.label)
       newScheduleConfig.tabs.tabsData.schedule.description && (newScheduleConfig.tabs.tabsData.schedule.description.show = showScheduleFields.description)
       newScheduleConfig.tabs.tabsData.schedule.recurrenceInterval && (newScheduleConfig.tabs.tabsData.schedule.recurrenceInterval.show = showScheduleFields.recurrenceInterval)
       newScheduleConfig.tabs.tabsData.schedule.recurrenceIntervalUnit && (newScheduleConfig.tabs.tabsData.schedule.recurrenceIntervalUnit.show = showScheduleFields.recurrenceIntervalUnit)
       newScheduleConfig.tabs.tabsData.schedule.startTime && (newScheduleConfig.tabs.tabsData.schedule.startTime.show = showScheduleFields.startTime)
   }


    return newScheduleConfig;

}

export const SchedulerLiveSample = ({vContainer, uri}: any) => {

    const [schedulerConfig, setSchedulerConfig] = useState(schedulerUIConfig)
    const [showStepper, setShowStepper] = useState(true);
    const [key, setKey] = useState(0);
    const [showTabs, setShowTabs] = useState({
        schedule: true,
        parameters: true,
        notifications: true,
        output: true
    });

    const [showScheduleFields, setShowScheduleFields] = useState({
        label: true,
        description: true,
        recurrenceInterval: true,
        recurrenceIntervalUnit: true,
        startTime: true
    });


    const handleStepperChange = (event: any) => {
        setShowStepper(event.target.checked)
    }

    const handleShowTabChange = (event: any) => {
        setShowTabs({...showTabs, [event.target.name]: event.target.checked})
    }
    const handleShowScheduleFieldsChange = (event: any) => {
        setShowScheduleFields({...showScheduleFields, [event.target.name]: event.target.checked})
    }

    useEffect(() => {
        setSchedulerConfig(createConfiguration(showStepper, showTabs, showScheduleFields))
        setKey(Math.random())
    }, [showStepper, showTabs, showScheduleFields])

    return (
        <>
            <Scheduler key={key} v={vContainer.v} config={schedulerConfig} uri={uri} />
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
                                    CheckboxProps={{checked: showTabs.schedule, name: "schedule", onChange: handleShowTabChange}}/>
                        <JVCheckbox label="Parameters"
                                    CheckboxProps={{checked: showTabs.parameters, name: "parameters", onChange: handleShowTabChange}}/>
                        <JVCheckbox label="Notifications"
                                    CheckboxProps={{checked: showTabs.notifications, name: "notifications", onChange: handleShowTabChange}}/>
                        <JVCheckbox label="Output"
                                    CheckboxProps={{checked: showTabs.output, name: "output", onChange: handleShowTabChange}}/>

                    </JVCheckboxGroup>

                    <JVCheckboxGroup size="large" title="Show schedules fields">
                        <JVCheckbox label="label"
                                    CheckboxProps={{checked: showScheduleFields.label, name: "label", onChange: handleShowScheduleFieldsChange}}/>
                        <JVCheckbox label="description"
                                    CheckboxProps={{checked: showScheduleFields.description, name: "description", onChange: handleShowScheduleFieldsChange}}/>
                        <JVCheckbox label="recurrenceInterval"
                                    CheckboxProps={{checked: showScheduleFields.recurrenceInterval, name: "recurrenceInterval", onChange: handleShowScheduleFieldsChange}}/>
                        <JVCheckbox label="recurrenceIntervalUnit"
                                    CheckboxProps={{checked: showScheduleFields.recurrenceIntervalUnit, name: "recurrenceIntervalUnit", onChange: handleShowScheduleFieldsChange}}/>
                        <JVCheckbox label="startTime"
                                    CheckboxProps={{checked: showScheduleFields.startTime, name: "startTime", onChange: handleShowScheduleFieldsChange}}/>

                    </JVCheckboxGroup>

                </div>
            </JVDrawer>
            </>
    )
}