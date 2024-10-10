import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup.ts";
import {
    renderInputControls,
} from "@jaspersoft/jv-input-controls";
import {useEffect} from "react";


const reportUri = "/public/viz/Adhoc/Ad_Hoc_View_All_filters_Report";

const InputControlsLiveSample = ({vContainer}: any) => {
    useEffect(() => {
        renderInputControls(
            vContainer.v,
            reportUri,
            document.getElementById("basic-controls-section") as HTMLElement,
            {
                success: () => {
                    console.log("Basic controls rendered successfully");
                },
                error: (error) => {
                    console.log("Error when rendering the Basic controls: ", error);
                },
                config: {
                    singleValueDatetime: {
                        type: "default", // even if it isn't provided, this will be the default component
                    },
                    singleValueTime: {
                        type: "default", // even if it isn't provided, this will be the default component
                    },
                    singleValueDate: {
                        type: "default", // even if it isn't provided, this will be the default component
                    },
                },
                params: {
                    column_boolean_1: ["false"],
                    column_string_1: [
                        "This is a predefined text different than the stored in the server",
                    ],
                    id_1: ["99"],
                    column_date_1: ["2009-03-02"],
                    column_timestamp_1: ["2014-03-02T10:00:00"],
                    column_time_1: ["14:00:00"],
                    ProductFamily: ["Drink", "Food"],
                },
                events: {
                    change: (ics, validationResult) => {
                        console.log("validationResult => ", validationResult);
                        console.log("ics => ", ics);
                    },
                },
            },
        );
    }, [vContainer])
    return (
        <div id="controls-demo-page">
            <div className="jv-lColumns">
                <div className="jv-lColumns-column jr-uWidth-300px">
                    <div className="jv-mPanel mui">
                        <div className="jv-mPanel-header jv-uPadding-lr-04 mui">
                            <h4 className="jr-mText jr-mPanel-header-title mui">
                                Filter Report
                            </h4>
                        </div>

                        <div className="jv-mPanel-body jv-uPadding-04 mui">
                            <div id="basic-controls-section">
                                Is Loading...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InputControlsLiveSample;
