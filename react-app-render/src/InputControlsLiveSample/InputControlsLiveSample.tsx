import "@jaspersoft/jv-ui-components/material-ui/JVMuiClassNameSetup.ts";
import PreviewCode from "../InputControlTypes/PreviewCode.tsx";


const reportUri = "/public/viz/Adhoc/Ad_Hoc_View_All_filters_Report";

const InputControlsLiveSample = ({vContainer}: any) => {
    return (
        <PreviewCode uri={reportUri}
                     vContainer={vContainer}
                     refId="basic-controls-section"/>
    );
}

export default InputControlsLiveSample;
