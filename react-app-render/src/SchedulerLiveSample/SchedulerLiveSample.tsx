import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-tomorrow_night";
import schedulerUIConfig from "../constants/jv_sheduler_config";
import {
    Scheduler
} from "@jaspersoft/jv-scheduler";
import { JVDrawer,JVCheckboxGroup, JVCheckbox, JVTypography, JVButton, JVConfirmationDialog  } from "@jaspersoft/jv-ui-components";
import {useEffect, useState} from "react";
import {aceEditorModes} from "../constants/liveSamplesConstants";


const createConfiguration = (showStepper: any, showTabs: any, showScheduleFields: any, showOutputFields: any, showNotificationsFields: any) => {
    const newScheduleConfig = {...schedulerUIConfig};
    if(newScheduleConfig.stepper) newScheduleConfig.stepper.show = showStepper;

    const tabs = []
    for (const key in showTabs) {
        if (showTabs[key]) {
            tabs.push(key);
        }
    }
    if(newScheduleConfig.tabs) newScheduleConfig.tabs.tabsOrder = tabs;

   if( newScheduleConfig.tabs && newScheduleConfig.tabs.tabsData && newScheduleConfig.tabs.tabsData.schedule) {
       newScheduleConfig.tabs.tabsData.schedule.label && (newScheduleConfig.tabs.tabsData.schedule.label.show = showScheduleFields.label)
       newScheduleConfig.tabs.tabsData.schedule.description && (newScheduleConfig.tabs.tabsData.schedule.description.show = showScheduleFields.description)
       newScheduleConfig.tabs.tabsData.schedule.recurrenceInterval && (newScheduleConfig.tabs.tabsData.schedule.recurrenceInterval.show = showScheduleFields.recurrenceInterval)
       newScheduleConfig.tabs.tabsData.schedule.recurrenceIntervalUnit && (newScheduleConfig.tabs.tabsData.schedule.recurrenceIntervalUnit.show = showScheduleFields.recurrenceIntervalUnit)
       newScheduleConfig.tabs.tabsData.schedule.startTime && (newScheduleConfig.tabs.tabsData.schedule.startTime.show = showScheduleFields.startTime)
   }

    if( newScheduleConfig.tabs && newScheduleConfig.tabs.tabsData && newScheduleConfig.tabs.tabsData.output ) {
        newScheduleConfig.tabs.tabsData.output.baseOutputFilename && (newScheduleConfig.tabs.tabsData.output.baseOutputFilename.show = showOutputFields.baseOutputFilename)
        newScheduleConfig.tabs.tabsData.output.outputDescription && (newScheduleConfig.tabs.tabsData.output.outputDescription.show = showOutputFields.outputDescription)
        newScheduleConfig.tabs.tabsData.output.outputFormat && (newScheduleConfig.tabs.tabsData.output.outputFormat.show = showOutputFields.outputFormat)
        newScheduleConfig.tabs.tabsData.output.outputTimeZone && (newScheduleConfig.tabs.tabsData.output.outputTimeZone.show = showOutputFields.outputTimeZone)
    }

    if( newScheduleConfig.tabs && newScheduleConfig.tabs.tabsData && newScheduleConfig.tabs.tabsData.notifications ) {
        newScheduleConfig.tabs.tabsData.notifications.address && (newScheduleConfig.tabs.tabsData.notifications.address.show = showNotificationsFields.address)
        newScheduleConfig.tabs.tabsData.notifications.subject && (newScheduleConfig.tabs.tabsData.notifications.subject.show = showNotificationsFields.subject)
        newScheduleConfig.tabs.tabsData.notifications.messageText && (newScheduleConfig.tabs.tabsData.notifications.messageText.show = showNotificationsFields.messageText)
        newScheduleConfig.tabs.tabsData.notifications.resultSendType && (newScheduleConfig.tabs.tabsData.notifications.resultSendType.show = showNotificationsFields.resultSendType)
    }

    console.log(newScheduleConfig);
    return newScheduleConfig;

}


export const SchedulerLiveSample = ({vContainer, uri}: any) => {

    const [schedulerConfig, setSchedulerConfig] = useState(schedulerUIConfig)
    const [dialogOpen, setDialogOpen] = useState(false)
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


    const [showOutputFields, setShowOutputFields] = useState({
        baseOutputFilename: true,
        outputDescription: true,
        outputFormat: true,
        outputTimeZone: true
    });

    const [showNotificationsFields, setShowNotificationsFields] = useState({
        address: true,
        subject: true,
        messageText: true,
        resultSendType: true
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

    const handleShowOutputFieldsChange = (event: any) => {
        setShowOutputFields({...showOutputFields, [event.target.name]: event.target.checked})
    }

    const handleShowNotificationsFieldsChange = (event: any) => {
        setShowNotificationsFields({...showNotificationsFields, [event.target.name]: event.target.checked})
    }

    const handleDialogClose = () => {
        setDialogOpen(!dialogOpen)
    }
    useEffect(() => {
        setSchedulerConfig(createConfiguration(showStepper, showTabs, showScheduleFields, showOutputFields, showNotificationsFields))
        setKey(Math.random())
    }, [showStepper, showTabs, showScheduleFields, showOutputFields, showNotificationsFields])

    const PreviewConfiguration = () => {
        return (<div className="code-container">
                        <pre className="code-snippet">
                             <AceEditor
                                 mode={aceEditorModes["json"]}
                                 name="JS"
                                 theme="tomorrow_night"
                                 value={JSON.stringify(schedulerConfig, null, 2)}
                                 width="100%"
                                 wrapEnabled
                                 readOnly
                                 showGutter={false}
                                 showPrintMargin={false}
                                 setOptions={{useWorker: false}}
                             />
                        </pre>
        </div>)
    }


    const handleCopyCode = async () => {
        const code = JSON.stringify(schedulerConfig, null, 2);
        try {
            await navigator.clipboard.writeText(code);
            const copyCodeEmbedDrawer = document.getElementById('copyCodeEmbedDrawer');
            if (copyCodeEmbedDrawer) {
                copyCodeEmbedDrawer.style.display = 'block';
                setTimeout(() => {
                    copyCodeEmbedDrawer.style.display = 'none';
                }, 2000);
            }
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }

    const DialogActionsComponent = (
        <>
            <div>
                <JVButton
                    disableElevation
                    size="large"
                    variant="contained"
                    color="primary"
                    onClick={handleCopyCode}
                >
                    Copy Code
                </JVButton>
                <div
                    id="copyCodeEmbedDrawer"
                    className="jr-mMessage jr-mMessageSuccess jr-mMessageTopLeft jr"
                    style={{
                        position: 'absolute',
                        bottom: '40px',
                        right: '472px',
                        display: 'none',
                    }}
                >
                    <div className="jr-mMessage-iconContainer jr" data-name="copyCode-icon">
                        <span className="jr-mMessage-icon jr-mIcon jr-mIconXLarge jr-checkmarkRound jr" />
                    </div>
                    <div className="jr-mMessage-textContainer jr" data-name="copyCode-text">
                        <p className="jr-mMessage-title jr">
                            Copied!
                        </p>
                    </div>
                </div>
            </div>
            <JVButton
                disableElevation
                size="large"
                variant="contained"
                onClick={() =>setDialogOpen(false)}
            >
                Cancel
            </JVButton>
        </>
    )

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
                    style={{ height: "100%", width: "500px", padding: "24px" }}
                >
                    <div style={{display: "flex", justifyContent: "space-between", paddingBottom: "16px"}}>
                        <JVTypography className="jv-mDrawer-header-title" variant="h2" style={{
                            fontSize: "24px",
                            fontWeight: 600,
                            lineHeight: "32px",
                            letterSpacing: 0,
                        }}>
                            Configuration Options
                        </JVTypography>
                        <JVButton size="large"
                                  color="primary"
                                  variant="contained"
                                  onClick={() => setDialogOpen(true)}
                        >
                            Code
                        </JVButton>
                    </div>


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

                    { showTabs.schedule && (<JVCheckboxGroup size="large" title="Show schedules fields">
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
                    </JVCheckboxGroup>)}

                    { showTabs.notifications && (<JVCheckboxGroup size="large" title="Show notifications fields">
                        <JVCheckbox label="address"
                                    CheckboxProps={{checked: showNotificationsFields.address, name: "address", onChange: handleShowNotificationsFieldsChange}}/>
                        <JVCheckbox label="subject"
                                    CheckboxProps={{checked: showNotificationsFields.subject, name: "subject", onChange: handleShowNotificationsFieldsChange}}/>
                        <JVCheckbox label="messageText"
                                    CheckboxProps={{checked: showNotificationsFields.messageText, name: "messageText", onChange: handleShowNotificationsFieldsChange}}/>
                        <JVCheckbox label="resultSendType"
                                    CheckboxProps={{checked: showNotificationsFields.resultSendType, name: "resultSendType", onChange: handleShowNotificationsFieldsChange}}/>

                    </JVCheckboxGroup>)}

                    { showTabs.output && (<JVCheckboxGroup size="large" title="Show output fields">
                        <JVCheckbox label="baseOutputFilename"
                                    CheckboxProps={{checked: showOutputFields.baseOutputFilename, name: "baseOutputFilename", onChange: handleShowOutputFieldsChange}}/>
                        <JVCheckbox label="outputDescription"
                                    CheckboxProps={{checked: showOutputFields.outputDescription, name: "outputDescription", onChange: handleShowOutputFieldsChange}}/>
                        <JVCheckbox label="outputFormat"
                                    CheckboxProps={{checked: showOutputFields.outputFormat, name: "outputFormat", onChange: handleShowOutputFieldsChange}}/>
                        <JVCheckbox label="outputTimeZone"
                                    CheckboxProps={{checked: showOutputFields.outputTimeZone, name: "outputTimeZone", onChange: handleShowOutputFieldsChange}}/>

                    </JVCheckboxGroup>)}
                </div>
            </JVDrawer>
            <JVConfirmationDialog
                open={dialogOpen}
                type={"default"}
                scroll="paper"
                PaperProps={{
                    style: {
                        width: '600px'
                    },
                }}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                onClose={handleDialogClose}
                dialogTitle="Code"
                DialogTitleTypographyProps={{
                    variant: "h2"
                }}
                DialogContentComponent={<PreviewConfiguration />}
                DialogActionsComponent={DialogActionsComponent}
            />
            </>
    )
}